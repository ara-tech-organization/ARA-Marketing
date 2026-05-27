import { Cpu, Search, Monitor, Play, ShoppingBag, ArrowRight, TrendingUp, BarChart2, Star } from 'lucide-react'

const highlights = [
  { value: '300%', label: 'Lead Growth',   color: '#2563eb', icon: TrendingUp },
  { value: '200+', label: 'Campaigns',     color: '#7c3aed', icon: BarChart2  },
  { value: '4.8x', label: 'Avg. ROAS',    color: '#059669', icon: Star       },
]

const adTypes = [
  { icon: Search,      label: 'Google Search Ads',  desc: 'Top-placement with keyword precision', color: '#2563eb' },
  { icon: Monitor,     label: 'Display Advertising', desc: 'Visual reach across the web',          color: '#7c3aed' },
  { icon: Play,        label: 'YouTube Ads',         desc: 'Video-led brand and lead campaigns',   color: '#0891b2' },
  { icon: ShoppingBag, label: 'Shopping Ads',        desc: 'Product-first e-commerce visibility',  color: '#059669' },
]

const paragraphs = [
  { text: 'Google Ads is one of the fastest ways to reach your potential customers and get conversions online. Ara Discover Marketing is the best Google paid advertising in Thanjavur to help businesses appear in front of the right audience at the right time.', color: '#2563eb', num: '01' },
  { text: 'We are the most trusted search engine marketing service provider in Thanjavur. We specialize in PPC campaigns, search advertising, display advertising, YouTube promotions, and shopping campaigns to improve visibility and lead generation.', color: '#7c3aed', num: '02' },
  { text: 'With our knowledge in Google Adwords paid search campaigns in Thanjavur, your business can get the best ad performance and minimize unnecessary advertising costs. We also offer strategic search engine marketing consulting services in Thanjavur to improve campaign efficiency and ROI.', color: '#0891b2', num: '03' },
  { text: 'Ara Discover Marketing is the best search engine marketing sem agencies in Thanjavur for performance-focused Google Ads management and transparent reporting.', color: '#059669', num: '04' },
]

export default function SEMIntro() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* ── Section heading ── */}
        <div className="text-center max-w-[700px] mx-auto mb-8 sm:mb-10 reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-4 sm:mb-5">
            <Cpu size={11} /> AI-Driven Google Advertising
          </span>
          <h2 className="text-[clamp(22px,4vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-3">
            AI-Driven Google Advertising Solutions That{' '}
            <span className="text-gradient-blue">Deliver Real Results</span>
          </h2>
        </div>

        {/* ── Image + paragraphs ── */}
        <div className="reveal flex flex-col lg:flex-row gap-6 sm:gap-7 lg:gap-8 mb-8 sm:mb-10 items-stretch">

          {/* Image */}
          <div
            className="w-full lg:w-[420px] xl:w-[460px] flex-shrink-0 relative rounded-2xl sm:rounded-3xl overflow-hidden"
            style={{ minHeight: 260, height: 'clamp(260px, 40vw, 420px)', boxShadow: '0 20px 60px rgba(37,99,235,0.13)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&h=700&fit=crop&auto=format&q=80"
              alt="AI-Driven Google Ads Solutions in Thanjavur"
              loading="lazy"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(160deg, rgba(37,99,235,0.55) 0%, rgba(10,22,40,0.72) 100%)' }} />

            {/* AI badge */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-xl"
              style={{ background: 'rgba(37,99,235,0.75)', backdropFilter: 'blur(8px)' }}>
              <Cpu size={11} className="text-white" />
              <span className="text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-wider">AI-Powered Ads</span>
            </div>

            {/* Stat overlays */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 flex gap-2 sm:gap-3">
              {highlights.map(({ value, label }) => (
                <div key={label} className="flex-1 text-center px-2 py-2.5 sm:px-3 sm:py-3 rounded-xl sm:rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.18)' }}>
                  <p className="text-[18px] sm:text-[22px] font-bold text-white leading-none">{value}</p>
                  <p className="text-[8px] sm:text-[9px] text-white/60 font-semibold mt-1 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Paragraphs */}
          <div className="flex-1 flex flex-col gap-3 sm:gap-4">
            {paragraphs.map(({ text, color, num }) => (
              <div key={num}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-100
                  hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = color + '28' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9' }}
              >
                <div className="h-0.5 w-0 rounded-full group-hover:w-8 transition-all duration-400 mb-3"
                  style={{ background: `linear-gradient(90deg,${color},${color}44)` }} />
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-[10px] font-black w-6 h-6 rounded-lg flex items-center
                    justify-center mt-0.5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: color + '12', color, border: `1.5px solid ${color}22` }}>
                    {num}
                  </span>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-[1.78]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA + ad-type cards ── */}
        <div className="reveal flex flex-col gap-5 sm:gap-6">

          <div className="flex items-center justify-center">
            <a href="#sem-services"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-[12px] sm:text-[13px]
                font-bold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 6px 24px rgba(37,99,235,0.28)' }}>
              View All SEM Services <ArrowRight size={14} />
            </a>
          </div>

          {/* Ad type cards: 2 col on xs/sm, 4 col on md+ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {adTypes.map(({ icon: Icon, label, desc, color }) => (
              <div key={label}
                className="group flex flex-col gap-2.5 sm:gap-3 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-100 bg-white
                  hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                onMouseEnter={e => { e.currentTarget.style.borderColor = color + '40' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9' }}>
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center text-white
                  transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ background: `linear-gradient(135deg,${color},${color}bb)`, boxShadow: `0 6px 16px ${color}28` }}>
                  <Icon size={17} />
                </div>
                <div>
                  <p className="text-[12px] sm:text-[13px] font-bold text-slate-900 mb-0.5 sm:mb-1">{label}</p>
                  <p className="text-[11px] sm:text-[12px] text-slate-500 leading-snug">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
