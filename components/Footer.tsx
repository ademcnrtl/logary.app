"use client"

import Link from 'next/link'

const NAV_LINKS = [
  { label: 'About',     href: '/about' },
  { label: 'Roadmap',   href: '/about#roadmap' },
  { label: 'Changelog', href: '/about#changelog' },
  { label: 'FAQ',       href: '/about#faq' },
  { label: 'Contact',   href: '/about#contact' },
  { label: 'Privacy',   href: '/about#privacy' },
  { label: 'Terms',     href: '/terms' },
]

const SOCIALS = [
  {
    label: 'Discord',
    href: 'https://discord.gg/SJNqjdqMd3',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.052a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{
      background: '#080A0E',
      borderTop: '1px solid rgba(255,255,255,.06)',
      padding: '18px 48px',
    }}>
      <div style={{
        maxWidth: 1160,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,.4)' }}>Logary</span>
          </Link>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,.15)' }}>·</span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,.2)' }}>© 2026</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          {NAV_LINKS.map((l, i) => (
            <span key={l.label} style={{ display: 'flex', alignItems: 'center' }}>
              <Link href={l.href} style={{
                fontSize: 12, color: 'rgba(255,255,255,.28)',
                padding: '3px 8px', borderRadius: 5,
                transition: 'color .15s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,.75)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.28)')}
              >
                {l.label}
              </Link>
              {i < NAV_LINKS.length - 1 && (
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,.1)', userSelect: 'none' }}>·</span>
              )}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
          {SOCIALS.map(s => (
            <a key={s.label} target='_blank' href={s.href} aria-label={s.label} style={{
              width: 30, height: 30, borderRadius: 7,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'rgba(255,255,255,.25)', transition: 'color .15s, background .15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,.07)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.25)'; e.currentTarget.style.background = 'transparent' }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}