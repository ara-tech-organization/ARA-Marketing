import {
  Share2, Target, Palette, Megaphone, MessageSquare, Eye, Users, BarChart2,
  CheckCircle, Briefcase, Image, TrendingUp, Layers, ArrowRight
} from 'lucide-react'
import facebookImg    from '../../assets/SMM/Facebook.webp'
import linkedinImg    from '../../assets/SMM/Linkedin.webp'
import pinterestImg   from '../../assets/SMM/Pintrest.webp'
import socialMediaImg from '../../assets/SMM/Socialmedia.webp'

const overviewItems = [
  { icon: Target,        label: 'Social Media Strategy & Planning' },
  { icon: Palette,       label: 'Creative Post Design & Content Creation' },
  { icon: Megaphone,     label: 'Social Media Advertising Campaigns' },
  { icon: MessageSquare, label: 'Audience Engagement & Community Management' },
  { icon: Eye,           label: 'Brand Awareness Campaigns' },
  { icon: Users,         label: 'Lead Generation Campaigns' },
  { icon: Share2,        label: 'Influencer Collaboration Strategies' },
  { icon: BarChart2,     label: 'Performance Tracking & Optimization' },
]

const platforms = [
  {
    icon: Users,
    color: '#2563eb',
    bgLight: '#dbeafe',
    h3: 'Facebook Marketing',
    imgSrc: facebookImg,
    imgAlt: 'Facebook Marketing and Advertising Services in Thanjavur',
    desc: [
      'Facebook is still one of the most effective platforms for marketing businesses and customer targeting. Our social media team specializes in facebook marketing for business in Thanjavur, helping brands generate leads, increase page engagement, and improve conversions with strategic campaigns.',
      'We are one of the trusted facebook advertising companies in Thanjavur, who create result-oriented campaigns to improve brand visibility and customer interaction.',
      'If you are looking for reliable Facebook social media marketing companies in Thanjavur for creative and ROI-focused Facebook strategies, your search ends at ARA Discover Marketing.',
    ],
    keywords: ['Facebook Ads', 'Facebook Lead Gen'],
    services: [
      'Facebook Ads Campaign Management',
      'Audience Targeting & Retargeting',
      'Creative Ad Design',
      'Lead Generation Ads',
      'Engagement Campaigns',
      'Facebook Page Optimization',
    ],
    tag: 'Most Popular',
  },
  {
    icon: Briefcase,
    color: '#0ea5e9',
    bgLight: '#e0f2fe',
    h3: 'LinkedIn Marketing',
    imgSrc: linkedinImg,
    imgAlt: 'LinkedIn Professional Networking and Branding in Thanjavur',
    desc: [
      'LinkedIn marketing helps businesses to reach out to professionals, decision makers, and industry leaders.',
      'Our LinkedIn social media marketing services in Thanjavur are all about creating professional brand authority and increasing B2B engagement.',
      'We also offer a LinkedIn engagement strategy in Thanjavur to help organisations enhance audience interaction and professional visibility.',
    ],
    keywords: ['B2B Marketing', 'LinkedIn Content'],
    services: [
      'LinkedIn Profile Optimization',
      'LinkedIn Ad Campaigns',
      'B2B Lead Generation',
      'Corporate Branding',
      'Content Marketing for LinkedIn',
      'Employee Branding Strategies',
    ],
    tag: 'B2B Focused',
  },
  {
    icon: Image,
    color: '#2563eb',
    bgLight: '#dbeafe',
    h3: 'Pinterest Marketing',
    imgSrc: pinterestImg,
    imgAlt: 'Pinterest Branding and Visual Marketing in Thanjavur',
    desc: [
      'Pinterest is a giant in visual discovery and product promotion. Our Pinterest social media marketing in Thanjavur services help in drawing highly engaged audiences with creative visual campaigns for brands.',
      'Looking for Pinterest digital marketing in Thanjavur, you can trust us to create visually appealing campaigns that generate traffic and increase brand awareness.',
      'We also offer strategic solutions for advertising on Pinterest in Thanjavur for better reach and conversions.',
    ],
    keywords: ['Pinterest Ads', 'Pinterest SEO'],
    services: [
      'Pinterest Business Account Setup',
      'Pinterest SEO Optimization',
      'Pin Design & Content Strategy',
      'Traffic Generation Campaigns',
      'Product Promotion Campaigns',
      'Pinterest Ads Management',
    ],
    tag: 'Visual Discovery',
  },
  {
    icon: TrendingUp,
    color: '#2563eb',
    bgLight: '#dbeafe',
    h3: 'Social Media Optimization (SMO)',
    imgSrc: socialMediaImg,
    imgAlt: 'Social Media Optimization SMO Services in Thanjavur',
    desc: [
      'Our SMO services help in improving the social media visibility, audience engagement & profile performance on platforms. We are offering advanced social media optimisation services in Thanjavur, helping businesses to create strong online branding.',
      'We are one of the best social media optimisation SMO companies in Thanjavur, helping businesses to improve their social reach and engagement using strategic optimisation techniques. Our knowledge in SMO for Instagram in Thanjavur helps brands to boost follower engagement and profile exposure.',
      'Looking for the best social media optimisation SMO services in Thanjavur, trust our SMO team to provide you with result-driven social optimisation strategies.',
    ],
    keywords: ['SMO Services', 'Instagram SMO'],
    services: [
      'Social Profile Optimization',
      'Hashtag & Content Strategy',
      'Engagement Optimization',
      'Audience Growth Strategies',
      'Instagram Optimization',
      'Social Branding Enhancements',
    ],
    tag: 'Profile Growth',
  },
]

