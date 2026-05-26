import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Rocket, ArrowRight, Menu, X, ChevronDown,
  Search, Share2, TrendingUp, Palette, Video, Sparkles,
  Layout, Zap, Globe, ShoppingCart, Building2, Code2, Smartphone,
  Info, Phone
} from 'lucide-react'

const digitalMarketingItems = [
  { href: '/services/best-seo-company-thanjavur', label: 'SEO',            icon: Search,     desc: 'Search Engine Optimization',    isRoute: true  },
  { href: '/services/social-media-marketing',     label: 'SMM',            icon: Share2,     desc: 'Social Media Marketing',        isRoute: true  },
  { href: '#sem',                                 label: 'SEM',            icon: TrendingUp, desc: 'Search Engine Marketing',       isRoute: false },
  { href: '/services/graphic-design',             label: 'Graphic Design', icon: Palette,    desc: 'Creative Visual Design',        isRoute: true  },
  { href: '#video-editing',                       label: 'Video Editing',  icon: Video,      desc: 'Professional Video Production', isRoute: false },
  { href: '#other-services',                      label: 'Other Services', icon: Sparkles,   desc: 'Explore All Services',          isRoute: false },
]

const webDesignItems = [
  { href: '/services/website-development', label: 'Static Website',     icon: Layout,       desc: 'Fast & lightweight sites'     },
  { href: '/services/website-development', label: 'Dynamic Website',    icon: Zap,          desc: 'Interactive web experiences'  },
  { href: '/services/website-development', label: 'WordPress Website',  icon: Globe,        desc: 'Flexible CMS solutions'       },
  { href: '/services/website-development', label: 'Ecommerce Website',  icon: ShoppingCart, desc: 'Online store solutions'       },
  { href: '/services/website-development', label: 'Enterprise Website', icon: Building2,    desc: 'Large-scale web platforms'    },
  { href: '/services/website-development', label: 'Web App',            icon: Code2,        desc: 'Custom web applications'      },
  { href: '/services/website-development', label: 'Mobile App',         icon: Smartphone,   desc: 'iOS & Android apps'           },
]

