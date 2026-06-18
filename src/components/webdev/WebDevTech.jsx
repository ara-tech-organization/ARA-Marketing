import { Layers, Globe2, Server, Database, BookOpen, Monitor, Cloud } from 'lucide-react'

const techs = [
  { label: 'HTML5, CSS3, JavaScript', icon: Globe2,    color: '#2563eb', bg: '#dbeafe', tag: 'Frontend',       pct: 98 },
  { label: 'React & Angular',         icon: Monitor,   color: '#7c3aed', bg: '#ede9fe', tag: 'Framework',      pct: 95 },
  { label: 'PHP & Laravel',           icon: Server,    color: '#059669', bg: '#d1fae5', tag: 'Backend',        pct: 90 },
  { label: 'WordPress Development',   icon: BookOpen,  color: '#d97706', bg: '#fef3c7', tag: 'CMS',            pct: 96 },
  { label: 'MySQL & MongoDB',         icon: Database,  color: '#db2777', bg: '#fce7f3', tag: 'Database',       pct: 88 },
  { label: 'Bootstrap & Tailwind CSS',icon: Layers,    color: '#0891b2', bg: '#cffafe', tag: 'Styling',        pct: 97 },
  { label: 'Cloud Hosting Solutions', icon: Cloud,     color: '#2563eb', bg: '#dbeafe', tag: 'Infrastructure', pct: 92 },
]

export default function WebDevTech() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #f0f6ff 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Layers size={11} /> Technology
          </span>
          <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Advanced Tools &amp;{' '}
            <span className="text-gradient-blue">Modern Development Technologies</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-xl mx-auto">
            We use cutting-edge technologies to build scalable and secure websites.
          </p>
        </div>

        <div className="reveal space-y-3">
          {techs.map(({ label, icon: Icon, color, bg, tag, pct }) => (
            <div
              key={label}
              className="group relative bg-white rounded-2xl overflow-hidden cursor-default transition-all duration-300"
              style={{ border: '1.5px solid #f1f5f9', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color + '40'
                e.currentTarget.style.boxShadow = `0 8px 32px ${color}12`
                e.currentTarget.style.transform = 'translateX(4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#f1f5f9'
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-400"
                style={{ background: `linear-gradient(180deg, ${color}, ${color}88)` }} />
              <div className="flex items-center gap-5 pl-5 pr-6 py-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0
                  transition-all duration-300 group-hover:scale-110"
                  style={{ background: bg }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <span className="flex-1 text-[15px] font-bold text-slate-800 leading-tight
                  group-hover:text-slate-900 transition-colors duration-200">
                  {label}
                </span>
                <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white flex-shrink-0"
                  style={{ background: color }}>
                  {tag}
                </span>
                <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                  <div className="h-2 rounded-full overflow-hidden" style={{ width: 120, background: color + '14' }}>
                    <div className="h-full rounded-full"
                      style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}88, ${color})`, transition: 'width 0.8s ease' }} />
                  </div>
                  <span className="text-[11px] font-bold w-8" style={{ color }}>{pct}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 text-center">
          <p className="text-[13.5px] text-slate-500">
            As a leading best{' '}
            website design and development company in Thanjavur
            {', '}we ensure all websites are built with future-ready technologies.
          </p>
        </div>

      </div>
    </section>
  )
}
