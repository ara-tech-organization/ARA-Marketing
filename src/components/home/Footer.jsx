import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowRight, Heart } from 'lucide-react'
import logoImg from '../../assets/Footer.webp'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.533 5.851L.057 23.629a.75.75 0 0 0 .921.921l5.85-1.474A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.5-5.188-1.377l-.372-.214-3.853.971.986-3.763-.228-.384A9.952 9.952 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>
  </svg>
)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const services = [
  { label: 'SEO',                  href: '/ARA-Marketing/services/best-seo-company-thanjavur' },
  { label: 'Social Media Marketing', href: '/ARA-Marketing/services/social-media-marketing' },
  { label: 'SEM / Google Ads',     href: '/ARA-Marketing/services/best-sem-company-thanjavur' },
  { label: 'Graphic Design',       href: '/ARA-Marketing/services/graphic-design' },
  { label: 'Video Editing',        href: '/ARA-Marketing/services/video-editing' },
  { label: 'Website Development',  href: '/ARA-Marketing/services/website-development' },
]
const company = [
  { label: 'Home',        href: '/ARA-Marketing/' },
  { label: 'Web Design',  href: '/ARA-Marketing/services/website-development' },
  { label: 'About Us',    href: '/ARA-Marketing/about-us' },
  { label: 'Contact Us',  href: '/ARA-Marketing/contact-us' },
]
const socials  = [
  [FacebookIcon,  'Facebook',  'https://www.facebook.com/aradiscovermarketing'],
  [InstagramIcon, 'Instagram', 'https://www.instagram.com/aradiscover_marketing/'],
  [WhatsAppIcon,  'WhatsApp',  'https://wa.me/918110025254'],
  [TwitterIcon,   'Twitter',   'https://x.com/AraDiscove54623'],
  [LinkedInIcon,  'LinkedIn',  'https://www.linkedin.com/company/ara-discover-marketing/'],
]

export default function Footer() {
  return (
    <footer
      className="text-white/65 pt-20 pb-9 border-t border-blue-600/20"
      style={{ background: '#071a36' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10 mb-16">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logoImg} alt="ARA Discover Marketing" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-sm leading-[1.85] text-white/40 mb-7">
              Thanjavur&apos;s leading digital marketing agency delivering AI-powered SEO,
              social media, branding and performance marketing solutions that drive
              real business growth.
            </p>
            <div className="flex gap-2.5">
              {socials.map(([Icon, label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
            <h4 className="text-xs font-bold text-white mb-5 tracking-wide">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-sm text-white/40 hover:text-blue-400
                      hover:pl-1 transition-all duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-white mb-5 tracking-wide">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-sm text-white/40 hover:text-blue-400
                      hover:pl-1 transition-all duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white mb-5 tracking-wide">Contact</h4>
            <div className="flex items-start gap-2.5 text-sm text-white/40 mb-3">
              <MapPin size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
              <span>67A, Giri Rd, Srinivasapuram, Thanjavur, Tamil Nadu 613009</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-white/40 mb-3">
              <Phone size={14} className="text-blue-400 flex-shrink-0" />
              <a href="tel:+918110025254" className="hover:text-blue-400 transition-colors duration-300">(+91) 81100 25254</a>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-white/40 mb-6">
              <Mail size={14} className="text-blue-400 flex-shrink-0" />
              <span>aradiscovermarketing@gmail.com</span>
            </div>
            <a
              href="/ARA-Marketing/contact-us"
              className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white
                rounded-full text-[13px] font-semibold transition-all duration-300
                hover:bg-blue-500 shadow-lg shadow-blue-600/25"
            >
              Talk to an Expert <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-7 grid grid-cols-3 items-center gap-4">
          <p className="text-[13px] text-white/30">
            &copy; 2025 ARA Marketing. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <Link to="/privacy-policy" className="text-[13px] text-white/30 hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-[13px] text-white/30 hover:text-blue-400 transition-colors duration-300">
              Terms &amp; Conditions
            </Link>
          </div>
          <div className="flex justify-end items-center gap-1.5 text-[13px] text-white/30">
            <Heart size={13} className="text-red-400 fill-red-400 flex-shrink-0" />
            <span>Crafted by </span>
            <a href="https://discovertechnologies.co/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
              ARA Discover Technology
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
