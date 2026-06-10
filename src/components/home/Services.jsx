import { Search, Share2, BarChart2, Palette, Video, Layers, LayoutGrid, ArrowRight, ArrowUpRight, TrendingUp, Star, CheckCircle } from 'lucide-react'

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
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Result-Driven intro section */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* Left — text */}
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
              <TrendingUp size={11} /> Digital Marketing Services
            </span>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-slate-900 leading-tight tracking-tight mb-6">
              Result-Driven Digital Marketing Services<br />for Modern Businesses
            </h2>
            <div className="space-y-4">
              <p className="text-base text-slate-500 leading-relaxed">
                If you are seeking the best digital marketing agency in Thanjavur or the best branding agency in Thanjavur for a trusted partner for branding and advertising, ARA Discover Marketing is here. We have an expert team that offers AI-powered measurable growth with innovative digital campaigns.
              </p>
              <p className="text-base text-slate-500 leading-relaxed">
                In today's competitive online marketplace, companies require more than just a website. They need to be found, engaged, converted, and trusted. ARA Discover Marketing is the best digital marketing services in Thanjavur which helps businesses to attract the right audience, and convert them into loyal customers.
              </p>
              <p className="text-base text-slate-500 leading-relaxed">
                ARA Discover Marketing is a top digital marketing company in Thanjavur and we combine creativity, analytics and technology to create campaigns that drive real business results. Whether it's SEO optimization, social media campaigns or paid advertising, we help brands get ahead of the competition.
              </p>
            </div>

            {/* Key highlights */}
            <div className="mt-6 flex flex-col gap-2.5">
              {[
                'AI-powered campaigns with measurable results',
                'Expert team for SEO, SMM, SEM & Branding',
                'Best digital marketing agency in Thanjavur',
              ].map(item => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle size={15} className="text-blue-600 flex-shrink-0" />
                  <span className="text-[13.5px] text-slate-600 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image panel */}
          <div className="reveal-right relative rounded-3xl overflow-hidden" style={{ minHeight: '420px', boxShadow: '0 24px 64px rgba(37,99,235,0.18)' }}>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=640&h=480&fit=crop&auto=format&q=80"
              alt="Digital Marketing Agency in Thanjavur - ARA Discover Marketing"
              width="640" height="480" loading="lazy"
              className="w-full h-full object-cover"
              style={{ minHeight: '420px' }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(160deg, rgba(15,23,42,0.35) 0%, rgba(29,78,216,0.45) 50%, rgba(15,23,42,0.80) 100%)' }}
            />

            {/* Top badge */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold text-white"
                style={{ background: 'rgba(37,99,235,0.6)', border: '1px solid rgba(96,165,250,0.3)', backdropFilter: 'blur(8px)' }}>
                <TrendingUp size={9} /> ARA Discover Marketing
              </span>
            </div>

            {/* Floating stat card */}
            <div
              className="absolute top-5 right-5 px-4 py-3 rounded-2xl text-center"
              style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <p className="text-[26px] font-black text-white leading-none">500+</p>
              <p className="text-[9px] text-blue-200 font-bold uppercase tracking-wide mt-0.5">Clients Served</p>
            </div>

            {/* Bottom panel */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-5"
              style={{ background: 'linear-gradient(0deg, rgba(15,23,42,0.95) 0%, transparent 100%)' }}>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[15px] font-bold text-white mb-1.5">Best Digital Marketing Agency</p>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-amber-400" fill="#fbbf24" />)}
                    <span className="text-[10px] text-amber-300 font-semibold ml-1">5.0 Rating</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[28px] font-black leading-none text-white">98%</p>
                  <p className="text-[9px] text-blue-300 font-bold uppercase tracking-wide mt-0.5">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            <Layers size={11} /> Our Services
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-slate-900 leading-tight tracking-tight">
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
                    <h3 className="svc-title text-[17px] font-bold text-slate-900 leading-tight transition-colors duration-300">
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
            <h3 className="text-[15px] font-bold">Other Marketing Services</h3>
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
          As the top digital branding and advertising in Thanjavur, we help businesses create memorable
          brand identities and impactful customer experiences.
        </p>

      </div>
    </section>
  )
}
