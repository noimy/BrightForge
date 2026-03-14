import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — BrightForge',
  description: 'Website design, development, and monthly management for local businesses.',
}

const buildIncludes = [
  'Custom design tailored to your industry',
  'Mobile-optimized for all screen sizes',
  'Fast loading speeds (Core Web Vitals optimized)',
  'SEO-friendly structure and meta setup',
  'Contact forms and lead capture',
  'Google Maps integration',
  'Service pages for each offering',
  'Testimonials / reviews section',
  'Call-to-action buttons throughout',
  'Launch support and handoff',
]

const managementIncludes = [
  'Hosting included (no extra fees)',
  'Unlimited small text and image edits',
  'Adding new pages or sections',
  'Monthly performance check',
  'Security updates and patches',
  'Uptime monitoring',
  'Feature additions on request',
  'Priority email support',
]

const industries = [
  { name: 'Contractors', icon: '🔨', desc: 'Project portfolios, service areas, estimate request forms.' },
  { name: 'Roofers', icon: '🏠', desc: 'Before/after galleries, financing info, emergency contact.' },
  { name: 'Restaurants', icon: '🍽', desc: 'Menu pages, reservations, hours and location.' },
  { name: 'Med Spas', icon: '✨', desc: 'Treatment pages, booking links, before/after photos.' },
  { name: 'Dentists', icon: '🦷', desc: 'Service listings, insurance info, appointment scheduling.' },
  { name: 'Landscapers', icon: '🌿', desc: 'Portfolio galleries, service packages, seasonal promotions.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-ember-500 text-xs font-mono uppercase tracking-widest mb-4">Services</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
            Everything you need.<br />Nothing you don't.
          </h1>
          <p className="text-xl text-stone leading-relaxed max-w-2xl">
            We offer two core services: building your website and managing it month-to-month. Simple, transparent, effective.
          </p>
        </div>
      </section>

      {/* Service 1 — Build */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="bg-forge-100 text-forge-800 text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full inline-block mb-6">
                Service 01
              </div>
              <h2 className="font-display text-4xl font-bold text-ink mb-4">Website Design & Build</h2>
              <p className="text-stone text-lg leading-relaxed mb-8">
                A complete website built from scratch, designed specifically for your business and industry. We start with a free demo so you see exactly what you're getting before committing.
              </p>
              <div className="bg-ink text-cream rounded-2xl p-6 mb-8">
                <div className="font-display text-4xl font-bold mb-1">$1,000</div>
                <div className="text-cream/60 text-sm">$500 upfront · $500 after completion</div>
              </div>
              <Link href="/contact" className="bg-ember-500 text-cream font-semibold px-7 py-3.5 rounded-full hover:bg-ember-600 transition-colors text-sm inline-block">
                Request Free Demo →
              </Link>
            </div>
            <div className="bg-white border border-forge-100 rounded-2xl p-8">
              <h3 className="font-semibold text-ink mb-6 text-sm uppercase tracking-wide">Everything included:</h3>
              <ul className="space-y-3">
                {buildIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-stone">
                    <span className="text-ember-500 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-forge-100 max-w-6xl mx-auto" />

      {/* Service 2 — Management */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:order-2">
              <div className="bg-forge-100 text-forge-800 text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full inline-block mb-6">
                Service 02
              </div>
              <h2 className="font-display text-4xl font-bold text-ink mb-4">Monthly Website Management</h2>
              <p className="text-stone text-lg leading-relaxed mb-8">
                Your website is a living thing — it needs updates, edits, and care. We handle all of that monthly so your site stays current and your business keeps growing.
              </p>
              <div className="bg-ink text-cream rounded-2xl p-6 mb-8">
                <div className="font-display text-4xl font-bold mb-1">$199<span className="text-xl font-sans font-normal text-cream/60">/mo</span></div>
                <div className="text-cream/60 text-sm">Cancel anytime. No long-term contracts.</div>
              </div>
              <Link href="/contact" className="bg-ink text-cream font-semibold px-7 py-3.5 rounded-full hover:bg-ember-500 transition-colors text-sm inline-block">
                Get Started →
              </Link>
            </div>
            <div className="bg-white border border-forge-100 rounded-2xl p-8 lg:order-1">
              <h3 className="font-semibold text-ink mb-6 text-sm uppercase tracking-wide">Everything included:</h3>
              <ul className="space-y-3">
                {managementIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-stone">
                    <span className="text-ember-500 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6 bg-forge-950 text-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-ember-400 text-xs font-mono uppercase tracking-widest mb-4">Who we serve</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Built for your industry.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-forge-900 rounded-2xl p-7 hover:bg-forge-800 transition-colors">
                <div className="text-3xl mb-4">{ind.icon}</div>
                <h3 className="font-semibold text-cream text-base mb-2">{ind.name}</h3>
                <p className="text-sm text-cream/60 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-cream/50 text-sm mb-4">Don't see your industry? We work with all local service businesses.</p>
            <Link href="/contact" className="text-ember-400 text-sm underline hover:text-ember-300 transition-colors">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-ink mb-4">Ready to see your new website?</h2>
          <p className="text-stone mb-8">We'll build a free demo so you can see exactly what your site will look like. No commitment required.</p>
          <Link href="/contact" className="bg-ember-500 text-cream font-semibold px-10 py-4 rounded-full hover:bg-ember-600 transition-colors text-sm inline-block">
            Request Your Free Demo →
          </Link>
        </div>
      </section>
    </>
  )
}
