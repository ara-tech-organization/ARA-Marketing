import { Clock, ArrowRight, Newspaper } from 'lucide-react'

const blogs = [
  {
    tag: 'SEO',
    title: 'Top SEO Strategies That Drive Organic Traffic in 2025',
    desc: 'Discover the most effective on-page and off-page SEO techniques that help local businesses rank higher on Google and attract qualified organic traffic consistently.',
    date: 'May 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=300&fit=crop&q=80',
  },
  {
    tag: 'Social Media',
    title: 'How Social Media Marketing Builds Brand Trust for SMEs',
    desc: 'Learn how consistent social media campaigns create lasting customer relationships and drive meaningful engagement for small businesses in competitive markets.',
    date: 'April 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=300&fit=crop&q=80',
  },
  {
    tag: 'Branding',
    title: 'Why Digital Branding Is Essential for Business Growth in 2025',
    desc: 'A strong digital identity sets your business apart from competitors and builds long-term credibility with your target audience online.',
    date: 'March 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=300&fit=crop&q=80',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="flex flex-wrap justify-between items-end gap-5 mb-14 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
              <Newspaper size={11} /> Recent Blogs
            </span>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-slate-900 leading-tight tracking-tight">
              Recent Blogs
            </h2>
            <p className="text-[16px] text-slate-500 leading-tight mt-1">
              Latest Digital Marketing Trends &amp; Growth Strategies
            </p>
          </div>
          <a
            href="#all-blogs"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200
              text-slate-600 rounded-full text-sm font-semibold transition-all duration-300
              hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 hover:-translate-y-0.5 whitespace-nowrap"
          >
            View All <ArrowRight size={14} />
          </a>
        </div>

        {/* 3-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
            <a
              key={b.title}
              href="#blog-post"
              className={`reveal delay-${i + 1} block bg-white border border-slate-200
                rounded-2xl overflow-hidden group transition-all duration-300
                hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/80 hover:border-blue-200`}
            >
              {/* Thumbnail */}
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={b.image}
                  alt={`${b.title} — Best Digital Marketing Services in Thanjavur | ARA Marketing`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/15 group-hover:bg-slate-900/5 transition-colors duration-300" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600
                  text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                  {b.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[15px] font-bold text-slate-900 leading-snug mb-3
                  transition-colors duration-300 group-hover:text-blue-600 line-clamp-2">
                  {b.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-4 line-clamp-3">
                  {b.desc}
                </p>
                <div className="flex items-center gap-2 text-[12px] text-slate-400 font-medium">
                  <Clock size={12} />
                  {b.date}
                  <span className="w-1 h-1 rounded-full bg-slate-300 inline-block" />
                  {b.readTime}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
