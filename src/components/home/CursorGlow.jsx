import { useState, useEffect } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 })

  useEffect(() => {
    const move = e => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      className="cursor-glow"
      style={{
        background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.07), transparent 70%)`,
      }}
    />
  )
}
