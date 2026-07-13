import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  // CORS Headers for API requests
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const { name, email, phone, company, serviceInterest, budgetRange, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: "Missing required fields: name, email, and message are mandatory." 
    });
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

  // 2. Email Notification to nexoraempire0@gmail.com
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
      to: "nexoraempire0@gmail.com",
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

  // Race promises with a 4.5 seconds timeout limit to preserve instant UX for users
  const timeoutPromise = new Promise((resolve) => setTimeout(() => resolve('timeout'), 4500));

  const result = await Promise.race([
    Promise.all([sheetsPromise, emailPromise]),
    timeoutPromise
  ]);

  if (result === 'timeout') {
    return res.status(200).json({
      success: true,
      info: "queued"
    });
  }

  const [sheetsSuccess, emailSuccess] = result as [boolean, boolean];
  return res.status(200).json({
    success: true,
    sheetsWebhook: sheetsSuccess,
    emailSent: emailSuccess
  });
}
