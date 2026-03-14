import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70 border-t border-forge-900">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-ember-500 rounded-sm flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L7 2L12 12" stroke="#faf7f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 8.5H10" stroke="#faf7f2" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-display font-semibold text-lg text-cream tracking-tight">
                Bright<span className="text-ember-400">Forge</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              We build and manage professional websites for local businesses. You focus on your craft — we handle the web.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-cream text-sm font-semibold mb-4 uppercase tracking-wider">Pages</h4>
            <ul className="space-y-2.5">
              {['Services', 'Portfolio', 'Pricing', 'Contact'].map((l) => (
                <li key={l}>
                  <Link
                    href={`/${l.toLowerCase()}`}
                    className="text-sm hover:text-ember-400 transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:contact@brightforge.com" className="hover:text-ember-400 transition-colors">
                  contact@brightforge.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ember-400 transition-colors">
                  Request a free demo →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-forge-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <span>© {new Date().getFullYear()} BrightForge. All rights reserved.</span>
          <span>Built for local businesses.</span>
        </div>
      </div>
    </footer>
  )
}
