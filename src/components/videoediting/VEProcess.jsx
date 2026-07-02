import { ClipboardList, FolderOpen, Scissors, Layers, Volume2, RotateCcw, CheckCircle2, LineChart } from 'lucide-react'

const steps = [
  { num: '01', icon: ClipboardList, title: 'Requirement & Concept Analysis',  desc: 'Deep understanding of your brand goals, target audience, platform requirements, and the message you want to convey.', color: '#2563eb', accent: '#eff6ff',  border: '#bfdbfe'  },
  { num: '02', icon: FolderOpen,    title: 'Footage Collection & Planning',    desc: 'Raw footage, assets, scripts, and reference materials are collected and organised into a structured edit plan.',       color: '#2563eb', accent: '#eff6ff',  border: '#bfdbfe'  },
  { num: '03', icon: Scissors,      title: 'Editing & Storyboarding',          desc: 'Cut, sequence, and structure your footage into a compelling story using timing, pacing, and narrative techniques.',      color: '#0ea5e9', accent: '#f0f9ff', border: '#bae6fd' },
  { num: '04', icon: Layers,        title: 'Motion Graphics & Effects',        desc: 'Titles, lower thirds, animated elements, transitions, and visual effects added to elevate production value.',             color: '#2563eb', accent: '#eff6ff',  border: '#bfdbfe'  },
  { num: '05', icon: Volume2,       title: 'Audio Sync & Colour Correction',   desc: 'Professional audio mixing, sound design, music integration, and cinematic colour grading for every sensory element.',     color: '#0ea5e9', accent: '#f0f9ff', border: '#bae6fd' },
  { num: '06', icon: RotateCcw,     title: 'Client Review & Revisions',        desc: 'Preview shared for your feedback. Revisions applied to ensure perfect alignment with your vision and brand guidelines.', color: '#2563eb', accent: '#eff6ff',  border: '#bfdbfe'  },
  { num: '07', icon: CheckCircle2,  title: 'Final Video Delivery',             desc: 'Finished videos exported in platform-optimised formats, delivered in full resolution for YouTube, Instagram, or broadcast.', color: '#2563eb', accent: '#eff6ff', border: '#bfdbfe' },
]

export default function VEProcess() {
  return (
    <section className="relative py-20 lg:py-18 overflow-hidden" style={{ background: '#ffffff' }}>

      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.6) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(186,230,253,0.5) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-12 reveal text-center lg:text-left">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
              style={{ background: 'white', border: '1px solid #bfdbfe', color: '#2563eb', boxShadow: '0 2px 12px rgba(37,99,235,0.08)' }}>
              <LineChart size={11} /> Our Workflow
            </span>
            <h2 className="text-[clamp(23px,3.6vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight" style={{ fontWeight: 700 }}>
              Our Strategic Video{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Editing Workflow
              </span>
            </h2>
          </div>
          <p className="text-[14px] text-slate-500 leading-[1.85] lg:max-w-[360px]">
            Our strategic process assures high-quality video output from a professional video editing studio in Thanjavur.
          </p>
        </div>

        {/* Steps 01–04: 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 reveal">
          {steps.slice(0, 4).map(({ num, icon: Icon, title, desc, color, accent, border }) => (
            <StepCard key={num} num={num} Icon={Icon} title={title} desc={desc} color={color} accent={accent} border={border} />
          ))}
        </div>

        {/* Connector */}
        <div className="flex justify-center py-3">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="rounded-full transition-all"
                style={{
                  width: i === 3 ? 8 : 5, height: i === 3 ? 8 : 5,
                  background: i === 3 ? 'linear-gradient(135deg,#2563eb,#0ea5e9)' : 'rgba(37,99,235,0.18)',
                }} />
            ))}
          </div>
        </div>

        {/* Steps 05–07: 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 reveal">
          {steps.slice(4).map(({ num, icon: Icon, title, desc, color, accent, border }) => (
            <StepCard key={num} num={num} Icon={Icon} title={title} desc={desc} color={color} accent={accent} border={border} />
          ))}
        </div>

      </div>
    </section>
  )
}

function StepCard({ num, Icon, title, desc, color, accent, border }) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-white transition-all duration-350 hover:-translate-y-2"
      style={{ border: `1px solid ${border}`, boxShadow: '0 4px 20px rgba(37,99,235,0.06)' }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 20px 48px rgba(37,99,235,0.12)`; e.currentTarget.style.borderColor = color + '55' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.06)'; e.currentTarget.style.borderColor = border }}
    >
      <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}44)` }} />
      <span className="absolute -bottom-3 -right-1 text-[72px] font-black leading-none select-none pointer-events-none"
        style={{ color: color + '0e' }}>{num}</span>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-[12px] transition-transform duration-300 group-hover:scale-105"
            style={{ background: `linear-gradient(135deg,${color},${color}99)`, boxShadow: `0 4px 12px ${color}30` }}>
            {num}
          </div>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
            style={{ background: accent, border: `1px solid ${border}` }}>
            <Icon size={14} style={{ color }} />
          </div>
        </div>
        <h3 className="text-[12px] font-bold text-slate-900 leading-snug mb-2">{title}</h3>
        <p className="text-[12px] text-slate-500 leading-[1.75]">{desc}</p>
      </div>
    </div>
  )
}
