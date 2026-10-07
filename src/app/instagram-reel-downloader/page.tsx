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
        reeldropnow is an easy online tool to save Instagram Reels. We built this website to be fast, simple, and safe for everyone. 
        You can save food recipes, gym tips, funny clips, or study guides. Each clip downloads in clean MP4 video format in only a few seconds.
      </p>

      <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features and How Our Reel Downloader Works</h2>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Top Advantages of Our Tool</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-6">
            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h4 className="font-bold text-gray-900 text-base mb-1">⚡ Fast Global Speeds</h4>
              <p className="text-xs text-gray-600">Our edge system reads public links fast so your download starts right away.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h4 className="font-bold text-gray-900 text-base mb-1">🔒 Safe and Private</h4>
              <p className="text-xs text-gray-600">You never need to log in or share private account details. Your downloads stay safe.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h4 className="font-bold text-gray-900 text-base mb-1">📱 Works on Any Device</h4>
              <p className="text-xs text-gray-600">Runs smoothly in any web browser on iPhone, Android, Windows, Mac, and Linux without apps.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h4 className="font-bold text-gray-900 text-base mb-1">🔊 Clean Audio Included</h4>
              <p className="text-xs text-gray-600">Keeps original sound, music tracks, and clear speech so your video sounds loud and clear.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">How Our Tool Saves Videos</h3>
          <p className="mb-3">
            When you paste a link, our server finds the direct video file from Instagram. 
            It sends the clean video straight to your device in high definition. We never add watermarks, logos, or extra blur to your clips.
          </p>
          <p>
            You can play your saved MP4 files in any media player or your phone photos album.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Respecting Creator Copyrights</h3>
          <p>
            Our tool only works with public videos. It cannot download media from private accounts. 
            Please respect creator rights. Only save media for personal offline use. Always ask creators for permission before you share their clips with friends.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center bg-indigo-50/60 p-8 rounded-2xl border border-indigo-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Try the Downloader Now</h3>
        <p className="text-sm text-gray-600 mb-6">Enjoy free, fast, and simple Instagram Reel downloads right now on your phone or PC.</p>
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