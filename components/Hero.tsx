"use client"

import { useState, useEffect } from 'react'
import PhoneMockup from './PhoneMockup'

const STATS = [
  { val: '240K+', label: 'Active Users' },
  { val: '4.8★', label: 'App Store Rating' },
  { val: '100%', label: 'Ad-Free Experience' },
]

function useBreakpoint() {
  const [width, setWidth] = useState(1200)
  useEffect(() => {
    const fn = () => setWidth(window.innerWidth)
    fn(); window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return { isMobile: width < 768, isTablet: width < 1024 }
}

export default function Hero() {
  const { isMobile, isTablet } = useBreakpoint()

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: isTablet ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '120px 24px 64px' : '140px 48px 80px',
      maxWidth: 1200,
      margin: '0 auto',
      gap: isTablet ? 64 : 80,
      position: 'relative',
    }}>

      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: -1, maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' }} />

      <div style={{ flex: 1, minWidth: 0, textAlign: isTablet ? 'center' : 'left', zIndex: 1 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.2)', borderRadius: 100, marginBottom: 24 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00D4FF', boxShadow: '0 0 10px #00D4FF' }} />
          <span style={{ fontSize: 13, fontWeight: 700, color: '#00D4FF', letterSpacing: '0.04em' }}>Logary 2.0 is now live</span>
        </div>

        <h1 style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: isMobile ? '2.5rem' : 'clamp(3rem, 5vw, 4.5rem)',
          fontWeight: 800, lineHeight: 1.1,
          letterSpacing: '-.03em', color: '#fff',
          marginBottom: 24,
        }}>
          Track every game.<br />
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>Master your library.</span>
        </h1>

        <p style={{ fontSize: isMobile ? 16 : 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: isTablet ? '100%' : 520, marginBottom: 40, fontWeight: 400 }}>
          Log your backlog, discover your Gaming DNA, and get personalized, AI-driven recommendations. Built for those who take gaming seriously.
        </p>

        <div style={{ display: 'flex', gap: 16, marginBottom: 56, flexWrap: 'wrap', justifyContent: isTablet ? 'center' : 'flex-start' }}>
          <a href="#download" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '16px 32px', borderRadius: 100, fontSize: 15, fontWeight: 700,
            background: '#fff', color: '#000',
            textDecoration: 'none', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(255,255,255,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Start for free
          </a>
          <a href="#demo" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '16px 32px', borderRadius: 100, fontSize: 15, fontWeight: 600,
            background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff', textDecoration: 'none', transition: 'all .2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
          >
            Book a Demo
          </a>
        </div>

        <div style={{ display: 'flex', gap: isMobile ? 24 : 48, flexWrap: 'wrap', justifyContent: isTablet ? 'center' : 'flex-start', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32 }}>
          {STATS.map((s) => (
            <div key={s.label}>
              <span style={{ fontSize: 24, fontWeight: 800, color: '#fff', display: 'block', marginBottom: 4 }}>{s.val}</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {!isMobile && (
        <div style={{ flexShrink: 0, position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <PhoneMockup />
          </div>
        </div>
      )}
    </section>
  )
}