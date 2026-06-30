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

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Result-Driven intro — dark full-width editorial ── */}
        <div className="mb-16 reveal rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(145deg, #0a1628 0%, #0f2448 100%)', boxShadow: '0 20px 60px rgba(10,22,40,0.20)' }}>

          {/* Top accent line */}
          <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)' }} />

          <div className="px-7 sm:px-10 pt-10 pb-8">

            {/* Eyebrow + heading */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.18em] mb-4"
                  style={{ background: 'rgba(37,99,235,0.20)', color: '#93c5fd', border: '1px solid rgba(147,197,253,0.20)' }}>
                  <TrendingUp size={9} /> Digital Marketing Services
                </span>
                <h2 className="font-bold text-white leading-[1.18] tracking-tight"
                  style={{ fontSize: 'clamp(22px,3vw,38px)' }}>
                  Result-Driven Digital Marketing Services for Modern Businesses
                </h2>
              </div>

              {/* Right — 3 quick stats */}
              <div className="flex sm:flex-col gap-4 sm:gap-3 flex-shrink-0">
                {[
                  { val: '500+', label: 'Clients Served',      color: '#60a5fa' },
                  { val: '5.0★', label: 'Google Rating',       color: '#fbbf24' },
                  { val: '98%',  label: 'Client Satisfaction',  color: '#34d399' },
                ].map(({ val, label, color }) => (
                  <div key={label} className="flex sm:flex-row items-center gap-2.5 px-4 py-2.5 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <span className="text-[20px] font-black leading-none" style={{ color }}>{val}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider"
                      style={{ color: 'rgba(255,255,255,0.40)' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 paragraph columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {[
                {
                  icon: Zap,
                  text: 'If you are seeking the best digital marketing agency in Thanjavur or the best branding agency in Thanjavur for a trusted partner for branding and advertising, ARA Discover Marketing is here. We have an expert team that offers AI-powered measurable growth with innovative digital campaigns.',
                },
                {
                  icon: Target,
                  text: "In today's competitive online marketplace, companies require more than just a website. They need to be found, engaged, converted, and trusted. ARA Discover Marketing is the best digital marketing services in Thanjavur which helps businesses to attract the right audience, and convert them into loyal customers.",
                },
                {
                  icon: BarChart,
                  text: "ARA Discover Marketing is a top digital marketing company in Thanjavur and we combine creativity, analytics and technology to create campaigns that drive real business results. Whether it's SEO optimization, social media campaigns or paid advertising, we help brands get ahead of the competition.",
                },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(37,99,235,0.22)' }}>
                    <Icon size={15} style={{ color: '#93c5fd' }} />
                  </div>
                  <p className="text-[13px] leading-[1.80]" style={{ color: 'rgba(255,255,255,0.52)' }}>{text}</p>
                </div>
              ))}
            </div>

            {/* Bottom — 3 highlight chips */}
            <div className="flex flex-wrap gap-2.5 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {[
                'AI-powered campaigns with measurable results',
                'Expert team for SEO, SMM, SEM & Branding',
                'Best digital marketing agency in Thanjavur',
              ].map(item => (
                <div key={item} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  <CheckCircle size={12} style={{ color: '#34d399', flexShrink: 0 }} />
                  <span className="text-[12.5px] font-medium" style={{ color: 'rgba(255,255,255,0.70)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

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

        {/* Service rows — all 6 */}
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
