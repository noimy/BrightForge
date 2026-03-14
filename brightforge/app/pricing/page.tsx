import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — BrightForge',
  description: 'Transparent website pricing for local businesses. $1,000 build fee + $199/month management.',
}

const faqs = [
  {
    q: 'What does the free demo look like?',
    a: "We build a real, working website based on your business — with your name, services, and branding. It's not a template or wireframe. You see your actual new site before committing to anything.",
  },
  {
    q: 'What if I need changes after launch?',
    a: "If you're on the monthly management plan, all small edits are included. Larger projects (new features, redesigns) are quoted separately.",
  },
  {
    q: 'Do I own the website?',
    a: "Yes, 100%. We build it, you own it. If you ever want to move hosting somewhere else, we'll help with the transfer.",
  },
  {
    q: 'Is there a contract for monthly management?',
    a: "No long-term contract. Monthly management is month-to-month and you can cancel anytime with 30 days notice.",
  },
  {
    q: 'How long does it take to build the site?',
    a: "Typically 1–2 weeks from approval to launch, depending on how quickly you provide content (photos, text). The demo is usually ready within a few days.",
  },
  {
    q: 'What if I already have a website?',
    a: "We can redesign or rebuild your existing site. The process is the same — we start with a demo so you can see the upgrade before committing.",
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-ember-500 text-xs font-mono uppercase tracking-widest mb-4">Pricing</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
            No surprises. No hidden fees.<br />Just simple pricing.
          </h1>
          <p className="text-xl text-stone max-w-2xl mx-auto">
            Two options. Build your website, then optionally let us manage it monthly. That's it.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Build */}
          <div className="border-2 border-forge-200 rounded-3xl p-8 flex flex-col">
            <div className="mb-8">
              <p className="text-xs font-mono uppercase tracking-widest text-stone mb-3">Website Build</p>
              <div className="font-display text-6xl font-bold text-ink mb-2">$1,000</div>
              <p className="text-stone text-sm">One-time fee</p>
              <div className="mt-4 flex gap-3">
                <div className="flex-1 bg-forge-50 border border-forge-100 rounded-xl p-3 text-center">
                  <div className="font-display text-xl font-bold text-ink">$500</div>
                  <div className="text-xs text-stone mt-0.5">Upfront</div>
                </div>
                <div className="flex-1 bg-forge-50 border border-forge-100 rounded-xl p-3 text-center">
                  <div className="font-display text-xl font-bold text-ink">$500</div>
                  <div className="text-xs text-stone mt-0.5">On completion</div>
                </div>
              </div>
            </div>
            <ul className="space-y-3 flex-1 mb-8">
              {[
                'Free demo first — no upfront risk',
                'Custom design for your industry',
                'Mobile optimized',
                'SEO setup (meta, structure, speed)',
                'Contact forms and lead capture',
                'Google Maps integration',
                'Service pages',
                'Testimonials section',
                'Launch support',
                'You own the website 100%',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-stone">
                  <span className="text-ember-500 mt-0.5">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="block text-center border-2 border-ink text-ink font-semibold py-3.5 rounded-full hover:bg-ink hover:text-cream transition-colors text-sm"
            >
              Get Your Free Demo
            </Link>
          </div>

          {/* Management */}
          <div className="bg-ink rounded-3xl p-8 flex flex-col text-cream">
            <div className="mb-8">
              <p className="text-xs font-mono uppercase tracking-widest text-cream/50 mb-3">Monthly Management</p>
              <div className="font-display text-6xl font-bold text-cream mb-1">$199</div>
              <p className="text-cream/50 text-sm">per month · cancel anytime</p>
            </div>
            <ul className="space-y-3 flex-1 mb-8">
              {[
                'Hosting included (no extra fees)',
                'Unlimited small edits',
                'Text and image updates',
                'Adding new pages or sections',
                'Security updates & patches',
                'Monthly performance report',
                'Uptime monitoring',
                'Feature additions on request',
                'Priority email support',
                'No long-term contract',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-cream/70">
                  <span className="text-ember-400 mt-0.5">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="block text-center bg-ember-500 text-cream font-semibold py-3.5 rounded-full hover:bg-ember-600 transition-colors text-sm"
            >
              Get Started →
            </Link>
          </div>
        </div>

        {/* Note */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <p className="text-sm text-stone">
            Monthly management requires the website build first.{' '}
            <Link href="/contact" className="text-ember-500 hover:underline">Questions? Let's talk.</Link>
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink text-center mb-12">
            How we compare
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-forge-200">
                  <th className="text-left py-3 pr-4 text-stone font-normal"></th>
                  <th className="py-3 px-4 font-semibold text-ink">BrightForge</th>
                  <th className="py-3 px-4 font-semibold text-stone">Freelancer</th>
                  <th className="py-3 px-4 font-semibold text-stone">Agency</th>
                  <th className="py-3 px-4 font-semibold text-stone">DIY (Wix, etc.)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Custom design', '✓', '✓', '✓', '—'],
                  ['See demo first', '✓', '—', '—', '—'],
                  ['Fast turnaround', '✓', '—', '—', '✓'],
                  ['Ongoing management', '✓', '—', '✓', '—'],
                  ['Affordable price', '✓', '~', '—', '✓'],
                  ['Industry expertise', '✓', '~', '~', '—'],
                  ['Local business focus', '✓', '~', '—', '—'],
                ].map(([feature, ...vals]) => (
                  <tr key={feature as string} className="border-b border-forge-100">
                    <td className="py-3 pr-4 text-stone">{feature}</td>
                    {vals.map((v, i) => (
                      <td key={i} className={`py-3 px-4 text-center font-medium ${v === '✓' && i === 0 ? 'text-ember-500' : v === '✓' ? 'text-green-600' : 'text-stone/50'}`}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-forge-50 border-t border-forge-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-forge-200 pb-8">
                <h3 className="font-semibold text-ink mb-3">{q}</h3>
                <p className="text-stone leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-stone mb-4">Still have questions?</p>
            <Link href="/contact" className="bg-ink text-cream font-semibold px-8 py-4 rounded-full hover:bg-ember-500 transition-colors text-sm inline-block">
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
