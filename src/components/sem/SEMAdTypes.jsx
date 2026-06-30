import { Monitor, Play, ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react'
import displayImg  from '../../assets/SEM/DisplayAdvertising.webp'
import videoImg    from '../../assets/SEM/Video-editing.webp'
import ecommerceImg from '../../assets/SEM/E-commerce.webp'

const adTypes = [
  {
    id: 'display',
    icon: Monitor,
    label: 'Display Advertising',
    tag: 'Display Ads',
    color: '#7c3aed',
    imgSrc: displayImg,
    imgAlt: 'Google Display Advertising in Thanjavur',
    reverse: false,
    paragraphs: [
      'Display Advertising helps businesses reach their target audience visually across millions of websites, apps, and platforms within the Google Display Network. ARA Discover Marketing is one of the top Google display advertising companies in Thanjavur, creating visually compelling banner and responsive display ads that drive brand awareness and customer engagement.',
      'We design and manage strategic display campaigns tailored to your audience interests, behaviors, and demographics. Our remarketing display campaigns re-engage visitors who have already shown interest in your business, improving the chances of conversion and increasing brand recall.',
      'As a trusted Google promotion service provider in Thanjavur, we ensure your display ads appear at the right place and time — across news sites, blogs, mobile apps, and YouTube — delivering maximum reach with minimal wasted spend.',
    ],
    items: ['Banner & Responsive Ad Design', 'Audience & Interest Targeting', 'Remarketing Campaigns', 'Display Network Optimization', 'Brand Awareness Campaigns', 'Performance Reporting'],
  },
  {
    id: 'youtube',
    icon: Play,
    label: 'YouTube Ads',
    tag: 'Video Advertising',
    color: '#0891b2',
    imgSrc: videoImg,
    imgAlt: 'YouTube Ads service in Thanjavur',
    reverse: true,
    paragraphs: [
      'YouTube is the world second-largest search engine and one of the most powerful platforms for video advertising. Our YouTube ads in Thanjavur help businesses connect with their audience through compelling video content that drives brand awareness, customer engagement, and conversions.',
      'We specialize in YouTube display advertising and YouTube search advertising in Thanjavur, creating skippable, non-skippable, and discovery ads that align with your brand message and business goals. Our video ad strategies ensure your content reaches the right viewers at the right moment in their buyer journey.',
      'From script planning to audience targeting and campaign optimization, our team manages every aspect of your YouTube advertising campaigns for measurable ROI. We create performance-focused video campaigns that build trust and turn viewers into loyal customers.',
    ],
    items: ['Skippable & Non-Skippable Video Ads', 'YouTube Discovery Ads', 'Video Remarketing Campaigns', 'Audience Targeting Strategies', 'In-Stream Ad Optimization', 'View & Engagement Tracking'],
  },
  {
    id: 'shopping',
    icon: ShoppingBag,
    label: 'Shopping Ads',
    tag: 'E-Commerce Ads',
    color: '#059669',
    imgSrc: ecommerceImg,
    imgAlt: 'Google Shopping Ads in Thanjavur',
    reverse: false,
    paragraphs: [
      'Google Shopping Ads allow e-commerce businesses to showcase their products directly on Google search results with images, prices, and product details — right when customers are ready to buy. Our shopping ads in Thanjavur help online stores increase product visibility and drive high-intent traffic that converts.',
      'We handle everything from Google Merchant Center setup and product feed optimization to campaign management and bid strategy. Our data-driven approach ensures your products appear for the most relevant search queries, reducing wasted spend and maximizing your return on ad spend.',
      'Whether you run a small online store or a large e-commerce platform, ARA Discover Marketing shopping ad campaigns are designed to boost product sales, improve ROAS, and grow your revenue. We continuously monitor and optimize campaigns to keep your products competitive in the market.',
    ],
    items: ['Google Merchant Center Setup', 'Product Feed Optimization', 'Shopping Campaign Management', 'Smart Shopping Campaigns', 'Product Remarketing Strategies', 'Conversion Tracking & ROAS Optimization'],
  },
]

export default function SEMAdTypes() {
  return (
    <section className="py-16 sm:py-20 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 flex flex-col gap-20 sm:gap-24 lg:gap-28">
        {adTypes.map(({ id, icon: Icon, label, tag, color, imgSrc, imgAlt, paragraphs, items, reverse }) => (
          <div key={id} className={`reveal flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>

            {/* Image */}
            <div className="w-full lg:w-[480px] flex-shrink-0 relative rounded-2xl sm:rounded-3xl overflow-hidden"
              style={{ boxShadow: `0 24px 64px ${color}22` }}>
              <img src={imgSrc} alt={imgAlt} loading="lazy"
                className="w-full object-contain" />

              {/* Tag badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 px-3.5 py-2 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.22)' }}>
                <Icon size={13} className="text-white" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{tag}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4"
                style={{ background: color + '12', color, border: `1px solid ${color}25` }}>
                <Icon size={11} /> {tag}
              </span>

              <h2 className="text-[clamp(21px,2.7vw,35px)] font-bold text-slate-900 leading-[1.15] tracking-tight mb-5">
                {label} <span style={{ color }}>Services in Thanjavur</span>
              </h2>

              <div className="flex flex-col gap-3.5 mb-7">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-[13.5px] text-slate-600 leading-[1.82]">{p}</p>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {items.map(item => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={14} style={{ color, flexShrink: 0 }} />
                    <span className="text-[13px] font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <a href="/ARA-Marketing/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[13px]
                  font-bold transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg,${color},${color}cc)`, boxShadow: `0 6px 20px ${color}35` }}>
                Get {label} Services <ArrowRight size={14} />
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
