import { useEffect, useRef } from 'react'

/**
 * Lightweight cursor-follow glow, scoped to a container via targetRef.
 * Smoothed with a lerp loop (not raw mousemove) for a premium, non-jittery feel.
 * Auto-disables on touch/coarse-pointer devices.
 */
export default function CursorSpotlight({
  targetRef,
  color = '96,165,250',
  size = 480,
  background,
  blur = 50,
  blendMode = 'screen',
  opacity = 1,
}) {
  const glowRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const raf = useRef(null)
  const active = useRef(false)

  useEffect(() => {
    const el = targetRef.current
    const glow = glowRef.current
    if (!el || !glow) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      target.current = { x: e.clientX - r.left, y: e.clientY - r.top }
      if (!active.current) {
        active.current = true
        pos.current = { ...target.current }
        glow.style.opacity = String(opacity)
      }
    }
    const onLeave = () => {
      active.current = false
      glow.style.opacity = '0'
    }

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12
      pos.current.y += (target.current.y - pos.current.y) * 0.12
      glow.style.transform = `translate3d(${pos.current.x - size / 2}px, ${pos.current.y - size / 2}px, 0)`
      raf.current = requestAnimationFrame(tick)
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    raf.current = requestAnimationFrame(tick)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf.current)
    }
  }, [targetRef, size, opacity])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="absolute top-0 left-0 pointer-events-none opacity-0 transition-opacity duration-500 ease-out"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: background || `radial-gradient(circle, rgba(${color},0.38) 0%, rgba(${color},0.14) 42%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        mixBlendMode: blendMode,
        willChange: 'transform',
      }}
    />
  )
}
