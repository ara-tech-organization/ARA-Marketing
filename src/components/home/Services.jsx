import { Search, Share2, BarChart2, Palette, Video, Layers, LayoutGrid, ArrowRight, ArrowUpRight, TrendingUp, CheckCircle, Zap, Target, BarChart } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    desc: 'ARA offers AI-powered SEO services like On-Page SEO, Off-Page SEO, Technical SEO, Local SEO and Mobile SEO to improve search engine rankings and organic traffic. Our SEO experts deliver the best digital marketing services in Thanjavur and are among the best digital marketing companies in Thanjavur, optimizing websites for users and search engines.',
    link: '/services/seo',
    tag: 'Most Popular',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing (SMM)',
    desc: 'Our social media marketing services help businesses boost brand awareness and customer engagement on Facebook, Instagram, LinkedIn and Pinterest. As one of the best digital marketing companies in Thanjavur, we create high-performing campaigns that increase reach and engagement.',
    link: '/services/social-media-marketing',
  },
  {
    icon: BarChart2,
    title: 'Search Engine Marketing (SEM)',
    desc: 'We are skilled professionals in Google Ads, PPC campaigns, Display Ads, YouTube Ads and Shopping Ads. Businesses looking for the top digital marketing services in Thanjavur rely on us to generate qualified leads through targeted paid advertising campaigns.',
    link: '/services/google-ads',
  },
  {
    icon: Palette,
    title: 'Branding & Advertising',
    desc: 'ARA Discover Marketing is also known as the best digital branding and advertising in Thanjavur, helping businesses establish a strong online presence with creative branding strategies, ad creatives and digital campaigns.',
    link: '/services/graphic-design',
  },
  {
    icon: Video,
    title: 'Video Editing',
    desc: 'We create professional video editing solutions that transform raw footage into engaging, high-quality visual content. Our services include reels editing, promotional videos, corporate videos, motion graphics, color correction and cinematic edits.',
    link: '/services/video-editing',
  },
]

const otherTags = [
  { label: 'Email Marketing',          link: '/services/email-marketing' },
  { label: 'Influencer Marketing',     link: '/services/influencer-marketing' },
  { label: 'SMS Marketing',            link: '/services/sms-marketing' },
  { label: 'Content Marketing',        link: '/services/content-marketing' },
  { label: 'Lead Generation Campaigns', link: '/services/lead-generation' },
]

const introColumns = [
  {
    icon: Zap,
    eyebrow: 'Who We Are',
    iconBg: '#eff6ff',
    iconBorder: '#bfdbfe',
    iconColor: '#2563eb',
    borderColor: '#bfdbfe',
    text: 'If you are seeking the best digital marketing agency in Thanjavur or the best branding agency in Thanjavur for a trusted partner for branding and advertising, ARA Discover Marketing is here. We have an expert team that offers AI-powered measurable growth with innovative digital campaigns.',
  },
  {
    icon: Target,
    eyebrow: 'What We Do',
    iconBg: '#f0f9ff',
    iconBorder: '#bae6fd',
    iconColor: '#0ea5e9',
    borderColor: '#bae6fd',
    text: "In today's competitive online marketplace, companies require more than just a website. They need to be found, engaged, converted, and trusted. ARA Discover Marketing is the best digital marketing services in Thanjavur which helps businesses to attract the right audience, and convert them into loyal customers.",
  },
  {
    icon: BarChart,
    eyebrow: 'Why Choose Us',
    iconBg: '#eff6ff',
    iconBorder: '#bfdbfe',
    iconColor: '#2563eb',
    borderColor: '#bfdbfe',
    text: "ARA Discover Marketing is a top digital marketing company in Thanjavur and we combine creativity, analytics and technology to create campaigns that drive real business results. Whether it's SEO optimization, social media campaigns or paid advertising, we help brands get ahead of the competition.",
  },
]

const introStats = [
  { val: '500+', label: 'Clients Served',      color: '#2563eb' },
  { val: '5.0★', label: 'Google Rating',       color: '#0ea5e9' },
  { val: '98%',  label: 'Client Satisfaction',  color: '#2563eb' },
]

const introChips = [
  'AI-powered campaigns with measurable results',
  'Expert team for SEO, SMM, SEM & Branding',
  'Best digital marketing agency in Thanjavur',
]

