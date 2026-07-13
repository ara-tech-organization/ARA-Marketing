import { useEffect, useRef } from 'react'

export default function MouseEffect() {
  const dotRef = useRef(null)
  const mouse  = useRef({ x: -300, y: -300 })
  const rafId  = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate(${e.clientX - 5}px,${e.clientY - 5}px)`
    }

    const onOver = (e) => {
      if (e.target.closest('a, button')) {
        dot.style.background = 'var(--brand-gradient)'
        dot.style.boxShadow  = '0 0 8px rgba(37,99,235,0.5)'
        dot.style.width      = '13px'
        dot.style.height     = '13px'
      }
    }
    const onOut = (e) => {
      if (e.target.closest('a, button')) {
        dot.style.background = 'var(--brand-gradient-soft)'
        dot.style.boxShadow  = '0 0 6px rgba(59,130,246,0.45)'
        dot.style.width      = '10px'
        dot.style.height     = '10px'
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 999999,
        width: 10, height: 10, borderRadius: '50%',
        background: 'var(--brand-gradient-soft)',
        boxShadow: '0 0 6px rgba(59,130,246,0.45)',
        pointerEvents: 'none',
        willChange: 'transform',
        transition: 'width 0.2s, height 0.2s, background 0.25s, box-shadow 0.25s',
      }} />

      <style>{`
        *, *::before, *::after { cursor: none !important; }
      `}</style>
    </>
  )
}
