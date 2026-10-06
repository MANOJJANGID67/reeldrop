'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('reeldrop_cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('reeldrop_cookie_consent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 p-4 shadow-xl z-50 transition-all">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
          We use cookies and partner with Google AdSense to serve personalized ads and enhance your experience. By continuing to use our site, you agree to our{' '}
          <Link href="/privacy" className="text-indigo-600 underline font-medium">Privacy Policy</Link>.
        </p>
        <button
          onClick={handleAccept}
          className="whitespace-nowrap px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          Got it, Accept
        </button>
      </div>
    </div>
  );
}