function DropdownPanel({ items, title, onClose }) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50
        rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,.7)] overflow-hidden pointer-events-auto"
      style={{ minWidth: 460, background: '#0d1f40', border: '1px solid #1e3a6e' }}
    >
      <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg,transparent,#3b82f6,#818cf8,#3b82f6,transparent)' }} />

      <div className="px-5 pt-4 pb-2 flex items-center justify-between" style={{ borderBottom: '1px solid #1e3a6e' }}>
        <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#60a5fa' }}>{title}</span>
        <span className="text-[11px]" style={{ color: '#94a3b8' }}>{items.length} services</span>
      </div>

      <div className="grid grid-cols-2 gap-2 p-3">
        {items.map(({ href, label, icon: Icon, desc, isRoute: itemIsRoute }) => {
          const card = (
            <span
              onClick={onClose}
              className="group flex items-center gap-3.5 p-3.5 rounded-xl transition-all duration-200 cursor-pointer"
              style={{ background: '#112347', border: '1px solid #1e3a6e' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1a3a7a'; e.currentTarget.style.borderColor = '#3b82f6' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#112347'; e.currentTarget.style.borderColor = '#1e3a6e' }}
            >
              <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
                style={{ background: '#1d4a8a', color: '#93c5fd' }}>
                <Icon size={17} />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-1.5">
                  <span className="block text-[13px] font-semibold leading-tight truncate" style={{ color: '#f1f5f9' }}>
                    {label}
                  </span>
                  <ArrowRight size={11} className="opacity-0 group-hover:opacity-70 -translate-x-1
                    group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" style={{ color: '#60a5fa' }} />
                </span>
                <span className="block text-[11px] mt-0.5 leading-tight truncate" style={{ color: '#94a3b8' }}>
                  {desc}
                </span>
              </span>
            </span>
          )
          return itemIsRoute !== false
            ? <Link key={label} to={href}>{card}</Link>
            : <a key={label} href={href}>{card}</a>
        })}
      </div>

      <div className="mx-3 mb-3 p-3 rounded-xl flex items-center justify-between"
        style={{ background: '#112347', border: '1px solid #1e3a6e' }}>
        <div>
          <p className="text-[12px] font-semibold" style={{ color: '#e2e8f0' }}>Need a custom solution?</p>
          <p className="text-[11px] mt-0.5" style={{ color: '#64748b' }}>Free consultation · No commitment</p>
        </div>
        <a
          href="#contact"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg
            bg-blue-600 hover:bg-blue-500 text-white text-[12px] font-semibold
            transition-all duration-200 shadow-lg shadow-blue-600/25 flex-shrink-0"
        >
          Talk to us <ArrowRight size={11} />
        </a>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false)
  const [open, setOpen]                   = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const navRef = useRef(null)
  const { pathname } = useLocation()

  const isActive = (paths) =>
    Array.isArray(paths)
      ? paths.some(p => pathname === p || (p !== '/' && pathname.startsWith(p)))
      : pathname === paths || (paths !== '/' && pathname.startsWith(paths))

  const digitalActive = isActive([
    '/services/best-seo-company-thanjavur',
    '/services/social-media-marketing',
    '/services/graphic-design',
  ])
  const webActive = isActive('/services/website-development')

  const closeAll = () => setActiveDropdown(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const handle = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) closeAll()
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [])

  useEffect(() => { setOpen(false); closeAll() }, [pathname])

  const navBtnClass = (active, isOpen) =>
    `relative flex items-center gap-1.5 px-4 py-2.5 text-[13.5px] font-semibold
     rounded-xl transition-all duration-200 select-none cursor-pointer
     ${active
       ? 'text-blue-400 bg-blue-600/15 border border-blue-500/25 shadow-[0_0_12px_rgba(37,99,235,.15)]'
       : isOpen
         ? 'text-white bg-white/8 border border-white/12'
         : 'text-white/70 hover:text-white hover:bg-white/6 border border-transparent'
     }`

  return (
    <>
      {/* ─── Desktop nav ─── */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          bg-[#0a1628]/90 backdrop-blur-xl
          ${scrolled
            ? 'border-b border-blue-600/20 shadow-[0_4px_32px_rgba(0,0,0,.5)]'
            : 'border-b border-transparent'
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-[72px] gap-4">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
              <div className="w-9 h-9 bg-blue-600 rounded-[10px] flex items-center justify-center
                text-white shadow-lg shadow-blue-600/30">
                <Rocket size={16} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Ara</span>
              <span className="text-xl font-bold text-blue-400 tracking-tight -ml-1.5">Marketing</span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">

              {/* Digital Marketing */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(p => p === 'dm' ? null : 'dm')}
                  className={navBtnClass(digitalActive, activeDropdown === 'dm')}
                >
                  Digital Marketing
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 opacity-60
                      ${activeDropdown === 'dm' ? 'rotate-180 opacity-100' : ''}`}
                  />
                  {digitalActive && (
                    <span className="absolute -bottom-px left-3 right-3 h-[2px] rounded-full"
                      style={{ background: 'linear-gradient(90deg,#3b82f6,#818cf8)' }} />
                  )}
                </button>

                <div className={`transition-all duration-200 origin-top
                  ${activeDropdown === 'dm'
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <DropdownPanel
                    items={digitalMarketingItems}
                    title="Digital Marketing"
                    onClose={closeAll}
                  />
                </div>
              </div>

              {/* Web Design */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(p => p === 'web' ? null : 'web')}
                  className={navBtnClass(webActive, activeDropdown === 'web')}
                >
                  Web Design
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 opacity-60
                      ${activeDropdown === 'web' ? 'rotate-180 opacity-100' : ''}`}
                  />
                  {webActive && (
                    <span className="absolute -bottom-px left-3 right-3 h-[2px] rounded-full"
                      style={{ background: 'linear-gradient(90deg,#3b82f6,#818cf8)' }} />
                  )}
                </button>

                <div className={`transition-all duration-200 origin-top
                  ${activeDropdown === 'web'
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <DropdownPanel
                    items={webDesignItems}
                    title="Web Design"
                    onClose={closeAll}
                  />
                </div>
              </div>

              {/* About Us */}
              <a href="#about" className={navBtnClass(false, false)}>
                <Info size={14} className="opacity-50" />
                About Us
              </a>

              {/* Contact Us */}
              <a href="#contact" className={navBtnClass(false, false)}>
                <Phone size={14} className="opacity-50" />
                Contact Us
              </a>
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5
                  bg-gradient-to-r from-blue-600 to-indigo-600 text-white
                  rounded-full text-[13px] font-semibold transition-all duration-300
                  hover:from-blue-500 hover:to-indigo-500
                  shadow-lg shadow-blue-600/30 hover:shadow-blue-500/45 hover:scale-[1.03]"
              >
                Get Started <ArrowRight size={14} />
              </a>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(o => !o)}
              className="lg:hidden p-2.5 rounded-xl text-white/70 hover:bg-white/8
                hover:text-white transition-all duration-300 border border-transparent
                hover:border-white/10"
              aria-label="Toggle menu"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile menu ─── */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 right-0 z-40
          bg-[#080f1f]/98 backdrop-blur-2xl border-b border-white/8
          transition-all duration-300 overflow-y-auto max-h-[calc(100vh-72px)]
          ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="px-4 py-3 space-y-1 pb-6">

          {/* Digital Marketing */}
          <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
            <button
              onClick={() => setMobileExpanded(p => p === 'dm' ? null : 'dm')}
              className={`w-full flex items-center justify-between py-4 px-4
                text-[13.5px] font-semibold transition-all duration-200
                ${digitalActive || mobileExpanded === 'dm'
                  ? 'text-blue-400 bg-blue-600/10'
                  : 'text-white/80 bg-white/[0.03] hover:bg-white/[0.06] hover:text-white'
                }`}
            >
              <span className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center">
                  <TrendingUp size={13} className="text-blue-400" />
                </span>
                Digital Marketing
              </span>
              <ChevronDown
                size={15}
                className={`transition-transform duration-200
                  ${mobileExpanded === 'dm' ? 'rotate-180 text-blue-400' : 'text-white/30'}`}
              />
            </button>

            <div className={`overflow-hidden transition-all duration-300
              ${mobileExpanded === 'dm' ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-3 pb-3 pt-1 grid grid-cols-2 gap-2 bg-white/[0.02]">
                {digitalMarketingItems.map(({ href, label, icon: Icon, desc, isRoute: ir }) => {
                  const card = (
                    <span
                      onClick={() => setOpen(false)}
                      className="flex flex-col gap-2 p-3 rounded-xl border border-[#1e3a5f]
                        bg-[#0a1628] hover:border-blue-500/50 hover:bg-[#112044]
                        transition-all duration-200 cursor-pointer"
                    >
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#1a3a6e] text-blue-400">
                        <Icon size={14} />
                      </span>
                      <span>
                        <span className="block text-[12px] font-semibold text-white/85 leading-tight">{label}</span>
                        <span className="block text-[10px] text-white/35 mt-0.5 leading-tight">{desc}</span>
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
          <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
            <button
              onClick={() => setMobileExpanded(p => p === 'web' ? null : 'web')}
              className={`w-full flex items-center justify-between py-4 px-4
                text-[13.5px] font-semibold transition-all duration-200
                ${webActive || mobileExpanded === 'web'
                  ? 'text-blue-400 bg-blue-600/10'
                  : 'text-white/80 bg-white/[0.03] hover:bg-white/[0.06] hover:text-white'
                }`}
            >
              <span className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-sky-600/20 flex items-center justify-center">
                  <Globe size={13} className="text-sky-400" />
                </span>
                Web Design
              </span>
              <ChevronDown
                size={15}
                className={`transition-transform duration-200
                  ${mobileExpanded === 'web' ? 'rotate-180 text-blue-400' : 'text-white/30'}`}
              />
            </button>

            <div className={`overflow-hidden transition-all duration-300
              ${mobileExpanded === 'web' ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-3 pb-3 pt-1 grid grid-cols-2 gap-2 bg-white/[0.02]">
                {webDesignItems.map(({ href, label, icon: Icon, desc }) => (
                  <Link
                    key={label}
                    to={href}
                    onClick={() => setOpen(false)}
                    className="flex flex-col gap-2 p-3 rounded-xl border border-[#1e3a5f]
                      bg-[#0a1628] hover:border-blue-500/50 hover:bg-[#112044]
                      transition-all duration-200"
                  >
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-600/15 text-blue-400">
                      <Icon size={14} />
                    </span>
                    <span>
                      <span className="block text-[12px] font-semibold text-white/85 leading-tight">{label}</span>
                      <span className="block text-[10px] text-white/35 mt-0.5 leading-tight">{desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* About Us */}
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 py-4 px-4 rounded-2xl text-[13.5px] font-semibold
              text-white/80 hover:text-white bg-white/[0.03] hover:bg-white/[0.06]
              border border-white/[0.06] transition-all duration-200"
          >
            <span className="w-7 h-7 rounded-lg bg-indigo-600/20 flex items-center justify-center">
              <Info size={13} className="text-indigo-400" />
            </span>
            About Us
          </a>

          {/* Contact Us */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 py-4 px-4 rounded-2xl text-[13.5px] font-semibold
              text-white/80 hover:text-white bg-white/[0.03] hover:bg-white/[0.06]
              border border-white/[0.06] transition-all duration-200"
          >
            <span className="w-7 h-7 rounded-lg bg-teal-600/20 flex items-center justify-center">
              <Phone size={13} className="text-teal-400" />
            </span>
            Contact Us
          </a>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4
                bg-gradient-to-r from-blue-600 to-indigo-600 text-white
                rounded-2xl text-[13.5px] font-semibold transition-all duration-300
                hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30"
            >
              Get Started <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* mobile overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 top-[72px] z-30 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
