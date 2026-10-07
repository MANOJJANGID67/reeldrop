import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Instagram Video Downloader Online | reeldropnow',
  description: 'Download public Instagram videos and posts using our fast, secure, online extraction tool. Save high quality MP4 videos with stereo sound.',
  alternates: { canonical: 'https://reeldropnow.com/instagram-video-downloader' }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <nav className="text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-indigo-600">Home</Link> &gt; <span className="text-gray-700">Instagram Video Downloader</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
        Instagram Video Downloader Online
      </h1>
      <p className="text-base text-gray-600 mb-8 leading-relaxed">
        Looking to download standard Instagram feed posts, long-form videos, or multi-clip carousels? 
        reeldropnow provides a clean, fast, and completely free web utility to save public Instagram videos directly in high-definition MP4 format.
      </p>

      <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Supported Video Content on Instagram</h2>
          <p className="mb-4">
            Instagram offers multiple video formats across its platform. Our tool handles them smoothly:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose mb-6">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-gray-900 text-base mb-1">📹 Standard Feed Videos</h3>
              <p className="text-xs text-gray-600">Square (1:1) and horizontal (16:9) video posts shared on profile grids.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-gray-900 text-base mb-1">🎬 Instagram Reels</h3>
              <p className="text-xs text-gray-600">Full-length 9:16 vertical short videos in crisp 1080p resolution.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-gray-900 text-base mb-1">🎞️ Multi-Clip Posts</h3>
              <p className="text-xs text-gray-600">Public carousel sliders containing standalone video segments.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Download Instagram Videos</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li><strong>Copy Video Link:</strong> Find any public Instagram video post, click the three dots (&hellip;) or Share icon, and select &quot;Copy Link&quot;.</li>
            <li><strong>Paste on reeldropnow:</strong> Go to our <Link href="/" className="text-indigo-600 font-semibold underline">Main Downloader</Link> and paste the URL into the input field.</li>
            <li><strong>Save MP4 File:</strong> Hit &quot;Download Media&quot; and your clean video file begins downloading directly to your device storage.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why reeldropnow Is Better than Traditional Apps</h2>
          <p>
            Most video downloader apps demand intrusive permissions, collect tracking telemetry, or bombard you with pop-up advertisements. 
            reeldropnow works 100% within your web browser. No apps, no APK downloads, and no personal registrations required.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Respecting Content Creators</h2>
          <p>
            All media downloaded through reeldropnow should be used responsibly for offline personal enjoyment, study, or fair use. 
            Always ask for permission before reusing or reposting someone else&apos;s creative content.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center bg-indigo-50/60 p-8 rounded-2xl border border-indigo-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to Save Your Instagram Video?</h2>
        <p className="text-sm text-gray-600 mb-6">Fast, unlimited, and free high-definition video downloading in one click.</p>
        <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors">
          Download Instagram Video Now
        </Link>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-4 text-xs font-semibold text-indigo-600">
        <Link href="/services" className="hover:underline">Explore Services &rarr;</Link>
        <Link href="/guides/instagram-video-download-guide" className="hover:underline">Video Technical Guide &rarr;</Link>
        <Link href="/pricing" className="hover:underline">Free Pricing Model &rarr;</Link>
        <Link href="/faq" className="hover:underline">Help &amp; FAQ Center &rarr;</Link>
      </div>
    </div>
  );
}