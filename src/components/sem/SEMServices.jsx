import { useState } from 'react'
import { Search, Monitor, Play, ShoppingBag, CheckCircle2, Layers, ArrowRight } from 'lucide-react'
import googleImg   from '../../assets/SEM/google.webp'
import displayImg  from '../../assets/SEM/DisplayAdvertising.webp'
import youtubeImg  from '../../assets/SEM/youtube.webp'
import shoppingImg from '../../assets/SEM/Shopping.webp'

const services = [
  {
    id: 'search', icon: Search, label: 'Google Search Ads (PPC)', color: '#2563eb',
    tag: 'Search', tagBg: '#dbeafe',
    imgSrc: googleImg,
    imgAlt: 'Google Search Ads PPC service in Thanjavur',
    desc: 'Google Search Ads allow businesses to show up at the top of search results when customers search for products or services online. Our ppc text ads in Thanjavur focus on driving targeted traffic and maximizing conversions with strategic keyword bidding and ad optimization. We provide effective Google search advertising in Thanjavur to help businesses increase website traffic and customer inquiries. Our expertise in paid search ads on Google in Thanjavur promises businesses to achieve better ad visibility and high ROI. As specialists in ppc search ads in Thanjavur, we create highly optimized search campaigns tailored to business goals and customer intent.',
    items: ['Keyword Research & Bid Strategy', 'Search Campaign Setup', 'Ad Copy Optimization', 'Conversion Tracking', 'PPC Remarketing Campaigns', 'Landing Page Recommendations'],
  },
  {
    id: 'display', icon: Monitor, label: 'Display Advertising', color: '#2563eb',
    tag: 'Display', tagBg: '#e0f2fe',
    imgSrc: displayImg,
    imgAlt: 'Google Display Advertising in Thanjavur',
    desc: 'Display Ads are visually appealing ads that help businesses reach their targeted audiences on websites, apps, and other digital platforms. We offer strategic display campaign services for brand awareness and remarketing. When it comes to Google display advertising companies in Thanjavur, ARA Discover Marketing is the number one choice of businesses to create impactful and performance-driven display advertising campaigns. We also provide Google promotion services in Thanjavur, which helps the brands to increase visibility and customer engagement through display marketing in a strategic manner.',
    items: ['Banner Ad Design', 'Audience Targeting', 'Remarketing Campaigns', 'Display Network Optimization', 'Responsive Display Ads'],
  },
  {
    id: 'youtube', icon: Play, label: 'YouTube Ads', color: '#0ea5e9',
    tag: 'Video', tagBg: '#e0f2fe',
    imgSrc: youtubeImg,
    imgAlt: 'YouTube Ads service in Thanjavur',
    desc: 'Online video advertising is one of the most effective tools to get to an audience. Our YouTube ads in Thanjavur and video ads in Thanjavur help businesses boost brand awareness, customer engagement, and conversions via strategic video campaigns. We specialize in YouTube display advertising in Thanjavur and YouTube search advertising in Thanjavur, to help brands improve video reach and audience engagement. Choose our team for creative, ROI-focused video advertising campaigns.',
    items: ['Skippable Video Ads', 'Non-Skippable Video Ads', 'YouTube Discovery Ads', 'Video Remarketing Campaigns', 'Audience Targeting Strategies'],
  },
  {
    id: 'shopping', icon: ShoppingBag, label: 'Shopping Ads', color: '#2563eb',
    tag: 'E-Commerce', tagBg: '#dbeafe',
    imgSrc: shoppingImg,
    imgAlt: 'Google Shopping Ads in Thanjavur',
    desc: 'Shopping ads let businesses advertise products right on Google search results pages, featuring images, pricing, and product information. With our expertise in shopping ads in Thanjavur, we assist e-commerce companies to enhance product visibility and boost online sales successfully. From Merchant Center setup to product feed optimization, we manage every aspect of your shopping campaigns for maximum return on ad spend.',
    items: ['Google Merchant Center Setup', 'Product Feed Optimization', 'Shopping Campaign Management', 'Product Remarketing Strategies', 'Conversion Tracking & Optimization'],
  },
]

