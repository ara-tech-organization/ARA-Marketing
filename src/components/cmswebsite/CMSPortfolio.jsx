import { ShoppingCart, GraduationCap, Building2, User, Wrench, Trophy, TrendingUp, Star, Award, CheckCircle2 } from 'lucide-react'
import wpEcomImg      from '../../assets/Wordpress/e-commerce.png'
import wpEduImg       from '../../assets/Wordpress/educational.png'
import wpCorpImg      from '../../assets/Wordpress/Corporate.png'
import wpPortImg      from '../../assets/Wordpress/Portfolio.png'
import wpServiceImg   from '../../assets/Wordpress/Service.png'

const industries = [
  {
    num: '01', icon: ShoppingCart,
    title: 'E-Commerce Stores',
    desc: 'WooCommerce-powered stores with secure checkout, product management, and seamless payment gateways.',
    image: wpEcomImg,
    stat: '80+', statLabel: 'Stores Launched',
    color: '#2563eb', bg: '#dbeafe',
    points: ['Secure WooCommerce Setup', 'Payment Gateway Integration', 'Inventory Management'],
  },
  {
    num: '02', icon: GraduationCap,
    title: 'Educational Platforms',
    desc: 'LMS-integrated WordPress platforms for online learning, course management, and student portals.',
    image: wpEduImg,
    stat: '30+', statLabel: 'Ed-Tech Sites',
    color: '#7c3aed', bg: '#ede9fe',
    points: ['LMS Integration', 'Student Portal Setup', 'Course Management'],
  },
  {
    num: '03', icon: Building2,
    title: 'Corporate Websites',
    desc: 'Professional corporate WordPress sites with custom page builders, multilingual support, and CRM integration.',
    image: wpCorpImg,
    stat: '50+', statLabel: 'Corporates Served',
    color: '#0891b2', bg: '#cffafe',
    points: ['Custom Page Builder', 'CRM Integration', 'Multilingual Support'],
  },
  {
    num: '04', icon: User,
    title: 'Portfolio Websites',
    desc: 'Stunning portfolio showcases for creatives, photographers, designers, and freelancers to win more clients.',
    image: wpPortImg,
    stat: '40+', statLabel: 'Portfolios Built',
    color: '#059669', bg: '#d1fae5',
    points: ['Gallery & Showcase Setup', 'Mobile Optimised', 'SEO-Ready Design'],
  },
  {
    num: '05', icon: Wrench,
    title: 'Service Businesses',
    desc: 'Lead-generating service websites with appointment booking, testimonials, and inquiry management.',
    image: wpServiceImg,
    stat: '60+', statLabel: 'Business Sites',
    color: '#d97706', bg: '#fef3c7',
    points: ['Booking System', 'Lead Generation Forms', 'Google Maps Integration'],
  },
]

export default function CMSPortfolio() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#f8faff 0%,#eff6ff 50%,#f0f9ff 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1.5px,transparent 1.5px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.08)', color: '#1d4ed8', border: '1px solid rgba(37,99,235,0.18)' }}>
            <Trophy size={11} /> Our Success Stories
          </span>
          <h2 className="text-[clamp(24px,3vw,44px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            WordPress Websites{' '}
            <span style={{ background: 'linear-gradient(135deg,#1d4ed8,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Across Industries
            </span>
          </h2>
          <p className="text-[14.5px] text-slate-500 leading-relaxed max-w-xl mx-auto">
            We have delivered high-quality WordPress websites for businesses across diverse sectors in Thanjavur and beyond.
          </p>
        </div>

        {/* ── Story cards — alternating layout ── */}
        <div className="flex flex-col gap-6 mb-14">
          {industries.map(({ num, icon: Icon, title, desc, image, stat, statLabel, color, bg, points }, i) => (
            <div key={title}
              className={`reveal group flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 rounded-3xl overflow-hidden`}
              style={{ boxShadow: `0 8px 40px ${color}12`, border: `1px solid ${color}18` }}>

              {/* Image side */}
              <div className="w-full lg:w-[42%] flex-shrink-0 relative overflow-hidden" style={{ minHeight: 220 }}>
                <img src={image} alt={`${title} — WordPress Website Thanjavur`} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ minHeight: 220 }} />
                <div className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg,${color}44 0%,rgba(10,26,52,0.55) 100%)` }} />

                {/* Number badge */}
                <div className="absolute top-5 left-5 flex items-center justify-center w-12 h-12 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.25)' }}>
                  <span className="text-[18px] font-black text-white">{num}</span>
                </div>

                {/* Stat */}
                <div className="absolute bottom-5 left-5 px-4 py-2.5 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.13)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <p className="text-[22px] font-black text-white leading-none">{stat}</p>
                  <p className="text-[10px] text-white/60 font-semibold mt-0.5">{statLabel}</p>
                </div>
              </div>

              {/* Content side */}
              <div className="flex-1 bg-white px-7 py-7 flex flex-col justify-center">
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: bg, border: `1.5px solid ${color}22` }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>Industry {num}</span>
                    <h3 className="text-[17px] font-bold text-slate-900 leading-tight">{title}</h3>
                  </div>
                </div>

                <p className="text-[13.5px] text-slate-500 leading-[1.8] mb-5">{desc}</p>

                {/* Feature points */}
                <div className="flex flex-col gap-2">
                  {points.map(p => (
                    <div key={p} className="flex items-center gap-2.5">
                      <CheckCircle2 size={14} style={{ color, flexShrink: 0 }} />
                      <span className="text-[12.5px] font-medium text-slate-600">{p}</span>
                    </div>
                  ))}
                </div>

                {/* Accent bottom bar */}
                <div className="mt-6 h-1 w-0 rounded-full group-hover:w-16 transition-all duration-500"
                  style={{ background: `linear-gradient(90deg,${color},${color}55)` }} />
              </div>

            </div>
          ))}
        </div>

        {/* ── Bottom metrics ── */}
        <div className="reveal grid grid-cols-3 gap-4 mb-10">
          {[
            { icon: TrendingUp, val: '200+', lbl: 'WordPress Sites Delivered', color: '#2563eb' },
            { icon: Star,       val: '98%',  lbl: 'Client Satisfaction Rate',  color: '#7c3aed' },
            { icon: Award,      val: '5★',   lbl: 'Average Client Rating',     color: '#059669' },
          ].map(({ icon: Icon, val, lbl, color }) => (
            <div key={lbl} className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white"
              style={{ border: `1px solid ${color}18`, boxShadow: `0 4px 16px ${color}0a` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: color + '12', border: `1.5px solid ${color}20` }}>
                <Icon size={17} style={{ color }} />
              </div>
              <div>
                <p className="text-[22px] font-black text-slate-900 leading-none">{val}</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">{lbl}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── SEO paragraph ── */}
        <div className="reveal text-center max-w-3xl mx-auto">
          <p className="text-[13px] text-slate-400 leading-[1.85]">
            We are one of the <span className="text-slate-500">best WordPress development companies in Thanjavur</span> for our consistent delivery and client satisfaction. Our <span className="text-slate-500">cms website development services in Thanjavur</span> have helped businesses improve their online visibility and customer engagement across industries.
          </p>
        </div>

      </div>
    </section>
  )
}
