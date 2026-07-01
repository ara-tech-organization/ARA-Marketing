import { Smartphone, Search, Zap, Palette, Shield, Headphones, Layers, CheckCircle2 } from 'lucide-react'

const reasons = [
  { icon: Smartphone, title: 'Mobile-first responsive design approach',        desc: 'Every website we build looks flawless on all screen sizes — from desktop to mobile.',        color: '#2563eb' },
  { icon: Search,     title: 'SEO-optimized website architecture',             desc: 'Clean code structure, fast loading, and semantic HTML built for top Google rankings.',      color: '#0ea5e9' },
  { icon: Zap,        title: 'Fast loading & performance-focused development', desc: 'Optimised assets, lazy loading, and CDN delivery for sub-2s load times.',                   color: '#2563eb' },
  { icon: Palette,    title: 'Custom UI/UX design solutions',                  desc: 'Pixel-perfect interfaces tailored to your brand identity and target audience.',              color: '#0ea5e9' },
  { icon: Shield,     title: 'Secure and scalable coding standards',           desc: 'SSL, best-practice authentication, and architecture that grows with your business.',         color: '#2563eb' },
  { icon: Headphones, title: 'Ongoing technical support & maintenance',        desc: 'Post-launch monitoring, updates, and dedicated support to keep your site running.',          color: '#0ea5e9' },
]

export default function WebDevWhyUs() {
  return (
    <section className="py-16" style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #f8faff 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        <div className="reveal grid lg:grid-cols-[42%_58%] gap-8 lg:gap-14 items-center">

          {/* Left — sticky intro panel */}
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
              <Layers size={11} /> Why Choose Us
            </span>
            <h2 className="text-[clamp(23px,2.7vw,37px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Why Businesses Trust Our{' '}
              <span className="text-gradient-blue">Web Development</span> Expertise
            </h2>
            <p className="text-[14.5px] text-slate-500 leading-relaxed mb-8">
              ARA Discover Marketing stands apart from other professional web development services in
              Thanjavur by emphasising quality, innovation, and long-term digital success.
            </p>

            {/* Mini proof strip */}
            <div className="flex flex-wrap gap-3">
              {['150+ Websites Delivered', '98% Client Satisfaction', '5+ Years Experience'].map(badge => (
                <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1.5
                  bg-white border border-blue-100 rounded-full text-[11px] font-semibold text-blue-700 shadow-sm">
                  <CheckCircle2 size={11} className="text-blue-500" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right — clean row list */}
          <div className="space-y-1">
            {reasons.map(({ icon: Icon, title, desc, color }, i) => (
              <div
                key={title}
                className="group flex items-start gap-4 px-5 py-4 rounded-2xl cursor-default transition-all duration-300"
                onMouseEnter={e => {
                  e.currentTarget.style.background = color + '08'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {/* Thin divider */}
                <div className="w-px self-stretch flex-shrink-0 rounded-full mt-1"
                  style={{ background: color + '30' }} />

                {/* Icon */}
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5
                  transition-all duration-300 group-hover:scale-110"
                  style={{ background: color + '12' }}>
                  <Icon size={17} style={{ color }} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13.5px] font-bold text-slate-800 mb-0.5 leading-snug
                    transition-colors duration-200 group-hover:text-slate-900"
                    style={{}}>
                    {title}
                  </p>
                  <p className="text-[12px] text-slate-400 leading-relaxed">{desc}</p>
                </div>

                {/* Right dot accent */}
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 opacity-0
                  group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: color }} />
              </div>
            ))}
          </div>

        </div>

        <div className="reveal text-center mt-12">
          <p className="text-[13.5px] text-slate-500">
            We are also recognised as one of the{' '}
            top website design and development companies in Thanjavur
            {' '}creating contemporary websites for efficient online business expansion.
          </p>
        </div>

      </div>
    </section>
  )
}
