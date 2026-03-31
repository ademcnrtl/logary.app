"use client";

import { useState } from 'react'
import Link from 'next/link'

export default function Ecosystem() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    return (
        <main style={{
            paddingTop: 120,
            fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif",
            backgroundColor: '#08080F',
            color: '#FFFFFF',
            minHeight: '100vh',
            overflowX: 'hidden'
        }}>

            <section style={{ textAlign: 'center', padding: '0 24px', marginBottom: 80, maxWidth: 800, margin: '0 auto 80px' }}>
                <div style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    borderRadius: 100,
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    marginBottom: 24,
                    color: '#00D4FF',
                    background: 'rgba(0, 212, 255, 0.05)'
                }}>
                    LOGARY ECOSYSTEM
                </div>

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    letterSpacing: '-.03em',
                    color: '#FFFFFF',
                    marginBottom: 24,
                }}>
                    Resources & Tools
                </h1>

                <p style={{
                    fontSize: 18,
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.6,
                    fontWeight: 400,
                }}>
                    Empowering the gaming world. Access global gaming data, interact with our community-focused Discord bot, and explore the tools we’ve designed for game developers.
                </p>
            </section>

            <section style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px 120px' }}>

                <div style={{
                    background: '#11111A',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 32,
                    padding: '48px',
                    marginBottom: 32,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredCard === 'logy' ? '0 24px 64px rgba(0,212,255,0.08)' : 'none',
                    borderColor: hoveredCard === 'logy' ? 'rgba(0,212,255,0.3)' : 'rgba(255,255,255,0.05)'
                }}
                    onMouseEnter={() => setHoveredCard('logy')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div style={{
                        position: 'absolute', top: '-50%', right: '-10%', width: 600, height: 600,
                        background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
                        pointerEvents: 'none', borderRadius: '50%'
                    }} />

                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                        <div style={{ width: 56, height: 56, overflow: 'hidden', flexShrink: 0, borderRadius: 12 }}>
                            <img src="/logy.png" alt="Logy Bot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div>
                            <div style={{ fontSize: 12, fontWeight: 800, color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>DISCORD INTEGRATION</div>
                            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>Meet Logy</h2>
                        </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: 700, marginBottom: 40 }}>
                        We are bringing the analytical power of Logary directly to our Discord server. Logy allows our community to compare Gaming DNAs, view global rating statistics, and save game progress directly without ever leaving the chat.
                    </p>

                    <Link href="https://discord.gg/CDAgZYeZnP" target="_blank" rel="noreferrer" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '14px 28px', borderRadius: 100, fontSize: 15, fontWeight: 700,
                        background: 'linear-gradient(135deg, #00D4FF, #A259FF)', color: '#fff',
                        textDecoration: 'none', alignSelf: 'flex-start',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        boxShadow: '0 4px 16px rgba(0,212,255,.2)'
                    }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,212,255,.3)' }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,212,255,.2)' }}
                    >
                        Try it on Discord
                    </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>

                    <div style={{
                        background: '#11111A', border: '1px solid rgba(255,255,255,0.05)',
                        borderRadius: 32, padding: '40px', display: 'flex', flexDirection: 'column',
                        transition: 'all 0.3s ease',
                    }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(162,89,255,0.3)' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)' }}
                    >
                        <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(162,89,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#A259FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Global Insights & Reports</h3>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 32, flex: 1 }}>
                            Dive into our data. We publish regular reports on completion rates, genre shifts, and player retention based on millions of hours of gameplay. Designed for industry analysts and curious gamers.
                        </p>
                        <a href="https://www.patreon.com/cw/logary" target="_blank" rel="noreferrer" style={{ fontSize: 14, fontWeight: 700, color: '#A259FF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                            Access Reports on Patreon <span aria-hidden="true">→</span>
                        </a>
                    </div>

                    <div style={{
                        background: '#11111A', border: '1px solid rgba(255,255,255,0.05)',
                        borderRadius: 32, padding: '40px', display: 'flex', flexDirection: 'column',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute', top: 32, right: 32,
                            background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)',
                            padding: '4px 12px', borderRadius: 100, fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,0.4)',
                            display: 'flex', alignItems: 'center', gap: 6
                        }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFD600' }} />
                            COMING SOON
                        </div>

                        <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Logary for Developers</h3>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 32, flex: 1 }}>
                            Are you an independent studio or publisher? Claim your game on Logary to access your private dashboard. Understand the true Gaming DNA of your audience and analyze your game's completion statistics.
                        </p>
                        <span style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.3)', cursor: 'not-allowed' }}>
                            Developer API under construction
                        </span>
                    </div>

                </div>
            </section>
        </main>
    )
}