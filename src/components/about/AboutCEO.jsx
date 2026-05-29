import { MapPin, Award, Star, Briefcase, CheckCircle2, ArrowRight, Users, TrendingUp,
  Globe, Quote, Sparkles } from 'lucide-react'

const expertise = [
  'Digital Marketing', 'Brand Strategy', 'SEO & SEM',
  'Social Media Marketing', 'Web Development', 'Business Growth',
  'Performance Marketing', 'Content Strategy',
]

const achievements = [
  { icon: TrendingUp, val: '100+', label: 'Brands Grown',        color: '#2563eb' },
  { icon: Users,      val: '150+', label: 'Projects Delivered',  color: '#0ea5e9' },
  { icon: Globe,      val: '5★',   label: 'Client Reputation',   color: '#2563eb' },
  { icon: Award,      val: '3+',   label: 'Years of Leadership', color: '#0ea5e9' },
]

const focusAreas = [
  'Strategic Marketing Campaigns',
  'Modern Web Solutions',
  'Customer-Centric Digital Transformation',
  'Connecting Brands to the Right Audiences',
  'Sustainable Business Growth Strategies',
  'AI-Driven Marketing Innovation',
]

const bioParagraphs = [
  `Mehala Kumar is a visionary entrepreneur and digital marketing strategist with a focus on helping businesses grow through innovative branding, technology and performance-driven marketing solutions. As the CEO & Founder of ARA Discover Marketing and is leading a passionate team to offer powerful digital experiences that help startups, businesses and enterprises to stand out in the competitive online world.`,
  `Mrs. Mehala Kumar with her knowledge on digital marketing, branding, website development, SEO, social media marketing and business growth strategies has made ARA Discover Marketing a trusted name in the digital industry of Thanjavur. Her leadership is informed by creativity, innovation and a strong commitment to delivering tangible results to clients across multiple industries.`,
  `With her guidance, ARA Discover Marketing is helping brands build a strong online presence with strategic marketing campaigns, modern web solutions, and customer-centric digital transformation services. Her mission is to create meaningful brand experiences that connect businesses to the right audience and drive sustainable growth.`,
]

