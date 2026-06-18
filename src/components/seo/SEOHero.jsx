import { Search, TrendingUp, BarChart2, ChevronRight, ArrowRight, ArrowUpRight, ArrowUp } from 'lucide-react'
import seoHeroImg from '../../assets/SEO/Seo.png'

const keywords = [
  { kw: 'best seo companies in thanjavur', pos: 1, prev: 4, color: '#2563eb' },
  { kw: 'top seo agencies in thanjavur',   pos: 2, prev: 7, color: '#7c3aed' },
  { kw: 'digital marketing seo services',  pos: 3, prev: 9, color: '#0891b2' },
  { kw: 'local seo marketing services',    pos: 1, prev: 5, color: '#059669' },
]

export default function SEOHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #dbeafe 50%, #e0f2fe 100%)' }}
    >
      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.55) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-24 -left-24 w-[550px] h-[550px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(224,242,254,0.7) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.12) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />
      <div className="absolute top-0 right-0 w-px h-full opacity-20 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, #2563eb, transparent)' }} />
      <div className="absolute top-0 left-1/3 w-px h-full opacity-10 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, #60a5fa, transparent)' }} />
      <div className="absolute top-0 left-2/3 w-px h-full opacity-10 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, #60a5fa, transparent)' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7 py-10">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* ── COLUMN 1: Keywords card + badges + stats ── */}
          <div className="animate-hero-visual hidden lg:flex lg:w-[240px] flex-shrink-0 flex-col justify-between gap-3">

            {/* Keyword Rankings Card */}
            <div
              className="bg-white/90 backdrop-blur-sm rounded-3xl border border-blue-100/80 p-4 flex flex-col"
              style={{ boxShadow: '0 24px 60px rgba(37,99,235,0.12)' }}
            >
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-100">
                <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <BarChart2 size={14} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-slate-800 leading-tight">Keyword Rankings</p>
                  <p className="text-[9px] text-slate-400">Live Tracker</p>
                </div>
                <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50
                  text-emerald-600 text-[9px] font-bold rounded-full border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                {keywords.map(({ kw, pos, prev, color }) => (
                  <div
                    key={kw}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-xl"
                    style={{ background: `${color}08`, border: `1px solid ${color}20` }}
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0
                        text-white text-[9px] font-black"
                      style={{ background: `linear-gradient(135deg, ${color}, ${color}bb)` }}
                    >
                      #{pos}
                    </div>
                    <span className="flex-1 text-[10px] font-medium text-slate-600 leading-snug line-clamp-2">{kw}</span>
                    <div className="flex items-center gap-0.5 text-emerald-600 text-[9px] font-bold flex-shrink-0">
                      <ArrowUp size={7} />+{prev - pos}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Organic Traffic</p>
                  <p className="text-[18px] font-black text-blue-600 leading-tight">+200%</p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-xl border border-blue-100">
                  <TrendingUp size={10} className="text-blue-600" />
                  <span className="text-[9px] font-bold text-blue-600">Growing</span>
                </div>
              </div>
            </div>

            {/* DA 52 + 100+ badges side by side */}
            <div className="flex gap-2">
              <div
                className="flex-1 bg-white rounded-2xl px-3 py-2.5 border border-blue-100"
                style={{ boxShadow: '0 6px 20px rgba(37,99,235,0.14)' }}
              >
                <p className="text-[9px] text-slate-400 font-medium">Domain Authority</p>
                <p className="text-[15px] font-black text-blue-600 leading-tight">DA 52</p>
                <div className="flex items-center gap-0.5 text-emerald-500 text-[9px] font-semibold mt-0.5">
                  <TrendingUp size={8} /> +8 this month
                </div>
              </div>
              <div
                className="flex-1 bg-white rounded-2xl px-3 py-2.5 border border-emerald-100"
                style={{ boxShadow: '0 6px 20px rgba(5,150,105,0.12)' }}
              >
                <p className="text-[9px] text-slate-400 font-medium">1st Page KW</p>
                <p className="text-[15px] font-black text-emerald-600 leading-tight">100+</p>
                <div className="flex items-center gap-0.5 text-emerald-500 text-[9px] font-semibold mt-0.5">
                  <ArrowUp size={8} /> Ranked
                </div>
              </div>
            </div>

            {/* Stat strip */}
            <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-sm overflow-hidden flex">
              {[
                { num: '120+', label: 'Projects',    color: '#2563eb' },
                { num: '95%',  label: 'Satisfied',   color: '#7c3aed' },
                { num: '200%', label: 'Growth',      color: '#0891b2' },
              ].map(({ num, label, color }, i) => (
                <div
                  key={label}
                  className="flex-1 flex flex-col items-center py-3"
                  style={{ borderRight: i < 2 ? '1px solid #e0eaff' : 'none' }}
                >
                  <span
                    className="text-[16px] font-black leading-tight"
                    style={{
                      background: `linear-gradient(135deg, ${color}, ${color}88)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >{num}</span>
                  <span className="text-[9px] text-slate-500 font-medium">{label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* ── COLUMN 2: Text Content ── */}
          <div className="flex-1 min-w-0 flex flex-col justify-center items-center text-center lg:px-4">

            <nav className="flex items-center justify-center gap-1.5 text-[13px] text-slate-400 mb-6 animate-hero-enter">
              <a href="/ARA-Marketing/" className="hover:text-blue-600 transition-colors duration-200">Home</a>
              <ChevronRight size={13} className="text-slate-300" />
              <span>Digital Marketing</span>
              <ChevronRight size={13} className="text-slate-300" />
              <span className="text-blue-600 font-medium">SEO Services</span>
            </nav>

            <div className="animate-hero-d1 mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white
                rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-blue-600/25">
                <Search size={11} /> Search Engine Optimization (SEO)
              </span>
            </div>

            <h1 className="animate-hero-d2 text-[clamp(19px,2vw,35px)] font-bold text-slate-900
              leading-[1.14] tracking-tight mb-5">
              Best SEO Services in Thanjavur to{' '}
              <span className="text-gradient-blue">Improve Rankings, Traffic</span>{' '}
              &amp; Business Growth
            </h1>

            <p className="animate-hero-d3 text-[14px] text-slate-600 leading-[1.85] mb-3">
              ARA Discover Marketing is one of the best SEO companies in Thanjavur, offering strategic and AI-driven SEO solutions to help businesses improve online visibility, generate high-quality leads, and achieve long-term digital growth.
            </p>
            <p className="animate-hero-d3 text-[14px] text-slate-600 leading-[1.85] mb-3">
              Our SEO team delivers result-oriented optimization strategies customized for startups, local businesses, and enterprises looking to dominate search engine rankings.
            </p>
            <p className="animate-hero-d3 text-[14px] text-slate-600 leading-[1.85] mb-8">
              We are a top SEO digital marketing agency in Thanjavur, offering modern AI-powered SEO techniques such as technical SEO, high-quality off-page SEO, AI-driven optimization, and content-based marketing campaigns to boost organic traffic and conversions.
            </p>

            <div className="animate-hero-d4 flex flex-wrap justify-center gap-3">
              <a href="/ARA-Marketing/contact-us"
                className="btn-glow inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white
                  rounded-full text-sm font-semibold shadow-lg shadow-blue-600/25
                  hover:bg-blue-500 transition-all duration-300">
                Get Free SEO Audit <ArrowRight size={15} />
              </a>
              <a href="#seo-services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-blue-300
                  text-blue-700 bg-white/70 rounded-full text-sm font-semibold
                  hover:bg-white hover:border-blue-400 transition-all duration-300 backdrop-blur-sm">
                Explore SEO Services <ArrowUpRight size={15} />
              </a>
            </div>

          </div>

          {/* ── COLUMN 3: Right Image ── */}
          <div className="animate-hero-visual hidden lg:block lg:w-[280px] flex-shrink-0">
            <div className="relative h-full">
              <div
                className="relative rounded-3xl overflow-hidden border border-blue-100/60 h-full min-h-[360px]"
                style={{ boxShadow: '0 24px 60px rgba(37,99,235,0.14)' }}
              >
                <img
                  src={seoHeroImg}
                  alt="SEO Services Thanjavur - ARA Discover Marketing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(37,99,235,0.75) 100%)' }} />

                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5
                  bg-white/90 backdrop-blur-sm rounded-full border border-blue-100 shadow-sm whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-slate-700">Live Rankings</span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-[13px] font-bold leading-snug drop-shadow">
                    Dominate Google Search in Thanjavur
                  </p>
                  <p className="text-blue-100 text-[11px] mt-1 drop-shadow">
                    AI-Driven SEO Strategies
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
