import { Metadata } from 'next';
import Link from 'next/link';
import MediaDownloader from '@/components/MediaDownloader';

export const metadata: Metadata = {
  title: 'Facebook Reel Downloader - Download FB Reels HD',
  description: 'Download Facebook Reels in high definition MP4 format. Free online tool to save public FB reels with original sound.',
  alternates: { canonical: 'https://reeldropnow.com/facebook-reel-downloader' }
};

const faqs = [
  {
    q: 'How do I copy a Facebook Reel link to download?',
    a: 'In the Facebook app, tap the Share icon on any public Reel and select "Copy link". In a desktop browser, copy the URL directly from the address bar or tap the three dots to copy the video link.'
  },
  {
    q: 'Can I download private Facebook Reels or videos from private groups?',
    a: 'No. Our utility operates exclusively on public Facebook content. Private Reels, friends-only posts, and restricted group videos are not supported.'
  },
  {
    q: 'Are downloaded Facebook Reels saved in MP4 format?',
    a: 'Yes. All downloaded FB Reels are saved as standard, universally playable MP4 video files with synchronized stereo audio.'
  },
  {
    q: 'Do I need a Facebook account to use this downloader?',
    a: 'No. You do not need to log into Facebook or connect any social profile. Simply paste the public link into our tool.'
  }
];

export default function FacebookReelDownloaderPage() {
  const jsonLdApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'reeldropnow Facebook Reel Downloader',
    url: 'https://reeldropnow.com/facebook-reel-downloader',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'iOS, Android, Windows, macOS, Linux',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Free online tool to download public Facebook Reels in high definition MP4.'
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
        name: 'Facebook Reel Downloader',
        item: 'https://reeldropnow.com/facebook-reel-downloader'
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
        <span className="text-gray-700 font-medium">Facebook Reel Downloader</span>
      </nav>

      <header className="text-center max-w-2xl mx-auto mb-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-3">
          Free Facebook Reel Downloader
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Download public Facebook Reels and FB video clips in high-definition MP4. Safe, fast, and no software installation required.
        </p>
      </header>

      {/* Downloader is immediately visible above the fold */}
      <MediaDownloader
        serviceType="facebook"
        defaultPlaceholder="Paste Facebook Reel link here (https://www.facebook.com/reel/...)"
        buttonText="Download Facebook Reel"
        badgeText="FB Reel Downloader • Clean MP4"
      />

      <article className="mt-12 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Complete Guide to Saving Facebook Reels Online
          </h2>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            How to Download Facebook Reels in 3 Simple Steps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm mb-3">1</span>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Copy FB Link</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Open Facebook, locate the public Reel you want to save, tap Share, and select &quot;Copy Link&quot;.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm mb-3">2</span>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Paste into Tool</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Paste the Facebook link into the input box above. Our edge servers parse the public video stream.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm mb-3">3</span>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Save MP4 File</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Click &quot;Download Facebook Reel&quot; to save the full-resolution video to your phone or PC.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Key Differences Between Facebook Reels and Instagram Reels
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            While both platforms belong to Meta, their content delivery pipelines differ:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs text-gray-700">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200/70">
              <h4 className="font-bold text-gray-900 mb-1">Facebook Reels Architecture</h4>
              <p>Facebook uses adaptive HLS/DASH streaming with varying bitrates. Our downloader recombines the highest available video stream with original stereo audio into a clean MP4 file.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200/70">
              <h4 className="font-bold text-gray-900 mb-1">Instagram Reels Architecture</h4>
              <p>Instagram serves fixed-resolution vertical MP4 streams up to 1080p. If you want to save Instagram content, use our dedicated <Link href="/instagram-reel-downloader" className="text-indigo-600 font-semibold underline">Instagram Reel Downloader</Link>.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Supported Devices and Operating Systems
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Our Facebook Reel Downloader works in all standard web browsers across mobile and desktop:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-gray-600 mb-8">
            <li><strong>iPhone and iPad:</strong> Save directly to the iOS Files or Photos app via Safari.</li>
            <li><strong>Android Phones:</strong> Works in Google Chrome and Samsung Internet, saving MP4s to your Gallery.</li>
            <li><strong>Windows and Mac:</strong> Download files at full connection speed with no browser extensions required.</li>
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
            Explore Other Free Media Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link href="/instagram-reel-downloader" className="p-3 bg-white rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors">
              <span className="font-bold text-indigo-600 block mb-1">Instagram Reels</span>
              <span className="text-gray-800">Download Instagram Reels in full HD.</span>
            </Link>
            <Link href="/instagram-story-downloader" className="p-3 bg-white rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors">
              <span className="font-bold text-indigo-600 block mb-1">Instagram Stories</span>
              <span className="text-gray-800">Save active public stories and highlights.</span>
            </Link>
            <Link href="/instagram-video-downloader" className="p-3 bg-white rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors">
              <span className="font-bold text-indigo-600 block mb-1">Instagram Videos</span>
              <span className="text-gray-800">Save grid videos and timeline clips.</span>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
