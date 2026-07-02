import { Search, TrendingUp, BarChart2, ChevronRight, ArrowRight, ArrowUpRight, ArrowUp, Star, Shield, Zap } from 'lucide-react'
import seoHeroImg from '../../assets/SEO/Seo.webp'

const stats = [
  { num: '120+', label: 'Projects Done',   color: '#60a5fa' },
  { num: '95%',  label: 'Client Retention', color: '#60a5fa' },
  { num: '200%', label: 'Avg Traffic Growth', color: '#60a5fa' },
  { num: '#1',   label: 'Google Rankings', color: '#60a5fa' },
]

const badges = [
  { icon: Shield,    text: 'White-Hat SEO' },
  { icon: Zap,       text: 'AI-Powered'    },
  { icon: TrendingUp, text: 'Result-Driven' },
]

const keywords = [
  { kw: 'best seo companies in thanjavur', pos: 1, prev: 4, color: '#60a5fa' },
  { kw: 'top seo agencies in thanjavur',   pos: 2, prev: 7, color: '#60a5fa' },
  { kw: 'digital marketing seo services',  pos: 3, prev: 9, color: '#60a5fa' },
  { kw: 'local seo marketing services',    pos: 1, prev: 5, color: '#60a5fa' },
]

export default function SEOHero() {
  return (
    <section
      className="relative overflow-hidden pt-[80px]"
      style={{ background: 'linear-gradient(135deg, #040c20 0%, #0a1a3e 50%, #061428 100%)', minHeight: '100vh' }}
    >
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(96,165,250,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Vertical accent lines */}
      <div className="absolute top-0 left-1/3 w-px h-full opacity-[0.06] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, #60a5fa, transparent)' }} />
      <div className="absolute top-0 right-1/3 w-px h-full opacity-[0.06] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, #60a5fa, transparent)' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-6 lg:py-8">

        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px] text-slate-400 mb-5">
          <a href="/ARA-Marketing/" className="whitespace-nowrap hover:text-blue-400 transition-colors">Home</a>
          <ChevronRight size={12} className="text-slate-600 flex-shrink-0" />
          <span className="whitespace-nowrap text-slate-500">Digital Marketing</span>
          <ChevronRight size={12} className="text-slate-600 flex-shrink-0" />
          <span className="whitespace-nowrap text-blue-400 font-medium">SEO Services</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* ── LEFT: Content ── */}
          <div className="flex-1 min-w-0 text-center lg:text-left">

            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6
              border border-blue-500/30 bg-blue-500/10"
              style={{ backdropFilter: 'blur(8px)' }}>
              <Search size={11} className="text-blue-400" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-300">
                Search Engine Optimization
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(28px,4vw,56px)] font-black leading-[1.1] tracking-tight mb-6 text-white">
              Rank Higher.{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
              }}>
                Get Found.
              </span>
              <br />Grow Faster.
            </h1>

            <p className="text-[15px] text-slate-300 leading-[1.85] mb-4 max-w-xl">
              ARA Discover Marketing is Thanjavur's leading SEO agency, delivering AI-driven strategies that push your business to the top of Google — and keep it there.
            </p>
            <p className="text-[14px] text-slate-400 leading-[1.8] mb-8 max-w-xl">
              From technical SEO and high-quality backlinks to local search domination and content marketing — we build rankings that convert to revenue.
            </p>

            {/* Badge pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {badges.map(({ icon: Icon, text }) => (
                <span key={text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold text-slate-300"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <Icon size={12} className="text-blue-400" /> {text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              <a href="/ARA-Marketing/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold text-white
                  transition-all duration-300 hover:scale-[1.03] shadow-lg"
                style={{ background: 'linear-gradient(135deg, #2563eb, #0ea5e9)', boxShadow: '0 8px 32px rgba(37,99,235,0.45)' }}>
                Get Free SEO Audit <ArrowRight size={15} />
              </a>
              <a href="#seo-services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-blue-300
                  transition-all duration-300 hover:text-white hover:bg-white/10"
                style={{ border: '1px solid rgba(96,165,250,0.3)' }}>
                Explore Services <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map(({ num, label, color }) => (
                <div key={label}
                  className="rounded-2xl px-4 py-3"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-[22px] font-black leading-tight" style={{ color }}>{num}</p>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Image + Keyword card ── */}
          <div className="lg:w-[420px] flex-shrink-0 flex flex-col gap-4">

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5)', border: '1px solid rgba(96,165,250,0.15)' }}>
              <img
                src={seoHeroImg}
                alt="SEO Services Thanjavur"
                className="w-full h-[280px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(4,12,32,0.85) 100%)' }} />

              {/* Live badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5
                bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold text-white">Live Rankings</span>
              </div>

              {/* Star rating */}
              <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1.5
                bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Star size={10} className="text-blue-400 fill-blue-400" />
                <span className="text-[11px] font-bold text-white">5.0 Rated</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-[14px] font-bold leading-snug drop-shadow-lg">
                  Dominate Google Search in Thanjavur
                </p>
                <p className="text-blue-200 text-[12px] mt-1">AI-Powered SEO Strategies</p>
              </div>
            </div>

            {/* Keyword Rankings Card */}
            <div className="rounded-2xl p-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(96,165,250,0.15)', backdropFilter: 'blur(12px)' }}>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-blue-600">
                    <BarChart2 size={13} className="text-white" />
                  </div>
                  <span className="text-[12px] font-bold text-white">Keyword Rankings</span>
                </div>
                <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 text-emerald-400
                  text-[9px] font-bold rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                {keywords.map(({ kw, pos, prev, color }) => (
                  <div key={kw}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl"
                    style={{ background: `${color}10`, border: `1px solid ${color}25` }}>
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0
                      text-white text-[9px] font-black"
                      style={{ background: color }}>
                      #{pos}
                    </div>
                    <span className="flex-1 text-[10px] font-medium text-slate-300 leading-snug line-clamp-1">{kw}</span>
                    <div className="flex items-center gap-0.5 text-emerald-400 text-[9px] font-bold flex-shrink-0">
                      <ArrowUp size={8} />+{prev - pos}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider">Organic Traffic</p>
                  <p className="text-[20px] font-black text-blue-400 leading-tight">+200%</p>
                </div>
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl"
                  style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.25)' }}>
                  <TrendingUp size={11} className="text-blue-400" />
                  <span className="text-[10px] font-bold text-blue-400">Growing Fast</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
