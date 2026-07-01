import { Code2, Server, Database, Cpu, Layers } from 'lucide-react'

const categories = [
  {
    icon: Layers,
    label: 'Frontend',
    color: '#1e40af',
    items: ['Swift (iOS)', 'Kotlin', 'Java (Android)', 'Flutter', 'React Native'],
  },
  {
    icon: Server,
    label: 'Backend',
    color: '#2563eb',
    items: ['Node.js', 'Python', 'PHP', '.NET'],
  },
  {
    icon: Database,
    label: 'Databases',
    color: '#0ea5e9',
    items: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    icon: Cpu,
    label: 'AI & Cloud',
    color: '#2563eb',
    items: ['AWS', 'Google Cloud', 'AI/ML Solutions', 'Firebase'],
  },
]

export default function MATech() {
  return (
    <section className="py-16 sm:py-16 relative overflow-hidden"
      style={{ background: '#f0f9ff' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(37,99,235,0.1) 0%,transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle,rgba(37,99,235,0.5) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.10)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.20)' }}>
            <Code2 size={11} /> Technology Stack
          </span>
          <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Cutting-Edge Technologies We{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Leverage
            </span>
          </h2>
          <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748b' }}>
            We use cutting-edge technologies to deliver world-class mobile apps that are scalable, secure, and built for performance at scale.
          </p>
        </div>

        {/* Horizontal category strips — unique non-grid layout */}
        <div className="flex flex-col gap-5 reveal">
          {categories.map(({ icon: Icon, label, color, items }) => (
            <div key={label}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: '#ffffff', border: '1px solid rgba(37,99,235,0.12)' }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${color}35`
                e.currentTarget.style.background = `${color}08`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid rgba(37,99,235,0.12)'
                e.currentTarget.style.background = '#ffffff'
              }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 w-full sm:w-[160px] flex-shrink-0">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}20`, border: `1px solid ${color}35` }}>
                  <Icon size={17} style={{ color }} />
                </div>
                <span className="text-[14px] font-bold text-slate-900">{label}</span>
              </div>

              {/* Vertical divider — desktop only */}
              <div className="hidden sm:block w-px h-8 flex-shrink-0" style={{ background: 'rgba(37,99,235,0.15)' }} />

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2.5">
                {items.map(item => (
                  <span key={item}
                    className="px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                    style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}>
                    {item}
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
