import { Quote, Star, Users, CheckCircle2 } from 'lucide-react'

const testimonials = [
  {
    quote: "Ara's dynamic website solution helped us manage our content easily and improved our online engagement and sales significantly.",
    name: 'Ravi Kumar',
    role: 'Business Owner, Thanjavur',
    tag: 'E-Commerce',
    color: '#2563eb',
    barColor: '#3b82f6',
  },
  {
    quote: "Ara's Web development team is highly professional and our website is now highly visualing, faster, scalable, and easy to update.",
    name: 'Akash Chopra',
    role: 'Startup Founder',
    tag: 'Startup',
    color: '#0891b2',
    barColor: '#38bdf8',
  },
  {
    quote: "The team at Ara Discover Marketing is highly skilled and they built us a responsive and visually appealing website that loads quickly and works smoothly.",
    name: 'Vinod Kumar',
    role: 'Business Owner, Chennai',
    tag: 'Service Business',
    color: '#2563eb',
    barColor: '#60a5fa',
  },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#0891b2)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function DWTestimonials() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #eff6ff 55%, #e0f2fe 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.07) 1.5px, transparent 1.5px)', backgroundSize: '34px 34px' }} />
      <div className="hidden sm:block absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full border border-blue-200/35 pointer-events-none animate-[spin_36s_linear_infinite]" />
      <div className="hidden sm:block absolute -bottom-16 -left-16 w-[280px] h-[280px] rounded-full border border-sky-200/28 pointer-events-none animate-[spin_28s_linear_infinite_reverse]" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(147,197,253,0.18) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(186,230,253,0.22) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 text-blue-600 bg-white/80 shadow-sm"
            style={{ border: '1px solid rgba(37,99,235,0.18)' }}>
            <Users size={10} /> Client Success Stories
          </span>
          <h2 className="text-[clamp(22px,4vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            What Our{' '}
            <span style={gradBlue}>Clients Say</span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-[1.85] max-w-xl mx-auto">
            We are proud to be a leading dynamic website development company in Thanjavur, providing measurable digital transformation for businesses.
          </p>
        </div>

        {/* ── Three equal cards ── */}
        <div className="reveal flex flex-col sm:flex-row gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group flex-1 flex flex-col relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 delay-${i + 1}`}
              style={{
                background: 'white',
                boxShadow: '0 8px 32px rgba(37,99,235,0.08)',
                border: '1.5px solid rgba(37,99,235,0.08)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 24px 56px ${t.color}18`
                e.currentTarget.style.borderColor = t.color + '28'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.08)'
                e.currentTarget.style.borderColor = 'rgba(37,99,235,0.08)'
              }}
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full flex-shrink-0"
                style={{ background: `linear-gradient(90deg, ${t.color}, ${t.barColor})` }} />

              <div className="flex flex-col flex-1 p-6 sm:p-7">

                {/* Tag + Quote icon row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: t.color + '10', color: t.color, border: `1px solid ${t.color}20` }}>
                    {t.tag}
                  </span>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: t.color + '08' }}>
                    <Quote size={16} style={{ color: t.color + '60' }} />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array(5).fill(0).map((_, j) => (
                    <Star key={j} size={13} fill="#fbbf24" style={{ color: '#fbbf24' }} />
                  ))}
                </div>

                {/* Quote text */}
                <p className="flex-1 text-[13.5px] sm:text-[14px] text-slate-700 leading-[1.85] font-medium mb-6"
                  style={{ fontStyle: 'italic' }}>
                  "{t.quote}"
                </p>

                {/* Divider */}
                <div className="h-px mb-5" style={{ background: `linear-gradient(90deg, ${t.color}20, transparent)` }} />

                {/* Author row */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-[15px] font-black flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}18, ${t.color}08)`,
                      border: `2px solid ${t.color}28`,
                      color: t.color,
                    }}>
                    {t.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold text-slate-900 leading-tight">{t.name}</p>
                    <p className="text-[11.5px] text-slate-400 mt-0.5">{t.role}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <CheckCircle2 size={16} style={{ color: t.color }} />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── Trust strip ── */}
        <div className="reveal mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-10 py-4 sm:py-5 px-4 sm:px-6 rounded-2xl"
          style={{ background: 'white', border: '1.5px solid rgba(37,99,235,0.10)', boxShadow: '0 6px 24px rgba(37,99,235,0.06)' }}>
          {[
            ['200+', 'Websites Delivered'],
            ['98%',  'Client Satisfaction'],
            ['5x',   'Faster Updates'],
            ['100%', 'On-Time Delivery'],
          ].map(([num, label]) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-[22px] sm:text-[26px] font-black leading-tight" style={gradBlue}>{num}</span>
              <span className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5 font-medium">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
