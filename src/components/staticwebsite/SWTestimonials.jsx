import { Quote, Star, MessageSquare, TrendingUp, Users } from 'lucide-react'

const testimonials = [
  {
    quote: 'Excellent service and fast delivery. Our website performance improved significantly after working with this team. The static website they built loads in under a second and our customer inquiries have doubled.',
    author: 'Local Business Owner',
    role: 'Retail Store, Thanjavur',
    rating: 5,
    metric: '2× More Leads',
    color: '#2563eb',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    quote: 'Their design quality and SEO knowledge helped us grow our online visibility quickly. Within two months of launching our static website, we started appearing on the first page of Google for our key services.',
    author: 'Startup Founder',
    role: 'Tech Startup, Thanjavur',
    rating: 5,
    metric: 'Page 1 Rankings',
    color: '#1d4ed8',
    image: 'https://randomuser.me/api/portraits/men/68.jpg',
  },
]

const stats = [
  { icon: Users,      value: '150+', label: 'Happy Clients',       color: '#2563eb' },
  { icon: TrendingUp, value: '98%',  label: 'Client Satisfaction', color: '#1d4ed8' },
  { icon: Star,       value: '5★',   label: 'Average Rating',      color: '#3b82f6' },
]

export default function SWTestimonials() {
  return (
    <section className="py-14 sm:py-20 bg-white relative overflow-hidden">
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(37,99,235,0.07)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.18)' }}
          >
            <MessageSquare size={11} /> Testimonials
          </span>
          <h2 className="text-[clamp(22px,2.8vw,36px)] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            What Our{' '}
            <span className="text-gradient-blue">Clients Say</span>
          </h2>
          <p className="text-[14px] text-slate-500 max-w-xl mx-auto">
            We are proud to be a trusted static website development company in Thanjavur, delivering measurable results for clients across industries.
          </p>
        </div>

        {/* Testimonial cards — compact */}
        <div className="flex flex-col lg:flex-row gap-5 mb-8">
          {testimonials.map(({ quote, author, role, rating, metric, color, image }) => (
            <div
              key={author}
              className="flex-1 reveal rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${color}28`
                e.currentTarget.style.background = `${color}04`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid #e2e8f0'
                e.currentTarget.style.background = '#f8fafc'
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${color}, ${color}55)` }}
              />

              {/* Stars + quote icon row */}
              <div className="flex items-center justify-between mb-3 pt-1">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={12} fill="#f59e0b" style={{ color: '#f59e0b' }} />
                  ))}
                </div>
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}10`, border: `1px solid ${color}20` }}
                >
                  <Quote size={13} style={{ color }} />
                </div>
              </div>

              {/* Quote text */}
              <p className="text-[13px] text-slate-600 leading-[1.8] mb-5 italic">
                "{quote}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid #e2e8f0' }}>
                <div className="flex items-center gap-2.5">
                  <img src={image} alt={author} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <p className="text-[12px] font-bold text-slate-800 leading-tight">{author}</p>
                    <p className="text-[10.5px] text-slate-400">{role}</p>
                  </div>
                </div>
                <span
                  className="px-2.5 py-1 rounded-lg text-[10px] font-bold"
                  style={{ background: `${color}10`, color }}
                >
                  {metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip — compact, no shadow */}
        <div
          className="reveal flex flex-col sm:flex-row rounded-2xl overflow-hidden"
          style={{ border: '1px solid #e2e8f0' }}
        >
          {stats.map(({ icon: Icon, value, label, color }, i) => (
            <div
              key={label}
              className="flex-1 flex items-center gap-3 px-6 py-5"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid #e2e8f0' : 'none',
                background: 'white',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}0d`, border: `1px solid ${color}18` }}
              >
                <Icon size={17} style={{ color }} />
              </div>
              <div>
                <p
                  className="text-[22px] font-black leading-tight"
                  style={{
                    background: `linear-gradient(135deg, ${color}, ${color}88)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {value}
                </p>
                <p className="text-[11px] text-slate-500 font-medium">{label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
