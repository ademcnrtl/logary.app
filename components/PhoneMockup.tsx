"use client"

import { useState } from 'react'

const DNA_BARS = [
  { label: 'ACTION', pct: 34, color: '#FF3B7A', grad: 'linear-gradient(90deg,#FF3B7A,#FF6B2B)' },
  { label: 'ADVENTURE', pct: 19, color: '#A259FF', grad: 'linear-gradient(90deg,#A259FF,#7C3AED)' },
  { label: 'RPG', pct: 13, color: '#00D4FF', grad: 'linear-gradient(90deg,#00D4FF,#0099CC)' },
  { label: 'PLATFORMER', pct: 13, color: '#00E676', grad: 'linear-gradient(90deg,#00FF87,#00CC6A)' },
  { label: 'ARCADE', pct: 9, color: '#FFD600', grad: 'linear-gradient(90deg,#FFD600,#FFA000)' },
]

const STATS = [
  { val: '98', label: 'PLAYED', color: '#FF3B7A' },
  { val: '1', label: 'PLAYING', color: '#00D4FF' },
  { val: '20', label: 'BACKLOG', color: '#A259FF' },
  { val: '0', label: 'WISHLIST', color: '#00FF87' },
]

const TABS = ['EXPLORE', 'COMMUNITY', 'ACTIVITY']

