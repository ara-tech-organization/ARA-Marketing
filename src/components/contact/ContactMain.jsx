import { useState } from 'react'
import {
  Phone, Mail, MapPin, Clock, Send, User, MessageSquare,
  ChevronDown, CheckCircle2, ArrowRight, Globe2, Link2,
  Camera, MessageCircle, Loader2, Play, Zap
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
    value: '+91 98765 43210',
    sub: 'Mon – Sat, 9 AM – 7 PM',
    href: 'tel:+919876543210',
    color: '#2563eb',
    glow: 'rgba(37,99,235,0.35)',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'aradicovertech02@gmail.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:aradicovertech02@gmail.com',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.35)',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Thanjavur, Tamil Nadu',
    sub: 'India — 613 001',
    href: 'https://maps.google.com/?q=Thanjavur,Tamil+Nadu,India',
    color: '#0891b2',
    glow: 'rgba(8,145,178,0.35)',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Sat: 9:30 AM – 6:30 PM',
    sub: 'Sunday: Closed · 6 days a week',
    href: null,
    color: '#059669',
    glow: 'rgba(5,150,105,0.35)',
  },
]

const socials = [
  { icon: Globe2,       label: 'Website',   href: '#' },
  { icon: Camera,       label: 'Instagram',  href: '#' },
  { icon: Link2,        label: 'LinkedIn',   href: '#' },
  { icon: MessageCircle,label: 'WhatsApp',   href: '#' },
]

