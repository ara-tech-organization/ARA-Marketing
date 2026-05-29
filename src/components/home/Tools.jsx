import { BarChart, Search, Globe, TrendingUp, BarChart2, Target, MessageSquare, Palette, Bot } from 'lucide-react'

const tools = [
  { icon: BarChart,      name: 'Google Analytics', desc: 'Data & Insights' },
  { icon: Search,        name: 'Google Search Console', desc: 'SEO Performance' },
  { icon: Globe,         name: 'SEMrush',           desc: 'SEO & Competitor' },
  { icon: TrendingUp,    name: 'Ahrefs',            desc: 'Link Building' },
  { icon: BarChart2,     name: 'Meta Ads Manager',  desc: 'Social Advertising' },
  { icon: Target,        name: 'Google Ads',        desc: 'Paid Campaigns' },
  { icon: MessageSquare, name: 'HubSpot',           desc: 'CRM & Marketing' },
  { icon: Palette,       name: 'Canva & Adobe Creative Suite', desc: 'Design Suite' },
]

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            <Bot size={11} /> Technology Stack
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-slate-900 leading-tight tracking-tight">
            Advanced AI Enhanced Marketing Tools<br />&amp; Technologies We Use
          </h2>
          <p className="text-base text-slate-500 leading-relaxed max-w-xl mx-auto mt-3.5">
            We use the best AI-backed tools in the industry and AI-powered platforms to boost
            campaign performance and analytics.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((t, i) => {
            const Icon = t.icon
            return (
              <div
                key={t.name}
                className={`reveal delay-${(i % 4) + 1} flex items-center gap-4
                  bg-slate-50 border border-slate-200 rounded-xl p-5
                  transition-all duration-300 cursor-default group
                  hover:border-blue-300 hover:bg-blue-50
                  hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/80`}
              >
                <div className="w-11 h-11 flex-shrink-0 bg-white border border-slate-200 rounded-xl
                  flex items-center justify-center text-blue-600 transition-all duration-300
                  group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent
                  group-hover:shadow-lg group-hover:shadow-blue-600/30">
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-slate-800 leading-tight">{t.name}</h4>
                  <p className="text-[12px] text-slate-400 mt-0.5">{t.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="reveal text-center text-[13.5px] text-slate-500 leading-relaxed max-w-xl mx-auto mt-10">
          Our approach driven by technology has secured us a spot among the top digital marketing
          companies in Thanjavur.
        </p>

      </div>
    </section>
  )
}
