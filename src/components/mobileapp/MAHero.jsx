import { useRef } from 'react'
import {
  Smartphone, Cpu, Shield, Zap, Star, ArrowRight, ArrowUpRight,
  ChevronRight, CheckCircle2, TrendingUp, Users, Bell,
  Home, BarChart2, ShoppingBag, Settings, Heart,
} from 'lucide-react'
import CursorSpotlight from '../common/CursorSpotlight'

const stats = [
  { value: '200+', label: 'Apps Delivered'    },
  { value: '5â˜…',   label: 'Client Rating'     },
  { value: '100%', label: 'On-Time Delivery'  },
  { value: '3+',   label: 'Years Experience'  },
]

const quickWins = [
  { icon: Cpu,          text: 'AI-powered mobile app development' },
  { icon: Shield,       text: 'Secure & scalable architecture'    },
  { icon: CheckCircle2, text: 'Native iOS & Android apps'        },
]

const techTags = ['Swift', 'Kotlin', 'Flutter', 'React Native', 'Node.js', 'AWS', 'AI/ML']

const tabItems = [
  { icon: Home,        label: 'Home',     active: true  },
  { icon: BarChart2,   label: 'Stats',    active: false },
  { icon: ShoppingBag, label: 'Orders',   active: false },
  { icon: Settings,    label: 'Settings', active: false },
]

const appCards = [
  { label: 'Total Revenue', val: '₹2.4M', change: '+24%', color: '#2563eb',  bg: '#eff6ff' },
  { label: 'Active Users',  val: '12.4K', change: '+18%', color: '#0ea5e9',  bg: '#e0f2fe' },
]

const chartBars = [28, 45, 38, 60, 48, 75, 55, 70, 50, 88, 65, 92]