export default function Services() {
  return (
    <section id="services" className="bg-white">

      {/* ══════════════════════════════════════════════════════
          FULL-WIDTH EDITORIAL INTRO — Result-Driven block
      ══════════════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden py-16 sm:py-20"
        style={{ background: '#f0f9ff' }}>

        {/* Background decorations — identical to AboutMV */}
        <div className="absolute pointer-events-none rounded-full"
          style={{ top: '-5%', right: '-4%', width: '320px', height: '320px',
            background: 'radial-gradient(circle, rgba(186,230,253,0.6) 0%, transparent 65%)' }} />
        <div className="absolute pointer-events-none rounded-full"
          style={{ bottom: '-5%', left: '-4%', width: '260px', height: '260px',
            background: 'radial-gradient(circle, rgba(219,234,254,0.7) 0%, transparent 65%)' }} />
        <div className="absolute pointer-events-none rounded-full hidden lg:block"
          style={{ top: '30%', left: '-3%', width: '160px', height: '160px',
            border: '1.5px dashed rgba(14,165,233,0.25)' }} />
        <div className="absolute pointer-events-none rounded-full hidden lg:block"
          style={{ bottom: '20%', right: '-2%', width: '110px', height: '110px',
            border: '1.5px solid rgba(37,99,235,0.15)' }} />
        <div className="absolute pointer-events-none hidden lg:block"
          style={{ top: '15%', right: '8%', width: '40px', height: '40px',
            border: '1.5px solid rgba(37,99,235,0.2)', borderRadius: '8px', transform: 'rotate(25deg)' }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-24">

          {/* ── Zone 1: Badge + Heading + Stats ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-start mb-12">

            {/* Left — badge + heading */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                text-[11px] font-bold uppercase tracking-widest mb-5"
                style={{ background: 'white', color: '#2563eb', border: '1px solid #bfdbfe',
                  boxShadow: '0 2px 12px rgba(37,99,235,0.08)' }}>
                <Zap size={11} /> Digital Marketing Services
              </span>

              <h2 className="font-bold text-slate-900 leading-tight tracking-tight"
                style={{ fontSize: 'clamp(26px,3.6vw,50px)' }}>
                Result-Driven Digital Marketing{' '}
                <span style={{
                  background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Services for Modern Businesses
                </span>
              </h2>
            </div>

            {/* Right — 3 stats */}
            <div className="flex flex-row lg:flex-col gap-3 flex-shrink-0">
              {introStats.map(({ val, label, color }) => (
                <div key={label}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-2xl"
                  style={{ background: 'white', border: '1px solid #dbeafe',
                    boxShadow: '0 16px 48px rgba(37,99,235,0.08)' }}>
                  <span className="text-[22px] font-black leading-none" style={{ color }}>{val}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dot divider — identical to AboutMV */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,#bfdbfe)' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#2563eb' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#0ea5e9' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#2563eb' }} />
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,#bfdbfe,transparent)' }} />
          </div>

          {/* ── Zone 2: 3 feature columns ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {introColumns.map(({ icon: Icon, eyebrow, iconBg, iconBorder, iconColor, borderColor, text }) => (
              <div key={eyebrow} className="rounded-[20px] p-6 group"
                style={{ background: 'white', border: `1.5px solid ${borderColor}`,
                  boxShadow: '0 16px 48px rgba(37,99,235,0.08)' }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0
                    transition-all duration-300 group-hover:scale-110"
                    style={{ background: iconBg, border: `1px solid ${iconBorder}` }}>
                    <Icon size={14} style={{ color: iconColor }} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest"
                    style={{ color: iconColor }}>{eyebrow}</span>
                </div>
                <p className="text-[13.5px] leading-[1.85] text-slate-500">{text}</p>
                {/* Bottom accent line — identical to AboutMV */}
                <div className="mt-5 h-[3px] w-16 rounded-full"
                  style={{ background: `linear-gradient(90deg,${iconColor},#0ea5e9)` }} />
              </div>
            ))}
          </div>

          {/* ── Zone 3: chips ── */}
          <div className="flex flex-wrap justify-center gap-3 pt-8"
            style={{ borderTop: '1px solid #bfdbfe' }}>
            {introChips.map(item => (
              <div key={item}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full"
                style={{ background: 'white', border: '1px solid #bfdbfe',
                  boxShadow: '0 2px 12px rgba(37,99,235,0.08)' }}>
                <CheckCircle size={13} style={{ color: '#2563eb', flexShrink: 0 }} />
                <span className="text-[13px] font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>


      {/* ══════════════════════════════════════
          REST OF SERVICES SECTION
      ══════════════════════════════════════ */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 py-16">

        {/* Why Do Businesses Choose Ara */}
        <div className="mb-16 reveal">
          <div className="text-center mb-8">
            <h2 className="text-[clamp(21px,2.8vw,33px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
              Why Do Businesses Choose Ara Discover Marketing?
            </h2>
            <p className="text-[14px] text-slate-500 leading-relaxed max-w-3xl mx-auto">
              Businesses and startups trust Ara because we focus on measurable growth, transparency and long-term success.
              Also one of the top digital marketing companies in Thanjavur, our approach is centered around understanding
              your business requirements and building AI-driven customized strategies that generate ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {[
              'Customized digital marketing strategies',
              'Experienced SEO & advertising experts',
              'Transparent reporting & analytics',
              'AI-focused marketing campaigns',
              'Affordable packages for startups & enterprises',
              'Dedicated support & campaign optimization',
            ].map(item => (
              <div key={item} className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-blue-50 border border-blue-100">
                <CheckCircle size={15} className="text-blue-600 flex-shrink-0" />
                <span className="text-[13.5px] text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-[14px] text-slate-500 leading-relaxed text-center">
            Are you looking for the <strong className="text-slate-700">best digital marketing agency in Thanjavur</strong>?
            Ara Discover Marketing offers a complete digital solution that drives visibility, engagement and conversions.
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            <Layers size={11} /> Our Services
          </span>
          <h2
            className="text-[clamp(23px,3.1vw,35px)] font-bold text-slate-900 leading-tight tracking-tight"
            style={{ fontWeight: 700 }}
          >
            Complete Digital Marketing &amp;<br />Branding Solutions
          </h2>
        </div>

        {/* Service rows */}
        <div className="flex flex-col mb-10">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className={`svc-row reveal delay-${(i % 4) + 1} flex items-center gap-6 py-6 px-4 cursor-pointer group`}
              >
                <div className="svc-icon-bg flex-shrink-0 w-12 h-12 bg-blue-50 rounded-2xl
                  flex items-center justify-center text-blue-600 transition-all duration-300">
                  <Icon size={20} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="svc-title text-[16px] font-bold text-slate-900 leading-tight transition-colors duration-300">
                      {s.title}
                    </h3>
                    {s.tag && (
                      <span className="hidden sm:inline-block px-2.5 py-0.5 bg-blue-600 text-white
                        text-[9px] font-bold uppercase tracking-wider rounded-full">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <p className="svc-desc text-sm text-slate-500 leading-relaxed transition-colors duration-300 line-clamp-2">
                    {s.desc}
                  </p>
                </div>

                <a
                  href={s.link}
                  className="svc-arrow hidden sm:flex flex-shrink-0 items-center gap-1.5 px-4 py-2
                    rounded-full border border-slate-200 text-slate-500 text-[12px] font-semibold
                    opacity-0 -translate-x-2 transition-all duration-300
                    hover:bg-blue-600 hover:border-blue-600 hover:text-white whitespace-nowrap"
                  aria-label={`View more about ${s.title}`}
                >
                  View More <ArrowUpRight size={13} />
                </a>
              </div>
            )
          })}
        </div>

        {/* Other services */}
        <div className="reveal flex flex-wrap items-center gap-6 bg-slate-50 border border-blue-100
          rounded-2xl p-7">
          <div className="flex items-center gap-2 text-slate-700 flex-shrink-0">
            <LayoutGrid size={16} className="text-blue-600" />
            <h3 className="text-[14px] font-bold">Other Marketing Services</h3>
          </div>
          <div className="flex flex-wrap gap-2 flex-1">
            {otherTags.map(t => (
              <a
                key={t.label}
                href={t.link}
                className="px-4 py-1.5 bg-white border border-blue-200 rounded-full text-sm
                  font-medium text-blue-700 transition-all duration-300
                  hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-0.5"
              >
                {t.label}
              </a>
            ))}
          </div>
          <a
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold
              text-blue-600 hover:gap-2.5 transition-all duration-300 whitespace-nowrap ml-auto"
          >
            View All <ArrowRight size={14} />
          </a>
        </div>

        <p className="reveal text-center text-[14px] text-slate-500 leading-relaxed mt-8">
          Grow your business with Email Marketing, Influencer Marketing, SMS Marketing, Content Marketing,
          and Lead Generation Campaigns. We create targeted strategies to improve brand visibility, engage
          customers, generate quality leads, and support business growth.
        </p>

        <p className="reveal text-center text-[14px] text-slate-500 leading-relaxed mt-4">
          As the top digital branding and advertising in Thanjavur, we help businesses create memorable
          brand identities and impactful customer experiences.
        </p>

      </div>
    </section>
  )
}
