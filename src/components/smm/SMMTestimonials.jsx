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
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
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
              className={`reveal delay-${i + 1} svc-card-top relative bg-white border border-slate-100
                rounded-3xl p-7 flex flex-col gap-5 testi-hover`}
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
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
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
