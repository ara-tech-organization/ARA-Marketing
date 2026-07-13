import { useState } from 'react'
import { ArrowRight, Rocket, Phone, CheckCircle2, Globe } from 'lucide-react'

const gradBlue = {
  background: 'var(--brand-gradient-text)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function DWCTA() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault() }

  const baseInput = { background: '#f8fafc', border: '1.5px solid #e2e8f0' }
  const focusInput = e => { e.target.style.borderColor = '#2563eb'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.10)' }
  const blurInput  = e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none' }

  return (
    <section id="dw-cta" className="relative py-16 sm:py-20 lg:py-16 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#eff6ff 0%,#dbeafe 40%,#eff6ff 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'var(--brand-gradient-dots)', backgroundSize: '34px 34px' }} />
      {/* Orbs */}
      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'var(--brand-gradient-glow)' }} />
      <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'var(--brand-gradient-glow)' }} />
      {/* Rings */}
      <div className="hidden sm:block absolute -top-16 -left-16 w-[320px] h-[320px] rounded-full border border-blue-300/25 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="hidden sm:block absolute -bottom-16 -right-16 w-[280px] h-[280px] rounded-full border border-sky-300/20 pointer-events-none animate-[spin_35s_linear_infinite_reverse]" />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 md:px-7">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* ── Left: text ── */}
          <div className="flex-1 text-center lg:text-left reveal">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-6 sm:mb-8 text-blue-600 bg-white shadow-sm"
              style={{ border: '1px solid rgba(37,99,235,0.20)' }}>
              <Rocket size={10} /> Let's Build With Us
            </div>

            <h2 className="text-[clamp(23px,3.6vw,51px)] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5">
              Let's Build Your{' '}
              <span style={gradBlue}>Dynamic Website Together</span>
            </h2>

            <p className="text-[14px] sm:text-[16px] leading-[1.85] mb-3 max-w-[500px] mx-auto lg:mx-0 text-slate-600">
              Ready to upgrade your business with a powerful, dynamic website?
            </p>
            <p className="text-[13px] sm:text-[14px] leading-[1.80] mb-8 sm:mb-10 max-w-[460px] mx-auto lg:mx-0 text-slate-400">
              Work with a trusted dynamic website designing company in Thanjavur and upgrade your digital experience with modern design and advanced functionality.
            </p>

            {/* Phone CTA */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-3">
              <a href="tel:+918110025254"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 sm:py-3 rounded-full text-[14px] sm:text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: 'var(--brand-gradient)', boxShadow: '0 6px 20px rgba(37,99,235,0.30)' }}>
                <Phone size={14} /> Call Us Now
              </a>
            </div>
            <p className="text-[13px] text-slate-500 mb-8 sm:mb-10 text-center lg:text-left">
              Or request a free consultation today.
            </p>

            {/* Trust stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-6 sm:pt-8"
              style={{ borderTop: '1px solid rgba(37,99,235,0.15)' }}>
              {[
                ['200+', 'Websites Delivered'],
                ['98%',  'Client Satisfaction'],
                ['5',    'Years of Expertise'],
              ].map(([num, label]) => (
                <div key={label} className="flex flex-col items-center lg:items-start">
                  <span className="text-[22px] sm:text-[26px] font-black leading-tight" style={gradBlue}>{num}</span>
                  <span className="text-[10px] sm:text-[11px] mt-0.5 text-slate-400">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form card ── */}
          <div className="w-full lg:w-[440px] flex-shrink-0 reveal-right">
            <div className="relative rounded-3xl overflow-hidden bg-white"
              style={{ boxShadow: '0 32px 80px rgba(37,99,235,0.18)' }}>
              <div className="h-1.5" style={{ background: 'var(--brand-gradient-soft)' }} />
              <div className="px-6 sm:px-8 py-7 sm:py-8">
                <p className="text-[16px] font-bold text-slate-900 mb-1">Get a Free Consultation</p>
                <p className="text-[12.5px] text-slate-500 mb-6 leading-relaxed">
                  Fill in the form, and our website professionals will help you plan your custom dynamic website.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="text" name="name" placeholder="Your Name" required
                    value={form.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-[13px] text-slate-800 outline-none transition-all duration-200"
                    style={baseInput} onFocus={focusInput} onBlur={blurInput}
                  />
                  <input
                    type="email" name="email" placeholder="Your Email" required
                    value={form.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-[13px] text-slate-800 outline-none transition-all duration-200"
                    style={baseInput} onFocus={focusInput} onBlur={blurInput}
                  />
                  <input
                    type="tel" name="phone" placeholder="Your Phone Number"
                    value={form.phone} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-[13px] text-slate-800 outline-none transition-all duration-200"
                    style={baseInput} onFocus={focusInput} onBlur={blurInput}
                  />
                  <textarea
                    name="message" placeholder="Tell us about your project..." rows={3}
                    value={form.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-[13px] text-slate-800 outline-none resize-none transition-all duration-200"
                    style={baseInput} onFocus={focusInput} onBlur={blurInput}
                  />
                  <button type="submit"
                    className="btn-glow w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white text-[14px] font-bold transition-all duration-300 hover:-translate-y-0.5 mt-1"
                    style={{ boxShadow: '0 8px 28px rgba(37,99,235,0.30)' }}>
                    Get Free Consultation <ArrowRight size={14} />
                  </button>
                </form>
                <div className="flex items-center gap-2 mt-4">
                  <CheckCircle2 size={13} className="text-emerald-500" />
                  <span className="text-[11.5px] text-slate-500">100% free, no commitment required</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
