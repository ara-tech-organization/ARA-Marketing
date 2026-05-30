import { Star, Quote, Users } from 'lucide-react'

const testimonials = [
  {
    quote: 'Their e-commerce development service helped us scale our online sales significantly. Within three months of launch, our monthly orders tripled and our store runs flawlessly around the clock.',
    name: 'Rishi',
    role: 'Entrepreneur, Fashion Brand',
    rating: 5,
    color: '#2563eb',
    initial: 'R',
    initBg: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    image: 'https://randomuser.me/api/portraits/men/17.jpg',
  },
  {
    quote: 'Our online store is fast, secure, and incredibly easy to manage thanks to their expert team. The Shopify setup they delivered is exactly what we needed to grow our electronics business online.',
    name: 'Gautham Nair',
    role: 'Startup Founder, Tech Store',
    rating: 5,
    color: '#0891b2',
    initial: 'G',
    initBg: 'linear-gradient(135deg, #0891b2, #0e7490)',
    image: 'https://randomuser.me/api/portraits/men/48.jpg',
  },
  {
    quote: 'With their expert support, our online store runs smoothly, securely, and is incredibly easy to manage. The payment integration and inventory system they built saved us hours of work every week.',
    name: 'Ashok Chopra',
    role: 'Business Owner, Home Decor',
    rating: 5,
    color: '#0891b2',
    initial: 'A',
    initBg: 'linear-gradient(135deg, #0891b2, #0e7490)',
    image: 'https://randomuser.me/api/portraits/men/59.jpg',
  },
]

export default function ECTestimonials() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white">

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.04) 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-16 -left-16 w-[340px] h-[340px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 65%)' }} />
      <div className="hidden sm:block absolute top-10 left-10 w-[160px] h-[160px] rounded-full border pointer-events-none animate-[spin_38s_linear_infinite]"
        style={{ borderColor: 'rgba(37,99,235,0.12)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 text-blue-600 bg-blue-50"
            style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
            <Users size={10} /> Client Success Stories
          </span>
          <h2 className="text-[clamp(22px,4vw,46px)] font-bold leading-[1.1] tracking-tight mb-4 text-slate-900">
            Success Stories From{' '}
            <span style={{ color: '#2563eb' }}>
              Our Clients
            </span>
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[1.85] max-w-xl mx-auto text-slate-500">
            Our best e-commerce web design &amp; development services in Thanjavur have helped multiple businesses grow their online presence and revenue.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map(({ quote, name, role, rating, color, initial, initBg, image }, i) => (
            <div key={name}
              className={`group p-6 sm:p-7 rounded-2xl sm:rounded-3xl flex flex-col gap-5 transition-all duration-400 hover:-translate-y-2 delay-${i + 1}`}
              style={{ background: '#f8fbff', border: `1.5px solid #e2e8f0`, boxShadow: '0 4px 20px rgba(37,99,235,0.07)' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = color + '08'
                e.currentTarget.style.borderColor = color + '35'
                e.currentTarget.style.boxShadow = `0 20px 60px ${color}18`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#f8fbff'
                e.currentTarget.style.borderColor = '#e2e8f0'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.07)'
              }}>

              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: color + '22', border: `1px solid ${color}35` }}>
                <Quote size={16} style={{ color }} />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: rating }).map((_, j) => (
                  <Star key={j} size={13} fill={color} style={{ color }} />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-[13.5px] leading-[1.90] flex-1 text-slate-600">
                &ldquo;{quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4"
                style={{ borderTop: `1px solid ${color}20` }}>
                <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                <div>
                  <p className="text-[13px] font-bold text-slate-900">{name}</p>
                  <p className="text-[11px] mt-0.5 text-slate-400">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 px-7 py-5 rounded-2xl"
          style={{ background: '#f0f7ff', border: '1.5px solid #dbeafe' }}>
          {[
            { val: '50+', lbl: 'E-Commerce Stores Built', color: '#2563eb' },
            { val: '5.0', lbl: 'Average Client Rating',   color: '#f59e0b' },
            { val: '98%', lbl: 'Client Retention Rate',   color: '#059669' },
          ].map(({ val, lbl, color }) => (
            <div key={lbl} className="flex flex-col items-center gap-1">
              <span className="text-[28px] font-black leading-tight" style={{ color }}>{val}</span>
              <span className="text-[11px] font-medium text-slate-400">{lbl}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
