import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Instagram Reel Downloader for Android | REELDROP',
  description: 'Download Instagram Reels directly to your Android device using REELDROP.',
  alternates: { canonical: 'https://www.reeldrop.com/guides/instagram-reel-downloader-android' }
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
            <span className="text-gray-700" aria-current="page">Downloading Reels on Android</span>
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Downloading Reels on Android</h1>
      <div className="prose prose-indigo max-w-none">
        <p>Android users can save public Instagram Reels directly to their gallery.</p><ol><li>Open the Instagram app on your Android.</li><li>Tap Share and Copy Link.</li><li>Open Chrome and paste the link into REELDROP.</li></ol>
      </div>
    </div>
  );
}
