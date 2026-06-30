import { ArrowRight, MessageSquare } from 'lucide-react'

export default function PriceCTA() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-white">

      {/* Subtle bg tint */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.05) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-[700px] mx-auto px-4 sm:px-6 text-center">

        <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
          border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
          <MessageSquare size={11} /> Ready to Get Started?
        </div>

        <h2 className="reveal text-[clamp(22px,3vw,36px)] font-bold text-slate-900 leading-tight mb-4">
          Not Sure Which Package is Right for You?
        </h2>

        <p className="reveal text-[15px] text-slate-500 leading-relaxed mb-8 max-w-[540px] mx-auto">
          Let&apos;s talk about your goals. Our team will help you pick the best plan and
          customize it to fit your business needs and budget — with no pressure.
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/ARA-Marketing/contact-us"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold
              text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
              boxShadow: '0 8px 30px rgba(37,99,235,0.3)' }}
          >
            Request a Free Quote
            <ArrowRight size={15} />
          </a>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold
              text-blue-600 border border-blue-200 hover:border-blue-400 hover:bg-blue-50
              transition-all duration-200 hover:-translate-y-0.5"
          >
            Call Us Now
          </a>
        </div>

      </div>
    </section>
  )
}
