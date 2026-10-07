import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogArticles, getArticleBySlug, getRelatedArticles } from '@/data/blogArticles';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | reeldropnow',
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://reeldropnow.com/blog/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://reeldropnow.com/blog/${article.slug}`,
      siteName: 'reeldropnow',
      type: 'article',
      publishedTime: article.publishDate,
      modifiedTime: article.updatedDate,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: 'https://reeldropnow.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'reeldropnow',
      url: 'https://reeldropnow.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://reeldropnow.com/logo.svg',
      },
    },
    datePublished: article.publishDate,
    dateModified: article.updatedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://reeldropnow.com/blog/${article.slug}`,
    },
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://reeldropnow.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://reeldropnow.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://reeldropnow.com/blog/${article.slug}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2 text-gray-400">&gt;</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2 text-gray-400">&gt;</span>
        <span className="text-gray-700 font-medium truncate">{article.categoryLabel}</span>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
          <span className="font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
            {article.categoryLabel}
          </span>
          <span className="text-gray-400">&bull;</span>
          <span className="text-gray-500">{article.readingTime}</span>
          <span className="text-gray-400">&bull;</span>
          <span className="text-gray-500">Updated: {article.updatedDate}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-3 pt-3 border-t border-gray-100 text-xs text-gray-600">
          <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs">
            RD
          </div>
          <div>
            <p className="font-bold text-gray-900">{article.author}</p>
            <p className="text-gray-500">{article.authorRole}</p>
          </div>
        </div>
      </header>

      {/* Quick Answer Callout Box (AEO & Featured Snippet Optimized) */}
      <div className="bg-indigo-50/70 border-l-4 border-indigo-600 rounded-r-2xl p-6 mb-10 text-gray-800">
        <p className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <span>⚡</span> Quick Answer
        </p>
        <p className="text-sm sm:text-base font-medium leading-relaxed">
          {article.quickAnswer}
        </p>
      </div>

      {/* Table of Contents */}
      {article.toc.length > 0 && (
        <nav
          className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-100"
          aria-label="Table of Contents"
        >
          <p className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span>📑</span> Table of Contents
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-indigo-700 font-medium">
            {article.toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Main Content Body */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
          Complete Guide &amp; Key Findings
        </h2>
        <div
          className="prose prose-indigo max-w-none text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </section>

      {/* Frequently Asked Questions */}
      {article.faqs.length > 0 && (
        <section className="mt-14 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {article.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <h4 className="font-bold text-gray-900 text-base mb-2">
                  {faq.question}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* In-Article Downloader Call to Action */}
      <div className="my-12 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-8 text-white text-center shadow-sm">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">
          Save High-Definition Instagram Media Free
        </h3>
        <p className="text-xs sm:text-sm text-indigo-100 max-w-lg mx-auto mb-6">
          Paste any public Instagram Reel or video URL into our downloader to save clean, high-speed MP4 files instantly.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-bold text-sm rounded-xl shadow-xs hover:bg-gray-50 transition-colors"
        >
          Open ReelDownloader Free &rarr;
        </Link>
      </div>

      {/* Editorial Standards & Trust Box */}
      <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 text-xs text-gray-500 mb-12">
        <p className="font-bold text-gray-700 mb-1">Editorial &amp; Privacy Standards</p>
        <p>
          reeldropnow provides educational content and independent media tools. We do not endorse unauthorized account surveillance or password sharing. Our tools exclusively process open, publicly accessible internet media.
        </p>
      </div>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Related Guides &amp; Resources
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                className="p-4 bg-white rounded-xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-indigo-600 block mb-1">
                    {rel.categoryLabel}
                  </span>
                  <h4 className="font-bold text-gray-900 text-sm mb-2 hover:text-indigo-600 transition-colors">
                    <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                </div>
                <Link
                  href={`/blog/${rel.slug}`}
                  className="text-xs font-semibold text-indigo-600 hover:underline mt-3"
                >
                  Read Guide &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
