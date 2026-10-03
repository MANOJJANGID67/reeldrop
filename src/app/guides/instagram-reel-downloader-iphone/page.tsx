import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Instagram Reel Downloader for iPhone | REELDROP',
  description: 'Learn how to save Instagram Reels straight to your iPhone camera roll using REELDROP.',
  alternates: { canonical: 'https://www.reeldrop.com/guides/instagram-reel-downloader-iphone' }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Downloading Reels on Your iPhone</h1>
      <div className="prose prose-indigo max-w-none">
        <p>Apple makes it tricky to download files directly from the web, but iOS 13+ Safari handles it perfectly.</p><h2>Using Safari</h2><p>Simply open REELDROP in Safari, paste your public Instagram Reel link, and hit download. Safari will prompt you to download the file. You can then open your Safari Downloads list, select the video, and tap <strong>Save Video</strong> to move it to your Camera Roll.</p>
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Try REELDROP Now
        </Link>
      </div>
    </div>
  );
}