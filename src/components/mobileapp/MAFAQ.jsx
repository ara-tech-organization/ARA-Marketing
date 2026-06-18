import { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Why is ARA Discover Marketing the best Mobile App Development Company in Thanjavur?',
    a: 'We combine expertise, AI integration, and customer-centricity to develop scalable, secure, and high-performance mobile apps. Our full-cycle development approach, transparent communication, and track record of 200+ delivered apps make us the most trusted mobile app development company in Thanjavur.',
  },
  {
    q: 'Do you provide AI-driven mobile app development in Thanjavur?',
    a: 'Yes, we offer AI-enhanced mobile app development in Thanjavur. Our AI features include recommendation engines, smart chatbots, predictive analytics, and automation capabilities that improve user engagement and streamline business processes.',
  },
  {
    q: 'Do you offer custom mobile app development services in Thanjavur?',
    a: 'Yes, our custom mobile app development services in Thanjavur are fully tailored to your unique business requirements. We do not use off-the-shelf templates — every app is built from scratch to match your goals, audience, and brand identity.',
  },
  {
    q: 'Can you develop e-commerce mobile apps?',
    a: 'Yes, we provide e-commerce mobile app development services in Thanjavur for secure, feature-rich online stores. Our e-commerce apps include product catalogues, cart management, secure payment gateways, push notifications, and AI-driven product recommendations.',
  },
  {
    q: 'Do you provide post-launch support for apps?',
    a: 'Yes, our mobile application development service in Thanjavur includes comprehensive post-launch support — maintenance, updates, bug fixes, performance monitoring, and ongoing optimisation to ensure your app keeps performing at its best.',
  },
  {
    q: 'What platforms do you develop for?',
    a: 'We develop for both Android and iOS platforms natively, as well as cross-platform solutions using Flutter and React Native. Whether you need a native Android app using Kotlin/Java, a native iOS app using Swift, or a cross-platform solution, we have the expertise to deliver.',
  },
]

function FAQItem({ faq, index, active, setActive }) {
  const isOpen = active === index

  return (
    <div className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        border: isOpen ? '1.5px solid rgba(37,99,235,0.5)' : '1.5px solid #e2e8f0',
        boxShadow: isOpen ? '0 8px 32px rgba(37,99,235,0.1)' : '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      <button type="button"
        onClick={() => setActive(isOpen ? -1 : index)}
        className="w-full flex items-start gap-4 px-6 py-5 text-left bg-white transition-colors duration-200 hover:bg-slate-50/60">
        <span className="flex-shrink-0 text-[11px] font-black w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 mt-0.5"
          style={isOpen
            ? { background: 'linear-gradient(135deg,#1e40af,#2563eb)', color: 'white' }
            : { background: '#ede9fe', color: '#1e40af' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="flex-1 text-[14px] font-semibold leading-snug pt-0.5 transition-colors duration-200"
          style={{ color: isOpen ? '#1e3a8a' : '#334155' }}>
          {faq.q}
        </span>
        <ChevronDown size={17} className="flex-shrink-0 mt-0.5 transition-transform duration-300"
          style={{ color: isOpen ? '#1e40af' : '#94a3b8', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>

      {isOpen && (
        <div className="px-6 pb-6 bg-white">
          <div className="h-px mb-4"
            style={{ background: 'linear-gradient(90deg,rgba(37,99,235,0.5),transparent)' }} />
          <p className="text-[13.5px] text-slate-600 leading-[1.85] pl-11">{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function MAFAQ() {
  const [active, setActive] = useState(-1)

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.05) 0%,transparent 65%)' }} />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.08)', color: '#1e40af', border: '1px solid rgba(37,99,235,0.2)' }}>
            <HelpCircle size={11} /> FAQs
          </span>
          <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Frequently Asked{' '}
            <span style={{ background: 'linear-gradient(135deg,#1e40af,#2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Questions
            </span>
          </h2>
          <p className="text-[15px] text-slate-500 max-w-xl mx-auto">
            Everything you need to know about our mobile app development services in Thanjavur.
          </p>
        </div>

        {/* Accordion */}
        <div className="reveal flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} active={active} setActive={setActive} />
          ))}
        </div>
      </div>
    </section>
  )
}
