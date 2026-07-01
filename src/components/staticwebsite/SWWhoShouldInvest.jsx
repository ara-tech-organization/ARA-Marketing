import { Building2, Briefcase, GraduationCap, Wrench, ArrowRight, Target, CheckCircle2 } from 'lucide-react'
import imgLocalBusiness from '../../assets/Static/Local Businesses.webp'
import imgPortfolio     from '../../assets/Static/Portfolio.Websites.webp'
import imgEducational   from '../../assets/Static/Educational.jpg'
import imgService       from '../../assets/Static/Service.jpg'

const audiences = [
  {
    icon: Building2,
    title: 'Local Businesses & Startups',
    desc: 'Establish a strong digital footprint fast. A static website gives your local business instant credibility, visibility, and new customer reach in Thanjavur and beyond.',
    image: imgLocalBusiness,
    imgPos: 'center center',
    color: '#0ea5e9',
    tag: '★ Most Popular',
    tagGold: true,
    points: ['Instant online credibility', 'Local SEO ready', 'Fast to launch'],
  },
  {
    icon: Briefcase,
    title: 'Portfolio Websites for Professionals',
    desc: 'Designers, photographers, architects, and freelancers — showcase your work with a blazing-fast portfolio site that leaves a lasting impression.',
    image: imgPortfolio,
    imgPos: 'center center',
    color: '#2563eb',
    tag: 'Professionals',
    points: ['Showcase your work', 'Blazing fast load', 'Mobile responsive'],
  },
  {
    icon: GraduationCap,
    title: 'Educational Institutions',
    desc: 'Schools, colleges, and coaching centers need a reliable, low-maintenance web presence. Our static sites deliver information efficiently with zero downtime.',
    image: imgEducational,
    imgPos: 'center center',
    color: '#2563eb',
    tag: 'Institutions',
    points: ['Zero downtime', 'Easy to maintain', 'Cost effective'],
  },
  {
    icon: Wrench,
    title: 'Small Service-Based Companies',
    desc: 'Plumbers, electricians, consultants, salons — a professional website builds trust with local customers and generates leads around the clock.',
    image: imgService,
    imgPos: 'center center',
    color: '#0ea5e9',
    tag: 'Service Providers',
    points: ['24/7 lead generation', 'Builds local trust', 'No ongoing costs'],
  },
]

export default function SWWhoShouldInvest() {
  return (
    <section
      className="py-16 sm:py-20 relative overflow-hidden bg-white"
    >
      {/* Subtle bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(14,165,233,0.06) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
            text-[10px] font-bold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(14,165,233,0.12)', color: '#0ea5e9', border: '1px solid rgba(14,165,233,0.3)' }}>
            <Target size={9} /> Who Should Invest
          </span>
          <h2 className="font-bold leading-tight tracking-tight mb-3 text-slate-900"
            style={{ fontSize: 'clamp(20px,2.5vw,34px)' }}>
            Who Should Invest in a{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Static Website?
            </span>
          </h2>
          <p className="text-[13px] max-w-xl mx-auto leading-[1.85]" style={{ color: '#64748b' }}>
            Static websites are ideal for businesses that need speed, simplicity, and a strong online presence.
            If you want to build a static website in Thanjavur, this solution is perfect for you.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {audiences.map(({ icon: Icon, title, desc, image, imgPos, color, tag, tagGold, points }, i) => (
            <div
              key={title}
              className={`reveal delay-${i + 1} group flex flex-col rounded-2xl overflow-hidden
                border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-2`}
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 16px 48px ${color}22`
                e.currentTarget.style.borderColor = `${color}30`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
                e.currentTarget.style.borderColor = '#f1f5f9'
              }}
            >
              {/* Image — clean, no heavy overlay */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: imgPos }}
                />
                {/* Subtle gradient only at bottom */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.45) 100%)' }} />

                {/* Tag pill — top left */}
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  style={tagGold
                    ? { background: 'rgba(37,99,235,0.92)', color: '#ffffff', backdropFilter: 'blur(6px)' }
                    : { background: 'rgba(255,255,255,0.92)', color, backdropFilter: 'blur(6px)' }
                  }
                >
                  {tag}
                </span>

                {/* Icon — bottom right of image */}
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}`, boxShadow: `0 4px 14px ${color}55` }}>
                  <Icon size={16} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                {/* Top accent */}
                <div className="w-8 h-[3px] rounded-full mb-3" style={{ background: color }} />

                <h3 className="text-[13px] font-bold text-slate-800 leading-snug mb-2
                  group-hover:text-blue-700 transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-[11.5px] text-slate-500 leading-[1.72] mb-4 flex-1">{desc}</p>

                {/* Feature points */}
                <ul className="flex flex-col gap-1.5">
                  {points.map(pt => (
                    <li key={pt} className="flex items-center gap-2 text-[11px] font-medium text-slate-600">
                      <CheckCircle2 size={11} style={{ color }} className="shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div className="reveal rounded-2xl px-6 sm:px-10 py-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #eef2ff 100%)', border: '1px solid rgba(37,99,235,0.12)' }}>
          <div>
            <p className="text-[13.5px] font-bold text-slate-800 mb-1">
              Choose our static web page development in Thanjavur
            </p>
            <p className="text-[12px] text-slate-500">
              We will help you launch your digital identity with a high-performance static website tailored to your goals.
            </p>
          </div>
          <a
            href="/ARA-Marketing/contact-us"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px]
              font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
              boxShadow: '0 6px 22px rgba(37,99,235,0.28)',
            }}
          >
            Start Your Project Today <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}
