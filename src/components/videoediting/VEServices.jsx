import { useState } from 'react'
import {
  Sparkles, Package, Briefcase, CalendarDays, Share2, Wind,
  CheckCircle2, ArrowRight, Layers,
} from 'lucide-react'
import brandingImg   from '../../assets/Video-editing/Branding.png'
import productImg    from '../../assets/Video-editing/Product.png'
import corporateImg  from '../../assets/Video-editing/CorporateFilms.png'
import eventImg      from '../../assets/Video-editing/event.png'
import socialImg     from '../../assets/Video-editing/Socialmedia.png'
import droneImg      from '../../assets/Video-editing/Drone.png'

const services = [
  {
    id: 'branding', icon: Sparkles, label: 'Branding Videos', color: '#2563eb', tag: 'Branding',
    imgSrc: brandingImg,
    imgAlt: 'Branding video editing services in Thanjavur',
    desc: [
      'Brand videos are critical to how customers see and trust your brand. We specialise in Branding Videos editing in Thanjavur, crafting creative and impactful content that tells your brand story effectively.',
      'Our cinematic storytelling in Thanjavur techniques forge emotional connections with your audience across every platform.',
    ],
    items: ['Brand Introduction Videos', 'Company Profile Videos', 'Promotional Brand Videos', 'Marketing Campaign Videos', 'Cinematic Storytelling', 'Colour Grading & Mood Design'],
  },
  {
    id: 'product', icon: Package, label: 'Product Videos', color: '#0891b2', tag: 'Product',
    imgSrc: productImg,
    imgAlt: 'Product video editing services in Thanjavur',
    desc: [
      'Product and service videos allow a company to convey what they offer in a clear and engaging way.',
      'As a trusted video editing service provider in Thanjavur, our business video editing services produce effective and engaging visuals that convert viewers into customers and drive measurable sales performance.',
    ],
    items: ['Product Demo Videos', 'Service Explainer Videos', 'Promotional Ads', 'Marketing Video Content', 'Feature Highlight Reels', 'Before & After Showcases'],
  },
  {
    id: 'corporate', icon: Briefcase, label: 'Corporate Films', color: '#059669', tag: 'Corporate',
    imgSrc: corporateImg,
    imgAlt: 'Corporate film editing companies in Thanjavur',
    desc: ['As one of the professional corporate video editing companies in Thanjavur, we deliver polished and powerful corporate films that communicate your company values, culture, and capabilities to clients, investors, and stakeholders with professional precision.'],
    items: ['Company Profile Films', 'Training & HR Videos', 'Investor Pitch Videos', 'Annual Report Videos', 'Internal Communication Videos', 'CEO & Leadership Videos'],
  },
  {
    id: 'event', icon: CalendarDays, label: 'Event Coverage', color: '#d97706', tag: 'Events',
    imgSrc: eventImg,
    imgAlt: 'Event video editing in Thanjavur',
    desc: ['We edit high-quality event footage for corporate events, seminars, conferences, and business functions. We ensure storytelling is smooth and visuals are engaging, preserving the energy and highlights of every occasion for lasting brand memory.'],
    items: ['Event Highlight Videos', 'Corporate Event Coverage', 'Seminar & Conference Editing', 'Live Event Editing', 'Award Ceremony Videos', 'Product Launch Coverage'],
  },
  {
    id: 'social', icon: Share2, label: 'Social Media', color: '#db2777', tag: 'Social',
    imgSrc: socialImg,
    imgAlt: 'Social media video editing services in Thanjavur',
    desc: [
      'Social media videos are a must for digital marketing success. We provide digital marketing video editing in Thanjavur tailored for Instagram, Facebook, and YouTube.',
      'As a leading YouTube video editing agency in Thanjavur and trusted YouTube video editing company in Thanjavur, we deliver video editing services for YouTube in Thanjavur that grow your channel audience.',
    ],
    items: ['Instagram Reels Editing', 'Facebook Video Ads', 'Short Promotional Videos', 'Viral Content Editing', 'YouTube Channel Videos', 'Story & Short-form Content'],
  },
  {
    id: 'drone', icon: Wind, label: 'Drone Aerial', color: '#7c3aed', tag: 'Aerial',
    imgSrc: droneImg,
    imgAlt: 'Drone video editing in Thanjavur',
    desc: [
      'Drone footage gives videos a movie-like feel.',
      'Our drone video editing services in Thanjavur transform raw aerial footage into visually stunning promotional content with professional colour grading, cinematic transitions, and motion effects that elevate your brand.',
    ],
    items: ['Cinematic Colour Grading', 'Motion Effects & Stabilisation', 'Aerial Transition Editing', 'Visual Enhancement & VFX', 'Real Estate Aerial Videos', 'Event Aerial Coverage'],
  },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#0891b2)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function VEServices() {
  const [active, setActive] = useState(0)
  const svc = services[active]

  return (
    <section id="ve-services" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f8fbff 0%, #eff6ff 50%, #f0f9ff 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* ── Double circle – top right ── */}
      <div className="absolute -top-16 -right-16 w-[320px] h-[320px] rounded-full border border-blue-200/30 pointer-events-none animate-[spin_38s_linear_infinite]" />
      <div className="absolute -top-6 -right-6 w-[200px] h-[200px] rounded-full border border-blue-300/20 pointer-events-none" />

      {/* ── Double circle – bottom left ── */}
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full border border-sky-200/25 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-[180px] h-[180px] rounded-full border border-sky-300/18 pointer-events-none animate-[spin_26s_linear_infinite_reverse]" />

      {/* Ambient orb */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.18) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-8 sm:mb-10 reveal">
          <span className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px]
            font-bold uppercase tracking-widest mb-4 sm:mb-5 text-blue-600 bg-white/80 shadow-sm"
            style={{ border: '1px solid rgba(37,99,235,0.18)' }}>
            <Layers size={10} /> Video Editing Services
          </span>
          <h2 className="text-[clamp(22px,4vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-3">
            Complete Video Production &amp;{' '}
            <span style={gradBlue}>Editing Solutions</span>
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-slate-500 max-w-[520px] mx-auto leading-[1.85] px-2 sm:px-0">
            Full-service video editing across every format and platform — from raw footage to polished final cut.
          </p>
        </div>

        {/* ── Horizontal tab pills ── */}
        <div className="reveal flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8">
          {services.map(({ id, icon: Icon, label, color }, i) => {
            const isActive = active === i
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActive(i)}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11.5px] sm:text-[12.5px] font-semibold
                  transition-all duration-300 hover:-translate-y-0.5"
                style={isActive
                  ? { background: `linear-gradient(135deg,${color},${color}cc)`, color: 'white', boxShadow: `0 6px 20px ${color}35` }
                  : { background: 'white', color: '#64748b', border: '1.5px solid #e8edf5', boxShadow: '0 2px 8px rgba(37,99,235,0.05)' }}
              >
                <Icon size={13} style={{ color: isActive ? 'white' : color }} />
                {label}
              </button>
            )
          })}
        </div>

        {/* ── Content panel ── */}
        <div className="rounded-3xl overflow-hidden animate-hero-enter"
          style={{
            background: 'white',
            border: `1.5px solid ${svc.color}18`,
            boxShadow: `0 24px 72px ${svc.color}10, 0 4px 20px rgba(37,99,235,0.06)`,
            transition: 'border-color 0.4s, box-shadow 0.4s',
          }}>

          {/* Top accent */}
          <div className="h-1 w-full" style={{ background: `linear-gradient(90deg,${svc.color},${svc.color}55)` }} />

          <div className="flex flex-col lg:flex-row">

            {/* ── Left: text content ── */}
            <div className="flex-1 min-w-0 p-5 sm:p-8 lg:p-10">

              {/* Service label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg,${svc.color},${svc.color}bb)`, boxShadow: `0 6px 18px ${svc.color}35` }}>
                  <svc.icon size={19} className="text-white" />
                </div>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: svc.color }}>{svc.tag}</span>
                  <h3 className="text-[16px] sm:text-[20px] font-bold text-slate-900 leading-tight">{svc.label}</h3>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 mb-8">
                {svc.desc.map((p, i) => (
                  <p key={i} className="text-[14px] text-slate-600 leading-[1.88]">{p}</p>
                ))}
              </div>

              {/* Feature items — two columns flex */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {svc.items.map(s => (
                  <div key={s}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all duration-200 hover:translate-x-0.5"
                    style={{ background: svc.color + '08', border: `1px solid ${svc.color}18` }}>
                    <CheckCircle2 size={13} style={{ color: svc.color, flexShrink: 0 }} />
                    <span className="text-[12.5px] font-medium text-slate-700">{s}</span>
                  </div>
                ))}
              </div>

              <a href="/ARA-Marketing/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-[13px] font-bold
                  transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: `linear-gradient(135deg,${svc.color},${svc.color}cc)`, boxShadow: `0 6px 20px ${svc.color}30` }}>
                Get {svc.tag} Video Editing <ArrowRight size={14} />
              </a>
            </div>

            {/* ── Right: reduced image ── */}
            <div className="lg:w-[300px] flex-shrink-0 p-4 sm:p-6 flex flex-col gap-4">

              {/* Thumbnail image */}
              <div className="relative rounded-2xl overflow-hidden flex-shrink-0"
                style={{ height: 180, boxShadow: `0 12px 36px ${svc.color}18` }}>
                <img
                  key={svc.id}
                  src={svc.imgSrc}
                  alt={svc.imgAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0"
                  style={{ background: `linear-gradient(160deg, ${svc.color}20 0%, rgba(10,15,40,0.55) 100%)` }} />

                {/* Count badge */}
                <div className="absolute top-3 right-3 flex flex-col items-center px-3 py-2 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.25)' }}>
                  <span className="text-[18px] font-black text-white leading-none">{svc.items.length}</span>
                  <span className="text-[8px] font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.60)' }}>Services</span>
                </div>

                {/* Tag at bottom */}
                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg"
                    style={{ background: svc.color, color: 'white' }}>{svc.tag}</span>
                </div>
              </div>

              {/* Info card */}
              <div className="flex-1 rounded-2xl p-5"
                style={{ background: `linear-gradient(135deg, ${svc.color}06, ${svc.color}02)`, border: `1.5px solid ${svc.color}14` }}>
                <p className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: svc.color }}>Why This Service</p>
                <div className="flex flex-col gap-2.5">
                  {['High-converting visual content', 'Platform-optimised delivery', 'Fast turnaround guaranteed'].map(t => (
                    <div key={t} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: svc.color + '18' }}>
                        <CheckCircle2 size={10} style={{ color: svc.color }} />
                      </div>
                      <span className="text-[12px] text-slate-600">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
