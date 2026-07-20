import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  X, User, Mail, Phone, Send, Loader2, Sparkles, ShieldCheck,
  Zap, Target, LayoutGrid, Pencil, FileText,
} from 'lucide-react'
import { submitContactForm } from '../../utils/submitContactForm'
import ServiceDropdown from './ServiceDropdown'
import arrowDoodle from '../../assets/arrow.png'

const perks = [
  { icon: Zap,         color: '#60a5fa', bg: 'rgba(37,99,235,0.18)',  title: 'Quick Response',    desc: 'We reply within 24 hours' },
  { icon: Target,      color: '#38bdf8', bg: 'rgba(14,165,233,0.18)', title: 'Tailored Solutions', desc: 'Solutions customized for your goals' },
  { icon: ShieldCheck, color: '#34d399', bg: 'rgba(16,185,129,0.18)', title: '100% Confidential',  desc: 'Your data and project details are always safe' },
]

export default function PromoPopup() {
  const navigate = useNavigate()
  const [visible, setVisible]     = useState(false)
  const [form, setForm]           = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors]       = useState({})
  const [loading, setLoading]     = useState(false)
  const timerRef = useRef(null)
  const shownRef = useRef(false)

  useEffect(() => {
    const EVENTS = ['mousemove', 'scroll', 'keydown', 'touchstart', 'click']
    function onActivity() {
      if (shownRef.current) return
      shownRef.current = true
      EVENTS.forEach(e => window.removeEventListener(e, onActivity))
      timerRef.current = setTimeout(() => setVisible(true), 10000)
    }
    EVENTS.forEach(e => window.addEventListener(e, onActivity, { passive: true }))
    return () => {
      EVENTS.forEach(e => window.removeEventListener(e, onActivity))
      clearTimeout(timerRef.current)
    }
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim())  e.name  = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^(\+91[-\s]?)?[6-9]\d{9}$/.test(form.phone.replace(/[\s-]/g, ''))) e.phone = 'Enter a valid mobile number'
    if (!form.service)      e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = key => e => {
    setForm(prev => ({ ...prev, [key]: e.target.value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      await submitContactForm(form, 'Popup Form')
      setVisible(false)
      navigate('/thank-you')
    } catch {
      setErrors({ submit: 'Something went wrong sending your message. Please try again or call us directly.' })
      setLoading(false)
    }
  }

  const inputBase = {
    width: '100%', background: '#fff',
    border: '1.5px solid #e2e8f0', borderRadius: 11,
    color: '#0f172a', outline: 'none',
    fontFamily: 'inherit', fontSize: 13.5,
    padding: '9px 14px', transition: 'border-color 0.2s, box-shadow 0.2s',
  }
  const inputFocus = { borderColor: '#2563eb', boxShadow: '0 0 0 3px rgba(37,99,235,0.10)' }
  const inputBlur  = { borderColor: '#e2e8f0', boxShadow: 'none' }
  const inputErr   = { borderColor: '#f87171', boxShadow: '0 0 0 3px rgba(248,113,113,0.10)' }

  if (!visible) return null

  return (
    <>
      <style>{`
        @keyframes popup-in {
          from { opacity:0; transform:scale(0.92) translateY(20px); }
          to   { opacity:1; transform:scale(1)    translateY(0); }
        }
        .popup-card { animation: popup-in 0.38s cubic-bezier(.34,1.56,.64,1) both; }
        @keyframes illustration-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        .illustration-float { animation: illustration-float 3.2s ease-in-out infinite; }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4"
        style={{ background: 'rgba(10,20,50,0.65)', backdropFilter: 'blur(5px)' }}
        onClick={() => setVisible(false)}
      >
        {/* Card */}
        <div
          className="popup-card relative w-full bg-white overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_240px] lg:grid-cols-[1fr_260px]"
          style={{
            maxWidth: 740,
            maxHeight: '86vh',
            borderRadius: 24,
            boxShadow: '0 32px 80px rgba(0,0,0,0.28), 0 8px 32px rgba(37,99,235,0.14)',
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={() => setVisible(false)}
            aria-label="Close"
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 z-20 bg-white"
            style={{ color: '#64748b', boxShadow: '0 4px 14px rgba(0,0,0,0.12)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#f1f5f9' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff' }}
          >
            <X size={15} />
          </button>

          {/* ── LEFT: Form ── */}
          <div className="overflow-y-auto p-5 sm:p-6 md:p-7 pb-7 sm:pb-8 md:pb-9" style={{ maxHeight: '86vh' }}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
              style={{ background: 'rgba(37,99,235,0.08)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.15)' }}>
              <Sparkles size={10} /> Free Consultation
            </span>

            <div className="flex items-start gap-1.5 pr-7 mb-2">
              <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 leading-tight">
                Let&apos;s Build Something{' '}
                <span style={{
                  background: 'var(--brand-gradient-text)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>Great</span>{' '}Together
              </h3>
              <img src={arrowDoodle} alt="" className="hidden sm:block flex-shrink-0" style={{ width: 92, height: 'auto', marginTop: -4 }} />
            </div>
            <p className="text-[13px] text-slate-500 mb-4 leading-snug">
              Share your details and we&apos;ll get back to you within{' '}
              <span className="font-semibold" style={{ color: '#2563eb' }}>24 hours</span>.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-[12.5px] font-semibold mb-1 text-slate-700">Full Name *</label>
                  <div className="relative">
                    <User size={14} style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', color:'#94a3b8', pointerEvents:'none' }} />
                    <input type="text" placeholder="Enter your name" value={form.name}
                      onChange={handleChange('name')}
                      style={{ ...inputBase, paddingLeft: 34, ...(errors.name ? inputErr : {}) }}
                      onFocus={e => Object.assign(e.target.style, inputFocus)}
                      onBlur={e => Object.assign(e.target.style, errors.name ? inputErr : inputBlur)}
                    />
                  </div>
                  {errors.name && <p style={{ color:'#f87171', fontSize:10.5, marginTop:3 }}>{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-[12.5px] font-semibold mb-1 text-slate-700">Email Address *</label>
                  <div className="relative">
                    <Mail size={14} style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', color:'#94a3b8', pointerEvents:'none' }} />
                    <input type="email" placeholder="you@email.com" value={form.email}
                      onChange={handleChange('email')}
                      style={{ ...inputBase, paddingLeft: 34, ...(errors.email ? inputErr : {}) }}
                      onFocus={e => Object.assign(e.target.style, inputFocus)}
                      onBlur={e => Object.assign(e.target.style, errors.email ? inputErr : inputBlur)}
                    />
                  </div>
                  {errors.email && <p style={{ color:'#f87171', fontSize:10.5, marginTop:3 }}>{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-[12.5px] font-semibold mb-1 text-slate-700">Phone Number *</label>
                  <div className="relative">
                    <Phone size={14} style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', color:'#94a3b8', pointerEvents:'none' }} />
                    <input type="tel" placeholder="(+91) 81100 25254" value={form.phone}
                      onChange={handleChange('phone')}
                      style={{ ...inputBase, paddingLeft: 34, ...(errors.phone ? inputErr : {}) }}
                      onFocus={e => Object.assign(e.target.style, inputFocus)}
                      onBlur={e => Object.assign(e.target.style, errors.phone ? inputErr : inputBlur)}
                    />
                  </div>
                  {errors.phone && <p style={{ color:'#f87171', fontSize:10.5, marginTop:3 }}>{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-[12.5px] font-semibold mb-1 text-slate-700">Service You Need *</label>
                  <ServiceDropdown
                    value={form.service}
                    onChange={s => { setForm(prev => ({ ...prev, service: s })); if (errors.service) setErrors(prev => ({ ...prev, service: '' })) }}
                    inputBase={inputBase} inputFocus={inputFocus} inputBlur={inputBlur} inputErr={inputErr}
                    error={errors.service} placeholderIcon={LayoutGrid}
                  />
                  {errors.service && <p style={{ color:'#f87171', fontSize:10.5, marginTop:3 }}>{errors.service}</p>}
                </div>
              </div>

              <div className="mb-3">
                <label className="block text-[12.5px] font-semibold mb-1 text-slate-700">Your Message *</label>
                <div className="relative">
                  <Pencil size={14} style={{ position:'absolute', left:12, top:14, color:'#94a3b8', pointerEvents:'none' }} />
                  <textarea rows={2} placeholder="Tell us about your project, goals or questions..."
                    value={form.message} onChange={handleChange('message')}
                    style={{ ...inputBase, paddingLeft: 34, resize:'none', ...(errors.message ? inputErr : {}) }}
                    onFocus={e => Object.assign(e.target.style, inputFocus)}
                    onBlur={e => Object.assign(e.target.style, errors.message ? inputErr : inputBlur)}
                  />
                </div>
                {errors.message && <p style={{ color:'#f87171', fontSize:10.5, marginTop:3 }}>{errors.message}</p>}
              </div>

              <div className="flex items-start gap-2 mb-6">
                <ShieldCheck size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#2563eb' }} />
                <p className="text-[12px] leading-snug">
                  <span className="font-semibold text-slate-800">Your information is safe with us.</span>{' '}
                  <span className="text-slate-400">We&apos;ll never share your details with anyone.</span>
                </p>
              </div>

              {errors.submit && <p style={{ color:'#f87171', fontSize:12, textAlign:'center', marginBottom:10 }}>{errors.submit}</p>}

              <button type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-[13.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-75"
                style={{ background: 'var(--brand-gradient)', boxShadow: '0 8px 28px rgba(37,99,235,0.30)' }}
              >
                {loading
                  ? <><Loader2 size={16} className="animate-spin" /> Sending...</>
                  : <><Send size={16} /> Send Message</>
                }
              </button>

              <button type="button" onClick={() => setVisible(false)}
                className="w-full mt-2 text-[12px] text-slate-400 hover:text-slate-600 transition-colors bg-transparent border-0 cursor-pointer"
              >
                No thanks, maybe later
              </button>
            </form>
          </div>

          {/* ── RIGHT: Info panel ── */}
          <div className="relative hidden md:flex flex-col p-5 pt-11 overflow-y-auto"
            style={{ background: 'linear-gradient(135deg,#0d2244 0%,#0a1a34 40%,#0d2244 100%)', maxHeight: '86vh' }}>

            {/* Illustration */}
            <div className="relative mx-auto mb-5 illustration-float" style={{ width: 140, height: 116 }}>
              <div className="absolute inset-0 rounded-full" style={{ background: 'var(--brand-gradient-glow)' }} />
              <div className="absolute" style={{ left: 6, bottom: 12, width: 54, height: 40, background: '#fbbf24', borderRadius: 6, transform: 'rotate(-8deg)', boxShadow: '0 8px 20px rgba(251,191,36,0.30)' }}>
                <Mail size={17} style={{ position: 'absolute', top: 11, left: 18, color: '#fff' }} />
              </div>
              <div className="absolute" style={{ right: 18, bottom: 6, width: 66, height: 82, background: '#fff', borderRadius: 11, transform: 'rotate(6deg)', boxShadow: '0 12px 28px rgba(37,99,235,0.20)' }}>
                <FileText size={18} style={{ position: 'absolute', top: 11, left: 11, color: '#2563eb' }} />
                <div style={{ position: 'absolute', top: 38, left: 11, right: 11, height: 3, borderRadius: 2, background: '#dbeafe' }} />
                <div style={{ position: 'absolute', top: 47, left: 11, right: 18, height: 3, borderRadius: 2, background: '#dbeafe' }} />
                <div style={{ position: 'absolute', top: 56, left: 11, right: 24, height: 3, borderRadius: 2, background: '#dbeafe' }} />
              </div>
              <Sparkles size={14} className="absolute" style={{ top: -2, right: -4, color: '#38bdf8' }} />
            </div>

            <h4 className="text-[15px] font-bold text-white mb-1">Why work with us?</h4>
            <div className="h-[3px] w-9 rounded-full mb-4" style={{ background: 'var(--brand-gradient-soft)' }} />

            <div className="flex flex-col gap-3.5 mb-5">
              {perks.map(({ icon: Icon, color, bg, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-[11px] flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-[12.5px] font-bold text-white leading-snug">{title}</p>
                    <p className="text-[11px] leading-snug mt-0.5" style={{ color: '#94a3b8' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
              <div className="flex -space-x-2.5 flex-shrink-0">
                {['#2563eb', '#0ea5e9', '#38bdf8'].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full flex items-center justify-center border-2"
                    style={{ background: c, borderColor: '#0f2247' }}>
                    <User size={12} style={{ color: '#fff' }} />
                  </div>
                ))}
              </div>
              <p className="text-[11.5px] leading-snug" style={{ color: '#cbd5e1' }}>
                <span className="font-bold text-white">Trusted by 500+</span> businesses worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
