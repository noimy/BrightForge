import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — BrightForge',
  description: 'Example websites built for local businesses by BrightForge.',
}

const examples = [
  {
    industry: 'Roofing',
    name: 'Peak Roofing Co.',
    color: 'from-slate-800 to-slate-900',
    accent: '#f4511e',
    tags: ['Emergency Contact', 'Gallery', 'Free Estimate Form'],
    desc: 'A bold, trust-building website for a residential roofing company with a strong call-to-action and project gallery.',
  },
  {
    industry: 'Restaurant',
    name: 'Casa Fuego',
    color: 'from-amber-900 to-red-950',
    accent: '#f59e0b',
    tags: ['Menu Page', 'Reservations', 'Location & Hours'],
    desc: 'Warm, inviting design for a family-owned Mexican restaurant with online menu and Google Maps integration.',
  },
  {
    industry: 'Landscaping',
    name: 'Verde Grounds',
    color: 'from-green-900 to-emerald-950',
    accent: '#4ade80',
    tags: ['Portfolio Gallery', 'Service Packages', 'Quote Request'],
    desc: 'Clean, nature-inspired website showcasing landscaping work with a filterable portfolio and instant quote form.',
  },
  {
    industry: 'Med Spa',
    name: 'Lumina Aesthetics',
    color: 'from-rose-900 to-pink-950',
    accent: '#f9a8d4',
    tags: ['Treatment Pages', 'Booking Link', 'Before/After'],
    desc: 'Elegant, luxury design for a med spa featuring treatment details, pricing, and before/after photo galleries.',
  },
  {
    industry: 'Dentist',
    name: 'Bright Smile Dental',
    color: 'from-sky-800 to-blue-950',
    accent: '#38bdf8',
    tags: ['Services List', 'Insurance Info', 'Appointment Form'],
    desc: 'Clean, professional website that builds trust with new patients and makes booking an appointment easy.',
  },
  {
    industry: 'General Contractor',
    name: 'Meridian Build',
    color: 'from-zinc-800 to-neutral-900',
    accent: '#facc15',
    tags: ['Project Portfolio', 'Service Areas', 'Free Estimate'],
    desc: 'Bold, confident design for a general contractor with project photos, service area map, and estimate form.',
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-ember-500 text-xs font-mono uppercase tracking-widest mb-4">Portfolio</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
            Example sites we build<br />for local businesses.
          </h1>
          <p className="text-xl text-stone leading-relaxed max-w-2xl">
            Every website is custom-built for your industry. Here's a look at the kinds of sites we create — your demo will be tailored specifically for your business.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-8 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((ex) => (
            <div
              key={ex.name}
              className="group rounded-2xl overflow-hidden border border-forge-100 hover:border-forge-300 hover:shadow-xl transition-all"
            >
              {/* Mock browser */}
              <div className={`bg-gradient-to-br ${ex.color} h-52 relative p-6 flex flex-col justify-end`}>
                {/* Browser chrome */}
                <div className="absolute top-3 left-4 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                {/* Simulated content */}
                <div className="space-y-2">
                  <div className="h-3 w-2/3 rounded-full" style={{ background: ex.accent, opacity: 0.8 }} />
                  <div className="h-2 w-full rounded-full bg-white/10" />
                  <div className="h-2 w-4/5 rounded-full bg-white/10" />
                </div>
                <div className="absolute top-6 right-5 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <span className="text-xs font-mono text-white/80">{ex.industry}</span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-display text-xl font-semibold text-ink mb-2">{ex.name}</h3>
                <p className="text-sm text-stone leading-relaxed mb-4">{ex.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ex.tags.map((t) => (
                    <span key={t} className="bg-forge-50 text-forge-700 text-xs font-medium px-2.5 py-1 rounded-full border border-forge-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note about custom demos */}
      <section className="py-16 px-6 bg-forge-50 border-y border-forge-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-2xl font-semibold text-ink mb-4">
            "Can you build a demo for my specific business?"
          </p>
          <p className="text-stone leading-relaxed mb-8">
            Yes — that's exactly what we do. Reach out and we'll create a custom demo website tailored to your business, your industry, and your brand. You'll see your actual new website before paying anything.
          </p>
          <Link href="/contact" className="bg-ink text-cream font-semibold px-8 py-4 rounded-full hover:bg-ember-500 transition-colors text-sm inline-block">
            Request Your Free Demo →
          </Link>
        </div>
      </section>
    </>
  )
}
