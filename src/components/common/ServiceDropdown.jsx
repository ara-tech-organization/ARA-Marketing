import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ChevronDown, Check, Search, Share2, TrendingUp, Palette, Video, Globe, Smartphone, Sparkles } from 'lucide-react'

export const services = [
  { label: 'SEO (Search Engine Optimization)', icon: Search },
  { label: 'Social Media Marketing (SMM)',     icon: Share2 },
  { label: 'Search Engine Marketing (SEM)',    icon: TrendingUp },
  { label: 'Graphic Design',                   icon: Palette },
  { label: 'Video Editing',                    icon: Video },
  { label: 'Website Development',               icon: Globe },
  { label: 'Mobile App Development',            icon: Smartphone },
  { label: 'Other Digital Marketing',           icon: Sparkles },
]

export default function ServiceDropdown({ value, onChange, inputBase, inputFocus, inputBlur, inputErr, error, placeholderIcon: PlaceholderIcon }) {
  const [open, setOpen] = useState(false)
  const [coords, setCoords] = useState(null)
  const ref = useRef(null)
  const panelRef = useRef(null)
  const selected = services.find(s => s.label === value)

  useEffect(() => {
    const onClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target) && panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  useEffect(() => {
    if (!open) return
    const close = e => {
      if (panelRef.current && panelRef.current.contains(e.target)) return
      setOpen(false)
    }
    window.addEventListener('scroll', close, true)
    window.addEventListener('resize', close)
    return () => {
      window.removeEventListener('scroll', close, true)
      window.removeEventListener('resize', close)
    }
  }, [open])

  const toggleOpen = () => {
    if (!open && ref.current) {
      const rect = ref.current.getBoundingClientRect()
      const spaceBelow = window.innerHeight - rect.bottom
      const openUp = spaceBelow < 320
      setCoords({
        left: rect.left,
        width: rect.width,
        top: openUp ? null : rect.bottom + 8,
        bottom: openUp ? window.innerHeight - rect.top + 8 : null,
      })
    }
    setOpen(o => !o)
  }

  return (
    <div className="relative" ref={ref}>
      <button type="button" onClick={toggleOpen}
        className="w-full flex items-center justify-between pl-4 pr-4 py-3 text-[13.5px] text-left"
        style={{
          ...inputBase,
          color: value ? '#0f172a' : '#94a3b8',
          ...(error ? inputErr : (open ? inputFocus : inputBlur)),
        }}>
        <span className="flex items-center gap-2.5 min-w-0">
          {selected ? (
            <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(37,99,235,0.10)' }}>
              <selected.icon size={13} style={{ color: '#2563eb' }} />
            </span>
          ) : PlaceholderIcon ? (
            <PlaceholderIcon size={15} className="flex-shrink-0" style={{ color: '#94a3b8' }} />
          ) : null}
          <span className="truncate">{value || 'Select a service'}</span>
        </span>
        <ChevronDown size={14} className="flex-shrink-0 ml-2 transition-transform duration-200 text-slate-400"
          style={{ transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>

      {open && coords && createPortal(
        <div ref={panelRef}
          className="scrollbar-light fixed z-[10050] rounded-[12px] overflow-hidden bg-white max-h-72 overflow-y-auto"
          style={{
            left: coords.left, width: coords.width,
            top: coords.top ?? 'auto', bottom: coords.bottom ?? 'auto',
            border: '1.5px solid #e2e8f0', boxShadow: '0 12px 32px rgba(37,99,235,0.14)',
          }}>
          {services.map(({ label, icon: Icon }) => {
            const active = label === value
            return (
              <button key={label} type="button"
                onClick={() => { onChange(label); setOpen(false) }}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-left transition-colors duration-150"
                style={{ background: active ? '#eff6ff' : 'white', color: active ? '#2563eb' : '#0f172a', fontWeight: active ? 600 : 400 }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background = '#f8fafc' }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'white' }}>
                <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: active ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.08)' }}>
                  <Icon size={14} style={{ color: '#2563eb' }} />
                </span>
                <span className="truncate flex-1">{label}</span>
                {active && <Check size={14} className="flex-shrink-0" style={{ color: '#2563eb' }} />}
              </button>
            )
          })}
        </div>,
        document.body
      )}
    </div>
  )
}
