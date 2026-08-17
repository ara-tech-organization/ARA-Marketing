import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  User, Mail, Phone, MapPin, Briefcase, Clock3, GraduationCap, Link2,
  FileUp, FileText, X, Send, Loader2, ShieldCheck, Check,
  ArrowRight, ArrowLeft,
} from 'lucide-react'
import SectionDecor from '../common/SectionDecor'
import SelectDropdown from '../common/SelectDropdown'
import { submitCareerApplication } from '../../utils/submitCareerApplication'
import { positions, experienceLevels, qualifications, RESUME_ACCEPT, RESUME_MAX_BYTES } from '../../data/careers'

/* `position` is not held here — CareersPage owns it so an "Apply Now" click on an
   opening card can drop the role straight into this form. */
const EMPTY = {
  name: '', email: '', phone: '', location: '',
  experience: '', qualification: '', portfolio: '',
  resume: null, consent: false,
}

const formatSize = bytes =>
  bytes < 1024 * 1024
    ? `${Math.round(bytes / 1024)} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`

const inputBase = {
  background: 'white',
  border: '1.5px solid #e6ecf4',
  borderRadius: '13px',
  color: '#0f172a',
  outline: 'none',
  transition: 'border-color 0.22s, box-shadow 0.22s',
  fontFamily: 'inherit',
}
const inputErr   = { borderColor: 'rgba(248,113,113,0.7)', boxShadow: '0 0 0 3px rgba(248,113,113,0.1)' }
const inputFocus = { borderColor: '#2563eb', boxShadow: '0 0 0 3px rgba(37,99,235,0.10)' }
const inputBlur  = { borderColor: '#e6ecf4', boxShadow: 'none' }

const steps = [
  { title: 'Fill in your details',   sub: 'Personal info, role and experience' },
  { title: 'Attach your resume',     sub: 'PDF, DOC or DOCX up to 5 MB' },
  { title: 'We review and reach out', sub: 'Shortlisted profiles hear from us soon' },
]

/* Which validation keys belong to which step, so "Continue" only reports the
   problems on the step the visitor can actually see. */
const STEP_FIELDS = {
  1: ['name', 'email', 'phone', 'location', 'position', 'experience', 'qualification', 'portfolio'],
  2: ['resume', 'consent'],
}

const pick = (errs, step) =>
  Object.fromEntries(Object.entries(errs).filter(([key]) => STEP_FIELDS[step].includes(key)))

/* Kept at module scope: defining these inside the component would give them a new
   identity every render, remounting the inputs and dropping focus on each keystroke. */
function Label({ children }) {
  return (
    <label className="block text-[11px] font-bold mb-2 uppercase tracking-[0.13em] text-slate-500">
      {children}
    </label>
  )
}

function Err({ msg }) {
  return msg ? <p className="text-[11px] mt-1.5" style={{ color: '#f87171' }}>{msg}</p> : null
}

/* `index` is optional — inside the wizard the step number is carried by the
   progress header and the left rail, so the section headings run unnumbered. */
function StepHeading({ index, children }) {
  return (
    <div className="flex items-center gap-3.5 mb-5">
      {index && (
        <span className="w-7 h-7 rounded-[9px] flex items-center justify-center flex-shrink-0
          text-[11px] font-bold text-white tabular-nums"
          style={{ background: 'var(--brand-gradient)', boxShadow: '0 4px 14px rgba(37,99,235,0.28)' }}>
          {index}
        </span>
      )}
      <h3 className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-slate-700 whitespace-nowrap">
        {children}
      </h3>
      <span className="flex-1 h-px" style={{ background: 'var(--brand-gradient-line)' }} />
    </div>
  )
}

function TextField({ icon: Icon, type = 'text', placeholder, value, onChange, error }) {
  return (
    <div className="relative">
      <Icon size={14} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
      <input type={type} placeholder={placeholder} value={value} onChange={onChange}
        className="w-full pl-11 pr-4 py-3.5 text-[13.5px] placeholder:text-slate-400"
        style={{ ...inputBase, ...(error ? inputErr : {}) }}
        onFocus={e => Object.assign(e.target.style, inputFocus)}
        onBlur={e => Object.assign(e.target.style, error ? inputErr : inputBlur)} />
    </div>
  )
}

