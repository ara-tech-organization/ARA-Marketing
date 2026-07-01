import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../../assets/Logo.png'
import {
  ArrowRight, Menu, X, ChevronDown,
  Search, Share2, TrendingUp, Palette, Video, Sparkles,
  Layout, Zap, Globe, ShoppingCart, Building2, Code2, Smartphone,
  Info, Phone, Tag
} from 'lucide-react'

const digitalMarketingItems = [
  { href: '/services/best-seo-company-thanjavur', label: 'SEO',            icon: Search,     desc: 'Search Engine Optimization',    isRoute: true  },
  { href: '/services/social-media-marketing',     label: 'SMM',            icon: Share2,     desc: 'Social Media Marketing',        isRoute: true  },
  { href: '/services/best-sem-company-thanjavur', label: 'SEM',            icon: TrendingUp, desc: 'Search Engine Marketing',       isRoute: true  },
  { href: '/services/graphic-design',             label: 'Graphic Design', icon: Palette,    desc: 'Creative Visual Design',        isRoute: true  },
  { href: '/services/video-editing',              label: 'Video Editing',  icon: Video,      desc: 'Professional Video Production', isRoute: true  },
  { href: '/services/other-digital-marketing-services-thanjavur', label: 'Other Services', icon: Sparkles, desc: 'Email, Influencer & SMS', isRoute: true },
]

const webDesignItems = [
  { href: '/services/static-website-development',    label: 'Static Website',    icon: Layout,       desc: 'Fast & lightweight sites',    isRoute: true },
  { href: '/services/dynamic-website-development',   label: 'Dynamic Website',   icon: Zap,          desc: 'Interactive web experiences', isRoute: true },
  { href: '/services/cms-website-development',       label: 'WordPress Website', icon: Globe,        desc: 'Flexible CMS solutions',      isRoute: true },
  { href: '/services/ecommerce-website-development', label: 'Ecommerce Website', icon: ShoppingCart, desc: 'Online store solutions',       isRoute: true },
  { href: '/services/enterprise-website-development',label: 'Enterprise Website',icon: Building2,    desc: 'Large-scale web platforms',   isRoute: true },
  { href: '/services/web-application-development',   label: 'Web App',           icon: Code2,        desc: 'Custom web applications',     isRoute: true },
  { href: '/services/mobile-application-development',label: 'Mobile App',        icon: Smartphone,   desc: 'iOS & Android apps',          isRoute: true },
]

