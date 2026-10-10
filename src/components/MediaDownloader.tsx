'use client';

import { useState } from 'react';

interface MediaDownloaderProps {
  defaultPlaceholder?: string;
  buttonText?: string;
  badgeText?: string;
  serviceType?: 'reel' | 'story' | 'video' | 'facebook';
}

export default function MediaDownloader({
  defaultPlaceholder = 'Paste public link here (e.g. https://www.instagram.com/reel/...)',
  buttonText = 'Download High-Quality MP4',
  badgeText = 'Instant Edge Extraction • 100% Free',
  serviceType = 'reel'
}: MediaDownloaderProps) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handlePaste = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        if (text) {
          setUrl(text.trim());
          setError('');
        }
      }
    } catch {
      // Clipboard read blocked by browser permissions, ignore
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = url.trim();

    if (!cleanUrl) {
      setError('Please paste a valid video URL first.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: cleanUrl })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'Unable to extract video stream.' }));
        throw new Error(data.error || 'Failed to download. The account might be private or the link expired.');
      }

      const blob = await res.blob();
      const isImage = blob.type.includes('image') || blob.type.includes('jpeg') || blob.type.includes('png');
      const ext = isImage ? 'jpg' : 'mp4';
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      const prefix = serviceType === 'facebook' ? 'fbreel' : serviceType;
      a.download = `reeldropnow_${prefix}_${Date.now()}.${ext}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(downloadUrl);

      setSuccess(true);
      setUrl('');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred during download.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100 my-6">
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {badgeText}
        </span>
        <span className="text-xs text-gray-600 font-medium hidden sm:inline">No App • No Login • HD</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <label htmlFor={`media-url-input-${serviceType}`} className="sr-only">
            Paste media URL
          </label>
          <input
            id={`media-url-input-${serviceType}`}
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={defaultPlaceholder}
            className="w-full pl-4 pr-24 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-gray-900 shadow-xs text-sm sm:text-base"
            disabled={loading}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
            {url ? (
              <button
                type="button"
                onClick={() => setUrl('')}
                className="text-xs font-semibold text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
                title="Clear input"
              >
                Clear
              </button>
            ) : (
              <button
                type="button"
                onClick={handlePaste}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 px-2 py-1 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
                title="Paste from clipboard"
              >
                Paste
              </button>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-extrabold py-3.5 sm:py-4 px-6 rounded-2xl transition-all flex items-center justify-center space-x-2 disabled:opacity-70 shadow-lg shadow-indigo-100 cursor-pointer text-base sm:text-lg"
        >
          {loading ? (
            <span className="flex items-center space-x-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Extracting Direct Stream...</span>
            </span>
          ) : (
            <span className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{buttonText}</span>
            </span>
          )}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-rose-50 border border-rose-200 rounded-xl text-xs sm:text-sm text-rose-800 flex items-start gap-2.5">
          <span className="text-base shrink-0">⚠️</span>
          <div>
            <p className="font-bold mb-0.5">Download Notice</p>
            <p>{error}</p>
          </div>
        </div>
      )}

      {success && (
        <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-800 flex items-start gap-2.5">
          <span className="text-base shrink-0">✅</span>
          <div>
            <p className="font-bold mb-0.5">Download Started!</p>
            <p>Your video file is downloading. Check your browser Downloads folder or mobile Photos album.</p>
          </div>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between text-[11px] text-gray-600 gap-2">
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Original stereo sound preserved
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Zero watermarks added
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          No account login needed
        </span>
      </div>
    </div>
  );
}
