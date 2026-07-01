import { Smartphone, TrendingUp, Users, Cpu, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import introImage from '../../assets/MobileApp/m1.webp'

const bullets = [
  'Native iOS & Android apps built for performance',
  'AI mobile app development in Thanjavur',
  'Cross-platform solutions with consistent UX',
  'Full-cycle — strategy, design, launch & support',
  'Transparent process & timely delivery',
]

const features = [
  {
    icon: TrendingUp,
    title: 'Skyrocket Customer Engagement',
    desc: 'Mobile apps create a direct channel to your customers, driving higher engagement and retention through push notifications, AI personalization, and seamless UX.',
    color: '#2563eb',
  },
  {
    icon: Cpu,
    title: 'AI-Driven Intelligence',
    desc: 'Our AI mobile app development in Thanjavur embeds smart features — recommendation engines, chatbots, predictive analytics — turning your app into a competitive asset.',
    color: '#2563eb',
  },
  {
    icon: Users,
    title: 'Seamless Cross-Platform Reach',
    desc: 'Reach your entire audience whether they use iOS or Android. Our cross-platform expertise ensures a consistent, premium experience across all devices.',
    color: '#0ea5e9',
  },
  {
    icon: Smartphone,
    title: 'Full-Cycle Development',
    desc: 'From strategy and design to deployment and post-launch support, we handle every phase of mobile app development with precision and transparency.',
    color: '#2563eb',
  },
]

export default function MAIntro() {
  return (
    <section
      id="ma-intro"
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
      style={{ background: '#f0f9ff' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle,rgba(37,99,235,0.4) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Orbs */}
      <div className="absolute -top-32 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.14) 0%,transparent 65%)' }} />
      <div className="absolute -bottom-24 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.10) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Top: split layout ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center mb-14 lg:mb-16">

          {/* LEFT: text */}
          <div className="flex-1 lg:max-w-[48%] reveal-left">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
              style={{ background: 'rgba(37,99,235,0.10)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.20)' }}>
              <Sparkles size={11} /> Why Mobile Apps Matter
            </span>

            {/* H2 */}
            <h2 className="text-[clamp(22px,2.8vw,42px)] font-bold leading-tight tracking-tight text-slate-900 mb-5">
              Mobile Apps —{' '}
              <span style={{
                background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                The Backbone of Growth
              </span>
            </h2>

            <p className="text-[13.5px] sm:text-[15px] leading-[1.85] mb-7" style={{ color: '#64748b' }}>
              Mobile apps are essential in today's digital age. ARA Discover Marketing is a leading custom mobile app development agency in Thanjavur delivering fast-loaded, secure, and performance-driven AI-powered mobile apps that transform how businesses connect with customers.
            </p>

            {/* Bullet list */}
            <ul className="flex flex-col gap-2.5 mb-8">
              {bullets.map(b => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#2563eb' }} />
                  <span className="text-[13px] sm:text-[13.5px]" style={{ color: '#475569' }}>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a href="/ARA-Marketing/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:gap-3"
              style={{ background: 'linear-gradient(135deg,#1d4ed8,#0ea5e9)', boxShadow: '0 8px 28px rgba(37,99,235,0.35)' }}>
              Start Your App Project <ArrowRight size={14} />
            </a>
          </div>

          {/* RIGHT: image with floating badges */}
          <div className="w-full lg:flex-1 reveal-right">
            <div className="relative">

              {/* Glow halo */}
              <div className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.22) 0%, transparent 70%)' }} />

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden"
                style={{ boxShadow: '0 32px 80px rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.25)' }}>
                <img
                  src={introImage}
                  alt="Mobile App Development Services Thanjavur"
                  className="w-full object-cover"
                  style={{ height: 'clamp(220px,35vw,380px)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg,rgba(3,17,31,0.65) 0%,rgba(37,99,235,0.18) 100%)' }} />

                {/* Image overlay text */}
                <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-7 py-5"
                  style={{ background: 'linear-gradient(0deg,rgba(3,17,31,0.90) 0%,transparent 100%)' }}>
                  <p className="text-white text-[14px] sm:text-[16px] font-semibold leading-snug max-w-lg mb-1">
                    We are one of the best app development agencies in Thanjavur offering innovative solutions that seamlessly integrate with your digital strategy.
                  </p>
                  <p className="text-[12px]" style={{ color: '#93c5fd' }}>
                    Native iOS &amp; Android apps, cross-platform solutions, and AI-powered features — all under one roof.
                  </p>
                </div>
              </div>

              {/* Floating badge — top left */}
              <div className="absolute -top-5 left-6 bg-white rounded-2xl px-4 py-3 hidden md:flex items-center gap-3 animate-float"
                style={{ boxShadow: '0 8px 32px rgba(37,99,235,0.28)', border: '1px solid rgba(37,99,235,0.15)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#1e40af,#2563eb)' }}>
                  <Cpu size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold leading-none mb-0.5">AI-Powered Apps</p>
                  <p className="text-[17px] font-black text-slate-800 leading-tight">200+ Delivered</p>
                </div>
              </div>

              {/* Floating badge — bottom right */}
              <div className="absolute -bottom-5 right-6 bg-white rounded-2xl px-4 py-3 hidden md:flex items-center gap-3 animate-float"
                style={{ boxShadow: '0 8px 32px rgba(37,99,235,0.22)', border: '1px solid rgba(37,99,235,0.15)', animationDelay: '1.6s' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)' }}>
                  <TrendingUp size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold leading-none mb-0.5">Client Satisfaction</p>
                  <p className="text-[17px] font-black text-slate-800 leading-tight">98% Rate</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Bottom: feature cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 reveal">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div key={title}
              className="group rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-default"
              style={{ background: '#ffffff', border: '1px solid rgba(37,99,235,0.12)', boxShadow: '0 4px 20px rgba(37,99,235,0.06)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${color}45`
                e.currentTarget.style.background = `${color}0d`
                e.currentTarget.style.boxShadow = `0 16px 40px ${color}18, 0 0 0 1px ${color}30`
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(37,99,235,0.12)'
                e.currentTarget.style.background = '#ffffff'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.06)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              <div className="h-0.5 rounded-full mb-5 w-10" style={{ background: `linear-gradient(90deg,${color},${color}60)` }} />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                <Icon size={18} style={{ color }} />
              </div>
              <h3 className="text-[13px] font-bold text-slate-900 mb-2 leading-snug">{title}</h3>
              <p className="text-[12px] sm:text-[12.5px] leading-[1.75]" style={{ color: '#64748b' }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA line */}
        <div className="text-center mt-10 reveal">
          <p className="text-[13.5px] mb-3" style={{ color: '#64748b' }}>
            As a leading mobile app development company in Thanjavur, we make your brand shine in the competitive market.
          </p>
          <a href="/ARA-Marketing/contact-us"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold transition-all duration-200 hover:gap-3"
            style={{ color: '#2563eb' }}>
            Start Your App Project Today <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}
