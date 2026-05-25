import useCounter from '../../hooks/useCounter'

function StatItem({ target, suffix, label }) {
  const [count, ref] = useCounter(target)
  return (
    <div ref={ref} className="reveal flex flex-col items-center flex-1 justify-center text-center px-5 py-2">
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
      <div className="max-w-[1200px] mx-auto px-7">
        <h2 className="text-center text-[clamp(20px,2.8vw,32px)] font-bold text-slate-900 leading-tight tracking-tight mb-10">
          Delivering Measurable Growth Through Strategic Marketing
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-0 divide-x divide-slate-200 mb-8">
          <StatItem target={150} suffix="+" label="Successful Projects Completed" />
          <StatItem target={95}  suffix="%" label="Client Satisfaction Rate" />
          <StatItem target={120} suffix="+" label="SEO Campaigns Managed" />
          <StatItem target={200} suffix="%" label="Avg. Visibility Increase" />
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

