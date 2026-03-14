import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, business, email, phone, website, message } = body

    // Validate required fields
    if (!name || !business || !email) {
      return NextResponse.json(
        { error: 'Name, business name, and email are required.' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // ─────────────────────────────────────────────────────────────
    // OPTION A: Send email via nodemailer (SMTP — works anywhere)
    // Uncomment and configure SMTP env vars in .env.local
    // ─────────────────────────────────────────────────────────────
    /*
    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"BrightForge Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Demo Request — ${business}`,
      html: `
        <h2>New Demo Request</h2>
        <table cellpadding="8" style="border-collapse:collapse; width:100%; max-width:500px;">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Business</strong></td><td>${business}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone || '—'}</td></tr>
          <tr><td><strong>Current Website</strong></td><td>${website || '—'}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message || '—'}</td></tr>
        </table>
      `,
    })
    */

    // ─────────────────────────────────────────────────────────────
    // OPTION B: Use Resend (recommended for Vercel — add RESEND_API_KEY env var)
    // Install: npm install resend
    // ─────────────────────────────────────────────────────────────
    /*
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'BrightForge <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New Demo Request — ${business}`,
      html: `
        <h2>New Demo Request from BrightForge Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '—'}</p>
        <p><strong>Current Website:</strong> ${website || '—'}</p>
        <p><strong>Message:</strong> ${message || '—'}</p>
      `,
    })
    */

    // ─────────────────────────────────────────────────────────────
    // DEFAULT: Log to console (development / before email is set up)
    // In production, uncomment one of the options above.
    // ─────────────────────────────────────────────────────────────
    console.log('📬 New demo request received:', {
      name,
      business,
      email,
      phone,
      website,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Server error. Please try again or email us directly.' },
      { status: 500 }
    )
  }
}
