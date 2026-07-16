import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, serviceInterest, budgetRange, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, and message are mandatory." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const payload = {
      timestamp,
      name,
      email,
      phone: phone || "Not Provided",
      company: company || "Not Provided",
      serviceInterest: serviceInterest || "Not Provided",
      budgetRange: budgetRange || "Not Provided",
      message,
      source: "Contact Us Form Submission"
    };

    // 1. Google Sheets Webhook Integration
    let sheetsWebhookSuccess = false;
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        const response = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        if (response.ok) {
          sheetsWebhookSuccess = true;
        }
      } catch (err) {
        console.error("Error connecting to Google Sheets Webhook:", err);
      }
    }

    // 2. Email Notification to nexoraempirehq@gmail.com
    let emailSent = false;
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
        from: `"Nexora CRM" <${process.env.SMTP_USER}>`,
        to: "nexoraempirehq@gmail.com",
        subject: `🔥 [NEW CLIENT LEAD] Nexora Contact: ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; color: #1e293b;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h2 style="color: #4f46e5; margin: 0 0 5px 0; font-size: 24px; font-weight: 800;">Nexora Empire</h2>
              <p style="color: #64748b; margin: 0; font-size: 13px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em;">Client Acquisition Portal</p>
            </div>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; font-weight: bold; color: #475569; width: 140px;">Client Name:</td><td style="padding: 6px 0; color: #0f172a;">${name}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #475569;">Email Address:</td><td style="padding: 6px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #475569;">Phone Number:</td><td style="padding: 6px 0; color: #0f172a;">${phone || "Not Provided"}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #475569;">Company Name:</td><td style="padding: 6px 0; color: #0f172a;">${company || "Not Provided"}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #475569;">Service Desired:</td><td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${serviceInterest || "Not Provided"}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #475569;">Budget Range:</td><td style="padding: 6px 0; color: #0f172a;">${budgetRange || "Not Provided"}</td></tr>
            </table>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
            <h4 style="margin: 0 0 8px 0; color: #475569;">Project Description / Message:</h4>
            <p style="margin: 0; line-height: 1.6; color: #334155; background-color: #f8fafc; padding: 12px; border-radius: 8px; font-style: italic;">${message}</p>
          </div>
        `
      });
      emailSent = true;
    } catch (err) {
      console.error("Error sending notification email:", err);
    }

    return NextResponse.json({
      success: true,
      sheetsWebhook: sheetsWebhookSuccess,
      emailSent: emailSent
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
