"use client"

import { useState, useEffect } from 'react'

const SECTIONS = [
  { id: 'about', label: 'About Us', icon: '◆' },
  { id: 'roadmap', label: 'Roadmap', icon: '◆' },
  { id: 'changelog', label: 'Changelog', icon: '◆' },
  { id: 'faq', label: 'FAQ', icon: '◆' },
  { id: 'contact', label: 'Contact', icon: '◆' },
  { id: 'privacy', label: 'Privacy Policy', icon: '◆' },
  { id: 'terms', label: 'Terms of Service', icon: '◆' },
]

const ROADMAP = [
  { status: 'done', label: 'Game Library & Deep Logging', q: 'Done' },
  { status: 'done', label: 'Community & Social Interactions', q: 'Done' },
  { status: 'done', label: 'Steam Library Integration', q: 'Done' },
  { status: 'done', label: 'Logary PRO & Patreon Auto-Sync', q: 'Done' },
  { status: 'done', label: 'Logy AI — Discord Bot Connected to DB', q: 'Done' },
  { status: 'active', label: 'Interactive Social Feed — Clickable profiles & @tags', q: 'This Week' },
  { status: 'active', label: 'Quick-Access Lists — Tap home stats to open libraries', q: 'This Week' },
  { status: 'active', label: 'Logary V1.0.0 Global Launch', q: 'Q2 2026' },
  { status: 'active', label: 'Console sync — Full PSN & Xbox import', q: 'Q3 2026' },
  { status: 'soon', label: 'Logary Web — Browser companion', q: 'Q4 2026' },
  { status: 'planned', label: 'Gaming Clubs & Sub-communities', q: 'Late 2026' },
  { status: 'planned', label: 'In-App Logy AI Assistant', q: '2027' },
  { status: 'planned', label: 'API for developers', q: '2027' },
]

const CHANGELOG = [
  {
    version: 'v0.9.9', date: 'March 2026', tag: 'Bug Hunter Edition',
    items: [
      'Logary PRO & Patreon Integration: Automatic PRO verification via email linking.',
      'Discord Account Linking System: Secure your community access with /verify.',
      'Library Banners: PRO members can now upload custom covers for their logged games.',
      'Complete All-Time Stats: Fully synchronized deep statistics and true playtimes.',
      'UI/UX Polishes: Bottom navigation bar stabilized, top header refined, memory cache drop bugs (disappearing avatars) completely eradicated.',
      'Splash Screen Stabilization: Flawless startup transitions on Android builds.'
    ],
  },
  {
    version: 'v0.9.8', date: 'March 2026', tag: 'Community & AI',
    items: [
      'Community Tab Launched: Post updates, share screenshots, and like individual comments with Threaded Replies.',
      'Meet Logy AI: Our custom-coded local LLM Discord bot directly synced with the app database. Generate real-time gamer cards!',
      'Storage Upgrade: Migrated to a dedicated Firebase Storage system for lightning-fast image and heavy GIF uploads.',
      'Total UI/UX Overhaul: Home, Search, Profile, and Game Detail pages rebuilt for a premium feel.',
      'Login & Security: Account recovery page is now fully active.'
    ],
  },
  {
    version: 'v0.9.5', date: 'February 2026',
    items: [
      'Gaming DNA: Live analytics of your gaming tastes displayed like RPG skill bars.',
      'Gaming Identity Hub: Add your Steam, PSN, Xbox, and Switch IDs for easy sharing.',
      'New Sharing Feature: 24-hour Story format to share your gaming moment of the day.',
      'Zero Loading Screens: Destroyed the infinite loading bug; databases now load instantly.',
      'Magic Updates (OTA): Over-the-air update infrastructure implemented for seamless patching.'
    ],
  },
  {
    version: 'v0.9.0', date: 'Early 2026',
    items: [
      'The "Top Shelf" Showcase: Display your all-time favorite masterpieces (up to 10 slots for PRO).',
      'Deep Logging & Reviews: Track exact hours played, detailed play statuses, and write full reviews.',
      'Social Interactions: Follow friends, create custom lists, and get instantly pinged by the Notification Engine.'
    ],
  },
]

