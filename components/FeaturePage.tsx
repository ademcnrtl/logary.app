'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FEATURES } from '@/lib/features'

interface Props { slug: string }

function useBreakpoint() {
  const [width, setWidth] = useState(1200)
  useEffect(() => {
    const fn = () => setWidth(window.innerWidth)
    fn(); window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return { isMobile: width < 768, isTablet: width < 1024 }
}

function SectionVisual({ sectionIndex, feature }: { sectionIndex: number; feature: typeof FEATURES[0] }) {
  const { color, sections } = feature
  const section = sections[sectionIndex]

  return (
    <div style={{ 
      background: 'rgba(15, 15, 25, 0.4)', 
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.08)', 
      borderRadius: 24, 
      padding: '32px', 
      minHeight: 220, 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 12, 
        marginBottom: 24, 
        paddingBottom: 16, 
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)' 
      }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: color }} />
        <div>
          <div style={{ fontSize: 10, color: 'rgba(255, 255, 255, 0.3)', textTransform: 'uppercase', letterSpacing: '.15em', fontWeight: 800, marginBottom: 2 }}>MODULE PREVIEW</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{section.title}</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {section.items.map((item, idx) => (
          <div key={item} style={{ 
            background: 'rgba(255, 255, 255, 0.02)', 
            border: `1px solid rgba(255, 255, 255, 0.05)`, 
            borderRadius: 12, 
            padding: '14px 16px',
            transition: 'background 0.3s ease'
          }}>
            <div style={{ fontSize: 11, fontWeight: 900, color, marginBottom: 6, opacity: 0.8 }}>ANALYSIS 0{idx + 1}</div>
            <div style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5, fontWeight: 500 }}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FeaturePage({ slug }: Props) {
  const { isMobile, isTablet } = useBreakpoint()
  const feature = FEATURES.find(f => f.slug === slug)!
  const others = FEATURES.filter(f => f.slug !== slug)

  return (
    <main style={{ paddingTop: 68, backgroundColor: '#08080F', minHeight: '100vh', color: '#fff' }}>

      <section style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '80px 24px 64px' : '140px 32px 100px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: 1000, height: 1000, borderRadius: '50%', background: `radial-gradient(circle, ${feature.color}08 0%, transparent 70%)`, pointerEvents: 'none' }} />

        <div style={{ maxWidth: 840, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: 8, 
            padding: '6px 14px', 
            borderRadius: 100, 
            background: 'rgba(255, 255, 255, 0.03)', 
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: 24
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: feature.color }} />
            <span style={{ fontSize: 11, fontWeight: 800, color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.1em' }}>CAPABILITY OVERVIEW</span>
          </div>
          <h1 style={{
            fontSize: isMobile ? '2.8rem' : 'clamp(3.5rem, 6vw, 5rem)',
            fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 28,
            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            {feature.name}
          </h1>
          <p style={{ fontSize: isMobile ? 18 : 22, color: '#fff', lineHeight: 1.4, maxWidth: 640, margin: '0 auto 20px', fontWeight: 600, letterSpacing: '-0.01em' }}>{feature.tagline}</p>
          <p style={{ fontSize: isMobile ? 15 : 17, color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.7, maxWidth: 680, margin: '0 auto', fontWeight: 400 }}>{feature.hero}</p>
        </div>
      </section>

      {feature.sections.map((section, i) => (
        <section key={section.title} style={{
          background: i % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.01)',
          padding: isMobile ? '72px 24px' : '120px 32px',
          borderTop: '1px solid rgba(255, 255, 255, 0.03)',
        }}>
          <div style={{
            maxWidth: 1160, margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
            gap: isTablet ? 48 : 120,
            alignItems: 'center',
          }}>
            <div style={{ order: isTablet ? 1 : (i % 2 === 0 ? 0 : 1) }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ width: 32, height: 2, background: feature.color, borderRadius: 10, opacity: 0.5 }} />
                <span style={{ fontSize: 12, fontWeight: 800, color: feature.color, textTransform: 'uppercase', letterSpacing: '.2em' }}>{feature.name}</span>
              </div>
              <h2 style={{ fontSize: isMobile ? '2rem' : 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-.03em', color: '#fff', marginBottom: 24, lineHeight: 1.1 }}>{section.title}</h2>
              <p style={{ fontSize: isMobile ? 15 : 17, color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.8, marginBottom: 32, fontWeight: 400 }}>{section.body}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16, padding: 0 }}>
                {section.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ width: 20, height: 20, borderRadius: 6, flexShrink: 0, marginTop: 4, background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 2" stroke={feature.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span style={{ fontSize: isMobile ? 14 : 16, color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ order: isTablet ? 2 : (i % 2 === 0 ? 1 : 0) }}>
              <SectionVisual sectionIndex={i} feature={feature} />
            </div>
          </div>
        </section>
      ))}

      <section style={{ background: '#0B0C12', padding: isMobile ? '80px 24px' : '120px 32px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.4rem', fontWeight: 900, color: '#fff', letterSpacing: '-.03em', marginBottom: 12 }}>Explore more modules</h2>
            <div style={{ width: 40, height: 4, background: 'rgba(255, 255, 255, 0.1)', borderRadius: 2 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {others.map(f => (
              <Link key={f.slug} href={`/features/${f.slug}`} style={{ 
                background: 'rgba(255, 255, 255, 0.02)', 
                border: '1px solid rgba(255, 255, 255, 0.06)', 
                borderRadius: 24, 
                padding: '32px', 
                transition: 'all .4s cubic-bezier(0.16, 1, 0.3, 1)', 
                display: 'flex', 
                flexDirection: 'column', 
                textDecoration: 'none' 
              }}
                onMouseEnter={e => { 
                  e.currentTarget.style.borderColor = f.color + '40'; 
                  e.currentTarget.style.transform = 'translateY(-6px)'; 
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.2)`
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)'; 
                  e.currentTarget.style.transform = 'translateY(0)'; 
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: 18, fontWeight: 900, color: '#fff', marginBottom: 8 }}>{f.name}</div>
                <div style={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.4)', lineHeight: 1.5, fontWeight: 500 }}>{f.tagline}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? '80px 24px' : '140px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 500, borderRadius: '50%', background: `radial-gradient(ellipse, ${feature.color}08 0%, transparent 65%)`, filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: isMobile ? '2rem' : 'clamp(2.8rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-.04em', color: '#fff', marginBottom: 20 }}>
            Experience the power of{' '}
            <span style={{ color: feature.color }}>{feature.name}</span>
          </h2>
          <p style={{ fontSize: isMobile ? 16 : 19, color: 'rgba(255, 255, 255, 0.5)', marginBottom: 48, fontWeight: 400, maxWidth: 600, margin: '0 auto 48px' }}>
            Join thousands of professional gamers tracking their legacy with the most advanced analytical tools.
          </p>
          <Link href="/#download" style={{
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: 12,
            padding: '20px 48px', 
            borderRadius: 100,
            fontSize: 16, 
            fontWeight: 900,
            background: feature.color,
            color: '#000',
            boxShadow: `0 15px 45px ${feature.color}30`, 
            textDecoration: 'none',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = `0 20px 60px ${feature.color}45` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = `0 15px 45px ${feature.color}30` }}
          >
            Get Started
          </Link>
        </div>
      </section>

    </main>
  )
}