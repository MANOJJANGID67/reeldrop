import { Metadata } from 'next';
import Link from 'next/link';
import MediaDownloader from '@/components/MediaDownloader';

export const metadata: Metadata = {
  title: 'Instagram Video Downloader - Save IG Videos in HD',
  description: 'Download Instagram videos, reels, and clips in original 1080p MP4. Fast, secure online tool with no software installation.',
  alternates: { canonical: 'https://reeldropnow.com/instagram-video-downloader' }
};

const faqs = [
  {
    q: 'What types of Instagram videos can I download?',
    a: 'You can download all public Instagram video content, including vertical Reels, standard timeline feed videos, and carousel video clips.'
  },
  {
    q: 'How are Instagram Reels different from standard Instagram feed videos?',
    a: 'Reels are 9:16 vertical short-form videos designed for mobile discovery. Feed videos can be square (1:1), landscape (16:9), or portrait (4:5). Our tool automatically detects the aspect ratio and saves the exact source file.'
  },
  {
    q: 'Do I need to pay or install an app to download videos?',
    a: 'No. reeldropnow is completely free and works directly inside your mobile or desktop web browser without software downloads or subscriptions.'
  },
  {
    q: 'What video quality will my file be saved in?',
    a: 'Videos are saved in the maximum resolution provided by Instagram, typically up to 1080p Full HD at high bitrates with stereo audio.'
  }
];

export default function InstagramVideoDownloaderPage() {
  const jsonLdApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'reeldropnow Instagram Video Downloader',
    url: 'https://reeldropnow.com/instagram-video-downloader',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'iOS, Android, Windows, macOS, Linux',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Free online tool to download Instagram videos, reels, and clips.'
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  const jsonLdBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://reeldropnow.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Instagram Video Downloader',
        item: 'https://reeldropnow.com/instagram-video-downloader'
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 text-gray-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />

      <nav className="text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-700 font-medium">Instagram Video Downloader</span>
      </nav>

      <header className="text-center max-w-2xl mx-auto mb-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-3">
          Free Online Instagram Video Downloader
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Save public Instagram videos, timeline posts, and video clips in 1080p MP4. Fast cloud processing with zero compression loss.
        </p>
      </header>

      {/* Downloader is immediately visible above the fold */}
      <MediaDownloader
        serviceType="video"
        defaultPlaceholder="Paste Instagram Video or Post link here (https://www.instagram.com/p/...)"
        buttonText="Download Instagram Video"
        badgeText="Video Downloader • All Formats"
      />

      <article className="mt-12 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Understanding Instagram Video Formats and Download Options
          </h2>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Reels vs. Stories vs. Feed Videos: How They Differ
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Instagram organizes video content into distinct categories, each serving a different purpose and format:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <span className="text-2xl block mb-2">🎬</span>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Instagram Reels</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Vertical 9:16 videos up to 90 seconds. Ideal for quick mobile viewing. Check our dedicated <Link href="/instagram-reel-downloader" className="text-indigo-600 underline font-semibold">Reel Downloader</Link> for specialized short-form saving.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <span className="text-2xl block mb-2">⏱️</span>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Instagram Stories</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Ephemeral 24-hour visual moments. Can be archived through our dedicated <Link href="/instagram-story-downloader" className="text-indigo-600 underline font-semibold">Story Downloader</Link> while still active.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <span className="text-2xl block mb-2">📹</span>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Feed Posts &amp; Clips</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Permanent grid videos in square (1:1), portrait (4:5), or landscape (16:9) aspect ratios. Fully supported by this tool.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            How to Download Any Instagram Video
          </h3>
          <ol className="list-decimal pl-6 space-y-2 text-xs sm:text-sm text-gray-600 mb-8">
            <li><strong>Copy Video URL:</strong> Tap the share button on the Instagram post and select &quot;Copy Link&quot;.</li>
            <li><strong>Paste Link:</strong> Enter the copied URL into the search box above.</li>
            <li><strong>Save Video:</strong> Click &quot;Download Instagram Video&quot; to initiate the high-speed MP4 download.</li>
          </ol>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Device Compatibility and Browser Support
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            reeldropnow is engineered for universal compatibility across desktop and mobile platforms:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-gray-600 mb-8">
            <li><strong>Apple iOS:</strong> Works directly in Safari on iPhone and iPad. Downloaded MP4s can be saved to the Photos app with one tap.</li>
            <li><strong>Google Android:</strong> Fully compatible with Chrome, Firefox, and Samsung Internet. Saves to your internal Download folder.</li>
            <li><strong>Desktop:</strong> Supports Windows, macOS, and Linux across all modern browsers.</li>
          </ul>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3 mb-8">
            {faqs.map((f, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-bold text-gray-900 text-sm mb-1">{f.q}</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Related Video Resources
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link href="/instagram-reel-downloader" className="p-3 bg-white rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors">
              <span className="font-bold text-indigo-600 block mb-1">Reels Tool</span>
              <span className="text-gray-800">Specialized high-speed Instagram Reel downloader.</span>
            </Link>
            <Link href="/instagram-story-downloader" className="p-3 bg-white rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors">
              <span className="font-bold text-indigo-600 block mb-1">Stories Tool</span>
              <span className="text-gray-800">Save public Stories and Highlights safely.</span>
            </Link>
            <Link href="/guides/instagram-video-download-guide" className="p-3 bg-white rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors">
              <span className="font-bold text-indigo-600 block mb-1">Video Guide</span>
              <span className="text-gray-800">Complete manual on video formats and encoding.</span>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}