import { Metadata } from 'next';
import Link from 'next/link';
import MediaDownloader from '@/components/MediaDownloader';

export const metadata: Metadata = {
  title: 'Instagram Reel Downloader - Fast HD Reels Download',
  description: 'Download Instagram Reels in high definition MP4. Free online tool to save IG reels on iPhone, Android, and PC.',
  alternates: { canonical: 'https://reeldropnow.com/instagram-reel-downloader' }
};

const faqs = [
  {
    q: 'How do I download an Instagram Reel to my phone?',
    a: 'Copy the Reel link from the Instagram app by tapping Share and Copy Link. Paste the link into the box above and click download. The MP4 video saves directly to your device.'
  },
  {
    q: 'Can I download private Instagram Reels?',
    a: 'No. reeldropnow respects user privacy and only processes public Reels. If an account is set to private, third-party downloaders cannot access the media.'
  },
  {
    q: 'Does this tool preserve original audio and music?',
    a: 'Yes. Our tool extracts the full MP4 video stream with its original stereo audio track intact, including licensed music tracks and creator voiceovers.'
  },
  {
    q: 'Is there a limit on how many Reels I can save?',
    a: 'No. You can download unlimited public Instagram Reels with no daily caps, no fees, and no sign-up requirements.'
  }
];

export default function InstagramReelDownloaderPage() {
  const jsonLdApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'reeldropnow Instagram Reel Downloader',
    url: 'https://reeldropnow.com/instagram-reel-downloader',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'iOS, Android, Windows, macOS, Linux',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Free online tool to download Instagram Reels in full HD MP4 format.'
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
        name: 'Instagram Reel Downloader',
        item: 'https://reeldropnow.com/instagram-reel-downloader'
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
        <span className="text-gray-700 font-medium">Instagram Reel Downloader</span>
      </nav>

      <header className="text-center max-w-2xl mx-auto mb-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-3">
          Free Online Instagram Reel Downloader
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Save public Instagram Reels and IG clips in high-definition MP4 with original audio. Fast, secure, and works on any browser.
        </p>
      </header>

      {/* Downloader is immediately visible above the fold */}
      <MediaDownloader
        serviceType="reel"
        defaultPlaceholder="Paste Instagram Reel link here (https://www.instagram.com/reel/...)"
        buttonText="Download Instagram Reel"
        badgeText="Reel Downloader • High Quality MP4"
      />

      <article className="mt-12 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Complete Guide to Instagram Reel Downloads
          </h2>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            How to Download Instagram Reels in 3 Simple Steps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm mb-3">1</span>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Copy Reel Link</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Open the Instagram app, tap the paper plane share icon on the Reel, and tap &quot;Copy Link&quot;.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm mb-3">2</span>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Paste into Tool</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Paste the link into the download box above. The tool automatically detects the video stream.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm mb-3">3</span>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Save Video File</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Click Download Reel to save the high-definition MP4 directly to your device gallery or files.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Supported Devices and Operating Systems
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Our online downloader is completely browser-based. It requires no app installation, APK files, or browser extensions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs text-gray-700">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200/70">
              <h4 className="font-bold text-gray-900 mb-1">📱 Mobile Devices (iOS &amp; Android)</h4>
              <p>Works smoothly on iPhone and iPad via Safari, and on Samsung, Pixel, and Xiaomi devices via Chrome or Samsung Internet.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200/70">
              <h4 className="font-bold text-gray-900 mb-1">💻 Desktop Computers (Mac, Windows, Linux)</h4>
              <p>Supports Google Chrome, Apple Safari, Microsoft Edge, Mozilla Firefox, and Brave on all major desktop systems.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Video Quality and MP4 Specifications
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            When creators upload Reels to Instagram, the platform transcodes them to standard H.264/AAC MP4 streams. 
            reeldropnow extracts the highest-quality version available directly from the source server. 
            We never downscale your video or re-compress audio.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-xs text-left border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-100 text-gray-800 font-bold">
                <tr>
                  <th className="p-3 border-b">Feature</th>
                  <th className="p-3 border-b">ReelDropNow Standard</th>
                  <th className="p-3 border-b">Typical Social App</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-3 font-semibold">Video Resolution</td>
                  <td className="p-3 text-emerald-700 font-semibold">Up to 1080p (Source Max)</td>
                  <td className="p-3 text-gray-500">Often downscaled to 720p</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Audio Fidelity</td>
                  <td className="p-3 text-emerald-700 font-semibold">Original Stereo Sound</td>
                  <td className="p-3 text-gray-500">Muted or low bitrate</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Watermarks</td>
                  <td className="p-3 text-emerald-700 font-semibold">Zero Watermarks Added</td>
                  <td className="p-3 text-gray-500">Banners or logos added</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Account Sign-In</td>
                  <td className="p-3 text-emerald-700 font-semibold">Never Required</td>
                  <td className="p-3 text-gray-500">Often prompts login</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Troubleshooting Common Download Issues
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-gray-600 mb-8">
            <li><strong>Reel from a Private Account:</strong> If the account has private privacy settings, third-party downloaders cannot access the link. Only public content is supported.</li>
            <li><strong>Reel Was Deleted or Expired:</strong> Verify the link still opens inside the Instagram app before pasting.</li>
            <li><strong>Incorrect Link Format:</strong> Ensure your link starts with <code>https://www.instagram.com/reel/</code> or <code>https://www.instagram.com/p/</code>.</li>
            <li><strong>Browser Storage Permission:</strong> If using iOS Safari, tap the download arrow in the address bar to view the saved file and save it to your Photos app.</li>
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
            Related Guides and Resources
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link href="/blog/download-instagram-reels-in-4k" className="p-3 bg-white rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors">
              <span className="font-bold text-indigo-600 block mb-1">4K Analysis</span>
              <span className="text-gray-800">Can you download Reels in 4K resolution?</span>
            </Link>
            <Link href="/blog/instagram-reels-to-mp3-download-audio" className="p-3 bg-white rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors">
              <span className="font-bold text-indigo-600 block mb-1">Audio Guide</span>
              <span className="text-gray-800">How to extract MP3 audio from any Reel.</span>
            </Link>
            <Link href="/guides/instagram-reel-downloader-iphone" className="p-3 bg-white rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors">
              <span className="font-bold text-indigo-600 block mb-1">iPhone Tutorial</span>
              <span className="text-gray-800">Save Reels directly to iOS Camera Roll.</span>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}