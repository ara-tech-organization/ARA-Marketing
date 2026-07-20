import { useRef } from 'react'
import {
  Building2, ChevronRight, ArrowRight, ArrowUpRight,
  Shield, Globe, Zap, Lock, CheckCircle2, TrendingUp, Award,
} from 'lucide-react'
import CursorSpotlight from '../common/CursorSpotlight'

const bullets = [
  'Enterprise website development services in Thanjavur',
  'AI-integrated, high-performance architecture',
  'Industry-leading SSL, WAF & GDPR compliance',
  'Full-cycle â€” strategy, design, launch & support',
  'Scalable solutions for 10x business growth',
]

const stats = [
  { val: '500+', label: 'Enterprise Projects' },
  { val: '99.9%', label: 'Uptime Guaranteed' },
  { val: '10x', label: 'Faster Scalability' },
  { val: '100%', label: 'Secure & Compliant' },
]

const chips = [
  { icon: Shield, label: 'Enterprise Security' },
  { icon: Zap,    label: 'AI-Powered' },
  { icon: Globe,  label: 'Global Scale' },
  { icon: Lock,   label: 'GDPR Compliant' },
]

export default function EWHero() {
  const heroRef = useRef(null)

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(135deg,#0d2244 0%,#0a1a34 40%,#0d2244 100%)' }}
    >
      {/* Cursor-follow spotlight */}
      <CursorSpotlight
        targetRef={heroRef}
        size={720}
        blur={110}
        blendMode="normal"
        opacity={0.5}
        background="conic-gradient(from 0deg at 50% 50%, #1e3a8a 0%, #2563eb 25%, #60a5fa 50%, #2563eb 75%, #1e3a8a 100%)"
      />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'var(--brand-gradient-dots)', backgroundSize: '32px 32px' }} />

      {/* Orbs */}
      <div className="hidden lg:block absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />
      <div className="hidden lg:block absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-16 lg:py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          {/* â”€â”€ LEFT: Text â”€â”€ */}
          <div className="flex-1 lg:max-w-[52%] animate-hero-enter">

            {/* Breadcrumb */}
            <nav className="hidden sm:flex items-center gap-1.5 text-[11.5px] mb-6 text-white/40">
              <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
              <ChevronRight size={11} className="text-white/20" />
              <a href="/services/website-development" className="hover:text-blue-400 transition-colors">Web Design</a>
              <ChevronRight size={11} className="text-white/20" />
              <span className="text-blue-400 font-medium">Enterprise Website</span>
            </nav>

            <div className="text-center lg:text-left">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-2.5 sm:px-4 py-2 rounded-full text-[9px] sm:text-[11px] font-bold uppercase tracking-widest mb-6 text-blue-400 bg-white/10 border border-white/20"
                style={{ backdropFilter: 'blur(8px)' }}>
                <Building2 size={10} /> Enterprise Website Development
              </span>

              {/* H1 */}
              <h1 className="leading-[1.2] tracking-tight mb-5 text-white"
                style={{ fontWeight: 700, fontSize: 'clamp(26px, 6.5vw, 40px)' }}>
                <span style={{ display: 'block' }}>Transform Your Enterprise</span>
                <span className="text-gradient-blue" style={{ display: 'block' }}>
                  Digital Presence
                </span>
              </h1>

              <p className="text-[13px] sm:text-[14.5px] leading-[1.90] mb-7 max-w-[540px] mx-auto lg:mx-0 text-white/65">
                ARA Discover Marketing is a trusted enterprise website development company in Thanjavur that creates AI-driven enterprise websites to boost your digital presence and simplify complex business operations.
              </p>
            </div>

            {/* Bullet list */}
            <ul className="flex flex-col gap-2.5 mb-8">
              {bullets.map(b => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-blue-400" />
                  <span className="text-[13px] sm:text-[13.5px] leading-[1.7] text-white/70">{b}</span>
                </li>
              ))}
            </ul>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {chips.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-white/70"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(6px)',
                  }}>
                  <Icon size={10} className="text-blue-400" /> {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 sm:mb-10">
              <a href="tel:+918110025254"
                className="btn-glow inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'var(--brand-gradient)', boxShadow: '0 8px 28px rgba(37,99,235,0.35)' }}>
                Start Your Project <ArrowRight size={13} />
              </a>
              <a href="#ew-intro"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-semibold text-blue-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:bg-blue-600"
                style={{ border: '1px solid rgba(96,165,250,0.3)' }}>
                Explore Services <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-10 pt-6 sm:pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
              {stats.map(({ val, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-[20px] sm:text-[28px] font-bold leading-tight text-gradient-blue">
                    {val}
                  </span>
                  <span className="text-[10.5px] mt-0.5 text-white/50">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* â”€â”€ RIGHT: Hero image with floating badges â”€â”€ */}
          <div className="w-full lg:flex-1 animate-hero-visual">
            <div className="relative">

              {/* Glow halo */}
              <div className="absolute -inset-6 rounded-[2.5rem] pointer-events-none"
                style={{ background: 'var(--brand-gradient-glow-dark)' }} />

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 32px 80px rgba(37,99,235,0.18)' }}>

                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=520&fit=crop&auto=format&q=80"
                  alt="Enterprise website development company in Thanjavur"
                  loading="eager"
                  className="w-full object-cover"
                  style={{ height: 420 }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(160deg, rgba(37,99,235,0.35) 0%, rgba(10,26,52,0.55) 100%)' }} />

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-5"
                  style={{ background: 'linear-gradient(0deg, rgba(2,11,24,0.92) 0%, transparent 100%)' }}>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-1"
                    style={{ color: 'rgba(167,139,250,0.85)' }}>ARA Discover Marketing</p>
                  <p className="text-white font-bold text-[15px] sm:text-[17px] leading-tight">
                    The Best Enterprise Web Development Company in Thanjavur
                  </p>
                  <p className="text-[12px] mt-1" style={{ color: 'rgba(255,255,255,0.50)' }}>
                    Scalable Â· Secure Â· AI-Powered Â· High-Performance
                  </p>
                </div>
              </div>

              {/* Floating badge â€” top left */}
              <div className="absolute -top-4 -left-4 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl animate-float"
                style={{
                  background: '#0d2244',
                  border: '1px solid rgba(96,165,250,0.2)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 30px rgba(124,58,237,0.22)',
                }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--brand-gradient)' }}>
                  <Award size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-[8px] font-semibold leading-none mb-0.5 text-white/40">Projects Delivered</p>
                  <p className="text-[14px] font-black text-white leading-tight">500+ Done</p>
                </div>
              </div>

              {/* Floating badge â€” bottom right */}
              <div className="absolute -bottom-4 -right-4 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl animate-float"
                style={{
                  background: '#0d2244',
                  border: '1px solid rgba(16,185,129,0.35)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 30px rgba(16,185,129,0.18)',
                  animationDelay: '1.8s',
                }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--brand-gradient)' }}>
                  <TrendingUp size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-[8px] font-semibold leading-none mb-0.5 text-white/40">Client Satisfaction</p>
                  <p className="text-[14px] font-black text-white leading-tight">98% Rate</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
