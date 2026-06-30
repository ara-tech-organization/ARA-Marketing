import { useEffect, useState, useRef } from 'react'
import { X, ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PromoPopup() {
  const [visible, setVisible] = useState(false)
  const timerRef = useRef(null)
  const shownRef = useRef(false)

  useEffect(() => {
    const EVENTS = ['mousemove', 'scroll', 'keydown', 'touchstart', 'click']

    function onActivity() {
      if (shownRef.current) return
      shownRef.current = true
      EVENTS.forEach(e => window.removeEventListener(e, onActivity))
      timerRef.current = setTimeout(() => setVisible(true), 10000)
    }

    EVENTS.forEach(e => window.addEventListener(e, onActivity, { passive: true }))
    return () => {
      EVENTS.forEach(e => window.removeEventListener(e, onActivity))
      clearTimeout(timerRef.current)
    }
  }, [])

  function dismiss() {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-[440px] rounded-2xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
        style={{
          background: 'linear-gradient(135deg, #0d2244 0%, #1e3a5f 50%, #0d2244 100%)',
          animation: 'popup-in 0.35s cubic-bezier(.34,1.56,.64,1) both',
        }}
      >
        {/* Close */}
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center
            text-white/60 hover:text-white hover:bg-white/10 transition-colors duration-200"
        >
          <X size={16} />
        </button>

        {/* Content */}
        <div className="p-8 pt-10 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px]
            font-bold uppercase tracking-wider mb-5"
            style={{ background: 'rgba(99,102,241,0.2)', color: '#a5b4fc' }}>
            <Sparkles size={11} /> Limited Time Offer
          </span>

          <h3 className="text-[22px] font-bold text-white leading-tight mb-3">
            Get a Free Digital Marketing{' '}
            <span style={{
              background: 'linear-gradient(135deg,#60a5fa,#818cf8)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Strategy Session
            </span>
          </h3>

          <p className="text-[13.5px] text-white/60 leading-relaxed mb-7">
            Speak with our experts and discover how ARA Discover Marketing can grow your business
            with data-driven digital strategies — no commitment required.
          </p>

          <Link
            to="/contact-us"
            onClick={dismiss}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold
              text-white no-underline transition-all duration-200 hover:gap-3 group"
            style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)' }}
          >
            Book Free Consultation
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <button
            onClick={dismiss}
            className="block w-full mt-4 text-[12px] text-white/40 hover:text-white/60
              transition-colors duration-200 bg-transparent border-0 cursor-pointer"
          >
            No thanks, maybe later
          </button>
        </div>

        <style>{`
          @keyframes popup-in {
            from { opacity: 0; transform: scale(0.85) translateY(20px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>
      </div>
    </div>
  )
}
