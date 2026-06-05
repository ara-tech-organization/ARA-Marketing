import { Star, Quote, CheckCheck } from 'lucide-react'
import useTilt from '../../hooks/useTilt'

const testimonials = [
  {
    text: 'ARA Discover Marketing improved our website rankings and generated quality leads consistently.',
    name: 'Arjun Kumar',
    role: 'Business Owner',
    initials: 'AK',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    stars: 5,
  },
  {
    text: 'Their branding and advertising strategies helped our business grow faster online.',
    name: 'Pooja Menon',
    role: 'Marketing Director',
    initials: 'PM',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    stars: 5,
  },
  {
    text: 'One of the best digital marketing companies in Thanjavur with professional support and transparent reporting.',
    name: 'Suresh Babu',
    role: 'eCommerce Entrepreneur',
    initials: 'SB',
    image: 'https://randomuser.me/api/portraits/men/51.jpg',
    stars: 5,
  },
]

function TestiCard({ t, featured }) {
  const tiltRef = useTilt(featured ? 4 : 6)
  return (
    <div
      ref={tiltRef}
      className={`rounded-2xl p-8 flex flex-col cursor-default transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        ${featured
          ? 'border hover:shadow-blue-900/40'
          : 'bg-white border border-blue-100 hover:border-blue-300 hover:shadow-blue-100/80'
        }`}
        style={featured ? { background: '#0d2244', borderColor: 'rgba(37,99,235,0.3)' } : {}}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.stars }).map((_, j) => (
          <Star key={j} size={featured ? 15 : 13} fill="#f59e0b" color="#f59e0b" />
        ))}
      </div>

      {/* Quote icon */}
      <Quote size={featured ? 32 : 24}
        className={`mb-3 ${featured ? 'text-white/30' : 'text-blue-200'}`} />

      {/* Text */}
      <p className={`italic leading-[1.85] flex-1 mb-6
        ${featured ? 'text-[16px] text-white/90' : 'text-[14px] text-slate-600'}`}>
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <img src={t.image} alt={t.name} className={`${featured ? 'w-14 h-14' : 'w-10 h-10'} rounded-full object-cover flex-shrink-0`} />
        <div>
          <div className={`font-bold ${featured ? 'text-[15px] text-white' : 'text-[14px] text-slate-900'}`}>
            {t.name}
          </div>
          <div className={`${featured ? 'text-[13px] text-white/60' : 'text-[11px] text-slate-400'}`}>
            {t.role}
          </div>
        </div>
        <div className={`ml-auto flex items-center gap-1.5 text-[11px] font-semibold
          ${featured ? 'text-white/50' : 'text-slate-400'}`}>
          <CheckCheck size={12} className={featured ? 'text-white/70' : 'text-blue-500'} /> Verified
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 40%, #eff6ff 100%)' }}
    >
      {/* Blurred orb â€” top left */}
      <div className="absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)' }} />
      {/* Blurred orb â€” bottom right */}
      <div className="absolute -bottom-20 -right-20 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)' }} />

      {/* Rotated diamond â€” top right */}
      <div className="absolute -top-12 -right-12 w-44 h-44 pointer-events-none"
        style={{ border: '1.5px solid rgba(37,99,235,0.2)', transform: 'rotate(45deg)', borderRadius: '16px' }} />
      <div className="absolute top-4 right-4 w-20 h-20 pointer-events-none"
        style={{ border: '1px dashed rgba(37,99,235,0.15)', transform: 'rotate(45deg)', borderRadius: '8px' }} />
      {/* Rotated diamond â€” bottom left */}
      <div className="absolute -bottom-12 -left-12 w-44 h-44 pointer-events-none"
        style={{ border: '1.5px solid rgba(37,99,235,0.2)', transform: 'rotate(45deg)', borderRadius: '16px' }} />
      <div className="absolute bottom-4 left-4 w-20 h-20 pointer-events-none"
        style={{ border: '1px dashed rgba(37,99,235,0.15)', transform: 'rotate(45deg)', borderRadius: '8px' }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-100 text-blue-700
            border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            <Star size={11} /> Client Reviews
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-slate-900 leading-tight tracking-tight">
            What Our Clients Say<br />About Our Services
          </h2>
        </div>

        {/* 3 cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="reveal md:col-span-1">
            <TestiCard t={testimonials[0]} featured={true} />
          </div>
          <div className="reveal delay-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <TestiCard t={testimonials[1]} featured={false} />
            <TestiCard t={testimonials[2]} featured={false} />
          </div>
        </div>

      </div>
    </section>
  )
}

