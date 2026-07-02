import { Smartphone, Search, Zap, Code2, Layers } from 'lucide-react'

export default function WebDevIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">
        <div className="grid lg:grid-cols-[55%_45%] gap-8 lg:gap-14 items-center">

          <div className="text-center lg:text-left">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
                border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
                <Layers size={11} /> Our Approach
              </span>
              <h2 className="text-[clamp(23px,2.7vw,37px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
                Professional Website Solutions That Drive{' '}
                <span className="text-gradient-blue">Business Growth</span>
              </h2>
            </div>

            <div className="reveal delay-1 space-y-4 mb-7">
              <p className="text-[15px] text-slate-500 leading-[1.85]">
                A website is more than just an online presence, it's the cornerstone of your digital
                identity. ARA Discover Marketing has been providing the best website design and
                development services in Thanjavur since its inception with a focus on performance,
                usability and conversion optimisation.
              </p>
              <p className="text-[15px] text-slate-500 leading-[1.85]">
                We are the best website design and development agency in Thanjavur with services to
                startups, local businesses and enterprises to build scalable digital platforms. Our
                development methodology combines innovative thinking, programming skills, and marketing
                strategy for the creation of high performance websites.
              </p>
              <p className="text-[15px] text-slate-500 leading-[1.85]">
                Leading Thanjavur-based businesses looking for the best website design and development
                company in Thanjavur rely on us for reliable, responsive, and SEO-optimized website
                solutions.
              </p>
            </div>

            <div className="reveal delay-2 flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {[
                { icon: Smartphone, label: 'Mobile-First' },
                { icon: Search,     label: 'SEO-Optimized' },
                { icon: Zap,        label: 'Fast Performance' },
                { icon: Code2,      label: 'Custom Solutions' },
              ].map(({ icon: Icon, label }) => (
                <span key={label}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-50 border border-blue-100
                    rounded-full text-[12.5px] font-semibold text-blue-700">
                  <Icon size={12} /> {label}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal delay-2 relative">
            <div className="rounded-3xl overflow-hidden" style={{ height: 420 }}>
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=420&fit=crop&auto=format&q=80"
                alt="Best Website Design and Development Services in Thanjavur - Professional Web Development"
                loading="lazy" width="600" height="420"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-5 -left-5 bg-white rounded-2xl px-5 py-4"
              style={{ boxShadow: '0 12px 40px rgba(37,99,235,0.18)', border: '1px solid #dbeafe' }}>
              <span className="text-[28px] font-black text-blue-600 leading-none block">150+</span>
              <p className="text-[11px] text-slate-400 mt-0.5">Websites Built</p>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-4"
              style={{ boxShadow: '0 12px 40px rgba(37,99,235,0.18)', border: '1px solid #dbeafe' }}>
              <span className="text-[28px] font-black text-emerald-600 leading-none block">98%</span>
              <p className="text-[11px] text-slate-400 mt-0.5">Client Satisfaction</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
