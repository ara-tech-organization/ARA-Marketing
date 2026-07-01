import { Quote, Star, Users } from 'lucide-react'

const testimonials = [
  {
    quote: 'ARA Discover Marketing transformed our enterprise website into a high-performance, AI-driven platform. Their team is professional, innovative, and reliable. A trusted enterprise web development agency in Thanjavur.',
    name: 'Ramesh',
    role: 'CEO',
    initials: 'R',
    color: '#2563eb',
    stars: 5,
  },
  {
    quote: 'We partnered with ARA Discover Marketing for our enterprise website development company in Thanjavur projects. The result exceeded our expectations, with scalable design and seamless AI integration.',
    name: 'Priya',
    role: 'Head of Digital Strategy',
    initials: 'P',
    color: '#7c3aed',
    stars: 5,
  },
  {
    quote: 'For our enterprise website development in Thanjavur, ARA Discover Marketing provided a solution beyond expectations with scalability and intelligent AI features that transformed our business operations.',
    name: 'Praveen',
    role: 'Head of Digital Strategy',
    initials: 'Pr',
    color: '#0891b2',
    stars: 5,
  },
]

export default function EWTestimonials() {
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
      style={{ background: '#ffffff' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1.5px, transparent 1.5px)',
          backgroundSize: '34px 34px',
        }}
      />

      {/* Spinning rings — lg only */}
      <div
        className="hidden lg:block absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          border: '1.5px solid rgba(37,99,235,0.09)',
          animation: 'spin 55s linear infinite',
        }}
      />
      <div
        className="hidden lg:block absolute top-10 -left-10 w-[180px] h-[180px] rounded-full pointer-events-none"
        style={{
          border: '1px solid rgba(37,99,235,0.06)',
          animation: 'spin 35s linear infinite reverse',
        }}
      />
      <div
        className="hidden lg:block absolute -bottom-16 -right-16 w-[260px] h-[260px] rounded-full pointer-events-none"
        style={{
          border: '1.5px solid rgba(124,58,237,0.09)',
          animation: 'spin 40s linear infinite reverse',
        }}
      />
      <div
        className="hidden lg:block absolute bottom-10 -right-8 w-[150px] h-[150px] rounded-full pointer-events-none"
        style={{
          border: '1px solid rgba(124,58,237,0.06)',
          animation: 'spin 28s linear infinite',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16 reveal">
          <span
            className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-4 sm:mb-5 text-purple-600"
            style={{ background: '#f5f3ff', border: '1px solid #ddd6fe' }}
          >
            <Users size={9} /> Client Success Stories
          </span>

          <h2 className="text-[clamp(20px,3.6vw,44px)] font-bold text-slate-900 leading-[1.10] tracking-tight mb-3 sm:mb-4">
            Our Clients{' '}
            <span
              style={{
                background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Speak
            </span>
          </h2>

          <p className="text-[12.5px] sm:text-[14px] lg:text-[15px] text-slate-500 leading-[1.85] max-w-xl mx-auto px-2 sm:px-0">
            Enterprises across Thanjavur trust us with their most critical digital projects. Here's what they say.
          </p>
        </div>

        {/* Cards: 1col xs → 2col md → 3col lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 reveal">
          {testimonials.map(({ quote, name, role, initials, color, stars }, i) => (
            <div
              key={name + i}
              className="group relative bg-white rounded-3xl p-5 sm:p-6 lg:p-7 transition-all duration-300 cursor-default flex flex-col overflow-hidden"
              style={{
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 18px 44px ${color}1a, 0 4px 20px rgba(0,0,0,0.06)`
                e.currentTarget.style.borderColor = `${color}44`
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'
                e.currentTarget.style.borderColor = '#e2e8f0'
                e.currentTarget.style.transform = 'none'
              }}
            >
              {/* Stars + large quote icon */}
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <div className="flex gap-0.5 sm:gap-1">
                  {Array.from({ length: stars }).map((_, j) => (
                    <Star key={j} size={12} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                  ))}
                </div>
                <Quote
                  size={32}
                  style={{ color: `${color}28`, flexShrink: 0 }}
                />
              </div>

              {/* Quote text */}
              <p className="text-[12px] sm:text-[13px] lg:text-[13.5px] text-slate-600 leading-[1.82] mb-5 sm:mb-6 italic flex-1">
                "{quote}"
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-4 sm:pt-5"
                style={{ borderTop: `1px solid ${color}1a` }}
              >
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-[13px]"
                  style={{ background: `${color}18`, color }}
                >
                  {initials}
                </div>
                <div>
                  <p className="text-[12.5px] sm:text-[13px] font-bold text-slate-800">{name}</p>
                  <p className="text-[10.5px] sm:text-[11px] text-slate-400 font-medium">{role}</p>
                </div>
              </div>

              {/* Bottom color line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(90deg, ${color}, ${color}66)` }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
