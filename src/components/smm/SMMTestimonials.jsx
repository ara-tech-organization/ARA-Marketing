import { Star, Quote, Layers } from 'lucide-react'

const testimonials = [
  {
    text: 'Ara Discover Marketing helped us improve engagement and generate quality leads through targeted social media campaigns. Their strategies are creative and result-driven.',
    name: 'Business Owner',
    role: 'Local Retail Brand, Thanjavur',
    stars: 5,
  },
  {
    text: 'One of the best social media companies in Thanjavur — known for creative, result-oriented strategies and outstanding client support throughout the campaign.',
    name: 'Marketing Manager',
    role: 'E-Commerce Brand, Tamil Nadu',
    stars: 5,
  },
  {
    text: 'Their expertise in social media ads, marketing, and advertising in Thanjavur significantly improved our online brand visibility and follower growth across platforms.',
    name: 'Startup Founder',
    role: 'Tech Startup, Thanjavur',
    stars: 5,
  },
]

export default function SMMTestimonials() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 55%, #e0f2fe 100%)' }}
    >
      {/* Large decorative rings */}
      <div
        className="absolute -top-20 -left-20 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ border: '2px solid rgba(147,197,253,0.35)' }}
      />
      <div
        className="absolute -top-10 -left-10 w-[220px] h-[220px] rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(147,197,253,0.25)' }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[340px] h-[340px] rounded-full pointer-events-none"
        style={{ border: '2px solid rgba(96,165,250,0.3)' }}
      />
      <div
        className="absolute -bottom-10 -right-10 w-[230px] h-[230px] rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(96,165,250,0.2)' }}
      />

      {/* Cross / plus dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(147,197,253,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,0.18) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Soft centre glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, transparent 70%)' }}
      />


      <div className="relative max-w-[1200px] mx-auto px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 text-blue-600
            border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Layers size={11} /> Client Reviews
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            What Clients Say About Our{' '}
            <span className="text-gradient-blue">Social Media Marketing</span> Services
          </h2>
          <p className="text-[15px] text-slate-500 max-w-xl mx-auto">
            Real results, real growth. Hear from businesses we have helped build stronger social media presence in Thanjavur.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ text, name, role, stars }, i) => (
            <div
              key={name}
              className={`reveal delay-${i + 1} relative bg-white/70 border border-blue-100
                rounded-3xl p-7 flex flex-col gap-5 backdrop-blur-sm
                hover:bg-white/90 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1.5
                transition-all duration-300`}
            >
              {/* Quote icon */}
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Quote size={18} className="text-blue-400" />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: stars }).map((_, j) => (
                  <Star key={j} size={14} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[14px] text-slate-600 leading-[1.85] flex-1 italic">
                &ldquo;{text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-blue-100">
                <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center
                  text-blue-600 text-[13px] font-bold flex-shrink-0">
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-800">{name}</p>
                  <p className="text-[11px] text-slate-400">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
