import { ArrowRight, TrendingUp, Settings, Users, Sparkles } from 'lucide-react'
import cmsIntroImg from '../../assets/Wordpress/w1.webp'

const pillars = [
  {
    icon: TrendingUp,
    title: 'Scalable & Growth-Ready',
    desc: 'WordPress powers 40% of the web globally — built to grow with your business at every stage.',
    color: '#2563eb',
  },
  {
    icon: Settings,
    title: 'Full Content Control',
    desc: 'Custom CMS dashboards give you complete control over content, design, and functionality — no developer needed.',
    color: '#2563eb',
  },
  {
    icon: Users,
    title: 'Conversion-Driven Design',
    desc: 'Every page is crafted with user experience and conversion goals in mind — not just looks, but results.',
    color: '#1d4ed8',
  },
]

export default function CMSIntro() {
  return (
    <section
      id="cms-intro"
      className="overflow-hidden py-16 sm:py-16 bg-white"
    >

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.1)', color: '#1d4ed8', border: '1px solid rgba(37,99,235,0.25)' }}
          >
            <Sparkles size={11} /> Transform Your Business
          </span>
          <h2 className="text-[clamp(23px,2.7vw,43px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
            Transform Your Business with{' '}
            <span style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              WordPress CMS
            </span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-[1.85] max-w-3xl mx-auto">
            WordPress is the most relied-on CMS globally, powering over 40% of websites. Our WordPress CMS development services in Thanjavur help you build AI-powered, scalable, and conversion-oriented websites tailored to your business.
          </p>
        </div>

        {/* Main content: text left + image right */}
        <div className="reveal flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 items-stretch mb-14">

          {/* Text side */}
          <div className="flex-1 flex flex-col justify-center gap-5">
            <p className="text-[15px] text-slate-600 leading-[1.85]">
              We are one of the best WordPress development companies in Thanjavur, focused on providing custom-built solutions that align with your brand identity and business goals.
            </p>
            <p className="text-[15px] text-slate-600 leading-[1.85]">
              As a custom CMS WordPress development company in Thanjavur, we deliver solutions that give you full control of your website content, design, and functionality.
            </p>
            <p className="text-[15px] text-slate-600 leading-[1.85]">
              Our expertise in CMS in website design &amp; development in Thanjavur ensures your website is not only visually stunning but also result-driven and performance-optimised.
            </p>

            {/* Inline stats */}
            <div className="flex gap-6 mt-2">
              {[
                { val: '40%+', lbl: 'Global web share', color: '#2563eb' },
                { val: '5x',   lbl: 'Faster content updates', color: '#1d4ed8' },
                { val: '98',   lbl: 'Avg SEO score', color: '#2563eb' },
              ].map(({ val, lbl, color }) => (
                <div key={lbl} className="flex flex-col">
                  <span className="text-[22px] font-black leading-tight" style={{ color }}>{val}</span>
                  <span className="text-[11px] text-slate-400 font-medium mt-0.5">{lbl}</span>
                </div>
              ))}
            </div>

            <a
              href="/ARA-Marketing/contact-us"
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold mt-2 transition-all duration-200 hover:gap-3 w-fit"
              style={{ color: '#1d4ed8' }}
            >
              Start Your WordPress Project <ArrowRight size={14} />
            </a>
          </div>

          {/* Image side */}
          <div className="lg:w-[46%] flex-shrink-0 relative rounded-2xl sm:rounded-3xl overflow-hidden"
            style={{ minHeight: 340, boxShadow: '0 24px 60px rgba(37,99,235,0.14)', border: '1px solid rgba(37,99,235,0.12)' }}>
            <img
              src={cmsIntroImg}
              alt="WordPress CMS Development Services in Thanjavur — ARA Discover Marketing"
              loading="lazy"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s]"
              style={{ minHeight: 340 }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(29,78,216,0.18) 0%, rgba(37,99,235,0.12) 100%)' }} />
            <div className="absolute bottom-5 left-5 right-5 px-5 py-4 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.93)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.96)' }}>
              <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: '#1d4ed8' }}>
                WordPress CMS Development in Thanjavur
              </p>
              <p className="text-[12.5px] font-bold text-slate-800 leading-snug">
                Custom solutions with full content control, scalability, and SEO-ready structure.
              </p>
            </div>

            {/* Decorative corner dots */}
            <div className="absolute top-4 left-4 w-10 h-10 rounded-full border pointer-events-none"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
            <div className="absolute top-6 left-6 w-4 h-4 rounded-full border pointer-events-none"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }} />
          </div>
        </div>

        {/* Three pillar cards — horizontal flex, no grid */}
        <div className="reveal flex flex-col sm:flex-row gap-5">
          {pillars.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="flex-1 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
              style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.95)', boxShadow: '0 4px 20px rgba(37,99,235,0.07)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 16px 40px ${color}18`; e.currentTarget.style.borderColor = `${color}30` }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.95)' }}
            >
              <div className="h-0.5 w-0 rounded-full group-hover:w-10 transition-all duration-500 mb-5"
                style={{ background: `linear-gradient(90deg, ${color}, ${color}44)` }} />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
                <Icon size={19} style={{ color }} />
              </div>
              <h3 className="text-[13px] font-bold text-slate-800 mb-2 leading-snug">{title}</h3>
              <p className="text-[12.5px] text-slate-500 leading-[1.75]">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

