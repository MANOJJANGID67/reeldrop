import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Save Instagram Reels | REELDROP',
  description: 'A quick tutorial on saving public Instagram Reels to your local storage without extra apps.',
  alternates: { canonical: 'https://www.reeldrop.com/guides/how-to-save-instagram-reels' }
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
            <span className="text-gray-700" aria-current="page">How to Save Instagram Reels</span>
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">How to Save Instagram Reels</h1>
      <div className="prose prose-indigo max-w-none">
        <p>Saving an Instagram Reel to your camera roll or hard drive is straightforward with REELDROP.</p><p>Because we process the video server-side and deliver a standard MP4 file, your browser handles the actual file saving natively.</p>
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Try REELDROP Now
        </Link>
      </div>
    </div>
  );
}