import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO   = 'anirudh@cbytechains.com';
const FROM = process.env.CONTACT_FROM_EMAIL || 'Cerulea Sales <onboarding@resend.dev>';

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, role, projectDescription, projectRequirement } = await req.json();

    if (!name || !email || !projectDescription || !projectRequirement) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Sales Enquiry: ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;background:#F5F3FF;border-radius:16px;overflow:hidden;border:1px solid #DDD6FE">

          <!-- Header -->
          <div style="background:linear-gradient(135deg,#4F46E5 0%,#7C3AED 100%);padding:36px 40px">
            <div style="display:inline-block;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.3);border-radius:100px;padding:4px 14px;margin-bottom:18px">
              <span style="color:#E0E7FF;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase">Sales Enquiry · cerulea.io</span>
            </div>
            <h1 style="color:#FFFFFF;margin:0 0 6px;font-size:22px;font-weight:800;letter-spacing:-0.3px">
              New enquiry from ${name}
            </h1>
            <p style="color:rgba(255,255,255,0.65);margin:0;font-size:14px">
              ${company ? `${company}${role ? ` · ${role}` : ''}` : (role || 'No company provided')}
            </p>
          </div>

          <!-- Contact details row -->
          <div style="background:#FFFFFF;padding:28px 40px;border-bottom:1px solid #EDE9FE">
            <p style="font-size:11px;font-weight:700;color:#8B5CF6;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 16px">Contact Details</p>
            <table style="width:100%;border-collapse:collapse">
              <tr style="border-bottom:1px solid #F3F4F6">
                <td style="padding:10px 0;font-size:12px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.08em;width:130px;vertical-align:top">Name</td>
                <td style="padding:10px 0;font-size:15px;color:#111827;font-weight:600">${name}</td>
              </tr>
              <tr style="border-bottom:1px solid #F3F4F6">
                <td style="padding:10px 0;font-size:12px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top">Email</td>
                <td style="padding:10px 0;font-size:15px">
                  <a href="mailto:${email}" style="color:#4F46E5;text-decoration:none;font-weight:600">${email}</a>
                </td>
              </tr>
              ${phone ? `<tr style="border-bottom:1px solid #F3F4F6">
                <td style="padding:10px 0;font-size:12px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top">Phone</td>
                <td style="padding:10px 0;font-size:15px;color:#111827">${phone}</td>
              </tr>` : ''}
              ${company ? `<tr style="border-bottom:1px solid #F3F4F6">
                <td style="padding:10px 0;font-size:12px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top">Company</td>
                <td style="padding:10px 0;font-size:15px;color:#111827">${company}</td>
              </tr>` : ''}
              ${role ? `<tr>
                <td style="padding:10px 0;font-size:12px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top">Role</td>
                <td style="padding:10px 0;font-size:15px;color:#111827">${role}</td>
              </tr>` : ''}
            </table>
          </div>

          <!-- Project description -->
          <div style="padding:28px 40px 0">
            <div style="background:#FFFFFF;border:1px solid #DDD6FE;border-radius:12px;padding:24px;margin-bottom:16px">
              <p style="font-size:11px;font-weight:700;color:#8B5CF6;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 12px">Project Description</p>
              <p style="font-size:15px;color:#374151;line-height:1.75;margin:0;white-space:pre-wrap">${projectDescription}</p>
            </div>

            <div style="background:#FFFFFF;border:1px solid #DDD6FE;border-radius:12px;padding:24px;margin-bottom:24px">
              <p style="font-size:11px;font-weight:700;color:#8B5CF6;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 12px">Requirements</p>
              <p style="font-size:15px;color:#374151;line-height:1.75;margin:0;white-space:pre-wrap">${projectRequirement}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding:20px 40px 28px;text-align:center">
            <p style="font-size:12px;color:#A78BFA;margin:0">
              Sent from cerulea.io/pricing · Reply to this email to respond directly to ${name}
            </p>
          </div>

        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact-sales API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
