import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, projectType, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      dateStyle: "full",
      timeStyle: "short",
    });

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quote Request — Apex Painting Co.</title>
</head>
<body style="margin:0;padding:0;background:#0f0f0f;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#FFFFFF;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f0f;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1a1a1a;border:1px solid rgba(255,255,255,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#E8843A;padding:28px 32px;">
              <div style="font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.75);margin-bottom:6px;">
                New Quote Request
              </div>
              <div style="font-size:24px;font-weight:900;letter-spacing:-0.02em;color:#FFFFFF;line-height:1;">
                APEX PAINTING CO.
              </div>
            </td>
          </tr>

          <!-- Project Type Badge -->
          ${
            projectType
              ? `<tr>
            <td style="padding:24px 32px 0;">
              <div style="display:inline-block;background:rgba(232,132,58,0.15);border:1px solid rgba(232,132,58,0.35);padding:6px 14px;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#E8843A;">
                ${projectType}
              </div>
            </td>
          </tr>`
              : ""
          }

          <!-- Contact Info -->
          <tr>
            <td style="padding:24px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50%" style="padding:0 8px 16px 0;vertical-align:top;">
                    <div style="font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#A3A3A3;margin-bottom:4px;">Full Name</div>
                    <div style="font-size:15px;font-weight:600;color:#FFFFFF;">${name}</div>
                  </td>
                  <td width="50%" style="padding:0 0 16px 8px;vertical-align:top;">
                    <div style="font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#A3A3A3;margin-bottom:4px;">Phone</div>
                    <div style="font-size:15px;font-weight:600;color:#FFFFFF;">${phone || "—"}</div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding:0 0 16px 0;">
                    <div style="font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#A3A3A3;margin-bottom:4px;">Email</div>
                    <div style="font-size:15px;font-weight:600;">
                      <a href="mailto:${email}" style="color:#E8843A;text-decoration:none;">${email}</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div style="font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#A3A3A3;margin-bottom:4px;">Project Type</div>
                    <div style="font-size:15px;font-weight:600;color:#FFFFFF;">${projectType || "Not specified"}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 32px;">
              <div style="height:1px;background:rgba(255,255,255,0.07);"></div>
            </td>
          </tr>

          <!-- Project Details -->
          <tr>
            <td style="padding:24px 32px;">
              <div style="font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#A3A3A3;margin-bottom:12px;">Project Details</div>
              <div style="background:#111;border:1px solid rgba(255,255,255,0.07);border-left:3px solid #E8843A;padding:16px;font-size:14px;line-height:1.7;color:#D4D4D4;white-space:pre-wrap;">${message}</div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#111;padding:20px 32px;border-top:1px solid rgba(255,255,255,0.07);">
              <div style="font-size:11px;color:rgba(163,163,163,0.6);">
                Submitted ${timestamp} (Central Time) via apexpainting.co contact form.
                <br/>Reply directly to this email to respond to ${name}.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Apex Painting Co." <noreply@apexpainting.co>`,
      to: "info@apexpainting.co",
      replyTo: email,
      subject: `Quote Request — ${projectType || "General"} — ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
