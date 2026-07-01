import {
  Building2, ChevronRight, ArrowRight, ArrowUpRight,
  Shield, Globe, Zap, Lock, CheckCircle2, TrendingUp, Award,
} from 'lucide-react'

const bullets = [
  'Enterprise website development services in Thanjavur',
  'AI-integrated, high-performance architecture',
  'Industry-leading SSL, WAF & GDPR compliance',
  'Full-cycle — strategy, design, launch & support',
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
  return (
    <section
      className="relative overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(150deg, #020b18 0%, #060f22 50%, #030c1c 100%)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.14) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Orbs */}
      <div className="hidden lg:block absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 65%)' }} />
      <div className="hidden lg:block absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-16 lg:py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          {/* ── LEFT: Text ── */}
          <div className="flex-1 lg:max-w-[52%] animate-hero-enter">

            {/* Breadcrumb */}
            <nav className="hidden sm:flex items-center gap-1.5 text-[11.5px] mb-6"
              style={{ color: 'rgba(255,255,255,0.32)' }}>
              <a href="/ARA-Marketing/" className="hover:text-sky-300 transition-colors">Home</a>
              <ChevronRight size={11} style={{ color: 'rgba(255,255,255,0.18)' }} />
              <a href="/ARA-Marketing/services/website-development" className="hover:text-sky-300 transition-colors">Web Design</a>
              <ChevronRight size={11} style={{ color: 'rgba(255,255,255,0.18)' }} />
              <span className="text-sky-300 font-medium">Enterprise Website</span>
            </nav>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-2.5 sm:px-4 py-2 rounded-full text-[9px] sm:text-[11px] font-bold uppercase tracking-widest mb-6"
              style={{
                background: 'rgba(124,58,237,0.16)',
                border: '1px solid rgba(167,139,250,0.28)',
                color: '#c4b5fd',
                backdropFilter: 'blur(8px)',
              }}>
              <Building2 size={10} /> Enterprise Website Development
            </span>

            {/* H1 */}
            <h1 className="leading-[1.2] tracking-tight mb-5 text-white"
              style={{ fontWeight: 700, fontSize: '40px' }}>
              <span style={{ display: 'block' }}>Transform Your Enterprise</span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg,#a78bfa,#60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Digital Presence
              </span>
            </h1>

            <p className="text-[13px] sm:text-[14.5px] leading-[1.90] mb-7 max-w-[540px]"
              style={{ color: 'rgba(255,255,255,0.48)' }}>
              ARA Discover Marketing is a trusted enterprise website development company in Thanjavur that creates AI-driven enterprise websites to boost your digital presence and simplify complex business operations.
            </p>

            {/* Bullet list */}
            <ul className="flex flex-col gap-2.5 mb-8">
              {bullets.map(b => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#60a5fa' }} />
                  <span className="text-[13px] sm:text-[13.5px] leading-[1.7]"
                    style={{ color: 'rgba(255,255,255,0.65)' }}>{b}</span>
                </li>
              ))}
            </ul>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {chips.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.72)',
                    backdropFilter: 'blur(6px)',
                  }}>
                  <Icon size={10} style={{ color: '#60a5fa' }} /> {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8 sm:mb-10">
              <a href="/ARA-Marketing/contact-us"
                className="btn-glow inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)', boxShadow: '0 8px 28px rgba(124,58,237,0.35)' }}>
                Start Your Project <ArrowRight size={13} />
              </a>
              <a href="#ew-intro"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(8px)',
                }}>
                Explore Services <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-10 pt-6 sm:pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {stats.map(({ val, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-[20px] sm:text-[28px] font-bold leading-tight"
                    style={{
                      background: 'linear-gradient(135deg,#a78bfa,#38bdf8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                    {val}
                  </span>
                  <span className="text-[10.5px] mt-0.5" style={{ color: 'rgba(255,255,255,0.32)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Hero image with floating badges ── */}
          <div className="w-full lg:flex-1 animate-hero-visual">
            <div className="relative">

              {/* Glow halo */}
              <div className="absolute -inset-6 rounded-[2.5rem] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.22) 0%, rgba(37,99,235,0.12) 45%, transparent 70%)' }} />

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.10)', boxShadow: '0 40px 90px rgba(0,0,0,0.60)' }}>

                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=520&fit=crop&auto=format&q=80"
                  alt="Enterprise website development company in Thanjavur"
                  loading="eager"
                  className="w-full object-cover"
                  style={{ height: 420 }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(29,78,216,0.55) 0%, rgba(124,58,237,0.35) 60%, rgba(2,11,24,0.50) 100%)' }} />

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-5"
                  style={{ background: 'linear-gradient(0deg, rgba(2,11,24,0.92) 0%, transparent 100%)' }}>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-1"
                    style={{ color: 'rgba(167,139,250,0.85)' }}>ARA Discover Marketing</p>
                  <p className="text-white font-bold text-[15px] sm:text-[17px] leading-tight">
                    The Best Enterprise Web Development Company in Thanjavur
                  </p>
                  <p className="text-[12px] mt-1" style={{ color: 'rgba(255,255,255,0.50)' }}>
                    Scalable · Secure · AI-Powered · High-Performance
                  </p>
                </div>
              </div>

              {/* Floating badge — top left */}
              <div className="absolute -top-4 -left-4 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl animate-float"
                style={{
                  background: 'rgba(13,27,58,0.96)',
                  border: '1px solid rgba(124,58,237,0.40)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 30px rgba(124,58,237,0.22)',
                }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
                  <Award size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-[8px] font-semibold leading-none mb-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>Projects Delivered</p>
                  <p className="text-[14px] font-black text-white leading-tight">500+ Done</p>
                </div>
              </div>

              {/* Floating badge — bottom right */}
              <div className="absolute -bottom-4 -right-4 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl animate-float"
                style={{
                  background: 'rgba(13,27,58,0.96)',
                  border: '1px solid rgba(16,185,129,0.35)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 30px rgba(16,185,129,0.18)',
                  animationDelay: '1.8s',
                }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#059669,#10b981)' }}>
                  <TrendingUp size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-[8px] font-semibold leading-none mb-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>Client Satisfaction</p>
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
