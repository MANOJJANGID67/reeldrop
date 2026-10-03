import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Instagram Video Downloader | REELDROP',
  description: 'Download public Instagram videos using our fast, secure, online extraction tool.',
  alternates: { canonical: 'https://www.reeldrop.com/instagram-video-downloader' }
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
            <span className="text-gray-700" aria-current="page">Instagram Video Downloader</span>
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Instagram Video Downloader</h1>
      <div className="prose prose-indigo max-w-none">
        <p>While originally focused on Reels, REELDROP also acts as a public Instagram Video Downloader where supported by our underlying extraction engine.</p><h2>How it works</h2><p>If the Instagram video URL is public and not restricted by Instagram&apos;s anti-bot measures, pasting the link on our homepage will yield a direct MP4 download.</p>
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Try REELDROP Now
        </Link>
      </div>
    </div>
  );
}