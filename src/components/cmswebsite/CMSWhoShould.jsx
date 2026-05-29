import { Store, ShoppingCart, PenLine, Building2, GraduationCap, CheckCircle2, Target } from 'lucide-react'

const audiences = [
  { icon: Store,         title: 'Small & Medium Businesses',  desc: 'Get a professional online presence that grows with your business — flexible, affordable, and easy to manage.',       color: '#2563eb' },
  { icon: ShoppingCart,  title: 'E-Commerce Stores',          desc: 'Launch or scale your online store with WooCommerce — product listings, inventory, cart, and checkout handled seamlessly.', color: '#1d4ed8' },
  { icon: PenLine,       title: 'Bloggers & Content Creators', desc: 'WordPress was built for content — powerful publishing tools, SEO plugins, and audience-building features built in.',    color: '#2563eb' },
  { icon: Building2,     title: 'Corporate Companies',        desc: 'Enterprise-grade WordPress setups with multi-user roles, CRM integration, and custom workflows for large teams.',        color: '#3b82f6' },
  { icon: GraduationCap, title: 'Educational Institutions',   desc: 'LMS-powered WordPress platforms for e-learning, course delivery, and student management at any scale.',               color: '#1d4ed8' },
]

const commitments = [
  'Custom WordPress solutions for your business needs',
  'SEO-ready website structure from day one',
  'On-time delivery with transparent milestones',
  'Secure and scalable architecture built to last',
  'Dedicated post-launch support and maintenance',
]

export default function CMSWhoShould() {
  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden bg-white"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 65%)' }} />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[160px] sm:text-[220px] font-black text-slate-50 leading-none tracking-tighter">WP</span>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-20">

          {/* Left: Who Should */}
          <div className="flex-1 reveal">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(37,99,235,0.08)', color: '#1d4ed8', border: '1px solid rgba(37,99,235,0.2)' }}
            >
              <Target size={11} /> Who Should Invest
            </span>

            <h2 className="text-[clamp(24px,3vw,42px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
              Is WordPress Right{' '}
              <span style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                For You?
              </span>
            </h2>
            <p className="text-[15px] text-slate-500 leading-[1.85] mb-3 max-w-lg">
              WordPress is ideal for businesses that want flexibility, control, and scalability. If you are looking for <strong className="text-slate-600 font-semibold">cms website development services in Thanjavur</strong>, WordPress is perfect for:
            </p>

            {/* Audience cards — stacked with left number accent */}
            <div className="flex flex-col gap-3">
              {audiences.map(({ icon: Icon, title, desc, color }, i) => (
                <div
                  key={title}
                  className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:shadow-sm"
                  style={{ border: '1px solid #f1f5f9', background: '#fafafa' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}30`; e.currentTarget.style.background = `${color}05` }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9'; e.currentTarget.style.background = '#fafafa' }}
                >
                  {/* Icon + content */}
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${color}10`, border: `1px solid ${color}20` }}>
                      <Icon size={15} style={{ color }} />
                    </div>
                    <div>
                      <h3 className="text-[13.5px] font-bold text-slate-800 mb-0.5">{title}</h3>
                      <p className="text-[12px] text-slate-500 leading-[1.7]">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing keyword sentences */}
            <p className="text-[13px] text-slate-400 leading-[1.85] mt-5 max-w-lg">
              Our <strong className="text-slate-500 font-semibold">custom cms wordpress development services in Thanjavur</strong> make sure your website is customised as per your business needs. We are also one of the <strong className="text-slate-500 font-semibold">best WordPress development companies in Thanjavur</strong>, providing end-to-end WordPress solutions.
            </p>
          </div>

          {/* Right: Our Commitments */}
          <div className="md:w-[320px] lg:w-[400px] flex-shrink-0 reveal">
            <div className="sticky top-24">

              {/* Image */}
              <div className="rounded-3xl overflow-hidden relative mb-7"
                style={{ height: 260, boxShadow: '0 20px 60px rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.1)' }}>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=360&fit=crop&auto=format&q=80"
                  alt="WordPress CMS Solutions in Thanjavur"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(29,78,216,0.3) 0%, rgba(3,8,20,0.4) 100%)' }} />
                <div className="absolute bottom-5 left-5 right-5 px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)' }}>
                  <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: '#1d4ed8' }}>
                    Our Commitment
                  </p>
                  <p className="text-[12px] font-bold text-slate-800 leading-snug">
                    Transparency, quality, and long-term partnerships — always.
                  </p>
                </div>
              </div>

              {/* Commitments list */}
              <div className="rounded-2xl p-6"
                style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', border: '1px solid rgba(37,99,235,0.15)' }}>
                <h3 className="text-[15px] font-bold text-slate-800 mb-5">Our Commitments</h3>
                <div className="flex flex-col gap-3.5">
                  {commitments.map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#2563eb' }} />
                      <span className="text-[13px] text-slate-600 leading-[1.65]">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

