import { Smartphone, Cpu, Zap, Shield, Star, ArrowRight, ArrowUpRight, ChevronRight, CheckCircle2 } from 'lucide-react'

const stats = [
  { value: '200+', label: 'Apps Delivered' },
  { value: '5★',   label: 'Client Rating'  },
  { value: '100%', label: 'On-Time Delivery' },
]

const quickWins = [
  { icon: Cpu,          text: 'AI-powered mobile app development' },
  { icon: Shield,       text: 'Secure & scalable architecture'    },
  { icon: CheckCircle2, text: 'Native iOS & Android apps'        },
]

const techTags = ['Swift', 'Kotlin', 'Flutter', 'React Native', 'Node.js', 'AWS', 'AI/ML']

export default function MAHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px] min-h-screen flex items-center"
      style={{ background: 'linear-gradient(145deg,#f5f3ff 0%,#eff6ff 55%,#dbeafe 100%)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: 'radial-gradient(circle,rgba(124,58,237,0.12) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
      {/* Orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.09) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 65%)' }} />
      {/* Rings */}
      <div className="hidden md:block absolute top-20 right-[6%] w-52 h-52 rounded-full border border-purple-200/40 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="hidden md:block absolute bottom-24 left-[4%] w-36 h-36 rounded-full border border-blue-200/35 pointer-events-none animate-[spin_30s_linear_infinite_reverse]" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7 py-12 sm:py-16 lg:py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">

          {/* ── Left ── */}
          <div className="flex-1 min-w-0 animate-hero-enter text-center lg:text-left flex flex-col justify-center">

            {/* Breadcrumb */}
            <nav className="hidden sm:flex items-center justify-center lg:justify-start gap-1.5 text-[12px] text-slate-400 mb-6">
              <a href="/ARA-Marketing/" className="hover:text-purple-600 transition-colors">Home</a>
              <ChevronRight size={12} className="text-slate-300" />
              <span>Services</span>
              <ChevronRight size={12} className="text-slate-300" />
              <span>Web Design</span>
              <ChevronRight size={12} className="text-slate-300" />
              <span className="text-purple-600 font-semibold">Mobile App Development</span>
            </nav>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-6 sm:mb-8 text-purple-700"
              style={{ background: 'rgba(124,58,237,0.10)', border: '1px solid rgba(124,58,237,0.22)' }}>
              <Smartphone size={10} /> Mobile App Development Company in Thanjavur
            </span>

            {/* H1 */}
            <h1 className="text-[clamp(26px,4.5vw,54px)] font-bold leading-[1.08] tracking-tight mb-5 text-slate-900">
              Elevate Your Business with{' '}
              <span style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Mobile Apps
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-[13px] sm:text-[14px] font-medium tracking-wide mb-5 text-slate-400">
              AI-Powered &middot; Secure &middot; Performance-Driven &middot; iOS &amp; Android
            </p>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] text-slate-600 leading-[1.9] mb-3 max-w-[560px] mx-auto lg:mx-0">
              Ara Discover Marketing is a leading <strong className="text-slate-700">custom mobile app development agency in Thanjavur</strong> delivering fast-loaded, secure, and AI-powered mobile apps for iOS and Android.
            </p>
            <p className="hidden sm:block text-[13.5px] text-slate-500 leading-[1.85] mb-8 sm:mb-10 max-w-[540px] mx-auto lg:mx-0">
              As one of the best app development agencies in Thanjavur, we offer innovative solutions that seamlessly integrate with your digital strategy and make your brand shine.
            </p>

            {/* Quick wins */}
            <div className="flex flex-col gap-2.5 mb-8 sm:mb-10 items-center lg:items-start">
              {quickWins.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon size={14} className="text-purple-600 flex-shrink-0" />
                  <span className="text-[13.5px] text-slate-600 font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-3 mb-10">
              <a href="/ARA-Marketing/contact"
                className="btn-glow inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)', boxShadow: '0 6px 20px rgba(124,58,237,0.28)' }}>
                Get a Free Consultation <ArrowRight size={14} />
              </a>
              <a href="#ma-intro"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13.5px] font-semibold border-2 border-purple-400 text-purple-600 transition-all duration-300 hover:bg-purple-50 hover:-translate-y-0.5">
                Explore Services <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex flex-row justify-center lg:justify-start pt-6 sm:pt-8"
              style={{ borderTop: '1px solid rgba(124,58,237,0.12)' }}>
              {stats.map(({ value, label }, i) => (
                <div key={label} className="flex flex-col items-center lg:items-start px-4 sm:px-6 first:pl-0"
                  style={{ borderLeft: i > 0 ? '1px solid #ddd6fe' : 'none' }}>
                  <span className="text-[22px] sm:text-[28px] font-black leading-tight"
                    style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {value}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Phone Mockup Card ── */}
          <div className="hidden md:flex flex-col justify-center lg:w-[460px] flex-shrink-0 w-full max-w-[460px] reveal-right">
            <div className="relative mt-10">
              <div className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse,rgba(124,58,237,0.14) 0%,transparent 70%)' }} />

              {/* Card */}
              <div className="relative rounded-3xl overflow-hidden"
                style={{ background: 'white', border: '1.5px solid #e2e8f0', boxShadow: '0 32px 80px rgba(124,58,237,0.16)' }}>

                <div className="h-1.5" style={{ background: 'linear-gradient(90deg,#7c3aed,#2563eb,#0891b2)' }} />

                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-md border border-slate-200 mx-2">
                    <Smartphone size={9} className="text-slate-400 flex-shrink-0" />
                    <span className="text-[10px] text-slate-500 font-medium">yourbusiness.app</span>
                    <span className="ml-auto flex items-center gap-1 text-[9px] font-bold text-purple-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />Live
                    </span>
                  </div>
                </div>

                {/* App preview */}
                <div className="relative overflow-hidden" style={{ height: '230px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&h=320&fit=crop&auto=format&q=80"
                    alt="Mobile App Development in Thanjavur — Ara Discover Marketing"
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s]"
                    loading="eager"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,transparent 45%,rgba(255,255,255,0.50) 100%)' }} />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {[
                      { lbl: 'Android', val: '4.9★', bg: 'rgba(124,58,237,0.92)' },
                      { lbl: 'iOS',     val: '4.8★', bg: 'rgba(37,99,235,0.92)'  },
                    ].map(({ lbl, val, bg }) => (
                      <div key={lbl} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                        style={{ background: bg, backdropFilter: 'blur(6px)' }}>
                        <span className="text-[11px] font-black text-white">{val}</span>
                        <span className="text-[9px] font-semibold text-white/80">{lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Purple header bar */}
                <div className="flex items-center justify-between px-5 py-3.5"
                  style={{ background: 'linear-gradient(135deg,#4c1d95 0%,#7c3aed 100%)' }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.18)' }}>
                      <Cpu size={13} className="text-white" />
                    </div>
                    <span className="text-[12px] font-bold text-white">AI-Powered App Preview</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />LIVE
                  </span>
                </div>

                {/* Metrics */}
                <div className="flex">
                  {[
                    { val: '200+', lbl: 'Apps Built',  color: '#7c3aed' },
                    { val: '4.9★', lbl: 'App Rating',  color: '#2563eb' },
                    { val: '100%', lbl: 'On-Time',     color: '#0891b2' },
                    { val: '24/7', lbl: 'Support',     color: '#7c3aed' },
                  ].map(({ val, lbl, color }, i) => (
                    <div key={lbl} className="flex-1 text-center py-4"
                      style={{ borderRight: i < 3 ? '1px solid #f1f5f9' : 'none' }}>
                      <p className="text-[15px] font-black leading-tight" style={{ color }}>{val}</p>
                      <p className="text-[9px] text-slate-400 font-medium mt-0.5">{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating: AI badge */}
              <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-3 px-4 py-3 rounded-2xl bg-white animate-float"
                style={{ border: '1px solid #ddd6fe', boxShadow: '0 10px 32px rgba(124,58,237,0.18)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)', boxShadow: '0 4px 12px rgba(124,58,237,0.35)' }}>
                  <Cpu size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-semibold leading-none mb-0.5">AI-Powered</p>
                  <p className="text-[15px] font-black text-slate-800 leading-tight">Smart Apps</p>
                </div>
              </div>

              {/* Floating: Rating */}
              <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-3 px-4 py-3 rounded-2xl bg-white animate-float"
                style={{ border: '1px solid #fde68a', boxShadow: '0 10px 32px rgba(245,158,11,0.16)', animationDelay: '1.5s' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#f59e0b,#d97706)', boxShadow: '0 4px 12px rgba(245,158,11,0.35)' }}>
                  <Star size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-semibold leading-none mb-0.5">Client Rating</p>
                  <p className="text-[15px] font-black text-slate-800 leading-tight">5★ Reviews</p>
                </div>
              </div>
            </div>

            {/* Tech tags strip */}
            <div className="mt-10 px-4 py-4 rounded-2xl flex items-center gap-2.5 flex-wrap"
              style={{ background: 'rgba(255,255,255,0.70)', border: '1px solid rgba(124,58,237,0.12)', backdropFilter: 'blur(8px)' }}>
              <span className="text-[9px] font-black uppercase tracking-widest flex-shrink-0 px-2.5 py-1 rounded-lg"
                style={{ color: '#64748b', background: 'rgba(124,58,237,0.07)' }}>Built with</span>
              {techTags.map(tag => (
                <span key={tag}
                  className="px-3 py-1 rounded-lg text-[11px] font-bold transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                  style={{ background: 'white', color: '#7c3aed', border: '1.5px solid rgba(124,58,237,0.15)', boxShadow: '0 2px 6px rgba(124,58,237,0.08)' }}>
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
