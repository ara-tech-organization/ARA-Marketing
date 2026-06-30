import { useState } from 'react'
import { Share2, X } from 'lucide-react'

const socials = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/aradiscovermarketing',
    color: '#1877f2',
    glow: 'rgba(24,119,242,0.45)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/aradiscovermarketing',
    color: '#e1306c',
    glow: 'rgba(225,48,108,0.45)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ara-discover-marketing',
    color: '#0a66c2',
    glow: 'rgba(10,102,194,0.45)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/918110025254',
    color: '#25d366',
    glow: 'rgba(37,211,102,0.45)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
]

/* Quarter-circle arc radius 115px — more gap between icons */
const assignedPositions = [
  { ...socials[3], pos: { x: 0,    y: -115 } },  /* WhatsApp  — straight up */
  { ...socials[2], pos: { x: -58,  y: -100 } },  /* LinkedIn  — up-left 30° */
  { ...socials[1], pos: { x: -100, y: -58  } },  /* Instagram — up-left 60° */
  { ...socials[0], pos: { x: -115, y: 0    } },  /* Facebook  — straight left */
]

export default function FloatingSocial() {
  const [open, setOpen]       = useState(false)
  const [hovered, setHovered] = useState(null)

  return (
    <>
      <style>{`
        @keyframes dial-ping {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes trigger-pulse {
          0%, 100% { box-shadow: 0 6px 24px rgba(37,99,235,0.45); }
          50%       { box-shadow: 0 6px 32px rgba(37,99,235,0.7), 0 0 0 6px rgba(37,99,235,0.15); }
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50" style={{ width: 52, height: 52 }}>

        {/* Social buttons — fan out on open */}
        {assignedPositions.map(({ id, label, href, color, glow, svg, pos }, i) => {
          const isHov = hovered === id
          return (
            <div
              key={id}
              className="absolute"
              style={{
                bottom: 0, right: 0,
                transform: open
                  ? `translate(${pos.x}px, ${pos.y}px)`
                  : 'translate(0px, 0px)',
                opacity: open ? 1 : 0,
                pointerEvents: open ? 'auto' : 'none',
                transition: `transform 0.38s cubic-bezier(.34,1.56,.64,1) ${i * 0.055}s, opacity 0.22s ease ${i * 0.055}s`,
              }}
            >
              {/* label tooltip */}
              <span
                className="absolute right-[58px] top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg text-[11px] font-bold text-white whitespace-nowrap pointer-events-none transition-all duration-200"
                style={{
                  background: color,
                  boxShadow: `0 4px 12px ${glow}`,
                  opacity: isHov ? 1 : 0,
                  transform: `translateY(-50%) translateX(${isHov ? 0 : 6}px)`,
                }}
              >
                {label}
                <span className="absolute right-[-5px] top-1/2 -translate-y-1/2"
                  style={{ borderLeft: `5px solid ${color}`, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', display: 'block', width: 0, height: 0 }} />
              </span>

              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex items-center justify-center transition-all duration-200"
                style={{
                  width: 46, height: 46, borderRadius: '50%',
                  background: isHov ? color : '#dbeafe',
                  color: isHov ? '#fff' : color,
                  border: `2px solid ${isHov ? color : '#bfdbfe'}`,
                  boxShadow: isHov ? `0 8px 24px ${glow}` : '0 4px 14px rgba(0,0,0,0.1)',
                  transform: isHov ? 'scale(1.15)' : 'scale(1)',
                }}
              >
                {isHov && (
                  <span className="absolute inset-0 rounded-full"
                    style={{ background: color, animation: 'dial-ping 0.7s ease-out forwards', opacity: 0.4 }} />
                )}
                {svg}
              </a>
            </div>
          )
        })}

        {/* Trigger button */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle social links"
          className="absolute bottom-0 right-0 flex items-center justify-center transition-all duration-300 text-white"
          style={{
            width: 52, height: 52, borderRadius: '50%',
            background: open ? '#bfdbfe' : '#0d1f3c',
            boxShadow: open
              ? '0 6px 24px rgba(191,219,254,0.7)'
              : '0 6px 24px rgba(37,99,235,0.45)',
            animation: open ? 'none' : 'trigger-pulse 2.2s ease-in-out infinite',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          {open ? <X size={20} color="#1e40af" /> : <Share2 size={20} color="#ffffff" />}
        </button>

      </div>
    </>
  )
}
