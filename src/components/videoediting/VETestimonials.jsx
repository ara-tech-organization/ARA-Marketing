import { Star, Quote, MessageSquare } from 'lucide-react'

const testimonials = [
  { text: 'ARA Discover Marketing provided professional corporate video editing services in Thanjavur with excellent creativity and fast delivery. Their team truly understands brand storytelling.', name: 'Ramesh Kumar',   role: 'CEO, Thanjavur Textile Exports',  rating: 5, color: '#2563eb', avatar: 'R' },
  { text: 'One of the most popular videography and editing services in Thanjavur for professional branding videos. The quality and attention to detail exceeded our expectations completely.',        name: 'Priya Sundaram', role: 'Marketing Head, Delta Agro Products', rating: 5, color: '#2563eb', avatar: 'P' },
  { text: 'ARA helped us improve engagement on social media significantly. Their Instagram Reels and YouTube editing made our content go viral. Highly recommend for any business.',                 name: 'Karthik Rajan',  role: 'Founder, TechBridge Solutions',       rating: 5, color: '#0ea5e9', avatar: 'K' },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function VETestimonials() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-16 overflow-hidden bg-white">

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />
      <div className="hidden sm:block absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-blue-100/45 pointer-events-none" />
      <div className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 w-[260px] h-[260px] rounded-full border border-violet-100/35 pointer-events-none animate-[spin_30s_linear_infinite]" />
      <div className="hidden sm:block absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full border border-blue-100/40 pointer-events-none" />
      <div className="hidden sm:block absolute -bottom-8 -right-8 w-[180px] h-[180px] rounded-full border border-blue-200/28 pointer-events-none animate-[spin_22s_linear_infinite_reverse]" />
      <div className="absolute top-0 left-0 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.14) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-4 sm:mb-5">
            <MessageSquare size={10} /> Client Testimonials
          </span>
          <h2 className="text-[clamp(21px,3.6vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-3 sm:mb-4">
            What Clients Say About Our{' '}
            <span style={gradBlue}>Video Editing Services</span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 max-w-xl mx-auto px-2 sm:px-0">
            Trusted by businesses across Thanjavur for creative, cinematic, and high-converting video editing solutions.
          </p>
        </div>

        {/* ── Testimonials ── */}
        <div className="reveal flex flex-col sm:flex-row gap-4 sm:gap-5">
          {testimonials.map(({ text, name, role, rating, color, avatar }, idx) => (
            <div
              key={name}
              className={`group relative flex flex-col gap-4 sm:gap-5 p-5 sm:p-7 rounded-2xl sm:rounded-3xl flex-1 min-w-0
                transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl delay-${idx + 1}`}
              style={{ background: 'white', border: '1.5px solid #f0f4ff', boxShadow: '0 4px 20px rgba(37,99,235,0.05)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color + '28'
                e.currentTarget.style.boxShadow = `0 24px 60px ${color}12`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#f0f4ff'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.05)'
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl sm:rounded-t-3xl"
                style={{ background: `linear-gradient(90deg,${color},${color}44)` }} />
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${color}06 0%, transparent 60%)` }} />
              <div className="hidden sm:block absolute bottom-4 right-4 w-20 h-20 rounded-full border border-slate-100/70 pointer-events-none" />
              <div className="hidden sm:block absolute bottom-7 right-7 w-10 h-10 rounded-full border border-slate-100/50 pointer-events-none" />

              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg,${color}16,${color}06)`, border: `1.5px solid ${color}22` }}>
                <Quote size={15} style={{ color }} />
              </div>

              <div className="flex items-center gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} size={12} style={{ color: '#facc15', fill: '#facc15' }} />
                ))}
              </div>

              <p className="relative text-[12.5px] sm:text-[13.5px] text-slate-600 leading-[1.88] flex-1">"{text}"</p>

              <div className="relative flex items-center gap-3 pt-3 sm:pt-4"
                style={{ borderTop: '1px solid #f0f4ff' }}>
                <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-[15px]"
                  style={{ background: '#dbeafe', color: '#2563eb' }}>
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="text-[12px] sm:text-[13px] font-bold text-slate-900">{name}</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
