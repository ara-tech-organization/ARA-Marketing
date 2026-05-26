import {
  Globe2, ShoppingCart, Building2, LayoutDashboard,
  Palette, RefreshCw, Code2, Wrench,
  ArrowRight, ChevronRight, Layers, CheckCircle
} from 'lucide-react'

const serviceItems = [
  { icon: Globe2,          label: 'Business Website Development',            color: '#2563eb', bg: '#dbeafe' },
  { icon: ShoppingCart,    label: 'E-commerce Website Development',          color: '#059669', bg: '#d1fae5' },
  { icon: Building2,       label: 'Corporate Website Design',                color: '#7c3aed', bg: '#ede9fe' },
  { icon: LayoutDashboard, label: 'Landing Page Design',                     color: '#d97706', bg: '#fef3c7' },
  { icon: Palette,         label: 'UI/UX Design',                            color: '#db2777', bg: '#fce7f3' },
  { icon: RefreshCw,       label: 'Website Redesign Services',               color: '#0891b2', bg: '#cffafe' },
  { icon: Code2,           label: 'CMS Development (WordPress, Custom CMS)', color: '#2563eb', bg: '#dbeafe' },
  { icon: Wrench,          label: 'Maintenance & Support Services',          color: '#059669', bg: '#d1fae5' },
]

const customFeatures = [
  'Mobile-responsive & fast loading',
  'Scalable & secure architecture',
  'Performance-driven development',
  'Long-term growth support',
  'Digital transformation ready',
]

export default function WebDevServices() {
  return (
    <section id="webdev-services" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-7">

        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> Our Services
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Complete Website Design &amp;{' '}
            <span className="text-gradient-blue">Development Solutions</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Our end-to-end website development services are customised to meet specific business
            goals and industry requirements.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {serviceItems.map(({ icon: Icon, label, color, bg }, i) => {
            const num = String(i + 1).padStart(2, '0')
            return (
              <div
                key={label}
                className="group relative bg-white rounded-2xl overflow-hidden cursor-default transition-all duration-300"
                style={{ border: '1.5px solid #f1f5f9', boxShadow: '0 2px 10px rgba(0,0,0,0.035)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = color + '50'
                  e.currentTarget.style.boxShadow = `0 10px 40px ${color}14`
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#f1f5f9'
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.035)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full transition-all duration-500
                  opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(180deg, ${color}, ${color}66)` }} />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-black leading-none
                  select-none pointer-events-none"
                  style={{ fontSize: 72, color: color + '0c', fontFamily: 'var(--font-poppins)' }}>
                  {num}
                </span>
                <div className="relative flex items-center gap-4 px-6 py-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                    transition-all duration-300 group-hover:scale-110"
                    style={{ background: bg }}>
                    <Icon size={22} style={{ color }} />
                  </div>
                  <span className="flex-1 text-[14px] font-semibold text-slate-700 leading-snug
                    group-hover:text-slate-900 transition-colors duration-200">
                    {label}
                  </span>
                  <ChevronRight size={16} className="flex-shrink-0 text-slate-200 transition-all duration-300 group-hover:translate-x-1" />
                  <ChevronRight size={16} className="flex-shrink-0 absolute right-6 transition-all duration-300
                    opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1"
                    style={{ color }} />
                </div>
              </div>
            )
          })}
        </div>

        <div className="reveal mb-16 max-w-3xl mx-auto text-center space-y-2">
          <p className="text-[14px] text-slate-500 leading-[1.8]">
            As one of the best website design and development services providers in Thanjavur, we
            develop websites that combine excellent design with high-tech performance.
          </p>
          <p className="text-[14px] text-slate-500 leading-[1.8]">
            We also offer bespoke website development solutions in Thanjavur for businesses that
            require unique functionality and advanced features.
          </p>
        </div>

        <div className="reveal">
          <div className="grid lg:grid-cols-[55%_45%] gap-0 rounded-3xl overflow-hidden"
            style={{ boxShadow: '0 20px 60px rgba(37,99,235,0.12)' }}>
            <div className="p-10" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)' }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 text-white
                rounded-full text-[10px] font-bold uppercase tracking-widest mb-5">
                <Code2 size={10} /> Custom Web Development
              </span>
              <h3 className="text-[clamp(20px,2.5vw,28px)] font-bold text-white leading-tight mb-4">
                Tailor-Made Websites Built for Your Business Needs
              </h3>
              <p className="text-[14px] text-blue-100 leading-[1.85] mb-3">
                Every business goal is unique, and so should be its website. Our custom website
                development company in Thanjavur builds fully customised website solutions tailored
                to your business requirements and audience needs.
              </p>
              <p className="text-[14px] text-blue-100 leading-[1.85] mb-7">
                We develop mobile-responsive, fast loading, scalable, secure, and performance-driven
                websites to support long-term growth and digital transformation.
              </p>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600
                  rounded-full text-sm font-bold hover:bg-blue-50 transition-all duration-300
                  shadow-lg hover:-translate-y-0.5">
                Get Custom Website <ArrowRight size={15} />
              </a>
            </div>
            <div className="bg-slate-50 p-10 flex flex-col justify-center">
              <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-6">
                What we deliver
              </p>
              <div className="space-y-4">
                {customFeatures.map((f, i) => (
                  <div key={f} className={`reveal delay-${i + 1} flex items-center gap-4`}>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)' }}>
                      <CheckCircle size={15} className="text-white" />
                    </div>
                    <span className="text-[13.5px] font-semibold text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
