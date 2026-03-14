import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, business, email, phone, website, message } = body

    if (!name || !business || !email) {
      return NextResponse.json(
        { error: 'Name, business name, and email are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'BrightForge <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New Demo Request - ${business}`,
      html: '<h2>New Demo Request</h2><p><strong>Name:</strong> ' + name + '</p><p><strong>Business:</strong> ' + business + '</p><p><strong>Email:</strong> ' + email + '</p><p><strong>Phone:</strong> ' + (phone || '-') + '</p><p><strong>Website:</strong> ' + (website || '-') + '</p><p><strong>Message:</strong> ' + (message || '-') + '</p>',
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
