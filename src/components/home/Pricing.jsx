import { TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionDecor from '../common/SectionDecor'

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-16 bg-slate-50">
      <SectionDecor variant="a" />
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            <TrendingUp size={11} /> Transparent Pricing
          </span>
          <h2 className="text-[clamp(23px,3.1vw,35px)] font-bold text-slate-900 leading-tight tracking-tight">
            Simple, Transparent Pricing
          </h2>
        </div>

        {/* Content + CTA */}
        <div className="reveal max-w-3xl mx-auto text-center">
          <p className="text-base text-slate-600 leading-relaxed">
            Our pricing is customized to meet the unique needs of your business across Digital
            Marketing, Web Design &amp; Development, and Branding. Costs vary based on project
            scope, required features, and service requirements. We offer flexible packages
            designed for startups, small businesses, and enterprises alike. Every solution is
            tailored to deliver maximum value, quality, and measurable results while fitting your
            budget.
          </p>

          <Link
            to="/price-details"
            className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-3.5 rounded-xl
              text-[14px] font-bold text-white bg-blue-600 transition-all duration-200 group
              no-underline hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200"
          >
            Our Price List
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  )
}