export default function MAHero() {
  const heroRef = useRef(null)

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(135deg, #020b18 0%, #071428 45%, #040e1f 100%)' }}
    >
      {/* Cursor-follow spotlight */}
      <CursorSpotlight
        targetRef={heroRef}
        size={560}
        blur={90}
        blendMode="multiply"
        opacity={0.2}
        background="conic-gradient(from 0deg at 50% 50%, #1e3a8a 0%, #2563eb 25%, #60a5fa 50%, #2563eb 75%, #1e3a8a 100%)"
      />

      {/* Very subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'var(--brand-gradient-dots)', backgroundSize: '36px 36px' }} />

      {/* Soft colour wash â€” top right only */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 py-12 sm:py-16 lg:py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* â”€â”€ LEFT: Text â”€â”€ */}
          <div className="flex-1 min-w-0 animate-hero-enter text-center lg:text-left flex flex-col justify-center">

            {/* Breadcrumb */}
            <nav className="hidden sm:flex items-center justify-center lg:justify-start gap-1.5 text-[12px] mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
              <a href="/" className="transition-colors hover:text-sky-300">Home</a>
              <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.20)' }} />
              <a href="/services/website-development" className="transition-colors hover:text-sky-300">Web Design</a>
              <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.20)' }} />
              <span className="text-sky-300 font-medium">Mobile App Development</span>
            </nav>

            {/* Badge */}
            <span className="inline-flex self-start items-center gap-2 px-2.5 sm:px-4 py-2 rounded-full text-[9px] sm:text-[11px] font-bold uppercase tracking-widest mb-6 sm:mb-7"
              style={{ background: 'rgba(37,99,235,0.18)', border: '1px solid rgba(96,165,250,0.30)', color: '#93c5fd' }}>
              <Smartphone size={10} /> Mobile App Development Â· Thanjavur
            </span>

            {/* H1 â€” 2 lines */}
            <h1 className="font-bold leading-[1.2] tracking-tight mb-5"
              style={{ fontSize: '50px', color: '#ffffff' }}>
              <span style={{ display: 'block' }}>Build Powerful Mobile</span>
              <span style={{ display: 'block' }}>
                Apps for{' '}
                <span className="text-gradient-blue">
                  IOS &amp; Android
                </span>
              </span>
            </h1>

            <p className="text-[14px] sm:text-[15px] leading-[1.9] mb-3 max-w-[560px] mx-auto lg:mx-0" style={{ color: 'rgba(255,255,255,0.55)' }}>
              ARA Discover Marketing is a leading custom mobile app development agency in Thanjavur delivering fast-loaded, secure, and AI-powered mobile apps for iOS and Android.
            </p>
            <p className="hidden sm:block text-[13.5px] leading-[1.85] mb-8 max-w-[540px] mx-auto lg:mx-0" style={{ color: 'rgba(255,255,255,0.35)' }}>
              As one of the best app development agencies in Thanjavur, we offer innovative solutions that seamlessly integrate with your digital strategy and make your brand shine.
            </p>

            {/* Quick wins */}
            <div className="flex flex-col gap-2.5 mb-8 items-start ml-4">
              {quickWins.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon size={14} className="text-sky-400 flex-shrink-0" />
                  <span className="text-[13.5px] font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-3 mb-10">
              <a href="tel:+918110025254"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'var(--brand-gradient)', boxShadow: '0 6px 20px rgba(37,99,235,0.28)' }}>
                Take a First Step <ArrowRight size={14} />
              </a>
              <a href="#ma-intro"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13.5px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ color: 'rgba(255,255,255,0.80)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)' }}>
                Explore Services <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex flex-row justify-center lg:justify-start gap-0 pt-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {stats.map(({ value, label }, i) => (
                <div key={label}
                  className="flex flex-col items-center lg:items-start px-3 sm:px-6 first:pl-0"
                  style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                  <span className="text-[18px] sm:text-[26px] font-black leading-tight text-gradient-blue">
                    {value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-medium mt-0.5 leading-tight text-center lg:text-left" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* â”€â”€ RIGHT: Phone Frame Mockup â”€â”€ */}
          <div className="hidden md:flex flex-col items-center lg:w-[500px] flex-shrink-0 reveal-right">
            <div className="relative">

              {/* Soft glow behind phone */}
              <div className="absolute inset-0 -m-8 rounded-full pointer-events-none"
                style={{ background: 'var(--brand-gradient-glow-dark)' }} />

              {/* Floating badge â€” AI */}
              <div className="absolute -top-8 -left-14 z-20 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white animate-float"
                style={{ border: '1px solid #dbeafe', boxShadow: '0 8px 28px rgba(37,99,235,0.15)' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--brand-gradient)' }}>
                  <Cpu size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-[8px] text-slate-400 font-semibold leading-none mb-0.5">Technology</p>
                  <p className="text-[13px] font-black text-slate-800 leading-tight">AI-Powered</p>
                </div>
              </div>

              {/* Floating badge â€” rating */}
              <div className="absolute -bottom-8 -right-14 z-20 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white animate-float"
                style={{ border: '1px solid #bae6fd', boxShadow: '0 8px 28px rgba(14,165,233,0.16)', animationDelay: '1.6s' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--brand-gradient)' }}>
                  <Star size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-[8px] text-slate-400 font-semibold leading-none mb-0.5">Client Rating</p>
                  <p className="text-[13px] font-black text-slate-800 leading-tight">5â˜… Reviews</p>
                </div>
              </div>

              {/* â”€â”€ iPhone 17 frame â”€â”€ */}
              <div className="relative mx-auto"
                style={{ width: 300, filter: 'drop-shadow(0 36px 72px rgba(37,99,235,0.20))' }}>

                {/* Side buttons â€” volume */}
                <div className="absolute left-0 top-[90px] w-[3px] h-7 rounded-r-full"
                  style={{ background: '#334155', marginLeft: '-3px' }} />
                <div className="absolute left-0 top-[128px] w-[3px] h-7 rounded-r-full"
                  style={{ background: '#334155', marginLeft: '-3px' }} />
                {/* Side button â€” power */}
                <div className="absolute right-0 top-[108px] w-[3px] h-10 rounded-l-full"
                  style={{ background: '#334155', marginRight: '-3px' }} />

                {/* Phone shell â€” titanium-style */}
                <div className="relative overflow-hidden"
                  style={{
                    width: 300,
                    borderRadius: '3rem',
                    background: 'linear-gradient(160deg,#1e293b 0%,#0f172a 100%)',
                    border: '5px solid #334155',
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.10)',
                  }}>

                  {/* Dynamic Island */}
                  <div className="flex justify-center pt-3 pb-1" style={{ background: '#0f172a' }}>
                    <div className="flex items-center justify-center gap-1.5 px-3"
                      style={{
                        width: 88, height: 22, borderRadius: 999,
                        background: '#000',
                        boxShadow: '0 0 0 1px rgba(255,255,255,0.06)',
                      }}>
                      <div className="w-3 h-3 rounded-full"
                        style={{ background: '#1e293b', border: '1px solid #334155' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    </div>
                  </div>

                  {/* App screen */}
                  <div style={{ background: '#f8fafc', minHeight: 460 }}>

                    {/* App top bar */}
                    <div className="flex items-center justify-between px-4 py-3"
                      style={{ background: 'var(--brand-gradient)' }}>
                      <div>
                        <p className="text-[8px] font-semibold text-blue-200">Good Morning ðŸ‘‹</p>
                        <p className="text-[11px] font-black text-white leading-tight">ARA Business App</p>
                      </div>
                      <div className="relative">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center"
                          style={{ background: 'rgba(255,255,255,0.18)' }}>
                          <Bell size={12} className="text-white" />
                        </div>
                        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 border border-blue-600" />
                      </div>
                    </div>

                    {/* KPI cards row */}
                    <div className="grid grid-cols-2 gap-2 p-3">
                      {appCards.map(({ label, val, change, color, bg }) => (
                        <div key={label} className="rounded-xl p-2.5"
                          style={{ background: bg, border: `1px solid ${color}18` }}>
                          <p className="text-[8px] font-semibold mb-1" style={{ color: `${color}99` }}>{label}</p>
                          <p className="text-[14px] font-black leading-none" style={{ color }}>{val}</p>
                          <p className="text-[8px] mt-1 font-bold text-emerald-600">{change} â†‘</p>
                        </div>
                      ))}
                    </div>

                    {/* Mini bar chart */}
                    <div className="mx-3 rounded-xl p-3 mb-3"
                      style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[8.5px] font-bold text-slate-600">Monthly Growth</p>
                        <span className="text-[7.5px] font-bold text-blue-600">+42% YoY</span>
                      </div>
                      <div className="flex items-end gap-[2px] h-9">
                        {chartBars.map((h, i) => (
                          <div key={i} className="flex-1 rounded-sm"
                            style={{ height: `${h}%`, background: i === 11 ? '#1e40af' : '#bfdbfe' }} />
                        ))}
                      </div>
                    </div>

                    {/* Recent orders */}
                    <div className="mx-3 rounded-xl overflow-hidden mb-3"
                      style={{ border: '1px solid #e2e8f0', background: 'white' }}>
                      <div className="px-3 py-2 flex items-center justify-between"
                        style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <p className="text-[8.5px] font-bold text-slate-600">Recent Orders</p>
                        <p className="text-[7.5px] font-bold text-blue-600">See all</p>
                      </div>
                      {[
                        { name: 'Priya S.',    amount: '₹2,499', dot: '#0ea5e9' },
                        { name: 'Karthik R.',  amount: '₹5,200', dot: '#2563eb' },
                        { name: 'Meena Co.',   amount: '₹8,750', dot: '#60a5fa' },
                      ].map(({ name, amount, dot }) => (
                        <div key={name} className="flex items-center gap-2 px-3 py-2"
                          style={{ borderBottom: '1px solid #f8fafc' }}>
                          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[7px] font-black text-white flex-shrink-0"
                            style={{ background: dot }}>
                            {name.charAt(0)}
                          </div>
                          <span className="flex-1 text-[8px] font-semibold text-slate-700 truncate">{name}</span>
                          <span className="text-[8px] font-black" style={{ color: dot }}>{amount}</span>
                        </div>
                      ))}
                    </div>

                    {/* Liked products row */}
                    <div className="flex items-center gap-1.5 px-3 mb-3">
                      {['#2563eb','#0ea5e9','#2563eb'].map((c, i) => (
                        <div key={i} className="flex-1 rounded-xl py-3 flex flex-col items-center gap-1"
                          style={{ background: `${c}0f`, border: `1px solid ${c}20` }}>
                          <Heart size={11} style={{ color: c }} />
                          <span className="text-[7px] font-bold" style={{ color: c }}>
                            {['Wishlist','Premium','Growth'][i]}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom tab bar */}
                    <div className="flex items-center justify-around px-2 py-2.5"
                      style={{ background: 'white', borderTop: '1px solid #e2e8f0' }}>
                      {tabItems.map(({ icon: Icon, label, active }) => (
                        <div key={label} className="flex flex-col items-center gap-0.5">
                          <div className="w-7 h-7 rounded-xl flex items-center justify-center"
                            style={{ background: active ? '#eff6ff' : 'transparent' }}>
                            <Icon size={13} style={{ color: active ? '#1e40af' : '#94a3b8' }} />
                          </div>
                          <span className="text-[7px] font-semibold"
                            style={{ color: active ? '#1e40af' : '#94a3b8' }}>{label}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* iPhone 17 home indicator */}
                  <div className="flex justify-center py-2.5" style={{ background: '#0f172a' }}>
                    <div className="w-20 h-[3px] rounded-full"
                      style={{ background: 'rgba(255,255,255,0.22)' }} />
                  </div>

                </div>
              </div>
            </div>

            {/* Tech tags strip */}
            <div className="mt-10 px-4 py-3.5 rounded-2xl flex items-center gap-2 flex-wrap justify-center"
              style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mr-1">Built with</span>
              {techTags.map(tag => (
                <span key={tag}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                  style={{ background: 'white', color: '#1e40af', border: '1.5px solid rgba(37,99,235,0.15)', boxShadow: '0 2px 6px rgba(37,99,235,0.06)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
