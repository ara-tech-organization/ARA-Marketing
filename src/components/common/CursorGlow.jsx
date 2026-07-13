import { useEffect, useRef } from 'react'

/**
 * Site-wide ambient cursor glow — a small, heavily blurred navy/light-blue
 * circle that eases toward the pointer. Raised above normal page content
 * (but below the navbar/dropdowns) with a screen blend so it reads as a
 * soft color wash over every section, not just gaps between them.
 * Desktop-only: disabled under 1400px viewport width and on touch/coarse-pointer devices.
 */
export default function CursorGlow() {
  const glowRef = useRef(null)
  const pos = useRef({ x: -300, y: -300 })
  const target = useRef({ x: -300, y: -300 })
  const raf = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (!window.matchMedia('(min-width: 1400px)').matches) return

    const glow = glowRef.current

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.14
      pos.current.y += (target.current.y - pos.current.y) * 0.14
      glow.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
      raf.current = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none hidden min-[1400px]:block"
      style={{
        width: 300,
        height: 300,
        zIndex: 20,
        borderRadius: '50%',
        background: 'linear-gradient(164deg, #1e3a8a 20%, #2563eb 45%, #60a5fa 65%, #2563eb 85%, #1e3a8a 100%)',
        filter: 'blur(100px)',
        opacity: 0.5,
        mixBlendMode: 'screen',
        willChange: 'transform',
      }}
    />
  )
}
