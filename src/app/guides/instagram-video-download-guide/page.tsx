import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Instagram Video Download Guide | REELDROP',
  description: 'Learn how to easily download public Instagram videos to your device using REELDROP.',
  alternates: { canonical: 'https://www.reeldrop.com/guides/instagram-video-download-guide' }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/" className="hover:text-indigo-600">Home</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-700" aria-current="page">Instagram Video Download Guide</span>
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Instagram Video Download Guide</h1>
      <div className="prose prose-indigo max-w-none">
        <p>Downloading public Instagram videos follows the exact same simple process as downloading Reels.</p><h3>Step-by-Step</h3><ol><li>Copy the public video URL from Instagram.</li><li>Paste it into the REELDROP homepage.</li><li>Click Download Media.</li></ol><p>Remember: Instagram frequently updates their network architecture. If a download fails, it is usually because Instagram blocked the automated request.</p>
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Try REELDROP Now
        </Link>
      </div>
    </div>
  );
}