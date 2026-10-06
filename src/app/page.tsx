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
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'Unknown error occurred.' }));
        throw new Error(data.error || 'Failed to download. The URL might be private or invalid.');
      }

      // Trigger file download from blob
      const blob = await res.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `reeldropnow_${Date.now()}.mp4`;
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
        <header className="text-center mb-10 flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 mb-4 p-1.5 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600 shadow-md">
            <img 
              src="/logo.svg" 
              alt="reeldropnow logo" 
              className="w-full h-full object-contain rounded-[11px] bg-white" 
            />
          </div>
          <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            Fast, Free & Unlimited
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-3">
            reeldrop<span className="text-indigo-600">now</span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-600 font-semibold mb-2">
            Download Instagram Reels Video online to your device.
          </p>
          <p className="text-sm text-gray-500 max-w-lg mx-auto">
            High definition MP4 downloads, original audio quality, no software or registration needed.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="url" className="sr-only">Instagram Reel URL</label>
            <div className="relative">
              <input
                id="url"
                type="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste Instagram Reel Link (e.g. https://www.instagram.com/reel/...)"
                className="w-full px-5 py-4.5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-gray-900 shadow-sm text-base md:text-lg"
                disabled={loading}
              />
              {url && (
                <button
                  type="button"
                  onClick={() => setUrl('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm font-semibold p-1"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-extrabold py-4 px-8 rounded-2xl transition-all flex items-center justify-center space-x-2 disabled:opacity-70 shadow-xl shadow-indigo-200 cursor-pointer text-lg"
          >
            {loading ? (
              <span className="flex items-center space-x-2">
                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Extracting High Quality MP4...</span>
              </span>
            ) : (
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Media</span>
              </span>
            )}
          </button>
        </form>

        {error && (
          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-xl">
            <p className="font-bold flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              Extraction Failed
            </p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        {success && (
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-800 rounded-r-xl">
            <p className="font-bold flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Success!
            </p>
            <p className="text-sm mt-1">Your video download has started automatically into your device files.</p>
          </div>
        )}

        {/* Feature badges */}
        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100 text-center">
          <div className="p-3 bg-gray-50 rounded-xl">
            <p className="text-xs font-bold text-gray-800">100% Free</p>
            <p className="text-[11px] text-gray-500 mt-0.5">No subscription fees</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl">
            <p className="text-xs font-bold text-gray-800">Fast MP4 Stream</p>
            <p className="text-[11px] text-gray-500 mt-0.5">High definition output</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl">
            <p className="text-xs font-bold text-gray-800">Zero Watermark</p>
            <p className="text-[11px] text-gray-500 mt-0.5">Original crystal audio</p>
          </div>
        </div>

        {/* Legal & Policy Highlights */}
        <div className="mt-8 pt-6 border-t border-gray-100 space-y-4 text-xs text-gray-500">
          <div className="flex justify-center space-x-6 text-sm font-medium">
            <Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
            <Link href="/dmca" className="hover:text-indigo-600 transition-colors">DMCA</Link>
          </div>
        </div>
      </div>
      
      {/* Informative Content & AEO/GEO Blocks */}
      <div className="w-full max-w-4xl mt-16 px-4 space-y-12">
        {/* Pricing & Limits Section */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2.5 bg-green-50 text-green-700 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Pricing and Limits</h2>
              <span className="text-xs text-green-600 font-semibold uppercase tracking-wider">Unlimited Free Usage</span>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed text-base">
            We offer a completely free service with no limits or additional costs. We do embed some ads that help us maintain our services.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-100 text-sm">
            <div className="flex items-center space-x-2 text-gray-700">
              <span className="text-green-500 font-bold">✓</span>
              <span>No Daily Download Caps</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <span className="text-green-500 font-bold">✓</span>
              <span>No Hidden Subscriptions</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <span className="text-green-500 font-bold">✓</span>
              <span>No Login or Signup</span>
            </div>
          </div>
        </section>

        {/* Copyright & Laws Section */}
        <section className="bg-amber-50/70 rounded-3xl p-8 border border-amber-200/60 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Copyright & Laws</h2>
              <span className="text-xs text-amber-700 font-semibold uppercase tracking-wider">Responsible & Ethical Use</span>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            It&apos;s important to note that downloading content from Instagram without the permission of the owner may violate the platform&apos;s terms of service and could result in your account being suspended or banned if you use that content without concern. You should only download content that you have permission to use or that is available under a Creative Commons license.
          </p>
        </section>

        {/* How It Works (AEO Optimized) */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Download Instagram Reels with reeldropnow</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-10 h-10 bg-indigo-600 text-white font-black rounded-xl flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-gray-900 mb-1">Copy Reel Link</h3>
              <p className="text-xs text-gray-600">Open Instagram, choose the public Reel you want, click Share, and copy the link.</p>
            </div>
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-10 h-10 bg-indigo-600 text-white font-black rounded-xl flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-gray-900 mb-1">Paste in reeldropnow</h3>
              <p className="text-xs text-gray-600">Paste the URL into the input field above and click &quot;Download Media&quot;.</p>
            </div>
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-10 h-10 bg-indigo-600 text-white font-black rounded-xl flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-gray-900 mb-1">Save to Device</h3>
              <p className="text-xs text-gray-600">Your MP4 video begins saving straight into your mobile or computer Downloads folder.</p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions (GEO / AEO) */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-gray-800">What is reeldropnow?</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                reeldropnow is an online browser-based tool to download Instagram Reels Video online to your device in original MP4 high-resolution format without watermarks.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Can reeldropnow download private Reels?</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                No. reeldropnow strictly respects privacy boundaries and only extracts media from public Instagram posts and Reels.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Is reeldropnow compatible with iPhone and Android?</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Yes, reeldropnow works seamlessly on all web browsers including Safari on iOS, Chrome on Android, Windows PC, and macOS without requiring app installations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Are there limits on how many reels I can download?</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                We offer a completely free service with no limits or additional costs. You can download as many public reels as you need.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center pt-8 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Helpful Guides & Resources</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <Link href="/guides/how-to-download-instagram-reels" className="text-indigo-600 hover:underline">How to Download Reels</Link>
              <Link href="/guides/instagram-reel-downloader-iphone" className="text-indigo-600 hover:underline">Reels on iPhone Guide</Link>
              <Link href="/guides/instagram-reel-downloader-pc" className="text-indigo-600 hover:underline">Reels on PC Guide</Link>
              <Link href="/guides/instagram-video-download-guide" className="text-indigo-600 hover:underline">Instagram Video Guide</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