// FAQ kısmı Discord duyuruna göre web'e uyarlandı!
const FAQ = [
  { q: 'What is Logary and where does the name come from?', a: 'Logary is a combination of the words "Log" (tracking your journey) and "Diary" (your personal gaming history). Simply put, it\'s your personal, peaceful digital gaming diary where you can track games you\'ve played, finished, or plan to play.' },
  { q: 'Why is the app completely free and ad-free?', a: 'I started building Logary because I was tired of apps that bombard you with ads every two seconds or force-feed you content. I have a day job that pays the bills; Logary is my passion project. Providing a clean, ad-free, and relaxing space for gamers is my way of giving back to the community.' },
  { q: 'What is Logary PRO, and why should I upgrade?', a: 'The core features of Logary will always remain free. The PRO version is for those who want to stand out on their profile (GIF avatars/banners, colored usernames, expanded 10-game showcase, etc.) and, most importantly, want to support the ongoing development of the app. The revenue goes directly toward server, database (Storage), and API costs to keep Logary alive.' },
  { q: 'Can I auto-sync my Steam, PlayStation, or Xbox accounts?', a: 'We have already added Steam integration, so you can easily import your games! PlayStation and Xbox are a bit trickier since they are closed ecosystems, but I\'m actively researching ways to connect them to our system in the future.' },
  { q: 'I can\'t find a game I\'m looking for, or I want to suggest a new feature. What should I do?', a: 'We use the global RAWG database, so if a new game is added there, it usually appears in Logary within 24 hours. Still, if a game is missing or you have a brilliant idea, drop your thoughts in our Discord server\'s suggestions channel. I read every single one!' },
  { q: 'I’m a developer/designer, can I help work on the app?', a: 'Thank you so much for the interest! Right now, I’m keeping Logary as a "solo" project to maintain a consistent vision. However, if you find a bug or have a UI/UX suggestion, posting it in our Discord community is the absolute biggest help you can give me.' },
  { q: 'Who is Logy (the Discord Bot) and what can he do?', a: 'Logy is our official mascot and AI-powered gaming assistant! I custom-coded him specifically to bring the Logary experience directly into our Discord chats, and he is fully connected to our app\'s database. You can use commands like "logy profile" to generate a gamer card, "logy suggest" for recommendations, or "logy game" to get his intelligent take on a title.' },
  { q: 'When is the next big update coming?', a: 'Solo dev life is a bit unpredictable! I aim to push minor tweaks frequently and add a major feature every month. Don\'t forget to join our Discord to see what’s cooking in the background and read the latest patch notes!' },
]

const STATUS_STYLE: Record<string, { color: string; bg: string; label: string }> = {
  done: { color: '#00E676', bg: 'rgba(0,230,118,.1)', label: 'Done' },
  active: { color: '#00D4FF', bg: 'rgba(0,212,255,.1)', label: 'In progress' },
  soon: { color: '#A259FF', bg: 'rgba(162,89,255,.1)', label: 'Soon' },
  planned: { color: 'rgba(255,255,255,.3)', bg: 'rgba(255,255,255,.05)', label: 'Planned' },
}

