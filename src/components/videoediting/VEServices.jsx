import { useState } from 'react'
import {
  Sparkles, Package, Briefcase, CalendarDays, Share2, Wind,
  CheckCircle2, ArrowRight, Layers, ChevronRight,
} from 'lucide-react'

const services = [
  {
    id: 'branding', icon: Sparkles, label: 'Branding Video Editing', color: '#7c3aed', tag: 'Branding',
    imgSrc: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&h=500&fit=crop&auto=format&q=80',
    imgAlt: 'Branding video editing services in Thanjavur',
    desc: 'Brand videos are critical to how customers see and trust your brand. We edit creative and impactful branding videos in Thanjavur that tell your brand story effectively across the internet with cinematic storytelling techniques that forge emotional connections with your audience.',
    items: ['Brand Introduction Videos', 'Company Profile Videos', 'Promotional Brand Videos', 'Marketing Campaign Videos', 'Cinematic Storytelling', 'Colour Grading & Mood Design'],
  },
  {
    id: 'product', icon: Package, label: 'Product & Service Videos', color: '#2563eb', tag: 'Product',
    imgSrc: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&h=500&fit=crop&auto=format&q=80',
    imgAlt: 'Product video editing services in Thanjavur',
    desc: 'Product and service videos allow a company to convey what they offer in a clear and engaging way. Our business video editing services in Thanjavur produce effective and engaging visuals that convert viewers into customers and drive measurable sales performance.',
    items: ['Product Demo Videos', 'Service Explainer Videos', 'Promotional Ads', 'Marketing Video Content', 'Feature Highlight Reels', 'Before & After Showcases'],
  },
  {
    id: 'corporate', icon: Briefcase, label: 'Corporate Film Editing', color: '#0891b2', tag: 'Corporate',
    imgSrc: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1000&h=500&fit=crop&auto=format&q=80',
    imgAlt: 'Corporate film editing companies in Thanjavur',
    desc: 'As one of the professional corporate video editing companies in Thanjavur, we deliver polished and powerful corporate films that communicate your company values, culture, and capabilities to clients, investors, and stakeholders with professional precision.',
    items: ['Company Profile Films', 'Training & HR Videos', 'Investor Pitch Videos', 'Annual Report Videos', 'Internal Communication Videos', 'CEO & Leadership Videos'],
  },
  {
    id: 'event', icon: CalendarDays, label: 'Event & Coverage Videos', color: '#059669', tag: 'Events',
    imgSrc: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&h=500&fit=crop&auto=format&q=80',
    imgAlt: 'Event video editing in Thanjavur',
    desc: 'We edit high-quality event footage for corporate events, seminars, conferences, and business functions. We ensure that storytelling is smooth and visuals are engaging, preserving the energy and highlights of every occasion for lasting brand memory.',
    items: ['Event Highlight Videos', 'Corporate Event Coverage', 'Seminar & Conference Editing', 'Live Event Editing', 'Award Ceremony Videos', 'Product Launch Coverage'],
  },
  {
    id: 'social', icon: Share2, label: 'Social Media Videos', color: '#db2777', tag: 'Social',
    imgSrc: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1000&h=500&fit=crop&auto=format&q=80',
    imgAlt: 'Social media video editing services in Thanjavur',
    desc: 'Social media videos are a must for digital marketing success. We provide digital marketing video editing in Thanjavur tailored for platforms like Instagram, Facebook, and YouTube, helping brands grow their audience with engaging, platform-optimised content that performs.',
    items: ['Instagram Reels Editing', 'Facebook Video Ads', 'Short Promotional Videos', 'Viral Content Editing', 'YouTube Channel Videos', 'Story & Short-form Content'],
  },
  {
    id: 'drone', icon: Wind, label: 'Drone Video Editing', color: '#d97706', tag: 'Aerial',
    imgSrc: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1000&h=500&fit=crop&auto=format&q=80',
    imgAlt: 'Drone video editing in Thanjavur',
    desc: 'Drone footage gives videos a movie-like feel. Our drone video editing services in Thanjavur transform raw aerial footage into visually stunning promotional content with professional colour grading, cinematic transitions, and motion effects that elevate your brand.',
    items: ['Cinematic Colour Grading', 'Motion Effects & Stabilisation', 'Aerial Transition Editing', 'Visual Enhancement & VFX', 'Real Estate Aerial Videos', 'Event Aerial Coverage'],
  },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function VEServices() {
  const [active, setActive] = useState(0)
  const svc = services[active]

  return (
    <section id="ve-services" className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f8fbff 0%, #eff6ff 50%, #f0f9ff 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* ── Double circle – top right ── */}
      <div className="absolute -top-16 -right-16 w-[320px] h-[320px] rounded-full border border-blue-200/30 pointer-events-none" />
      <div className="absolute -top-6 -right-6 w-[200px] h-[200px] rounded-full border border-blue-300/20 pointer-events-none animate-[spin_35s_linear_infinite]" />

      {/* ── Double circle – mid left ── */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-[260px] h-[260px] rounded-full border border-violet-200/25 pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-10 w-[160px] h-[160px] rounded-full border border-violet-300/18 pointer-events-none animate-[spin_22s_linear_infinite_reverse]" />

      {/* Ambient orb */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.20) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-7">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px]
              font-bold uppercase tracking-widest mb-5 text-blue-600 bg-white/80 shadow-sm"
              style={{ border: '1px solid rgba(37,99,235,0.18)' }}>
              <Layers size={11} /> Video Editing Services
            </span>
            <h2 className="text-[clamp(26px,3.5vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight">
              Complete Video Production &amp;{' '}
              <span style={gradBlue}>Editing Solutions</span>
            </h2>
          </div>
          <p className="text-[14px] text-slate-500 lg:max-w-[340px] leading-[1.85]">
            Full-service video editing across every format and platform — from raw footage to polished final cut.
          </p>
        </div>

        {/* ── Main panel: sidebar + content ── */}
        <div className="reveal flex flex-col lg:flex-row rounded-3xl overflow-hidden"
          style={{
            boxShadow: '0 32px 80px rgba(37,99,235,0.12)',
            background: 'white',
            border: '1px solid rgba(37,99,235,0.08)',
          }}>

          {/* ── Left: vertical sidebar ── */}
          <div className="lg:w-[272px] flex-shrink-0 flex flex-col"
            style={{ borderRight: '1px solid #f0f4ff', background: 'linear-gradient(180deg, #fafcff, #f5f8ff)' }}>

            <div className="px-5 pt-6 pb-3">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Our Services</p>
            </div>

            {services.map(({ id, icon: Icon, label, color, tag }, i) => {
              const isActive = active === i
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActive(i)}
                  className="group relative w-full flex items-center gap-3 px-5 py-4 text-left transition-all duration-250"
                  style={{
                    background: isActive ? `linear-gradient(135deg, ${color}10, white)` : 'transparent',
                    borderLeft: isActive ? `3px solid ${color}` : '3px solid transparent',
                    borderBottom: '1px solid #f0f4ff',
                  }}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-250"
                    style={isActive
                      ? { background: `linear-gradient(135deg,${color},${color}bb)`, boxShadow: `0 4px 14px ${color}35` }
                      : { background: color + '10', border: `1px solid ${color}20` }}>
                    <Icon size={15} style={{ color: isActive ? 'white' : color }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="block text-[9px] font-black uppercase tracking-widest mb-0.5"
                      style={{ color: isActive ? color : '#94a3b8' }}>{tag}</span>
                    <span className="block text-[12.5px] font-semibold leading-tight truncate"
                      style={{ color: isActive ? '#0f172a' : '#64748b' }}>{label}</span>
                  </div>

                  <ChevronRight size={12} className="flex-shrink-0 transition-all duration-200"
                    style={{ color: isActive ? color : 'transparent', opacity: isActive ? 1 : 0 }} />
                </button>
              )
            })}

            <div className="mt-auto p-5">
              <a href="#contact"
                className="block text-center px-4 py-3 rounded-2xl text-white text-[12px] font-bold
                  transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 6px 20px rgba(37,99,235,0.28)' }}>
                Get a Free Quote
              </a>
            </div>
          </div>

          {/* ── Right: content panel ── */}
          <div className="flex-1 min-w-0 flex flex-col">

            {/* Image banner */}
            <div key={svc.id + '-img'} className="relative overflow-hidden flex-shrink-0"
              style={{ height: 260 }}>
              <img src={svc.imgSrc} alt={svc.imgAlt} loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0"
                style={{ background: `linear-gradient(180deg, ${svc.color}25 0%, rgba(10,15,40,0.65) 100%)` }} />

              {/* Label overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-8 pb-6 pt-10"
                style={{ background: 'linear-gradient(0deg, rgba(10,15,40,0.80) 0%, transparent 100%)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg,${svc.color},${svc.color}bb)` }}>
                    <svc.icon size={16} className="text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest" style={{ color: `${svc.color}cc` }}>{svc.tag}</span>
                    <span className="block text-[18px] font-bold text-white leading-tight">{svc.label}</span>
                  </div>
                </div>
              </div>

              {/* Count badge */}
              <div className="absolute top-5 right-5 flex flex-col items-center px-4 py-2.5 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.22)' }}>
                <span className="text-[20px] font-black text-white leading-none">{svc.items.length}</span>
                <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.55)' }}>Services</span>
              </div>
            </div>

            {/* Text content */}
            <div key={svc.id + '-content'} className="flex-1 p-8">
              <p className="text-[14px] text-slate-600 leading-[1.88] mb-7">{svc.desc}</p>

              {/* Feature list */}
              <div className="flex flex-col gap-2.5 mb-8">
                {svc.items.map(s => (
                  <div key={s}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 hover:translate-x-1"
                    style={{ background: svc.color + '06', border: `1px solid ${svc.color}12` }}>
                    <CheckCircle2 size={14} style={{ color: svc.color, flexShrink: 0 }} />
                    <span className="text-[13px] font-medium text-slate-700">{s}</span>
                  </div>
                ))}
              </div>

              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-[13px] font-bold
                  transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: `linear-gradient(135deg,${svc.color},${svc.color}cc)`, boxShadow: `0 6px 20px ${svc.color}30` }}>
                Get {svc.tag} Video Editing <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
