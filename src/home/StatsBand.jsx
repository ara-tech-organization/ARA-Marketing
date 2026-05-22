import useCounter from '../hooks/useCounter'

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
    <section className="relative py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-7">
        <div className="flex flex-wrap items-center justify-center gap-0 divide-x divide-slate-200">
          <StatItem target={150} suffix="+" label="Successful Projects" />
          <StatItem target={95}  suffix="%" label="Client Satisfaction" />
          <StatItem target={120} suffix="+" label="SEO Campaigns" />
          <StatItem target={200} suffix="%" label="Avg. Visibility Increase" />
          <StatItem target={100} suffix="+" label="Brands Promoted" />
        </div>
      </div>
    </section>
  )
}
