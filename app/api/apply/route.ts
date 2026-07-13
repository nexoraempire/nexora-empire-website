import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, country, program, plan, message } = body;

    if (!name || !email || !phone || !country || !program || !plan) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, phone, country, program, plan are mandatory." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const payload = {
      timestamp,
      name,
      email,
      phone,
      country,
      program,
      plan,
      message: message || "",
      source: "Training & Internship Application"
    };

    // 1. Define external integrations as promises to run in parallel
    const sheetsPromise = (async () => {
      if (!process.env.GOOGLE_SHEETS_WEBHOOK_URL) return false;
      try {
        const response = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        return response.ok;
      } catch (err) {
        console.error("Error connecting to Google Sheets Webhook:", err);
        return false;
      }
    })();

    const emailPromise = (async () => {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: parseInt(process.env.SMTP_PORT || "465"),
          secure: process.env.SMTP_SECURE !== "false",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        });

        await transporter.sendMail({
          from: `"Nexora Admissions" <${process.env.SMTP_USER}>`,
          to: "nexoraempire0@gmail.com",
          subject: `New Nexora Academy Application: ${name} (${program})`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; color: #1e293b;">
              <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: #6366f1; margin: 0 0 5px 0; font-size: 24px; font-weight: 800;">Nexora Academy</h2>
                <p style="color: #64748b; margin: 0; font-size: 13px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em;">Admissions Portal</p>
              </div>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 6px 0; font-weight: bold; color: #475569; width: 140px;">Applicant Name:</td><td style="padding: 6px 0; color: #0f172a;">${name}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold; color: #475569;">Email Address:</td><td style="padding: 6px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold; color: #475569;">Phone Number:</td><td style="padding: 6px 0; color: #0f172a;">${phone}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold; color: #475569;">Country:</td><td style="padding: 6px 0; color: #0f172a;">${country}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold; color: #475569;">Program Track:</td><td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${program}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold; color: #475569;">Enrollment Plan:</td><td style="padding: 6px 0; color: #0f172a;">${plan}</td></tr>
              </table>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
              <h4 style="margin: 0 0 8px 0; color: #475569;">Cover Message / Motivation:</h4>
              <p style="margin: 0; line-height: 1.6; color: #334155; background-color: #f8fafc; padding: 12px; border-radius: 8px; font-style: italic;">${message || "No motivation message provided by applicant."}</p>
            </div>
          `
        });
        return true;
      } catch (err) {
        console.error("Error sending notification email:", err);
        return false;
      }
    })();

    // 2. Race promises with a 4.5 seconds timeout limit
    const timeoutPromise = new Promise((resolve) => setTimeout(() => resolve('timeout'), 4500));

    const result = await Promise.race([
      Promise.all([sheetsPromise, emailPromise]),
      timeoutPromise
    ]);

    if (result === 'timeout') {
      console.log("External dispatches taking too long. Responding to client early to preserve premium UX.");
      return NextResponse.json({
        success: true,
        info: "queued"
      });
    }

    const [sheetsSuccess, emailSuccess] = result as [boolean, boolean];
    return NextResponse.json({
      success: true,
      sheetsWebhook: sheetsSuccess,
      emailSent: emailSuccess
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
