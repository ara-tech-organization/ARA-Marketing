import { Monitor, Server, Smartphone, Database, Cloud } from 'lucide-react'

const categories = [
  {
    icon: Monitor,
    label: 'Frontend',
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.10)',
    techs: ['React', 'Angular', 'Vue.js'],
  },
  {
    icon: Server,
    label: 'Backend',
    color: '#0891b2',
    bg: 'rgba(8,145,178,0.10)',
    techs: ['Node.js', 'Python', 'PHP'],
  },
  {
    icon: Smartphone,
    label: 'Mobile',
    color: '#1d4ed8',
    bg: 'rgba(29,78,216,0.10)',
    techs: ['Flutter', 'React Native', 'iOS Native', 'Android Native'],
  },
  {
    icon: Database,
    label: 'Databases',
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.10)',
    techs: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: Cloud,
    label: 'AI & Cloud',
    color: '#0891b2',
    bg: 'rgba(8,145,178,0.10)',
    techs: ['AWS', 'Google Cloud', 'AI/ML Integration'],
  },
]

export default function WATech() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-7">

        <div className="text-center mb-10 sm:mb-14 reveal">
          <span
            className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 rounded-full text-[10px] xs:text-[11px] font-black uppercase tracking-widest mb-4 sm:mb-5"
            style={{ background: 'rgba(8,145,178,0.08)', color: '#0891b2', border: '1px solid rgba(8,145,178,0.18)' }}
          >
            <Cloud size={10} /> Our Tech Stack
          </span>
          <h2 className="text-[clamp(22px,3vw,42px)] font-bold tracking-tight text-slate-900 mb-3 sm:mb-4">
            Technologies{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              We Use
            </span>
          </h2>
          <p className="text-[13px] xs:text-[14px] text-slate-500 max-w-[480px] mx-auto leading-relaxed px-2">
            We leverage industry-leading technologies across the full stack to build reliable, scalable, and future-proof web applications.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 xs:gap-3">
          {categories.map(({ icon: Icon, label, color, bg, techs }, i) => (
            <div
              key={label}
              className="group flex items-center gap-3 xs:gap-5 px-4 xs:px-6 py-4 xs:py-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg reveal"
              style={{
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                transitionDelay: `${i * 60}ms`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${color}05`
                e.currentTarget.style.borderColor = `${color}40`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#f8fafc'
                e.currentTarget.style.borderColor = '#e2e8f0'
              }}
            >
              {/* Category */}
              <div className="flex items-center gap-2 xs:gap-2.5 flex-shrink-0 w-24 xs:w-32">
                <div
                  className="w-8 xs:w-9 h-8 xs:h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: bg, color }}
                >
                  <Icon size={15} />
                </div>
                <span className="text-[12px] xs:text-[13px] font-bold text-slate-700">{label}</span>
              </div>

              {/* Divider */}
              <div className="w-px h-7 xs:h-8 flex-shrink-0" style={{ background: '#dbeafe' }} />

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 xs:gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 xs:px-3.5 py-1 xs:py-1.5 rounded-xl text-[11px] xs:text-[12px] font-semibold transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                    style={{ background: 'white', color, border: `1.5px solid ${color}20`, boxShadow: `0 2px 8px ${color}08` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
