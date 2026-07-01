import { useState, useEffect } from 'react'
import { Zap, ArrowDown } from 'lucide-react'

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
      style={{ background: 'white', minHeight: '40vh' }}
    >
      {/* BG orbs */}
      <div className="absolute pointer-events-none rounded-full"
        style={{ ...parallax(20), top: '-18%', right: '-10%', width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(219,234,254,0.6) 0%, transparent 65%)' }}
      />
      <div className="absolute pointer-events-none rounded-full"
        style={{ ...parallax(-16), bottom: '-12%', left: '-8%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(186,230,253,0.5) 0%, transparent 65%)' }}
      />
      <div className="absolute pointer-events-none rounded-full"
        style={{ ...parallax(12), top: '30%', left: '20%', width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(219,234,254,0.4) 0%, transparent 65%)' }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ ...parallax(10),
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px' }}
      />

      {/* Decorative rings */}
      <div className="absolute pointer-events-none rounded-full hidden lg:block"
        style={{ ...parallax(-26), top: '20%', left: '6%', width: '160px', height: '160px',
          border: '1.5px solid rgba(37,99,235,0.15)' }}
      />
      <div className="absolute pointer-events-none rounded-full hidden lg:block"
        style={{ ...parallax(22), bottom: '20%', right: '5%', width: '110px', height: '110px',
          border: '1px dashed rgba(14,165,233,0.2)' }}
      />
      <div className="absolute pointer-events-none hidden lg:block"
        style={{ ...parallax(-20), top: '28%', right: '9%', width: '52px', height: '52px',
          border: '1px solid rgba(37,99,235,0.22)',
          transform: `rotate(45deg) translate(${mouse.x * -20}px, ${mouse.y * -20}px)`,
          borderRadius: '10px' }}
      />

      {/* Central content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 md:px-7 flex flex-col items-center text-center py-8 sm:py-10 md:py-12">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full text-[12px] font-bold uppercase tracking-[0.15em]"
          style={{ background: 'white', color: '#2563eb', border: '1px solid #bfdbfe', boxShadow: '0 2px 12px rgba(37,99,235,0.08)' }}
        >
          <Zap size={12} />
          Get In Touch With ARA Discover Marketing
          <Zap size={12} />
        </div>

        {/* Heading */}
        <h1 className="font-bold text-slate-900 leading-[1.1] tracking-[-1.5px] mb-5"
          style={{ fontSize: 'clamp(23px,3.1vw,43px)', fontWeight: 700 }}
        >
          Let&apos;s Build Something{' '}
          <span style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Remarkable Together
          </span>
        </h1>

        {/* Sub */}
        <p className="text-[16px] leading-[1.8] max-w-[780px] mb-4 text-slate-500">
          We help your business grow with AI-driven innovative digital marketing, website
          development and branding solutions. If you have a project idea, need expert advice
          or want to discuss your business goals, our team is ready to help.
        </p>
        <p className="text-[14px] leading-[1.75] max-w-[680px] mb-10 text-slate-400">
          Have questions or need a quote? Contact us today and let&apos;s talk about how we
          can help your business succeed online.
        </p>

        {/* Scroll cue */}
        <a
          href="#contact-form"
          onClick={e => { e.preventDefault(); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="flex flex-col items-center gap-2 opacity-50 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
        >
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
            Scroll to contact
          </span>
          <ArrowDown size={14} className="text-blue-500 animate-bounce" />
        </a>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
      />
    </section>
  )
}
