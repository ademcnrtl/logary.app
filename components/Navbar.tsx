'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FEATURES } from '@/lib/features'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [featOpen, setFeatOpen] = useState(false)
  const featRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (featRef.current && !featRef.current.contains(e.target as Node)) setFeatOpen(false)
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  // Menü üstündeki küçük üçgen (ok)
  const triangle = (
    <div style={{
      position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
      borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
      borderBottom: '6px solid #11131A', // Arka planla uyumlu renk
    }} />
  )

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, height: 68,
      background: scrolled ? 'rgba(12,13,17,.90)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,.05)' : '1px solid transparent',
      transition: 'all .3s ease',
    }}>
      <div style={{
        maxWidth: 1160, margin: '0 auto', height: '100%',
        padding: '0 48px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 24,
      }}>

        {/* LOGO */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, textDecoration: 'none' }}>
          <span style={{ fontSize: 19, fontWeight: 900, color: '#fff', letterSpacing: '-.02em' }}>
            Logary
          </span>
        </Link>

        {/* CENTER MENU */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32, flex: 1, justifyContent: 'center' }}>
          
          <Link href="/about" style={{ color: 'var(--text2)', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color .2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
          >
            About
          </Link>

          <div ref={featRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setFeatOpen(o => !o)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 0', border: 'none',
                background: 'transparent',
                color: featOpen ? '#fff' : 'var(--text2)',
                fontSize: 14, fontWeight: 500, cursor: 'pointer',
                transition: 'all .2s',
              }}
            >
              Features
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
                style={{ opacity: featOpen ? 1 : 0.6, transition: 'transform .2s', transform: featOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* DROPDOWN MENU */}
            {featOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 18px)', left: '50%',
                transform: 'translateX(-50%)', width: 420,
                background: '#11131A', border: '1px solid rgba(255,255,255,.08)',
                borderRadius: 16, boxShadow: '0 24px 50px rgba(0,0,0,.5)',
                padding: '20px 24px', display: 'flex', flexDirection: 'column',
                gap: 6, zIndex: 300,
              }}>
                {triangle}
                
                <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.3)', letterSpacing: '0.08em', marginBottom: 8, textTransform: 'uppercase' }}>
                  Explore Logary
                </div>

                {FEATURES.map(f => (
                  <Link key={f.slug} href={`/features/${f.slug}`} onClick={() => setFeatOpen(false)}
                    style={{ 
                      display: 'flex', flexDirection: 'column', padding: '10px 14px', 
                      borderRadius: 10, transition: 'all .2s ease', 
                      textDecoration: 'none', borderLeft: '2px solid transparent'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,.03)';
                      e.currentTarget.style.borderLeft = '2px solid #00D4FF';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderLeft = '2px solid transparent';
                    }}
                  >
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>
                      {f.name}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--text3)', lineHeight: 1.4 }}>
                      {f.tagline}
                    </div>
                  </Link>
                ))}

                <div style={{
                  borderTop: '1px solid rgba(255,255,255,.06)',
                  marginTop: 12, paddingTop: 16, paddingBottom: 4,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <span style={{ fontSize: 12, color: 'var(--text3)' }}>Everything you need, in one place.</span>
                  <Link href="/#download" onClick={() => setFeatOpen(false)} style={{ fontSize: 12, fontWeight: 600, color: '#00D4FF', textDecoration: 'none' }}>
                    Download the app
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* DOWNLOAD BUTTON */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <Link href="/#download" style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '9px 20px', fontSize: 14, fontWeight: 700,
            background: 'linear-gradient(135deg, #00D4FF, #A259FF)',
            color: '#fff', borderRadius: 10, textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(0,212,255,.25)', transition: 'all .2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '.9'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Download Free
          </Link>
        </div>
      </div>
    </nav>
  )
}