import { Target, Zap, TrendingUp, Globe2, Layers } from 'lucide-react'
import smmIntroImg from '../../assets/SMM/m1.png'

const highlights = [
  {
    icon: Target,
    label: 'Audience Targeting',
    desc: 'Precision-targeted campaigns reaching the right audience at the right time.',
  },
  {
    icon: Zap,
    label: 'AI-Driven Strategies',
    desc: 'AI-powered tools for smarter campaign optimization and better ROI.',
  },
  {
    icon: TrendingUp,
    label: 'Measurable Growth',
    desc: 'Data-backed performance tracking and fully transparent reporting.',
  },
  {
    icon: Globe2,
    label: 'Multi-Platform Reach',
    desc: 'Facebook, LinkedIn, Pinterest, Instagram and beyond — all managed.',
  },
]

export default function SMMIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">
        <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-16 items-center">

          {/* Left — 4 highlight cards + section image */}
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <div
                  key={label}
                  className={`reveal delay-${i + 1} svc-card-top relative bg-white border border-slate-100
                    rounded-2xl p-5 group transition-all duration-300
                    hover:shadow-lg hover:shadow-blue-100/60 hover:-translate-y-1`}
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center
                    text-blue-600 mb-3 transition-all duration-300
                    group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-[13px] font-bold text-slate-800 mb-1.5">{label}</h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Approach image */}
            <div className="reveal rounded-2xl overflow-hidden" style={{ height: 210 }}>
              <img
                src={smmIntroImg}
                alt="Social Media Marketing Strategy in Thanjavur - ARA Discover Marketing"
                loading="lazy"
                width="600"
                height="210"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right — text content */}
          <div>
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
                border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
                <Layers size={11} /> Our Approach
              </span>
              <h2 className="text-[clamp(23px,2.7vw,37px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
                Strategic Social Media Marketing That Fuels{' '}
                <span className="text-gradient-blue">High Engagement</span> &amp; Conversions
              </h2>
            </div>

            <div className="reveal delay-1 space-y-4">
              <p className="text-[15px] text-slate-500 leading-[1.85]">
                Social media has become one of the finest methods to keep engaging customers and grow businesses. ARA Discover Marketing is a digital marketing and social media marketing agency in Thanjavur, offering cutting-edge AI-based solutions for brands aiming to engage their target audience with high-quality creative campaigns and performance-oriented marketing strategies.
              </p>
              <p className="text-[15px] text-slate-500 leading-[1.85]">
                We are one of the best social media companies in Thanjavur that focuses on audience targeting, content creation, ad optimisation, and engagement strategies that increase visibility and customer interaction. Our expertise in marketing through social media in Thanjavur helps businesses to build trust, increase followers, and generate conversions across multiple platforms.
              </p>
              <p className="text-[15px] text-slate-500 leading-[1.85]">
                We are also a trusted social advertising agency in Thanjavur that helps businesses across industries run high-performing paid social media advertising campaigns.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