/* Lazy image with graceful fallback */
function PlatformImage({ src, alt, color, bgLight }) {
  return (
    <div
      className="w-full rounded-xl overflow-hidden mb-5"
      style={{ height: 160, background: bgLight }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width="600"
        height="160"
        className="w-full h-full object-cover"
        onError={e => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.parentElement.style.display = 'flex'
          e.currentTarget.parentElement.style.alignItems = 'center'
          e.currentTarget.parentElement.style.justifyContent = 'center'
        }}
      />
    </div>
  )
}

export default function SMMServices() {
  return (
    <section id="smm-services" className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> Our Services
          </span>
          <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Platform-Focused{' '}
            <span className="text-gradient-blue">Social Media Marketing</span> Services
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-3xl mx-auto mb-6">
            We offer full social media management and social media advertising services in Thanjavur to increase engagement, brand recognition, and customer engagement.
          </p>
          <p className="text-[14px] font-bold text-slate-700 uppercase tracking-wider mb-2">
            Our social media marketing services include:
          </p>
        </div>

        {/* Overview services grid */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 mb-8
          bg-slate-50 border border-blue-100 rounded-2xl p-7">
          {overviewItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center
                text-blue-500 flex-shrink-0 transition-all duration-300
                group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={15} />
              </div>
              <span className="text-[12px] font-medium text-slate-600 leading-snug
                group-hover:text-slate-800 transition-colors duration-200">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Section Intro Outro Text */}
        <div className="text-center reveal mb-16 max-w-3xl mx-auto">
          <p className="text-[15px] text-slate-600 font-medium">
            If you are seeking for the best social media marketing services in Thanjavur, then you can depend on us for advanced social campaigns and measurable business growth.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map(({ icon: Icon, color, bgLight, h3, imgSrc, imgAlt, desc, keywords: kws, services, tag }, i) => (
            <div
              key={h3}
              className={`reveal delay-${(i % 4) + 1} svc-card-top relative bg-white border border-slate-100
                rounded-3xl p-8 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Tag */}
              {tag && (
                <span
                  className="absolute top-6 right-6 px-2.5 py-0.5 text-[10px] font-bold
                    uppercase tracking-wider rounded-full text-white"
                  style={{ background: color }}
                >
                  {tag}
                </span>
              )}

              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0
                    transition-all duration-300 group-hover:scale-105"
                  style={{ background: bgLight }}
                >
                  <Icon size={26} style={{ color }} />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-slate-900 leading-tight">{h3}</h3>
                  <div
                    className="h-1 w-8 rounded-full mt-1.5 transition-all duration-300 group-hover:w-16"
                    style={{ background: color }}
                  />
                </div>
              </div>

              {/* Platform image with keyword alt text */}
              <PlatformImage src={imgSrc} alt={imgAlt} color={color} bgLight={bgLight} />

              {/* Description with natural keyword integration */}
              <div className="flex flex-col gap-2.5 mb-5">
                {desc.map((p, i) => (
                  <p key={i} className="text-[13px] text-slate-500 leading-[1.8]">{p}</p>
                ))}
              </div>

              {/* Hidden keyword spans for SEO (screen-reader accessible) */}
              <div className="sr-only">
                {kws.map(k => <span key={k}>{k}</span>)}
              </div>

              {/* Service list */}
              <ul className="space-y-2.5">
                {services.map(s => (
                  <li key={s} className="flex items-center gap-2.5 text-[13px] text-slate-600">
                    <CheckCircle size={14} style={{ color, flexShrink: 0 }} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom link */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <a
                  href="/ARA-Marketing/contact-us"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold
                    hover:gap-2.5 transition-all duration-300"
                  style={{ color }}
                >
                  Get {h3.split(' ')[0]} Marketing Services <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