export default function AboutCEO() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-white">

      {/* ── Background decorations ── */}
      <div className="absolute pointer-events-none rounded-full"
        style={{ top: '-8%', right: '-6%', width: '480px', height: '480px',
          background: 'radial-gradient(circle, rgba(219,234,254,0.6) 0%, transparent 65%)' }} />
      <div className="absolute pointer-events-none rounded-full"
        style={{ bottom: '-6%', left: '-4%', width: '360px', height: '360px',
          background: 'radial-gradient(circle, rgba(186,230,253,0.5) 0%, transparent 65%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px)',
          backgroundSize: '30px 30px' }} />

      {/* Decorative rings */}
      <div className="absolute hidden xl:block pointer-events-none rounded-full"
        style={{ top: '10%', left: '-5%', width: '220px', height: '220px',
          border: '1.5px solid rgba(37,99,235,0.1)' }} />
      <div className="absolute hidden lg:block pointer-events-none"
        style={{ bottom: '18%', right: '4%', width: '48px', height: '48px',
          border: '1.5px dashed rgba(14,165,233,0.3)', borderRadius: '10px',
          transform: 'rotate(15deg)' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-7">

        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe',
              boxShadow: '0 2px 12px rgba(37,99,235,0.07)' }}>
            <Briefcase size={11} /> Our Leadership
          </span>
          <h2 className="font-bold text-slate-900 leading-tight tracking-tight"
            style={{ fontSize: 'clamp(26px,3.5vw,44px)' }}>
            Meet The Visionary Behind{' '}
            <span style={{
              background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>ARA Discover Marketing</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-xl mx-auto mt-3">
            A passionate leader committed to transforming businesses through innovative digital strategies.
          </p>
        </div>

        {/* ── Main layout ── */}
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-start">

          {/* ── Left: Photo + profile card ── */}
          <div className="w-full lg:w-[380px] xl:w-[400px] flex-shrink-0 reveal-left">

            {/* Photo frame */}
            <div className="relative mb-6">
              {/* Accent square behind photo */}
              <div className="absolute pointer-events-none rounded-[24px]"
                style={{ bottom: '-10px', right: '-10px', width: '80%', height: '80%',
                  background: 'linear-gradient(135deg,#bfdbfe,#bae6fd)', zIndex: 0 }} />

              {/* Outer decorative border */}
              <div className="absolute pointer-events-none rounded-[28px]"
                style={{ inset: '-10px', border: '1.5px dashed rgba(37,99,235,0.2)' }} />

              {/* Photo */}
              <div className="relative z-10 rounded-[24px] overflow-hidden"
                style={{ boxShadow: '0 24px 64px rgba(37,99,235,0.18)' }}>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=580&fit=crop&auto=format&q=80"
                  alt="Mrs. Mehala Kumar — CEO and Founder of ARA Discover Marketing, Thanjavur"
                  className="w-full object-cover block"
                  style={{ aspectRatio: '5/6' }}
                />
                {/* Bottom overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(37,99,235,0.12) 0%, transparent 50%)' }} />
              </div>

              {/* Floating name card */}
              <div className="absolute bottom-5 left-5 right-5 z-20 rounded-2xl p-4"
                style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
                  border: '1.5px solid rgba(37,99,235,0.15)',
                  boxShadow: '0 8px 32px rgba(37,99,235,0.15)' }}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[14px] font-bold text-slate-900">Mrs. Mehala Kumar</p>
                    <p className="text-[12px] font-semibold" style={{ color: '#2563eb' }}>CEO & Founder</p>
                    <div className="flex items-center gap-1 mt-1.5">
                      <MapPin size={11} style={{ color: '#94a3b8' }} />
                      <span className="text-[11px] text-slate-400">Thanjavur, Tamil Nadu</span>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={11} fill="#f59e0b" color="#f59e0b" />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement grid */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map(({ icon: Icon, val, label, color }) => (
                <div key={label}
                  className="flex flex-col gap-1.5 p-4 rounded-2xl transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100"
                  style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0' }}>
                  <Icon size={14} style={{ color }} />
                  <span className="text-[21px] font-bold text-slate-900 leading-none mt-0.5">{val}</span>
                  <span className="text-[10.5px] text-slate-400 font-medium leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Bio ── */}
          <div className="flex-1 reveal-right">

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-1.5 mb-7">
              {expertise.map(tag => (
                <span key={tag}
                  className="text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
                  style={{ background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe' }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Pull quote */}
            <div className="relative mb-7 p-6 rounded-2xl"
              style={{ background: '#f0f9ff', border: '1.5px solid #bae6fd' }}>
              <Quote size={32} style={{ color: '#bfdbfe', position: 'absolute', top: '12px', left: '16px' }} />
              <p className="font-semibold leading-relaxed pl-8"
                style={{ fontSize: 'clamp(14px,1.5vw,17px)', color: '#1e40af' }}>
                "Her leadership is informed by creativity, innovation and a strong commitment to
                delivering tangible results to clients across multiple industries."
              </p>
            </div>

            {/* Bio paragraphs */}
            <div className="flex flex-col gap-5 mb-8">
              {bioParagraphs.map((text, i) => (
                <p key={i} className="text-[14.5px] leading-[1.9] text-slate-500">{text}</p>
              ))}
            </div>

            {/* Focus areas */}
            <div className="rounded-2xl p-6 mb-8"
              style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0' }}>
              <div className="flex items-center gap-2 mb-5">
                <Sparkles size={15} style={{ color: '#2563eb' }} />
                <h4 className="text-[12px] font-bold uppercase tracking-widest text-slate-700">
                  Areas of Focus
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {focusAreas.map(item => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={14} style={{ color: '#2563eb', flexShrink: 0 }} />
                    <span className="text-[13px] text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact"
                className="btn-glow inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
                  font-bold text-[14px] text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
                  boxShadow: '0 8px 32px rgba(37,99,235,0.28)' }}>
                Work With Us <ArrowRight size={15} />
              </a>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full"
                style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0' }}>
                <span className="w-2 h-2 rounded-full animate-pulse-dot"
                  style={{ background: '#22c55e', flexShrink: 0 }} />
                <span className="text-[12px] font-semibold text-green-700">
                  Trusted Agency in Thanjavur
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom dark stats band ── */}
        <div className="mt-16 reveal rounded-[24px] overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a5f)' }}>
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { val: '100+', label: 'Brands Promoted',     sub: 'Across industries'          },
              { val: '150+', label: 'Projects Delivered',  sub: 'On time, every time'         },
              { val: '95%',  label: 'Client Satisfaction', sub: 'Verified by Google Analytics'},
              { val: '200%', label: 'Avg. Traffic Growth', sub: 'For SEO campaigns'           },
            ].map((s, i) => (
              <div key={s.label}
                className="flex flex-col gap-1 p-7 relative"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                {/* Subtle top gradient line */}
                {i === 0 && (
                  <div className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: 'linear-gradient(90deg,#2563eb,#0ea5e9)' }} />
                )}
                <span className="text-[28px] font-bold text-white leading-none">{s.val}</span>
                <span className="text-[13px] font-semibold text-white/70">{s.label}</span>
                <span className="text-[11px] text-white/35">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
