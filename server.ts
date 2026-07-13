import express from "express";
import path from "path";
import fs from "fs/promises";
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

    const titleMap: Record<string, string> = {
      "": "Nexora Empire | Best Software Development & SEO Company in Cameroon",
      "/about-us": "About Nexora Empire | Professional Software Company in Cameroon",
      "/portfolio": "Software Development & SEO Portfolio Cameroon | Nexora Empire",
      "/pricing": "Web Development & SEO Pricing Cameroon | Nexora Empire",
      "/training-internship": "Best Software Engineering Training & Certified Internships in Cameroon",
      "/contact": "Nexora Empire | Best Software Development & SEO Company in Cameroon",
      "/web-dev": "Best Web Development Company in Cameroon | Website Developer Buea",
      "/mobile-dev": "Professional Mobile App Development Company in Cameroon",
      "/branding-design": "Professional Graphic Design & Logo Branding Agency Cameroon",
      "/seo-growth": "Best SEO Agency in Cameroon | Professional SEO Services Buea",
      "/ai-video": "AI Video Production & Custom AI Automation Agency Cameroon",
      "/social-media-management": "Social Media Management & Digital Marketing Company Cameroon"
    };

    const descMap: Record<string, string> = {
      "": "Nexora Empire is the best software engineering company in Buea and the premier software development & SEO agency in Cameroon. We build premium enterprise web apps, mobile apps, and custom AI systems.",
      "/about-us": "Learn about Nexora Empire, a professional software company in Cameroon and the best software engineering company in Buea. Meet our expert developers and SEO growth specialists.",
      "/portfolio": "Explore our enterprise software engineering, responsive website development, custom mobile apps, and successful SEO campaigns across Cameroon and globally.",
      "/pricing": "Affordable pricing plans for custom website development, mobile application engineering, professional SEO packages, and visual brand identity designs in Cameroon.",
      "/training-internship": "Kickstart your tech career at Nexora Academy. Join practical software engineering training courses in Cameroon with guaranteed certified internship options.",
      "/contact": "Hire the best website developers, SEO experts, and custom software company in Cameroon. Reach out to our Buea Town office or schedule a call.",
      "/web-dev": "Looking for the best web development company in Cameroon? We build high-performance React & Next.js web applications, e-commerce stores, and custom SaaS systems.",
      "/mobile-dev": "Top-rated mobile app development company in Cameroon. We engineer cross-platform React Native & Expo iOS and Android mobile apps for startups and enterprises.",
      "/branding-design": "Establish your brand authority. Professional corporate visual identity, custom logo design systems, brochures, and brand styling guidelines in Cameroon.",
      "/seo-growth": "Rank #1 on Google. Nexora Empire is the best SEO agency in Cameroon. We offer expert technical audits, semantic keyword mapping, and local SEO services.",
      "/ai-video": "Transform your business with cutting-edge AI video production, realistic custom digital avatars, synthetic marketing campaigns, and AI integration.",
      "/social-media-management": "Sustain organic customer growth. We handle professional social media management, brand campaigns, content calendars, and digital marketing."
    };

    const keywordsMap: Record<string, string> = {
      "": "best software engineering company in Buea, software development company Cameroon, software company Buea, website developers Buea, SEO company Cameroon, digital agency Buea",
      "/about-us": "software company, technology partner, software engineers, digital innovation, Nexora crew, technology consulting, digital transformation, software engineering company Buea",
      "/portfolio": "portfolio, case studies, software development portfolio, website showcase, mobile app design, brand identities, custom solutions, React developers, web portfolio",
      "/pricing": "pricing, software development cost, web development plans, mobile app pricing, branding budget, SEO services cost, app cost Cameroon",
      "/training-internship": "software training, coding academy, tech internship, learn web development, mobile app course, Cameroon software training, Nexora Academy, learn tech skills Buea",
      "/contact": "contact Nexora Empire, hire software developers, software company office hours, Buea Town Cameroon software, schedule consultation, phone number Nexora",
      "/web-dev": "web development company, website development services, custom web applications, full-stack development, SaaS development, enterprise web development, Next.js agency, React developers",
      "/mobile-dev": "mobile app development company, iOS developers, Android app development, cross-platform app, React Native development, mobile application agency, Expo app developers",
      "/branding-design": "branding agency, graphic design agency, visual identity, corporate brand design, logo creator, creative director, style guidelines, typography design",
      "/seo-growth": "SEO agency, technical SEO company, organic growth marketing, search engine optimization, local SEO, rank on Google, schema structured data, Google search specialist",
      "/ai-video": "AI video production, generative AI video, synthetic media company, interactive video ads, AI voice generation, digital marketing, AI automation company",
      "/social-media-management": "social media management, social media agency, brand growth online, content calendar creation, organic reach campaigns, community management"
    };

    app.get('*', async (req, res) => {
      try {
        const filePath = path.join(distPath, 'index.html');
        let html = await fs.readFile(filePath, 'utf-8');

        // Extract route path without trailing slash
        const route = req.path.replace(/\/$/, "");

        const validRoutes = [
          "", "/about-us", "/portfolio", "/pricing", "/training-internship", 
          "/contact", "/web-dev", "/mobile-dev", "/branding-design", 
          "/seo-growth", "/ai-video", "/social-media-management"
        ];

        const isRouteValid = validRoutes.includes(route);
        if (!isRouteValid) {
          res.status(404);
        }

        const activeTitle = isRouteValid 
          ? (titleMap[route] || titleMap[""])
          : "Page Not Found | Nexora Empire";
        const activeDesc = isRouteValid 
          ? (descMap[route] || descMap[""])
          : "The requested page was not found in our digital empire.";
        const activeKeywords = isRouteValid 
          ? (keywordsMap[route] || keywordsMap[""])
          : "404, page not found, coordinate lost, Nexora Empire";
        const activeUrl = `https://nexoraempire.com${route}`;

        // Build precise JSON-LD structured schemas representing the page context
        let schemaObject: any = {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Nexora Empire",
          "url": "https://nexoraempire.com",
          "logo": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500",
          "description": activeDesc,
          "telephone": "+237 677 079 559",
          "email": "contact@nexoraempire.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Before slaughterhouse, Buea Town",
            "addressLocality": "Buea",
            "addressRegion": "South West",
            "addressCountry": "CM"
          }
        };

        if (route === "/training-internship") {
          schemaObject = {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Nexora Academy",
            "url": "https://nexoraempire.com/training-internship",
            "description": activeDesc,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Before slaughterhouse, Buea Town",
              "addressLocality": "Buea",
              "addressRegion": "South West",
              "addressCountry": "CM"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Tech Courses",
              "itemListElement": [
                { "@type": "Course", "name": "Web Development", "description": "Full-stack web developer training" },
                { "@type": "Course", "name": "Mobile Development", "description": "Native React Native & Expo training" },
                { "@type": "Course", "name": "Graphic Design", "description": "Creative visual brand design training" },
                { "@type": "Course", "name": "AI Video Production", "description": "AI video creation with tools like CapCut" }
              ]
            }
          };
        } else if (route.startsWith("/web-dev") || route.startsWith("/mobile-dev") || route.startsWith("/seo-growth") || route.startsWith("/branding-design") || route.startsWith("/ai-video")) {
          schemaObject = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": activeTitle,
            "provider": {
              "@type": "Organization",
              "name": "Nexora Empire",
              "url": "https://nexoraempire.com"
            },
            "description": activeDesc,
            "areaServed": "Worldwide"
          };
        }

        // Perform tag replacements in index.html string
        html = html.replace(/<title>.*?<\/title>/, `<title>${activeTitle}</title>`);
        html = html.replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${activeDesc}" />`);
        html = html.replace(/<meta name="keywords" content=".*?"\s*\/?>/, `<meta name="keywords" content="${activeKeywords}" />`);
        html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/, `<meta property="og:title" content="${activeTitle}" />`);
        html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/, `<meta property="og:description" content="${activeDesc}" />`);
        html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/, `<meta property="og:url" content="${activeUrl}" />`);
        html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/, `<meta name="twitter:title" content="${activeTitle}" />`);
        html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/, `<meta name="twitter:description" content="${activeDesc}" />`);

        if (html.includes('rel="canonical"')) {
          html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/, `<link rel="canonical" href="${activeUrl}" />`);
        } else {
          html = html.replace('</head>', `  <link rel="canonical" href="${activeUrl}" />\n  </head>`);
        }

        // Inject JSON-LD Schema
        html = html.replace(/<script type="application\/ld\+json">.*?<\/script>/s, `<script type="application/ld+json" id="dynamic-schema">${JSON.stringify(schemaObject)}</script>`);

        res.send(html);
      } catch (err) {
        res.sendFile(path.join(distPath, 'index.html'));
      }
    });
    console.log("Production dynamic SEO injection build routing loaded.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express Backend + Vite Server booting on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Critical server startup crash:", err);
});
