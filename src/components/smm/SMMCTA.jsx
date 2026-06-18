import { ArrowRight, Share2, MessageSquare } from 'lucide-react'

export default function SMMCTA() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(135deg, #0d2244 0%, #0f2245 50%, #0d2244 100%)' }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 text-center">

        {/* Icon */}
        <div className="reveal inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl
          mb-6 shadow-xl shadow-blue-600/30">
          <Share2 size={28} className="text-white" />
        </div>

        {/* Heading */}
        <h2 className="reveal text-[clamp(21px,2.7vw,37px)] font-bold text-white leading-tight tracking-tight mb-5 max-w-4xl mx-auto">
          Are You Ready to Grow Your Brand Through{' '}
          <span style={{
            background: 'linear-gradient(135deg, #93c5fd, #60a5fa, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Social Media Marketing?
          </span>
        </h2>

        {/* Subtext */}
        <p className="reveal delay-1 text-[15px] text-white/45 leading-[1.85] max-w-2xl mx-auto mb-10">
          Partner with ARA Discover Marketing, a trusted provider of social media agency services in
          Thanjavur, delivering creative campaigns, audience engagement strategies, and high-performing
          paid social advertising solutions.
        </p>

        {/* CTAs */}
        <div className="reveal delay-2 flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="/ARA-Marketing/contact-us"
            className="btn-glow inline-flex items-center gap-2.5 px-8 py-3.5 bg-blue-600 text-white
              rounded-full font-bold text-[15px] shadow-2xl shadow-blue-600/35
              hover:bg-blue-500 transition-all duration-300"
          >
            Talk to an Expert <ArrowRight size={16} />
          </a>
          <a
            href="#smm-services"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-[15px]
              text-white/80 hover:text-white transition-all duration-300"
            style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}
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
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-[12px] font-medium text-white/40">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
