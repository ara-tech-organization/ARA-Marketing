import { ArrowRight, Phone, Rocket, CheckCircle2, Zap, Shield, TrendingUp } from 'lucide-react'

const highlights = [
  { icon: Zap,          text: 'On-time delivery with zero compromise on quality'     },
  { icon: Shield,       text: 'AI-driven, innovative mobile solutions'               },
  { icon: TrendingUp,   text: 'Full-cycle support from strategy to deployment'       },
  { icon: CheckCircle2, text: 'Transparent communication and reporting'              },
]

export default function MACTA() {
  return (
    <section id="contact"
      className="relative overflow-hidden py-16 sm:py-24">

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-7">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Left: CTA Content */}
          <div className="flex-1 reveal-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
              style={{ background: 'rgba(124,58,237,0.15)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.3)' }}>
              <Rocket size={11} /> Let's Build Your App
            </span>

            <h2 className="text-[clamp(26px,3vw,44px)] font-bold text-white leading-tight tracking-tight mb-5">
              Let's Build Your{' '}
              <span style={{ background: 'linear-gradient(135deg,#a78bfa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Mobile App Together
              </span>
            </h2>

            <p className="text-[15px] leading-[1.85] mb-4" style={{ color: '#94a3b8' }}>
              Partner with a reliable <strong style={{ color: '#c4b5fd' }}>mobile app development company in Thanjavur</strong> to build your iOS and Android app from the ground up.
            </p>
            <p className="text-[15px] leading-[1.85] mb-4" style={{ color: '#94a3b8' }}>
              Our <strong style={{ color: '#c4b5fd' }}>custom mobile app development services in Thanjavur</strong> are tailored to your unique business requirements — from ideation to launch.
            </p>
            <p className="text-[15px] leading-[1.85] mb-10" style={{ color: '#94a3b8' }}>
              Fill in the form and our specialists will help you plan your perfect app solution — secure, scalable, and built to perform.
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-3 mb-10">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(124,58,237,0.18)', border: '1px solid rgba(124,58,237,0.3)' }}>
                    <Icon size={13} style={{ color: '#a78bfa' }} />
                  </div>
                  <span className="text-[13.5px] font-medium" style={{ color: '#cbd5e1' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Phone CTA */}
            <a href="tel:+919876543210"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl transition-all duration-300 hover:scale-[1.03]"
              style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.35)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)' }}>
                <Phone size={16} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#64748b' }}>Call Us Now</p>
                <p className="text-[15px] font-black text-white">+91 98765 43210</p>
              </div>
            </a>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-[440px] flex-shrink-0 reveal-right">
            <div className="rounded-3xl p-5 sm:p-8"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)', boxShadow: '0 32px 80px rgba(0,0,0,0.4)', backdropFilter: 'blur(12px)' }}>

              <div className="mb-7">
                <h3 className="text-[18px] font-bold text-white mb-1">Get a Free Consultation</h3>
                <p className="text-[12.5px]" style={{ color: '#64748b' }}>Tell us about your app idea and our specialists will help you plan the perfect mobile solution.</p>
              </div>

              <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                {[
                  { label: 'Your Name',     type: 'text',  placeholder: 'Enter your full name'    },
                  { label: 'Email Address', type: 'email', placeholder: 'Enter your email'         },
                  { label: 'Phone Number',  type: 'tel',   placeholder: 'Enter your phone number' },
                ].map(({ label, type, placeholder }) => (
                  <div key={label}>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: '#94a3b8' }}>{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-xl text-[13.5px] text-white placeholder-slate-600 outline-none transition-all duration-200"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                      onFocus={e => { e.currentTarget.style.border = '1px solid rgba(124,58,237,0.6)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)' }}
                      onBlur={e => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none' }}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: '#94a3b8' }}>App Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your app idea and requirements..."
                    className="w-full px-4 py-3 rounded-xl text-[13.5px] text-white placeholder-slate-600 outline-none transition-all duration-200 resize-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={e => { e.currentTarget.style.border = '1px solid rgba(124,58,237,0.6)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)' }}
                    onBlur={e => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none' }}
                  />
                </div>

                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-[14px] font-bold text-white transition-all duration-300 hover:scale-[1.02] mt-1"
                  style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)' }}>
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
