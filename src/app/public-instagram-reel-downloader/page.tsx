import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Public Instagram Reel Downloader | REELDROP',
  description: 'Securely download public Instagram Reels without bypassing authentication or privacy restrictions.',
  alternates: { canonical: 'https://reeldropnow.com/public-instagram-reel-downloader' }
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
            <span className="text-gray-700" aria-current="page">Public Instagram Reel Downloader</span>
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Public Instagram Reel Downloader</h1>
      <div className="prose prose-indigo max-w-none">
        <p>REELDROP is explicitly a <strong>Public</strong> Instagram Reel Downloader. We respect digital privacy and access controls.</p><h2>What we support</h2><p>We only attempt to process URLs that are visible to the public internet without a logged-in session. If a Reel requires an account to view, REELDROP cannot—and will not—download it.</p>
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Try REELDROP Now
        </Link>
      </div>
    </div>
  );
}