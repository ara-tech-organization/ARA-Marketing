/**
 * SectionDecor — reusable animated decorative overlay for light-background sections.
 *
 * Drop as the FIRST child inside a `relative overflow-hidden` section.
 * It is purely decorative: pointer-events-none and sits behind content (z-0),
 * so make sure the section's real content is wrapped in a `relative z-10` container.
 *
 * Props:
 *   variant  'a' | 'b' | 'c'  — shifts the composition so adjacent sections differ (default 'a')
 *   glow     boolean          — include the soft radial brand glows (default true)
 *   grid     boolean          — include an animated dot grid; leave off when the section already has one (default false)
 *   className extra classes for the wrapper
 */
export default function SectionDecor({ variant = 'a', glow = true, grid = false, className = '' }) {
  const rings =
    variant === 'b'
      ? [
          { cls: 'top-[-90px] right-[-70px] w-64 h-64 animate-decor-spin',     c: 'rgba(37,99,235,0.09)' },
          { cls: 'bottom-[-60px] left-[-50px] w-48 h-48 animate-decor-spin-rev', c: 'rgba(14,165,233,0.10)' },
        ]
      : variant === 'c'
      ? [
          { cls: 'top-[-70px] left-[-60px] w-56 h-56 animate-decor-spin-rev',  c: 'rgba(37,99,235,0.08)' },
          { cls: 'top-1/3 right-[-80px] w-72 h-72 animate-decor-spin',         c: 'rgba(37,99,235,0.06)' },
        ]
      : [
          { cls: 'top-[-80px] left-[-70px] w-60 h-60 animate-decor-spin',      c: 'rgba(37,99,235,0.08)' },
          { cls: 'bottom-[-80px] right-[-60px] w-64 h-64 animate-decor-spin-rev', c: 'rgba(14,165,233,0.08)' },
        ]

  const dots =
    variant === 'b'
      ? [
          { cls: 'top-12 left-1/4 w-2.5 h-2.5 rounded-sm rotate-45 animate-decor-drift',     bg: 'rgba(37,99,235,0.22)' },
          { cls: 'bottom-16 right-1/4 w-2 h-2 rounded-full animate-pulse-dot',               bg: 'rgba(14,165,233,0.32)' },
          { cls: 'top-1/2 right-10 w-2 h-2 rounded-full animate-decor-drift-rev',            bg: 'rgba(37,99,235,0.20)' },
        ]
      : variant === 'c'
      ? [
          { cls: 'top-16 right-1/3 w-2 h-2 rounded-full animate-pulse-dot',                  bg: 'rgba(37,99,235,0.25)' },
          { cls: 'bottom-14 left-12 w-2.5 h-2.5 rounded-sm rotate-45 animate-decor-drift-rev', bg: 'rgba(14,165,233,0.25)' },
          { cls: 'top-1/3 left-8 w-1.5 h-1.5 rounded-full animate-decor-drift',              bg: 'rgba(37,99,235,0.20)' },
        ]
      : [
          { cls: 'top-10 right-16 w-2.5 h-2.5 rounded-sm rotate-45 animate-decor-drift',     bg: 'rgba(37,99,235,0.22)' },
          { cls: 'bottom-20 left-1/4 w-2 h-2 rounded-full animate-pulse-dot',                bg: 'rgba(37,99,235,0.24)' },
          { cls: 'top-1/2 left-10 w-1.5 h-1.5 rounded-full animate-decor-drift-rev',         bg: 'rgba(14,165,233,0.28)' },
        ]

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Dot grid (opt-in) */}
      {grid && (
        <div className="absolute inset-0"
          style={{ backgroundImage: 'var(--brand-gradient-dots)', backgroundSize: '32px 32px', opacity: 0.45 }} />
      )}

      {/* Soft glows */}
      {glow && (
        <>
          <div className="absolute -top-24 -right-24 w-[380px] h-[380px] rounded-full animate-orb"
            style={{ background: 'var(--brand-gradient-glow)' }} />
          <div className="absolute -bottom-24 -left-24 w-[320px] h-[320px] rounded-full animate-orb-rev"
            style={{ background: 'var(--brand-gradient-glow)' }} />
        </>
      )}

      {/* Rotating rings */}
      {rings.map((r, i) => (
        <div key={i} className={`absolute rounded-full ${r.cls}`}
          style={{ border: `1.5px solid ${r.c}` }} />
      ))}

      {/* Floating accent shapes */}
      {dots.map((d, i) => (
        <div key={i} className={`absolute ${d.cls}`} style={{ background: d.bg }} />
      ))}
    </div>
  )
}
