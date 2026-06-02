import { useState } from 'react'
import {
  FileText, Globe2, Cpu, MapPin, Smartphone,
  CheckCircle, Layers, ArrowRight, ChevronRight
} from 'lucide-react'

const tabs = [
  {
    id: 'onpage', icon: FileText, label: 'On-Page SEO', color: '#2563eb', bgLight: '#dbeafe',
    h3: 'On-Page SEO',
    imgSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=380&fit=crop&auto=format&q=80',
    imgAlt: 'On page optimization services in Thanjavur - Ara Discover Marketing',
    desc: [
      'On-page SEO techniques are focused on optimizing the web structure, metadata, headings, web content, images, and user experience of a website.',
      'Are you searching for the best on-page optimization services in Thanjavur? We help businesses to increase their keyword rankings and website engagement.',
      'We are experts in on page optimization in digital marketing in Thanjavur, making sure that websites are optimized for both search engines and users. Our knowledge of on-page SEO and off-page SEO in Thanjavur helps companies to improve search visibility and authority at the same time.',
    ],
    tag: 'Foundation',
    services: ['Keyword optimization', 'Meta title & description optimization', 'Header structure optimization', 'Internal linking strategies', 'SEO content creation', 'URL optimization', 'Image optimization'],
  },
  {
    id: 'offpage', icon: Globe2, label: 'Off-Page SEO', color: '#7c3aed', bgLight: '#ede9fe',
    h3: 'Off-Page SEO',
    imgSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&h=380&fit=crop&auto=format&q=80',
    imgAlt: 'SEO link building services in Thanjavur - Ara Discover Marketing',
    desc: [
      'Off-page SEO is crucial for building website authority and boosting search rankings.',
      'We offer the best SEO link building services in Thanjavur through ethical backlink building strategies that increase domain credibility. We create quality backlinks in SEO in Thanjavur that increases website authority and trust in search engines.',
      'Our off page optimisation in Thanjavur strategies help businesses boost organic rankings and domain strength.',
    ],
    tag: 'Authority',
    services: ['High-authority backlink creation', 'Guest posting strategies', 'Brand mention optimization', 'Social bookmarking', 'Directory submissions', 'Competitor backlink analysis'],
  },
  {
    id: 'technical', icon: Cpu, label: 'Technical SEO', color: '#0891b2', bgLight: '#cffafe',
    h3: 'Technical SEO',
    imgSrc: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=700&h=380&fit=crop&auto=format&q=80',
    imgAlt: 'Technical SEO optimization service in Thanjavur - Ara Discover Marketing',
    desc: [
      'Technical SEO makes sure your website is crawlable, indexable, loads quickly, is mobile-friendly, and is optimized for search engines.',
      "We are a trusted SEO service provider company in Thanjavur, and we ensure websites are up to date with Google's latest technical standards and ranking requirements.",
    ],
    tag: 'Performance',
    services: ['Website speed optimization', 'Core Web Vitals improvement', 'Schema markup implementation', 'XML sitemap optimization', 'Robots.txt optimization', 'HTTPS & security improvements', 'Crawl error fixing'],
  },
  {
    id: 'local', icon: MapPin, label: 'Local SEO', color: '#059669', bgLight: '#d1fae5',
    h3: 'Google Business Profile (Local SEO)',
    imgSrc: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=700&h=380&fit=crop&auto=format&q=80',
    imgAlt: 'Local business SEO services in Thanjavur - Ara Discover Marketing',
    desc: [
      'Local SEO helps businesses get seen in Google Maps and local search results. We offer local business SEO services in Thanjavur and help local businesses get more local customers.',
      'Our local SEO marketing services in Thanjavur can help your business to rank higher in location-based searches.',
      'Our SEO services for local businesses in Thanjavur are ideal for restaurants, clinics, educational institutions, retail stores, and service-based businesses.',
    ],
    tag: 'Local Growth',
    services: ['Google Business Profile optimization', 'Local keyword targeting', 'Location-based SEO strategies', 'Review management', 'Citation building', 'Local content optimization'],
  },
  {
    id: 'mobile', icon: Smartphone, label: 'Mobile SEO', color: '#dc2626', bgLight: '#fee2e2',
    h3: 'Mobile SEO',
    imgSrc: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&h=380&fit=crop&auto=format&q=80',
    imgAlt: 'Mobile SEO in Thanjavur - Ara Discover Marketing',
    desc: [
      'With mobile-first indexing becoming essential, businesses need to make sure their websites are optimized for all types of smartphones and tablets.',
      'Our mobile SEO in Thanjavur services focus on enhancing mobile usability, loading speed, and mobile search rankings.',
      'As one of the best SEO companies in Thanjavur, we assure your website performs seamlessly across all devices.',
    ],
    tag: 'Mobile-First',
    services: ['Responsive website optimization', 'Mobile speed optimization', 'Mobile UX improvements', 'AMP optimization', 'Mobile-friendly design audits'],
  },
]

