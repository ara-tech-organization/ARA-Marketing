import { useEffect, useState, useRef } from 'react'
import { X, User, Mail, Phone, ChevronDown, Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react'

const services = [
  'SEO (Search Engine Optimization)',
  'Social Media Marketing (SMM)',
  'Search Engine Marketing (SEM)',
  'Graphic Design',
  'Video Editing',
  'Website Development',
  'Mobile App Development',
  'Other Digital Marketing',
]

export default function PromoPopup() {
  const [visible, setVisible]     = useState(false)
  const [form, setForm]           = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors]       = useState({})
  const [loading, setLoading]     = useState(false)
  const [submitted, setSubmitted] = useState(false)
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
    await new Promise(r => setTimeout(r, 1600))
    setLoading(false)
    setSubmitted(true)
  }

  const inputBase = {
    width: '100%', background: '#f8fafc',
    border: '1.5px solid #e2e8f0', borderRadius: 10,
    color: '#0f172a', outline: 'none',
    fontFamily: 'inherit', fontSize: 13,
    padding: '9px 12px', transition: 'border-color 0.2s, box-shadow 0.2s',
  }
  const inputFocus = { borderColor: '#2563eb', boxShadow: '0 0 0 3px rgba(37,99,235,0.10)', background: '#fff' }
  const inputBlur  = { borderColor: '#e2e8f0', boxShadow: 'none', background: '#f8fafc' }
  const inputErr   = { borderColor: '#f87171', boxShadow: '0 0 0 3px rgba(248,113,113,0.10)' }

  if (!visible) return null

  return (
    <>
      <style>{`
        @keyframes popup-in {
          from { opacity:0; transform:scale(0.88) translateY(24px); }
          to   { opacity:1; transform:scale(1)    translateY(0); }
        }
        .popup-card { animation: popup-in 0.38s cubic-bezier(.34,1.56,.64,1) both; }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        style={{ background: 'rgba(10,20,50,0.60)', backdropFilter: 'blur(5px)' }}
        onClick={() => setVisible(false)}
      >
        {/* Card */}
        <div
          className="popup-card relative w-full bg-white overflow-hidden"
          style={{
            maxWidth: 480,
            borderRadius: 24,
            boxShadow: '0 32px 80px rgba(0,0,0,0.22), 0 8px 32px rgba(37,99,235,0.12)',
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Top gradient bar */}
          <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg,#2563eb,#0ea5e9,#6366f1)' }} />

          {/* Decorative orb */}
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 70%)' }} />

          {/* Close */}
          <button
            onClick={() => setVisible(false)}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 z-10"
            style={{ background: '#f1f5f9', color: '#64748b' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#e2e8f0' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#f1f5f9' }}
          >
            <X size={15} />
          </button>

          <div className="px-6 pt-5 pb-6">

            {submitted ? (
              /* ── Success state ── */
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'rgba(37,99,235,0.08)', border: '1.5px solid rgba(37,99,235,0.18)' }}>
                  <CheckCircle2 size={30} style={{ color: '#2563eb' }} />
                </div>
                <h3 className="text-[19px] font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed max-w-[300px]">
                  Thank you for reaching out! Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setVisible(false)}
                  className="mt-6 px-7 py-2.5 rounded-full text-[13px] font-bold text-white"
                  style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)' }}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="mb-5 pr-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
                    style={{ background: 'rgba(37,99,235,0.08)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.15)' }}>
                    <Sparkles size={10} /> Free Consultation
                  </span>
                  <h3 className="text-[20px] font-bold text-slate-900 leading-tight">
                    Start a Conversation
                  </h3>
                  <p className="text-[12.5px] text-slate-500 mt-1">
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>

                  {/* Name + Email */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-[10.5px] font-bold uppercase tracking-widest mb-1.5 text-slate-400">Full Name *</label>
                      <div className="relative">
                        <User size={13} style={{ position:'absolute', left:10, top:'50%', transform:'translateY(-50%)', color:'#94a3b8', pointerEvents:'none' }} />
                        <input type="text" placeholder="Your name" value={form.name}
                          onChange={handleChange('name')}
                          style={{ ...inputBase, paddingLeft: 30, ...(errors.name ? inputErr : {}) }}
                          onFocus={e => Object.assign(e.target.style, inputFocus)}
                          onBlur={e => Object.assign(e.target.style, errors.name ? inputErr : inputBlur)}
                        />
                      </div>
                      {errors.name && <p style={{ color:'#f87171', fontSize:10.5, marginTop:4 }}>{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-[10.5px] font-bold uppercase tracking-widest mb-1.5 text-slate-400">Email *</label>
                      <div className="relative">
                        <Mail size={13} style={{ position:'absolute', left:10, top:'50%', transform:'translateY(-50%)', color:'#94a3b8', pointerEvents:'none' }} />
                        <input type="email" placeholder="you@email.com" value={form.email}
                          onChange={handleChange('email')}
                          style={{ ...inputBase, paddingLeft: 30, ...(errors.email ? inputErr : {}) }}
                          onFocus={e => Object.assign(e.target.style, inputFocus)}
                          onBlur={e => Object.assign(e.target.style, errors.email ? inputErr : inputBlur)}
                        />
                      </div>
                      {errors.email && <p style={{ color:'#f87171', fontSize:10.5, marginTop:4 }}>{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone + Service */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-[10.5px] font-bold uppercase tracking-widest mb-1.5 text-slate-400">Phone</label>
                      <div className="relative">
                        <Phone size={13} style={{ position:'absolute', left:10, top:'50%', transform:'translateY(-50%)', color:'#94a3b8', pointerEvents:'none' }} />
                        <input type="tel" placeholder="(+91) 81100 25254" value={form.phone}
                          onChange={handleChange('phone')}
                          style={{ ...inputBase, paddingLeft: 30 }}
                          onFocus={e => Object.assign(e.target.style, inputFocus)}
                          onBlur={e => Object.assign(e.target.style, inputBlur)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10.5px] font-bold uppercase tracking-widest mb-1.5 text-slate-400">Service</label>
                      <div className="relative">
                        <select value={form.service} onChange={handleChange('service')}
                          style={{ ...inputBase, paddingRight: 28, appearance:'none', cursor:'pointer', color: form.service ? '#0f172a' : '#94a3b8' }}
                          onFocus={e => Object.assign(e.target.style, inputFocus)}
                          onBlur={e => Object.assign(e.target.style, inputBlur)}
                        >
                          <option value="" disabled style={{ color:'#94a3b8' }}>Select a service</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <ChevronDown size={13} style={{ position:'absolute', right:10, top:'50%', transform:'translateY(-50%)', color:'#94a3b8', pointerEvents:'none' }} />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <label className="block text-[10.5px] font-bold uppercase tracking-widest mb-1.5 text-slate-400">Your Message *</label>
                    <textarea rows={3} placeholder="Tell us about your project, goals or questions..."
                      value={form.message} onChange={handleChange('message')}
                      style={{ ...inputBase, resize:'none', ...(errors.message ? inputErr : {}) }}
                      onFocus={e => Object.assign(e.target.style, inputFocus)}
                      onBlur={e => Object.assign(e.target.style, errors.message ? inputErr : inputBlur)}
                    />
                    {errors.message && <p style={{ color:'#f87171', fontSize:10.5, marginTop:4 }}>{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-[13.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-75"
                    style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 8px 28px rgba(37,99,235,0.30)' }}
                  >
                    {loading
                      ? <><Loader2 size={16} className="animate-spin" /> Sending...</>
                      : <><Send size={15} /> Send Message</>
                    }
                  </button>

                  <button type="button" onClick={() => setVisible(false)}
                    className="w-full mt-3 text-[11.5px] text-slate-400 hover:text-slate-600 transition-colors bg-transparent border-0 cursor-pointer"
                  >
                    No thanks, maybe later
                  </button>

                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
