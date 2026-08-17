import { useState } from 'react'
import { Heart, GraduationCap, Users, Wrench, Lightbulb, TrendingUp, ArrowRight, Check } from 'lucide-react'
import { whyJoin } from '../../data/careers'

const icons  = [GraduationCap, Users, Wrench, Lightbulb, TrendingUp]
const colors = ['#2563eb', '#0891b2', '#7c3aed', '#d97706', '#059669']

const values = ['Hard Work', 'Creativity', 'Teamwork', 'Willingness to Learn']

export default function CareersWhyJoin() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative py-14 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* ── Left: heading + values ── */}
          <div className="lg:col-span-5 reveal reveal-left lg:sticky lg:top-28">

            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-[0.16em] mb-6">
              <Heart size={11} /> Life at ARA
            </span>

            <h2 className="text-[clamp(26px,3vw,42px)] font-bold text-slate-900 leading-[1.15] tracking-[-1px] mb-6">
              Why Join{' '}
              <span className="text-gradient-blue">ARA Discover Marketing?</span>
            </h2>

            <div className="w-16 h-[3px] rounded-full mb-7"
              style={{ background: 'var(--brand-gradient-soft)' }} />

            <p className="text-[15.5px] text-slate-500 leading-[2] mb-9">
              We value hard work, creativity, teamwork, and a willingness to learn. If you are
              passionate about digital marketing and looking for an opportunity to build your
              career, ARA Discover Marketing could be the right place for you.
            </p>

            {/* Values */}
            <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-4">
              What We Value
            </p>
            <div className="flex flex-wrap gap-2.5 mb-9">
              {values.map(v => (
                <span key={v}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold
                    transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: '#f4f8ff', color: '#1d4ed8', border: '1px solid #e0ecff' }}>
                  <Check size={12} /> {v}
                </span>
              ))}
            </div>

            <button type="button"
              onClick={() => document.getElementById('career-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-glow inline-flex items-center gap-2.5 px-7 py-3.5 text-white
                rounded-full text-[13.5px] font-bold transition-all duration-300 hover:-translate-y-0.5">
              Apply Now <ArrowRight size={15} />
            </button>
          </div>

          {/* ── Right: expanding benefit stack ── */}
          <div className="lg:col-span-7 reveal reveal-right">
            <div className="flex flex-col gap-3">
              {whyJoin.map(({ title, desc }, i) => {
                const Icon    = icons[i % icons.length]
                const color   = colors[i % colors.length]
                const isOpen  = active === i

                return (
                  <button key={title} type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className="group relative w-full text-left rounded-[20px] overflow-hidden"
                    style={{
                      background: isOpen ? '#fbfdff' : 'white',
                      border: isOpen ? `1.5px solid ${color}33` : '1.5px solid #eef3f9',
                      boxShadow: isOpen ? `0 14px 44px ${color}1a` : 'none',
                      transition: 'background 0.4s, border-color 0.4s, box-shadow 0.4s',
                    }}>

                    {/* Left accent rail — grows in when active */}
                    <span className="absolute top-0 bottom-0 left-0 w-[3px] origin-top"
                      style={{
                        background: color,
                        transform: `scaleY(${isOpen ? 1 : 0})`,
                        transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
                      }} />

                    <div className="flex items-center gap-4 sm:gap-5 px-5 sm:px-7 py-5">

                      {/* Index */}
                      <span className="text-[12px] font-bold tabular-nums flex-shrink-0 transition-colors duration-300"
                        style={{ color: isOpen ? color : '#cbd5e1' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      {/* Icon */}
                      <span className="w-12 h-12 rounded-[15px] flex items-center justify-center flex-shrink-0"
                        style={{
                          background: isOpen ? color : `${color}12`,
                          border: `1.5px solid ${isOpen ? color : color + '24'}`,
                          boxShadow: isOpen ? `0 8px 24px ${color}45` : 'none',
                          transition: 'background 0.4s, border-color 0.4s, box-shadow 0.4s, transform 0.4s',
                          transform: isOpen ? 'scale(1.06)' : 'scale(1)',
                        }}>
                        <Icon size={19} style={{ color: isOpen ? '#fff' : color, transition: 'color 0.4s' }} />
                      </span>

                      {/* Title */}
                      <span className="min-w-0 flex-1">
                        <span className="block text-[14.5px] font-bold leading-snug transition-colors duration-300"
                          style={{ color: isOpen ? '#0f172a' : '#475569' }}>
                          {title}
                        </span>
                      </span>

                      {/* Chevron-ish marker */}
                      <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: isOpen ? `${color}14` : '#f6f9fc',
                          transition: 'background 0.4s, transform 0.4s',
                          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                        }}>
                        <ArrowRight size={13} style={{ color: isOpen ? color : '#cbd5e1', transition: 'color 0.4s' }} />
                      </span>
                    </div>

                    {/* Expanding description */}
                    <div className="overflow-hidden"
                      style={{
                        maxHeight: isOpen ? '160px' : '0px',
                        opacity: isOpen ? 1 : 0,
                        transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s',
                      }}>
                      <p className="text-[13.5px] text-slate-500 leading-[1.95] pl-[76px] sm:pl-[92px] pr-6 sm:pr-8 pb-6">
                        {desc}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
