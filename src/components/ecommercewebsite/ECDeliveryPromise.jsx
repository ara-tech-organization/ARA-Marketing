import { Award, ShieldCheck, Zap, Clock, Headphones, Layers, ArrowRight, CheckCircle2 } from 'lucide-react'
import ecDeliveryImg from '../../assets/E-commerce/e1.webp'

const promises = [
  { icon: Layers,      title: 'Fully Customised\nE-Commerce Solutions',  desc: 'Every store is built from scratch, tailored to your brand identity and business goals.',          color: '#2563eb', bg: '#dbeafe' },
  { icon: ShieldCheck, title: 'Secure & Scalable\nArchitecture',         desc: 'Enterprise-grade security, SSL, and scalable infrastructure to grow with your business.',           color: '#7c3aed', bg: '#ede9fe' },
  { icon: Zap,         title: 'SEO-Friendly\nDevelopment Structure',     desc: 'Clean URLs, schema markup, fast loading and mobile responsiveness — built to rank.',               color: '#0891b2', bg: '#cffafe' },
  { icon: Clock,       title: 'On-Time\nProject Delivery',               desc: 'Structured timeline ensuring your store launches on schedule without compromising quality.',       color: '#059669', bg: '#d1fae5' },
  { icon: Headphones,  title: 'Continuous Support\n& Maintenance',       desc: 'Post-launch support, security updates, and performance monitoring — always here for you.',        color: '#d97706', bg: '#fef3c7' },
]

export default function ECDeliveryPromise() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-white">

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1.5px,transparent 1.5px)', backgroundSize: '30px 30px' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header: left heading + right text ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
              style={{ background: 'rgba(37,99,235,0.07)', color: '#1d4ed8', border: '1px solid rgba(37,99,235,0.18)' }}>
              <Award size={11} /> Our Delivery Promise
            </span>
            <h2 className="text-[clamp(23px,2.7vw,43px)] font-bold text-slate-900 leading-[1.1] tracking-tight">
              Committed to{' '}
              <span style={{ background: 'linear-gradient(135deg,#1d4ed8,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Delivering Excellence
              </span>
            </h2>
          </div>
          <p className="text-[14px] text-slate-500 leading-[1.8] max-w-sm lg:text-right">
            We are committed to delivering excellence in every project — from design to launch and beyond.
          </p>
        </div>

        {/* ── 5 vertical icon + line layout ── */}
        <div className="reveal flex flex-col lg:flex-row gap-6 mb-16">

          {/* Left: Large feature image */}
          <div className="w-full lg:w-[380px] flex-shrink-0">
            <div className="relative rounded-3xl overflow-hidden h-full"
              style={{ minHeight: 340, boxShadow: '0 20px 56px rgba(37,99,235,0.14)', border: '1px solid rgba(37,99,235,0.1)' }}>
              <img
                src={ecDeliveryImg}
                alt="E-Commerce Delivery Promise Thanjavur"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(160deg,rgba(29,78,216,0.6) 0%,rgba(10,26,52,0.7) 100%)' }} />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <p className="text-[11px] font-bold uppercase tracking-widest text-blue-300 mb-3">Our promise to you</p>
                <p className="text-[18px] font-bold text-white leading-snug mb-5">
                  Every project we deliver is built with precision, performance, and your growth in mind.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Secure', 'Fast', 'SEO-Ready', 'Scalable'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-[11px] font-bold text-white"
                      style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: zigzag promise rows */}
          <div className="flex-1 flex flex-col justify-between gap-4">
            {promises.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <div key={i}
                className={`group flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 ${i % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}
                style={{ background: '#fff', border: `1.5px solid ${color}18` }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = color + '40'; e.currentTarget.style.boxShadow = `0 8px 30px ${color}14` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = color + '18'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: color + '20', border: `1.5px solid ${color}30` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[12px] font-bold text-slate-900 leading-snug mb-1">
                    {title.replace('\n', ' ')}
                  </h3>
                  <p className="text-[12px] text-slate-600 leading-[1.7]">{desc}</p>
                </div>
                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom SEO + CTA ── */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-6 p-7 rounded-3xl"
          style={{ background: 'linear-gradient(135deg,rgba(37,99,235,0.05),rgba(124,58,237,0.05))', border: '1px solid rgba(37,99,235,0.1)' }}>
          <p className="text-[13.5px] text-slate-500 leading-[1.8] max-w-2xl">
            We are the best e-commerce web design and development company in Thanjavur, offering business-focused solutions with high performance. We provide custom e-commerce website development services in Thanjavur and advanced e-commerce web application development in Thanjavur.
          </p>
          <a href="/ARA-Marketing/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 flex-shrink-0"
            style={{ background: 'linear-gradient(135deg,#1d4ed8,#7c3aed)', boxShadow: '0 8px 28px rgba(37,99,235,0.28)' }}>
            Get Started <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}
