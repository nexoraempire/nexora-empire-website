import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use JSON middleware to parse incoming request payloads
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Serve static robots.txt for search engines
  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.send(
      `User-agent: *\nAllow: /\n\nSitemap: https://nexoraempire.com/sitemap.xml`
    );
  });

  // Serve dynamic sitemap.xml listing all routed views
  app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://nexoraempire.com/</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://nexoraempire.com/about-us</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nexoraempire.com/portfolio</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://nexoraempire.com/pricing</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nexoraempire.com/training-internship</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nexoraempire.com/contact</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nexoraempire.com/web-dev</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nexoraempire.com/mobile-dev</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nexoraempire.com/branding-design</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://nexoraempire.com/seo-growth</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nexoraempire.com/ai-video</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nexoraempire.com/social-media-management</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;
    res.send(sitemap);
  });

  // Handle student applications
  app.post("/api/apply", async (req, res) => {
    const { name, email, phone, country, program, plan, message } = req.body;

    if (!name || !email || !phone || !country || !program || !plan) {
      return res.status(400).json({ 
        success: false, 
        error: "Missing required fields: name, email, phone, country, program, plan are mandatory." 
      });
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

    console.log("Received incoming application payload:", payload);

    // 1. Google Sheets / CRM Webhook Integration
    let sheetsWebhookSuccess = false;
    let sheetsErrorMsg = "";

    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        console.log(`Forwarding payload to Google Sheets Webhook URL: ${process.env.GOOGLE_SHEETS_WEBHOOK_URL}`);
        const response = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        
        if (response.ok) {
          sheetsWebhookSuccess = true;
          console.log("Successfully posted application row to Google Sheets webhook.");
        } else {
          sheetsErrorMsg = `HTTP Error ${response.status}`;
          console.error(`Google Sheets webhook failed with status: ${response.status}`);
        }
      } catch (err: any) {
        sheetsErrorMsg = err.message || String(err);
        console.error("Error connecting to Google Sheets Webhook:", err);
      }
    } else {
      console.log("Note: GOOGLE_SHEETS_WEBHOOK_URL is not configured in .env. Skipping webhook dispatch.");
    }

    // 2. Email Notification to nexoraempire0@gmail.com
    let emailSent = false;
    let emailPreviewUrl = "";
    let emailErrorMsg = "";

    try {
      let transporter;

      // Check if real SMTP credentials are set
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        console.log("Configuring secure SMTP transporter via environment credentials...");
        transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: parseInt(process.env.SMTP_PORT || "465"),
          secure: process.env.SMTP_SECURE !== "false",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        });
      } else {
        console.log("No SMTP credentials found in environment. Generating a temporary Ethereal test SMTP service...");
        const testAccount = await nodemailer.createTestAccount();
        transporter = nodemailer.createTransport({
          host: testAccount.smtp.host,
          port: testAccount.smtp.port,
          secure: testAccount.smtp.secure,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          }
        });
      }

      const mailOptions = {
        from: process.env.SMTP_USER 
          ? `"Nexora Admissions" <${process.env.SMTP_USER}>` 
          : '"Nexora Admissions (Test Service)" <admissions-test@nexoraempire.com>',
        to: "nexoraempire0@gmail.com",
        subject: `New Nexora Academy Application: ${name} (${program})`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; color: #1e293b;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h2 style="color: #6366f1; margin: 0 0 5px 0; font-size: 24px; font-weight: 800;">Nexora Academy</h2>
              <p style="color: #64748b; margin: 0; font-size: 13px; text-transform: uppercase; tracking-wider; font-weight: 600;">Admissions Portal</p>
            </div>
            
            <div style="border-top: 4px solid #6366f1; background-color: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
              <h3 style="margin-top: 0; color: #0f172a; font-size: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">New Student Application</h3>
              <p style="font-size: 14px; line-height: 1.5; color: #334155;">A new user has submitted a registration form on the Academy and Training / Internship portal.</p>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; font-size: 13px; color: #64748b; width: 35%;">FULL NAME</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #0f172a; font-weight: 700;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; font-size: 13px; color: #64748b;">EMAIL ADDRESS</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #0f172a;"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none; font-weight: 600;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; font-size: 13px; color: #64748b;">PHONE NUMBER</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #0f172a; font-family: monospace;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; font-size: 13px; color: #64748b;">COUNTRY</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #0f172a; font-weight: 700;">${country}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; font-size: 13px; color: #64748b;">APPLIED TRACK</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #4338ca; font-weight: 700;">${program}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; font-size: 13px; color: #64748b;">ENROLLMENT PLAN</td>
                  <td style="padding: 8px 0; font-size: 13px; color: #0f172a;"><span style="background-color: #e0e7ff; color: #4338ca; padding: 3px 8px; border-radius: 6px; font-weight: 700;">${plan}</span></td>
                </tr>
              </table>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin: 0 0 10px 0; color: #475569; font-size: 12px; font-weight: bold; text-transform: uppercase;">Cover Message</h4>
              <div style="background-color: #fafafa; border: 1px solid #f1f5f9; padding: 15px; border-radius: 8px; font-size: 13.5px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message || "No custom message or cover letter provided."}</div>
            </div>

            <div style="border-top: 1px solid #f1f5f9; padding-top: 15px; text-align: center; font-size: 11px; color: #94a3b8; line-height: 1.5;">
              <p style="margin: 0;">This is an automated communication dispatched directly from your Nexora Web App.</p>
              <p style="margin: 3px 0 0 0;">Received at: ${new Date(timestamp).toLocaleString()}</p>
            </div>
          </div>
        `
      };

      const info = await transporter.sendMail(mailOptions);
      emailSent = true;
      console.log(`Email successfully dispatched. MessageId: ${info.messageId}`);

      // If Ethereal test SMTP was used, obtain the visual preview link
      if (!process.env.SMTP_USER) {
        emailPreviewUrl = nodemailer.getTestMessageUrl(info) || "";
        console.log(`Ethereal Test Inbox Preview URL: ${emailPreviewUrl}`);
      }
    } catch (err: any) {
      emailErrorMsg = err.message || String(err);
      console.error("Error during email dispatch:", err);
    }

    return res.status(200).json({
      success: true,
      timestamp,
      sheetsWebhookSuccess,
      sheetsWebhookConfigured: !!process.env.GOOGLE_SHEETS_WEBHOOK_URL,
      sheetsError: sheetsErrorMsg,
      emailSent,
      emailConfigured: !!process.env.SMTP_USER,
      emailPreviewUrl,
      emailError: emailErrorMsg
    });
  });

  // Vite middleware for assets/SPA in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development server middleware loaded.");
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log("Production static build routing loaded.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express Backend + Vite Server booting on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Critical server startup crash:", err);
});
