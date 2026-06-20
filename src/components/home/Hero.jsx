import { useState, useEffect } from 'react'
import { ArrowRight, Phone, Star, CheckCheck, Users, TrendingUp, Search, BarChart2, Target, Zap, Activity } from 'lucide-react'
import heroBgImage from '../../assets/Home/h1.webp'

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
        className="relative overflow-hidden pt-[88px]"
        style={{ minHeight: '60vh' }}
      >
        {/* Full background image — covers entire section */}
        <img
          src={heroBgImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Left — text content sits on top of image */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8
          flex flex-col items-start text-left
          pt-12 pb-10 sm:pt-16 sm:pb-12">

          <div className="w-full max-w-[580px]">

            <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full
              text-[10px] font-bold text-blue-400 uppercase tracking-[0.12em] whitespace-nowrap"
              style={{ background:'rgba(37,99,235,0.1)', border:'1px solid rgba(37,99,235,0.3)', animation: revS(0) }}>
              <Zap size={11} className="shrink-0" />
              Best Digital Marketing Agency · Thanjavur
              <Zap size={11} className="shrink-0" />
            </div>

            <h1 className="font-bold text-white tracking-tight mb-5"
              style={{ fontSize: 'clamp(27px,3.1vw,49px)', lineHeight: 1.2, animation: rev(100) }}>
              Best Digital Marketing<br />Company in Thanjavur —{' '}
              <span style={{
                background:'linear-gradient(135deg,#93c5fd 0%,#60a5fa 30%,#3b82f6 60%,#818cf8 100%)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
              }}>
                for Business Growth &amp; Brand Visibility
              </span>
            </h1>

            <p className="text-[15px] leading-[1.85] mb-3"
              style={{ color:'rgba(255,255,255,0.65)', animation: rev(200) }}>
              ARA Discover Marketing is the best digital marketing company in Thanjavur, helping
              startups, local businesses and enterprises generate leads, improve online visibility
              and increase revenue through data-driven strategies.
            </p>
            <p className="text-[13px] leading-[1.8] mb-8"
              style={{ color:'rgba(255,255,255,0.38)', animation: rev(280) }}>
              We deliver complete SEO, social media marketing, paid advertising, branding, video
              editing and performance marketing solutions tailored for digital businesses.
            </p>

            <div className="flex flex-wrap gap-4 mb-8" style={{ animation: revS(360) }}>
              <a href="/ARA-Marketing/contact-us"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-[14px]
                  transition-all duration-300 hover:opacity-90"
                style={{ background:'#2563eb', color:'#fff', boxShadow:'0 8px 24px rgba(37,99,235,0.35)' }}>
                Take a First Step <ArrowRight size={15} />
              </a>
              <a href="tel:+919876543210"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-[14px]
                  transition-all duration-300 hover:bg-white/5"
                style={{ color:'rgba(255,255,255,0.75)', border:'1px solid rgba(255,255,255,0.18)' }}>
                <Phone size={14} /> Call Now
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6" style={{ animation: fade(440) }}>
              {[
                { icon: CheckCheck, text: '150+ Projects Delivered' },
                { icon: Star,       text: '5-Star Rated Agency'     },
                { icon: Users,      text: '100+ Brands Served'      },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[13px] font-semibold"
                  style={{ color:'rgba(255,255,255,0.40)' }}>
                  <Icon size={14} className="text-blue-400" /> {text}
                </div>
              ))}
            </div>

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
