import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Download Instagram Reels | REELDROP',
  description: 'A complete guide on how to safely download public Instagram Reels directly to your device.',
  alternates: { canonical: 'https://www.reeldrop.com/guides/how-to-download-instagram-reels' }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">How to Download Public Instagram Reels</h1>
      <div className="prose prose-indigo max-w-none">
        <p>Downloading a public Instagram Reel is simple with the right tool. REELDROP allows you to extract media directly from public URLs without installing shady apps or giving away your password.</p><h2>Step 1: Copy the Link</h2><p>Open Instagram, find the public Reel, tap the Share icon, and select <strong>Copy Link</strong>.</p><h2>Step 2: Paste in REELDROP</h2><p>Head over to our homepage and paste the link. We only support public reels.</p><h2>Step 3: Download</h2><p>If the Reel is public and accessible, your MP4 download will start immediately!</p>
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Try REELDROP Now
        </Link>
      </div>
    </div>
  );
}