import { HeartPulse, GraduationCap, Home, ShoppingCart, Utensils, Factory, Shirt, Landmark, LayoutGrid } from 'lucide-react'

const industries = [
  { icon: HeartPulse,    label: 'Healthcare',          size: 'large' },
  { icon: GraduationCap, label: 'Education',           size: 'large' },
  { icon: Home,          label: 'Real Estate',         size: 'large' },
  { icon: ShoppingCart,  label: 'eCommerce',           size: 'medium' },
  { icon: Utensils,      label: 'Restaurants',         size: 'medium' },
  { icon: Factory,       label: 'Manufacturing',       size: 'medium' },
  { icon: Shirt,         label: 'Fashion & Lifestyle', size: 'small' },
  { icon: Landmark,      label: 'Finance & Professional Services', size: 'small' },
]

const sizeClasses = {
  large:  'px-8 py-4 text-base',
  medium: 'px-6 py-3 text-sm',
  small:  'px-5 py-2.5 text-[13px]',
}

const iconSizes = { large: 20, medium: 18, small: 16 }

export default function Industries() {
  return (
    <section id="industries" className="relative py-16 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#071a36 0%,#0f2a52 45%,#071a36 100%)' }}
    >
      {/* Blurred orb — top right */}
      <div className="absolute -top-28 -right-28 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />
      {/* Blurred orb — bottom left */}
      <div className="absolute -bottom-20 -left-20 w-[340px] h-[340px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'var(--brand-gradient-dots)', backgroundSize: '32px 32px' }} />

      {/* Rotated diamond — top left */}
      <div className="absolute -top-12 -left-12 w-44 h-44 pointer-events-none"
        style={{
          border: '1.5px solid rgba(255,255,255,0.1)',
          transform: 'rotate(45deg)',
          borderRadius: '16px',
        }} />
      {/* Rotated diamond — bottom right */}
      <div className="absolute -bottom-12 -right-12 w-44 h-44 pointer-events-none"
        style={{
          border: '1.5px solid rgba(255,255,255,0.1)',
          transform: 'rotate(45deg)',
          borderRadius: '16px',
        }} />
      {/* Smaller inner diamond — top left */}
      <div className="absolute top-4 left-4 w-20 h-20 pointer-events-none"
        style={{
          border: '1px dashed rgba(255,255,255,0.08)',
          transform: 'rotate(45deg)',
          borderRadius: '8px',
        }} />
      {/* Smaller inner diamond — bottom right */}
      <div className="absolute bottom-4 right-4 w-20 h-20 pointer-events-none"
        style={{
          border: '1px dashed rgba(255,255,255,0.08)',
          transform: 'rotate(45deg)',
          borderRadius: '8px',
        }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 text-blue-400
            border border-white/10 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            <LayoutGrid size={11} /> Industries We Serve
          </span>
          <h2
            className="text-[clamp(23px,3.1vw,35px)] font-bold text-white leading-tight tracking-tight"
            style={{ fontWeight: 700 }}
          >
            Digital Marketing Solutions<br />for Every Industry
          </h2>
          <p className="text-base text-white/60 leading-relaxed max-w-xl mx-auto mt-3.5">
            We provide customized marketing solutions for businesses across all sectors.
          </p>
        </div>

        {/* Pill cloud */}
        <div className="reveal flex flex-wrap gap-4 justify-center">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            const sz = iconSizes[ind.size]
            return (
              <div
                key={ind.label}
                className={`industry-pill bg-white/5 border border-white/10 rounded-full
                  flex items-center gap-3 cursor-pointer transition-all duration-300
                  hover:bg-blue-600 hover:border-blue-400 group
                  shadow-sm hover:shadow-lg hover:shadow-blue-900/40
                  delay-${(i % 4) + 1}
                  ${sizeClasses[ind.size]}`}
              >
                <Icon size={sz} className="text-blue-400 flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                <span className="font-semibold text-white/80 group-hover:text-white transition-colors duration-300">{ind.label}</span>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="reveal text-center text-[13.5px] text-white/60 leading-relaxed max-w-xl mx-auto mt-12">
          We understand different customer behaviors and market trends which is why businesses from all
          industry sectors choose us as the best digital marketing company in Thanjavur.
        </p>

      </div>
    </section>
  )
}
