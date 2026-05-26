import { Phone, ArrowRight, Globe2, Code2, Smartphone, Zap } from 'lucide-react'

export default function WebDevCTA() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-7">
        <div className="reveal grid lg:grid-cols-[60%_40%] rounded-3xl overflow-hidden"
          style={{ boxShadow: '0 32px 80px rgba(15,23,42,0.22)' }}>

          <div className="relative p-7 sm:p-10 lg:p-14"
            style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #1e40af 100%)' }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }} />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(255,255,255,0.10)' }}>
                <Globe2 size={22} className="text-white" />
              </div>
              <h2 className="text-[clamp(22px,3vw,36px)] font-bold text-white leading-tight tracking-tight mb-4">
                Ready to Build a Powerful Website for Your Business?
              </h2>
              <p className="text-[15px] text-blue-100 leading-[1.85] mb-8 max-w-lg">
                Partner with Ara Discover Marketing, a trusted best website design and development
                agency in Thanjavur delivering modern, responsive and high-performance websites for
                business growth.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+919876543210"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-blue-600
                    rounded-full text-sm font-bold shadow-lg hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300">
                  <Phone size={15} /> Call Us Now
                </a>
                <a href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/35
                    text-white rounded-full text-sm font-semibold hover:bg-white/10 hover:border-white/55 transition-all duration-300">
                  Get Free Quote <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)' }}>
            <div className="relative flex items-center justify-center">
              {[200, 155, 112, 72].map((size, i) => (
                <div key={size} className="absolute rounded-full"
                  style={{
                    width: size, height: size,
                    border: `1.5px solid rgba(37,99,235,${0.06 + i * 0.07})`,
                    background: i === 3 ? 'linear-gradient(135deg, #1e40af, #2563eb)' : 'transparent',
                  }} />
              ))}
              <div className="relative z-10 flex items-center justify-center" style={{ width: 72, height: 72 }}>
                <Globe2 size={30} className="text-white" />
              </div>
            </div>
            <div className="absolute top-8 left-8 bg-white rounded-xl px-3 py-2.5 shadow-md"
              style={{ border: '1px solid #dbeafe' }}>
              <div className="flex items-center gap-1.5">
                <Code2 size={12} className="text-blue-600" />
                <span className="text-[11px] font-bold text-slate-700">Clean Code</span>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 bg-white rounded-xl px-3 py-2.5 shadow-md"
              style={{ border: '1px solid #dbeafe' }}>
              <div className="flex items-center gap-1.5">
                <Smartphone size={12} className="text-purple-600" />
                <span className="text-[11px] font-bold text-slate-700">Responsive</span>
              </div>
            </div>
            <div className="absolute top-8 right-8 bg-white rounded-xl px-3 py-2.5 shadow-md"
              style={{ border: '1px solid #dbeafe' }}>
              <div className="flex items-center gap-1.5">
                <Zap size={12} className="text-emerald-600" />
                <span className="text-[11px] font-bold text-slate-700">Fast Load</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
