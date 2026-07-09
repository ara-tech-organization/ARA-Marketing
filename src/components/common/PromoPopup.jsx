import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  X, User, Mail, Phone, Send, Loader2, Sparkles, ShieldCheck,
  Zap, Target, LayoutGrid, MessageCircle, FileText, Pencil,
} from 'lucide-react'
import { submitContactForm } from '../../utils/submitContactForm'
import ServiceDropdown from './ServiceDropdown'

const perks = [
  { icon: Zap,         color: '#2563eb', bg: '#dbeafe', title: 'Quick Response',    desc: 'We reply within 24 hours' },
  { icon: Target,      color: '#059669', bg: '#d1fae5', title: 'Tailored Solutions', desc: 'Solutions customized for your goals' },
  { icon: ShieldCheck, color: '#7c3aed', bg: '#ede9fe', title: '100% Confidential',  desc: 'Your data and project details are safe' },
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
    border: '1.5px solid #e2e8f0', borderRadius: 12,
    color: '#0f172a', outline: 'none',
    fontFamily: 'inherit', fontSize: 13.5,
    padding: '11px 14px', transition: 'border-color 0.2s, box-shadow 0.2s',
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
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4"
        style={{ background: 'rgba(10,20,50,0.65)', backdropFilter: 'blur(5px)' }}
        onClick={() => setVisible(false)}
      >
        {/* Card */}
        <div
          className="popup-card relative w-full bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_300px]"
          style={{
            maxWidth: 860,
            maxHeight: '92vh',
            borderRadius: 28,
            boxShadow: '0 32px 80px rgba(0,0,0,0.28), 0 8px 32px rgba(37,99,235,0.14)',
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={() => setVisible(false)}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 z-20 bg-white"
            style={{ color: '#64748b', boxShadow: '0 4px 14px rgba(0,0,0,0.12)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#f1f5f9' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff' }}
          >
            <X size={16} />
          </button>

          {/* ── LEFT: Form ── */}
          <div className="overflow-y-auto p-6 sm:p-7 md:p-8 lg:p-9" style={{ maxHeight: '92vh' }}>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider mb-5"
              style={{ background: 'rgba(37,99,235,0.08)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.15)' }}>
              <Sparkles size={11} /> Free Consultation
            </span>

            <h3 className="text-[22px] sm:text-[25px] font-bold text-slate-900 leading-tight mb-3 pr-8">
              Let&apos;s Talk About{' '}
              <span style={{
                background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Your Project</span>
            </h3>
            <p className="text-[14px] text-slate-500 mb-7 leading-relaxed">
              Share your details and we&apos;ll get back to you within{' '}
              <span className="font-semibold" style={{ color: '#2563eb' }}>24 hours</span>.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5 text-slate-700">Full Name *</label>
                  <div className="relative">
                    <User size={15} style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', color:'#94a3b8', pointerEvents:'none' }} />
                    <input type="text" placeholder="Enter your name" value={form.name}
                      onChange={handleChange('name')}
                      style={{ ...inputBase, paddingLeft: 36, ...(errors.name ? inputErr : {}) }}
                      onFocus={e => Object.assign(e.target.style, inputFocus)}
                      onBlur={e => Object.assign(e.target.style, errors.name ? inputErr : inputBlur)}
                    />
                  </div>
                  {errors.name && <p style={{ color:'#f87171', fontSize:11, marginTop:5 }}>{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5 text-slate-700">Email Address *</label>
                  <div className="relative">
                    <Mail size={15} style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', color:'#94a3b8', pointerEvents:'none' }} />
                    <input type="email" placeholder="you@email.com" value={form.email}
                      onChange={handleChange('email')}
                      style={{ ...inputBase, paddingLeft: 36, ...(errors.email ? inputErr : {}) }}
                      onFocus={e => Object.assign(e.target.style, inputFocus)}
                      onBlur={e => Object.assign(e.target.style, errors.email ? inputErr : inputBlur)}
                    />
                  </div>
                  {errors.email && <p style={{ color:'#f87171', fontSize:11, marginTop:5 }}>{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5 text-slate-700">Phone Number *</label>
                  <div className="relative">
                    <Phone size={15} style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', color:'#94a3b8', pointerEvents:'none' }} />
                    <input type="tel" placeholder="(+91) 81100 25254" value={form.phone}
                      onChange={handleChange('phone')}
                      style={{ ...inputBase, paddingLeft: 36, ...(errors.phone ? inputErr : {}) }}
                      onFocus={e => Object.assign(e.target.style, inputFocus)}
                      onBlur={e => Object.assign(e.target.style, errors.phone ? inputErr : inputBlur)}
                    />
                  </div>
                  {errors.phone && <p style={{ color:'#f87171', fontSize:11, marginTop:5 }}>{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5 text-slate-700">Service You Need *</label>
                  <ServiceDropdown
                    value={form.service}
                    onChange={s => { setForm(prev => ({ ...prev, service: s })); if (errors.service) setErrors(prev => ({ ...prev, service: '' })) }}
                    inputBase={{ ...inputBase, paddingLeft: 36 }} inputFocus={inputFocus} inputBlur={inputBlur} inputErr={inputErr}
                    error={errors.service} placeholderIcon={LayoutGrid}
                  />
                  {errors.service && <p style={{ color:'#f87171', fontSize:11, marginTop:5 }}>{errors.service}</p>}
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-[13px] font-semibold mb-1.5 text-slate-700">Your Message *</label>
                <div className="relative">
                  <Pencil size={15} style={{ position:'absolute', left:12, top:16, color:'#94a3b8', pointerEvents:'none' }} />
                  <textarea rows={3} placeholder="Tell us about your project, goals or questions..."
                    value={form.message} onChange={handleChange('message')}
                    style={{ ...inputBase, paddingLeft: 36, resize:'none', ...(errors.message ? inputErr : {}) }}
                    onFocus={e => Object.assign(e.target.style, inputFocus)}
                    onBlur={e => Object.assign(e.target.style, errors.message ? inputErr : inputBlur)}
                  />
                </div>
                {errors.message && <p style={{ color:'#f87171', fontSize:11, marginTop:5 }}>{errors.message}</p>}
              </div>

              <div className="flex items-start gap-2.5 mb-6">
                <ShieldCheck size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#2563eb' }} />
                <p className="text-[12.5px] leading-snug">
                  <span className="font-semibold text-slate-800">Your information is safe with us.</span>{' '}
                  <span className="text-slate-400">We&apos;ll never share your details.</span>
                </p>
              </div>

              {errors.submit && <p style={{ color:'#f87171', fontSize:12, textAlign:'center', marginBottom:12 }}>{errors.submit}</p>}

              <button type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-75"
                style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 8px 28px rgba(37,99,235,0.30)' }}
              >
                {loading
                  ? <><Loader2 size={16} className="animate-spin" /> Sending...</>
                  : <><Send size={16} /> Send Message</>
                }
              </button>

              <button type="button" onClick={() => setVisible(false)}
                className="w-full mt-3 text-[12.5px] text-slate-400 hover:text-slate-600 transition-colors bg-transparent border-0 cursor-pointer"
              >
                No thanks, maybe later
              </button>
            </form>
          </div>

          {/* ── RIGHT: Info panel ── */}
          <div className="relative hidden lg:flex flex-col p-6 pt-14 overflow-y-auto"
            style={{ background: 'linear-gradient(160deg,#eef2ff 0%,#e0f2fe 100%)', maxHeight: '92vh' }}>

            {/* Illustration */}
            <div className="relative mx-auto mb-7" style={{ width: 170, height: 140 }}>
              <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(191,219,254,0.7) 0%, transparent 70%)' }} />
              <div className="absolute" style={{ left: 8, bottom: 18, width: 62, height: 44, background: '#fbbf24', borderRadius: 6, transform: 'rotate(-8deg)', boxShadow: '0 8px 20px rgba(251,191,36,0.35)' }}>
                <Mail size={20} style={{ position: 'absolute', top: 12, left: 21, color: '#fff' }} />
              </div>
              <div className="absolute" style={{ right: 22, bottom: 10, width: 78, height: 96, background: '#fff', borderRadius: 12, transform: 'rotate(6deg)', boxShadow: '0 12px 28px rgba(37,99,235,0.20)' }}>
                <FileText size={22} style={{ position: 'absolute', top: 14, left: 14, color: '#2563eb' }} />
                <div style={{ position: 'absolute', top: 46, left: 14, right: 14, height: 3, borderRadius: 2, background: '#dbeafe' }} />
                <div style={{ position: 'absolute', top: 56, left: 14, right: 22, height: 3, borderRadius: 2, background: '#dbeafe' }} />
                <div style={{ position: 'absolute', top: 66, left: 14, right: 30, height: 3, borderRadius: 2, background: '#dbeafe' }} />
              </div>
              <div className="absolute flex items-center justify-center" style={{ top: 4, right: 8, width: 56, height: 56, background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', borderRadius: '50% 50% 4px 50%', boxShadow: '0 10px 24px rgba(37,99,235,0.35)' }}>
                <MessageCircle size={24} style={{ color: '#fff' }} />
              </div>
              <Sparkles size={16} className="absolute" style={{ top: -2, right: -6, color: '#0ea5e9' }} />
            </div>

            <h4 className="text-[17px] font-bold text-slate-900 mb-1">Why talk to us?</h4>
            <div className="h-[3px] w-10 rounded-full mb-6" style={{ background: 'linear-gradient(90deg,#2563eb,#0ea5e9)' }} />

            <div className="flex flex-col gap-5 mb-8">
              {perks.map(({ icon: Icon, color, bg, title, desc }) => (
                <div key={title} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                    <Icon size={17} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-[13.5px] font-bold text-slate-900 leading-snug">{title}</p>
                    <p className="text-[12px] text-slate-500 leading-snug mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-3 p-4 rounded-[16px] bg-white" style={{ boxShadow: '0 4px 16px rgba(37,99,235,0.08)' }}>
              <div className="flex -space-x-2.5 flex-shrink-0">
                {['#2563eb', '#0ea5e9', '#6366f1'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-white"
                    style={{ background: c }}>
                    <User size={13} style={{ color: '#fff' }} />
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-slate-600 leading-snug">
                <span className="font-bold text-slate-900">Trusted by 500+</span> businesses worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
