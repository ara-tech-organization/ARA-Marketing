import { useState } from 'react'
import { Briefcase, MapPin, Clock3, ArrowRight, Inbox, LayoutGrid } from 'lucide-react'
import SectionDecor from '../common/SectionDecor'
import { openings } from '../../data/careers'

/* Green = open, red = closed. Driven entirely by `status` in src/data/careers.js. */
const STATUS = {
  hiring: { label: 'Currently Hiring', dot: '#16a34a', bg: 'rgba(22,163,74,0.09)', border: 'rgba(22,163,74,0.26)', text: '#15803d' },
  closed: { label: 'Not Hiring',       dot: '#dc2626', bg: 'rgba(220,38,38,0.07)', border: 'rgba(220,38,38,0.20)', text: '#b91c1c' },
}

function OpeningRow({ job, index, onApply }) {
  const open  = job.status === 'hiring'
  const badge = STATUS[open ? 'hiring' : 'closed']

  return (
    <div
      className="group relative rounded-[22px] bg-white overflow-hidden"
      style={{
        border: open ? '1px solid #dbeafe' : '1px solid #eef2f7',
        boxShadow: open ? '0 3px 18px rgba(37,99,235,0.06)' : 'none',
        transition: 'border-color 0.35s, box-shadow 0.35s, transform 0.35s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform   = 'translateY(-3px)'
        e.currentTarget.style.borderColor = open ? '#93c5fd' : '#dbe3ec'
        e.currentTarget.style.boxShadow   = open
          ? '0 18px 50px rgba(37,99,235,0.14)'
          : '0 12px 34px rgba(15,23,42,0.06)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform   = 'translateY(0)'
        e.currentTarget.style.borderColor = open ? '#dbeafe' : '#eef2f7'
        e.currentTarget.style.boxShadow   = open ? '0 3px 18px rgba(37,99,235,0.06)' : 'none'
      }}
    >
      {/* Left status rail */}
      <div className="absolute top-0 bottom-0 left-0 w-[3px]"
        style={{ background: open ? 'var(--brand-gradient-soft)' : '#e2e8f0' }} />

      <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-7 pl-7 pr-6 sm:pr-7 py-6 sm:py-7">

        {/* Index + icon */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="text-[12px] font-bold tabular-nums transition-colors duration-300
            text-slate-300 group-hover:text-blue-500">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="w-12 h-12 rounded-[15px] flex items-center justify-center flex-shrink-0
            transition-transform duration-300 group-hover:scale-105"
            style={{
              background: open ? 'rgba(37,99,235,0.09)' : '#f5f7fa',
              border: open ? '1.5px solid rgba(37,99,235,0.18)' : '1.5px solid #eef2f7',
            }}>
            <Briefcase size={19} style={{ color: open ? '#2563eb' : '#94a3b8' }} />
          </span>
        </div>

        {/* Title + description */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className={`text-[15.5px] font-bold leading-snug ${open ? 'text-slate-900' : 'text-slate-500'}`}>
              {job.title}
            </h3>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold whitespace-nowrap"
              style={{ background: badge.bg, color: badge.text, border: `1px solid ${badge.border}` }}>
              <span className={`w-[7px] h-[7px] rounded-full ${open ? 'animate-pulse-dot' : ''}`}
                style={{ background: badge.dot }} />
              {badge.label}
            </span>
          </div>

          <p className={`text-[13px] leading-[1.85] mb-3.5 max-w-[620px] ${open ? 'text-slate-500' : 'text-slate-400'}`}>
            {job.desc}
          </p>

          {/* Meta chips */}
          <div className="flex flex-wrap gap-2">
            {[
              [MapPin,    job.location],
              [Clock3,    job.experience],
              [Briefcase, job.type],
            ].map(([Icon, value]) => (
              <span key={value}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11.5px] font-medium text-slate-500"
                style={{ background: '#f8fafc', border: '1px solid #eef2f7' }}>
                <Icon size={11} className={open ? 'text-blue-500' : 'text-slate-400'} /> {value}
              </span>
            ))}
          </div>
        </div>

        {/* Action */}
        <div className="flex-shrink-0 lg:w-[170px]">
          {open ? (
            <button type="button" onClick={() => onApply(job.title)}
              className="btn-glow w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full
                text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5">
              Apply Now <ArrowRight size={14} />
            </button>
          ) : (
            <div className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full
              text-[12.5px] font-semibold text-slate-400"
              style={{ background: '#f8fafc', border: '1px solid #eef2f7' }}>
              Applications Closed
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default function CareersOpenings({ onApply }) {
  const [filter, setFilter] = useState('open')

  /* Open roles first, then closed — order inside each group follows the data file. */
  const sorted    = [...openings].sort((a, b) => (a.status === 'hiring' ? 0 : 1) - (b.status === 'hiring' ? 0 : 1))
  const openCount = openings.filter(j => j.status === 'hiring').length
  const visible   = filter === 'open' ? sorted.filter(j => j.status === 'hiring') : sorted

  const tabs = [
    { key: 'open', label: 'Open Now', count: openCount },
    { key: 'all',  label: 'All Roles', count: openings.length },
  ]

  return (
    <section id="current-openings" className="relative py-14 md:py-20 lg:py-24 bg-white overflow-hidden">
      <SectionDecor variant="c" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7 mb-9 md:mb-12 reveal">
          <div className="max-w-[640px]">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-[0.16em] mb-6">
              <LayoutGrid size={11} /> Open Positions
            </span>
            <h2 className="text-[clamp(26px,3vw,42px)] font-bold text-slate-900 leading-[1.15] tracking-[-1px] mb-5">
              Current <span className="text-gradient-blue">Openings</span>
            </h2>
            <p className="text-[15px] text-slate-500 leading-[1.95]">
              {openCount > 0
                ? `We are currently hiring for ${openCount} ${openCount === 1 ? 'role' : 'roles'} in Thanjavur. Roles marked green are open — hit Apply Now and the form below fills in for you.`
                : 'We are not actively hiring at the moment, but we are always happy to hear from talented people. Send us your resume below and we will get in touch when a suitable role opens up.'}
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full flex-shrink-0 self-start lg:self-end"
            style={{ background: '#f4f8ff', border: '1px solid #e6efff' }}>
            {tabs.map(({ key, label, count }) => {
              const active = filter === key
              return (
                <button key={key} type="button" onClick={() => setFilter(key)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12.5px] font-semibold
                    transition-all duration-300 whitespace-nowrap"
                  style={active
                    ? { background: 'var(--brand-gradient)', color: '#fff', boxShadow: '0 6px 20px rgba(37,99,235,0.28)' }
                    : { background: 'transparent', color: '#64748b' }}>
                  {label}
                  <span className="text-[10.5px] font-bold tabular-nums px-1.5 py-0.5 rounded-full"
                    style={active
                      ? { background: 'rgba(255,255,255,0.22)', color: '#fff' }
                      : { background: '#e6efff', color: '#2563eb' }}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Legend ── */}
        <div className="flex flex-wrap items-center gap-5 mb-6 reveal">
          {Object.values(STATUS).map(s => (
            <span key={s.label} className="inline-flex items-center gap-2 text-[11.5px] font-semibold text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.dot }} /> {s.label}
            </span>
          ))}
        </div>

        {/* ── Rows ── */}
        {visible.length > 0 ? (
          <div className="flex flex-col gap-4 reveal">
            {visible.map((job, i) => (
              <OpeningRow key={job.title} job={job} index={i} onApply={onApply} />
            ))}
          </div>
        ) : (
          <div className="reveal max-w-[620px] mx-auto text-center rounded-[24px] bg-white px-7 py-12"
            style={{ border: '1px solid #dbeafe', boxShadow: '0 6px 28px rgba(37,99,235,0.07)' }}>
            <div className="w-14 h-14 rounded-[17px] flex items-center justify-center mx-auto mb-5"
              style={{ background: 'rgba(37,99,235,0.09)', border: '1.5px solid rgba(37,99,235,0.18)' }}>
              <Inbox size={22} style={{ color: '#2563eb' }} />
            </div>
            <h3 className="text-[15px] font-bold text-slate-900 mb-2.5">No open roles right now</h3>
            <p className="text-[13.5px] text-slate-500 leading-[1.9] mb-7 max-w-[420px] mx-auto">
              Share your resume through the form below and we will contact you as soon as a
              matching role opens up.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button type="button"
                onClick={() => document.getElementById('career-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-glow inline-flex items-center gap-2 px-7 py-3 rounded-full text-[13px] font-bold text-white
                  transition-all duration-300 hover:-translate-y-0.5">
                Submit Your Resume <ArrowRight size={14} />
              </button>
              {openings.length > 0 && filter === 'open' && (
                <button type="button" onClick={() => setFilter('all')}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[13px] font-semibold
                    bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700
                    transition-all duration-300">
                  Browse all roles
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
