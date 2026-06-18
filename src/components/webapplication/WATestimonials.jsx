import { Quote, Star, MessageSquare } from 'lucide-react'

const testimonials = [
  {
    name: 'Veeramani',
    role: 'CEO',
    company: 'Tech Startup, Thanjavur',
    quote: 'ARA Discover Marketing is a top web app development agency in Thanjavur. They delivered a robust and AI-powered solution for our business that completely transformed how we operate.',
    avatar: 'V',
    metric: 'AI-Powered App',
    featured: false,
    color: '#2563eb',
  },
  {
    name: 'Karthika',
    role: 'Founder',
    company: 'E-Commerce Brand',
    quote: "The ARA team is a professional web and mobile app development company in Thanjavur. They delivered flawless integration of our website and mobile apps — incredible results that exceeded expectations.",
    avatar: 'K',
    metric: 'Web + Mobile',
    featured: true,
    color: '#0891b2',
  },
  {
    name: 'Bharani',
    role: 'Founder',
    company: 'Digital Ventures',
    quote: 'We chose ARA Discover Marketing as our web app development company in Thanjavur and received a fast-loaded AI-powered solution perfectly customised to our business needs.',
    avatar: 'B',
    metric: 'Custom Solution',
    featured: false,
    color: '#1d4ed8',
  },
]

function Stars({ featured }) {
  return (
    <div className="flex gap-0.5 sm:gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          fill={featured ? '#fde68a' : '#f59e0b'}
          style={{ color: featured ? '#fde68a' : '#f59e0b' }}
        />
      ))}
    </div>
  )
}

export default function WATestimonials() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, white 0%, #f0f7ff 100%)' }}
    >
      {/* Decorative large background quote */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none"
        style={{ color: 'rgba(37,99,235,0.04)', fontSize: '240px', lineHeight: 1, fontFamily: 'Georgia, serif' }}
      >
        "
      </div>

      <div className="relative max-w-[1200px] mx-auto px-3 xs:px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span
            className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 rounded-full text-[10px] xs:text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(37,99,235,0.07)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.18)' }}
          >
            <MessageSquare size={10} /> Client Reviews & Ratings
          </span>
          <h2 className="text-[clamp(21px,2.7vw,39px)] font-bold text-slate-900 tracking-tight mb-3">
            What Our{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Clients Say
            </span>
          </h2>
          <p className="text-[13px] xs:text-[14px] text-slate-500 max-w-lg mx-auto px-2">
            Real results from businesses that partnered with us to build powerful web applications in Thanjavur.
          </p>
        </div>

        {/* Three testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {testimonials.map(({ name, role, company, quote, avatar, metric, featured, color }, i) => (
            <div
              key={name}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 reveal delay-${i + 1} flex flex-col`}
              style={{
                background: featured ? `linear-gradient(145deg,#1e3a8a,#2563eb 50%,#0369a1)` : 'white',
                border: featured ? 'none' : '1.5px solid #e2e8f0',
                boxShadow: featured
                  ? '0 24px 60px rgba(37,99,235,0.35), 0 0 0 1px rgba(37,99,235,0.2)'
                  : '0 6px 24px rgba(37,99,235,0.06)',
              }}
            >
              {/* Top accent line for non-featured */}
              {!featured && (
                <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg,${color},${color}55)` }} />
              )}

              {/* Dot grid for featured */}
              {featured && (
                <div
                  className="absolute inset-0 pointer-events-none opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />
              )}

              <div className="relative p-5 xs:p-6 sm:p-7 flex flex-col flex-1">
                {/* Top row: stars + quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <Stars featured={featured} />
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: featured ? 'rgba(255,255,255,0.15)' : `${color}10`,
                      border: featured ? '1px solid rgba(255,255,255,0.2)' : `1px solid ${color}20`,
                    }}
                  >
                    <Quote size={13} style={{ color: featured ? 'rgba(255,255,255,0.8)' : color }} />
                  </div>
                </div>

                {/* Quote */}
                <blockquote
                  className="text-[13px] xs:text-[13.5px] leading-[1.8] mb-5 italic flex-1"
                  style={{ color: featured ? 'rgba(255,255,255,0.88)' : '#475569' }}
                >
                  &ldquo;{quote}&rdquo;
                </blockquote>

                {/* Footer */}
                <div
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: featured ? '1px solid rgba(255,255,255,0.15)' : '1px solid #e2e8f0' }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-[15px]"
                      style={{ background: '#dbeafe', color: '#2563eb' }}>
                      {name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[12px] xs:text-[13px] font-bold leading-tight"
                        style={{ color: featured ? 'white' : '#1e293b' }}>
                        {name}
                      </p>
                      <p className="text-[10px] xs:text-[10.5px]"
                        style={{ color: featured ? 'rgba(255,255,255,0.6)' : '#94a3b8' }}>
                        {role} &mdash; {company}
                      </p>
                    </div>
                  </div>
                  <span
                    className="flex-shrink-0 px-2.5 py-1 rounded-lg text-[9px] xs:text-[10px] font-bold"
                    style={{
                      background: featured ? 'rgba(255,255,255,0.15)' : `${color}10`,
                      color: featured ? 'white' : color,
                      border: featured ? '1px solid rgba(255,255,255,0.2)' : 'none',
                    }}
                  >
                    {metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div
          className="mt-10 sm:mt-14 reveal flex flex-col xs:flex-row rounded-2xl overflow-hidden"
          style={{ border: '1.5px solid #e2e8f0' }}
        >
          {[
            { val: '200+', lbl: 'Apps Delivered',    color: '#2563eb' },
            { val: '98%',  lbl: 'Client Satisfaction', color: '#0891b2' },
            { val: '5★',   lbl: 'Average Rating',    color: '#1d4ed8' },
          ].map(({ val, lbl, color }, i) => (
            <div
              key={lbl}
              className="flex-1 flex items-center gap-3 xs:gap-3.5 px-5 xs:px-6 py-4 xs:py-5"
              style={{
                background: 'white',
                borderRight: i < 2 ? '1px solid #e2e8f0' : 'none',
                borderBottom: i < 2 ? '1px solid #e2e8f0' : 'none',
              }}
            >
              <div
                className="w-9 xs:w-10 h-9 xs:h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}0d`, border: `1px solid ${color}18` }}
              >
                <Star size={16} style={{ color }} fill={color} />
              </div>
              <div>
                <p
                  className="text-[20px] xs:text-[22px] font-black leading-tight"
                  style={{ background: `linear-gradient(135deg,${color},${color}88)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  {val}
                </p>
                <p className="text-[10.5px] xs:text-[11px] text-slate-500 font-medium">{lbl}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
