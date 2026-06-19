import { Trophy, TrendingUp, Users, BarChart2, Globe2, CheckCircle, Briefcase } from 'lucide-react'
import seoCampaignImg from '../../assets/SEO/s3.webp'

const industries = [
  'Healthcare', 'Education', 'Real Estate',
  'Manufacturing', 'eCommerce', 'Hospitality', 'Professional Services',
]

const achievements = [
  { icon: TrendingUp, label: 'Improved keyword rankings',         desc: 'Consistent first-page positions across competitive search terms.' },
  { icon: Users,      label: 'Increased organic traffic',         desc: 'Measurable growth in qualified visitors from search engines.' },
  { icon: BarChart2,  label: 'Higher lead conversions',           desc: 'More business enquiries and sales driven by organic channels.' },
  { icon: Globe2,     label: 'Better local search visibility',    desc: 'Dominant presence in Google Maps and local search results.' },
  { icon: Briefcase,  label: 'Enhanced website performance',      desc: 'Faster load times, better UX, and improved Core Web Vitals scores.' },
]

export default function SEOCampaigns() {
  return (
    <section
      className="py-12 md:py-16 lg:py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f8faff 0%, #eff6ff 50%, #ffffff 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Trophy size={11} /> Portfolio
          </span>
          <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Successful SEO Campaigns{' '}
            <span className="text-gradient-blue">&amp; Ranking Achievements</span>
          </h2>
          <p className="text-[15px] text-slate-500 max-w-2xl mx-auto">
            We are trusted by businesses for international SEO services in Thanjavur and local SEO campaigns for specific target markets.
          </p>
        </div>

        {/* Two-column layout: industries + achievements */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-6 lg:gap-8 items-start">

          {/* Left: Industries served */}
          <div
            className="reveal md:w-[280px] lg:w-[320px] flex-shrink-0 bg-white rounded-3xl p-5 md:p-6 lg:p-8 border border-blue-100"
            style={{ boxShadow: '0 8px 40px rgba(37,99,235,0.08)' }}
          >
            <h3 className="text-[13px] font-bold text-slate-800 uppercase tracking-wider mb-6">
              Industries We Serve
            </h3>
            <p className="text-[13px] text-slate-500 leading-[1.8] mb-6">
              We have businesses from diverse sectors in our SEO portfolio.
            </p>
            <div className="flex flex-col gap-2.5">
              {industries.map((industry, i) => (
                <div
                  key={industry}
                  className={`reveal delay-${(i % 4) + 1} flex items-center gap-3 px-4 py-2.5
                    rounded-xl transition-all duration-300 hover:bg-blue-50 group`}
                  style={{ background: '#f8faff', border: '1px solid #e0eaff' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0
                    group-hover:bg-blue-600 transition-colors duration-200" />
                  <span className="text-[13px] font-semibold text-slate-700
                    group-hover:text-blue-700 transition-colors duration-200">
                    {industry}
                  </span>
                </div>
              ))}
            </div>

            {/* SEO image */}
            <div className="mt-6 rounded-2xl overflow-hidden">
              <img
                src={seoCampaignImg}
                alt="Successful SEO Campaigns and Ranking Achievements in Thanjavur"
                loading="lazy"
                className="w-full h-[120px] object-cover"
              />
            </div>
          </div>

          {/* Right: Achievements */}
          <div className="flex-1 flex flex-col gap-4">
            <p className="reveal text-[14px] text-slate-600 font-medium leading-[1.8] bg-blue-50 rounded-2xl p-5 border border-blue-100">
              We have successfully delivered measurable results for clients across healthcare, education, real estate, manufacturing, eCommerce, hospitality, and professional services.
            </p>

            {achievements.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className={`reveal delay-${(i % 4) + 1} flex items-start gap-5 p-6
                  bg-white border border-slate-100 rounded-2xl
                  hover:shadow-lg hover:border-blue-100 hover:-translate-y-0.5
                  transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0
                  bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600">
                  <Icon size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                    <h3 className="text-[14px] font-bold text-slate-800">{label}</h3>
                  </div>
                  <p className="text-[13px] text-slate-500 leading-[1.75]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
