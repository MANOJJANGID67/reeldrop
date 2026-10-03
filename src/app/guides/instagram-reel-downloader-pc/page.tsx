import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Instagram Reel Downloader for PC | REELDROP',
  description: 'Save Instagram Reels to your Windows or Mac PC in high quality MP4 format.',
  alternates: { canonical: 'https://www.reeldrop.com/guides/instagram-reel-downloader-pc' }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Saving Reels on Your PC</h1>
      <div className="prose prose-indigo max-w-none">
        <p>Whether you are on Windows or macOS, REELDROP is optimized for desktop browsers. Just copy the Instagram URL from your web browser&apos;s address bar and paste it into REELDROP.</p><p>We highly recommend using a modern browser like Chrome, Edge, or Firefox for the best experience. The file will save directly to your default Downloads folder.</p>
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Try REELDROP Now
        </Link>
      </div>
    </div>
  );
}