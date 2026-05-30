import { Star, Quote, Layers } from 'lucide-react'

const testimonials = [
  {
    text: 'Ara Discover Marketing built our website with excellent design and performance. Truly the best website design and development company in Thanjavur.',
    name: 'Business Owner',
    role: 'Corporate Business, Thanjavur',
    image: 'https://randomuser.me/api/portraits/men/16.jpg',
    stars: 5,
  },
  {
    text: 'One of the most reliable best website design and development firms in Thanjavur with great technical expertise.',
    name: 'Marketing Manager',
    role: 'E-Commerce Brand, Tamil Nadu',
    image: 'https://randomuser.me/api/portraits/women/38.jpg',
    stars: 5,
  },
  {
    text: 'They delivered a fast, responsive, and SEO-friendly website that improved our business visibility.',
    name: 'Startup Founder',
    role: 'Tech Startup, Thanjavur',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
    stars: 5,
  },
]

export default function WebDevTestimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> Client Reviews
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            What Clients Say About Our{' '}
            <span className="text-gradient-blue">Web Development Services</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map(({ text, name, role, image, stars }, i) => (
            <div key={name}
              className={`reveal delay-${i + 1} relative bg-white border border-slate-100
                rounded-3xl p-7 flex flex-col gap-5 transition-all duration-300
                hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1.5`}>
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Quote size={18} className="text-blue-400" />
              </div>
              <div className="flex gap-1">
                {Array.from({ length: stars }).map((_, j) => (
                  <Star key={j} size={14} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>
              <p className="text-[14px] text-slate-600 leading-[1.85] flex-1 italic">
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img src={image} alt={name} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
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
