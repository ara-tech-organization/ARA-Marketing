import { Layout, Zap, Shield, ArrowRight, ArrowUpRight, ChevronRight, Globe, Monitor, CheckCircle2, Star } from 'lucide-react'

const stats = [
  { value: '150+', label: 'Websites Built',      color: '#2563eb' },
  { value: '<1s',  label: 'Avg Load Time',        color: '#1d4ed8' },
  { value: '98%',  label: 'Client Satisfaction',  color: '#3b82f6' },
]

const techTags = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Vite', 'Netlify', 'Vercel']

const quickWins = [
  { icon: Zap,          text: 'Lightning-fast loading speed' },
  { icon: Shield,       text: 'Enhanced security — no DB' },
  { icon: CheckCircle2, text: 'SEO-optimized clean code' },
]

export default function SWHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(145deg, #ffffff 0%, #eff6ff 55%, #dbeafe 100%)' }}
    >
      {/* Orbs */}
      <div
        className="absolute -top-32 -right-32 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)',
          animation: 'float-y 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-0 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 65%)' }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Diagonal right tint */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: 'linear-gradient(135deg, transparent 0%, rgba(37,99,235,0.04) 100%)' }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-7 py-10 sm:py-14">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* ── Left: Text ── */}
          <div className="flex-1 min-w-0 lg:pr-4">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-[13px] text-slate-400 mb-6 animate-hero-enter">
              <a href="/" className="hover:text-blue-600 transition-colors duration-200">Home</a>
              <ChevronRight size={13} className="text-slate-300" />
              <span>Services</span>
              <ChevronRight size={13} className="text-slate-300" />
              <span>Web Design</span>
              <ChevronRight size={13} className="text-slate-300" />
              <span className="text-blue-600 font-semibold">Static Website</span>
            </nav>

            {/* Badge */}
            <div className="animate-hero-d1 mb-5">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white"
                style={{
                  background: '#2563eb',
                  boxShadow: '0 4px 12px rgba(37,99,235,0.18)',
                }}
              >
                <Layout size={11} />
                Static Website Development
              </span>
            </div>

            {/* H1 */}
            <h1 className="animate-hero-d2 text-[clamp(26px,3vw,50px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Launch Your Online{' '}
              <span className="text-gradient-blue">Presence</span>{' '}
              with Static Websites
            </h1>

            {/* Description */}
            <p className="animate-hero-d3 text-[15px] text-slate-600 leading-[1.9] mb-4">
              Are you looking to build a static website in Thanjavur that loads fast, ranks better, and converts visitors into customers? We build light, secure, and SEO-friendly websites for businesses that want performance without the complexity.
            </p>
            <p className="animate-hero-d3 text-[15px] text-slate-600 leading-[1.9] mb-8">
              As a trusted <strong className="text-slate-800 font-semibold">static website development company in Thanjavur</strong>, we deliver mobile-first, conversion-focused websites tailored for every business size and goal.
            </p>

            {/* Quick wins */}
            <div className="animate-hero-d3 flex flex-col gap-2 mb-8">
              {quickWins.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon size={14} className="text-blue-600 flex-shrink-0" />
                  <span className="text-[13.5px] text-slate-600 font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="animate-hero-d4 flex flex-col xs:flex-row flex-wrap gap-3 mb-10">
              <a
                href="#contact"
                className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                style={{ background: '#2563eb', boxShadow: '0 4px 16px rgba(37,99,235,0.22)' }}
              >
                Get a Free Consultation <ArrowRight size={15} />
              </a>
              <a
                href="#sw-intro"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-semibold border-2 border-blue-500 text-blue-600 transition-all duration-300 hover:bg-blue-50"
              >
                Explore Services <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Stats strip */}
            <div className="animate-hero-d5 flex flex-wrap gap-4 sm:gap-8">
              {stats.map(({ value, label, color }, i) => (
                <div
                  key={label}
                  className="flex flex-col"
                  style={{
                    borderLeft: i > 0 ? '1px solid #bfdbfe' : 'none',
                    paddingLeft: i > 0 ? '2rem' : '0',
                  }}
                >
                  <span
                    className="text-[28px] font-black leading-tight"
                    style={{
                      background: `linear-gradient(135deg, ${color}, ${color}88)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {value}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Website Mockup Preview ── */}
          <div className="animate-hero-visual hidden lg:block lg:w-[450px] flex-shrink-0">
            <div className="relative">

              {/* Main card */}
              <div
                className="bg-white rounded-3xl overflow-hidden"
                style={{ border: '1px solid #e2e8f0' }}
              >
                {/* Card header */}
                <div
                  className="px-5 py-3.5 flex items-center justify-between"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)' }}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.18)' }}
                    >
                      <Monitor size={13} className="text-white" />
                    </div>
                    <span className="text-[12px] font-bold text-white">Static Website Preview</span>
                  </div>
                  <span
                    className="text-[10px] font-semibold px-3 py-1 rounded-full text-white"
                    style={{ background: 'rgba(255,255,255,0.18)' }}
                  >
                    Live Demo
                  </span>
                </div>

                {/* Browser chrome */}
                <div
                  className="px-4 py-2 flex items-center gap-2"
                  style={{ background: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}
                >
                  <div className="flex gap-1.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-lg border border-slate-200 ml-1">
                    <Globe size={9} className="text-slate-400 flex-shrink-0" />
                    <span className="text-[10px] text-slate-500 font-medium">yourbusiness.com</span>
                    <span
                      className="ml-auto flex items-center gap-1 text-[9px] font-bold"
                      style={{ color: '#059669' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Secure
                    </span>
                  </div>
                </div>

                {/* Website screenshot */}
                <div className="relative overflow-hidden" style={{ height: '220px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&h=300&fit=crop&auto=format&q=80"
                    alt="Static Website Development in Thanjavur — Ara Discover Marketing"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(255,255,255,0.6) 100%)' }}
                  />
                  {/* Overlay score badges on image */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {[
                      { lbl: 'Performance', val: '100', col: '#2563eb', bg: 'rgba(37,99,235,0.92)' },
                      { lbl: 'SEO',         val: '98',  col: '#fff',    bg: 'rgba(16,185,129,0.92)' },
                    ].map(({ lbl, val, col, bg }) => (
                      <div
                        key={lbl}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                        style={{ background: bg, backdropFilter: 'blur(6px)' }}
                      >
                        <span className="text-[11px] font-black text-white">{val}</span>
                        <span className="text-[9px] font-semibold text-white opacity-80">{lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom metrics row */}
                <div className="flex" style={{ borderTop: '1px solid #f1f5f9' }}>
                  {[
                    { val: '100', lbl: 'Performance', color: '#2563eb' },
                    { val: '98',  lbl: 'SEO Score',   color: '#1d4ed8' },
                    { val: '<1s', lbl: 'Load Time',   color: '#3b82f6' },
                    { val: '5★',  lbl: 'Rating',      color: '#2563eb' },
                  ].map(({ val, lbl, color }, i) => (
                    <div
                      key={lbl}
                      className="flex-1 text-center py-3.5"
                      style={{ borderRight: i < 3 ? '1px solid #f1f5f9' : 'none' }}
                    >
                      <p className="text-[15px] font-black leading-tight" style={{ color }}>{val}</p>
                      <p className="text-[9px] text-slate-400 font-medium mt-0.5">{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating: Fast Delivery */}
              <div
                className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-2.5 flex items-center gap-2.5"
                style={{ border: '1px solid #e2e8f0' }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}
                >
                  <Zap size={13} className="text-white" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 leading-none mb-0.5">Delivered In</p>
                  <p className="text-[14px] font-black text-slate-800 leading-tight">3–7 Days</p>
                </div>
              </div>

              {/* Floating: Client Rating */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-2.5 flex items-center gap-2.5"
                style={{ border: '1px solid #e2e8f0' }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
                >
                  <Star size={13} className="text-white" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 leading-none mb-0.5">Client Rating</p>
                  <p className="text-[14px] font-black text-slate-800 leading-tight">5★ Reviews</p>
                </div>
              </div>

            </div>

            {/* Tech tags */}
            <div className="mt-6 flex items-center gap-2 flex-wrap">
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 flex-shrink-0 mr-1">
                Built with
              </span>
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                  style={{
                    background: 'rgba(37,99,235,0.06)',
                    color: '#2563eb',
                    border: '1px solid rgba(37,99,235,0.12)',
                  }}
                >
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
