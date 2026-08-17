import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ChevronDown, Check } from 'lucide-react'

/**
 * SelectDropdown — plain-string variant of ServiceDropdown.
 *
 * Same portal-based panel, same focus/error styling contract, but takes a
 * simple array of option labels instead of the fixed services list.
 */
export default function SelectDropdown({
  value, onChange, options, placeholder = 'Select an option',
  inputBase, inputFocus, inputBlur, inputErr, error,
  icon: Icon,
}) {
  const [open, setOpen]     = useState(false)
  const [coords, setCoords] = useState(null)
  const ref      = useRef(null)
  const panelRef = useRef(null)

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
      const openUp = window.innerHeight - rect.bottom < 320
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
          {Icon && <Icon size={14} className="flex-shrink-0" style={{ color: value ? '#2563eb' : '#94a3b8' }} />}
          <span className="truncate">{value || placeholder}</span>
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
          {options.map(label => {
            const active = label === value
            return (
              <button key={label} type="button"
                onClick={() => { onChange(label); setOpen(false) }}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-left transition-colors duration-150"
                style={{ background: active ? '#eff6ff' : 'white', color: active ? '#2563eb' : '#0f172a', fontWeight: active ? 600 : 400 }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background = '#f8fafc' }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'white' }}>
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
