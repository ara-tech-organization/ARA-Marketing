import { useState } from 'react'
import {
  Phone, Mail, MapPin, Clock, Send, User,
  ChevronDown, CheckCircle2, ArrowRight, Loader2
} from 'lucide-react'

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

const infoCards = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '(+91) 81100 25254',
    sub: 'Mon – Sat, 9 AM – 7 PM',
    href: 'tel:+918110025254',
    color: '#2563eb',
    glow: 'rgba(37,99,235,0.15)',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'aradiscovermarketing@gmail.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:aradiscovermarketing@gmail.com',
    color: '#0ea5e9',
    glow: 'rgba(14,165,233,0.15)',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '67A, Giri Rd, Srinivasapuram',
    sub: 'Thanjavur, Tamil Nadu 613009',
    href: 'https://maps.google.com/?q=67A,+Giri+Rd,+Srinivasapuram,+Thanjavur,+Tamil+Nadu+613009',
    color: '#0ea5e9',
    glow: 'rgba(14,165,233,0.15)',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Sat: 9:30 AM – 6:30 PM',
    sub: 'Sunday: Closed · 6 days a week',
    href: null,
    color: '#2563eb',
    glow: 'rgba(37,99,235,0.15)',
  },
]

export default function ContactMain() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  })
  const [errors, setErrors]     = useState({})
  const [loading, setLoading]   = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
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
    await new Promise(r => setTimeout(r, 1800))
    setLoading(false)
    setSubmitted(true)
  }

  const inputBase = {
    background: 'white',
    border: '1.5px solid #e2e8f0',
    borderRadius: '12px',
    color: '#0f172a',
    outline: 'none',
    transition: 'border-color 0.22s, box-shadow 0.22s',
    fontFamily: 'inherit',
  }
  const inputErr   = { borderColor: 'rgba(248,113,113,0.7)', boxShadow: '0 0 0 3px rgba(248,113,113,0.1)' }
  const inputFocus = { borderColor: '#0ea5e9', boxShadow: '0 0 0 3px rgba(14,165,233,0.10)' }
  const inputBlur  = { borderColor: '#e2e8f0', boxShadow: 'none' }

  return (
    <section id="contact-form" className="relative py-12 md:py-16 lg:py-20" style={{ background: 'white' }}>

      {/* Subtle bg orbs */}
      <div className="absolute pointer-events-none rounded-full"
        style={{ top: '10%', right: '-5%', width: '480px', height: '480px',
          background: 'radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 65%)' }}
      />
      <div className="absolute pointer-events-none rounded-full"
        style={{ bottom: '5%', left: '-4%', width: '380px', height: '380px',
          background: 'radial-gradient(circle, rgba(186,230,253,0.4) 0%, transparent 65%)' }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 relative z-10">

        {/* ── Info cards row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 reveal">
          {infoCards.map(({ icon: Icon, label, value, sub, href, color, glow }) => {
            const inner = (
              <div className="group relative h-full rounded-[20px] p-6 overflow-hidden cursor-pointer bg-white"
                style={{
                  border: '1px solid #dbeafe',
                  boxShadow: '0 2px 12px rgba(37,99,235,0.06)',
                  transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = color + '55'
                  e.currentTarget.style.boxShadow   = `0 12px 40px ${glow}`
                  e.currentTarget.style.transform   = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#dbeafe'
                  e.currentTarget.style.boxShadow   = '0 2px 12px rgba(37,99,235,0.06)'
                  e.currentTarget.style.transform   = 'translateY(0)'
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[20px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: 0.6 }}
                />

                <div className="w-11 h-11 rounded-[13px] flex items-center justify-center mb-4"
                  style={{ background: color + '12', border: `1px solid ${color}25` }}
                >
                  <Icon size={19} style={{ color }} />
                </div>

                <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2 text-slate-400">
                  {label}
                </p>
                <p className="text-[14px] font-semibold text-slate-900 leading-snug mb-1 break-all">
                  {value}
                </p>
                <p className="text-[12px] text-slate-400">
                  {sub}
                </p>

                {href && (
                  <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight size={14} style={{ color }} />
                  </div>
                )}
              </div>
            )
            return href
              ? <a key={label} href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
              : <div key={label}>{inner}</div>
          })}
        </div>

        {/* ── Map left + Form right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-0">

          {/* LEFT: Google Map */}
          <div className="reveal reveal-left h-full">
            <div className="rounded-[24px] overflow-hidden flex flex-col h-full"
              style={{ border: '1px solid #bfdbfe', boxShadow: '0 8px 32px rgba(37,99,235,0.10)' }}>
              {/* Map header */}
              <div className="flex items-center gap-3 px-6 py-4 bg-white"
                style={{ borderBottom: '1px solid #dbeafe' }}>
                <div className="w-8 h-8 rounded-[9px] flex items-center justify-center"
                  style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                  <MapPin size={15} style={{ color: '#2563eb' }} />
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-slate-900 whitespace-nowrap" style={{ fontWeight: 700 }}>ARA Discover Marketing</p>
                  <p className="text-[11px] truncate text-slate-400">67A, Giri Rd, Srinivasapuram, Thanjavur</p>
                </div>
                <a href="https://maps.google.com/?q=67A,+Giri+Rd,+Srinivasapuram,+Thanjavur,+Tamil+Nadu+613009"
                  target="_blank" rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold transition-all duration-300 hover:bg-blue-700"
                  style={{ background: '#2563eb', color: '#fff', boxShadow: '0 4px 16px rgba(37,99,235,0.3)' }}>
                  <ArrowRight size={12} /> Get Directions
                </a>
              </div>
              {/* Map iframe */}
              <div className="relative flex-1" style={{ minHeight: '320px' }}>
                <iframe
                  title="ARA Discover Marketing - Thanjavur Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0!2d79.1504!3d10.7730!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89cea453039%3A0xe113da9b1f632be4!2s67A%2C%20Giri%20Rd%2C%20Srinivasapuram%2C%20Thanjavur%2C%20Tamil%20Nadu%20613009!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Form card */}
          <div className="reveal reveal-right h-full">
          <div className="relative rounded-[28px] overflow-hidden h-full bg-white"
            style={{
              border: '1px solid #bfdbfe',
              boxShadow: '0 8px 40px rgba(37,99,235,0.10)',
            }}>

            {/* Decorative orbs */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 65%)' }} />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(186,230,253,0.4) 0%, transparent 65%)' }} />
            {/* Dot grid */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            {/* ── Form ── */}
            <div className="relative z-10 p-4 sm:p-6 md:p-7 lg:p-10">
              <>
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                        style={{ background: 'rgba(37,99,235,0.10)', border: '1px solid rgba(37,99,235,0.2)' }}>
                        <CheckCircle2 size={32} style={{ color: '#2563eb' }} />
                      </div>
                      <h3 className="text-[21px] font-bold text-slate-900 mb-3" style={{ fontWeight: 700 }}>
                        Message Sent Successfully
                      </h3>
                      <p className="text-[14px] leading-[1.75] max-w-[400px] text-slate-500">
                        Thank you for reaching out! Our team will get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', service:'', message:'' }) }}
                        className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: '#2563eb', boxShadow: '0 8px 24px rgba(37,99,235,0.28)' }}
                      >
                        Send Another Message <ArrowRight size={14} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <h2 className="text-[clamp(17px,2.2vw,23px)] font-bold text-slate-900 leading-tight tracking-[-0.5px]"
                          style={{ fontWeight: 700 }}>
                          Start a Conversation
                        </h2>
                        <p className="text-[13px] mt-1.5 text-slate-500">
                          Fill out the form below and we&apos;ll get back to you within 24 hours.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                          {/* Name */}
                          <div>
                            <label className="block text-[11px] font-bold mb-1.5 uppercase tracking-[0.12em] text-slate-500">
                              Full Name *
                            </label>
                            <div className="relative">
                              <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                              <input type="text" placeholder="Your full name" value={form.name}
                                onChange={handleChange('name')}
                                className="w-full pl-10 pr-4 py-3 text-[13.5px] placeholder:text-slate-400"
                                style={{ ...inputBase, ...(errors.name ? inputErr : {}) }}
                                onFocus={e => Object.assign(e.target.style, inputFocus)}
                                onBlur={e => Object.assign(e.target.style, errors.name ? inputErr : inputBlur)} />
                            </div>
                            {errors.name && <p className="text-[11px] mt-1.5" style={{ color: '#f87171' }}>{errors.name}</p>}
                          </div>

                          {/* Email */}
                          <div>
                            <label className="block text-[11px] font-bold mb-1.5 uppercase tracking-[0.12em] text-slate-500">
                              Email Address *
                            </label>
                            <div className="relative">
                              <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                              <input type="email" placeholder="your@email.com" value={form.email}
                                onChange={handleChange('email')}
                                className="w-full pl-10 pr-4 py-3 text-[13.5px] placeholder:text-slate-400"
                                style={{ ...inputBase, ...(errors.email ? inputErr : {}) }}
                                onFocus={e => Object.assign(e.target.style, inputFocus)}
                                onBlur={e => Object.assign(e.target.style, errors.email ? inputErr : inputBlur)} />
                            </div>
                            {errors.email && <p className="text-[11px] mt-1.5" style={{ color: '#f87171' }}>{errors.email}</p>}
                          </div>

                          {/* Phone */}
                          <div>
                            <label className="block text-[11px] font-bold mb-1.5 uppercase tracking-[0.12em] text-slate-500">
                              Phone Number
                            </label>
                            <div className="relative">
                              <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                              <input type="tel" placeholder="(+91) 81100 25254" value={form.phone}
                                onChange={handleChange('phone')}
                                className="w-full pl-10 pr-4 py-3 text-[13.5px] placeholder:text-slate-400"
                                style={inputBase}
                                onFocus={e => Object.assign(e.target.style, inputFocus)}
                                onBlur={e => Object.assign(e.target.style, inputBlur)} />
                            </div>
                          </div>

                          {/* Service */}
                          <div>
                            <label className="block text-[11px] font-bold mb-1.5 uppercase tracking-[0.12em] text-slate-500">
                              Service Interested In
                            </label>
                            <div className="relative">
                              <select value={form.service} onChange={handleChange('service')}
                                className="w-full pl-4 pr-10 py-3 text-[13.5px] appearance-none cursor-pointer"
                                style={{ ...inputBase, color: form.service ? '#0f172a' : '#94a3b8' }}
                                onFocus={e => Object.assign(e.target.style, inputFocus)}
                                onBlur={e => Object.assign(e.target.style, inputBlur)}
                              >
                                <option value="" disabled style={{ background: 'white', color: '#94a3b8' }}>Select a service</option>
                                {services.map(s => <option key={s} value={s} style={{ background: 'white', color: '#0f172a' }}>{s}</option>)}
                              </select>
                              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                            </div>
                          </div>
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                          <label className="block text-[11px] font-bold mb-1.5 uppercase tracking-[0.12em] text-slate-500">
                            Your Message *
                          </label>
                          <textarea rows={4} placeholder="Tell us about your project, goals or questions..."
                            value={form.message} onChange={handleChange('message')}
                            className="w-full px-4 py-3 text-[13.5px] resize-none placeholder:text-slate-400"
                            style={{ ...inputBase, ...(errors.message ? inputErr : {}) }}
                            onFocus={e => Object.assign(e.target.style, inputFocus)}
                            onBlur={e => Object.assign(e.target.style, errors.message ? inputErr : inputBlur)} />
                          {errors.message && <p className="text-[11px] mt-1.5" style={{ color: '#f87171' }}>{errors.message}</p>}
                        </div>

                        <button type="submit" disabled={loading}
                          className="btn-glow w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full text-[14px] font-bold text-white transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed hover:-translate-y-0.5"
                          style={{ background: loading ? '#3b82f6' : 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 8px 32px rgba(37,99,235,0.28)' }}
                        >
                          {loading ? <><Loader2 size={17} className="animate-spin" /> Sending Message...</> : <><Send size={16} /> Send Message</>}
                        </button>
                      </form>
                    </>
                  )}
              </>
            </div>
          </div>
          </div>
        </div>

      </div>
    </section>
  )
}
