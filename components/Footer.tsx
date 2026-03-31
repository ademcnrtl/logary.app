"use client"

import { useState } from 'react'
import Link from 'next/link'

const LINK_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Terms', href: '/terms' },
      { label: 'Eco System', href: '/ecosystem' },

    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '/about#faq' },
      { label: 'Contact', href: '/about#contact' },
    ]
  },
]

const SOCIALS = [
  { label: 'Discord', href: 'https://discord.gg/CDAgZYeZnP' },
  { label: 'X (Twitter)', href: '' },
  { label: 'Instagram', href: '' },
]

export default function Footer() {

  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <footer style={{
      background: '#08080F',
      borderTop: '1px solid rgba(255,255,255,.06)',
      color: 'rgba(255,255,255,.6)',
      fontFamily: 'Inter, system-ui, sans-serif',
      padding: '80px 48px',
    }}>
      <div style={{
        maxWidth: 1160,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 60,
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center' }}>
          <Link href="/"
            style={{
              display: 'block',
              width: 40,
              height: 40,
              textDecoration: 'none',
              borderRadius: 10,
              transition: 'box-shadow 0.3s ease',
              boxShadow: logoHovered ? '0 0 24px rgba(0, 212, 255, 0.6)' : 'none',
            }}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <img
              src="/favicon.png"
              alt="Logary Logo"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                display: 'block'
              }}
            />
          </Link>
        </div>

        <div style={{ display: 'flex', gap: 64, flex: '0 1 auto', flexWrap: 'wrap' }}>
          {LINK_COLUMNS.map(column => (
            <div key={column.title} style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 100 }}>
              <h4 style={{ fontSize: 12, fontWeight: 700, color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '.05em', margin: 0 }}>
                {column.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {column.links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} style={{
                      fontSize: 14, color: 'rgba(255,255,255,.6)',
                      textDecoration: 'none', transition: 'color .15s',
                      fontWeight: 500
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.6)')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 120, marginRight: 'auto' }}>
          <h4 style={{ fontSize: 12, fontWeight: 700, color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '.05em', margin: 0 }}>
            Socials
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {SOCIALS.map(s => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" style={{
                  fontSize: 14, color: 'rgba(255,255,255,.6)',
                  textDecoration: 'none', transition: 'color .15s',
                  fontWeight: 500
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.6)')}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center' }}>
          <Link href="/#download" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            padding: '12px 24px', fontSize: 14, fontWeight: 700,
            background: 'linear-gradient(135deg, #00D4FF, #A259FF)',
            color: '#fff', borderRadius: 10, textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(0,212,255,.2)', transition: 'all .2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,212,255,.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,212,255,.2)' }}
          >
            Get Started
          </Link>
        </div>

      </div>
    </footer>
  )
}