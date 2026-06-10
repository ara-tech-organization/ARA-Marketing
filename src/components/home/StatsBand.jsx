import useCounter from '../../hooks/useCounter'

function StatItem({ target, suffix, label }) {
  const [count, ref] = useCounter(target)
  return (
    <div ref={ref} className="reveal flex flex-col items-center justify-center text-center px-5 py-5">
      <div className="text-[clamp(30px,3.5vw,46px)] font-semibold leading-none tracking-[-1px] mb-1"
        style={{ background: 'linear-gradient(135deg,#60a5fa,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        {count}{suffix}
      </div>
      <div className="text-[11px] font-semibold mt-1 uppercase tracking-widest" style={{ color: 'rgba(15,23,42,0.45)' }}>{label}</div>
    </div>
  )
}

export default function StatsBand() {
  return (
    <section className="relative py-16 overflow-hidden" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)', color: '#0f172a' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">
        <h2 className="text-center text-[clamp(20px,2.8vw,32px)] font-bold leading-tight tracking-tight mb-10" style={{ color: '#0f172a' }}>
          Delivering Measurable Growth Through Strategic Marketing
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 mb-8 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
          <StatItem target={150} suffix="+" label="Successful Projects Completed" />
          <StatItem target={95}  suffix="%" label="Client Satisfaction Rate" />
          <StatItem target={120} suffix="+" label="SEO Campaigns Managed" />
          <StatItem target={200} suffix="%" label="Average Increase in Online Visibility" />
          <StatItem target={100} suffix="+" label="Brands Successfully Promoted" />
        </div>
        <p className="text-center text-[13.5px] leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(15,23,42,0.50)' }}>
          Our AI-driven digital marketing strategies make us the best digital marketing agency in Thanjavur
          for businesses looking to scale faster and achieve sustainable growth.
        </p>
      </div>
    </section>
  )
}
