import { ClipboardList, FolderOpen, Scissors, Layers, Volume2, RotateCcw, CheckCircle2, LineChart } from 'lucide-react'

const steps = [
  { num: '01', icon: ClipboardList, title: 'Requirement & Concept Analysis',  desc: 'Deep understanding of your brand goals, target audience, platform requirements, and the message you want to convey.',         color: '#2563eb' },
  { num: '02', icon: FolderOpen,    title: 'Footage Collection & Planning',    desc: 'Raw footage, assets, scripts, and reference materials are collected and organised into a structured edit plan.',               color: '#7c3aed' },
  { num: '03', icon: Scissors,      title: 'Editing & Storyboarding',          desc: 'Cut, sequence, and structure your footage into a compelling story using timing, pacing, and narrative techniques.',              color: '#0891b2' },
  { num: '04', icon: Layers,        title: 'Motion Graphics & Effects',        desc: 'Titles, lower thirds, animated elements, transitions, and visual effects added to elevate production value.',                   color: '#059669' },
  { num: '05', icon: Volume2,       title: 'Audio Sync & Colour Correction',   desc: 'Professional audio mixing, sound design, music integration, and cinematic colour grading for every sensory element.',           color: '#d97706' },
  { num: '06', icon: RotateCcw,     title: 'Client Review & Revisions',        desc: 'Preview shared for your feedback. Revisions applied to ensure perfect alignment with your vision and brand guidelines.',        color: '#dc2626' },
  { num: '07', icon: CheckCircle2,  title: 'Final Video Delivery',             desc: 'Finished videos exported in platform-optimised formats, delivered in full resolution for YouTube, Instagram, or broadcast.',   color: '#0f766e' },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function VEProcess() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      {/* ── Double circle – top left ── */}
      <div className="absolute -top-20 -left-20 w-[340px] h-[340px] rounded-full border border-blue-100/50 pointer-events-none animate-[spin_38s_linear_infinite]" />
      <div className="absolute -top-10 -left-10 w-[220px] h-[220px] rounded-full border border-blue-200/35 pointer-events-none animate-[spin_24s_linear_infinite_reverse]" />

      {/* ── Double circle – bottom right ── */}
      <div className="absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full border border-violet-100/40 pointer-events-none" />
      <div className="absolute -bottom-8 -right-8 w-[180px] h-[180px] rounded-full border border-violet-200/28 pointer-events-none" />

      {/* Ambient orb */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.15) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-7">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
              <LineChart size={11} /> Our Workflow
            </span>
            <h2 className="text-[clamp(26px,3.5vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight">
              Our Strategic Video{' '}
              <span style={gradBlue}>Editing Workflow</span>
            </h2>
          </div>
          <p className="text-[14px] text-slate-500 lg:max-w-[360px] leading-[1.85]">
            Our strategic process assures high-quality video output from a professional video editing studio in Thanjavur, delivering consistent and impactful results every time.
          </p>
        </div>

        {/* ── Timeline: steps as vertical + horizontal connector ── */}
        <div className="relative">

          {/* Rows 01–04 */}
          <div className="reveal flex flex-wrap gap-4 mb-4">
            {steps.slice(0, 4).map(({ num, icon: Icon, title, desc, color }, i) => (
              <div
                key={num}
                className={`group relative flex-1 min-w-[220px] bg-white rounded-3xl overflow-hidden
                  transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl delay-${i + 1}`}
                style={{
                  border: '1.5px solid #f0f4ff',
                  boxShadow: '0 4px 20px rgba(37,99,235,0.05)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = color + '30'
                  e.currentTarget.style.boxShadow = `0 20px 50px ${color}14`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#f0f4ff'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.05)'
                }}
              >
                {/* Top accent */}
                <div className="h-1 w-full transition-all duration-300"
                  style={{ background: `linear-gradient(90deg,${color},${color}44)` }} />

                {/* Watermark */}
                <span className="absolute -bottom-4 -right-2 text-[88px] font-black leading-none select-none pointer-events-none"
                  style={{ color: color + '08' }}>{num}</span>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-black text-[13px]
                      transition-all duration-300 group-hover:scale-105"
                      style={{ background: `linear-gradient(135deg,${color},${color}bb)`, boxShadow: `0 4px 14px ${color}30` }}>
                      {num}
                    </div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ background: color + '10', border: `1.5px solid ${color}20` }}>
                      <Icon size={17} style={{ color }} />
                    </div>
                  </div>
                  <h3 className="text-[13.5px] font-bold text-slate-900 leading-snug mb-2.5">{title}</h3>
                  <p className="text-[12px] text-slate-500 leading-[1.75]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Connector dots */}
          <div className="flex justify-center py-2">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="rounded-full transition-all duration-300"
                  style={{
                    width: i === 3 ? 8 : 6,
                    height: i === 3 ? 8 : 6,
                    background: i === 3
                      ? 'linear-gradient(135deg,#2563eb,#7c3aed)'
                      : 'rgba(37,99,235,0.20)',
                  }} />
              ))}
            </div>
          </div>

          {/* Rows 05–07 */}
          <div className="reveal flex flex-wrap gap-4 lg:mx-[8.33%]">
            {steps.slice(4).map(({ num, icon: Icon, title, desc, color }, i) => (
              <div
                key={num}
                className={`group relative flex-1 min-w-[220px] bg-white rounded-3xl overflow-hidden
                  transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl delay-${i + 1}`}
                style={{
                  border: '1.5px solid #f0f4ff',
                  boxShadow: '0 4px 20px rgba(37,99,235,0.05)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = color + '30'
                  e.currentTarget.style.boxShadow = `0 20px 50px ${color}14`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#f0f4ff'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.05)'
                }}
              >
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg,${color},${color}44)` }} />
                <span className="absolute -bottom-4 -right-2 text-[88px] font-black leading-none select-none pointer-events-none"
                  style={{ color: color + '08' }}>{num}</span>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-black text-[13px]
                      transition-all duration-300 group-hover:scale-105"
                      style={{ background: `linear-gradient(135deg,${color},${color}bb)`, boxShadow: `0 4px 14px ${color}30` }}>
                      {num}
                    </div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ background: color + '10', border: `1.5px solid ${color}20` }}>
                      <Icon size={17} style={{ color }} />
                    </div>
                  </div>
                  <h3 className="text-[13.5px] font-bold text-slate-900 leading-snug mb-2.5">{title}</h3>
                  <p className="text-[12px] text-slate-500 leading-[1.75]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