export default function ContactMain() {
  const [tab, setTab] = useState('info')
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
    background: 'transparent',
    border: '1.5px solid rgba(255,255,255,0.22)',
    borderRadius: '12px',
    color: '#fff',
    outline: 'none',
    transition: 'border-color 0.22s, box-shadow 0.22s',
    fontFamily: 'inherit',
  }
  const inputErr = { borderColor: 'rgba(248,113,113,0.7)', boxShadow: '0 0 0 3px rgba(248,113,113,0.1)' }
  const inputFocus = { borderColor: '#3b82f6', boxShadow: '0 0 0 3px rgba(59,130,246,0.18)' }
  const inputBlur = { borderColor: 'rgba(255,255,255,0.22)', boxShadow: 'none' }

  return (
    <section className="relative py-20" style={{ background: '#071a36' }}>

      {/* Subtle mid-page orb */}
      <div className="absolute pointer-events-none rounded-full"
        style={{ top: '10%', right: '-5%', width: '480px', height: '480px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 65%)' }}
      />
      <div className="absolute pointer-events-none rounded-full"
        style={{ bottom: '5%', left: '-4%', width: '380px', height: '380px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)' }}
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-7 relative z-10">

        {/* ── Info cards row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 reveal">
          {infoCards.map(({ icon: Icon, label, value, sub, href, color, glow }) => {
            const inner = (
              <div className="group relative h-full rounded-[20px] p-6 overflow-hidden cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = color + '55'
                  e.currentTarget.style.boxShadow   = `0 12px 40px ${glow}`
                  e.currentTarget.style.transform   = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.boxShadow   = 'none'
                  e.currentTarget.style.transform   = 'translateY(0)'
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[20px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: 0.6 }}
                />

                <div className="w-11 h-11 rounded-[13px] flex items-center justify-center mb-4"
                  style={{ background: color + '18', border: `1px solid ${color}30` }}
                >
                  <Icon size={19} style={{ color }} />
                </div>

                <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2"
                  style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {label}
                </p>
                <p className="text-[14px] font-semibold text-white leading-snug mb-1 break-all">
                  {value}
                </p>
                <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
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

        {/* ── Map left + Tabbed card right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 mb-0">

          {/* LEFT: Google Map */}
          <div className="reveal reveal-left h-full">
            <div className="rounded-[24px] overflow-hidden flex flex-col h-full"
              style={{ border: '1px solid rgba(37,99,235,0.2)', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}>
              {/* Map header */}
              <div className="flex items-center gap-3 px-6 py-4"
                style={{ background: 'rgba(10,26,52,0.9)', borderBottom: '1px solid rgba(37,99,235,0.15)' }}>
                <div className="w-8 h-8 rounded-[9px] flex items-center justify-center"
                  style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.25)' }}>
                  <MapPin size={15} style={{ color: '#60a5fa' }} />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-white" style={{ fontWeight: 700 }}>ARA Discover Marketing</p>
                  <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>Thanjavur, Tamil Nadu, India</p>
                </div>
                <a href="https://maps.google.com/?q=Thanjavur,Tamil+Nadu,India"
                  target="_blank" rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold transition-all duration-300 hover:bg-blue-500"
                  style={{ background: '#2563eb', color: '#fff', boxShadow: '0 4px 16px rgba(37,99,235,0.3)' }}>
                  <ArrowRight size={12} /> Get Directions
                </a>
              </div>
              {/* Map iframe */}
              <div className="relative flex-1" style={{ minHeight: '320px' }}>
                <iframe
                  title="ARA Discover Marketing - Thanjavur Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62703.20254697282!2d79.10764249999999!3d10.78523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89cea453039%3A0xe113da9b1f632be4!2sThanjavur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                  width="100%" height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(0.85) brightness(0.9)' }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(5,13,26,0.08)' }} />
              </div>
            </div>
          </div>

          {/* RIGHT: Tabbed card */}
          <div className="reveal reveal-right h-full">
          <div className="relative rounded-[28px] overflow-hidden h-full"
            style={{
              background: 'rgba(7,22,50,0.97)',
              border: '1px solid rgba(37,99,235,0.2)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.55)',
            }}>

            {/* Decorative orbs */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 65%)' }} />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)' }} />
            {/* Dot grid */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            {/* ── Tab bar ── */}
            <div className="relative z-10 flex items-center gap-2 p-5 pb-0">
              {[
                { id: 'info', label: 'Contact Info', icon: Phone },
                { id: 'form', label: 'Send Message', icon: Send },
              ].map(({ id, label, icon: Icon }) => {
                const active = tab === id
                return (
                  <button
                    key={id}
                    onClick={() => setTab(id)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-t-[14px] text-[13px] font-semibold transition-all duration-250"
                    style={{
                      background: active ? 'rgba(37,99,235,0.18)' : 'transparent',
                      color: active ? '#93c5fd' : 'rgba(255,255,255,0.35)',
                      borderBottom: active ? '2px solid #3b82f6' : '2px solid transparent',
                    }}
                  >
                    <Icon size={14} />
                    {label}
                  </button>
                )
              })}
              {/* divider line */}
              <div className="flex-1 h-px mt-1 self-end mb-[2px]"
                style={{ background: 'rgba(255,255,255,0.07)' }} />
            </div>

            {/* ── Tab content ── */}
            <div className="relative z-10 p-7 sm:p-10">

              {/* INFO TAB — Bento grid */}
              {tab === 'info' && (
                <div className="flex flex-col gap-3">

                  {/* Bento: Brand (row-span 2) + 4 contact cells */}
                  <div className="grid gap-3" style={{ gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto auto' }}>

                    {/* Brand cell — spans 2 rows */}
                    <div className="rounded-2xl p-5 flex flex-col"
                      style={{ background: 'linear-gradient(145deg, rgba(37,99,235,0.22) 0%, rgba(99,102,241,0.15) 100%)', border: '1px solid rgba(37,99,235,0.3)', gridRow: '1 / 3', gridColumn: '1 / 2' }}>
                      <div className="w-10 h-10 rounded-[12px] flex items-center justify-center mb-4"
                        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}>
                        <Zap size={18} className="text-white" />
                      </div>
                      <h3 className="text-[16px] font-bold text-white leading-snug mb-1.5" style={{ fontWeight: 700 }}>
                        ARA Discover<br />
                        <span style={{ color: '#93c5fd' }}>Marketing</span>
                      </h3>
                      <p className="text-[12px] leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        AI-driven digital marketing, web development and branding solutions.
                      </p>
                      <div className="mt-auto">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-4"
                          style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                          <span className="text-[10px] font-bold" style={{ color: '#34d399' }}>Available Mon–Sat</span>
                        </div>
                        <div className="flex gap-2">
                          {[
                            { icon: Globe2,        label: 'Website',   color: '#60a5fa' },
                            { icon: Camera,        label: 'Instagram', color: '#f472b6' },
                            { icon: Link2,         label: 'LinkedIn',  color: '#38bdf8' },
                            { icon: MessageCircle, label: 'WhatsApp',  color: '#34d399' },
                          ].map(({ icon: Icon, label, color }) => (
                            <a key={label} href="#" aria-label={label}
                              className="w-8 h-8 rounded-[9px] flex items-center justify-center transition-all duration-200"
                              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.35)' }}
                              onMouseEnter={e => { e.currentTarget.style.background = color + '25'; e.currentTarget.style.borderColor = color + '55'; e.currentTarget.style.color = color; e.currentTarget.style.transform = 'translateY(-2px)' }}
                              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; e.currentTarget.style.transform = 'translateY(0)' }}
                            >
                              <Icon size={13} />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <a href="tel:+919876543210"
                      className="group rounded-2xl p-4 flex flex-col gap-2 transition-all duration-250"
                      style={{ background: 'rgba(96,165,250,0.07)', border: '1px solid rgba(96,165,250,0.18)' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(96,165,250,0.14)'; e.currentTarget.style.borderColor = 'rgba(96,165,250,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(96,165,250,0.07)'; e.currentTarget.style.borderColor = 'rgba(96,165,250,0.18)'; e.currentTarget.style.transform = 'translateY(0)' }}
                    >
                      <div className="w-8 h-8 rounded-[10px] flex items-center justify-center"
                        style={{ background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.3)' }}>
                        <Phone size={14} style={{ color: '#60a5fa' }} />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.12em] mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Phone</p>
                        <p className="text-[13px] font-bold text-white leading-tight">+91 98765 43210</p>
                        <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Mon–Sat, 9:30–6:30</p>
                      </div>
                      <ArrowRight size={12} className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#60a5fa' }} />
                    </a>

                    {/* Email */}
                    <a href="mailto:aradicovertech02@gmail.com"
                      className="group rounded-2xl p-4 flex flex-col gap-2 transition-all duration-250"
                      style={{ background: 'rgba(167,139,250,0.07)', border: '1px solid rgba(167,139,250,0.18)' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(167,139,250,0.14)'; e.currentTarget.style.borderColor = 'rgba(167,139,250,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(167,139,250,0.07)'; e.currentTarget.style.borderColor = 'rgba(167,139,250,0.18)'; e.currentTarget.style.transform = 'translateY(0)' }}
                    >
                      <div className="w-8 h-8 rounded-[10px] flex items-center justify-center"
                        style={{ background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.3)' }}>
                        <Mail size={14} style={{ color: '#a78bfa' }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[0.12em] mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Email</p>
                        <p className="text-[11px] font-bold text-white truncate">aradicovertech02</p>
                        <p className="text-[11px] font-bold text-white truncate">@gmail.com</p>
                      </div>
                      <ArrowRight size={12} className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#a78bfa' }} />
                    </a>

                    {/* Address */}
                    <div className="rounded-2xl p-4 flex flex-col gap-2"
                      style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.18)' }}>
                      <div className="w-8 h-8 rounded-[10px] flex items-center justify-center"
                        style={{ background: 'rgba(56,189,248,0.15)', border: '1px solid rgba(56,189,248,0.3)' }}>
                        <MapPin size={14} style={{ color: '#38bdf8' }} />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.12em] mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Address</p>
                        <p className="text-[13px] font-bold text-white">Thanjavur</p>
                        <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Tamil Nadu — 613 001</p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="rounded-2xl p-4 flex flex-col gap-2"
                      style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.18)' }}>
                      <div className="w-8 h-8 rounded-[10px] flex items-center justify-center"
                        style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)' }}>
                        <Clock size={14} style={{ color: '#34d399' }} />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.12em] mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Hours</p>
                        <p className="text-[12px] font-bold text-white">Mon–Sat 9:30–6:30</p>
                        <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Sunday Closed</p>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Why Choose Us full width */}
                  <div className="rounded-2xl p-5"
                    style={{ background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.18)' }}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] mb-3"
                      style={{ color: 'rgba(255,255,255,0.3)' }}>Why Choose Us</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                      {[
                        'Free initial consultation',
                        'No long-term contract lock-in',
                        'Dedicated account manager',
                        'AI-powered marketing strategies',
                        'Transparent monthly reporting',
                      ].map(item => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 size={12} style={{ color: '#60a5fa', flexShrink: 0 }} />
                          <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.6)' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setTab('form')}
                    className="btn-glow w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)', boxShadow: '0 8px 28px rgba(37,99,235,0.35)' }}
                  >
                    <MessageSquare size={15} /> Send Us a Message
                  </button>
                </div>
              )}

              {/* FORM TAB */}
              {tab === 'form' && (
                <>
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                        style={{ background: 'rgba(5,150,105,0.15)', border: '1px solid rgba(5,150,105,0.3)' }}>
                        <CheckCircle2 size={32} style={{ color: '#10b981' }} />
                      </div>
                      <h3 className="text-[22px] font-bold text-white mb-3" style={{ fontWeight: 700 }}>
                        Message Sent Successfully
                      </h3>
                      <p className="text-[14px] leading-[1.75] max-w-[400px]"
                        style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Thank you for reaching out! Our team will get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', service:'', message:'' }) }}
                        className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: '#2563eb', boxShadow: '0 8px 24px rgba(37,99,235,0.35)' }}
                      >
                        Send Another Message <ArrowRight size={14} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <h2 className="text-[clamp(18px,2.5vw,24px)] font-bold text-white leading-tight tracking-[-0.5px]"
                          style={{ fontWeight: 700 }}>
                          Start a Conversation
                        </h2>
                        <p className="text-[13px] mt-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Fill out the form below and we&apos;ll get back to you within 24 hours.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                          {/* Name */}
                          <div>
                            <label className="block text-[11px] font-bold mb-1.5 uppercase tracking-[0.12em]"
                              style={{ color: 'rgba(255,255,255,0.55)' }}>
                              Full Name <span style={{ color: '#f87171' }}>*</span>
                            </label>
                            <div className="relative">
                              <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                                style={{ color: 'rgba(255,255,255,0.25)' }} />
                              <input type="text" placeholder="Your full name" value={form.name}
                                onChange={handleChange('name')}
                                className="w-full pl-10 pr-4 py-3 text-[13.5px] placeholder:text-white/20"
                                style={{ ...inputBase, ...(errors.name ? inputErr : {}) }}
                                onFocus={e => Object.assign(e.target.style, inputFocus)}
                                onBlur={e => Object.assign(e.target.style, errors.name ? inputErr : inputBlur)} />
                            </div>
                            {errors.name && <p className="text-[11px] mt-1.5" style={{ color: '#f87171' }}>{errors.name}</p>}
                          </div>

                          {/* Email */}
                          <div>
                            <label className="block text-[11px] font-bold mb-1.5 uppercase tracking-[0.12em]"
                              style={{ color: 'rgba(255,255,255,0.55)' }}>
                              Email Address <span style={{ color: '#f87171' }}>*</span>
                            </label>
                            <div className="relative">
                              <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                                style={{ color: 'rgba(255,255,255,0.25)' }} />
                              <input type="email" placeholder="your@email.com" value={form.email}
                                onChange={handleChange('email')}
                                className="w-full pl-10 pr-4 py-3 text-[13.5px] placeholder:text-white/20"
                                style={{ ...inputBase, ...(errors.email ? inputErr : {}) }}
                                onFocus={e => Object.assign(e.target.style, inputFocus)}
                                onBlur={e => Object.assign(e.target.style, errors.email ? inputErr : inputBlur)} />
                            </div>
                            {errors.email && <p className="text-[11px] mt-1.5" style={{ color: '#f87171' }}>{errors.email}</p>}
                          </div>

                          {/* Phone */}
                          <div>
                            <label className="block text-[11px] font-bold mb-1.5 uppercase tracking-[0.12em]"
                              style={{ color: 'rgba(255,255,255,0.55)' }}>
                              Phone Number
                            </label>
                            <div className="relative">
                              <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                                style={{ color: 'rgba(255,255,255,0.25)' }} />
                              <input type="tel" placeholder="+91 98765 43210" value={form.phone}
                                onChange={handleChange('phone')}
                                className="w-full pl-10 pr-4 py-3 text-[13.5px] placeholder:text-white/20"
                                style={inputBase}
                                onFocus={e => Object.assign(e.target.style, inputFocus)}
                                onBlur={e => Object.assign(e.target.style, inputBlur)} />
                            </div>
                          </div>

                          {/* Service */}
                          <div>
                            <label className="block text-[11px] font-bold mb-1.5 uppercase tracking-[0.12em]"
                              style={{ color: 'rgba(255,255,255,0.55)' }}>
                              Service Interested In
                            </label>
                            <div className="relative">
                              <select value={form.service} onChange={handleChange('service')}
                                className="w-full pl-4 pr-10 py-3 text-[13.5px] appearance-none cursor-pointer"
                                style={{ ...inputBase, color: form.service ? '#fff' : 'rgba(255,255,255,0.2)' }}
                                onFocus={e => Object.assign(e.target.style, inputFocus)}
                                onBlur={e => Object.assign(e.target.style, inputBlur)}
                              >
                                <option value="" disabled style={{ background: '#0d1f40', color: '#94a3b8' }}>Select a service</option>
                                {services.map(s => <option key={s} value={s} style={{ background: '#0d1f40', color: '#fff' }}>{s}</option>)}
                              </select>
                              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                                style={{ color: 'rgba(255,255,255,0.3)' }} />
                            </div>
                          </div>
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                          <label className="block text-[11px] font-bold mb-1.5 uppercase tracking-[0.12em]"
                            style={{ color: 'rgba(255,255,255,0.55)' }}>
                            Your Message <span style={{ color: '#f87171' }}>*</span>
                          </label>
                          <textarea rows={4} placeholder="Tell us about your project, goals or questions..."
                            value={form.message} onChange={handleChange('message')}
                            className="w-full px-4 py-3 text-[13.5px] resize-none placeholder:text-white/20"
                            style={{ ...inputBase, ...(errors.message ? inputErr : {}) }}
                            onFocus={e => Object.assign(e.target.style, inputFocus)}
                            onBlur={e => Object.assign(e.target.style, errors.message ? inputErr : inputBlur)} />
                          {errors.message && <p className="text-[11px] mt-1.5" style={{ color: '#f87171' }}>{errors.message}</p>}
                        </div>

                        <button type="submit" disabled={loading}
                          className="btn-glow w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full text-[14px] font-bold text-white transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed hover:-translate-y-0.5"
                          style={{ background: loading ? '#1d4ed8' : 'linear-gradient(135deg, #2563eb, #4f46e5)', boxShadow: '0 8px 32px rgba(37,99,235,0.4)' }}
                        >
                          {loading ? <><Loader2 size={17} className="animate-spin" /> Sending Message...</> : <><Send size={16} /> Send Message</>}
                        </button>
                      </form>
                    </>
                  )}
                </>
              )}

            </div>
          </div>
          </div>{/* end right column */}
        </div>{/* end grid */}

      </div>
    </section>
  )
}
