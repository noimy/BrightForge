'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-forge-200' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 bg-ink rounded-sm flex items-center justify-center group-hover:bg-ember-500 transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L7 2L12 12" stroke="#faf7f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 8.5H10" stroke="#faf7f2" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-display font-semibold text-lg text-ink tracking-tight">
            Bright<span className="text-ember-500">Forge</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-forge-700 hover:text-ink underline-anim transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-ink text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-ember-500 transition-colors"
          >
            Get Free Demo
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 group"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 bg-ink transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 bg-ink transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 bg-ink transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-cream border-b border-forge-200 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-ink py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-ink text-cream text-sm font-medium px-5 py-3 rounded-full text-center hover:bg-ember-500 transition-colors mt-2"
          >
            Get Free Demo
          </Link>
        </div>
      )}
    </header>
  )
}
