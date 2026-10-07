import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reel Downloader Online HD | reeldropnow',
  description: 'Download supported public Instagram Reels with our online Reel Downloader. Fast, reliable 1080p extraction with no software installation.',
  alternates: { canonical: 'https://reeldropnow.com/reel-downloader' }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <nav className="text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-indigo-600">Home</Link> &gt; <span className="text-gray-700">Reel Downloader</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
        Reel Downloader Online - Fast &amp; Free MP4 Tool
      </h1>
      <p className="text-base text-gray-600 mb-8 leading-relaxed">
        Welcome to reeldropnow, your fast, secure, and dedicated online Reel Downloader. 
        Designed from the ground up for modern smartphones and desktop computers, our platform lets you extract and save public Instagram Reels without quality loss or annoying pop-up redirects.
      </p>

      <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Benefits of Our Online Reel Downloader</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-6">
            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-gray-900 text-base mb-1">🚀 Fast Edge Downloads</h3>
              <p className="text-xs text-gray-600">Enjoy rapid download speeds through Cloudflare edge servers located in over 300 cities.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-gray-900 text-base mb-1">✨ Clean, Ad-Light Experience</h3>
              <p className="text-xs text-gray-600">No shady betting pop-ups, misleading download buttons, or deceptive malware redirects.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-gray-900 text-base mb-1">📱 Fully Mobile Friendly</h3>
              <p className="text-xs text-gray-600">Optimized layout that runs smoothly on iOS Safari, Android Chrome, and mobile browsers.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-gray-900 text-base mb-1">💯 Always 100% Free</h3>
              <p className="text-xs text-gray-600">No premium paywalls, no monthly subscription fees, and no artificial daily download caps.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Use the Reel Downloader</h2>
          <p className="mb-3">
            Getting your favorite videos offline takes only three quick steps:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Open Instagram and copy the share link of the public reel you want to save.</li>
            <li>Paste the URL directly into our <Link href="/" className="text-indigo-600 font-semibold underline">Main Downloader Field</Link>.</li>
            <li>Click &quot;Download Media&quot; and your MP4 file will save to your downloads folder immediately.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Commitment to Digital Privacy</h2>
          <p>
            We do not collect personal profiles, store cookies across third-party websites, or retain copies of downloaded files on our servers. 
            Once the video stream is delivered to your device, the connection is instantly closed.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center bg-indigo-50/60 p-8 rounded-2xl border border-indigo-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Start Downloading Reels</h2>
        <p className="text-sm text-gray-600 mb-6">Enjoy free, fast, and watermark-free video downloads right now.</p>
        <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors">
          Open Reel Downloader
        </Link>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-4 text-xs font-semibold text-indigo-600">
        <Link href="/services" className="hover:underline">Media Suite &rarr;</Link>
        <Link href="/pricing" className="hover:underline">Pricing Details &rarr;</Link>
        <Link href="/reviews" className="hover:underline">User Reviews &rarr;</Link>
        <Link href="/faq" className="hover:underline">FAQ Help Center &rarr;</Link>
      </div>
    </div>
  );
}