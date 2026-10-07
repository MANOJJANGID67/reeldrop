import { Metadata } from 'next';
import Link from 'next/link';
import EmailLink from '@/components/EmailLink';

export const metadata: Metadata = {
  title: 'About Us - Fast & Private Media Utility | reeldropnow',
  description: 'Learn about reeldropnow, our mission, edge infrastructure, and our commitment to fast, private, ad-light media extraction online.',
  alternates: { canonical: 'https://reeldropnow.com/about' }
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
        <div className="flex items-center gap-3 mb-6">
          <img src="/logo.svg" alt="reeldropnow" width={48} height={48} className="w-12 h-12 rounded-xl" />
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">About reeldropnow</h1>
            <p className="text-sm text-indigo-600 font-semibold">Fast, Private & Transparent Media Utility</p>
          </div>
        </div>

        <div className="prose prose-indigo max-w-none text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            Founded in 2026, <strong>reeldropnow</strong> was created by modern web enthusiasts with a clear mission: 
            to replace shady, slow, and ad-bloated video downloaders with a clean, privacy-conscious, and blazing-fast utility.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Our Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 not-prose">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center font-bold text-lg mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Blazing Fast Speed</h3>
              <p className="text-xs text-gray-600">Built on modern edge computing and Cloudflare CDN to deliver sub-second page loads worldwide.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold text-lg mb-3">🛡️</div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Privacy First</h3>
              <p className="text-xs text-gray-600">No user credentials, no account requirements, and zero storage of downloaded media on our servers.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center font-bold text-lg mb-3">✨</div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Clean Experience</h3>
              <p className="text-xs text-gray-600">No spammy redirects, deceptive download buttons, or intrusive pop-up windows.</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What We Do</h2>
          <p>
            reeldropnow enables users, content creators, researchers, and educators to save public Instagram Reels, videos, and audio clips 
            directly in their original high-definition MP4 format. Whether you need to save an educational tutorial for offline review or archive 
            your own creative productions, our tool streamlines the process without requiring software installations or browser extensions.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Responsible and Ethical Operations</h2>
          <p>
            We strictly adhere to copyright and intellectual property laws. Our service works exclusively with public URLs and does not attempt 
            to circumvent private Instagram privacy barriers. We encourage all users to respect the rights of original creators.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Get In Touch</h2>
          <p>
            We actively listen to user feedback, bug reports, and partnership inquiries. Feel free to contact our team anytime through our 
            <Link href="/contact" className="text-indigo-600 underline font-semibold ml-1">Contact Page</Link> or directly at 
            <EmailLink email="support@reeldropnow.com" className="text-indigo-600 underline ml-1" />.
          </p>
        </div>
      </div>
    </div>
  );
}
