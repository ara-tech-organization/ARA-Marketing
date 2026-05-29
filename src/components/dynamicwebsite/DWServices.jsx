import { useState } from 'react'
import {
  Globe, ShoppingCart, GraduationCap, Newspaper, Plug, LayoutDashboard,
  CheckCircle2, ArrowRight, Layers,
} from 'lucide-react'

const services = [
  {
    id: 'cms',
    icon: Globe,
    label: 'CMS-Based Websites',
    color: '#2563eb',
    tag: 'CMS',
    imgSrc: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&auto=format&q=80',
    imgAlt: 'CMS website development in Thanjavur',
    desc: 'We build fully functional CMS-powered websites that give you complete control over your content. As a leading dynamic website development company in Thanjavur, we integrate platforms like WordPress and custom CMS solutions so you can manage pages, blogs, and media effortlessly without any coding knowledge.',
    items: ['WordPress CMS Development', 'Custom CMS Integration', 'Blog & Content Management', 'Admin Panel Setup', 'Role-Based Access Control', 'Content Scheduling System'],
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    label: 'E-Commerce Dynamic Websites',
    color: '#0891b2',
    tag: 'E-Commerce',
    imgSrc: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format&q=80',
    imgAlt: 'E-Commerce dynamic website development in Thanjavur',
    desc: 'Our dynamic e-commerce website development service in Thanjavur delivers powerful online stores with real-time product catalogue management, cart systems, secure payment gateway integration, and inventory management — everything your business needs to sell online at scale.',
    items: ['Product Catalogue Management', 'Shopping Cart & Checkout', 'Payment Gateway Integration', 'Real-Time Inventory System', 'Order Management Dashboard', 'Customer Account Portal'],
  },
  {
    id: 'portal',
    icon: GraduationCap,
    label: 'Portal Websites',
    color: '#2563eb',
    tag: 'Portals',
    imgSrc: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&auto=format&q=80',
    imgAlt: 'Portal website development company in Thanjavur',
    desc: 'We develop feature-rich portal websites for education, healthcare, and service-based industries. From student portals and patient management systems to business dashboards, our dynamic web page development in Thanjavur creates interactive platforms that simplify complex operations.',
    items: ['Student & Learning Portals', 'Healthcare Management Systems', 'Business Client Portals', 'Admission & Enquiry Systems', 'Member Login & Profiles', 'Dynamic Dashboard Views'],
  },
  {
    id: 'news',
    icon: Newspaper,
    label: 'News & Blog Platforms',
    color: '#0891b2',
    tag: 'News & Blog',
    imgSrc: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop&auto=format&q=80',
    imgAlt: 'News website development in Thanjavur',
    desc: 'We build high-performance news and blog platforms for publishers and media houses that need to publish content at scale. Our dynamic website designing company in Thanjavur ensures your platform handles high traffic, instant content updates, multimedia support, and audience engagement tools.',
    items: ['Multi-Author Blog Setup', 'Category & Tag Systems', 'Breaking News Feeds', 'Media Gallery Management', 'Comment & Engagement Tools', 'Newsletter Integration'],
  },
  {
    id: 'api',
    icon: Plug,
    label: 'API-Integrated Websites',
    color: '#2563eb',
    tag: 'API',
    imgSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&auto=format&q=80',
    imgAlt: 'API integrated dynamic website development in Thanjavur',
    desc: 'We design and develop API-integrated dynamic websites that connect seamlessly with third-party services, payment systems, CRMs, maps, social media platforms, and data sources. Our dynamic web design services in Thanjavur ensure your website works as a unified, data-driven ecosystem.',
    items: ['Third-Party API Connections', 'CRM & ERP Integration', 'Maps & Location Services', 'Social Media API Feeds', 'Payment & Fintech APIs', 'Live Data & Analytics Integration'],
  },
  {
    id: 'webapp',
    icon: LayoutDashboard,
    label: 'Custom Web Applications',
    color: '#0891b2',
    tag: 'Web App',
    imgSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format&q=80',
    imgAlt: 'Custom web application development in Thanjavur',
    desc: 'Beyond websites, we build scalable custom web applications tailored to your unique business logic. As a trusted dynamic website development service in Thanjavur, we create interactive web apps with real-time features, secure authentication, and complex business workflows.',
    items: ['SaaS Web Application Development', 'Business Process Automation', 'Real-Time Data Dashboards', 'User Authentication & Roles', 'Booking & Scheduling Systems', 'Interactive Form & Workflow Builders'],
  },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#0891b2)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function DWServices() {
  const [active, setActive] = useState('cms')
  const svc = services.find(s => s.id === active)

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white">

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />
      <div className="hidden sm:block absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full border border-blue-100/60 pointer-events-none animate-[spin_38s_linear_infinite]" />
      <div className="hidden sm:block absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full border border-sky-100/50 pointer-events-none animate-[spin_30s_linear_infinite_reverse]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(147,197,253,0.12) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 text-blue-600 bg-blue-50"
            style={{ border: '1px solid rgba(37,99,235,0.18)' }}>
            <Layers size={10} /> Our Services
          </span>
          <h2 className="text-[clamp(22px,4vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Dynamic Website{' '}
            <span style={gradBlue}>Development Services</span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto">
            From CMS-powered websites to custom web applications, our dynamic website development service in Thanjavur covers every type of modern web solution your business needs to grow online.
          </p>
        </div>

        {/* ── Tab strip ── */}
        <div className="reveal flex flex-wrap gap-2 justify-center mb-8 sm:mb-10">
          {services.map(({ id, label, color, icon: Icon }) => {
            const isActive = active === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActive(id)}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-[12px] font-bold transition-all duration-300"
                style={isActive
                  ? { background: `linear-gradient(135deg,${color},${color}cc)`, color: 'white', boxShadow: `0 6px 18px ${color}35` }
                  : { background: color + '0d', color, border: `1.5px solid ${color}22` }}
              >
                <Icon size={12} />
                {label}
              </button>
            )
          })}
        </div>

        {/* ── Content panel ── */}
        <div key={active} className="reveal rounded-3xl overflow-hidden"
          style={{ border: `1.5px solid ${svc.color}18`, boxShadow: `0 24px 72px ${svc.color}12` }}>
          <div className="flex flex-col lg:flex-row">

            {/* Image */}
            <div className="lg:w-[44%] flex-shrink-0 relative overflow-hidden" style={{ minHeight: 200 }}>
              <img
                src={svc.imgSrc}
                alt={svc.imgAlt}
                loading="lazy"
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s]"
                style={{ minHeight: 200 }}
              />
              <div className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${svc.color}28 0%, transparent 60%)` }} />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white"
                  style={{ background: svc.color, boxShadow: `0 4px 14px ${svc.color}50` }}>
                  <svc.icon size={10} /> {svc.tag}
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 px-5 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 bg-white flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg,${svc.color}15,${svc.color}08)`, border: `1.5px solid ${svc.color}25` }}>
                  <svc.icon size={18} style={{ color: svc.color }} />
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-slate-900 leading-snug">{svc.label}</h3>
              </div>

              <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-[1.85] mb-7">{svc.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                {svc.items.map(item => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={13} style={{ color: svc.color, flexShrink: 0 }} />
                    <span className="text-[12.5px] sm:text-[13px] text-slate-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a href="/ARA-Marketing/contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-white text-[13px] font-bold self-start transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: `linear-gradient(135deg,${svc.color},${svc.color}cc)`, boxShadow: `0 6px 20px ${svc.color}30` }}>
                Get Started <ArrowRight size={13} />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
