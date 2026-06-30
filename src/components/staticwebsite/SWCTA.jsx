import { ArrowRight, Phone, Rocket, CheckCircle2, Zap, Shield, TrendingUp } from 'lucide-react'

const highlights = [
  { icon: Zap,          text: 'Lightning-fast delivery in 3–7 days' },
  { icon: Shield,       text: 'SEO-optimized & mobile responsive' },
  { icon: TrendingUp,   text: 'Performance score 95+ guaranteed' },
  { icon: CheckCircle2, text: 'Free consultation, no commitment' },
]

export default function SWCTA() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-16"
      style={{ background: 'linear-gradient(135deg, #03111f 0%, #04131c 100%)' }}
    >
      {/* Orbs */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(8,145,178,0.18) 0%, transparent 65%)',
          animation: 'float-y 9s ease-in-out infinite',
        }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 65%)' }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(8,145,178,0.5) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #0891b2, #2563eb, #7c3aed, transparent)' }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* ── Left: CTA Content ── */}
          <div className="flex-1 reveal-left">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
              style={{ background: 'rgba(8,145,178,0.15)', color: '#38bdf8', border: '1px solid rgba(8,145,178,0.3)' }}
            >
              <Rocket size={11} /> Let's Build Together
            </span>

            <h2 className="text-[clamp(25px,2.7vw,43px)] font-bold text-white leading-tight tracking-tight mb-5">
              Let's Build Your{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Website Together
              </span>
            </h2>

            <p className="text-[15px] leading-[1.85] mb-4" style={{ color: '#94a3b8' }}>
              Ready to take your business online with a powerful static website? Join hands with a trusted static web design services firm in Thanjavur and change your digital presence with speed and simplicity.
            </p>
            <p className="text-[15px] leading-[1.85] mb-4" style={{ color: '#94a3b8' }}>
              As a leading static web design company in Thanjavur, we bring expertise in speed, security, and SEO to every project we deliver.
            </p>
            <p className="text-[15px] leading-[1.85] mb-10" style={{ color: '#94a3b8' }}>
              Fill in the form and our specialists will help you plan your perfect static website solution — fast, affordable, and built to perform.
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-3 mb-10">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(8,145,178,0.18)', border: '1px solid rgba(8,145,178,0.3)' }}
                  >
                    <Icon size={13} style={{ color: '#38bdf8' }} />
                  </div>
                  <span className="text-[13.5px] font-medium" style={{ color: '#cbd5e1' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Phone CTA */}
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl transition-all duration-300 hover:scale-[1.03]"
              style={{ background: 'rgba(8,145,178,0.15)', border: '1px solid rgba(8,145,178,0.35)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)' }}
              >
                <Phone size={16} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#64748b' }}>Call Us Now</p>
                <p className="text-[15px] font-black text-white">+91 98765 43210</p>
              </div>
            </a>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="lg:w-[440px] flex-shrink-0 reveal-right">
            <div
              className="rounded-3xl p-5 sm:p-8"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Form header */}
              <div className="mb-7">
                <h3 className="text-[17px] font-bold text-white mb-1">Get a Free Consultation</h3>
                <p className="text-[12.5px]" style={{ color: '#64748b' }}>Fill in the form and our specialists will help you plan your perfect static website solution.</p>
              </div>

              <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: '#94a3b8' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl text-[13.5px] text-white placeholder-slate-600 outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={e => {
                      e.currentTarget.style.border = '1px solid rgba(8,145,178,0.6)'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(8,145,178,0.12)'
                    }}
                    onBlur={e => {
                      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: '#94a3b8' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl text-[13.5px] text-white placeholder-slate-600 outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={e => {
                      e.currentTarget.style.border = '1px solid rgba(8,145,178,0.6)'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(8,145,178,0.12)'
                    }}
                    onBlur={e => {
                      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: '#94a3b8' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-xl text-[13.5px] text-white placeholder-slate-600 outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={e => {
                      e.currentTarget.style.border = '1px solid rgba(8,145,178,0.6)'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(8,145,178,0.12)'
                    }}
                    onBlur={e => {
                      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: '#94a3b8' }}>
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your website requirements..."
                    className="w-full px-4 py-3 rounded-xl text-[13.5px] text-white placeholder-slate-600 outline-none transition-all duration-200 resize-none"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={e => {
                      e.currentTarget.style.border = '1px solid rgba(8,145,178,0.6)'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(8,145,178,0.12)'
                    }}
                    onBlur={e => {
                      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-[14px] font-bold text-white transition-all duration-300 hover:scale-[1.02] mt-1"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                  }}
                >
                  Send Free Consultation Request <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