export default function SEOServices() {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <section id="seo-services" className="py-12 md:py-16 lg:py-24 bg-white relative">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> SEO Services
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Complete SEO{' '}
            <span className="text-gradient-blue">Optimization Services</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            From on-page optimization to mobile SEO, we deliver end-to-end search engine optimization strategies that drive real rankings and organic growth.
          </p>
        </div>

        {/* ── Layout: vertical sidebar + content ── */}
        <div className="reveal flex flex-col md:flex-row gap-4 md:gap-6 items-start">

          {/* Left: vertical tab nav (horizontal scrollable chips on mobile) */}
          <div className="w-full md:w-[200px] lg:w-[220px] flex-shrink-0 flex flex-row md:flex-col gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {tabs.map(({ id, icon: Icon, label, color }, i) => (
              <button
                key={id}
                type="button"
                onClick={() => setActive(i)}
                className={`flex-shrink-0 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2.5 md:py-3.5 rounded-2xl text-left
                  transition-all duration-300 md:w-full whitespace-nowrap
                  ${active === i
                    ? 'text-white shadow-lg'
                    : 'bg-white border border-slate-100 text-slate-600 hover:border-blue-100 hover:bg-blue-50/50'
                  }`}
                style={active === i
                  ? { background: `linear-gradient(135deg, ${color}, ${color}cc)`, boxShadow: `0 8px 24px ${color}30` }
                  : {}
                }
              >
                <div
                  className={`w-7 h-7 md:w-8 md:h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300
                    ${active === i ? 'bg-white/20' : 'bg-blue-50'}`}
                >
                  <Icon size={13} style={active === i ? { color: 'white' } : { color }} />
                </div>
                <span className="text-[12px] md:text-[13px] font-semibold leading-tight">{label}</span>
                {active === i && <ChevronRight size={13} className="ml-auto opacity-70 flex-shrink-0 hidden md:block" />}
              </button>
            ))}
          </div>

          {/* Right: content panel */}
          <div key={tab.id} className="flex-1 min-w-0 bg-white rounded-3xl overflow-hidden border border-slate-100"
            style={{ boxShadow: '0 16px 60px rgba(0,0,0,0.07)' }}>

            {/* Image with overlay */}
            <div className="relative overflow-hidden" style={{ height: 'clamp(160px, 30vw, 220px)' }}>
              <img src={tab.imgSrc} alt={tab.imgAlt} loading="lazy"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0"
                style={{ background: `linear-gradient(90deg, ${tab.color}70 0%, transparent 60%)` }} />
              {/* Tag + H3 */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-7">
                <span className="inline-flex self-start px-3 py-1 text-white text-[10px] font-bold
                  uppercase tracking-wider rounded-xl mb-3"
                  style={{ background: tab.color }}>
                  {tab.tag}
                </span>
                <h3 className="text-[22px] font-bold text-white leading-tight drop-shadow-lg">
                  {tab.h3}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 md:p-6 lg:p-8" style={{ background: `${tab.bgLight}30` }}>
              <div className="flex flex-col gap-2.5 mb-7">
                {tab.desc.map((p, i) => (
                  <p key={i} className="text-[14px] text-slate-600 leading-[1.85]">{p}</p>
                ))}
              </div>

              <ul className="space-y-2.5 mb-8">
                {tab.services.map(s => (
                  <li key={s} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                      style={{ background: tab.color }}>
                      <CheckCircle size={11} />
                    </div>
                    <span className="text-[13px] font-medium text-slate-700">{s}</span>
                  </li>
                ))}
              </ul>

              <a href="/ARA-Marketing/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-white text-[13px]
                  font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: tab.color, boxShadow: `0 4px 16px ${tab.color}30` }}>
                Get {tab.label} Services <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