export default function PhoneMockup() {
  const [statsVisible, setStatsVisible] = useState(true)
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <style>{`
        @keyframes phoneFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .phone-mockup {
          animation: phoneFloat 5s ease-in-out infinite;
        }
        .stat-transition {
          transition: opacity .3s ease, filter .3s ease;
        }
        .game-card-hover {
          transition: transform .15s ease;
        }
        .game-card-hover:active {
          transform: scale(.96);
        }
        .tab-item {
          cursor: pointer;
          transition: color .15s;
        }
        .eye-btn-press:active {
          transform: scale(.92);
          background: rgba(255,255,255,.14) !important;
        }
      `}</style>

      <div className="phone-mockup" style={{
        width: 300,
        height: 630,
        background: '#0d0d0f',
        borderRadius: 44,
        border: '1.5px solid rgba(255,255,255,.13)',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 32px 80px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.04)',
        fontFamily: "-apple-system, 'SF Pro Display', sans-serif",
      }}>

        <div style={{
          position: 'absolute', top: 12, left: '50%',
          transform: 'translateX(-50%)',
          width: 96, height: 28,
          background: '#000', borderRadius: 20, zIndex: 20,
        }} />

        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', paddingTop: 50 }}>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px 8px' }}>
            <span style={{ fontSize: 17, fontWeight: 800, color: '#00D4FF', letterSpacing: '.08em' }}>
              LOGARY
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="10.5" cy="10.5" r="6.5" stroke="rgba(255,255,255,.5)" strokeWidth="1.8" />
                <path d="M15.5 15.5L20 20" stroke="rgba(255,255,255,.5)" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 3a7 7 0 0 0-7 7v5H3l2 3h14l2-3h-2v-5a7 7 0 0 0-7-7z" stroke="rgba(255,255,255,.5)" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
              <div style={{
                width: 30, height: 30, borderRadius: '50%',
                background: 'linear-gradient(135deg,#ff9a9e,#fecfef,#a8edea)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 15, border: '1.5px solid rgba(255,255,255,.2)',
              }}>🦔</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2px 18px 12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'linear-gradient(135deg,#ff9a9e,#fecfef,#a8edea)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, border: '2px solid rgba(255,255,255,.15)',
                }}>🦔</div>
                <div style={{
                  position: 'absolute', bottom: 2, right: 2,
                  width: 10, height: 10, borderRadius: '50%',
                  background: '#00D4FF', border: '2px solid #0d0d0f',
                }} />
              </div>
              <div>
                <div style={{ fontSize: 9, color: 'rgba(255,255,255,.35)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 3 }}>
                  WELCOME BACK
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>ademcertel</span>
                  <div style={{
                    width: 15, height: 15, borderRadius: '50%', background: '#00D4FF',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 2.5" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="eye-btn-press"
              onClick={() => setStatsVisible(v => !v)}
              style={{
                width: 34, height: 34, borderRadius: 10,
                background: 'rgba(255,255,255,.07)',
                border: '1px solid rgba(255,255,255,.09)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', flexShrink: 0, transition: 'background .15s',
              }}
            >
              {statsVisible ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" stroke="rgba(255,255,255,.55)" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="3" stroke="rgba(255,255,255,.55)" strokeWidth="1.8" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" stroke="rgba(255,255,255,.25)" strokeWidth="1.8" />
                  <path d="M4 4l16 16" stroke="rgba(255,255,255,.25)" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>

          {statsVisible ? (
            <div className="stat-transition" style={{
              display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
              gap: 6, padding: '0 14px', marginBottom: 12,
              opacity: statsVisible ? 1 : 0,
              filter: statsVisible ? 'none' : 'blur(6px)',
            }}>
              {STATS.map(s => (
                <div key={s.label} style={{
                  background: '#141418', borderRadius: 10,
                  padding: '8px 4px 6px', textAlign: 'center',
                  border: `1px solid ${s.color}33`, position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: s.color }} />
                  <span style={{ fontSize: 17, fontWeight: 800, color: s.color, display: 'block', marginBottom: 3 }}>{s.val}</span>
                  <span style={{ fontSize: 7, color: 'rgba(255,255,255,.3)', fontWeight: 600, letterSpacing: '.05em' }}>{s.label}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="stat-transition" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              height: 54, marginBottom: 12, padding: '0 14px',
            }}>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,.2)', letterSpacing: '.1em' }}>
                ••••  ••••  ••••
              </span>
            </div>
          )}

          <div style={{
            margin: '0 14px 10px', background: '#141418',
            borderRadius: 13, border: '1px solid rgba(255,255,255,.06)', padding: '11px 13px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{
                width: 22, height: 22, borderRadius: 6,
                background: 'linear-gradient(135deg,#00D4FF,#A259FF)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0,
              }}>🧬</div>
              <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase', letterSpacing: '.12em' }}>
                GAMING DNA
              </span>
            </div>
            {DNA_BARS.map((row, i) => (
              <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: i < DNA_BARS.length - 1 ? 5 : 0 }}>
                <span style={{ fontSize: 8, fontWeight: 600, color: 'rgba(255,255,255,.35)', letterSpacing: '.05em', width: 58, flexShrink: 0, textTransform: 'uppercase' }}>
                  {row.label}
                </span>
                <div style={{ flex: 1, height: 5, background: 'rgba(255,255,255,.05)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${row.pct}%`, background: row.grad, borderRadius: 3 }} />
                </div>
                <span style={{ fontSize: 8, fontWeight: 700, color: row.color, width: 24, textAlign: 'right', flexShrink: 0 }}>
                  {row.pct}%
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', padding: '0 14px', borderBottom: '1px solid rgba(255,255,255,.06)', marginBottom: 10 }}>
            {TABS.map((tab, i) => (
              <div
                key={tab}
                className="tab-item"
                onClick={() => setActiveTab(i)}
                style={{
                  padding: '6px 11px', fontSize: 8, fontWeight: 700,
                  letterSpacing: '.08em', position: 'relative',
                  color: activeTab === i ? '#00D4FF' : 'rgba(255,255,255,.25)',
                }}
              >
                {tab}
                {activeTab === i && (
                  <div style={{
                    position: 'absolute', bottom: -1, left: 0, right: 0,
                    height: 2, background: '#00D4FF', borderRadius: 1,
                  }} />
                )}
              </div>
            ))}
          </div>

          <div style={{ padding: '0 14px', flex: 1, overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>
                For You: <span style={{ color: '#00D4FF', fontStyle: 'italic' }}>Action</span>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#00D4FF">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
              <div className="game-card-hover" style={{ height: 85, borderRadius: 11, overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,#1a4a7a,#071a30)' }} />
                <svg style={{ position: 'absolute', bottom: 20, left: 0, right: 0, width: '100%' }} height="36" viewBox="0 0 140 36" preserveAspectRatio="none">
                  <path d="M0 36 L0 20 Q15 5 30 14 Q45 22 60 7 Q75 -2 90 11 Q105 22 120 9 Q130 2 140 7 L140 36Z" fill="#091e30" />
                </svg>
                <svg style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%' }} height="24" viewBox="0 0 140 24" preserveAspectRatio="none">
                  <path d="M0 24 L0 14 Q25 3 45 12 Q65 20 85 8 Q105 0 125 10 L140 8 L140 24Z" fill="#060f1a" />
                </svg>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent,rgba(0,0,0,.9))', padding: '4px 7px 6px' }}>
                  <div style={{ fontSize: 8, fontWeight: 700, color: '#fff', marginBottom: 2 }}>The Elder Scrolls VI</div>
                  <div style={{ fontSize: 8, fontWeight: 700, color: '#FFD600' }}>★ 97</div>
                </div>
              </div>

              <div className="game-card-hover" style={{ height: 85, borderRadius: 11, overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,#150f2e,#080518)' }} />
                <svg style={{ position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)' }} width="60" height="52" viewBox="0 0 64 60">
                  <rect x="22" y="2" width="20" height="14" rx="2" fill="#1a1040" />
                  <rect x="25" y="5" width="6" height="4" rx="1" fill="#00D4FF" opacity=".9" />
                  <rect x="33" y="5" width="6" height="4" rx="1" fill="#00D4FF" opacity=".9" />
                  <rect x="28" y="15" width="8" height="4" rx="1" fill="#120b30" />
                  <rect x="16" y="18" width="32" height="24" rx="3" fill="#1a1040" />
                  <ellipse cx="32" cy="28" rx="6" ry="4" fill="#A259FF" opacity=".35" />
                  <rect x="6" y="18" width="12" height="10" rx="2" fill="#120b30" />
                  <rect x="46" y="18" width="12" height="10" rx="2" fill="#120b30" />
                  <rect x="8" y="26" width="8" height="16" rx="2" fill="#0e0826" />
                  <rect x="48" y="26" width="8" height="16" rx="2" fill="#0e0826" />
                  <rect x="20" y="40" width="10" height="18" rx="2" fill="#0e0826" />
                  <rect x="34" y="40" width="10" height="18" rx="2" fill="#0e0826" />
                </svg>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 40%,rgba(162,89,255,.1),transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent,rgba(0,0,0,.9))', padding: '4px 7px 6px' }}>
                  <div style={{ fontSize: 8, fontWeight: 700, color: '#fff', marginBottom: 2 }}>Super Robot Taisen</div>
                  <div style={{ fontSize: 8, fontWeight: 700, color: '#FFD600' }}>★ 97</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            background: '#111114', borderTop: '1px solid rgba(255,255,255,.06)',
            display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start',
            padding: '9px 16px 22px', marginTop: 8, flexShrink: 0,
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
              <div style={{
                width: 42, height: 32, borderRadius: 11,
                background: 'rgba(0,212,255,.1)', border: '1px solid rgba(0,212,255,.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path d="M3 10L12 3L21 10V21H15V15H9V21H3V10Z" fill="rgba(0,212,255,.15)" stroke="#00D4FF" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#00D4FF' }} />
            </div>
            <div style={{ paddingTop: 6 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="10.5" cy="10.5" r="6.5" stroke="rgba(255,255,255,.22)" strokeWidth="1.8" />
                <path d="M15.5 15.5L20 20" stroke="rgba(255,255,255,.22)" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div style={{ paddingTop: 6 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="rgba(255,255,255,.22)" strokeWidth="1.8" />
                <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="rgba(255,255,255,.22)" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}