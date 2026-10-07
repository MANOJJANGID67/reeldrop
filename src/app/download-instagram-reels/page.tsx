import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Download Instagram Reels Online | reeldropnow',
  description: 'Download Instagram Reels online in full HD MP4 format. Free, safe, and built for iPhone, Android, and PC with zero watermark.',
  alternates: { canonical: 'https://reeldropnow.com/download-instagram-reels' }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <nav className="text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-indigo-600">Home</Link> &gt; <span className="text-gray-700">Download Instagram Reels</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
        Download Instagram Reels Online in High Definition
      </h1>
      <p className="text-base text-gray-600 mb-8 leading-relaxed">
        Looking to download public Instagram Reels for offline study, content archiving, or video editing? 
        reeldropnow gives you an easy, reliable, and completely free way to save Reels directly to your mobile phone or computer.
      </p>

      <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose reeldropnow for Reel Downloads?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-lg mb-3">🎬</div>
              <h4 className="font-bold text-gray-900 text-base mb-1">True 1080p Resolution</h4>
              <p className="text-xs text-gray-600">Extracts the direct MP4 stream as uploaded by the creator with sharp visuals and vibrant colors.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-lg mb-3">🎵</div>
              <h4 className="font-bold text-gray-900 text-base mb-1">Original Audio Intact</h4>
              <p className="text-xs text-gray-600">Keeps original dialogue, background tracks, and licensed music perfectly synchronized.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold text-lg mb-3">🚫</div>
              <h4 className="font-bold text-gray-900 text-base mb-1">Zero Watermarks</h4>
              <p className="text-xs text-gray-600">Downloads clean video files without added company logos, banners, or visual stamps.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">How to Download Any Public Reel in 3 Steps</h3>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li><strong>Copy Link:</strong> Open the Instagram app, tap the Share icon on any public Reel, and select &quot;Copy Link&quot;.</li>
            <li><strong>Paste URL:</strong> Head over to our <Link href="/" className="text-indigo-600 font-semibold underline">Homepage Downloader</Link> and paste your copied URL into the search box.</li>
            <li><strong>Save Video:</strong> Click &quot;Download Media&quot; and your high-quality MP4 file starts saving directly to your device storage.</li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Works on All Devices &amp; Browsers</h3>
          <p>
            You never need to install software, browser extensions, or unofficial APKs. Our utility works seamlessly inside Safari on iPhone and iPad, Google Chrome on Android, and all major desktop browsers including Windows Edge, macOS Safari, and Mozilla Firefox.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ethical Use &amp; Privacy First</h3>
          <p>
            We take user privacy and creator rights seriously. Our system only extracts content that is openly public. We never ask for your login password, and we never store personal user data or copies of downloaded videos on our servers.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center bg-indigo-50/60 p-8 rounded-2xl border border-indigo-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Download Your Reel?</h3>
        <p className="text-sm text-gray-600 mb-6">Paste your link and download your video in seconds. 100% free with unlimited downloads.</p>
        <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors">
          Open Reel Downloader Now
        </Link>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-4 text-xs font-semibold text-indigo-600">
        <Link href="/services" className="hover:underline">Explore All Services &rarr;</Link>
        <Link href="/guides/how-to-save-instagram-reels" className="hover:underline">Save Reels with Audio &rarr;</Link>
        <Link href="/guides/instagram-reel-downloader-iphone" className="hover:underline">iPhone Guide &rarr;</Link>
        <Link href="/faq" className="hover:underline">Help &amp; FAQ Center &rarr;</Link>
      </div>
    </div>
  );
}