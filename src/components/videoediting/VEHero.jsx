import {
  Film, ChevronRight, ArrowRight, ArrowUpRight,
  Sparkles, TrendingUp, PlayCircle, Eye, CheckCircle2,
  Video, Scissors, Star,
} from 'lucide-react'
import veHeroImg from '../../assets/Video-editing/v1.png'

const platformRows = [
  { label: 'YouTube Channel',   views: '2.8M', growth: '+34%', pct: 88, color: '#38bdf8' },
  { label: 'Instagram Reels',   views: '1.9M', growth: '+47%', pct: 74, color: '#60a5fa' },
  { label: 'Corporate Films',   views: '980K', growth: '+28%', pct: 62, color: '#93c5fd' },
]

const types = [
  { label: 'Branding',  color: '#60a5fa', icon: Sparkles },
  { label: 'Corporate', color: '#38bdf8', icon: Video },
  { label: 'YouTube',   color: '#93c5fd', icon: PlayCircle },
  { label: 'Drone',     color: '#34d399', icon: Film },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#93c5fd,#38bdf8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

export default function VEHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px] min-h-screen flex items-center"
      style={{ background: 'linear-gradient(135deg, #020b18 0%, #071428 45%, #040e1f 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.14) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.30) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(14,116,144,0.22) 0%, transparent 65%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(29,78,216,0.10) 0%, transparent 65%)' }} />
      <div className="hidden md:block absolute top-20 right-[8%] w-48 h-48 rounded-full border border-blue-500/12 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="hidden md:block absolute top-28 right-[10%] w-24 h-24 rounded-full border border-blue-400/08 pointer-events-none" />
      <div className="hidden md:block absolute bottom-20 left-[5%] w-32 h-32 rounded-full border border-sky-500/10 pointer-events-none animate-[spin_30s_linear_infinite_reverse]" />
      <div className="absolute top-[38%] left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.22) 30%, rgba(56,189,248,0.30) 50%, rgba(37,99,235,0.18) 70%, transparent 100%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 py-12 sm:py-16 lg:py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* ── Left: content ── */}
          <div className="flex-1 min-w-0 animate-hero-enter text-center lg:text-left">

            {/* Breadcrumb */}
            <nav className="hidden sm:flex items-center justify-center lg:justify-start gap-1.5 text-[12px] mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
              <a href="/ARA-Marketing/" className="transition-colors hover:text-sky-300">Home</a>
              <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.20)' }} />
              <span>Digital Marketing</span>
              <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.20)' }} />
              <span className="text-sky-300 font-medium">Video Editing</span>
            </nav>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-6 sm:mb-8"
              style={{
                background: 'rgba(37,99,235,0.18)',
                border: '1px solid rgba(96,165,250,0.30)',
                color: '#93c5fd',
                backdropFilter: 'blur(8px)',
              }}>
              <Scissors size={10} /> Professional Video Editing Services
            </span>

            {/* H1 */}
            <h1 className="text-[clamp(23px,3.1vw,47px)] font-bold leading-[1.08] tracking-tight mb-5 sm:mb-6" style={{ color: '#ffffff' }}>
              Best Video Editing Services
            </h1>

            {/* Tagline */}
            <p className="text-[13px] sm:text-[15px] font-medium tracking-wide mb-4 sm:mb-5" style={{ color: 'rgba(255,255,255,0.50)' }}>
              Cinematic Storytelling &middot; Brand-Focused Editing &middot; Platform-Optimized Delivery
            </p>

            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.85] mb-3 max-w-[560px] mx-auto lg:mx-0" style={{ color: 'rgba(255,255,255,0.55)' }}>
              ARA Discover Marketing is a professional corporate video editing service in Thanjavur that turns raw footage into powerful, engaging, and conversion-focused visual content.
            </p>
            <p className="hidden sm:block text-[13px] sm:text-[13.5px] leading-[1.8] mb-8 sm:mb-10 max-w-[560px] mx-auto lg:mx-0" style={{ color: 'rgba(255,255,255,0.35)' }}>
              We offer professional video editing in Thanjavur for businesses, brands, and creators seeking engaging visuals and compelling stories for their digital presence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 sm:mb-12">
              <a href="/ARA-Marketing/contact-us"
                className="btn-glow inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#1d4ed8,#0369a1)', boxShadow: '0 8px 32px rgba(29,78,216,0.45)' }}>
                Start Your Project <ArrowRight size={14} />
              </a>
              <a href="#ve-services"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  color: 'rgba(255,255,255,0.80)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                }}>
                Explore Services <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex justify-center lg:justify-start flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {[
                ['500+', 'Videos Delivered'],
                ['98%',  'Client Satisfaction'],
                ['5M+',  'Total Views'],
              ].map(([num, label]) => (
                <div key={label} className="flex flex-col items-center lg:items-start">
                  <span className="text-[26px] sm:text-[30px] font-black leading-tight" style={gradBlue}>{num}</span>
                  <span className="text-[11px] sm:text-[12px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: hero image ── */}
          <div className="hidden md:block lg:w-[460px] flex-shrink-0 w-full max-w-[460px] reveal-right">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(29,78,216,0.28) 0%, transparent 70%)' }} />
              <img
                src={veHeroImg}
                alt="Video Editing Services in Thanjavur - ARA Discover Marketing"
                className="relative w-full rounded-3xl object-contain"
                style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.40)' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
