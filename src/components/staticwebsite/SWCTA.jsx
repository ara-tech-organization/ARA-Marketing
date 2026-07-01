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
      style={{ background: '#f0f9ff' }}
    >
      {/* Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.6) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(186,230,253,0.5) 0%, transparent 65%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #2563eb, #0ea5e9, #2563eb, transparent)' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* ── Left: CTA Content ── */}
          <div className="flex-1 reveal-left">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
              style={{ background: 'white', color: '#2563eb', border: '1px solid #bfdbfe', boxShadow: '0 2px 12px rgba(37,99,235,0.08)' }}
            >
              <Rocket size={11} /> Let's Build Together
            </span>

            <h2 className="text-[clamp(25px,2.7vw,43px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Let's Build Your{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Website Together
              </span>
            </h2>

            <p className="text-[15px] text-slate-500 leading-[1.85] mb-4">
              Ready to take your business online with a powerful static website? Join hands with a trusted static web design services firm in Thanjavur and change your digital presence with speed and simplicity.
            </p>
            <p className="text-[15px] text-slate-500 leading-[1.85] mb-4">
              As a leading static web design company in Thanjavur, we bring expertise in speed, security, and SEO to every project we deliver.
            </p>
            <p className="text-[15px] text-slate-500 leading-[1.85] mb-10">
              Fill in the form and our specialists will help you plan your perfect static website solution — fast, affordable, and built to perform.
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-3 mb-10">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}
                  >
                    <Icon size={13} style={{ color: '#2563eb' }} />
                  </div>
                  <span className="text-[13.5px] font-medium text-slate-700">{text}</span>
                </div>
              ))}
            </div>

            {/* Phone CTA */}
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white transition-all duration-300 hover:scale-[1.03]"
              style={{ border: '1px solid #bae6fd', boxShadow: '0 4px 16px rgba(37,99,235,0.08)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #2563eb, #0ea5e9)' }}
              >
                <Phone size={16} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Call Us Now</p>
                <p className="text-[15px] font-black text-slate-900">+91 98765 43210</p>
              </div>
            </a>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="lg:w-[440px] flex-shrink-0 reveal-right">
            <div
              className="rounded-3xl p-5 sm:p-8 bg-white"
              style={{
                border: '1px solid #dbeafe',
                boxShadow: '0 20px 60px rgba(37,99,235,0.10)',
              }}
            >
              {/* Form header */}
              <div className="mb-7">
                <h3 className="text-[17px] font-bold text-slate-900 mb-1">Get a Free Consultation</h3>
                <p className="text-[12.5px] text-slate-500">Fill in the form and our specialists will help you plan your perfect static website solution.</p>
              </div>

              <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 text-slate-500">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl text-[13.5px] text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 bg-white"
                    style={{ border: '1px solid #e2e8f0' }}
                    onFocus={e => {
                      e.currentTarget.style.border = '1px solid #0ea5e9'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14,165,233,0.10)'
                    }}
                    onBlur={e => {
                      e.currentTarget.style.border = '1px solid #e2e8f0'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 text-slate-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl text-[13.5px] text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 bg-white"
                    style={{ border: '1px solid #e2e8f0' }}
                    onFocus={e => {
                      e.currentTarget.style.border = '1px solid #0ea5e9'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14,165,233,0.10)'
                    }}
                    onBlur={e => {
                      e.currentTarget.style.border = '1px solid #e2e8f0'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 text-slate-500">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-xl text-[13.5px] text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 bg-white"
                    style={{ border: '1px solid #e2e8f0' }}
                    onFocus={e => {
                      e.currentTarget.style.border = '1px solid #0ea5e9'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14,165,233,0.10)'
                    }}
                    onBlur={e => {
                      e.currentTarget.style.border = '1px solid #e2e8f0'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 text-slate-500">
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your website requirements..."
                    className="w-full px-4 py-3 rounded-xl text-[13.5px] text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 resize-none bg-white"
                    style={{ border: '1px solid #e2e8f0' }}
                    onFocus={e => {
                      e.currentTarget.style.border = '1px solid #0ea5e9'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14,165,233,0.10)'
                    }}
                    onBlur={e => {
                      e.currentTarget.style.border = '1px solid #e2e8f0'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-[14px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 mt-1"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                    boxShadow: '0 8px 24px rgba(37,99,235,0.28)',
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
