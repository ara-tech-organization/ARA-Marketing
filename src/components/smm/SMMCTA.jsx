import { MessageSquare } from 'lucide-react'
import SectionDecor from '../common/SectionDecor'

export default function SMMCTA() {
  return (
    <section
      className="relative overflow-hidden py-16"
      style={{ background: 'linear-gradient(135deg,#eff6ff 0%,#dbeafe 40%,#eff6ff 100%)' }}
    >
      <SectionDecor variant="a" />
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 text-center">

        {/* Heading */}
        <h2 className="reveal text-[clamp(21px,2.7vw,37px)] font-bold text-slate-900 leading-tight tracking-tight mb-5 max-w-4xl mx-auto">
          Are You Ready to Grow Your Brand Through{' '}
          <span className="text-gradient-blue">
            Social Media Marketing?
          </span>
        </h2>

        {/* Subtext */}
        <p className="reveal delay-1 text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto mb-10">
          Partner with ARA Discover Marketing, a trusted provider of social media agency services in
          Thanjavur, delivering creative campaigns, audience engagement strategies, and high-performing
          paid social advertising solutions.
        </p>

        {/* CTAs */}
        <div className="reveal delay-2 flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#smm-services"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-[15px]
              text-blue-600 hover:bg-blue-50 transition-all duration-300"
            style={{ border: '1px solid #e2e8f0', background: '#f8faff' }}
          >
            <MessageSquare size={16} /> View Our Services
          </a>
        </div>

        {/* Bottom trust row */}
        <div className="reveal delay-3 flex flex-wrap gap-8 justify-center">
          {[
            'Best SMM Company in Thanjavur',
            'AI-Driven Social Campaigns',
            'Transparent ROI Reporting',
          ].map(item => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-[12px] font-medium text-slate-500">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