export default function CareersForm({ position, onPositionChange }) {
  const navigate = useNavigate()
  const [form, setForm]       = useState(EMPTY)
  const [errors, setErrors]   = useState({})
  const [loading, setLoading] = useState(false)
  const [step, setStep]       = useState(1)
  const fileRef = useRef(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim())     e.name     = 'Full name is required'
    if (!form.email.trim())    e.email    = 'Email address is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim())    e.phone    = 'Phone number is required'
    else if (!/^(\+91[-\s]?)?[6-9]\d{9}$/.test(form.phone.replace(/[\s-]/g, ''))) e.phone = 'Enter a valid mobile number'
    if (!form.location.trim()) e.location = 'Current location is required'
    if (!position)             e.position = 'Please select a position'
    if (!form.experience)      e.experience = 'Please select your work experience'
    if (!form.qualification)   e.qualification = 'Please select your qualification'
    if (form.portfolio.trim() && !/^https?:\/\/\S+\.\S+/.test(form.portfolio.trim()))
      e.portfolio = 'Enter a full URL starting with http:// or https://'
    if (!form.resume)          e.resume   = 'Please attach your resume'
    if (!form.consent)         e.consent  = 'Please confirm before submitting'
    return e
  }

  const handleChange = key => e => {
    setForm(prev => ({ ...prev, [key]: e.target.value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }))
  }

  const setField = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }))
  }

  const handleFile = e => {
    const file = e.target.files?.[0]
    if (!file) return
    const ext = '.' + file.name.split('.').pop().toLowerCase()
    if (!RESUME_ACCEPT.split(',').includes(ext)) {
      setErrors(prev => ({ ...prev, resume: 'Accepted formats: PDF, DOC, DOCX' }))
      e.target.value = ''
      return
    }
    if (file.size > RESUME_MAX_BYTES) {
      setErrors(prev => ({ ...prev, resume: `File is too large — maximum ${formatSize(RESUME_MAX_BYTES)}` }))
      e.target.value = ''
      return
    }
    setForm(prev => ({ ...prev, resume: file }))
    setErrors(prev => ({ ...prev, resume: '' }))
  }

  const clearFile = () => {
    setForm(prev => ({ ...prev, resume: null }))
    if (fileRef.current) fileRef.current.value = ''
  }

  /* One submit handler for both steps so the Enter key advances the wizard the
     same way the button does. */
  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()

    if (step === 1) {
      const stepErrs = pick(errs, 1)
      setErrors(stepErrs)
      if (!Object.keys(stepErrs).length) setStep(2)
      return
    }

    // Something on step 1 failed after the fact — send them back to see it.
    const earlier = pick(errs, 1)
    if (Object.keys(earlier).length) { setErrors(earlier); setStep(1); return }

    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      await submitCareerApplication({ ...form, position })
      setForm(EMPTY)
      onPositionChange('')
      clearFile()
      navigate('/thank-you')
    } catch {
      setErrors({ submit: 'Something went wrong sending your application. Please try again, or email your resume to aradiscovermarketing@gmail.com.' })
    } finally {
      setLoading(false)
    }
  }

  const field = key => ({
    value: form[key],
    onChange: handleChange(key),
    error: errors[key],
  })

  /* overflow-x-clip, not overflow-hidden: `hidden` would make this section the
     scroll container, which stops the left rail's position:sticky from ever
     engaging. `clip` still contains the decor without that side effect. */
  return (
    <section id="career-form" className="relative py-14 md:py-20 lg:py-24 overflow-x-clip" style={{ background: '#f6faff' }}>
      <SectionDecor variant="b" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Header ── */}
        <div className="max-w-[720px] mb-10 md:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-[0.16em] mb-6"
            style={{ boxShadow: '0 2px 10px rgba(37,99,235,0.06)' }}>
            <FileText size={11} /> Apply Online
          </span>
          <h2 className="text-[clamp(26px,3vw,42px)] font-bold text-slate-900 leading-[1.15] tracking-[-1px] mb-5">
            Career <span className="text-gradient-blue">Application Form</span>
          </h2>
          <p className="text-[15.5px] text-slate-500 leading-[2]">
            Interested in building your career with ARA Discover Marketing? Fill in the details
            below and submit your application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* ── Left: process rail ── */}
          <div className="lg:col-span-4 reveal reveal-left lg:sticky lg:top-28">
            <div className="relative rounded-[26px] p-7 sm:p-8 overflow-hidden"
              style={{
                background: 'linear-gradient(160deg,#0d2244 0%,#0a1a34 55%,#0d2244 100%)',
                boxShadow: '0 22px 64px rgba(13,34,68,0.3)',
              }}>
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
                style={{ background: 'var(--brand-gradient-glow-dark)' }} />

              <div className="relative">
                <div className="w-12 h-12 rounded-[15px] flex items-center justify-center mb-6"
                  style={{ background: 'var(--brand-gradient)', boxShadow: '0 10px 28px rgba(37,99,235,0.35)' }}>
                  <Briefcase size={20} className="text-white" />
                </div>

                <h3 className="text-[17px] font-bold text-white leading-snug mb-2.5">
                  Join Our Team
                </h3>
                <p className="text-[13px] text-white/45 leading-[1.9] mb-8">
                  Three short steps. Fields marked * are required and your details stay
                  confidential.
                </p>

                {/* Steps — the current one is lit, finished ones get a tick and
                    the rest stay dimmed so the rail reads as live progress. */}
                <div className="mb-8">
                  {steps.map(({ title, sub }, i) => {
                    const n      = i + 1
                    const done   = n < step
                    const active = n === step
                    return (
                      <div key={title} className="relative flex gap-4 pb-6 last:pb-0">
                        {/* Connector */}
                        {i < steps.length - 1 && (
                          <span className="absolute left-[15px] top-9 bottom-1 w-px transition-colors duration-500"
                            style={{ background: done
                              ? 'linear-gradient(180deg, rgba(74,222,128,0.5), rgba(59,130,246,0.1))'
                              : 'linear-gradient(180deg, rgba(59,130,246,0.4), rgba(59,130,246,0.05))' }} />
                        )}
                        <span className="relative w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                          text-[11px] font-bold tabular-nums transition-all duration-300"
                          style={done
                            ? { background: 'rgba(22,163,74,0.18)', border: '1px solid rgba(74,222,128,0.4)', color: '#4ade80' }
                            : active
                              ? { background: 'var(--brand-gradient)', border: '1px solid rgba(147,197,253,0.5)', color: '#fff', boxShadow: '0 8px 22px rgba(37,99,235,0.45)' }
                              : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.35)' }}>
                          {done ? <Check size={14} /> : n}
                        </span>
                        <span className="min-w-0 pt-1">
                          <span className={`block text-[13px] font-semibold leading-tight transition-colors duration-300
                            ${active ? 'text-white' : done ? 'text-white/70' : 'text-white/35'}`}>
                            {title}
                          </span>
                          <span className={`block text-[11.5px] mt-1.5 leading-snug transition-colors duration-300
                            ${active ? 'text-white/55' : 'text-white/25'}`}>
                            {sub}
                          </span>
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Privacy note */}
                <div className="flex items-start gap-3 px-4 py-3.5 rounded-[14px]"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <ShieldCheck size={15} className="text-blue-300 flex-shrink-0 mt-0.5" />
                  <p className="text-[11.5px] text-white/45 leading-[1.7]">
                    Your resume is sent directly to our HR team and is never published anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: form card ── */}
          <div className="lg:col-span-8 reveal reveal-right">
            <div className="relative rounded-[26px] overflow-hidden bg-white"
              style={{ border: '1px solid #e0ecff', boxShadow: '0 14px 50px rgba(37,99,235,0.09)' }}>

              {/* Decorative wash */}
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: 'var(--brand-gradient-glow)' }} />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full pointer-events-none"
                style={{ background: 'var(--brand-gradient-glow)' }} />

              <div className="relative z-10 p-5 sm:p-8 md:p-10">

                <form onSubmit={handleSubmit} noValidate>

                    {/* ── Progress header ── */}
                    <div className="mb-7">
                      <div className="flex items-end justify-between gap-4 mb-4">
                        <div>
                          <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-blue-600">
                            Step {step} of 2
                          </p>
                          <h3 className="text-[17px] font-bold text-slate-900 leading-snug mt-2">
                            {steps[step - 1].title}
                          </h3>
                        </div>
                        <span className="text-[11.5px] font-bold text-slate-400 tabular-nums flex-shrink-0">
                          {step === 1 ? '50' : '100'}%
                        </span>
                      </div>
                      <span className="block h-1.5 rounded-full overflow-hidden" style={{ background: '#e8f0fd' }}>
                        <span className="block h-full rounded-full transition-all duration-500"
                          style={{ width: step === 1 ? '50%' : '100%', background: 'var(--brand-gradient)' }} />
                      </span>
                    </div>

                    {step === 1 && (
                      <>
                    {/* ── Personal Information ── */}
                    <StepHeading>Personal Information</StepHeading>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-9">
                      <div>
                        <Label>Full Name *</Label>
                        <TextField {...field('name')} icon={User} placeholder="Your full name" />
                        <Err msg={errors.name} />
                      </div>
                      <div>
                        <Label>Email Address *</Label>
                        <TextField {...field('email')} icon={Mail} type="email" placeholder="your@email.com" />
                        <Err msg={errors.email} />
                      </div>
                      <div>
                        <Label>Phone Number *</Label>
                        <TextField {...field('phone')} icon={Phone} type="tel" placeholder="(+91) 81100 25254" />
                        <Err msg={errors.phone} />
                      </div>
                      <div>
                        <Label>Current Location *</Label>
                        <TextField {...field('location')} icon={MapPin} placeholder="City, State" />
                        <Err msg={errors.location} />
                      </div>
                    </div>

                    {/* ── Career Information ── */}
                    <StepHeading>Career Information</StepHeading>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-9">
                      <div>
                        <Label>Position Applying For *</Label>
                        <SelectDropdown
                          value={position}
                          onChange={v => { onPositionChange(v); if (errors.position) setErrors(prev => ({ ...prev, position: '' })) }}
                          options={positions}
                          placeholder="Select a position"
                          icon={Briefcase}
                          inputBase={inputBase} inputFocus={inputFocus} inputBlur={inputBlur}
                          inputErr={inputErr} error={errors.position}
                        />
                        <Err msg={errors.position} />
                      </div>
                      <div>
                        <Label>Total Work Experience *</Label>
                        <SelectDropdown
                          value={form.experience}
                          onChange={v => setField('experience', v)}
                          options={experienceLevels}
                          placeholder="Select experience"
                          icon={Clock3}
                          inputBase={inputBase} inputFocus={inputFocus} inputBlur={inputBlur}
                          inputErr={inputErr} error={errors.experience}
                        />
                        <Err msg={errors.experience} />
                      </div>
                      <div>
                        <Label>Highest Qualification *</Label>
                        <SelectDropdown
                          value={form.qualification}
                          onChange={v => setField('qualification', v)}
                          options={qualifications}
                          placeholder="Select qualification"
                          icon={GraduationCap}
                          inputBase={inputBase} inputFocus={inputFocus} inputBlur={inputBlur}
                          inputErr={inputErr} error={errors.qualification}
                        />
                        <Err msg={errors.qualification} />
                      </div>
                      <div>
                        <Label>LinkedIn / Portfolio URL</Label>
                        <TextField {...field('portfolio')} icon={Link2} type="url" placeholder="https://linkedin.com/in/... (optional)" />
                        <Err msg={errors.portfolio} />
                      </div>
                    </div>

                    {/* Step 1 footer */}
                    <div className="flex justify-end">
                      <button type="submit"
                        className="btn-glow w-full sm:w-auto inline-flex items-center justify-center gap-2.5
                          px-9 py-4 rounded-full text-[14px] font-bold text-white
                          transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: 'var(--brand-gradient)', boxShadow: '0 10px 34px rgba(37,99,235,0.28)' }}>
                        Continue <ArrowRight size={16} />
                      </button>
                    </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                    {/* ── Resume & Confirmation ── */}
                    <StepHeading>Resume &amp; Confirmation</StepHeading>

                    <div className="mb-7">
                      <Label>Resume / CV *</Label>

                      <input ref={fileRef} type="file" accept={RESUME_ACCEPT} onChange={handleFile} className="hidden" />

                      {form.resume ? (
                        <div className="flex items-center gap-3.5 px-5 py-4 rounded-[13px]"
                          style={{ background: '#eff6ff', border: '1.5px solid #bfdbfe' }}>
                          <div className="w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0"
                            style={{ background: 'var(--brand-gradient)', boxShadow: '0 6px 18px rgba(37,99,235,0.28)' }}>
                            <FileText size={17} className="text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[13px] font-semibold text-slate-800 truncate">{form.resume.name}</p>
                            <p className="text-[11px] text-slate-400 mt-0.5">{formatSize(form.resume.size)} · ready to submit</p>
                          </div>
                          <button type="button" onClick={clearFile} aria-label="Remove file"
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                              text-slate-400 hover:text-red-500 hover:bg-white transition-all duration-200">
                            <X size={15} />
                          </button>
                        </div>
                      ) : (
                        <button type="button" onClick={() => fileRef.current?.click()}
                          className="group w-full flex flex-col items-center justify-center gap-2.5 px-4 py-9 rounded-[16px]
                            transition-all duration-300 hover:bg-blue-50/50"
                          style={{
                            background: '#fbfdff',
                            border: errors.resume ? '1.5px dashed rgba(248,113,113,0.7)' : '1.5px dashed #c7dcff',
                          }}>
                          <div className="w-12 h-12 rounded-[15px] flex items-center justify-center
                            transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
                            style={{ background: 'rgba(37,99,235,0.09)', border: '1.5px solid rgba(37,99,235,0.18)' }}>
                            <FileUp size={19} style={{ color: '#2563eb' }} />
                          </div>
                          <span className="text-[13.5px] font-bold text-slate-700">Choose File</span>
                          <span className="text-[11.5px] text-slate-400">
                            Accepted formats: PDF, DOC, DOCX · Max {formatSize(RESUME_MAX_BYTES)}
                          </span>
                        </button>
                      )}
                      <Err msg={errors.resume} />
                    </div>

                    {/* Consent */}
                    <div className="mb-7">
                      <label className="flex items-start gap-3.5 cursor-pointer group px-5 py-4 rounded-[13px]
                        transition-colors duration-200"
                        style={{ background: '#fbfdff', border: '1.5px solid #eef4fc' }}>
                        <input type="checkbox" checked={form.consent}
                          onChange={e => setField('consent', e.target.checked)}
                          className="mt-0.5 w-[17px] h-[17px] flex-shrink-0 cursor-pointer accent-blue-600" />
                        <span className="text-[12.5px] text-slate-500 leading-[1.75] group-hover:text-slate-700 transition-colors duration-200">
                          I confirm that the information provided is accurate and I agree to be
                          contacted regarding career opportunities at ARA Discover Marketing.
                        </span>
                      </label>
                      <Err msg={errors.consent} />
                    </div>

                    {errors.submit && (
                      <p className="text-[12px] mb-5 text-center leading-[1.7]" style={{ color: '#f87171' }}>
                        {errors.submit}
                      </p>
                    )}

                    {/* Step 2 footer — send sits here, on the last step only */}
                    <div className="flex flex-col-reverse sm:flex-row items-stretch gap-3">
                      <button type="button" onClick={() => { setErrors({}); setStep(1) }} disabled={loading}
                        className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full
                          text-[13.5px] font-semibold bg-white text-slate-600 transition-all duration-300
                          hover:border-blue-300 hover:text-blue-700 disabled:opacity-60"
                        style={{ border: '1.5px solid #e6ecf4' }}>
                        <ArrowLeft size={15} /> Back
                      </button>
                      <button type="submit" disabled={loading}
                        className="btn-glow flex-1 flex items-center justify-center gap-2.5 py-4 rounded-full
                          text-[14px] font-bold text-white transition-all duration-300
                          disabled:opacity-75 disabled:cursor-not-allowed hover:-translate-y-0.5"
                        style={{ background: loading ? '#3b82f6' : 'var(--brand-gradient)', boxShadow: '0 10px 34px rgba(37,99,235,0.28)' }}>
                        {loading
                          ? <><Loader2 size={17} className="animate-spin" /> Submitting Application...</>
                          : <><Send size={16} /> Submit Application</>}
                      </button>
                    </div>

                    <p className="text-[11.5px] text-center text-slate-400 mt-4">
                      Thank you for your interest in joining ARA Discover Marketing.
                    </p>
                      </>
                    )}
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