function DropdownPanel({ items, title, onClose, pathname }) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 z-50 rounded-xl"
      style={{
        minWidth: 460,
        background: '#0d1f3c',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.20)',
      }}
    >
      <div className="px-5 pt-4 pb-2 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span className="text-[11px] font-bold uppercase tracking-widest"
          style={{ color: '#93c5fd' }}>{title}</span>
        <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.30)' }}>{items.length} services</span>
      </div>

      <div className="grid grid-cols-2 gap-2 p-3">
        {items.map(({ href, label, icon: Icon, desc, isRoute: itemIsRoute }) => {
          const isItemActive = itemIsRoute !== false && pathname === href
          const cardContent = (
            <>
              <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
                style={{
                  background: isItemActive ? '#2563eb' : 'rgba(37,99,235,0.20)',
                  color: isItemActive ? '#fff' : '#93c5fd',
                }}>
                <Icon size={17} />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-1.5">
                  <span className="block text-[13px] font-semibold leading-tight truncate"
                    style={{ color: isItemActive ? '#fff' : 'rgba(255,255,255,0.88)' }}>
                    {label}
                  </span>
                  {isItemActive
                    ? <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    : <ArrowRight size={11} className="opacity-0 group-hover:opacity-50 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" style={{ color: '#93c5fd' }} />
                  }
                </span>
                <span className="block text-[11px] mt-0.5 leading-tight truncate"
                  style={{ color: 'rgba(255,255,255,0.35)' }}>{desc}</span>
              </span>
            </>
          )
          const sharedClass = "group flex items-center gap-3.5 p-3.5 rounded-xl transition-all duration-200 cursor-pointer"
          const activeStyle  = { background: 'rgba(37,99,235,0.30)', border: '1px solid rgba(37,99,235,0.50)' }
          const defaultStyle = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }
          const hoverIn  = e => { if (!isItemActive) { e.currentTarget.style.background = 'rgba(37,99,235,0.18)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.35)' } }
          const hoverOut = e => { if (!isItemActive) { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' } }
          return itemIsRoute !== false
            ? <Link key={label} to={href} onClick={onClose} className={sharedClass} style={isItemActive ? activeStyle : defaultStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{cardContent}</Link>
            : <a   key={label} href={href} onClick={onClose} className={sharedClass} style={defaultStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{cardContent}</a>
        })}
      </div>

      <div className="mx-3 mb-3 p-3 rounded-xl flex items-center justify-between"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
        <div>
          <p className="text-[12px] font-semibold" style={{ color: 'rgba(255,255,255,0.80)' }}>Need a custom solution?</p>
          <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>Free consultation · No commitment</p>
        </div>
        <a href="/ARA-Marketing/contact-us" onClick={onClose}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full
            text-white text-[12px] font-semibold transition-all duration-200 flex-shrink-0 hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)' }}>
          Talk to us <ArrowRight size={11} />
        </a>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled]             = useState(false)
  const [open, setOpen]                     = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const navRef = useRef(null)
  const { pathname } = useLocation()

  const isActive = (paths) =>
    Array.isArray(paths)
      ? paths.some(p => pathname === p || (p !== '/' && pathname.startsWith(p)))
      : pathname === paths || (paths !== '/' && pathname.startsWith(paths))

  const digitalActive = isActive([
    '/services/best-seo-company-thanjavur', '/services/social-media-marketing',
    '/services/best-sem-company-thanjavur', '/services/graphic-design',
    '/services/video-editing', '/services/other-digital-marketing-services-thanjavur',
  ])
  const webActive = isActive([
    '/services/website-development', '/services/static-website-development',
    '/services/dynamic-website-development', '/services/cms-website-development',
    '/services/ecommerce-website-development', '/services/enterprise-website-development',
    '/services/web-application-development', '/services/mobile-application-development',
  ])

  const closeAll = () => setActiveDropdown(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const handle = (e) => { if (navRef.current && !navRef.current.contains(e.target)) closeAll() }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [])

  useEffect(() => { setOpen(false); closeAll() }, [pathname])

  const headerItemCls = (active, isOpen = false) =>
    `flex items-center rounded-lg transition-all duration-200 whitespace-nowrap
     ${active
       ? 'text-blue-600 bg-blue-50'
       : isOpen
         ? 'text-blue-600 bg-blue-50'
         : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
     }`

  const headerTextCls = 'px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-200 select-none'

  return (
    <>
      {/* ─── Desktop nav ─── */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">

        {/* top micro-bar */}
        <div className="pointer-events-auto w-full hidden lg:flex items-center justify-between px-8 py-1.5"
          style={{ background: 'linear-gradient(90deg,#1e3a8a,#2563eb,#4f46e5)', fontSize: '11.5px', color: 'rgba(255,255,255,0.85)' }}>
          {/* left — phone */}
          <a href="tel:+918110025254" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-150 no-underline">
            <Phone size={11} />
            <span className="font-medium">+91 81100 25254</span>
          </a>
          {/* center — tagline */}
          <span className="font-semibold tracking-wide">Best Digital Marketing Agency in Thanjavur</span>
          {/* right — email */}
          <a href="mailto:aradicovertech01@gmail.com" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-150 no-underline">
            <span className="font-medium">aradicovertech01@gmail.com</span>
          </a>
        </div>

        <nav
          ref={navRef}
          className="w-full pointer-events-auto transition-all duration-300"
          style={{
            background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
            boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.10)' : 'none',
          }}
        >
          {/* bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg,transparent 0%,#2563eb 30%,#6366f1 60%,transparent 100%)', opacity: scrolled ? 1 : 0, transition: 'opacity 0.3s' }} />

          <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
            <div className="flex items-center justify-between h-[76px] gap-6">

              {/* Logo */}
              <Link to="/" className="flex items-center no-underline flex-shrink-0">
                <img src={logoImg} alt="ARA Discover Marketing" className="h-16 w-auto object-contain mix-blend-multiply" />
              </Link>

              {/* Desktop links */}
              <div className="hidden lg:flex items-center gap-3 flex-1 justify-center">

                {/* Digital Marketing */}
                <div
                  className="relative flex items-center"
                  style={{ zIndex: activeDropdown === 'dm' ? 60 : 'auto' }}
                  onMouseEnter={() => setActiveDropdown('dm')}
                  onMouseLeave={closeAll}
                >
                  <div className={headerItemCls(digitalActive, activeDropdown === 'dm')}>
                    <Link to="/" onClick={closeAll} className={headerTextCls}>
                      Digital Marketing
                    </Link>
                    <span className={`pr-3 text-slate-400 transition-all duration-200 ${activeDropdown === 'dm' ? 'rotate-180 text-blue-500' : ''}`}>
                      <ChevronDown size={14} />
                    </span>
                  </div>

                  <div className={`transition-all duration-200
                    ${activeDropdown === 'dm'
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}>
                    <DropdownPanel items={digitalMarketingItems} title="Digital Marketing" onClose={closeAll} pathname={pathname} />
                  </div>
                </div>

                {/* Web Design */}
                <div
                  className="relative flex items-center"
                  style={{ zIndex: activeDropdown === 'web' ? 60 : 'auto' }}
                  onMouseEnter={() => setActiveDropdown('web')}
                  onMouseLeave={closeAll}
                >
                  <div className={headerItemCls(webActive, activeDropdown === 'web')}>
                    <Link to="/services/website-development" onClick={closeAll} className={headerTextCls}>
                      Web Design
                    </Link>
                    <span className={`pr-3 text-slate-400 transition-all duration-200 ${activeDropdown === 'web' ? 'rotate-180 text-blue-500' : ''}`}>
                      <ChevronDown size={14} />
                    </span>
                  </div>

                  <div className={`transition-all duration-200 origin-top
                    ${activeDropdown === 'web'
                      ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}>
                    <DropdownPanel items={webDesignItems} title="Web Design" onClose={closeAll} pathname={pathname} />
                  </div>
                </div>

                {/* About Us */}
                <Link to="/about-us" onClick={closeAll} className={`${headerItemCls(isActive('/about-us'))} ${headerTextCls}`}>
                  About Us
                </Link>

                {/* Pricing */}
                <Link to="/price-details" onClick={closeAll} className={`${headerItemCls(isActive('/price-details'))} ${headerTextCls}`}>
                  Pricing
                </Link>

                {/* Contact Us */}
                <Link to="/contact-us" onClick={closeAll} className={`${headerItemCls(isActive('/contact-us'))} ${headerTextCls}`}>
                  Contact Us
                </Link>

              </div>

              {/* CTA */}
              <div className="hidden lg:flex items-center flex-shrink-0">
                <a
                  href="/ARA-Marketing/contact-us"
                  className="inline-flex items-center gap-2 px-5 py-2.5
                    text-white rounded-xl text-[13px] font-semibold transition-all duration-300
                    hover:opacity-90 hover:scale-[1.03] hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg,#1e40af,#2563eb,#4f46e5)', boxShadow: '0 4px 18px rgba(37,99,235,0.35)' }}
                >
                  Get Started <ArrowRight size={14} />
                </a>
              </div>

              {/* Hamburger */}
              <button
                onClick={() => setOpen(o => !o)}
                className="lg:hidden p-2 rounded-full text-slate-600 hover:text-slate-900
                  hover:bg-slate-100 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {open ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* ─── Mobile menu ─── */}
      <div
        className={`lg:hidden fixed top-[82px] left-3 right-3 z-40 rounded-2xl
          overflow-y-auto max-h-[calc(100vh-90px)] transition-all duration-300
          ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
        }}
      >
        <div className="px-3 py-3 space-y-1.5 pb-6">

          {/* Digital Marketing */}
          <div className="rounded-xl overflow-hidden border border-slate-100">
            <button
              onClick={() => setMobileExpanded(p => p === 'dm' ? null : 'dm')}
              className={`w-full flex items-center justify-between py-3.5 px-4 text-[14px] font-medium
                transition-all duration-200
                ${digitalActive || mobileExpanded === 'dm'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 bg-white hover:bg-slate-50'
                }`}
            >
              <span className="flex items-center gap-2.5">
                <TrendingUp size={15} className="opacity-50" />
                Digital Marketing
              </span>
              <ChevronDown size={15} className={`transition-transform duration-200 opacity-50
                ${mobileExpanded === 'dm' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300
              ${mobileExpanded === 'dm' ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-3 pb-3 pt-1 grid grid-cols-2 gap-2 bg-slate-50/60">
                {digitalMarketingItems.map(({ href, label, icon: Icon, desc, isRoute: ir }) => {
                  const isItemActive = ir !== false && pathname === href
                  const card = (
                    <span onClick={() => setOpen(false)}
                      className="flex flex-col gap-2 p-3 rounded-xl transition-all duration-200 cursor-pointer"
                      style={isItemActive
                        ? { background: '#dbeafe', border: '1px solid #93c5fd' }
                        : { background: '#ffffff', border: '1px solid #e2e8f0' }}>
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: isItemActive ? '#2563eb' : '#eff6ff', color: isItemActive ? '#fff' : '#2563eb' }}>
                        <Icon size={14} />
                      </span>
                      <span>
                        <span className="block text-[12px] font-semibold leading-tight"
                          style={{ color: isItemActive ? '#1d4ed8' : '#1e293b' }}>{label}</span>
                        <span className="block text-[10px] mt-0.5 leading-tight text-slate-400">{desc}</span>
                      </span>
                    </span>
                  )
                  return ir !== false
                    ? <Link key={label} to={href}>{card}</Link>
                    : <a key={label} href={href}>{card}</a>
                })}
              </div>
            </div>
          </div>

          {/* Web Design */}
          <div className="rounded-xl overflow-hidden border border-slate-100">
            <button
              onClick={() => setMobileExpanded(p => p === 'web' ? null : 'web')}
              className={`w-full flex items-center justify-between py-3.5 px-4 text-[14px] font-medium
                transition-all duration-200
                ${webActive || mobileExpanded === 'web'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 bg-white hover:bg-slate-50'
                }`}
            >
              <span className="flex items-center gap-2.5">
                <Globe size={15} className="opacity-50" />
                Web Design
              </span>
              <ChevronDown size={15} className={`transition-transform duration-200 opacity-50
                ${mobileExpanded === 'web' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300
              ${mobileExpanded === 'web' ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-3 pb-3 pt-1 grid grid-cols-2 gap-2 bg-slate-50/60">
                {webDesignItems.map(({ href, label, icon: Icon, desc }) => {
                  const isItemActive = pathname === href
                  return (
                    <Link key={label} to={href} onClick={() => setOpen(false)}
                      className="flex flex-col gap-2 p-3 rounded-xl transition-all duration-200"
                      style={isItemActive
                        ? { background: '#dbeafe', border: '1px solid #93c5fd' }
                        : { background: '#ffffff', border: '1px solid #e2e8f0' }}>
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: isItemActive ? '#2563eb' : '#f0f9ff', color: isItemActive ? '#fff' : '#0284c7' }}>
                        <Icon size={14} />
                      </span>
                      <span>
                        <span className="block text-[12px] font-semibold leading-tight"
                          style={{ color: isItemActive ? '#0369a1' : '#1e293b' }}>{label}</span>
                        <span className="block text-[10px] mt-0.5 leading-tight text-slate-400">{desc}</span>
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* About Us */}
          <Link to="/about-us" onClick={() => setOpen(false)}
            className={`flex items-center gap-3 py-3.5 px-4 rounded-xl text-[14px] font-medium
              transition-all duration-200 border
              ${isActive('/about-us') ? 'text-blue-600 bg-blue-50 border-blue-100' : 'text-slate-700 bg-white border-slate-100 hover:bg-slate-50'}`}>
            <Info size={15} className="opacity-40" /> About Us
          </Link>

          {/* Pricing */}
          <Link to="/price-details" onClick={() => setOpen(false)}
            className={`flex items-center gap-3 py-3.5 px-4 rounded-xl text-[14px] font-medium
              transition-all duration-200 border
              ${isActive('/price-details') ? 'text-blue-600 bg-blue-50 border-blue-100' : 'text-slate-700 bg-white border-slate-100 hover:bg-slate-50'}`}>
            <Tag size={15} className="opacity-40" /> Pricing
          </Link>

          {/* Contact Us */}
          <Link to="/contact-us" onClick={() => setOpen(false)}
            className={`flex items-center gap-3 py-3.5 px-4 rounded-xl text-[14px] font-medium
              transition-all duration-200 border
              ${isActive('/contact-us') ? 'text-blue-600 bg-blue-50 border-blue-100' : 'text-slate-700 bg-white border-slate-100 hover:bg-slate-50'}`}>
            <Phone size={15} className="opacity-40" /> Contact Us
          </Link>

          {/* Get Started */}
          <div className="pt-1">
            <a href="/ARA-Marketing/contact-us" onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4
                bg-gradient-to-r from-blue-600 to-indigo-600 text-white
                rounded-2xl text-[13.5px] font-semibold transition-all duration-300
                hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30">
              Get Started <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[72px] z-30 bg-black/40"
          onClick={() => setOpen(false)} />
      )}
    </>
  )
}
