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
    color: '#60a5fa',
    text: 'If you are seeking the best digital marketing agency in Thanjavur or the best branding agency in Thanjavur for a trusted partner for branding and advertising, ARA Discover Marketing is here. We have an expert team that offers AI-powered measurable growth with innovative digital campaigns.',
  },
  {
    icon: Target,
    eyebrow: 'What We Do',
    color: '#a78bfa',
    text: "In today's competitive online marketplace, companies require more than just a website. They need to be found, engaged, converted, and trusted. ARA Discover Marketing is the best digital marketing services in Thanjavur which helps businesses to attract the right audience, and convert them into loyal customers.",
  },
  {
    icon: BarChart,
    eyebrow: 'Why Choose Us',
    color: '#34d399',
    text: "ARA Discover Marketing is a top digital marketing company in Thanjavur and we combine creativity, analytics and technology to create campaigns that drive real business results. Whether it's SEO optimization, social media campaigns or paid advertising, we help brands get ahead of the competition.",
  },
]

const introStats = [
  { val: '500+', label: 'Clients Served',     color: '#60a5fa' },
  { val: '5.0★', label: 'Google Rating',      color: '#fbbf24' },
  { val: '98%',  label: 'Client Satisfaction', color: '#34d399' },
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
      <div className="relative w-full overflow-hidden"
        style={{ background: '#f0f9ff' }}>

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(37,99,235,0.08) 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }} />

        {/* Glow orbs — same as AboutMV */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(186,230,253,0.6) 0%, transparent 65%)', transform: 'translate(30%,-40%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.7) 0%, transparent 65%)', transform: 'translate(-25%,40%)' }} />
        <div className="absolute pointer-events-none rounded-full hidden lg:block"
          style={{ top: '30%', left: '-2%', width: '160px', height: '160px', border: '1.5px dashed rgba(14,165,233,0.25)' }} />
        <div className="absolute pointer-events-none hidden lg:block"
          style={{ top: '12%', right: '6%', width: '40px', height: '40px', border: '1.5px solid rgba(37,99,235,0.2)', borderRadius: '8px', transform: 'rotate(25deg)' }} />

        <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-24 py-16 sm:py-20">

          {/* ── Zone 1: Heading + Stats ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-start mb-12">

            {/* Left — badge + heading */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                text-[10px] font-black uppercase tracking-[0.18em] mb-5"
                style={{ background: 'white', color: '#2563eb', border: '1px solid #bfdbfe', boxShadow: '0 2px 12px rgba(37,99,235,0.08)' }}>
                <TrendingUp size={9} /> Digital Marketing Services
              </span>

              <h2 className="font-bold leading-[1.13] tracking-tight"
                style={{ fontSize: 'clamp(26px,3.6vw,54px)', color: '#0f172a' }}>
                Result-Driven Digital Marketing
                <br />
                <span style={{
                  background: 'linear-gradient(90deg,#2563eb,#7c3aed)',
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
                  style={{
                    background: '#ffffff',
                    border: '1px solid rgba(37,99,235,0.14)',
                    boxShadow: '0 2px 12px rgba(37,99,235,0.08)',
                  }}>
                  <span className="text-[22px] font-black leading-none" style={{ color }}>{val}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: '#64748b' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Separator */}
          <div className="h-px mb-10"
            style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.18),transparent)' }} />

          {/* ── Zone 2: 3 feature columns ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {introColumns.map(({ icon: Icon, eyebrow, color, text }) => (
              <div key={eyebrow} className="rounded-2xl p-6"
                style={{
                  background: '#ffffff',
                  border: `1px solid ${color}28`,
                  borderLeft: `3px solid ${color}`,
                  boxShadow: '0 2px 16px rgba(37,99,235,0.07)',
                }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}14`, border: `1px solid ${color}30` }}>
                    <Icon size={14} style={{ color }} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.16em]"
                    style={{ color }}>{eyebrow}</span>
                </div>
                <p className="text-[13px] leading-[1.82]"
                  style={{ color: '#475569' }}>{text}</p>
              </div>
            ))}
          </div>

          {/* ── Zone 3: chips ── */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-8"
            style={{ borderTop: '1px solid rgba(37,99,235,0.12)' }}>
            {introChips.map(item => (
              <div key={item}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: '#ffffff', border: '1px solid rgba(37,99,235,0.18)', boxShadow: '0 1px 6px rgba(37,99,235,0.07)' }}>
                <CheckCircle size={12} style={{ color: '#059669', flexShrink: 0 }} />
                <span className="text-[12.5px] font-medium"
                  style={{ color: '#1e3a5f' }}>{item}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom separator */}
        <div className="h-px"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.15),transparent)' }} />
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
