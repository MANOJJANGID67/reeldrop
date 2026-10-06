import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Instagram Reel Downloader Complete Guide | REELDROP',
  description: 'The ultimate guide to using REELDROP to securely save public Instagram Reels.',
  alternates: { canonical: 'https://reeldropnow.com/guides/instagram-reel-downloader-guide' }
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
            <span className="text-gray-700" aria-current="page">Instagram Reel Downloader Guide</span>
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Instagram Reel Downloader Guide</h1>
      <div className="prose prose-indigo max-w-none">
        <p>This guide covers everything you need to know about using REELDROP across all devices.</p><h2>Understanding the Tool</h2><p>REELDROP is a cloud-based extraction engine. Your device never connects to Instagram directly; our secure worker nodes handle the parsing.</p><h2>Troubleshooting</h2><p>If you encounter an &quot;Extraction Failed&quot; error, it typically means Instagram blocked the public request due to their anti-bot measures.</p>
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Try REELDROP Now
        </Link>
      </div>
    </div>
  );
}