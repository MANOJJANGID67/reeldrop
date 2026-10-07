import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Instagram Reel Downloader Online | reeldropnow',
  description: 'Download public Instagram Reels quickly and securely in 1080p MP4 format. Free online tool to save Instagram video content with original audio.',
  alternates: { canonical: 'https://reeldropnow.com/instagram-reel-downloader' }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Instagram Reel Downloader</h1>
      <div className="prose prose-indigo max-w-none">
        <p>REELDROP is a dedicated Instagram Reel Downloader for public content. We believe in simplicity and privacy.</p><h2>Why Choose REELDROP?</h2><ul><li>No login required</li><li>No apps to install</li><li>Fast MP4 processing</li><li>Strictly respects privacy by only accessing public links</li></ul><p>Our tool gracefully handles extraction, but remember that Instagram frequently changes their access rules, so some reels may occasionally fail if restricted.</p>
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Try REELDROP Now
        </Link>
      </div>
    </div>
  );
}