import { Palette, Search, Zap, Shield, Smartphone, HeadphonesIcon, Award, Star, CheckCircle2 } from 'lucide-react'
import cmsWhyUsImg from '../../assets/Wordpress/w2.png'

const reasons = [
  { icon: Palette,        title: 'Fully Customised WordPress Development', desc: 'Every website we build is crafted from scratch — no templates. Unique designs aligned to your brand identity.',   color: '#2563eb', light: '#dbeafe' },
  { icon: Search,         title: 'SEO-Optimised Website Structure',        desc: 'Built with Google in mind from day one — proper heading hierarchy, schema markup, fast loading, and clean URLs.',  color: '#7c3aed', light: '#ede9fe' },
  { icon: Zap,            title: 'Fast Loading & Secure Architecture',     desc: 'Performance-first builds with CDN, image optimisation, security hardening, and caching for lightning-fast pages.', color: '#0891b2', light: '#cffafe' },
  { icon: Smartphone,     title: 'Mobile-First Responsive Design',         desc: 'Every page looks and works flawlessly on phones, tablets, and desktops — tested across all major devices.',         color: '#059669', light: '#d1fae5' },
  { icon: Shield,         title: 'Easy-to-Manage CMS Dashboard',          desc: 'We configure your WordPress admin panel so you can update content, add pages, and manage media without any coding.', color: '#d97706', light: '#fef3c7' },
  { icon: HeadphonesIcon, title: 'Dedicated Support & Maintenance',       desc: 'Post-launch support to keep your website secure, updated, and performing at its peak — we are always here.',         color: '#db2777', light: '#fce7f3' },
]

const stats = [
  { val: '200+', lbl: 'WordPress Sites Delivered', color: '#2563eb', light: '#dbeafe' },
  { val: '5★',   lbl: 'Average Client Rating',     color: '#d97706', light: '#fef3c7' },
  { val: '100%', lbl: 'Custom-Built Websites',     color: '#7c3aed', light: '#ede9fe' },
]

export default function CMSWhyUs() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white">

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1.5px,transparent 1.5px)', backgroundSize: '30px 30px' }} />

      {/* Light ambient orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 65%)' }} />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.06) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
              style={{ background: 'rgba(37,99,235,0.08)', color: '#1d4ed8', border: '1px solid rgba(37,99,235,0.18)' }}>
              <Award size={11} /> Why Choose Us
            </span>
            <h2 className="text-[clamp(25px,3.1vw,47px)] font-bold text-slate-900 leading-[1.1] tracking-tight">
              We Build{' '}
              <span style={{ background: 'linear-gradient(135deg,#1d4ed8,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Digital
              </span>{' '}
              Success
            </h2>
          </div>
          <p className="text-[14.5px] text-slate-500 leading-[1.8] max-w-sm lg:text-right">
            We are a professional custom CMS WordPress development company in Thanjavur focused on delivering result-oriented digital solutions.
          </p>
        </div>

        {/* ── Top: image left + stats right ── */}
        <div className="reveal flex flex-col lg:flex-row gap-6 mb-10 items-stretch">

          {/* Image */}
          <div className="w-full lg:w-[400px] flex-shrink-0 relative rounded-3xl overflow-hidden"
            style={{ minHeight: 280, boxShadow: '0 24px 64px rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.1)' }}>
            <img
              src={cmsWhyUsImg}
              alt="WordPress Development Team Thanjavur"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(160deg,rgba(29,78,216,0.5) 0%,rgba(10,26,52,0.6) 100%)' }} />

            <div className="absolute top-5 left-5 flex items-center gap-2 px-3.5 py-2 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.25)' }}>
              <CheckCircle2 size={12} className="text-white" />
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Trusted Agency</span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2">
              {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#fbbf24" color="#fbbf24" />)}
              <span className="text-white font-bold text-[12px] ml-1">5.0 · 100+ Clients</span>
            </div>
          </div>

          {/* Stats + description */}
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-[14px] text-slate-600 leading-[1.85] p-5 rounded-2xl"
              style={{ background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.1)' }}>
              Every website we build is a growth engine for your business. Our team combines creativity, technical expertise, and digital marketing insight to deliver WordPress solutions that perform, rank, and convert.
            </p>
            <div className="grid grid-cols-3 gap-4 flex-1">
              {stats.map(({ val, lbl, color, light }) => (
                <div key={lbl} className="flex flex-col items-center justify-center text-center py-6 rounded-2xl"
                  style={{ background: light, border: `1.5px solid ${color}22` }}>
                  <span className="text-[32px] font-black leading-none mb-1.5" style={{ color }}>{val}</span>
                  <span className="text-[11px] font-semibold text-slate-600 leading-snug">{lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 6 reason cards ── */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {reasons.map(({ icon: Icon, title, desc, color, light }, i) => (
            <div key={title}
              className="group relative flex flex-col gap-4 p-6 rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              style={{ border: `1.5px solid ${color}18`, boxShadow: `0 4px 20px ${color}0a` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color + '35'; e.currentTarget.style.boxShadow = `0 20px 56px ${color}18` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = color + '18'; e.currentTarget.style.boxShadow = `0 4px 20px ${color}0a` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: `linear-gradient(90deg,${color},${color}44)` }} />

              <div className="flex items-start justify-between">
                <div className="w-13 h-13 w-[52px] h-[52px] rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: light, border: `1.5px solid ${color}25` }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <span className="text-[40px] font-black leading-none"
                  style={{ color: color + '12' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div>
                <h3 className="text-[13px] font-bold text-slate-900 leading-snug mb-2">{title}</h3>
                <p className="text-[12.5px] text-slate-500 leading-[1.78]">{desc}</p>
              </div>

              <div className="mt-auto pt-3 flex items-center gap-2" style={{ borderTop: `1px solid ${color}12` }}>
                <CheckCircle2 size={13} style={{ color }} />
                <span className="text-[11px] font-semibold" style={{ color }}>Included in our service</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── SEO paragraph ── */}
        <div className="reveal text-center max-w-3xl mx-auto">
          <p className="text-[13px] text-slate-400 leading-[1.85]">
            As one of the <span className="text-slate-600">best WordPress development companies in Thanjavur</span>, we ensure that every website is developed with an eye for its long-term success. We also offer <span className="text-slate-600">cms in website design &amp; development in Thanjavur</span> solutions that improve user experience and engagement.
          </p>
        </div>

      </div>
    </section>
  )
}
