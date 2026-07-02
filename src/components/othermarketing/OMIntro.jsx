import { Mail, Users, Smartphone, BarChart2, CheckCircle2, TrendingUp, Award, ArrowRight, Sparkles } from 'lucide-react'
import omIntroImg from '../../assets/Other-services/o1.webp'

const features = [
  { icon: Mail,       color: '#2563eb', label: 'Email Marketing',      desc: 'Targeted campaigns with high open rates and automated workflows that convert subscribers into loyal customers.' },
  { icon: Users,      color: '#2563eb', label: 'Influencer Marketing', desc: 'Strategic partnerships with trusted creators who amplify your brand to engaged, highly relevant audiences.' },
  { icon: Smartphone, color: '#0ea5e9', label: 'SMS Marketing',        desc: '99% delivery rate bulk SMS campaigns delivering timely offers, reminders, and updates directly to phones.' },
  { icon: BarChart2,  color: '#2563eb', label: 'Campaign Analytics',   desc: 'Monthly transparent reports covering ROI, audience growth, and conversion data with actionable insights.' },
]

const imageStats = [
  { value: '500+', label: 'Campaigns', color: '#60a5fa' },
  { value: '98%',  label: 'Satisfied',  color: '#60a5fa' },
  { value: '2.4M', label: 'Reach',      color: '#38bdf8' },
]

export default function OMIntro() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1.5px,transparent 1.5px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.10) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Left — content */}
          <div className="flex-1 min-w-0 reveal-left text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
              border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 shadow-sm">
              <Sparkles size={11} /> About Our Services
            </span>

            <h2 className="text-[clamp(23px,3.1vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
              Multi-Channel Marketing Solutions That{' '}
              <span style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Drive Engagement & Conversions
              </span>
            </h2>

            <p className="text-[14.5px] text-slate-500 leading-[1.85] mb-4 max-w-[500px]">
              Today's businesses need more than ad campaigns to stay competitive. ARA Discover Marketing offers strategic email marketing, influencer marketing, and SMS marketing solutions that help you engage and retain your audience effectively.
            </p>
            <p className="text-[14.5px] text-slate-500 leading-[1.85] mb-8 max-w-[500px]">
              We are one of the best email marketing companies in Thanjavur and a trusted influencers marketing agency in Thanjavur — building custom campaigns for startups, local businesses, and growing brands with transparent reporting and measurable results.
            </p>

            {/* Feature rows */}
            <div className="flex flex-col gap-3 mb-10 text-left">
              {features.map(({ icon: Icon, color, label, desc }) => (
                <div key={label} className="group flex gap-4 p-4 rounded-2xl bg-white border border-slate-100
                  hover:border-blue-100 hover:shadow-md transition-all duration-300"
                  style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color + '30'; e.currentTarget.style.boxShadow = `0 8px 24px ${color}12` }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg,${color}18,${color}08)`, border: `1.5px solid ${color}28` }}>
                    <Icon size={17} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-slate-800 mb-0.5">{label}</p>
                    <p className="text-[12.5px] text-slate-500 leading-[1.65]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/ARA-Marketing/contact-us"
              className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ boxShadow: '0 8px 28px rgba(37,99,235,0.28)' }}>
              Start Your Campaign <ArrowRight size={15} />
            </a>
          </div>

          {/* Right — image with floating overlays */}
          <div className="lg:w-[460px] flex-shrink-0 reveal-right">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[3rem]"
                style={{ background: 'linear-gradient(135deg,rgba(37,99,235,0.12),rgba(37,99,235,0.08))', filter: 'blur(4px)' }} />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{ boxShadow: '0 32px 80px rgba(37,99,235,0.18)' }}>
                <img
                  src={omIntroImg}
                  alt="Digital marketing team working on multi-channel campaign strategy in Thanjavur"
                  className="w-full h-[560px] object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg,transparent 45%,rgba(5,10,30,0.62) 100%)' }} />

                {/* Bottom stat strip */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                  <div className="flex gap-2.5">
                    {imageStats.map(({ value, label, color }) => (
                      <div key={label} className="flex-1 rounded-xl px-3 py-2.5 text-center"
                        style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.16)' }}>
                        <p className="text-[19px] font-bold leading-none" style={{ color }}>{value}</p>
                        <p className="text-[9px] text-white/55 font-semibold mt-0.5 leading-tight">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2.5 px-4 py-2.5 bg-white rounded-2xl shadow-xl border border-violet-100 animate-float">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)' }}>
                  <Award size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-none">Premium Agency</p>
                  <p className="text-[9.5px] text-slate-400 mt-0.5">Thanjavur's Top Choice</p>
                </div>
              </div>

              {/* Floating badge bottom-left */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2 px-3.5 py-2 bg-white rounded-2xl shadow-xl border border-emerald-100 animate-float-delay">
                <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-none">Results Guaranteed</p>
                  <p className="text-[9.5px] text-slate-400 mt-0.5">Transparent Reporting</p>
                </div>
              </div>

              {/* Side pill */}
              <div className="hidden lg:flex absolute top-1/2 -left-6 -translate-y-1/2 flex-col items-center gap-1.5 px-2.5 py-3.5 bg-white rounded-2xl shadow-lg border border-blue-100 animate-float">
                <TrendingUp size={13} className="text-blue-600" />
                <span className="text-[10px] font-bold text-blue-700 [writing-mode:vertical-rl] rotate-180">ROI Driven</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
