import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reel Downloader Online | REELDROP',
  description: 'Download supported public Instagram Reels with our online Reel Downloader. No installation required.',
  alternates: { canonical: 'https://reeldropnow.com/reel-downloader' }
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
            <span className="text-gray-700" aria-current="page">Reel Downloader</span>
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Reel Downloader</h1>
      <div className="prose prose-indigo max-w-none">
        <p>Welcome to our dedicated Reel Downloader page. REELDROP is designed specifically to parse, extract, and deliver supported public media directly to your device.</p><h2>What makes this different?</h2><p>Our focus is strictly on public URLs and privacy. We do not store your downloads or track your Instagram usage.</p>
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Try REELDROP Now
        </Link>
      </div>
    </div>
  );
}