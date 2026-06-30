import { useState } from 'react'
import { HelpCircle, ChevronDown, MessageCircle, Phone, ArrowRight, BookOpen } from 'lucide-react'

const faqs = [
  {
    q: 'What is WordPress Web Development?',
    a: 'WordPress website development is the process of building websites on the WordPress CMS platform. It allows businesses to manage and customise their content easily without technical knowledge, while developers extend functionality through themes, plugins, and custom code.',
  },
  {
    q: 'Why is WordPress good for business websites?',
    a: 'WordPress is flexible, SEO-friendly, scalable, and easy to manage — making it the right choice for all types of business websites. It powers over 40% of the web globally and has a massive ecosystem of plugins, themes, and developer support.',
  },
  {
    q: 'Can I update my WordPress website myself?',
    a: 'Yes, WordPress allows users to update content, images, and pages with no technical knowledge. The intuitive admin dashboard makes adding blog posts, changing images, and editing pages straightforward for anyone — even without coding skills.',
  },
  {
    q: 'Can WordPress be used for eCommerce websites?',
    a: 'Yes, WordPress can be a fully functional e-commerce solution with WooCommerce. WooCommerce powers over 28% of all online stores and provides product management, secure checkout, inventory control, and payment gateway integrations.',
  },
  {
    q: 'How secure is a WordPress website?',
    a: 'WordPress is secure when properly developed with regular updates, high-security plugins (like Wordfence), SSL certificates, and optimised coding practices. Our builds include security hardening, two-factor authentication, and regular security audits.',
  },
  {
    q: 'Do you provide custom WordPress development?',
    a: 'Yes, we offer fully custom WordPress solutions tailored to your business requirements and branding. We do not use pre-made templates — every website is designed and developed from scratch to reflect your unique brand identity.',
  },
]

function FAQItem({ faq, index, active, setActive }) {
  const isOpen = active === index

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
      style={{
        border: isOpen ? '1.5px solid rgba(37,99,235,0.4)' : '1.5px solid #e2e8f0',
        boxShadow: isOpen ? '0 8px 28px rgba(37,99,235,0.1)' : 'none',
        background: isOpen ? 'rgba(37,99,235,0.02)' : '#ffffff',
      }}
      onClick={() => setActive(isOpen ? -1 : index)}
    >
      <div className="flex items-start gap-4 px-5 py-4">
        {/* Left accent bar */}
        <div
          className="flex-shrink-0 w-1 self-stretch rounded-full mt-0.5 transition-all duration-300"
          style={{ background: isOpen ? 'linear-gradient(180deg, #1d4ed8, #3b82f6)' : '#e2e8f0', minHeight: 20 }}
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <span
              className="text-[14px] font-semibold leading-snug transition-colors duration-200"
              style={{ color: isOpen ? '#1e40af' : '#1e293b' }}
            >
              {faq.q}
            </span>
            <ChevronDown
              size={16}
              className="flex-shrink-0 mt-0.5 transition-transform duration-300"
              style={{ color: isOpen ? '#2563eb' : '#94a3b8', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </div>

          {isOpen && (
            <p className="text-[13px] text-slate-500 leading-[1.85] mt-3 pr-2">{faq.a}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CMSFAQ() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-16 sm:py-16 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)' }} />
      <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 65%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-20 items-start">

          {/* ── Left: sticky panel ── */}
          <div className="md:w-[300px] lg:w-[380px] flex-shrink-0 md:sticky md:top-24 reveal">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(37,99,235,0.08)', color: '#1d4ed8', border: '1px solid rgba(37,99,235,0.2)' }}>
              <HelpCircle size={11} /> FAQs
            </span>

            {/* Heading */}
            <h2 className="text-[clamp(23px,2.5vw,41px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
              Frequently Asked{' '}
              <span style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Questions
              </span>
            </h2>

            <p className="text-[14px] text-slate-500 leading-[1.85] mb-8">
              Everything you need to know about our WordPress &amp; CMS website development services in Thanjavur. Can't find an answer? Reach out to us directly.
            </p>

            {/* FAQ count pill */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)' }}>
                <BookOpen size={16} style={{ color: '#2563eb' }} />
              </div>
              <div>
                <p className="text-[13px] font-bold text-slate-800">{faqs.length} Questions Answered</p>
                <p className="text-[11.5px] text-slate-400">Click any question to expand</p>
              </div>
            </div>

            {/* Contact card */}
            <div className="rounded-2xl p-5 mb-4 relative overflow-hidden"
              style={{ background: '#071a36', boxShadow: '0 12px 36px rgba(7,26,54,0.4)' }}>
              {/* Inner glow */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)' }} />
              <div className="relative flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.25)' }}>
                  <MessageCircle size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-white leading-tight">Still have questions?</p>
                  <p className="text-[11.5px] mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>Our team is happy to help you</p>
                </div>
              </div>
              <a
                href="/ARA-Marketing/contact-us"
                className="relative flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300 hover:scale-[1.02]"
                style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)', color: 'white', backdropFilter: 'blur(8px)' }}
              >
                <span className="flex items-center gap-2"><Phone size={13} /> Call Us Now</span>
                <ArrowRight size={13} />
              </a>
            </div>

          </div>

          {/* ── Right: accordion ── */}
          <div className="flex-1 reveal">
            <div className="flex flex-col gap-2.5">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} active={active} setActive={setActive} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
