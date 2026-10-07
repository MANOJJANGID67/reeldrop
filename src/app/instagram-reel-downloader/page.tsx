import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Instagram Reel Downloader Online | reeldropnow',
  description: 'Download public Instagram Reels quickly and securely in 1080p MP4 format. Free online tool to save Instagram video content with original audio.',
  alternates: { canonical: 'https://reeldropnow.com/instagram-reel-downloader' }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <nav className="text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-indigo-600">Home</Link> &gt; <span className="text-gray-700">Instagram Reel Downloader</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
        Free Online Instagram Reel Downloader
      </h1>
      <p className="text-base text-gray-600 mb-8 leading-relaxed">
        reeldropnow is a dedicated online Instagram Reel Downloader made for everyone. We believe in simplicity, speed, and privacy. 
        Whether you are saving cooking recipes, fitness routines, funny clips, or educational tutorials, our tool lets you save high-quality MP4 videos in seconds.
      </p>

      <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Advantages of Our Reel Downloader</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-6">
            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-gray-900 text-base mb-1">⚡ Super Fast Edge Conversion</h3>
              <p className="text-xs text-gray-600">Built on Cloudflare edge infrastructure to parse public links in under a second worldwide.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-gray-900 text-base mb-1">🔒 100% Private &amp; Anonymous</h3>
              <p className="text-xs text-gray-600">No passwords or accounts required. You can download freely without sharing private details.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-gray-900 text-base mb-1">📱 Zero Software Installation</h3>
              <p className="text-xs text-gray-600">Works in any web browser on iPhone, Android, Windows, Mac, and Linux without downloading apps.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-gray-900 text-base mb-1">🔊 Stereo Audio Synchronized</h3>
              <p className="text-xs text-gray-600">Preserves original soundtracks, background music, and speech with high audio clarity.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How the Extraction Engine Works</h2>
          <p className="mb-3">
            When you enter an Instagram URL, our backend connects to Instagram&apos;s public content delivery servers. 
            It identifies the source video stream in the highest available bitrate and serves it directly to your browser as an MP4 file. 
            No third-party overlays, watermarks, or compression artifacts are added.
          </p>
          <p>
            You can verify video quality across your favourite media players, including QuickTime, VLC, Windows Media Player, and mobile galleries.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Responsible &amp; Legal Usage</h2>
          <p>
            Our tool only works with publicly available media. We do not support private profile scraping or bypassing Instagram security controls. 
            Remember to respect copyright laws and never claim or redistribute another creator&apos;s work without their clear permission.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center bg-indigo-50/60 p-8 rounded-2xl border border-indigo-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Try the Downloader Now</h2>
        <p className="text-sm text-gray-600 mb-6">Experience clean, unlimited Instagram Reels downloading with zero cost.</p>
        <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors">
          Start Downloading Media
        </Link>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-4 text-xs font-semibold text-indigo-600">
        <Link href="/services" className="hover:underline">Digital Services Suite &rarr;</Link>
        <Link href="/pricing" className="hover:underline">Free Forever Pricing &rarr;</Link>
        <Link href="/reviews" className="hover:underline">User Testimonials &rarr;</Link>
        <Link href="/faq" className="hover:underline">Help &amp; FAQ Center &rarr;</Link>
      </div>
    </div>
  );
}