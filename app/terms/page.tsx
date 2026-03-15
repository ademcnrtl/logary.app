"use client"

import Link from 'next/link'

const LAST_UPDATED = "March 15, 2026"

const TOS_SECTIONS = [
    {
        title: "1. Acceptance of Terms",
        content: "By downloading, accessing, or using the Logary mobile application, website, Logy AI Discord bot, and all associated services (collectively referred to as the 'Service' or 'Logary'), you agree to be bound by these Terms of Service ('Terms'). If you do not agree to all the terms and conditions of this agreement, you may not use the Service. Logary reserves the right to update or modify these Terms at any time without prior notice. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms."
    },
    {
        title: "2. Eligibility and Account Security",
        content: "You must be at least 13 years of age to create an account on Logary. By creating an account, you represent and warrant that you meet this age requirement. You are solely responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. Logary cannot and will not be liable for any loss or damage arising from your failure to comply with this security obligation."
    },
    {
        title: "3. User-Generated Content (UGC) and Conduct",
        content: "Logary allows users to post reviews, create custom game lists, upload images (including avatars and custom library banners), share updates in the Community tab, and interact with other users. \n\nBy posting content on Logary, you retain all ownership rights to your content. However, you grant Logary a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, distribute, prepare derivative works of, and display that content in connection with the Service.\n\nYou strictly agree NOT to post content that:\n• Is illegal, defamatory, abusive, harassing, racist, or hateful.\n• Contains explicitly adult content (NSFW), pornography, or extreme graphic violence.\n• Infringes on any third party's intellectual property rights, copyrights, or trademarks.\n• Constitutes spam, unauthorized advertising, or malicious links.\n\nWe reserve the right, but are not obligated, to monitor, review, and remove any content or accounts that violate these guidelines at our sole discretion."
    },
    {
        title: "4. Logary PRO and Patreon Subscriptions",
        content: "Logary offers an optional premium tier known as 'Logary PRO', which provides access to exclusive features (such as Animated GIF support, Custom Library Banners, Colored Usernames, and Expanded Showcase Slots).\n\nBilling, subscription management, and payment processing are handled entirely by third-party platforms (Patreon). Logary does not store or process your credit card information. \n\nYour PRO status is automatically granted by linking your Patreon email. If your Patreon subscription is canceled, expires, or payment fails, your PRO features will be automatically paused and your profile will revert to the standard free tier until the subscription is renewed. Refunds are subject to Patreon's official refund policies."
    },
    {
        title: "5. Third-Party Integrations and API Data",
        content: "Logary heavily relies on third-party integrations to function. Game metadata, artwork, and release dates are sourced from external APIs (such as RAWG or IGDB). Game library imports are facilitated through integrations like the Steam API, PlayStation Network, Xbox Live, and Nintendo. \n\nLogary makes no guarantees regarding the uptime, accuracy, or permanent availability of these third-party services. If a third-party provider (e.g., Steam) changes their API policies, restricts access, or experiences downtime, certain features of Logary may be temporarily or permanently degraded. Logary shall not be held liable for any loss of functionality resulting from third-party API changes."
    },
    {
        title: "6. Logy AI and Discord Ecosystem",
        content: "Logary provides artificial intelligence features ('Logy AI') within our official Discord server, which are synchronized with the Logary application database.\n\nBy interacting with Logy AI, you agree not to attempt to reverse-engineer the bot, bypass its rate limits, or use prompt-injection techniques to generate harmful, illegal, or inappropriate content. Abuse of the AI bot or violations of our Discord server rules will result in an immediate ban from the server and may result in the termination of your Logary mobile app account."
    },
    {
        title: "7. Privacy and Data Ownership",
        content: "Your privacy is important to us. Our collection and use of your personal information (such as your email address, gaming IDs, and play history) are governed by our Privacy Policy. \n\nYou have the absolute right to your data. You may permanently delete your account and wipe all associated data from our servers at any time using the 'Burn Account' feature located in the 'Danger Zone' within the app's settings. Once an account is deleted, the data cannot be recovered."
    },
    {
        title: "8. Intellectual Property",
        content: "All rights, title, and interest in and to the Logary application, its original code, UI/UX design, logos, algorithms, and brand identity are and will remain the exclusive property of Logary and its developers. You may not copy, modify, distribute, sell, or lease any part of our Service without our explicit written consent."
    },
    {
        title: "9. Disclaimer of Warranties",
        content: "LOGARY IS PROVIDED ON AN 'AS IS' AND 'AS AVAILABLE' BASIS. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.\n\nWhile we strive to provide a flawless experience, we do not warrant that the Service will always be secure, uninterrupted, error-free, or that any defects will be corrected. As Logary is actively in development (Beta), occasional data sync issues or bugs may occur."
    },
    {
        title: "10. Limitation of Liability",
        content: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, LOGARY, ITS CREATORS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE."
    }
]

export default function TermsOfServicePage() {
    return (
        <main style={{ backgroundColor: '#08080F', minHeight: '100vh', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <div style={{ maxWidth: 840, margin: '0 auto', padding: '80px 24px 120px' }}>
                <div style={{ marginBottom: 60, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 40 }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 16, color: '#fff' }}>
                        Terms of Service
                    </h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: 0.7 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#00D4FF' }} />
                        <p style={{ fontSize: 15, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            EFFECTIVE DATE: {LAST_UPDATED}
                        </p>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
                    {TOS_SECTIONS.map((section, index) => (
                        <section key={index} style={{ scrollMarginTop: 100 }}>
                            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 16, letterSpacing: '-0.02em' }}>
                                {section.title}
                            </h2>
                            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, whiteSpace: 'pre-wrap' }}>
                                {section.content}
                            </p>
                        </section>
                    ))}

                    <section style={{ marginTop: 20, padding: '40px', borderRadius: 20, backgroundColor: '#0E0E18', border: '1px solid rgba(0, 212, 255, 0.15)' }}>
                        <h2 style={{ fontSize: 20, fontWeight: 800, color: '#00D4FF', marginBottom: 16 }}>
                            11. Contact Information
                        </h2>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                            If you have any questions, concerns, or legal inquiries regarding these Terms of Service, please contact our support team:
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <span style={{ fontWeight: 700, color: '#fff', width: 70 }}>Email:</span>
                                <a href="mailto:hello@logary.app" style={{ color: '#00D4FF', textDecoration: 'none', fontWeight: 600 }}>hello@logary.app</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <span style={{ fontWeight: 700, color: '#fff', width: 70 }}>Discord:</span>
                                <a target='_blank' href="https://discord.gg/SJNqjdqMd3" style={{ color: '#00D4FF', textDecoration: 'none', fontWeight: 600 }}>Official Logary Server</a>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </main>
    )
}