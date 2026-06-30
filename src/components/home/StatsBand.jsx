import { FolderCheck, Smile, BarChart2, TrendingUp, Megaphone, Zap, Target, Award } from 'lucide-react'
import useCounter from '../../hooks/useCounter'

const stats = [
  {
    icon: FolderCheck,
    target: 150, suffix: '+',
    label: 'Successful Projects Completed',
    accent: '#2563eb',
    grad: 'linear-gradient(135deg,#60a5fa,#2563eb)',
  },
  {
    icon: Smile,
    target: 95, suffix: '%',
    label: 'Client Satisfaction Rate',
    accent: '#0891b2',
    grad: 'linear-gradient(135deg,#38bdf8,#0891b2)',
  },
  {
    icon: BarChart2,
    target: 120, suffix: '+',
    label: 'SEO Campaigns Managed',
    accent: '#7c3aed',
    grad: 'linear-gradient(135deg,#a78bfa,#7c3aed)',
  },
  {
    icon: TrendingUp,
    target: 200, suffix: '%',
    label: 'Average Increase in Online Visibility',
    accent: '#059669',
    grad: 'linear-gradient(135deg,#34d399,#059669)',
  },
  {
    icon: Megaphone,
    target: 100, suffix: '+',
    label: 'Brands Successfully Promoted',
    accent: '#d97706',
    grad: 'linear-gradient(135deg,#fbbf24,#d97706)',
  },
]

const features = [
  {
    icon: Zap,
    eyebrow: 'Strategy',
    title: 'AI-driven campaigns built to scale brands faster.',
    body: 'Smarter targeting, sharper planning, and consistent optimization for long-term growth.',
    dark: true,
  },
  {
    icon: Target,
    eyebrow: 'Focus',
    title: 'Better visibility, stronger leads, sustainable growth.',
    body: null,
    dark: false,
  },
  {
    icon: Award,
    eyebrow: 'Summary',
    title: 'Performance-first digital marketing for ambitious brands.',
    body: 'We combine AI insights with practical execution to help businesses grow faster without losing consistency.',
    dark: false,
  },
]

function StatItem({ icon: Icon, target, suffix, label, accent, grad, last }) {
  const [count, ref] = useCounter(target)
  return (
    <div
      ref={ref}
      className="flex-1 flex flex-col items-center text-center px-6 py-8 relative cursor-default group transition-all duration-300"
      style={{ borderRight: last ? 'none' : '1px solid rgba(255,255,255,0.1)' }}
    >
      {/* icon */}
      <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)' }}>
        <Icon size={17} className="text-white" />
      </div>

      {/* number */}
      <div className="text-[clamp(32px,3vw,46px)] font-black leading-none tracking-tight mb-2"
        style={{ background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        {count}{suffix}
      </div>

      {/* label */}
      <p className="text-[11.5px] font-medium leading-snug max-w-[13ch]"
        style={{ color: 'rgba(255,255,255,0.55)' }}>{label}</p>

      {/* bottom dot */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: grad.includes('60a5fa') ? '#60a5fa' : accent }} />
    </div>
  )
}

export default function StatsBand() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">

      {/* dot grid texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle,rgba(37,99,235,0.055) 1px,transparent 1px)',
          backgroundSize: '30px 30px',
        }} />

      {/* soft glow corners */}
      <div className="absolute top-0 left-0 w-[480px] h-[360px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(37,99,235,0.06) 0%,transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[480px] h-[360px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(124,58,237,0.05) 0%,transparent 70%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.07)', color: '#1e40af', border: '1px solid rgba(37,99,235,0.18)' }}>
            Growth Metrics
          </span>
          <h2 className="font-black leading-tight tracking-tight text-slate-900"
            style={{ fontSize: 'clamp(26px,3.2vw,46px)' }}>
            Delivering Measurable Growth{' '}
            <span style={{ background: 'linear-gradient(135deg,#1e40af,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Through Strategic Marketing
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[14.5px] text-slate-500 leading-[1.85]">
            Our AI-driven digital marketing strategies make us the best digital marketing agency in Thanjavur for
            businesses looking to scale faster and achieve sustainable growth.
          </p>
        </div>

        {/* ── Stats Strip ── */}
        <div className="reveal mb-6 rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg,#0f172a 0%,#1e3a8a 50%,#1e1b4b 100%)',
            boxShadow: '0 24px 64px rgba(15,23,42,0.22)',
          }}>
          {/* top shimmer line */}
          <div className="h-[1px]" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)' }} />

          <div className="flex flex-wrap sm:flex-nowrap">
            {stats.map((s, i) => (
              <StatItem key={s.label} {...s} last={i === stats.length - 1} />
            ))}
          </div>

          {/* bottom shimmer line */}
          <div className="h-[1px]" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)' }} />
        </div>

        {/* ── Feature Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
          {features.map(({ icon: Icon, eyebrow, title, body, dark }) => (
            <div key={eyebrow}
              className="rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={dark ? {
                background: 'linear-gradient(145deg,#0f2f57,#1d4ed8)',
                boxShadow: '0 16px 48px rgba(15,47,87,0.18)',
              } : {
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
              }}
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={dark
                    ? { background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }
                    : { background: 'rgba(37,99,235,0.09)', border: '1px solid rgba(37,99,235,0.18)' }
                  }>
                  <Icon size={17} style={{ color: dark ? '#bfdbfe' : '#2563eb' }} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.26em]"
                  style={{ color: dark ? 'rgba(186,230,253,0.75)' : '#64748b' }}>
                  {eyebrow}
                </span>
              </div>

              <div>
                <h3 className="text-[16px] font-bold leading-snug"
                  style={{ color: dark ? '#f0f9ff' : '#0f172a' }}>
                  {title}
                </h3>
                {body && (
                  <p className="mt-2.5 text-[13px] leading-[1.75]"
                    style={{ color: dark ? 'rgba(224,242,254,0.72)' : '#64748b' }}>
                    {body}
                  </p>
                )}
              </div>

              <div className="mt-auto pt-2">
                <div className="h-[2px] rounded-full w-10"
                  style={{ background: dark ? 'rgba(255,255,255,0.25)' : 'rgba(37,99,235,0.3)' }} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
