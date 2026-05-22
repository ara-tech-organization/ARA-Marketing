import { Search, Share2, BarChart2, Palette, Video, Megaphone, Layers, LayoutGrid, ArrowRight, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    desc: 'AI-powered On-Page, Off-Page, Technical, Local and Mobile SEO to improve search engine rankings and drive consistent organic traffic. We deliver the best digital marketing services in Thanjavur through data-driven SEO optimization.',
    link: '/services/seo',
    tag: 'Most Popular',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing (SMM)',
    desc: 'High-performing campaigns on Facebook, Instagram, LinkedIn and Pinterest to boost brand awareness and customer engagement. One of the best digital marketing companies in Thanjavur creating campaigns that increase reach.',
    link: '/services/smm',
  },
  {
    icon: BarChart2,
    title: 'Search Engine Marketing (SEM)',
    desc: 'Expert Google Ads, PPC, Display, YouTube and Shopping Ads to generate qualified leads through targeted paid advertising. Businesses rely on us for top digital marketing services in Thanjavur.',
    link: '/services/sem',
  },
  {
    icon: Palette,
    title: 'Branding & Advertising',
    desc: 'Creative branding strategies, ad creatives and digital campaigns to establish a strong online presence. Ara Discover Marketing is known as the best digital branding and advertising in Thanjavur.',
    link: '/services/branding',
  },
  {
    icon: Video,
    title: 'Video Editing',
    desc: 'Professional reels, promotional videos, corporate films, motion graphics, color grading and cinematic edits that captivate your target audience and drive meaningful engagement.',
    link: '/services/video-editing',
  },
  {
    icon: Megaphone,
    title: 'Performance Marketing',
    desc: 'ROI-focused lead generation and performance campaigns that convert the right audience into loyal, long-term customers — measurably. The best digital marketing agency in Thanjavur for scaling your business.',
    link: '/services/performance',
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
      <div className="max-w-[1200px] mx-auto px-7">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            <Layers size={11} /> Our Services
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-slate-900 leading-tight tracking-tight">
            Complete Digital Marketing &amp;<br />Branding Solutions
          </h2>
          <p className="text-base text-slate-500 leading-relaxed max-w-xl mx-auto mt-3.5">
            If you are seeking the best digital marketing agency in Thanjavur — Ara Discover Marketing
            offers AI-powered, measurable growth through innovative digital campaigns.
          </p>
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
                  className="svc-arrow flex-shrink-0 flex items-center gap-1.5 px-4 py-2
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

      </div>
    </section>
  )
}
