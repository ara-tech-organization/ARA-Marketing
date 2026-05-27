import { useState } from 'react'
import { Send, Phone, Building2, ChevronRight, CheckCircle2 } from 'lucide-react'

export default function EWCTA() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', company: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  const inputCls = `w-full px-4 py-3 rounded-xl text-[13.5px] font-medium transition-all duration-200 outline-none`
  const inputStyle = {
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.14)',
    color: '#ffffff',
  }
  const inputFocus = e => {
    e.target.style.background = 'rgba(255,255,255,0.12)'
    e.target.style.borderColor = 'rgba(167,139,250,0.55)'
    e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'
  }
  const inputBlur = e => {
    e.target.style.background = 'rgba(255,255,255,0.08)'
    e.target.style.borderColor = 'rgba(255,255,255,0.14)'
    e.target.style.boxShadow = 'none'
  }

  return (
    <section id="ew-cta" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(150deg,#040e1f 0%,#0a1628 50%,#060f22 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.09) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Orbs */}
      <div className="hidden lg:block absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)' }} />
      <div className="hidden lg:block absolute -bottom-20 -right-20 w-[450px] h-[450px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center reveal">

          {/* ── LEFT: Copy ── */}
          <div className="lg:w-[48%]">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(124,58,237,0.18)', border: '1px solid rgba(167,139,250,0.28)', color: '#c4b5fd' }}>
              <Building2 size={10} /> Let's Build Together
            </span>

            <h2 className="text-[clamp(24px,4.5vw,50px)] font-bold leading-[1.07] tracking-tight mb-5" style={{ color: '#ffffff' }}>
              Let's Build Your{' '}
              <span style={{ background: 'linear-gradient(135deg,#a78bfa,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Enterprise Website
              </span>{' '}
              Together
            </h2>

            <p className="text-[13.5px] sm:text-[15px] leading-[1.90] mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Enhance your enterprise digital presence with enterprise web development services in Thanjavur. Start your project today and let our team deliver a powerful, AI-driven solution.
            </p>

            {/* Trust points */}
            <div className="space-y-3 mb-8">
              {[
                'Free initial consultation — no commitment',
                'Dedicated project manager from day one',
                'Post-launch maintenance & continuous support',
                'Transparent pricing with milestone-based delivery',
              ].map(pt => (
                <div key={pt} className="flex items-center gap-3">
                  <CheckCircle2 size={14} style={{ color: '#a78bfa', flexShrink: 0 }} />
                  <span className="text-[13px] font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>{pt}</span>
                </div>
              ))}
            </div>

            {/* Phone CTA */}
            <a href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
              }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#1d4ed8,#7c3aed)' }}>
                <Phone size={15} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.40)' }}>Call Us Directly</p>
                <p className="text-[14px] font-bold text-white">+91 XXXXX XXXXX</p>
              </div>
              <ChevronRight size={14} style={{ color: 'rgba(255,255,255,0.35)', marginLeft: 'auto' }} />
            </a>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <div className="w-full lg:flex-1">
            <div className="rounded-3xl p-6 sm:p-8"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.10)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 30px 70px rgba(0,0,0,0.30)',
              }}>

              <h3 className="text-[17px] sm:text-[19px] font-bold mb-1.5" style={{ color: '#ffffff' }}>
                Start Your Enterprise Project
              </h3>
              <p className="text-[12.5px] mb-6" style={{ color: 'rgba(255,255,255,0.40)' }}>
                Fill in the details below and our team will get back to you within 24 hours.
              </p>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(52,211,153,0.18)', border: '1px solid rgba(52,211,153,0.35)' }}>
                    <CheckCircle2 size={26} style={{ color: '#34d399' }} />
                  </div>
                  <p className="text-[15px] font-bold text-white">Message Sent!</p>
                  <p className="text-[12.5px] text-center" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    We'll reach out within 24 hours. Thank you for choosing Ara Discover Marketing.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(255,255,255,0.38)' }}>Full Name</label>
                      <input
                        name="name" value={form.name} onChange={handle}
                        required placeholder="Your Name"
                        className={inputCls}
                        style={inputStyle}
                        onFocus={inputFocus} onBlur={inputBlur}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(255,255,255,0.38)' }}>Email Address</label>
                      <input
                        name="email" type="email" value={form.email} onChange={handle}
                        required placeholder="you@company.com"
                        className={inputCls}
                        style={inputStyle}
                        onFocus={inputFocus} onBlur={inputBlur}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(255,255,255,0.38)' }}>Company Name</label>
                    <input
                      name="company" value={form.company} onChange={handle}
                      placeholder="Your Company"
                      className={inputCls}
                      style={inputStyle}
                      onFocus={inputFocus} onBlur={inputBlur}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(255,255,255,0.38)' }}>Project Details</label>
                    <textarea
                      name="message" value={form.message} onChange={handle}
                      required placeholder="Tell us about your enterprise project requirements..."
                      rows={4}
                      className={inputCls + ' resize-none'}
                      style={inputStyle}
                      onFocus={inputFocus} onBlur={inputBlur}
                    />
                  </div>

                  <button type="submit"
                    className="btn-glow w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg,#1d4ed8,#7c3aed)', boxShadow: '0 8px 28px rgba(124,58,237,0.32)' }}>
                    <Send size={15} /> Send Message
                  </button>

                  <p className="text-center text-[11px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
                    No spam. We respect your privacy. Reply within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
