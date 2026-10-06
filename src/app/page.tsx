'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('https://reeldrop.duckdns.org/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'Unknown error occurred.' }));
        throw new Error(data.error || 'Failed to download. The URL might be private or invalid.');
      }

      // Check if it's a JSON response containing a direct URL
      const contentType = res.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const data = await res.json();
        if (data.url) {
          // Open direct URL in a new tab to trigger download
          window.location.href = data.url;
          setSuccess(true);
          setUrl('');
          setLoading(false);
          return;
        }
      }

      // Otherwise trigger file download from blob
      const blob = await res.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `reeldrop_${Date.now()}.mp4`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setSuccess(true);
      setUrl('');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            REELDROP
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Public Reels. Simple Downloads.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="url" className="sr-only">Instagram URL</label>
            <input
              id="url"
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.instagram.com/reel/..."
              className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900 shadow-sm"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-70 shadow-lg shadow-indigo-200"
          >
            {loading ? (
              <span className="flex items-center space-x-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Processing...</span>
              </span>
            ) : (
              <span>Download Media</span>
            )}
          </button>
        </form>

        {error && (
          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-lg">
            <p className="font-semibold">Extraction Failed</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        {success && (
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-r-lg">
            <p className="font-semibold">Success!</p>
            <p className="text-sm mt-1">Your download should begin automatically.</p>
          </div>
        )}

        <div className="mt-10 text-center text-sm text-gray-500 space-y-4">
          <p>
            Important: Instagram periodically changes its structure. Some links might fail.
            ReelDrop is intended for public content only. We do not bypass private accounts.
          </p>
          <div className="flex justify-center space-x-6 pt-4 border-t border-gray-100">
            <Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms</Link>
            <Link href="/dmca" className="hover:text-indigo-600 transition-colors">DMCA</Link>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-4xl mt-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">What is an Instagram Reel downloader?</h3>
            <p className="text-gray-600 mt-2">An Instagram Reel downloader is a tool that allows you to extract and save public video files from Instagram directly to your device.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Can REELDROP download private Reels?</h3>
            <p className="text-gray-600 mt-2">No. REELDROP respects privacy and access controls. We only support extracting media from fully public URLs.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Why did my Reel fail to download?</h3>
            <p className="text-gray-600 mt-2">Instagram frequently updates their anti-bot measures. If a URL is public but fails, our extraction engine may have been temporarily restricted by Instagram.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Is REELDROP free to use?</h3>
            <p className="text-gray-600 mt-2">Yes, downloading public content through REELDROP is completely free and requires no account or application installation.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Guides</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/guides/how-to-download-instagram-reels" className="text-indigo-600 hover:underline">How to Download Reels</Link>
            <Link href="/guides/instagram-reel-downloader-iphone" className="text-indigo-600 hover:underline">Reels on iPhone</Link>
            <Link href="/guides/instagram-reel-downloader-pc" className="text-indigo-600 hover:underline">Reels on PC</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
