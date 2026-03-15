"use client"

import PhoneMockup from './PhoneMockup'

const STATS = [
  { val: '240K+', label: 'Active users' },
  { val: '4.8★', label: 'App Store' },
  { val: 'Free', label: 'To start' },
]

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '100px 40px 80px',
      maxWidth: 1160,
      margin: '0 auto',
      gap: 80,
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h1 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(2.6rem, 4.5vw, 4.2rem)',
          fontWeight: 800, lineHeight: 1.08,
          letterSpacing: '-.03em', color: 'var(--text)',
          marginBottom: 20,
        }}>
          Track every game<br />
          you&apos;ve ever{' '}
          <em style={{ fontStyle: 'normal', color: 'var(--cyan)' }}>played.</em>
        </h1>
        <p style={{ fontSize: 17, color: 'var(--text2)', lineHeight: 1.65, maxWidth: 460, marginBottom: 36 }}>
          Log your library, discover your Gaming DNA, and get personalized recommendations.
          The game tracker built for people who take gaming seriously.
        </p>
        <div style={{ display: 'flex', gap: 12, marginBottom: 52, flexWrap: 'wrap' }}>
          <a href="#download" className="btn-primary">
            Logary Download
          </a>
          <a href="#features" className="btn-outline">See features →</a>
        </div>
        <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
          {STATS.map(s => (
            <div key={s.label} style={{ paddingLeft: 16, borderLeft: '2px solid var(--card)' }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 26, fontWeight: 700, color: 'var(--text)', display: 'block', marginBottom: 2 }}>
                {s.val}
              </span>
              <span style={{ fontSize: 13, color: 'var(--text3)', fontWeight: 500 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flexShrink: 0 }}>
        <PhoneMockup />
      </div>
    </section>
  )
}