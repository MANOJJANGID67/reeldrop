import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Download Instagram Reels Online | reeldropnow',
  description: 'The simplest way to download Instagram Reels online in full HD. Fast, secure, and built for iPhone, Android, PC, and all modern browsers.',
  alternates: { canonical: 'https://reeldropnow.com/download-instagram-reels' }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Download Instagram Reels</h1>
      <div className="prose prose-indigo max-w-none">
        <p>Looking to download Instagram Reels for offline viewing? REELDROP is the perfect companion.</p><h2>Limitations</h2><p>Please note that we cannot bypass Instagram&apos;s anti-bot protections or private account restrictions. We only process URLs that are fully public and supported by our backend extraction engine.</p>
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Try REELDROP Now
        </Link>
      </div>
    </div>
  );
}