import { Wand2, Layers, Globe, Palette, Play, TrendingUp, Award, ArrowRight } from 'lucide-react'
import veIntroImg from '../../assets/Video-editing/V2.webp'

const expertise = [
  { icon: Wand2,   label: 'Digital Marketing Video', color: '#2563eb', desc: 'Platform-specific edits crafted to drive engagement and conversions across all digital channels.' },
  { icon: Layers,  label: 'Cinematic Storytelling',   color: '#7c3aed', desc: 'Narrative-driven edits with professional colour grading, motion effects, and seamless transitions.' },
  { icon: Globe,   label: 'Platform Optimisation',    color: '#0891b2', desc: 'Videos formatted and optimised for YouTube, Instagram, Facebook, and corporate distribution.' },
  { icon: Palette, label: 'Brand Identity',           color: '#059669', desc: 'Consistent visual language that reinforces your brand across every frame and every format.' },
]

const stats = [
  { value: '500+', label: 'Videos Edited',    icon: Play,      color: '#2563eb' },
  { value: '150+', label: 'Brands Served',    icon: Award,     color: '#7c3aed' },
  { value: '98%',  label: 'Client Retention', icon: TrendingUp, color: '#059669' },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function VEIntro() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #eff6ff 55%, #e0f2fe 100%)' }}>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.07) 1.5px, transparent 1.5px)', backgroundSize: '34px 34px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.30) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.20) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Top: Left content + Right image ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center mb-14 reveal">

          {/* Left: Content */}
          <div className="flex-1 min-w-0">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px]
              font-bold uppercase tracking-widest mb-5 text-blue-600 bg-white/80 shadow-sm"
              style={{ border: '1px solid rgba(37,99,235,0.18)' }}>
              <Layers size={10} /> Professional Video Editing
            </span>

            <h2 className="text-[clamp(23px,3.1vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
              Professional Video Editing That Turns Ideas Into{' '}
              <span style={gradBlue}>Powerful Visual Stories</span>
            </h2>

            <p className="text-[14.5px] text-slate-500 leading-[1.85] mb-6 max-w-[540px]">
              Today, video content is the most effective way to engage audiences and build brand trust. We offer advanced digital marketing video editing services in Thanjavur, enabling businesses to convey their message clearly and creatively.
            </p>

            <p className="text-[13.5px] text-slate-500 leading-[1.85] mb-8 max-w-[520px]">
              If you are looking for the best video editing services in Thanjavur, then you are at the right place.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 mb-8">
              {stats.map(({ value, label, icon: Icon, color }) => (
                <div key={label} className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/80"
                  style={{ border: `1px solid ${color}18`, boxShadow: `0 4px 16px ${color}0a` }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg,${color}18,${color}08)`, border: `1.5px solid ${color}22` }}>
                    <Icon size={15} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-[18px] font-black text-slate-900 leading-none">{value}</p>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/ARA-Marketing/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 8px 28px rgba(37,99,235,0.35)' }}>
              Get Video Editing Services <ArrowRight size={14} />
            </a>
          </div>

          {/* Right: Image with overlays */}
          <div className="w-full lg:w-[480px] flex-shrink-0 relative">
            <div className="relative rounded-3xl overflow-hidden"
              style={{ height: 'clamp(280px,38vw,420px)', boxShadow: '0 28px 64px rgba(37,99,235,0.18)' }}>
              <img
                src={veIntroImg}
                alt="Professional video editing studio in Thanjavur"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(160deg, rgba(37,99,235,0.35) 0%, rgba(10,26,52,0.55) 100%)' }} />

              {/* Play badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 px-3.5 py-2 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.22)' }}>
                <Play size={12} className="text-white" fill="white" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Video Editing Studio</span>
              </div>

              {/* Bottom quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: 'linear-gradient(0deg, rgba(10,26,52,0.92) 0%, transparent 100%)' }}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-1.5">
                  As a corporate video editing company in Thanjavur
                </p>
                <p className="text-[13px] font-semibold text-white leading-snug">
                  We deliver quality solutions for branding, advertising, and promotional campaigns — every video is emotionally and strategically impactful.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom: Expertise cards ── */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertise.map(({ icon: Icon, label, color, desc }, i) => (
            <div key={label}
              className={`group flex flex-col gap-4 p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 delay-${i + 1}`}
              style={{ background: 'rgba(255,255,255,0.80)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.90)', boxShadow: '0 4px 20px rgba(37,99,235,0.07)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 16px 40px ${color}18`; e.currentTarget.style.borderColor = color + '28' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.90)' }}
            >
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg,${color}18,${color}08)`, border: `1.5px solid ${color}28` }}>
                <Icon size={18} style={{ color }} />
              </div>
              <div>
                <p className="text-[13.5px] font-bold text-slate-900 mb-2 leading-snug">{label}</p>
                <p className="text-[12px] text-slate-500 leading-[1.75]">{desc}</p>
              </div>
              <div className="h-0.5 w-0 rounded-full group-hover:w-10 transition-all duration-500 mt-auto"
                style={{ background: `linear-gradient(90deg,${color},${color}44)` }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
