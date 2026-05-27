import { Monitor, Server, Smartphone, Database, Cloud } from 'lucide-react'

const categories = [
  {
    icon: Monitor,
    label: 'Frontend',
    color: '#4f46e5',
    bg: 'rgba(79,70,229,0.12)',
    techs: ['React', 'Angular', 'Vue.js'],
  },
  {
    icon: Server,
    label: 'Backend',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.12)',
    techs: ['Node.js', 'Python', 'PHP'],
  },
  {
    icon: Smartphone,
    label: 'Mobile',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.12)',
    techs: ['Flutter', 'React Native', 'iOS Native', 'Android Native'],
  },
  {
    icon: Database,
    label: 'Databases',
    color: '#4f46e5',
    bg: 'rgba(79,70,229,0.12)',
    techs: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: Cloud,
    label: 'AI & Cloud',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.12)',
    techs: ['AWS', 'Google Cloud', 'AI/ML Integration'],
  },
]

export default function WATech() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-7">

        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-5"
            style={{ background: 'rgba(79,70,229,0.08)', color: '#4f46e5', border: '1px solid rgba(79,70,229,0.18)' }}>
            <Cloud size={10} /> Our Tech Stack
          </span>
          <h2 className="text-[clamp(24px,3vw,42px)] font-bold tracking-tight text-slate-900 mb-4">
            Technologies{' '}
            <span style={{ background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              We Use
            </span>
          </h2>
          <p className="text-[14px] text-slate-500 max-w-[480px] mx-auto leading-relaxed">
            We leverage industry-leading technologies across the full stack to build reliable, scalable, and future-proof web applications.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {categories.map(({ icon: Icon, label, color, bg, techs }, i) => (
            <div
              key={label}
              className="group flex items-center gap-5 px-6 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg reveal"
              style={{
                background: '#f8fafc',
                border: '1.5px solid #e0e7ff',
                transitionDelay: `${i * 60}ms`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#f0f0ff'
                e.currentTarget.style.borderColor = `${color}50`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#f8fafc'
                e.currentTarget.style.borderColor = '#e0e7ff'
              }}
            >
              {/* Category label */}
              <div className="flex items-center gap-2.5 flex-shrink-0 w-32">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: bg, color }}
                >
                  <Icon size={16} />
                </div>
                <span className="text-[13px] font-bold text-slate-700">{label}</span>
              </div>

              {/* Divider */}
              <div className="w-px h-8 flex-shrink-0" style={{ background: '#e0e7ff' }} />

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl text-[12px] font-semibold transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                    style={{ background: 'white', color, border: `1.5px solid ${color}25`, boxShadow: `0 2px 8px ${color}10` }}
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
