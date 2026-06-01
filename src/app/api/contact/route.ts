import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO   = ['anirudh@cbytechains.com', 'durga@cbytechains.com', 'aswin@cbytechains.com'];
const FROM = process.env.CONTACT_FROM_EMAIL || 'Cerulea Contact <onboarding@resend.dev>';

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f8fafc;border-radius:12px">
          <div style="background:#0A192F;borderRadius:8px;padding:24px 32px;margin-bottom:24px;border-radius:8px">
            <h1 style="color:#ffffff;margin:0;font-size:20px;font-weight:800;letter-spacing:-0.5px">
              New contact from cerulea.io
            </h1>
          </div>

          <div style="background:#ffffff;border:1px solid #E2E8F0;border-radius:8px;padding:28px;margin-bottom:16px">
            <table style="width:100%;border-collapse:collapse">
              <tr style="border-bottom:1px solid #F1F5F9">
                <td style="padding:10px 0;font-size:12px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.08em;width:120px">Name</td>
                <td style="padding:10px 0;font-size:15px;color:#0A192F;font-weight:600">${name}</td>
              </tr>
              <tr style="border-bottom:1px solid #F1F5F9">
                <td style="padding:10px 0;font-size:12px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.08em">Email</td>
                <td style="padding:10px 0;font-size:15px;color:#2563eb"><a href="mailto:${email}" style="color:#2563eb">${email}</a></td>
              </tr>
              ${company ? `<tr style="border-bottom:1px solid #F1F5F9">
                <td style="padding:10px 0;font-size:12px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.08em">Company</td>
                <td style="padding:10px 0;font-size:15px;color:#0A192F">${company}</td>
              </tr>` : ''}
              <tr>
                <td style="padding:16px 0 0;font-size:12px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top">Message</td>
                <td style="padding:16px 0 0;font-size:15px;color:#475569;line-height:1.7;white-space:pre-wrap">${message}</td>
              </tr>
            </table>
          </div>

          <p style="font-size:12px;color:#94A3B8;text-align:center;margin:0">
            Sent from cerulea.io · Reply directly to this email to respond to ${name}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
