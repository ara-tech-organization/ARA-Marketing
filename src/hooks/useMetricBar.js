import { useRef, useEffect } from 'react'

export default function useMetricBar() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fills = el.querySelectorAll('.metric-fill')
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        fills.forEach(f => f.classList.add('animated'))
        io.disconnect()
      }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}
