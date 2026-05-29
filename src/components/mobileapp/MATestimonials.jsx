import { Star, Quote, Users } from 'lucide-react'

const testimonials = [
  {
    name: 'Anil Choudry',
    role: 'CEO',
    rating: 5,
    text: 'Ara Discover Marketing is one of the best app development agencies in Thanjavur. Their AI-powered mobile apps have completely transformed our business operations. The team is professional, responsive, and truly understands what businesses need.',
    featured: true,
    initials: 'AC',
    color: '#7c3aed',
  },
  {
    name: 'Vijay Kumar',
    role: 'Founder',
    rating: 5,
    text: 'The team delivered a robust Android and iOS app on time. A trusted mobile application development agency in Thanjavur with deep technical expertise.',
    featured: false,
    initials: 'VK',
    color: '#2563eb',
  },
  {
    name: 'Priya',
    role: 'Founder',
    rating: 5,
    text: 'Their expertise resulted in a robust Android app, making them a trusted choice for mobile application development in Thanjavur. Highly recommend!',
    featured: false,
    initials: 'PR',
    color: '#0891b2',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={13} fill="#f59e0b" style={{ color: '#f59e0b' }} />
      ))}
    </div>
  )
}

export default function MATestimonials() {
  const featured = testimonials.find(t => t.featured)
  const rest = testimonials.filter(t => !t.featured)

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.04) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.03) 0%,transparent 65%)' }} />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(124,58,237,0.08)', color: '#7c3aed', border: '1px solid rgba(124,58,237,0.2)' }}>
            <Users size={11} /> Client Feedback &amp; Experiences
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            What Our Clients{' '}
            <span style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Say About Us
            </span>
          </h2>
          <p className="text-[15px] text-slate-500 max-w-xl mx-auto">
            Trusted by businesses across Thanjavur and beyond for premium mobile app development.
          </p>
        </div>

        {/* Featured + stacked layout — unique, not standard grid */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Featured testimonial — larger card */}
          <div className="reveal-left lg:flex-[2]">
            <div className="p-8 sm:p-10 rounded-3xl relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg,#4c1d95 0%,#2563eb 100%)', boxShadow: '0 32px 64px rgba(124,58,237,0.25)' }}>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.6) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

              <div className="relative">
                <Quote size={48} className="text-purple-300/40 mb-6" />
                <Stars count={featured.rating} />
                <p className="text-[16px] sm:text-[18px] text-white leading-[1.85] font-medium my-6">
                  "{featured.text}"
                </p>
                <div className="flex items-center gap-4 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-[15px] text-white"
                    style={{ background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.4)' }}>
                    {featured.initials}
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-white">{featured.name}</p>
                    <p className="text-[12px] text-purple-200">{featured.role}</p>
                  </div>
                  <div className="ml-auto px-3 py-1 rounded-full text-[10px] font-bold"
                    style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>
                    Verified Client
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two stacked testimonials */}
          <div className="lg:flex-1 flex flex-col gap-6">
            {rest.map(t => (
              <div key={t.name}
                className="reveal-right flex-1 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: '#f8fafc', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.border = `1px solid ${t.color}30`
                  e.currentTarget.style.boxShadow = `0 12px 32px ${t.color}12`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.border = '1px solid #e2e8f0'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Stars count={t.rating} />
                  <Quote size={20} style={{ color: `${t.color}40` }} />
                </div>
                <p className="text-[13.5px] text-slate-600 leading-[1.85] mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: `1px solid ${t.color}15` }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-[13px] text-white"
                    style={{ background: `linear-gradient(135deg,${t.color},${t.color}bb)` }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-slate-800">{t.name}</p>
                    <p className="text-[11px] text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
