import { useState, useEffect } from 'react'
import { ArrowRight, Phone, Star, CheckCheck, Users, TrendingUp, Search, BarChart2, Target, Zap, Activity } from 'lucide-react'
import heroBgImage from '../../assets/h1.png'

let _firstHeroLoad = true

function FloatItem({ icon: Icon, iconColor, stat, title, style }) {
  return (
    <div className="absolute" style={{ ...style }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        background: 'rgba(4,12,32,0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${iconColor}66`,
        borderRadius: 50,
        padding: '8px 18px 8px 8px',
        boxShadow: `0 0 10px ${iconColor}18, 0 4px 12px rgba(0,0,0,0.18)`,
        whiteSpace: 'nowrap',
      }}>
        <div style={{
          width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: `radial-gradient(circle, ${iconColor}44, ${iconColor}11)`,
          border: `1.5px solid ${iconColor}99`,
          boxShadow: `0 0 6px ${iconColor}28`,
        }}>
          <Icon size={16} style={{ color: iconColor }} />
        </div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.3px' }}>{stat}</div>
          <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.55)', marginTop: 1 }}>{title}</div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  const isFirst = _firstHeroLoad
  useEffect(() => { _firstHeroLoad = false }, [])

  const BASE = isFirst ? 1900 : 380

  useEffect(() => {
    const move = e => setMouse({
      x: e.clientX / window.innerWidth  - 0.5,
      y: e.clientY / window.innerHeight - 0.5,
    })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const parallax = (depth) => ({
    transform: `translate(${mouse.x * depth}px, ${mouse.y * depth}px)`,
    transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  })

  const glass = {
    background: 'rgba(4,12,32,0.85)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.15)',
  }

  const rev  = (ms, dur = 800) => `heroReveal ${dur}ms ${BASE + ms}ms cubic-bezier(0.4,0,0.2,1) both`
  const revS = (ms, dur = 750) => `heroRevealSpring ${dur}ms ${BASE + ms}ms cubic-bezier(0.34,1.56,0.64,1) both`
  const fade = (ms, dur = 900) => `heroFade ${dur}ms ${BASE + ms}ms ease both`

  const leftCards = [
    { icon: TrendingUp, iconColor: '#60a5fa', stat: '+200%',      title: 'Traffic Growth'     },
    { icon: Activity,   iconColor: '#34d399', stat: '120+',        title: 'Live Campaigns'     },
    { icon: Users,      iconColor: '#93c5fd', stat: '100+',        title: 'Brands Promoted'    },
  ]
  const rightCards = [
    { icon: Search,    iconColor: '#a78bfa', stat: '#1 Position', title: 'Google Rankings'    },
    { icon: Target,    iconColor: '#fbbf24', stat: '95%',         title: 'Client Satisfaction' },
    { icon: BarChart2, iconColor: '#c4b5fd', stat: '4x ROI',      title: 'Avg. Return'        },
  ]

  return (
    <>
      {/* ════════════════════════════════════════
          SECTION 1 — Content  (with bg effects)
      ════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden pt-[72px]"
        style={{ background: '#040e1e' }}
      >
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src={heroBgImage} alt="" aria-hidden="true"
            style={{
              position: 'absolute', width: '100%', height: 'auto', minHeight: '100%',
              top: '0', left: '0', objectFit: 'cover', objectPosition: 'center center',
              opacity: 0.30,
              transform: `translateY(${scrollY * 0.3}px)`,
              willChange: 'transform',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(2,10,24,0.70) 0%, rgba(4,18,48,0.60) 50%, rgba(2,10,24,0.75) 100%)',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(37,99,235,0.25) 0%, transparent 70%)',
          }} />
        </div>

        {/* SVG arc lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ animation: `heroFade 1800ms ${BASE - 200}ms ease both` }}
          preserveAspectRatio="xMidYMid slice">
          <ellipse cx="-80" cy="50%" rx="520" ry="480" fill="none" stroke="rgba(37,99,235,0.12)" strokeWidth="1" />
          <ellipse cx="-80" cy="50%" rx="400" ry="360" fill="none" stroke="rgba(37,99,235,0.09)" strokeWidth="1" />
          <ellipse cx="-80" cy="50%" rx="280" ry="240" fill="none" stroke="rgba(99,102,241,0.10)" strokeWidth="1" />
          <ellipse cx="calc(100% + 80)" cy="50%" rx="520" ry="480" fill="none" stroke="rgba(37,99,235,0.12)" strokeWidth="1" />
          <ellipse cx="calc(100% + 80)" cy="50%" rx="400" ry="360" fill="none" stroke="rgba(37,99,235,0.09)" strokeWidth="1" />
          <ellipse cx="calc(100% + 80)" cy="50%" rx="280" ry="240" fill="none" stroke="rgba(99,102,241,0.10)" strokeWidth="1" />
          <line x1="0" y1="72" x2="100%" y2="72" stroke="rgba(37,99,235,0.15)" strokeWidth="0.8" />
          {[-40,-22,-10,0,10,22,40].map((deg,i) => (
            <line key={i} x1="50%" y1="0"
              x2={`calc(50% + ${Math.sin(deg*Math.PI/180)*900}px)`} y2="900"
              stroke={`rgba(37,99,235,${0.03 + (3-Math.abs(i-3))*0.012})`} strokeWidth="1" />
          ))}
        </svg>

        {/* BG orbs */}
        <div className="absolute pointer-events-none rounded-full"
          style={{ ...parallax(22), top:'-15%', right:'-8%', width:'750px', height:'750px',
            background:'radial-gradient(circle,rgba(37,99,235,0.22) 0%,transparent 65%)',
            animation: fade(-200, 1600) }} />
        <div className="absolute pointer-events-none rounded-full"
          style={{ ...parallax(-18), bottom:'-12%', left:'-8%', width:'550px', height:'550px',
            background:'radial-gradient(circle,rgba(99,102,241,0.16) 0%,transparent 65%)',
            animation: fade(-200, 1600) }} />

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ ...parallax(8),
            backgroundImage:'radial-gradient(circle,rgba(255,255,255,0.055) 1px,transparent 1px)',
            backgroundSize:'32px 32px', animation: fade(-100, 1400) }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8
          flex flex-col items-center text-center
          pt-28 pb-16 sm:pt-36 sm:pb-24">

          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 mb-8 rounded-full
            text-[9px] sm:text-[10px] font-bold text-blue-400 uppercase tracking-[0.12em] whitespace-nowrap"
            style={{ background:'rgba(37,99,235,0.1)', border:'1px solid rgba(37,99,235,0.3)', animation: revS(0) }}>
            <Zap size={11} className="shrink-0" />
            Best Digital Marketing Agency · Thanjavur
            <Zap size={11} className="shrink-0" />
          </div>

          <h1 className="font-bold text-white tracking-[-1.5px] mb-7"
            style={{ fontSize:'clamp(24px,3vw,44px)', lineHeight: 1.35, animation: rev(120) }}>
            Best Digital Marketing Company in Thanjavur<br />
            <span style={{
              background:'linear-gradient(135deg,#93c5fd 0%,#60a5fa 25%,#3b82f6 55%,#818cf8 100%)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
              display: 'inline-block', marginTop: '8px',
            }}>
              for Business Growth &amp; Brand Visibility
            </span>
          </h1>

          <p className="text-[15px] leading-[1.85] mb-5 max-w-[620px]"
            style={{ color:'rgba(255,255,255,0.55)', animation: rev(260) }}>
            ARA Discover Marketing is the best digital marketing company in Thanjavur, helping
            startups, local businesses and enterprises generate leads, improve online visibility
            and increase revenue through data-driven strategies.
          </p>
          <p className="text-[13.5px] leading-[1.85] mb-10 max-w-[580px]"
            style={{ color:'rgba(255,255,255,0.35)', animation: rev(330) }}>
            We deliver complete SEO, social media marketing, paid advertising, branding, video
            editing and performance marketing solutions tailored for digital businesses.
          </p>

          <div className="flex flex-wrap gap-5 justify-center mb-10" style={{ animation: revS(440) }}>
            <a href="/ARA-Marketing/contact-us"
              className="btn-glow inline-flex items-center gap-2.5 px-8 py-3.5 bg-blue-600 text-white
                rounded-full font-bold text-[14px] transition-all duration-300
                hover:bg-blue-500 shadow-2xl shadow-blue-600/35">
              Take a First Step <ArrowRight size={15} />
            </a>
            <a href="tel:+919876543210"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-[14px]
                transition-all duration-300 hover:bg-white/5"
              style={{ color:'rgba(255,255,255,0.7)', border:'1px solid rgba(255,255,255,0.14)' }}>
              <Phone size={14} /> Call Now
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-7"
            style={{ animation: fade(560) }}>
            {[
              { icon: CheckCheck, text: '150+ Projects Delivered' },
              { icon: Star,       text: '5-Star Rated Agency'     },
              { icon: Users,      text: '100+ Brands Served'      },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-[13px] font-semibold"
                style={{ color:'rgba(255,255,255,0.35)' }}>
                <Icon size={14} className="text-blue-400" /> {text}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          SECTION 2 — Image + Stats
      ════════════════════════════════════════ */}
      <section style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 pt-10 pb-14"
          style={{ animation: fade(500) }}>

          {/* Stat cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[...leftCards, ...rightCards].map(({ icon: Icon, iconColor, stat, title }) => (
              <div key={title}
                className="flex flex-col items-center text-center py-5 px-3 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: '#f8fafc', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${iconColor}18`, border: `1.5px solid ${iconColor}40` }}>
                  <Icon size={18} style={{ color: iconColor }} />
                </div>
                <div className="text-[18px] font-bold leading-tight mb-1" style={{ color: '#0f172a' }}>{stat}</div>
                <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'rgba(15,23,42,0.40)' }}>{title}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <style>{`
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes heroRevealSpring {
          from { opacity: 0; transform: translateY(16px) scale(0.94); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes heroFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes heroPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(0.8); }
        }
      `}</style>
    </>
  )
}
