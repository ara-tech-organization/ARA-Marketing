import { ArrowUpRight, Briefcase } from 'lucide-react'
import healthcareImg from '../../assets/Home/H9.png'
import ecommerceImg from '../../assets/Home/H4.png'
import realEstateImg from '../../assets/Home/H5.png'

const caseStudies = [
  {
    industry: 'Healthcare',
    title: 'Medical Clinic — 180% Growth in Online Appointments',
    desc: 'Implemented local SEO, Google Ads and social media campaigns for a Thanjavur healthcare provider, resulting in 180% increase in online appointment bookings and top 3 Google rankings.',
    metrics: [{ val: '180%', label: 'Traffic Growth' }, { val: '3x', label: 'Lead Increase' }, { val: '#1', label: 'Google Rank' }],
    image: healthcareImg,
    tag: 'Healthcare',
  },
  {
    industry: 'eCommerce',
    title: 'Online Store — 500+ Qualified Leads Generated Monthly',
    desc: 'End-to-end performance marketing, Meta Ads and SEO strategy for an eCommerce brand that generated 500+ qualified leads every month with a consistent 4x return on ad spend.',
    metrics: [{ val: '500+', label: 'Monthly Leads' }, { val: '4x', label: 'ROAS' }, { val: '95%', label: 'Retention' }],
    image: ecommerceImg,
    tag: 'eCommerce',
  },
  {
    industry: 'Real Estate',
    title: 'Real Estate Brand — 150% Increase in Website Traffic',
    desc: 'Complete digital branding, SEO and paid advertising for a real estate developer resulting in 150% organic traffic growth, strong social media presence and high-quality property inquiries.',
    metrics: [{ val: '150%', label: 'More Traffic' }, { val: '2x', label: 'Inquiries' }, { val: '90%', label: 'Satisfaction' }],
    image: realEstateImg,
    tag: 'Real Estate',
  },
]


export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-6 mb-14 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
              <Briefcase size={11} /> Our Portfolio
            </span>
            <h2
              className="text-[clamp(23px,3.1vw,35px)] font-bold text-slate-900 leading-tight tracking-tight"
              style={{ fontWeight: 700 }}
            >
              Successful Projects &amp;<br />Brand Growth Stories
            </h2>
          </div>
          <p className="text-base text-slate-500 leading-relaxed max-w-lg">
            Our portfolio includes businesses from healthcare, education, retail, real estate,
            restaurants, manufacturing and eCommerce industries. We have helped brands improve
            search rankings, generate quality leads and build strong digital identities.
            Our innovative campaigns and measurable results have earned us the best digital
            branding and advertising in Thanjavur from our lovable clients.
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((c, i) => (
            <div
              key={c.title}
              className={`reveal delay-${i + 1} group bg-white border border-slate-200 rounded-[24px]
                overflow-hidden cursor-default transition-all duration-300
                hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-200/80 hover:border-blue-200`}
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={c.image}
                  alt={`${c.title} — Best Digital Marketing Company in Thanjavur | ARA Marketing`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-300" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white
                  text-[10px] font-bold uppercase tracking-wider rounded-full">
                  {c.tag}
                </span>
                <a
                  href="#case-study"
                  className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full
                    flex items-center justify-center text-slate-700
                    opacity-0 group-hover:opacity-100 transition-all duration-300
                    hover:bg-blue-600 hover:text-white"
                  aria-label="View case study"
                >
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[14px] font-bold text-slate-900 leading-snug mb-3
                  transition-colors duration-300 group-hover:text-blue-600 line-clamp-2">
                  {c.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-5 line-clamp-3">
                  {c.desc}
                </p>
                {/* Metrics row */}
                <div className="flex gap-4 pt-4 border-t border-slate-100">
                  {c.metrics.map(m => (
                    <div key={m.label} className="flex-1 text-center">
                      <div className="text-[16px] font-bold text-blue-600 leading-none">{m.val}</div>
                      <div className="text-[10px] text-slate-400 font-semibold mt-1 uppercase tracking-wide">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
