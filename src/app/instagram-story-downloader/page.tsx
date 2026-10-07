import { Metadata } from 'next';
import Link from 'next/link';
import MediaDownloader from '@/components/MediaDownloader';

export const metadata: Metadata = {
  title: 'Instagram Story Downloader - Save Stories Online',
  description: 'Download Instagram Stories and Highlights in high-quality MP4. Fast, free online tool for public Instagram stories.',
  alternates: { canonical: 'https://reeldropnow.com/instagram-story-downloader' }
};

const faqs = [
  {
    q: 'How do I download an Instagram Story using this tool?',
    a: 'Copy the Story link by tapping the three dots or share icon on any active public Story, paste the URL above, and tap download to save the MP4 video or JPG photo file.'
  },
  {
    q: 'Can I download private Instagram Stories?',
    a: 'No. Instagram encrypts and restricts private stories to approved followers. Third-party web downloaders cannot bypass private account permissions without login credentials, which we will never request.'
  },
  {
    q: 'Can I download Instagram Highlights after 24 hours?',
    a: 'Yes. As long as the creator has pinned the story into a public Highlight on their profile, you can copy the Highlight link and save the media at any time.'
  },
  {
    q: 'Does the account owner know I downloaded their Story?',
    a: 'When using an external web downloader with a public link, the author does not receive an alert, and your personal Instagram username is never transmitted.'
  }
];

export default function InstagramStoryDownloaderPage() {
  const jsonLdApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'reeldropnow Instagram Story Downloader',
    url: 'https://reeldropnow.com/instagram-story-downloader',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'iOS, Android, Windows, macOS, Linux',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Free online tool to save public Instagram Stories and Highlights.'
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
        name: 'Instagram Story Downloader',
        item: 'https://reeldropnow.com/instagram-story-downloader'
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
        <span className="text-gray-700 font-medium">Instagram Story Downloader</span>
      </nav>

      <header className="text-center max-w-2xl mx-auto mb-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-3">
          Free Online Instagram Story Downloader
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Save active public Instagram Stories and profile Highlights in full resolution. No apps, no watermarks, and zero account logins.
        </p>
      </header>

      {/* Downloader is immediately visible above the fold */}
      <MediaDownloader
        serviceType="story"
        defaultPlaceholder="Paste public Instagram Story or Highlight link here..."
        buttonText="Download Instagram Story"
        badgeText="Story Downloader • Public Stories"
      />

      <article className="mt-12 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Everything You Need to Know About Story Downloads
          </h2>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Supported Content and Privacy Boundaries
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Instagram Stories are designed as temporary 24-hour visual updates. Our service enables creators, marketers, 
            and fans to archive public content safely and transparently:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-100">
              <h4 className="font-bold text-emerald-900 text-sm mb-2 flex items-center gap-1.5">
                <span>✅</span> Supported Content
              </h4>
              <ul className="text-xs text-emerald-800 space-y-1.5 list-disc pl-4">
                <li>Active 24-hour video stories from public accounts</li>
                <li>Public Instagram Highlights pinned on profiles</li>
                <li>Single-photo story slides in uncompressed JPEG format</li>
                <li>Full stereo audio and dialogue tracks</li>
              </ul>
            </div>
            <div className="p-5 bg-rose-50/60 rounded-2xl border border-rose-100">
              <h4 className="font-bold text-rose-900 text-sm mb-2 flex items-center gap-1.5">
                <span>🚫</span> Unsupported Content (Strict Privacy)
              </h4>
              <ul className="text-xs text-rose-800 space-y-1.5 list-disc pl-4">
                <li>Stories posted by private accounts</li>
                <li>Close Friends stories restricted to private lists</li>
                <li>Expired stories older than 24h that were not saved as Highlights</li>
                <li>Direct Messages (DMs) or disappearing photos</li>
              </ul>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            The Truth About Private Instagram Story Downloads
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Many deceptive websites advertise a &quot;Private Instagram Story Downloader&quot; claiming they can view or download content 
            from accounts you do not follow. These claims are technically false. 
            Meta protects private account content behind authenticated session tokens. Any tool claiming otherwise is typically a phishing attempt 
            or malware trap seeking your credentials. At reeldropnow, we prioritize security by operating exclusively on public content.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            How to Download Instagram Stories in 3 Steps
          </h3>
          <ol className="list-decimal pl-6 space-y-2 text-xs sm:text-sm text-gray-600 mb-8">
            <li><strong>Copy Story Link:</strong> Open the Story in Instagram, tap the three dots in the top-right corner, and tap &quot;Copy Link&quot;.</li>
            <li><strong>Paste into Tool:</strong> Paste the link into the URL input above.</li>
            <li><strong>Download Media:</strong> Click &quot;Download Instagram Story&quot; to save the original MP4 video or JPG photo to your device.</li>
          </ol>

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
            Related Story and Privacy Resources
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link href="/blog/how-to-download-instagram-stories-without-screenshots" className="p-3 bg-white rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors">
              <span className="font-bold text-indigo-600 block mb-1">Clean Stories</span>
              <span className="text-gray-800">Download Stories without taking screenshots.</span>
            </Link>
            <Link href="/blog/does-instagram-notify-when-you-screenshot-a-story" className="p-3 bg-white rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors">
              <span className="font-bold text-indigo-600 block mb-1">Screenshot Rules</span>
              <span className="text-gray-800">Does Instagram alert users when you screenshot?</span>
            </Link>
            <Link href="/blog/private-instagram-story-viewers-myths-and-facts" className="p-3 bg-white rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors">
              <span className="font-bold text-indigo-600 block mb-1">Privacy Reality</span>
              <span className="text-gray-800">Myths and facts about private story viewers.</span>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
