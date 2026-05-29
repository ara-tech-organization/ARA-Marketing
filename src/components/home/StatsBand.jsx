import useCounter from '../../hooks/useCounter'

function StatItem({ target, suffix, label }) {
  const [count, ref] = useCounter(target)
  return (
    <div ref={ref} className="reveal flex flex-col items-center justify-center text-center px-5 py-5">
      <div className="text-[clamp(30px,3.5vw,46px)] font-semibold leading-none tracking-[-1px] text-slate-900 mb-1">
        {count}<span className="text-blue-600">{suffix}</span>
      </div>
      <div className="text-[11px] text-slate-400 font-semibold mt-1 uppercase tracking-widest">{label}</div>
    </div>
  )
}

export default function StatsBand() {
  return (
    <section className="relative py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">
        <h2 className="text-center text-[clamp(20px,2.8vw,32px)] font-bold text-slate-900 leading-tight tracking-tight mb-10">
          Delivering Measurable Growth Through Strategic Marketing
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 mb-8 rounded-2xl border border-slate-100 overflow-hidden divide-x divide-y divide-slate-100">
          <StatItem target={150} suffix="+" label="Successful Projects Completed" />
          <StatItem target={95}  suffix="%" label="Client Satisfaction Rate" />
          <StatItem target={120} suffix="+" label="SEO Campaigns Managed" />
          <StatItem target={200} suffix="%" label="Average Increase in Online Visibility" />
          <StatItem target={100} suffix="+" label="Brands Successfully Promoted" />
        </div>
        <p className="text-center text-[13.5px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
          Our AI-driven digital marketing strategies make us the best digital marketing agency in Thanjavur
          for businesses looking to scale faster and achieve sustainable growth.
        </p>
      </div>
    </section>
  )
}

