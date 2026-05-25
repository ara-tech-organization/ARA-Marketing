import { Rocket, Globe2, Camera, Link, MessageCircle, Play, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

const services = ['SMM', 'Web Design', 'Graphic Design', 'Video Editing']
const company  = ['Home', 'About Us', 'Portfolio', 'Contact Us']
const socials  = [[Globe2, 'Website'], [Camera, 'Instagram'], [Link, 'LinkedIn'], [MessageCircle, 'WhatsApp'], [Play, 'YouTube']]

export default function Footer() {
  return (
    <footer
      className="text-white/65 pt-20 pb-9 border-t border-blue-600/20"
      style={{ background: '#050d1a' }}
    >
      <div className="max-w-[1200px] mx-auto px-7">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-[9px] flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                <Rocket size={15} />
              </div>
              <span className="text-lg font-bold text-white">
                Ara<span className="text-blue-400">Marketing</span>
              </span>
            </div>
            <p className="text-sm leading-[1.85] text-white/40 mb-7">
              Thanjavur&apos;s leading digital marketing agency delivering AI-powered SEO,
              social media, branding and performance marketing solutions that drive
              real business growth.
            </p>
            <div className="flex gap-2.5">
              {socials.map(([Icon, label]) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-[10px] glass border border-white/10
                    flex items-center justify-center text-white/40 transition-all duration-300
                    hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:-translate-y-0.5
                    hover:shadow-lg hover:shadow-blue-600/30"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 tracking-wide">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map(s => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-white/40 hover:text-blue-400
                      hover:pl-1 transition-all duration-300"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 tracking-wide">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {company.map(s => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-white/40 hover:text-blue-400
                      hover:pl-1 transition-all duration-300"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 tracking-wide">Contact</h4>
            <div className="flex items-start gap-2.5 text-sm text-white/40 mb-3">
              <MapPin size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
              <span>Thanjavur, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-white/40 mb-3">
              <Phone size={14} className="text-blue-400 flex-shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-white/40 mb-6">
              <Mail size={14} className="text-blue-400 flex-shrink-0" />
              <span>aradicovertech02@gmail.com</span>
            </div>
            <a
              href="#contact"
              className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white
                rounded-full text-[13px] font-semibold transition-all duration-300
                hover:bg-blue-500 shadow-lg shadow-blue-600/25"
            >
              Free Consultation <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-7 flex flex-wrap justify-between
          items-center gap-4">
          <p className="text-[13px] text-white/30">
            &copy; 2025 Ara Marketing. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(l => (
              <a
                key={l}
                href="#"
                className="text-[13px] text-white/30 hover:text-blue-400
                  transition-colors duration-300"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
