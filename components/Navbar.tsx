"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

function useWidth() {
  const [w, setW] = useState(1200)
  useEffect(() => {
    const fn = () => setW(window.innerWidth)
    fn(); window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return w
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoHovered, setLogoHovered] = useState(false);

  const width = useWidth()
  const isMobile = width < 768

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { if (!isMobile) setMenuOpen(false) }, [isMobile])

  return (
    <>
      <div style={{
        position: 'fixed',
        top: scrolled ? 16 : 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 200,
        width: isMobile ? 'calc(100% - 32px)' : 'auto',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(10, 11, 16, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 100,
          padding: '6px 8px 6px 12px',
          boxShadow: scrolled
            ? '0 20px 40px rgba(0,0,0,0.4)'
            : '0 10px 30px rgba(0,0,0,0.2)',
          transition: 'all 0.4s ease',
          gap: isMobile ? 0 : 32,
        }}>
          <Link href="/"
            style={{
              display: 'block',
              width: 32,
              height: 32,
              borderRadius: 8,
              textDecoration: 'none',
              transition: 'box-shadow 0.3s ease',
              boxShadow: logoHovered ? '0 0 20px rgba(0, 212, 255, 0.6)' : 'none',
              flexShrink: 0
            }}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <img
              src="/favicon.png"
              alt="Logary Logo"
              style={{ width: '100%', height: '100%', borderRadius: 8, display: 'block' }}
            />
          </Link>
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {[
                { label: 'FEATURES', href: '/#features' },
                { label: 'ECOSYSTEM', href: '/ecosystem' },
                { label: 'ABOUT', href: '/about' }
              ].map((item) => (
                <Link key={item.label} href={item.href} style={{
                  padding: '8px 14px', borderRadius: 100,
                  color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 700,
                  letterSpacing: '0.05em', textDecoration: 'none', transition: 'all 0.2s ease'
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: isMobile ? 'auto' : 8 }}>
            {!isMobile && (
              <Link href="/#download" style={{
                padding: '10px 20px', borderRadius: 100,
                fontSize: 13, fontWeight: 700,
                background: '#fff', color: '#000',
                textDecoration: 'none',
                transition: 'transform 0.2s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
              >
                Get Started
              </Link>
            )}

            {isMobile && (
              <button onClick={() => setMenuOpen(o => !o)} style={{
                width: 36, height: 36, borderRadius: 100,
                background: 'rgba(255,255,255,0.08)', border: 'none',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', gap: 4, cursor: 'pointer',
              }}>
                <div style={{ width: 14, height: 1.5, background: '#fff', borderRadius: 1 }} />
                <div style={{ width: 14, height: 1.5, background: '#fff', borderRadius: 1 }} />
              </button>
            )}
          </div>
        </nav>
      </div>
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 190,
          background: 'rgba(8, 8, 15, 0.98)', backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}>
          {['FEATURES', 'ECOSYSTEM', 'ABOUT'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{ fontSize: 24, fontWeight: 800, color: '#fff', textDecoration: 'none', margin: '16px 0' }}>
              {item}
            </Link>
          ))}
          <Link href="/#download" onClick={() => setMenuOpen(false)} style={{ marginTop: 32, padding: '14px 32px', borderRadius: 100, fontSize: 16, fontWeight: 800, background: '#00D4FF', color: '#000', textDecoration: 'none' }}>
            Get Started
          </Link>
        </div>
      )}
    </>
  )
}