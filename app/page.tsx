"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import PhoneMockup from '@/components/PhoneMockup'
import { FEATURES } from '@/lib/features'

const DNA_BARS = [
  { label: 'Action', pct: 34, color: '#FF3B7A' },
  { label: 'Adventure', pct: 19, color: '#A259FF' },
  { label: 'RPG', pct: 13, color: '#00D4FF' },
  { label: 'Platformer', pct: 13, color: '#00E676' },
  { label: 'Arcade', pct: 9, color: '#FFD600' },
  { label: 'Strategy', pct: 7, color: '#FF6B2B' },
]

function useBreakpoint() {
  const [width, setWidth] = useState(1200)
  useEffect(() => {
    const update = () => setWidth(window.innerWidth)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return { isMobile: width < 768, isTablet: width < 1024 }
}

export default function Home() {
  const { isMobile, isTablet } = useBreakpoint()

  return (
    <main style={{
      paddingTop: 68,
      fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif",
      backgroundColor: '#08080F',
      color: '#FFFFFF',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>

      <section style={{
        minHeight: 'calc(100vh - 68px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '40px 24px' : '60px 48px',
        maxWidth: 1000,
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative'
      }}>

        <h1 style={{
          fontSize: isMobile ? '3rem' : 'clamp(4rem, 7vw, 6rem)',
          fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.04em',
          color: '#FFFFFF', marginBottom: 24,
        }}>
          Your gaming life,<br />
          <span style={{
            background: 'linear-gradient(90deg, #00D4FF, #A259FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            beautifully tracked.
          </span>
        </h1>

        <p style={{
          fontSize: isMobile ? 16 : 20, color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.6, maxWidth: 600,
          marginBottom: 48, fontWeight: 400, margin: '0 auto 48px'
        }}>
          Log every game you play, discover your unique Gaming DNA,
          and get AI-powered recommendations built exclusively around your taste.
        </p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 80 }}>
          <a href="#download" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px 36px', borderRadius: 100, fontSize: 16, fontWeight: 700,
            background: 'linear-gradient(135deg, #00D4FF, #A259FF)', color: '#FFFFFF',
            boxShadow: '0 8px 24px rgba(162, 89, 255, 0.25)',
            transition: 'transform .2s, box-shadow .2s', textDecoration: 'none',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(162, 89, 255, 0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(162, 89, 255, 0.25)' }}
          >
            Get Started Free
          </a>
          <a href="#features" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px 36px', borderRadius: 100, fontSize: 16, fontWeight: 600,
            background: 'transparent', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.15)',
            transition: 'all .2s', textDecoration: 'none',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
          >
            Explore Features
          </a>
        </div>

        <div style={{ position: 'absolute', bottom: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0.5 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: 20, height: 32, borderRadius: 10, border: '2px solid #fff', position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 4, height: 6, background: '#fff', borderRadius: 2, marginTop: 4, animation: 'bounce 2s infinite' }} />
          </div>
        </div>
      </section>

      <section id="features" style={{ padding: isMobile ? '100px 24px' : '160px 48px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ marginBottom: 64, textAlign: 'center' }}>
            <h2 style={{ fontSize: isMobile ? '2.2rem' : 'clamp(2.8rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-.03em', color: '#FFFFFF', marginBottom: 16, lineHeight: 1.1 }}>
              Built for serious gamers.
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', maxWidth: 500, fontWeight: 400, margin: '0 auto' }}>
              Everything you need to track your backlog, analyze your taste, and discover your next favorite game.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)',
            gap: 24,
          }}>
            {FEATURES.map((f) => (
              <Link key={f.slug} href={`/features/${f.slug}`} style={{
                background: '#11111A', border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: 24, padding: '36px 32px', display: 'flex', flexDirection: 'column',
                transition: 'all .3s ease', textDecoration: 'none', position: 'relative', overflow: 'hidden'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.background = '#14141F';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = '#11111A';
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 32, width: 40, height: 3, background: f.color || '#00D4FF', borderRadius: '0 0 4px 4px' }} />

                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#FFFFFF', marginBottom: 12, letterSpacing: '-0.01em', marginTop: 16 }}>{f.name}</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: 'auto', fontWeight: 400 }}>{f.description}</p>

                <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: f.color || '#00D4FF' }}>
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? '80px 24px' : '160px 48px', maxWidth: 1240, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
          gap: isTablet ? 64 : 100,
          alignItems: 'center',
        }}>
          <div style={{ order: isTablet ? 2 : 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: 380, height: 380, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, rgba(162, 89, 255, 0.05) 50%, transparent 70%)',
              filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <PhoneMockup />
            </div>
          </div>

          <div style={{ order: isTablet ? 1 : 2, textAlign: isTablet ? 'center' : 'left' }}>
            <h2 style={{ fontSize: isMobile ? '2.5rem' : 'clamp(3rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-.04em', color: '#FFFFFF', lineHeight: 1.1, marginBottom: 24 }}>
              Discover the gamer<br />you actually are.
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 40, fontWeight: 400 }}>
              You think you&apos;re an RPG fan, but are you really? Gaming DNA analyzes every game you&apos;ve ever logged and gives you a live breakdown of your true genre identity.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: isTablet ? 'center' : 'flex-start', marginBottom: 48 }}>
              {['Updates automatically with every log', 'Analyzes across 20+ genre categories', 'Compare your exact DNA with friends', 'Feeds your personalized AI recommendations'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 2" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            <Link href="/features/gaming-dna" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px', borderRadius: 100, fontSize: 15, fontWeight: 700,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              color: '#FFFFFF', transition: 'all .2s', textDecoration: 'none',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
            >
              Learn about Gaming DNA
            </Link>
          </div>
        </div>
      </section>

      <section id="pricing" style={{ padding: isMobile ? '100px 24px' : '160px 48px' }}>
        <div style={{ maxWidth: 500, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? '2.5rem' : 'clamp(3rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-.03em', color: '#FFFFFF', marginBottom: 16, lineHeight: 1.1 }}>
            Simple pricing.
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', marginBottom: 56, fontWeight: 400 }}>
            Start for free. Upgrade to PRO when you want more power.
          </p>

          <div style={{ background: '#11111A', border: '1px solid rgba(0,212,255,0.2)', borderRadius: 32, padding: isMobile ? '40px 24px' : '56px 48px', position: 'relative', boxShadow: '0 20px 60px rgba(0,212,255,0.05)' }}>

            <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: 16 }}>Logary PRO</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 16, justifyContent: 'center' }}>
              <span style={{ fontSize: isMobile ? 48 : 64, fontWeight: 900, color: '#FFFFFF', letterSpacing: '-.04em' }}>$3</span>
              <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>/month</span>
            </div>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 40, fontWeight: 400 }}>The ultimate toolkit for serious gamers tracking everything.</p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48, textAlign: 'left', padding: 0 }}>
              {['Custom Library Covers', 'Deep All-Time Statistics', 'Expanded 10-Game Showcase', 'PRO Profile Badge'].map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 15, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(162,89,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 3" stroke="#A259FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <a href="https://www.patreon.com/cw/logary" target="_blank" rel="noreferrer" style={{
              display: 'block', textAlign: 'center', padding: '18px', borderRadius: 100,
              fontSize: 16, fontWeight: 800, background: '#FFFFFF', color: '#000000',
              transition: 'transform .2s', textDecoration: 'none'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              Unlock PRO
            </a>
          </div>
        </div>
      </section>

      <section id="download" style={{ padding: isMobile ? '100px 24px' : '160px 48px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 60%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: isMobile ? '2.8rem' : 'clamp(3.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-.04em', color: '#FFFFFF', lineHeight: 1.05, marginBottom: 24 }}>
            Ready to start tracking?
          </h2>
          <p style={{ fontSize: isMobile ? 17 : 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, marginBottom: 56, fontWeight: 400, maxWidth: 600, margin: '0 auto 56px' }}>
            Master your library, discover your true identity. Join our community to unlock your Gaming DNA and find your next favorite game.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '16px 32px', borderRadius: 100,
              background: '#11111A', border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all .2s', textDecoration: 'none',
              flex: isMobile ? '1 1 100%' : 'none', justifyContent: 'center'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = '#14141F' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = '#11111A' }}
            >
              <svg width={isMobile ? 22 : 28} height={isMobile ? 22 : 28} viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 2, fontWeight: 600, letterSpacing: '0.05em' }}>Download on the</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>App Store</div>
              </div>
            </a>

            <a href="#" style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '16px 32px', borderRadius: 100,
              background: '#11111A', border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all .2s', textDecoration: 'none',
              flex: isMobile ? '1 1 100%' : 'none', justifyContent: 'center'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = '#14141F' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = '#11111A' }}
            >
              <img src="/google-play-store-icon.svg" width={isMobile ? 22 : 26} height={isMobile ? 22 : 26} alt="Google Play" style={{ flexShrink: 0 }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 2, fontWeight: 600, letterSpacing: '0.05em' }}>Get it on</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(6px); }
          60% { transform: translateY(3px); }
        }
      `}} />

    </main>
  )
}