export default function AboutPage() {
  const [active, setActive] = useState('about')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) setActive(hash)
  }, [])

  const scrollTo = (id: string) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
  }

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 style={{
      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
      fontWeight: 800, letterSpacing: '-.03em',
      color: '#fff', marginBottom: 8, lineHeight: 1.1,
    }}>{children}</h2>
  )

  const SectionSub = ({ children }: { children: React.ReactNode }) => (
    <p style={{ fontSize: 14, color: 'var(--text3)', marginBottom: 40, lineHeight: 1.7 }}>{children}</p>
  )

  return (
    <main style={{ paddingTop: 68, minHeight: '100vh' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '48px 48px', display: 'flex', gap: 56, alignItems: 'flex-start' }}>

        <aside style={{ width: 200, flexShrink: 0, position: 'sticky', top: 88 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,.25)', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 16 }}>
            Navigation
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {SECTIONS.map(s => (
              <button key={s.id} onClick={() => scrollTo(s.id)} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '8px 12px', borderRadius: 8, border: 'none',
                background: active === s.id ? 'rgba(0,212,255,.08)' : 'transparent',
                cursor: 'pointer', textAlign: 'left', transition: 'all .15s',
                borderLeft: active === s.id ? '2px solid #00D4FF' : '2px solid transparent',
              }}>
                <span style={{ fontSize: 13, fontWeight: active === s.id ? 600 : 400, color: active === s.id ? '#fff' : 'rgba(255,255,255,.35)', transition: 'color .15s' }}>
                  {s.label}
                </span>
              </button>
            ))}
          </nav>

          <div style={{ marginTop: 32, padding: '16px', borderRadius: 12, background: 'rgba(0,212,255,.05)', border: '1px solid rgba(0,212,255,.12)' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#00D4FF', marginBottom: 8 }}>Need help?</div>
            <p style={{ fontSize: 12, color: 'var(--text3)', lineHeight: 1.6, marginBottom: 10 }}>
              Join our Discord or send us a message.
            </p>
            <a href="https://discord.gg/SJNqjdqMd3" style={{ fontSize: 12, fontWeight: 600, color: '#00D4FF' }}>Open Discord</a>
          </div>
        </aside>

        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 80 }}>

          <section id="about" style={{ scrollMarginTop: 88 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20, padding: '5px 12px', borderRadius: 100, background: 'rgba(0,212,255,.08)', border: '1px solid rgba(0,212,255,.15)' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#00D4FF', letterSpacing: '.08em' }}>ABOUT US</span>
            </div>
            <SectionTitle>We built the app we always wanted.</SectionTitle>
            <SectionSub>Logary started as a personal diary. Now it's evolving into a community-driven gaming network.</SectionSub>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
              {[
                { val: '847K+', label: 'Games in database', color: '#00D4FF' },
                { val: 'v0.9.9', label: 'Current Beta Build', color: '#A259FF' },
                { val: 'Synced', label: 'Logy AI Integration', color: '#00E676' },
                { val: 'Live', label: 'Steam Sync Access', color: '#FFD600' },
              ].map(s => (
                <div key={s.label} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 14, padding: '20px 22px' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: s.color, letterSpacing: '-.02em', marginBottom: 4 }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: 'var(--text3)' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 16, padding: '24px 28px' }}>
              <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 16 }}>
                Logary was born out of frustration. We kept losing track of games we'd played, wanted to play,
                or had forgotten about. Spreadsheets were messy. Other apps were either too simple or aimed at
                a completely different audience.
              </p>
              <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.8 }}>
                We built Logary for people who take gaming seriously. It's built alongside our active Discord community, meaning every feature—from understanding your Gaming DNA via AI, to connecting your gaming identities, to quick-access library navigation—comes straight from real gamers' feedback.
              </p>
            </div>
          </section>

          <section id="roadmap" style={{ scrollMarginTop: 88 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20, padding: '5px 12px', borderRadius: 100, background: 'rgba(162,89,255,.08)', border: '1px solid rgba(162,89,255,.15)' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#A259FF', letterSpacing: '.08em' }}>ROADMAP</span>
            </div>
            <SectionTitle>What we're building.</SectionTitle>
            <SectionSub>Our public roadmap — built alongside our community.</SectionSub>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {ROADMAP.map((item, i) => {
                const s = STATUS_STYLE[item.status]
                return (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '14px 18px', borderRadius: 12,
                    background: 'var(--card)', border: '1px solid rgba(255,255,255,.07)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: item.status === 'planned' ? 'var(--text3)' : 'var(--text2)' }}>{item.label}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                      <span style={{ fontSize: 11, color: 'var(--text3)' }}>{item.q}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, color: s.color, background: s.bg, padding: '3px 9px', borderRadius: 100, letterSpacing: '.04em' }}>
                        {s.label}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section id="changelog" style={{ scrollMarginTop: 88 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20, padding: '5px 12px', borderRadius: 100, background: 'rgba(0,230,118,.08)', border: '1px solid rgba(0,230,118,.15)' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#00E676', letterSpacing: '.08em' }}>CHANGELOG</span>
            </div>
            <SectionTitle>What's new.</SectionTitle>
            <SectionSub>Every major feature update, leading up to V1.</SectionSub>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {CHANGELOG.map((c, i) => (
                <div key={i} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 16, padding: '22px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                    <span style={{ fontSize: 16, fontWeight: 800, color: '#fff' }}>{c.version}</span>
                    {c.tag && (
                      <span style={{ fontSize: 10, fontWeight: 700, color: '#00D4FF', background: 'rgba(0,212,255,.1)', padding: '3px 9px', borderRadius: 100, letterSpacing: '.06em' }}>
                        {c.tag}
                      </span>
                    )}
                    <span style={{ fontSize: 12, color: 'var(--text3)', marginLeft: 'auto' }}>{c.date}</span>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {c.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 }}>
                        <span style={{ color: '#00E676', marginTop: 1, flexShrink: 0 }}>✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" style={{ scrollMarginTop: 88 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20, padding: '5px 12px', borderRadius: 100, background: 'rgba(255,214,0,.08)', border: '1px solid rgba(255,214,0,.15)' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#FFD600', letterSpacing: '.08em' }}>FAQ</span>
            </div>
            <SectionTitle>Common questions.</SectionTitle>
            <SectionSub>Everything you need to know about Logary.</SectionSub>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {FAQ.map((item, i) => (
                <div key={i} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 14, overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 20px', background: 'transparent', border: 'none', cursor: 'pointer',
                    textAlign: 'left',
                  }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{item.q}</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, marginLeft: 16, transition: 'transform .2s', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)' }}>
                      <path d="M2 4l4 4 4-4" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 20px 16px', fontSize: 13, color: 'var(--text2)', lineHeight: 1.75, borderTop: '1px solid rgba(255,255,255,.05)' }}>
                      <div style={{ paddingTop: 14 }}>{item.a}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="contact" style={{ scrollMarginTop: 88 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20, padding: '5px 12px', borderRadius: 100, background: 'rgba(0,212,255,.08)', border: '1px solid rgba(0,212,255,.15)' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#00D4FF', letterSpacing: '.08em' }}>CONTACT</span>
            </div>
            <SectionTitle>Get in touch.</SectionTitle>
            <SectionSub>We read every message. Seriously.</SectionSub>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
              {[
                { label: 'Discord', desc: 'Fastest response.', color: '#5865F2', href: 'https://discord.gg/SJNqjdqMd3' },
                { label: 'Email', desc: 'hello@logary.app', color: '#00D4FF', href: 'mailto:hello@logary.app' },
              ].map(c => (
                <a key={c.label} href={c.href} style={{
                  display: 'block', padding: '20px', borderRadius: 14,
                  background: 'var(--card)', border: '1px solid rgba(255,255,255,.07)',
                  transition: 'border-color .18s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.18)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)')}
                >
                  <div style={{ fontSize: 14, fontWeight: 700, color: c.color, marginBottom: 6 }}>{c.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--text3)' }}>{c.desc}</div>
                </a>
              ))}
            </div>
          </section>

          <section id="privacy" style={{ scrollMarginTop: 88 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20, padding: '5px 12px', borderRadius: 100, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.5)', letterSpacing: '.08em' }}>PRIVACY & TERMS</span>
            </div>
            <SectionTitle>Privacy Policy.</SectionTitle>
            <div style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 16, padding: '28px' }}>
              {[
                { title: '1. Information We Collect', body: 'We collect information you provide directly, including your email address, username, and linked gaming identities (e.g., Steam, PSN, Xbox Live). Additionally, we store your gaming activity, such as logged games, playtimes, ratings, reviews, custom lists, and community posts.' },
                { title: '2. How We Use Your Data', body: 'Your data is strictly used to provide and enhance the Logary experience. This includes calculating your Gaming DNA, powering Logy AI\'s personalized recommendations, facilitating social interactions within the Community tab, and authenticating your PRO status via Patreon.' },
                { title: '3. Data Sharing & Third Parties', body: 'We do NOT sell your personal data to advertisers or data brokers. We only share essential data with trusted service providers required for app functionality, such as Firebase (hosting & secure database), Patreon (subscription verification), and game databases (RAWG/IGDB) via secure API calls. Payments are processed entirely by third parties; we never store your financial information.' },
                { title: '4. Data Retention and Your Rights', body: 'You retain full ownership and control over your data. You have the right to access, modify, or permanently delete your personal information. Using the in-app "Burn Account" feature in the Danger Zone instantly and irreversibly erases your profile, logged games, social posts, and connected identities from our active servers.' },
                { title: '5. Security Measures', body: 'We implement industry-standard security protocols to protect your personal information from unauthorized access, alteration, or destruction. All data transmissions between your device and our servers are securely encrypted.' },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: i < 4 ? 24 : 0, paddingBottom: i < 4 ? 24 : 0, borderBottom: i < 4 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</div>
                  <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.75 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}