import { Metadata } from 'next';
import Link from 'next/link';
import { blogArticles, getAllCategories } from '@/data/blogArticles';

export const metadata: Metadata = {
  title: 'Blog & Instagram Creator Guides | reeldropnow',
  description: 'In-depth tutorials, troubleshooting guides, and tool comparisons for Instagram Reels, Stories, Audio, and creator workflows.',
  alternates: {
    canonical: 'https://reeldropnow.com/blog',
  },
};

export default function BlogIndexPage() {
  const categories = getAllCategories();
  const featuredArticle = blogArticles[0];
  const regularArticles = blogArticles.slice(1);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2 text-gray-400">&gt;</span>
        <span className="text-gray-700 font-medium">Blog</span>
      </nav>

      {/* Header */}
      <header className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold mb-4">
          <span>📚 Creator Education &amp; Media Insights</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
          ReelDropNow Blog &amp; Guides
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Authoritative, research-backed guides on Instagram Reels, Stories, audio extraction, platform algorithms, and safe digital tools.
        </p>
      </header>

      {/* Categories Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <span
            key={cat.id}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-gray-200 bg-white text-gray-700 shadow-xs"
          >
            {cat.label} ({cat.count})
          </span>
        ))}
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="mb-14">
          <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-lg relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <span className="inline-block px-3 py-1 bg-indigo-500/30 text-indigo-200 text-xs font-bold rounded-lg mb-4 uppercase tracking-wider">
                Featured Guide &bull; {featuredArticle.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight">
                <Link href={`/blog/${featuredArticle.slug}`} className="hover:text-indigo-200 transition-colors">
                  {featuredArticle.title}
                </Link>
              </h3>
              <p className="text-indigo-100/90 text-sm sm:text-base leading-relaxed mb-6">
                {featuredArticle.metaDescription}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-indigo-200">
                <span>By {featuredArticle.author}</span>
                <span>&bull;</span>
                <span>{featuredArticle.readingTime}</span>
                <span>&bull;</span>
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="bg-white text-indigo-900 font-bold px-4 py-2 rounded-xl hover:bg-indigo-50 transition-colors shadow-sm ml-auto"
                >
                  Read Full Guide &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Articles Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Latest Tutorials &amp; In-Depth Analyses
          </h2>
          <span className="text-xs text-gray-500">{blogArticles.length} Published Articles</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                    {article.categoryLabel}
                  </span>
                  <span>{article.readingTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2.5 leading-snug hover:text-indigo-600 transition-colors">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {article.metaDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-500">{article.publishDate}</span>
                <Link
                  href={`/blog/${article.slug}`}
                  className="font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Read Article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tool Call-to-Action Banner */}
      <aside className="mt-16 bg-gray-50 border border-gray-200/80 rounded-3xl p-8 sm:p-10 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Download Instagram Reels in Original Quality
        </h3>
        <p className="text-sm text-gray-600 max-w-xl mx-auto mb-6">
          Need to save a public Reel or video right now? Use our free, fast, unlimited media utility with zero watermarks.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-xs transition-colors"
        >
          Open ReelDownloader &rarr;
        </Link>
      </aside>
    </div>
  );
}
