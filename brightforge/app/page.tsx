import Link from 'next/link'

const clients = ['Contractors', 'Roofers', 'Restaurants', 'Med Spas', 'Dentists', 'Landscapers']

const features = [
  {
    icon: '⚡',
    title: 'Fast & Mobile-Ready',
    desc: 'Every site loads fast and looks perfect on all devices. Google rewards speed — so do your customers.',
  },
  {
    icon: '🎯',
    title: 'Built to Convert',
    desc: 'Lead forms, call-to-action buttons, and clear service pages designed to turn visitors into calls.',
  },
  {
    icon: '🔍',
    title: 'SEO-Optimized',
    desc: 'Structured for search engines from day one so your business shows up when locals search for you.',
  },
  {
    icon: '🛠',
    title: 'Managed Monthly',
    desc: 'We handle updates, edits, hosting, and security. Your site stays fresh without any work from you.',
  },
]

const steps = [
  { num: '01', title: 'Free Demo', desc: "We build a demo of your new site first — no commitment. You see exactly what you're getting before paying a cent." },
  { num: '02', title: 'Design & Build', desc: 'After approval we finalize the design, add your content, and fully build your site in 1–2 weeks.' },
  { num: '03', title: 'Launch', desc: 'Your site goes live on fast hosting with SEO optimization. We handle the technical side completely.' },
  { num: '04', title: 'Ongoing Care', desc: 'We manage updates, edits, and improvements every month. Think of us as your web team.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-forge-100 blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-ember-400/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-forge-100 border border-forge-200 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-ember-500 animate-pulse" />
            <span className="text-xs font-medium text-forge-700 font-mono uppercase tracking-widest">
              Websites for local businesses
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-ink leading-[0.9] mb-8 max-w-4xl animate-fade-up opacity-0-start stagger-1">
            Websites that work<br />
            <em className="italic text-ember-500 font-semibold">as hard as you do.</em>
          </h1>

          <p className="text-lg md:text-xl text-stone max-w-xl leading-relaxed mb-10 animate-fade-up opacity-0-start stagger-2">
            We design, build, and manage professional websites for local businesses — so you can focus on running yours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0-start stagger-3">
            <Link
              href="/contact"
              className="bg-ink text-cream font-semibold px-8 py-4 rounded-full hover:bg-ember-500 transition-colors text-center text-sm"
            >
              Get Your Free Demo →
            </Link>
            <Link
              href="/portfolio"
              className="border border-forge-300 text-ink font-medium px-8 py-4 rounded-full hover:border-ink transition-colors text-center text-sm"
            >
              View Example Sites
            </Link>
          </div>

          {/* Client types scroll */}
          <div className="mt-16 flex flex-wrap gap-3 animate-fade-up opacity-0-start stagger-4">
            {clients.map((c) => (
              <span
                key={c}
                className="bg-white border border-forge-200 text-forge-700 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="bg-ink text-cream py-4 overflow-hidden whitespace-nowrap">
        <div className="animate-[marquee_20s_linear_infinite] inline-block">
          {Array(3).fill(
            '✦ Custom Design  ✦ Mobile Optimized  ✦ SEO Setup  ✦ Fast Hosting  ✦ Monthly Management  ✦ Lead Forms  ✦ No Contracts  '
          ).join('')}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-33.333%); }
          }
        `}</style>
      </div>

      {/* Why it matters */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ember-500 text-xs font-mono uppercase tracking-widest mb-4">The problem</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
                Most small business websites are quietly losing you customers.
              </h2>
              <p className="text-stone text-lg leading-relaxed mb-6">
                Outdated designs, slow load times, and no mobile optimization mean potential customers click away before they ever call you. Your competitors are getting those leads instead.
              </p>
              <p className="text-stone text-lg leading-relaxed">
                We fix that — with a modern, professional website built specifically for your type of business, managed every month so it never goes stale.
              </p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: '75%', label: 'of users judge credibility by website design' },
                { stat: '53%', label: 'of mobile users leave if a page takes 3+ seconds' },
                { stat: '88%', label: 'of local searches lead to a call or visit within 24 hrs' },
                { stat: '$0', label: 'upfront for a demo — you see it before you commit' },
              ].map(({ stat, label }) => (
                <div key={stat} className="bg-forge-50 border border-forge-100 rounded-2xl p-6">
                  <div className="font-display text-4xl font-bold text-ember-500 mb-2">{stat}</div>
                  <div className="text-sm text-stone leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-ember-500 text-xs font-mono uppercase tracking-widest mb-4">What you get</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">
              Everything your website needs. Nothing it doesn't.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-forge-100 rounded-2xl p-7 hover:border-forge-300 hover:shadow-md transition-all group"
              >
                <div className="text-3xl mb-5">{f.icon}</div>
                <h3 className="font-semibold text-ink text-base mb-2 group-hover:text-ember-500 transition-colors">{f.title}</h3>
                <p className="text-sm text-stone leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-ink text-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-ember-400 text-xs font-mono uppercase tracking-widest mb-4">How it works</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Simple. Transparent. Fast.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-forge-700 -translate-x-4" />
                )}
                <div className="font-mono text-ember-400 text-sm mb-4">{s.num}</div>
                <h3 className="font-display text-xl font-semibold text-cream mb-3">{s.title}</h3>
                <p className="text-sm text-cream/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-ember-500 text-xs font-mono uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">
            Straightforward pricing. No surprises.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="border border-forge-200 rounded-2xl p-8 text-left">
              <p className="text-xs font-mono uppercase tracking-widest text-stone mb-2">Website Build</p>
              <div className="font-display text-5xl font-bold text-ink mb-1">$1,000</div>
              <p className="text-sm text-stone mb-6">$500 upfront · $500 on completion</p>
              <ul className="space-y-2">
                {['Full custom design', 'Mobile optimized', 'SEO setup', 'Contact forms', 'Launch support'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-stone">
                    <span className="text-ember-500">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-ink bg-ink rounded-2xl p-8 text-left text-cream">
              <p className="text-xs font-mono uppercase tracking-widest text-cream/60 mb-2">Monthly Management</p>
              <div className="font-display text-5xl font-bold text-cream mb-1">$199</div>
              <p className="text-sm text-cream/50 mb-6">per month, cancel anytime</p>
              <ul className="space-y-2">
                {['Hosting included', 'Unlimited small edits', 'New pages & sections', 'Security updates', 'Performance monitoring'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-cream/70">
                    <span className="text-ember-400">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            href="/pricing"
            className="inline-block mt-8 text-sm text-stone underline hover:text-ink transition-colors"
          >
            See full pricing details →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-forge-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-cream leading-tight mb-6">
            Want to see what your website <em className="text-ember-400 italic">could</em> look like?
          </h2>
          <p className="text-cream/60 text-lg mb-10">
            We'll create a free demo website for your business. No commitment. No credit card. Just your future website — ready to view.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ember-500 text-cream font-semibold px-10 py-4 rounded-full hover:bg-ember-600 transition-colors text-sm"
          >
            Request Your Free Demo →
          </Link>
        </div>
      </section>
    </>
  )
}
