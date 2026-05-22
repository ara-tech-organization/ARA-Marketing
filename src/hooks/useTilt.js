import { useEffect, useRef } from 'react'

export default function useTilt(intensity = 8) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const move = e => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - r.left - r.width / 2
      const y = e.clientY - r.top - r.height / 2
      const rX = -(y / (r.height / 2)) * intensity
      const rY = (x / (r.width / 2)) * intensity
      el.style.transform = `perspective(800px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.02,1.02,1.02)`
      el.style.transition = 'transform 0.1s ease'
    }
    const leave = () => {
      el.style.transform = ''
      el.style.transition = 'transform 0.5s ease'
    }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    }
  }, [intensity])
  return ref
}
