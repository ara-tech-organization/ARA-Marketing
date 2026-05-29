import { Smartphone, TrendingUp, Users, Cpu, ArrowRight, Sparkles } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Skyrocket Customer Engagement',
    desc: 'Mobile apps create a direct channel to your customers, driving higher engagement and retention through push notifications, AI personalization, and seamless UX.',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
  },
  {
    icon: Cpu,
    title: 'AI-Driven Intelligence',
    desc: 'Our AI mobile app development in Thanjavur embeds smart features — recommendation engines, chatbots, predictive analytics — turning your app into a competitive asset.',
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.08)',
  },
  {
    icon: Users,
    title: 'Seamless Cross-Platform Reach',
    desc: 'Reach your entire audience whether they use iOS or Android. Our cross-platform expertise ensures a consistent, premium experience across all devices.',
    color: '#0891b2',
    bg: 'rgba(8,145,178,0.08)',
  },
  {
    icon: Smartphone,
    title: 'Full-Cycle Development',
    desc: 'From strategy and design to deployment and post-launch support, we handle every phase of mobile app development with precision and transparency.',
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
  },
]

export default function MAIntro() {
  return (
    <section
      id="ma-intro"
      className="relative overflow-hidden py-16 sm:py-24"
      style={{ background: 'linear-gradient(160deg,#03111f 0%,#04131c 50%,#030e18 100%)' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(124,58,237,0.12) 0%,transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 65%)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle,rgba(124,58,237,0.4) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(124,58,237,0.15)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.3)' }}>
            <Sparkles size={11} /> Why Mobile Apps Matter
          </span>
          <h2 className="text-[clamp(24px,3vw,42px)] font-bold leading-tight tracking-tight text-white mb-5">
            Mobile Apps — The{' '}
            <span style={{ background: 'linear-gradient(135deg,#a78bfa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Backbone of Growth
            </span>
          </h2>
          <p className="text-[15px] leading-[1.85] max-w-3xl mx-auto" style={{ color: '#94a3b8' }}>
            Mobile apps are essential in today's digital age. Ara Discover Marketing is a leading custom mobile app development agency in Thanjavur delivering fast-loaded, secure, and performance-driven AI-powered mobile apps that transform how businesses connect with customers.
          </p>
        </div>

        {/* Central image */}
        <div className="relative reveal mb-14">
          <div className="rounded-3xl overflow-hidden"
            style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5),0 0 0 1px rgba(124,58,237,0.2)' }}>
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=420&fit=crop&auto=format&q=80"
              alt="Mobile App Development Services Thanjavur"
              className="w-full object-cover h-[200px] sm:h-[260px] md:h-[320px]"
              loading="lazy"
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg,rgba(3,17,31,0.75) 0%,rgba(124,58,237,0.15) 100%)' }} />
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
              <p className="text-white text-[17px] font-semibold leading-snug max-w-2xl mb-2">
                We are one of the best app development agencies in Thanjavur offering innovative solutions that seamlessly integrate with your digital strategy.
              </p>
              <p style={{ color: '#c4b5fd' }} className="text-[13px]">
                Native iOS &amp; Android apps, cross-platform solutions, and AI-powered features — all under one roof.
              </p>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-5 left-8 bg-white rounded-2xl px-5 py-3 hidden md:flex items-center gap-3"
            style={{ boxShadow: '0 8px 32px rgba(124,58,237,0.25)', border: '1px solid rgba(124,58,237,0.18)' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)' }}>
              <Cpu size={16} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium">AI-Powered Apps</p>
              <p className="text-[18px] font-black text-slate-800 leading-tight">200+ Delivered</p>
            </div>
          </div>

          <div className="absolute -bottom-5 right-8 bg-white rounded-2xl px-5 py-3 hidden md:flex items-center gap-3"
            style={{ boxShadow: '0 8px 32px rgba(37,99,235,0.22)', border: '1px solid rgba(37,99,235,0.15)' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)' }}>
              <TrendingUp size={16} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium">Client Satisfaction</p>
              <p className="text-[18px] font-black text-slate-800 leading-tight">98% Rate</p>
            </div>
          </div>
        </div>

        {/* Feature cards — 2-col on sm, 4-col on xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 reveal">
          {features.map(({ icon: Icon, title, desc, color, bg }) => (
            <div key={title}
              className="flex-1 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${color}40`
                e.currentTarget.style.background = bg
                e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.3),0 0 0 1px ${color}30`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2)'
              }}
            >
              <div className="h-0.5 rounded-full mb-5 w-10" style={{ background: color }} />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                <Icon size={19} style={{ color }} />
              </div>
              <h3 className="text-[14px] font-bold text-white mb-2 leading-snug">{title}</h3>
              <p className="text-[12.5px] leading-[1.75]" style={{ color: '#94a3b8' }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 reveal">
          <p className="text-[14px] mb-3" style={{ color: '#94a3b8' }}>
            As a leading <strong style={{ color: '#a78bfa' }}>mobile app development company in Thanjavur</strong>, we make your brand shine in the competitive market.
          </p>
          <a href="/ARA-Marketing/contact"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold transition-all duration-200 hover:gap-3"
            style={{ color: '#a78bfa' }}>
            Start Your App Project Today <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