export default function SEMServices() {
  const [active, setActive] = useState(0)
  const svc = services[active]

  return (
    <section id="sem-services" className="relative py-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f8fbff 0%, #eff6ff 60%, #f0f9ff 100%)' }}>

      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

      {/* Orb glows */}
      <div className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.38) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,219,254,0.35) 0%, transparent 70%)' }} />

      {/* Vertical accent lines */}
      <div className="absolute top-0 left-1/4 w-px h-full opacity-[0.08] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, #2563eb, transparent)' }} />
      <div className="absolute top-0 right-1/4 w-px h-full opacity-[0.08] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, #2563eb, transparent)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 text-blue-600
            border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Layers size={11} /> SEM Services
          </span>
          <h2 className="text-[clamp(25px,3.1vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            SEM &amp; Paid Advertising{' '}
            <span className="text-gradient-blue">Services</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Boost your business visibility and conversions with our full-service SEM &amp; paid advertising solutions. Businesses looking for the best SEM agency in Thanjavur rely on our expertise.
          </p>
        </div>

        {/* ── 4 service selector cards ── */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {services.map(({ id, icon: Icon, label, color, tag, tagBg }, i) => (
            <button
              key={id}
              type="button"
              onClick={() => setActive(i)}
              className={`group relative flex flex-col items-start gap-3 p-5 rounded-2xl border
                text-left transition-all duration-300 overflow-hidden
                ${active === i ? '-translate-y-1' : 'bg-white border-slate-100 hover:-translate-y-0.5'}`}
              style={active === i
                ? { background: `linear-gradient(135deg, ${color}12, white)`, borderColor: `${color}35`, boxShadow: 'none' }
                : { boxShadow: 'none' }}
            >
              {/* Active indicator */}
              {active === i && (
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${color}, ${color}55)` }} />
              )}

              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white
                transition-all duration-300 group-hover:scale-105"
                style={active === i
                  ? { background: `linear-gradient(135deg,${color},${color}bb)`, boxShadow: `0 4px 14px ${color}35` }
                  : { background: color + '16', border: `1.5px solid ${color}28` }}>
                <Icon size={17} style={active === i ? { color: 'white' } : { color }} />
              </div>

              <div>
                <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-lg"
                  style={{ background: tagBg, color }}>
                  {tag}
                </span>
                <p className={`text-[12.5px] font-bold mt-1.5 leading-snug transition-colors
                  ${active === i ? 'text-slate-900' : 'text-slate-600'}`}>
                  {label}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* ── Content panel: image right, content left ── */}
        <div key={svc.id}
          className="flex flex-col lg:flex-row rounded-3xl overflow-hidden border border-slate-100/80"
          style={{ boxShadow: '0 24px 70px rgba(37,99,235,0.09)', background: 'white' }}>

          {/* Left: content */}
          <div className="flex-1 min-w-0 p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white"
                style={{ background: `linear-gradient(135deg,${svc.color},${svc.color}bb)`, boxShadow: `0 6px 18px ${svc.color}30` }}>
                <svc.icon size={19} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest"
                  style={{ color: svc.color }}>
                  {svc.tag}
                </span>
                <h3 className="text-[19px] font-bold text-slate-900 leading-tight">{svc.label}</h3>
              </div>
            </div>

            <p className="text-[14px] text-slate-600 leading-[1.85] mb-7">{svc.desc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {svc.items.map(s => (
                <div key={s} className="flex items-center gap-2.5">
                  <CheckCircle2 size={14} style={{ color: svc.color, flexShrink: 0 }} />
                  <span className="text-[13px] font-medium text-slate-700">{s}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center sm:justify-start">
              <a href="/ARA-Marketing/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-[13px]
                  font-bold transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg,${svc.color},${svc.color}cc)`, boxShadow: `0 6px 20px ${svc.color}35` }}>
                Get {svc.label} Services <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="lg:w-[380px] flex-shrink-0 relative overflow-hidden"
            style={{ minHeight: 320 }}>
            <img src={svc.imgSrc} alt={svc.imgAlt} loading="lazy"
              className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0"
              style={{ background: `linear-gradient(180deg, ${svc.color}30 0%, rgba(10,26,52,0.55) 100%)` }} />

            {/* Service count badge */}
            <div className="absolute top-5 right-5 flex flex-col items-center px-4 py-3 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.20)' }}>
              <span className="text-[22px] font-black text-white leading-none">{svc.items.length}</span>
              <span className="text-[9px] font-bold text-white/60 uppercase tracking-wider">Services</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
