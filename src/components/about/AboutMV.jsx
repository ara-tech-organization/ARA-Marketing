import { Target, Eye, Zap, Globe, Rocket, TrendingUp, Lightbulb, Cpu, ArrowRight } from 'lucide-react'

import missionImage from '../../assets/About/A2.png'
import visionImage from '../../assets/About/A3.png'

const missionPoints = [
  { icon: Target,     text: 'Deliver customized solutions that enhance online visibility' },
  { icon: Globe,      text: 'Reach target audiences effectively with data-driven strategies' },
  { icon: TrendingUp, text: 'Turn engagement into real, measurable business growth' },
]

const visionPoints = [
  { icon: Lightbulb, text: 'Empower businesses of all sizes to leverage digital marketing' },
  { icon: Cpu,       text: 'Bring innovation and latest tech to performance marketing' },
  { icon: Rocket,    text: 'Generate sustainable, long-term value across all industries' },
]

export default function AboutMV() {
  return (
    <section id="our-story" className="relative overflow-hidden py-20 sm:py-28"
      style={{ background: '#f0f9ff' }}>

      {/* ── Background decorations ── */}
      <div className="absolute pointer-events-none rounded-full"
        style={{ top: '-5%', right: '-4%', width: '320px', height: '320px',
          background: 'radial-gradient(circle, rgba(186,230,253,0.6) 0%, transparent 65%)' }} />
      <div className="absolute pointer-events-none rounded-full"
        style={{ bottom: '-5%', left: '-4%', width: '260px', height: '260px',
          background: 'radial-gradient(circle, rgba(219,234,254,0.7) 0%, transparent 65%)' }} />
      <div className="absolute pointer-events-none rounded-full hidden lg:block"
        style={{ top: '30%', left: '-3%', width: '160px', height: '160px',
          border: '1.5px dashed rgba(14,165,233,0.25)' }} />
      <div className="absolute pointer-events-none rounded-full hidden lg:block"
        style={{ bottom: '20%', right: '-2%', width: '110px', height: '110px',
          border: '1.5px solid rgba(37,99,235,0.15)' }} />
      <div className="absolute pointer-events-none hidden lg:block"
        style={{ top: '15%', right: '8%', width: '40px', height: '40px',
          border: '1.5px solid rgba(37,99,235,0.2)', borderRadius: '8px', transform: 'rotate(25deg)' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ background: 'white', color: '#2563eb', border: '1px solid #bfdbfe',
              boxShadow: '0 2px 12px rgba(37,99,235,0.08)' }}>
            <Zap size={11} /> Our Core Beliefs
          </span>
          <h2 className="font-bold text-slate-900 leading-tight tracking-tight"
            style={{ fontSize: 'clamp(25px,3.1vw,43px)' }}>
            The Purpose That{' '}
            <span style={{
              background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Drives Us Forward</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto mt-3.5">
            Our mission and vision are the foundation of everything we do — guiding how we serve
            our clients and shape the future of digital marketing in Thanjavur.
          </p>
        </div>

        {/* ── Mission block ── */}
        <div className="flex flex-col lg:flex-row gap-10 items-center mb-16 reveal">

          {/* Image left */}
          <div className="w-full lg:w-[480px] flex-shrink-0">
            <div className="relative">
              {/* Blue accent behind */}
              <div className="absolute pointer-events-none rounded-[20px]"
                style={{ top: '12px', left: '-12px', width: '90%', height: '90%',
                  background: 'linear-gradient(135deg,#bfdbfe,#93c5fd)', zIndex: 0 }} />
              <div className="relative z-10 rounded-[20px] overflow-hidden"
                style={{ boxShadow: '0 24px 60px rgba(37,99,235,0.15)' }}>
                <img
                  src={missionImage}
                  alt="ARA Discover Marketing mission — strategic digital marketing planning in Thanjavur"
                  className="w-full object-cover block"
                  style={{ aspectRatio: '10/7' }}
                />
              </div>
            </div>
          </div>

          {/* Content right */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl mb-5"
              style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
              <Target size={13} style={{ color: '#2563eb' }} />
              <span className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: '#2563eb' }}>Mission</span>
            </div>

            <h3 className="font-bold text-slate-900 mb-4 leading-tight"
              style={{ fontSize: 'clamp(19px,2vw,29px)' }}>
              Helping Businesses Become{' '}
              <span style={{
                background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Strong Digital Brands</span>
            </h3>

            <p className="text-[14.5px] leading-[1.9] mb-7 text-slate-500">
              At ARA Discover Marketing, our mission is to help businesses become strong and successful
              digital brands. We deliver customized marketing solutions that enhance online visibility,
              reach the target audience effectively, and turn engagement into real business growth. We
              strive to help brands grow, adapt, and stay ahead in the competitive digital marketplace.
            </p>

            <div className="flex flex-col gap-3.5 mb-7">
              {missionPoints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3.5 group">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5
                    transition-all duration-300 group-hover:scale-110"
                    style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                    <Icon size={14} style={{ color: '#2563eb' }} />
                  </div>
                  <span className="text-[13.5px] text-slate-600 leading-relaxed">{text}</span>
                </div>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="h-[3px] w-24 rounded-full"
              style={{ background: 'linear-gradient(90deg,#2563eb,#0ea5e9)' }} />
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,#bfdbfe)' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: '#2563eb' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: '#0ea5e9' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: '#2563eb' }} />
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,#bfdbfe,transparent)' }} />
        </div>

        {/* ── Vision block ── */}
        <div className="flex flex-col lg:flex-row-reverse gap-10 items-center reveal">

          {/* Image right */}
          <div className="w-full lg:w-[480px] flex-shrink-0">
            <div className="relative">
              {/* Accent behind */}
              <div className="absolute pointer-events-none rounded-[20px]"
                style={{ top: '12px', right: '-12px', width: '90%', height: '90%',
                  background: 'linear-gradient(135deg,#bae6fd,#93c5fd)', zIndex: 0 }} />
              <div className="relative z-10 rounded-[20px] overflow-hidden"
                style={{ boxShadow: '0 24px 60px rgba(14,165,233,0.18)' }}>
                <img
                  src={visionImage}
                  alt="ARA Discover Marketing vision — future digital innovation strategy in Thanjavur"
                  className="w-full object-cover block"
                  style={{ aspectRatio: '10/7' }}
                />
              </div>
            </div>
          </div>

          {/* Content left */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl mb-5"
              style={{ background: '#f0f9ff', border: '1px solid #bae6fd' }}>
              <Eye size={13} style={{ color: '#0ea5e9' }} />
              <span className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: '#0ea5e9' }}>Vision</span>
            </div>

            <h3 className="font-bold text-slate-900 mb-4 leading-tight"
              style={{ fontSize: 'clamp(19px,2vw,29px)' }}>
              Empowering Every Business to{' '}
              <span style={{
                background: 'linear-gradient(135deg,#0ea5e9,#2563eb)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Lead the Digital Age</span>
            </h3>

            <p className="text-[14.5px] leading-[1.9] mb-7 text-slate-500">
              Our vision is to empower businesses of all sizes to fully utilize the power of digital
              marketing to fuel growth, drive innovation and lead their industries and we are bringing
              together innovation and the latest technology, to revolutionize performance digital
              marketing and generate sustainable value for businesses.
            </p>

            <div className="flex flex-col gap-3.5 mb-7">
              {visionPoints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3.5 group">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5
                    transition-all duration-300 group-hover:scale-110"
                    style={{ background: '#f0f9ff', border: '1px solid #bae6fd' }}>
                    <Icon size={14} style={{ color: '#0ea5e9' }} />
                  </div>
                  <span className="text-[13.5px] text-slate-600 leading-relaxed">{text}</span>
                </div>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="h-[3px] w-24 rounded-full"
              style={{ background: 'linear-gradient(90deg,#0ea5e9,#2563eb)' }} />
          </div>
        </div>

        {/* CTA band */}
        <div className="mt-16 reveal rounded-[24px] p-8 sm:p-10 flex flex-col sm:flex-row
          items-center justify-between gap-6"
          style={{ background: 'white', border: '1.5px solid #dbeafe',
            boxShadow: '0 16px 48px rgba(37,99,235,0.08)' }}>
          <div>
            <h4 className="text-[17px] font-bold text-slate-900 mb-1">
              Ready to grow your business digitally?
            </h4>
            <p className="text-[14px] text-slate-500">
              Let's build a strategy that delivers real, measurable results.
            </p>
          </div>
          <a href="/ARA-Marketing/contact-us"
            className="flex-shrink-0 btn-glow inline-flex items-center gap-2 px-7 py-3.5
              rounded-full font-bold text-[14px] text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
              boxShadow: '0 8px 32px rgba(37,99,235,0.28)' }}>
            Talk to an Expert <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  )
}
