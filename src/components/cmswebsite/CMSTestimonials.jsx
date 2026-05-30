import { Quote, Star, MessageSquare } from 'lucide-react'

const testimonials = [
  {
    name: 'Mohammed Ibrahim',
    role: 'Business Owner',
    quote: 'We experienced flawless online business growth through their high-quality WordPress development services. Our site loads fast, ranks well, and is incredibly easy to manage.',
    rating: 5,
    initials: 'MI',
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
    color: '#2563eb',
    industry: 'Retail Business',
  },
  {
    name: 'Kevin Peter',
    role: 'Startup Founder',
    quote: 'Highly professional team. Our website is now fast, SEO-friendly, and easy to manage. The CMS dashboard they set up is so intuitive — even our non-technical team uses it with confidence.',
    rating: 5,
    initials: 'KP',
    image: 'https://randomuser.me/api/portraits/men/29.jpg',
    color: '#2563eb',
    industry: 'Tech Startup',
    featured: true,
  },
  {
    name: 'Manoj',
    role: 'Startup Founder',
    quote: 'We are very satisfied with their work. Our website is now optimised for speed, SEO, and easy updates. The WordPress training they provided was an added bonus — truly comprehensive service.',
    rating: 5,
    initials: 'MJ',
    image: 'https://randomuser.me/api/portraits/men/35.jpg',
    color: '#1d4ed8',
    industry: 'Digital Services',
  },
]

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
      ))}
    </div>
  )
}

export default function CMSTestimonials() {
  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #eff6ff 0%, #dbeafe 55%, #e0f2fe 100%)' }}
    >
      {/* Subtle orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.05) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(29,78,216,0.04) 0%, transparent 65%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.12) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.08)', color: '#1d4ed8', border: '1px solid rgba(37,99,235,0.2)' }}
          >
            <MessageSquare size={11} /> Client Testimonials
          </span>
          <h2 className="text-[clamp(24px,3vw,44px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Hear From{' '}
            <span style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Our Clients
            </span>
          </h2>
          <p className="text-[15px] max-w-xl mx-auto" style={{ color: '#64748b' }}>
            Real results from real businesses. See what our WordPress clients say about working with us.
          </p>
        </div>

        {/* Testimonials — 3 cards, middle one elevated */}
        <div className="reveal flex flex-col md:flex-row gap-5 items-stretch md:items-start">
          {testimonials.map(({ name, role, quote, rating, initials, image, color, industry, featured }) => (
            <div
              key={name}
              className="flex-1 flex flex-col rounded-3xl p-6 transition-all duration-400"
              style={{
                background: featured ? `${color}06` : '#fafafa',
                border: featured ? `1px solid ${color}30` : '1px solid #e2e8f0',
                boxShadow: featured ? `0 20px 48px rgba(37,99,235,0.12), 0 0 0 1px ${color}15` : '0 4px 20px rgba(0,0,0,0.06)',
                transform: featured ? 'translateY(-8px)' : 'none',
              }}
            >
              {/* Top: quote icon + rating */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                  <Quote size={16} style={{ color }} />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <StarRow count={rating} />
                  {featured && (
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                      style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}>
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Quote text */}
              <p className="flex-1 text-[13.5px] leading-[1.85] mb-6 italic" style={{ color: '#475569' }}>
                "{quote}"
              </p>

              {/* Divider */}
              <div className="h-px mb-5" style={{ background: `linear-gradient(90deg, ${color}30, transparent)` }} />

              {/* Author */}
              <div className="flex items-center gap-3">
                <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                <div>
                  <p className="text-[13.5px] font-bold text-slate-800 leading-tight">{name}</p>
                  <p className="text-[11px] font-medium text-slate-400">{role} · {industry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-6 pt-8"
          style={{ borderTop: '1px solid #f1f5f9' }}>
          {[
            { val: '5★', lbl: 'Average Rating', color: '#f59e0b' },
            { val: '99%', lbl: 'Client Satisfaction', color: '#2563eb' },
            { val: '200+', lbl: 'Happy Clients', color: '#2563eb' },
          ].map(({ val, lbl, color }) => (
            <div key={lbl} className="text-center px-6">
              <p className="text-[26px] font-black leading-tight" style={{ color }}>{val}</p>
              <p className="text-[11px] font-medium mt-0.5 text-slate-400">{lbl}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

