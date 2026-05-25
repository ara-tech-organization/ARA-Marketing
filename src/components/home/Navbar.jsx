import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Rocket, ArrowRight, Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home', isRoute: true },
  { href: '/services/social-media-marketing', label: 'SMM', isRoute: true },
  { href: '#services', label: 'Web Design', isRoute: false },
  { href: '#services', label: 'Graphic Design', isRoute: false },
  { href: '#services', label: 'Video Editing', isRoute: false },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* Desktop nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          bg-[#0a1628]/90 backdrop-blur-xl
          ${scrolled
            ? 'border-b border-blue-600/20 shadow-[0_4px_32px_rgba(0,0,0,.5)]'
            : 'border-b border-transparent'
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="flex items-center justify-between h-[72px] gap-6">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
              <div className="w-[38px] h-[38px] bg-blue-600 rounded-[10px] flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                <Rocket size={16} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Ara</span>
              <span className="text-xl font-bold text-blue-400 tracking-tight -ml-1.5">Marketing</span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {links.map(({ href, label, isRoute }) => (
                isRoute ? (
                  <Link
                    key={label}
                    to={href}
                    className="relative px-3.5 py-2 text-sm font-medium text-white/70
                      hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    key={label}
                    href={href}
                    className="relative px-3.5 py-2 text-sm font-medium text-white/70
                      hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                  >
                    {label}
                  </a>
                )
              ))}
            </div>

            {/* Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href="#faq"
                className="px-4 py-2 text-sm font-medium text-white/65 hover:text-white
                  hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                FAQs
              </a>
              <a
                href="#contact"
                className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white
                  rounded-full text-sm font-semibold transition-all duration-300
                  hover:bg-blue-500 shadow-lg shadow-blue-600/30"
              >
                Get Started <ArrowRight size={14} />
              </a>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(o => !o)}
              className="lg:hidden p-2 rounded-lg text-white/70 hover:bg-white/5
                hover:text-white transition-all duration-300"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu-panel-dark ${open ? 'open' : ''}`}>
        {links.map(({ href, label, isRoute }) => (
          isRoute ? (
            <Link
              key={label}
              to={href}
              onClick={() => setOpen(false)}
              className="block py-3.5 text-sm font-medium text-white/70
                border-b border-white/10 hover:text-white hover:pl-2
                transition-all duration-300"
            >
              {label}
            </Link>
          ) : (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-3.5 text-sm font-medium text-white/70
                border-b border-white/10 hover:text-white hover:pl-2
                transition-all duration-300"
            >
              {label}
            </a>
          )
        ))}
        <a
          href="#faq"
          onClick={() => setOpen(false)}
          className="block py-3.5 text-sm font-medium text-white/70
            border-b border-white/10 hover:text-white hover:pl-2
            transition-all duration-300"
        >
          FAQs
        </a>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-5 flex items-center justify-center gap-2 w-full py-3
            bg-blue-600 text-white rounded-full text-sm font-semibold
            hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/30"
        >
          Get Started <ArrowRight size={14} />
        </a>
      </div>
    </>
  )
}
