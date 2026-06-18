import { Edit3, Search, Puzzle, TrendingUp, DollarSign, RefreshCw, Layers } from 'lucide-react'

const benefits = [
  {
    icon: Edit3,
    title: 'Easy Content Management',
    desc: 'Update pages, publish blogs, and manage media without writing a single line of code. Full control at your fingertips.',
    color: '#2563eb',
    num: '01',
  },
  {
    icon: Search,
    title: 'SEO-Friendly Structure',
    desc: 'WordPress is built with search engines in mind — clean URLs, schema support, and powerful SEO plugins like Yoast.',
    color: '#2563eb',
    num: '02',
  },
  {
    icon: Puzzle,
    title: 'Thousands of Plugins',
    desc: 'Over 60,000 plugins available to extend functionality — from contact forms to e-commerce, analytics to booking systems.',
    color: '#1d4ed8',
    num: '03',
  },
  {
    icon: TrendingUp,
    title: 'Scalable & Flexible',
    desc: 'Start small and grow big. WordPress scales effortlessly from a 5-page business site to a 10,000-page enterprise platform.',
    color: '#3b82f6',
    num: '04',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective Development',
    desc: 'Lower development costs, affordable hosting, and a massive plugin ecosystem make WordPress the smart financial choice.',
    color: '#1d4ed8',
    num: '05',
  },
  {
    icon: RefreshCw,
    title: 'Regular Updates & Security',
    desc: 'WordPress releases frequent updates and has a large security community — keeping your site protected around the clock.',
    color: '#1e40af',
    num: '06',
  },
]

export default function CMSBenefits() {
  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #eff6ff 0%, #dbeafe 55%, #e0f2fe 100%)' }}
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-12"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.5) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.08)', color: '#1d4ed8', border: '1px solid rgba(37,99,235,0.2)' }}
          >
            <Layers size={11} /> WordPress Advantages
          </span>
          <h2 className="text-[clamp(23px,2.7vw,43px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
            Benefits of{' '}
            <span style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              WordPress Development
            </span>
          </h2>
          <p className="text-[15px] leading-[1.85] max-w-2xl mx-auto" style={{ color: '#64748b' }}>
            WordPress offers unmatched advantages for modern businesses. Here is why thousands of companies choose WordPress as their CMS platform every day.
          </p>
        </div>

        {/* Benefits — 3-column asymmetric layout with large decorative numbers */}
        <div className="reveal">
          {/* Top row: 3 cards */}
          <div className="flex flex-col sm:flex-row gap-5 mb-5">
            {benefits.slice(0, 3).map(({ icon: Icon, title, desc, color, num }) => (
              <div
                key={title}
                className="group flex-1 relative rounded-2xl p-6 overflow-hidden transition-all duration-400 hover:-translate-y-1"
                style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                onMouseEnter={e => { e.currentTarget.style.background = `${color}05`; e.currentTarget.style.borderColor = `${color}35`; e.currentTarget.style.boxShadow = `0 12px 36px rgba(37,99,235,0.12), 0 0 0 1px ${color}18` }}
                onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)' }}
              >
                {/* Decorative large number */}
                <span className="absolute top-2 right-4 text-[64px] font-black leading-none select-none pointer-events-none transition-all duration-400 group-hover:opacity-100"
                  style={{ color: `${color}12`, fontVariantNumeric: 'tabular-nums' }}>
                  {num}
                </span>

                <div className="h-0.5 w-0 rounded-full group-hover:w-10 transition-all duration-500 mb-5"
                  style={{ background: `linear-gradient(90deg, ${color}, ${color}44)` }} />

                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${color}15`, border: `1px solid ${color}28` }}>
                  <Icon size={18} style={{ color }} />
                </div>

                <h3 className="text-[13px] font-bold text-slate-800 mb-2.5 leading-snug pr-8">{title}</h3>
                <p className="text-[12.5px] leading-[1.75]" style={{ color: '#64748b' }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom row: 3 cards */}
          <div className="flex flex-col sm:flex-row gap-5">
            {benefits.slice(3).map(({ icon: Icon, title, desc, color, num }) => (
              <div
                key={title}
                className="group flex-1 relative rounded-2xl p-6 overflow-hidden transition-all duration-400 hover:-translate-y-1"
                style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                onMouseEnter={e => { e.currentTarget.style.background = `${color}05`; e.currentTarget.style.borderColor = `${color}35`; e.currentTarget.style.boxShadow = `0 12px 36px rgba(37,99,235,0.12), 0 0 0 1px ${color}18` }}
                onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)' }}
              >
                <span className="absolute top-2 right-4 text-[64px] font-black leading-none select-none pointer-events-none"
                  style={{ color: `${color}12`, fontVariantNumeric: 'tabular-nums' }}>
                  {num}
                </span>

                <div className="h-0.5 w-0 rounded-full group-hover:w-10 transition-all duration-500 mb-5"
                  style={{ background: `linear-gradient(90deg, ${color}, ${color}44)` }} />

                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${color}15`, border: `1px solid ${color}28` }}>
                  <Icon size={18} style={{ color }} />
                </div>

                <h3 className="text-[13px] font-bold text-slate-800 mb-2.5 leading-snug pr-8">{title}</h3>
                <p className="text-[12.5px] leading-[1.75]" style={{ color: '#64748b' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

