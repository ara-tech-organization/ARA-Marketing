import { useState, useEffect } from 'react'
import { ArrowRight, Phone, Star, CheckCheck, Users, TrendingUp, Search, BarChart2, Target, Zap, Activity } from 'lucide-react'

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = e => setMouse({
      x: e.clientX / window.innerWidth  - 0.5,
      y: e.clientY / window.innerHeight - 0.5,
    })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const parallax = (depth) => ({
    transform: `translate(${mouse.x * depth}px, ${mouse.y * depth}px)`,
    transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  })

  const glassCard = {
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.1)',
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]"
      style={{ background: '#071a36' }}
    >
      {/* ── Layer 0: Deep BG orbs (slowest) ── */}
      <div className="absolute pointer-events-none rounded-full"
        style={{ ...parallax(22), top: '-20%', right: '-12%', width: '750px', height: '750px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.28) 0%, transparent 65%)' }}
      />
      <div className="absolute pointer-events-none rounded-full"
        style={{ ...parallax(-18), bottom: '-15%', left: '-10%', width: '550px', height: '550px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)' }}
      />

      {/* ── Layer 1: Dot grid (slow) ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ ...parallax(12),
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '30px 30px' }}
      />

      {/* ── Layer 2: Decorative rings (medium) ── */}
      <div className="absolute pointer-events-none rounded-full"
        style={{ ...parallax(-30),
          top: '15%', left: '8%', width: '180px', height: '180px',
          border: '1.5px solid rgba(37,99,235,0.2)' }}
      />
      <div className="absolute pointer-events-none rounded-full"
        style={{ ...parallax(28),
          bottom: '18%', right: '6%', width: '120px', height: '120px',
          border: '1px dashed rgba(99,102,241,0.25)' }}
      />
      <div className="absolute pointer-events-none"
        style={{ ...parallax(-22),
          top: '30%', right: '10%', width: '60px', height: '60px',
          border: '1px solid rgba(37,99,235,0.3)',
          transform: `rotate(45deg) translate(${mouse.x * -22}px, ${mouse.y * -22}px)`,
          borderRadius: '10px' }}
      />
      <div className="absolute pointer-events-none"
        style={{ ...parallax(18),
          bottom: '30%', left: '9%', width: '44px', height: '44px',
          border: '1px dashed rgba(255,255,255,0.12)',
          transform: `rotate(45deg) translate(${mouse.x * 18}px, ${mouse.y * 18}px)`,
          borderRadius: '8px' }}
      />

      {/* ── Layer 3: Floating cards (fastest) ── */}

      {/* Top-left: Traffic card */}
      <div className="absolute hidden lg:block pointer-events-none"
        style={{ ...parallax(55), top: '14%', left: '4%',
          animation: 'float-y 6s ease-in-out 0s infinite', ...glassCard,
          borderRadius: '18px', padding: '16px 20px', minWidth: '190px' }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div style={{ background: 'rgba(37,99,235,0.9)', borderRadius: '10px', padding: '6px' }}>
            <TrendingUp size={14} color="#fff" />
          </div>
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em' }}>
            TRAFFIC GROWTH
          </span>
        </div>
        <div style={{ fontSize: '28px', fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '-1px' }}>+200%</div>
        <div style={{ display: 'flex', gap: '4px', marginTop: '10px', alignItems: 'flex-end', height: '28px' }}>
          {[40, 55, 48, 70, 62, 80, 95].map((h, i) => (
            <div key={i} style={{
              flex: 1, height: `${h}%`, borderRadius: '3px',
              background: i === 6 ? '#3b82f6' : 'rgba(37,99,235,0.3)'
            }} />
          ))}
        </div>
      </div>

      {/* Top-right: SEO card */}
      <div className="absolute hidden lg:block pointer-events-none"
        style={{ ...parallax(-50), top: '12%', right: '4%',
          animation: 'float-y 5.5s ease-in-out 1.2s infinite', ...glassCard,
          borderRadius: '18px', padding: '16px 20px', minWidth: '175px' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div style={{ background: 'rgba(139,92,246,0.9)', borderRadius: '10px', padding: '6px' }}>
            <Search size={14} color="#fff" />
          </div>
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', fontWeight: 600 }}>GOOGLE RANK</span>
        </div>
        <div style={{ fontSize: '26px', fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>#1 Position</div>
        <div style={{ marginTop: '8px', display: 'flex', gap: '3px' }}>
          {[1,2,3,4,5].map(i => <Star key={i} size={11} fill="#f59e0b" color="#f59e0b" />)}
        </div>
      </div>

      {/* Mid-left: Campaigns card */}
      <div className="absolute hidden lg:block pointer-events-none"
        style={{ ...parallax(45), top: '50%', left: '3%',
          animation: 'float-y 7s ease-in-out 0.5s infinite', ...glassCard,
          borderRadius: '16px', padding: '14px 18px', minWidth: '160px' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div style={{ background: 'rgba(16,185,129,0.9)', borderRadius: '9px', padding: '6px' }}>
            <Activity size={13} color="#fff" />
          </div>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', fontWeight: 600 }}>LIVE CAMPAIGNS</span>
        </div>
        <div style={{ fontSize: '24px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>120+</div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '4px' }}>SEO Campaigns Active</div>
      </div>

      {/* Mid-right: Satisfaction card */}
      <div className="absolute hidden lg:block pointer-events-none"
        style={{ ...parallax(-42), top: '48%', right: '3%',
          animation: 'float-y 6.5s ease-in-out 1.8s infinite', ...glassCard,
          borderRadius: '16px', padding: '14px 18px', minWidth: '150px' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div style={{ background: 'rgba(245,158,11,0.9)', borderRadius: '9px', padding: '6px' }}>
            <Target size={13} color="#fff" />
          </div>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', fontWeight: 600 }}>SATISFACTION</span>
        </div>
        <div style={{ fontSize: '24px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>95%</div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '4px' }}>Client Retention Rate</div>
      </div>

      {/* Bottom-left: Brands card */}
      <div className="absolute hidden lg:block pointer-events-none"
        style={{ ...parallax(38), bottom: '14%', left: '5%',
          animation: 'float-y 5s ease-in-out 2.2s infinite', ...glassCard,
          borderRadius: '16px', padding: '14px 18px' }}
      >
        <div className="flex items-center gap-3">
          <div style={{ background: 'rgba(37,99,235,0.9)', borderRadius: '10px', padding: '8px' }}>
            <Users size={16} color="#fff" />
          </div>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>100+</div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>Brands Promoted</div>
          </div>
        </div>
      </div>

      {/* Bottom-right: ROI card */}
      <div className="absolute hidden lg:block pointer-events-none"
        style={{ ...parallax(-35), bottom: '14%', right: '4%',
          animation: 'float-y 6s ease-in-out 1s infinite', ...glassCard,
          borderRadius: '16px', padding: '14px 18px' }}
      >
        <div className="flex items-center gap-3">
          <div style={{ background: 'rgba(139,92,246,0.9)', borderRadius: '10px', padding: '8px' }}>
            <BarChart2 size={16} color="#fff" />
          </div>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>4x ROI</div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>Avg. Return</div>
          </div>
        </div>
      </div>

      {/* ── Central content (no parallax) ── */}
      <div className="relative z-10 max-w-[700px] mx-auto px-4 sm:px-6 md:px-7 flex flex-col items-center text-center">

        {/* Chip */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-5 rounded-full
          text-[12px] font-bold text-blue-400 uppercase tracking-[0.15em]"
          style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.3)' }}
        >
          <Zap size={12} />
          Best Digital Marketing Agency · Thanjavur
          <Zap size={12} />
        </div>

        {/* H1 */}
        <h1 className="font-bold text-white leading-[1.1] tracking-[-1.5px] mb-6"
          style={{ fontSize: 'clamp(30px, 4vw, 54px)' }}
        >
          Best Digital Marketing Company in Thanjavur<br />
          <span style={{
            background: 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 25%, #3b82f6 55%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            for Business Growth &amp; Brand Visibility
          </span>
        </h1>

        {/* Description */}
        <p className="text-[16px] leading-[1.75] mb-4 max-w-[600px]"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          Ara Discover Marketing is the best digital marketing company in Thanjavur, helping
          startups, local businesses and enterprises generate leads, improve online visibility
          and increase revenue through data-driven strategies.
        </p>
        <p className="text-[14px] leading-[1.75] mb-8 max-w-[520px]"
          style={{ color: 'rgba(255,255,255,0.32)' }}
        >
          We are one of the best digital marketing companies in Thanjavur, delivering complete
          search engine optimization (SEO), social media marketing management, all types of paid
          advertising, branding, video editing services and performance marketing solutions
          tailored for digital businesses.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a href="/ARA-Marketing/contact"
            className="btn-glow inline-flex items-center gap-2.5 px-9 py-3.5 bg-blue-600 text-white
              rounded-full font-bold text-[15px] transition-all duration-300
              hover:bg-blue-500 shadow-2xl shadow-blue-600/35">
            Get Free Consultation <ArrowRight size={16} />
          </a>
          <a href="tel:+919876543210"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-[15px]
              transition-all duration-300 hover:bg-white/5"
            style={{ color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <Phone size={15} /> Call Now
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-7">
          {[
            { icon: CheckCheck, text: '150+ Projects Delivered' },
            { icon: Star,       text: '5-Star Rated Agency'     },
            { icon: Users,      text: '100+ Brands Served'      },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-[13px] font-semibold"
              style={{ color: 'rgba(255,255,255,0.35)' }}>
              <Icon size={14} className="text-blue-400" /> {text}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
