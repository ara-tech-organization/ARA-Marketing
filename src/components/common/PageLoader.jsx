import { useEffect, useState } from 'react'

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${6 + (i * 4.3) % 88}%`,
  top:  `${6 + (i * 3.9) % 88}%`,
  size: 1.4 + (i % 3) * 0.7,
  dur:  3 + (i % 5) * 0.6,
  delay: (i * 0.28) % 2.2,
  color: ['#3b82f6','#8b5cf6','#06b6d4'][i % 3],
}))

const BUBBLES = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${8 + (i * 9.1) % 84}%`,
  size: 14 + (i % 4) * 12,
  dur:  5 + (i % 4) * 1.5,
  delay: (i * 0.45) % 3,
  color: ['rgba(59,130,246,', 'rgba(139,92,246,', 'rgba(6,182,212,'][i % 3],
}))

export default function PageLoader({ duration = 2600 }) {
  const [phase, setPhase]       = useState('in')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start  = Date.now()
    const exitAt = duration - 780
    let rafId

    const tick = () => {
      const elapsed = Date.now() - start
      setProgress(Math.min(100, Math.floor((elapsed / exitAt) * 100)))
      if (elapsed < exitAt) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    const t1 = setTimeout(() => setPhase('out'),  exitAt)
    const t2 = setTimeout(() => setPhase('done'), duration + 250)
    return () => { cancelAnimationFrame(rafId); clearTimeout(t1); clearTimeout(t2) }
  }, [duration])

  if (phase === 'done') return null
  const exiting = phase === 'out'

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#030712',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
      willChange: 'clip-path',
      transition: exiting ? 'clip-path 0.9s cubic-bezier(0.76,0,0.24,1)' : 'none',
      clipPath: exiting ? 'circle(0% at 50% 50%)' : 'circle(150% at 50% 50%)',
      pointerEvents: exiting ? 'none' : 'all',
    }}>

      {/* ── Dot grid ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* ── Ambient orbs ── */}
      <div style={{
        position: 'absolute', width: 560, height: 560, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 65%)',
        top: '-15%', left: '-8%', filter: 'blur(70px)',
        animation: 'loaderBlob1 9s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 440, height: 440, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.11) 0%, transparent 65%)',
        bottom: '-8%', right: '-6%', filter: 'blur(65px)',
        animation: 'loaderBlob2 11s 1.2s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 65%)',
        top: '35%', right: '8%', filter: 'blur(55px)',
        animation: 'loaderBlob1 7s 2.5s ease-in-out infinite reverse',
      }} />

      {/* ── Rising bubbles ── */}
      {BUBBLES.map(b => (
        <div key={b.id} style={{
          position: 'absolute', left: b.left, bottom: '-60px',
          width: b.size, height: b.size, borderRadius: '50%',
          background: 'transparent',
          border: `1px solid ${b.color}0.22)`,
          boxShadow: `inset 0 0 ${b.size * 0.4}px ${b.color}0.08), 0 0 ${b.size * 0.3}px ${b.color}0.1)`,
          animation: `loaderBubbleRise ${b.dur}s ${b.delay}s ease-in infinite`,
          pointerEvents: 'none',
        }} />
      ))}

      {/* ── Floating particles ── */}
      {PARTICLES.map(p => (
        <div key={p.id} style={{
          position: 'absolute', left: p.left, top: p.top,
          width: p.size, height: p.size, borderRadius: '50%',
          background: p.color, opacity: 0.35,
          animation: `loaderParticle ${p.dur}s ${p.delay}s ease-in-out infinite`,
        }} />
      ))}

      {/* ── Main content ── */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18,
      }}>

        {/* Logo */}
        <div style={{ animation: 'loaderLogoEnter 0.85s cubic-bezier(0.34,1.56,0.64,1) both' }}>
          <svg width="200" height="200" viewBox="0 0 140 140" fill="none">
            <defs>
              <linearGradient id="plg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="plg2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="plg3" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="plgDot" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
              <filter id="pglow">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="pglowStrong">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Outermost ring (new) */}
            <circle cx="70" cy="70" r="66" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <circle cx="70" cy="70" r="66"
              stroke="url(#plg3)" strokeWidth="1.5" strokeLinecap="round"
              strokeDasharray="80 234" filter="url(#pglow)"
              style={{ animation: 'loaderSpinRev 4s linear infinite', transformOrigin: '70px 70px' }} />

            {/* Outer ring */}
            <circle cx="70" cy="70" r="54" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <circle cx="70" cy="70" r="54"
              stroke="url(#plg1)" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray="240 100" filter="url(#pglow)"
              style={{ animation: 'loaderSpin 1.8s linear infinite', transformOrigin: '70px 70px' }} />

            {/* Mid ring */}
            <circle cx="70" cy="70" r="38" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <circle cx="70" cy="70" r="38"
              stroke="url(#plg2)" strokeWidth="2" strokeLinecap="round"
              strokeDasharray="140 99" filter="url(#pglow)"
              style={{ animation: 'loaderSpinRev 2.6s linear infinite', transformOrigin: '70px 70px' }} />

            {/* Inner ring */}
            <circle cx="70" cy="70" r="22" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
            <circle cx="70" cy="70" r="22"
              stroke="url(#plgDot)" strokeWidth="1.5" strokeLinecap="round"
              strokeDasharray="70 68" filter="url(#pglow)"
              style={{ animation: 'loaderSpin 1.2s linear infinite', transformOrigin: '70px 70px' }} />

            {/* Centre "A" mark */}
            <g filter="url(#pglow)"
              style={{ animation: 'loaderPulse 2.8s ease-in-out infinite', transformOrigin: '70px 70px' }}>
              <polyline points="70,52 82,76 58,76"
                fill="none" stroke="url(#plg1)" strokeWidth="2.2"
                strokeLinejoin="round" strokeLinecap="round" />
              <line x1="62" y1="68" x2="78" y2="68"
                stroke="url(#plg2)" strokeWidth="2.2" strokeLinecap="round" />
            </g>

            {/* Orbit dot — outermost */}
            <circle r="3" fill="url(#plg3)" filter="url(#pglow)">
              <animateMotion dur="4s" repeatCount="indefinite" calcMode="linear"
                path="M70,4 A66,66 0 1,0 69.9999,4" />
            </circle>

            {/* Orbit dot — outer */}
            <circle r="5" fill="url(#plg1)" filter="url(#pglowStrong)">
              <animateMotion dur="1.8s" repeatCount="indefinite" calcMode="linear"
                path="M70,16 A54,54 0 1,1 69.9999,16" />
            </circle>

            {/* Orbit dot — mid (counter) */}
            <circle r="3.5" fill="url(#plg2)" filter="url(#pglow)">
              <animateMotion dur="2.6s" repeatCount="indefinite" calcMode="linear"
                path="M70,32 A38,38 0 1,0 69.9999,32" />
            </circle>
          </svg>
        </div>

        {/* Brand wordmark */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7,
          animation: 'loaderFadeUp 0.7s 0.35s cubic-bezier(0.4,0,0.2,1) both',
        }}>
          <span style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.35rem',
            letterSpacing: '0.24em', textTransform: 'uppercase',
            background: 'linear-gradient(90deg, #93c5fd 0%, #c4b5fd 40%, #93c5fd 80%, #c4b5fd 100%)',
            backgroundSize: '250% 100%',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            animation: 'loaderShimmer 2.8s linear infinite',
          }}>
            ARA Discover
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 20, height: 1, background: 'rgba(255,255,255,0.15)' }} />
            <span style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '0.58rem',
              letterSpacing: '0.44em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.28)',
            }}>
              Marketing
            </span>
            <span style={{ width: 20, height: 1, background: 'rgba(255,255,255,0.15)' }} />
          </div>
        </div>

        {/* Progress */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 9,
          animation: 'loaderFadeUp 0.7s 0.65s cubic-bezier(0.4,0,0.2,1) both',
        }}>
          <span style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '0.68rem',
            letterSpacing: '0.28em',
            background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            minWidth: '3.5ch', textAlign: 'center',
          }}>
            {String(progress).padStart(3, '0')}%
          </span>

          <div style={{
            width: 160, height: 1.5, borderRadius: 99,
            background: 'rgba(255,255,255,0.07)',
            overflow: 'hidden', position: 'relative',
          }}>
            <div style={{
              position: 'absolute', inset: 0, borderRadius: 99,
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
              backgroundSize: '200% 100%',
              animation: 'loaderShimmer 1.8s linear infinite',
              width: `${progress}%`,
              boxShadow: '0 0 10px rgba(59,130,246,0.7)',
              transition: 'width 0.08s linear',
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes loaderSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes loaderSpinRev {
          to { transform: rotate(-360deg); }
        }
        @keyframes loaderPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.65; transform: scale(0.87); }
        }
        @keyframes loaderBlob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(45px, -35px) scale(1.12); }
        }
        @keyframes loaderBlob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-38px, 28px) scale(1.09); }
        }
        @keyframes loaderParticle {
          0%, 100% { transform: translate(0, 0);       opacity: 0.18; }
          50%       { transform: translate(9px, -14px); opacity: 0.5;  }
        }
        @keyframes loaderLogoEnter {
          from { opacity: 0; transform: scale(0.65) rotate(-12deg); }
          to   { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes loaderFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes loaderShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes loaderBubbleRise {
          0%   { transform: translateY(0)   scale(1);    opacity: 0; }
          10%  { opacity: 0.6; }
          80%  { opacity: 0.25; }
          100% { transform: translateY(-105vh) scale(0.6); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
