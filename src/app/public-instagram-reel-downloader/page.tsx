import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Public Instagram Reel Downloader Online | reeldropnow',
  description: 'Securely download public Instagram Reels in original MP4 resolution without login, registration, or bypassing user privacy settings.',
  alternates: { canonical: 'https://reeldropnow.com/public-instagram-reel-downloader' }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <nav className="text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-indigo-600">Home</Link> &gt; <span className="text-gray-700">Public Instagram Reel Downloader</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
        Public Instagram Reel Downloader
      </h1>
      <p className="text-base text-gray-600 mb-8 leading-relaxed">
        reeldropnow is explicitly built as a <strong>Public</strong> Instagram Reel Downloader. 
        We deeply respect user privacy, digital safety, and access permissions. 
        Our tool processes publicly broadcast media URLs without requiring you to share sensitive personal logins or passwords.
      </p>

      <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Support &amp; How It Works</h2>
          <p className="mb-4">
            We only parse URLs that can be viewed freely on the public internet without an active user session. 
            Here is what makes our public extraction process so safe:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose mb-6">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-gray-900 text-base mb-1">🛡️ No Login Required</h3>
              <p className="text-xs text-gray-600">You never need to log into Instagram or share two-factor codes with us.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-gray-900 text-base mb-1">🚫 No Private Access</h3>
              <p className="text-xs text-gray-600">We do not bypass privacy controls or scrape locked accounts.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-gray-900 text-base mb-1">⚡ Direct MP4 Stream</h3>
              <p className="text-xs text-gray-600">Downloads the direct public stream in full 1080p resolution.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Public vs. Private Reels: What You Need to Know</h2>
          <p className="mb-3">
            Public Reels are shared by open accounts and can be viewed by anyone on Instagram or external web browsers. 
            Private Reels belong to accounts where the creator has restricted their posts to approved followers only.
          </p>
          <p>
            Any online tool promising to &quot;hack&quot; or download private Instagram reels is usually a scam trying to collect user credentials. 
            reeldropnow guarantees 100% transparent and legal operation by only serving content that is publicly distributed.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Save a Public Reel Right Now</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Find the public reel you wish to download in your Instagram app.</li>
            <li>Tap the Share button and select <strong>&quot;Copy Link&quot;</strong>.</li>
            <li>Paste the URL into our <Link href="/" className="text-indigo-600 font-semibold underline">Free Downloader</Link> and click <strong>&quot;Download Media&quot;</strong>.</li>
          </ol>
        </div>
      </div>

      <div className="mt-12 text-center bg-indigo-50/60 p-8 rounded-2xl border border-indigo-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Download a Public Reel</h2>
        <p className="text-sm text-gray-600 mb-6">Clean, fast, watermark-free MP4 downloads in seconds.</p>
        <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors">
          Open Downloader
        </Link>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-4 text-xs font-semibold text-indigo-600">
        <Link href="/guides/how-to-download-public-instagram-reels" className="hover:underline">Public Reels Safety Guide &rarr;</Link>
        <Link href="/services" className="hover:underline">Digital Services Suite &rarr;</Link>
        <Link href="/privacy" className="hover:underline">Privacy Policy &rarr;</Link>
        <Link href="/faq" className="hover:underline">Help &amp; FAQ Center &rarr;</Link>
      </div>
    </div>
  );
}