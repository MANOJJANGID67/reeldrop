import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Save Instagram Reels on iPhone to Camera Roll (2026 Guide) | reeldropnow',
  description: 'Step-by-step tutorial on downloading Instagram Reels directly into your iPhone Photos Camera Roll using Safari and reeldropnow without installing third-party apps.',
  alternates: { canonical: 'https://reeldropnow.com/guides/instagram-reel-downloader-iphone' }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <nav className="text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-indigo-600">Home</Link> &gt; <span className="text-gray-700">Guides</span> &gt; Instagram Reels on iPhone
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
        How to Save Instagram Reels to iPhone Camera Roll
      </h1>
      <p className="text-sm text-gray-500 mb-8">iOS Safari Guide &bull; Updated October 2026</p>

      <div className="prose prose-indigo max-w-none text-gray-700 space-y-6 leading-relaxed">
        <p className="text-lg text-gray-600 font-medium">
          Apple&apos;s iOS ecosystem is known for strict file system sandboxing. Fortunately, with iOS 13 and later, 
          Apple Safari includes a built-in download manager that allows you to save Instagram Reels directly into your 
          device Photos app without installing shady App Store apps or shortcuts.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step iOS Tutorial</h2>
        
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/80 my-6 space-y-6 not-prose">
          <div className="flex gap-4">
            <div className="w-9 h-9 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Copy Link in Instagram App</h3>
              <p className="text-sm text-gray-600">
                While watching the Reel on your iPhone, tap the <strong>Share</strong> icon (paper airplane) at the bottom right. 
                Tap <strong>&quot;Copy Link&quot;</strong>.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-9 h-9 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Open Safari &amp; Visit reeldropnow</h3>
              <p className="text-sm text-gray-600">
                Open Safari, go to <Link href="/" className="text-indigo-600 underline font-semibold">reeldropnow.com</Link>, 
                paste the URL into the input field, and tap <strong>&quot;Download Media&quot;</strong>.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-9 h-9 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Confirm Safari Download Prompt</h3>
              <p className="text-sm text-gray-600">
                Safari will show a popup asking <em>&quot;Do you want to download this file?&quot;</em>. Tap <strong>Download</strong>. 
                A small downward arrow icon will appear in your Safari search bar showing the progress.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-9 h-9 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shrink-0">4</div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Move Video to iPhone Camera Roll</h3>
              <p className="text-sm text-gray-600">
                Tap the Safari Download icon, tap the downloaded video, tap the iOS <strong>Share</strong> button at the bottom left, 
                and select <strong>&quot;Save Video&quot;</strong>. The Reel is now permanently saved in your iPhone Photos app!
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshooting iPhone Downloads</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Audio not playing?</strong> Ensure your iPhone is not set to silent mode on the physical ring switch. The MP4 video file includes full stereo sound.</li>
          <li><strong>Link won&apos;t load?</strong> Make sure the Reel is from a public creator profile. Instagram restricts media from private accounts.</li>
        </ul>
      </div>

      <div className="mt-12 text-center bg-indigo-50/60 p-8 rounded-2xl border border-indigo-100">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Save Reels on Your iPhone</h3>
        <p className="text-sm text-gray-600 mb-6">Enjoy unlimited, free 1080p Instagram Reel downloads on iOS.</p>
        <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors">
          Download Reel on iPhone Now
        </Link>
      </div>
    </div>
  );
}