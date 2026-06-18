import {
  ClipboardList, Search, Layout, PenTool, MessageSquare,
  Package, Printer, Layers
} from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Business Requirement Analysis',
    desc: 'We start by understanding your business, target audience, and design goals through a detailed discovery session.',
  },
  {
    icon: Search,
    title: 'Brand Research & Concept Development',
    desc: 'We research your industry, competitors and market positioning to develop strong creative concepts that differentiate your brand.',
  },
  {
    icon: Layout,
    title: 'Creative Design Planning',
    desc: 'Our designers map out the visual language, colour palette, typography and layout structure before any design work begins.',
  },
  {
    icon: PenTool,
    title: 'Initial Design Draft Creation',
    desc: 'We craft the first set of design drafts based on the approved concept, bringing your brand identity to life visually.',
  },
  {
    icon: MessageSquare,
    title: 'Client Feedback & Revisions',
    desc: 'You review the designs and share feedback. We refine and revise until the design perfectly aligns with your vision.',
  },
  {
    icon: Package,
    title: 'Final Design Delivery',
    desc: 'Approved designs are packaged in all required formats including PDF, PNG, SVG, and AI files ready for immediate use.',
  },
  {
    icon: Printer,
    title: 'Print & Digital Optimisation',
    desc: 'Every file is optimised for its intended use — high-resolution for print and web-ready formats for digital platforms.',
  },
]

export default function GDProcess() {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      {/* Light grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.05) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> Our Process
          </span>
          <h2 className="text-[clamp(21px,2.5vw,37px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            How We Deliver Premium{' '}
            <span className="text-gradient-blue">Branding Solutions</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Our systematic process ensures that every project delivered by our creative design team in thanjavur follows standards of quality, creativity and branding.
          </p>
        </div>

        {/* Steps vertical timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-[28px] top-8 bottom-8 w-px hidden sm:block"
            style={{ background: 'linear-gradient(180deg, #dbeafe 0%, #2563eb 50%, #dbeafe 100%)' }}
          />

          <div className="flex flex-col gap-0">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`reveal delay-${(i % 4) + 1} flex gap-6 sm:gap-8 pb-10 last:pb-0`}
              >
                {/* Step indicator */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center z-10
                      border-2 border-blue-200 bg-white shadow-md shadow-blue-100/50
                      group-hover:border-blue-500 transition-all duration-300"
                  >
                    <Icon size={22} className="text-blue-600" />
                    <div
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-600 text-white
                        flex items-center justify-center text-[9px] font-black"
                    >
                      {i + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex-1 bg-white rounded-2xl p-6 border border-blue-50
                    hover:shadow-lg hover:shadow-blue-100/40 hover:-translate-y-0.5 transition-all duration-300"
                  style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.06)' }}
                >
                  <h3 className="text-[14px] font-bold text-slate-800 mb-2">{title}</h3>
                  <p className="text-[13px] text-slate-500 leading-[1.75]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
