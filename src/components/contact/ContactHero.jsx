import { useState, useEffect } from 'react'
import { MessageSquare, Zap, ArrowDown } from 'lucide-react'

export default function ContactHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = e => setMouse({
      x: e.clientX / window.innerWidth - 0.5,
      y: e.clientY / window.innerHeight - 0.5,
    })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const parallax = depth => ({
    transform: `translate(${mouse.x * depth}px, ${mouse.y * depth}px)`,
    transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  })

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden pt-[72px]"
      style={{ background: '#071a36', minHeight: '40vh' }}
    >
      {/* Deep BG orbs */}
      <div className="absolute pointer-events-none rounded-full"
        style={{ ...parallax(20), top: '-18%', right: '-10%', width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 65%)' }}
      />
      <div className="absolute pointer-events-none rounded-full"
        style={{ ...parallax(-16), bottom: '-12%', left: '-8%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 65%)' }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ ...parallax(10),
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px' }}
      />

      {/* Decorative rings */}
      <div className="absolute pointer-events-none rounded-full hidden lg:block"
        style={{ ...parallax(-26), top: '20%', left: '6%', width: '160px', height: '160px',
          border: '1.5px solid rgba(37,99,235,0.18)' }}
      />
      <div className="absolute pointer-events-none rounded-full hidden lg:block"
        style={{ ...parallax(22), bottom: '20%', right: '5%', width: '110px', height: '110px',
          border: '1px dashed rgba(99,102,241,0.22)' }}
      />
      <div className="absolute pointer-events-none hidden lg:block"
        style={{ ...parallax(-20), top: '28%', right: '9%', width: '52px', height: '52px',
          border: '1px solid rgba(37,99,235,0.28)',
          transform: `rotate(45deg) translate(${mouse.x * -20}px, ${mouse.y * -20}px)`,
          borderRadius: '10px' }}
      />

      {/* Central content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 md:px-7 flex flex-col items-center text-center py-8 sm:py-10 md:py-12">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full
          text-[12px] font-bold text-blue-400 uppercase tracking-[0.15em]"
          style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.28)' }}
        >
          <Zap size={12} />
          Get In Touch With ARA Discover Marketing
          <Zap size={12} />
        </div>

        {/* Heading */}
        <h1 className="font-bold text-white leading-[1.1] tracking-[-1.5px] mb-5"
          style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', fontWeight: 700 }}
        >
          Let&apos;s Build Something{' '}
          <span style={{
            background: 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 25%, #3b82f6 55%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Remarkable Together
          </span>
        </h1>

        {/* Sub */}
        <p className="text-[16px] leading-[1.8] max-w-[780px] mb-4"
          style={{ color: 'rgba(255,255,255,0.42)' }}
        >
          We help your business grow with AI-driven innovative digital marketing, website
          development and branding solutions. If you have a project idea, need expert advice
          or want to discuss your business goals, our team is ready to help.
        </p>
        <p className="text-[14px] leading-[1.75] max-w-[680px] mb-10"
          style={{ color: 'rgba(255,255,255,0.28)' }}
        >
          Have questions or need a quote? Contact us today and let&apos;s talk about how we
          can help your business succeed online.
        </p>

        {/* Scroll cue */}
        <a
          href="#contact-form"
          onClick={e => { e.preventDefault(); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          <span className="text-[11px] font-semibold text-white uppercase tracking-widest">
            Scroll to contact
          </span>
          <ArrowDown size={14} className="text-blue-400 animate-bounce" />
        </a>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #071a36)' }}
      />
    </section>
  )
}
