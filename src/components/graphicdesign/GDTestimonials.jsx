import { Quote, Star, Layers } from 'lucide-react'

const testimonials = [
  {
    text: 'Ara Discover Marketing delivered the best graphic design service in Thanjavur for our brand identity. Highly creative and professional team.',
    name: 'Rajan Murugan',
    role: 'Founder, RetailHub Thanjavur',
    stars: 5,
  },
  {
    text: 'One of the top graphic design agencies in Thanjavur with excellent logo and brochure design services. Our brand looks completely transformed.',
    name: 'Priya Suresh',
    role: 'Director, EduFirst Academy',
    stars: 5,
  },
  {
    text: 'Their branding solutions helped us improve our business visibility and customer engagement. The flyer designs brought in so many new clients!',
    name: 'Karthik Arumugam',
    role: 'Owner, Karthik Restaurants',
    stars: 5,
  },
  {
    text: 'Outstanding logo design! As a startup we needed a strong brand identity and Ara Discover Marketing delivered exactly that. Highly recommended.',
    name: 'Deepa Nathaniel',
    role: 'CEO, TechNest Solutions',
    stars: 5,
  },
  {
    text: 'The social media creatives they designed boosted our online engagement by 300%. Truly the best graphic design company in Thanjavur.',
    name: 'Senthil Kumar',
    role: 'Marketing Head, FreshGrocer',
    stars: 5,
  },
  {
    text: 'Professional, affordable and fast. Their brochure and visiting card designs are of excellent quality. Will definitely work with them again.',
    name: 'Lakshmi Devi',
    role: 'Principal, Sunrise School',
    stars: 5,
  },
]

export default function GDTestimonials() {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      {/* Subtle bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(219,234,254,0.5) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1200px] mx-auto px-7">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> Client Testimonials
          </span>
          <h2 className="text-[clamp(22px,2.8vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            What Clients Say About{' '}
            <span className="text-gradient-blue">Our Branding Services</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-xl mx-auto">
            Real feedback from businesses that trusted us as their creative branding partner
            in Thanjavur.
          </p>
        </div>

        {/* Testimonials masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(({ text, name, role, stars }, i) => (
            <div
              key={name}
              className={`reveal delay-${(i % 4) + 1} relative bg-white rounded-2xl p-7 border border-blue-50
                hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300`}
              style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.07)' }}
            >
              {/* Large decorative quote */}
              <Quote
                size={40}
                className="absolute top-5 right-5 text-blue-100"
                fill="currentColor"
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: stars }).map((_, si) => (
                  <Star key={si} size={13} className="text-amber-400" fill="#fbbf24" />
                ))}
              </div>

              <p className="text-[14px] text-slate-600 leading-[1.8] mb-5 italic relative z-10">
                &ldquo;{text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[14px] font-bold flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #38bdf8)' }}
                >
                  {name[0]}
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
