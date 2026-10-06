import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Download Instagram Reels on PC & Mac (Windows / macOS) | reeldropnow',
  description: 'Comprehensive guide to downloading Instagram Reels on PC, Windows, and Mac in full 1080p MP4 resolution using Chrome, Edge, and Safari with reeldropnow.',
  alternates: { canonical: 'https://reeldropnow.com/guides/instagram-reel-downloader-pc' }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <nav className="text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-indigo-600">Home</Link> &gt; <span className="text-gray-700">Guides</span> &gt; Instagram Reels on PC
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
        How to Download Instagram Reels on PC &amp; Mac in Full 1080p
      </h1>
      <p className="text-sm text-gray-500 mb-8">Windows, macOS &amp; Linux Desktop Guide &bull; Updated October 2026</p>

      <div className="prose prose-indigo max-w-none text-gray-700 space-y-6 leading-relaxed">
        <p className="text-lg text-gray-600 font-medium">
          Downloading Instagram Reels on a desktop computer (Windows PC, Apple Mac, or Linux) offers the best experience for video editors, 
          social media managers, and digital archivists who require pristine 1080p source files without compression or screen recorder artifacts.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Desktop Tutorial</h2>
        
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/80 my-6 space-y-6 not-prose">
          <div className="flex gap-4">
            <div className="w-9 h-9 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Copy URL in Desktop Browser</h3>
              <p className="text-sm text-gray-600">
                Open Instagram in your web browser (Chrome, Edge, Firefox, or Safari). Open the Reel and copy the URL from your 
                browser&apos;s address bar, or click the three dots icon (&hellip;) and select <strong>&quot;Copy link&quot;</strong>.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-9 h-9 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Navigate to reeldropnow</h3>
              <p className="text-sm text-gray-600">
                Go to <Link href="/" className="text-indigo-600 underline font-semibold">reeldropnow.com</Link> in a new browser tab. 
                Paste the copied link (<kbd className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">Ctrl + V</kbd> on Windows or <kbd className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">Cmd + V</kbd> on Mac).
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-9 h-9 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Save MP4 Directly to Downloads Folder</h3>
              <p className="text-sm text-gray-600">
                Click <strong>&quot;Download Media&quot;</strong>. Your browser will immediately download the high-definition MP4 file into your 
                designated Downloads folder, ready for editing in Premiere Pro, Final Cut, DaVinci Resolve, or CapCut.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why reeldropnow Is Ideal for Content Creators</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>No Quality Degradation:</strong> Unlike screen recordings that suffer from frame rate drops and UI overlays, reeldropnow fetches the raw Instagram video stream.</li>
          <li><strong>Synced Stereo Audio:</strong> Crystal clear audio synced with the video track.</li>
          <li><strong>No Watermarks:</strong> Clean video files without added branding logos.</li>
        </ul>
      </div>

      <div className="mt-12 text-center bg-indigo-50/60 p-8 rounded-2xl border border-indigo-100">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Save Reels on PC &amp; Mac</h3>
        <p className="text-sm text-gray-600 mb-6">Unlimited, clean, and blazing-fast desktop video downloads.</p>
        <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors">
          Download Reel on PC Now
        </Link>
      </div>
    </div>
  );
}