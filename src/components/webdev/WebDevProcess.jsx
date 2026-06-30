import {
  ClipboardList, Palette, LayoutDashboard, Code2,
  FileText, TestTube, Rocket, Layers
} from 'lucide-react'

const steps = [
  { num: '01', icon: ClipboardList,   title: 'Business Requirement Analysis',      color: '#2563eb', light: '#dbeafe' },
  { num: '02', icon: Palette,         title: 'UI/UX Design Planning',              color: '#7c3aed', light: '#ede9fe' },
  { num: '03', icon: LayoutDashboard, title: 'Website Architecture & Wireframing', color: '#0891b2', light: '#cffafe' },
  { num: '04', icon: Code2,           title: 'Frontend & Backend Development',     color: '#059669', light: '#d1fae5' },
  { num: '05', icon: FileText,        title: 'Content Integration & Optimization', color: '#d97706', light: '#fef3c7' },
  { num: '06', icon: TestTube,        title: 'Testing & Quality Assurance',        color: '#db2777', light: '#fce7f3' },
  { num: '07', icon: Rocket,          title: 'Launch & Post-Launch Support',       color: '#2563eb', light: '#dbeafe' },
]

export default function WebDevProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> Our Process
          </span>
          <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Our Strategic Website{' '}
            <span className="text-gradient-blue">Development Workflow</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-xl mx-auto">
            As a trusted web development and designing company in Thanjavur, we follow a
            result-driven process to ensure high-quality website delivery.
          </p>
        </div>

        <div className="hidden lg:block reveal">
          <div className="relative" style={{ height: 320 }}>
            <div className="absolute left-4 right-4 pointer-events-none"
              style={{
                top: 158, height: 2,
                background: 'linear-gradient(90deg, #bfdbfe 0%, #2563eb 30%, #2563eb 70%, #bfdbfe 100%)',
                borderRadius: 2,
              }} />

            <div className="absolute inset-0"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
              {steps.map((step, i) => {
                const Icon = step.icon
                const isAbove = i % 2 === 0
                return (
                  <div key={step.num} className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 w-11 h-11 rounded-full
                      flex items-center justify-center text-white text-[11px] font-bold z-10"
                      style={{
                        top: 138,
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                        boxShadow: `0 4px 16px ${step.color}55`,
                      }}>
                      {step.num}
                    </div>
                    <div
                      className="absolute left-0.5 right-0.5 bg-white rounded-xl p-3 flex flex-col items-center
                        text-center cursor-default transition-all duration-300"
                      style={isAbove
                        ? { top: 8, bottom: 172, border: `1.5px solid ${step.color}22`, boxShadow: `0 4px 20px ${step.color}10` }
                        : { top: 192, bottom: 8, border: `1.5px solid ${step.color}22`, boxShadow: `0 4px 20px ${step.color}10` }}
                      onMouseEnter={e => {
                        e.currentTarget.style.boxShadow = `0 10px 28px ${step.color}28`
                        e.currentTarget.style.borderColor = step.color + '45'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.boxShadow = `0 4px 20px ${step.color}10`
                        e.currentTarget.style.borderColor = step.color + '22'
                      }}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-2 flex-shrink-0"
                        style={{ background: step.light || step.color + '12' }}>
                        <Icon size={16} style={{ color: step.color }} />
                      </div>
                      <h3 className="text-[5px] font-bold text-slate-700 leading-tight">{step.title}</h3>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.num} className={`reveal delay-${(i % 4) + 1} flex gap-4`}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white text-[12px] font-bold"
                    style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`, boxShadow: `0 4px 12px ${step.color}35` }}>
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 mt-1 min-h-6" style={{ width: 2, background: step.color + '28', borderRadius: 2 }} />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-white rounded-2xl p-4"
                    style={{ border: `1.5px solid ${step.color}20`, boxShadow: `0 2px 12px ${step.color}08` }}>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: step.light || step.color + '12' }}>
                        <Icon size={16} style={{ color: step.color }} />
                      </div>
                      <h3 className="text-[12px] font-bold text-slate-700 leading-snug">{step.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
