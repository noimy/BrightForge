'use client'
import { useState } from 'react'
import type { Metadata } from 'next'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    website: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', business: '', email: '', phone: '', website: '', message: '' })
      } else {
        setStatus('error')
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setError('Network error. Please try again.')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-ember-500 text-xs font-mono uppercase tracking-widest mb-4">Contact</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
            Let's build your<br />
            <em className="italic text-ember-500">free demo.</em>
          </h1>
          <p className="text-xl text-stone leading-relaxed max-w-xl">
            Fill in your details below and we'll create a custom demo website for your business — usually within a few days.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h2 className="font-display text-2xl font-bold text-ink mb-3">We got your request!</h2>
                <p className="text-stone">
                  Thanks for reaching out. We'll start working on your demo and be in touch within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="name">
                      Your Name <span className="text-ember-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border border-forge-200 rounded-xl px-4 py-3 text-sm text-ink placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-ember-400 focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="business">
                      Business Name <span className="text-ember-500">*</span>
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      required
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Smith Roofing LLC"
                      className="w-full border border-forge-200 rounded-xl px-4 py-3 text-sm text-ink placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-ember-400 focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="email">
                      Email <span className="text-ember-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@smithroofing.com"
                      className="w-full border border-forge-200 rounded-xl px-4 py-3 text-sm text-ink placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-ember-400 focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full border border-forge-200 rounded-xl px-4 py-3 text-sm text-ink placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-ember-400 focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="website">
                    Current Website <span className="text-stone font-normal">(if you have one)</span>
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    value={form.website}
                    onChange={handleChange}
                    placeholder="https://yoursite.com"
                    className="w-full border border-forge-200 rounded-xl px-4 py-3 text-sm text-ink placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-ember-400 focus:border-transparent bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="message">
                    Tell us about your business
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What services do you offer? What areas do you serve? What do you want your website to accomplish?"
                    className="w-full border border-forge-200 rounded-xl px-4 py-3 text-sm text-ink placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-ember-400 focus:border-transparent bg-white resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-ink text-cream font-semibold py-4 rounded-full hover:bg-ember-500 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Request My Free Demo →'}
                </button>

                <p className="text-xs text-stone text-center">
                  No credit card. No commitment. We'll send you a demo and you decide from there.
                </p>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-forge-50 border border-forge-100 rounded-2xl p-6">
              <h3 className="font-semibold text-ink mb-4">What happens next?</h3>
              <ol className="space-y-4">
                {[
                  { step: '1', text: 'We review your submission and research your business.' },
                  { step: '2', text: 'We build a free demo website tailored to your industry.' },
                  { step: '3', text: 'We send you the link within 1–2 business days.' },
                  { step: '4', text: 'You review it, request changes, and decide if you want to proceed.' },
                ].map(({ step, text }) => (
                  <li key={step} className="flex gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-ink text-cream text-xs flex items-center justify-center font-mono flex-shrink-0">{step}</span>
                    <span className="text-stone">{text}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white border border-forge-100 rounded-2xl p-6">
              <h3 className="font-semibold text-ink mb-2">Prefer email?</h3>
              <a href="mailto:brightforgesites@gmail.com" className="text-sm text-ember-500 hover:underline">
                brightforgesites@gmail.com
              </a>
            </div>

            <div className="bg-ink text-cream rounded-2xl p-6">
              <div className="font-display text-3xl font-bold mb-1">$0</div>
              <div className="text-cream/60 text-sm mb-3">to see your demo website</div>
              <p className="text-sm text-cream/80 leading-relaxed">
                You see your real, custom website before paying anything. That's how confident we are you'll love it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
