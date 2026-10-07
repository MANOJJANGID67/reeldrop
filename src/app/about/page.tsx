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
            <p className="text-sm text-indigo-600 font-semibold">Fast, Private &amp; Clean Media Utility</p>
          </div>
        </div>

        <div className="prose prose-indigo max-w-none text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">Our Mission and Core Values</h2>
          <p>
            Welcome to <strong>reeldropnow</strong>. We started this site in 2026 with a simple goal. We want to give you a fast, 
            safe, and clean way to save public videos online. Many other sites are slow and cluttered. Many sites show spammy pop-up 
            ads and trick you with fake buttons. We built reeldropnow to be different. Our tool is clean, straightforward, and easy for anyone to use.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Our Core Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 not-prose">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center font-bold text-lg mb-3">⚡</div>
              <h4 className="font-bold text-gray-900 text-base mb-1">Blazing Fast Speed</h4>
              <p className="text-xs text-gray-600">Built on global edge networks so pages load in under a second and downloads start right away.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold text-lg mb-3">🛡️</div>
              <h4 className="font-bold text-gray-900 text-base mb-1">Privacy First</h4>
              <p className="text-xs text-gray-600">No passwords, no sign-ups, and zero storage of your downloaded media files on our servers.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center font-bold text-lg mb-3">✨</div>
              <h4 className="font-bold text-gray-900 text-base mb-1">Clean Experience</h4>
              <p className="text-xs text-gray-600">No spammy redirects, deceptive download buttons, or intrusive pop-up windows.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">What Our Tool Does</h3>
          <p>
            Our tool helps creators, students, and everyday users. You can save public Instagram Reels, videos, and music clips 
            directly to your phone or computer. The videos save in sharp high-definition MP4 format. You do not need to install 
            any apps or browser add-ons. You do not need an account. Everything runs right inside your web browser.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Respect for Creator Rights</h3>
          <p>
            We take creator rights seriously. Our service only works with public URLs. It cannot open private accounts. 
            We always ask our users to respect creators and follow copyright rules. Please only download clips for your own personal use.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Contact Our Team</h3>
          <p>
            We love hearing from people who use our site. If you have questions, ideas, or bug reports, please reach out. 
            You can visit our <Link href="/contact" className="text-indigo-600 underline font-semibold ml-1">Contact Page</Link> or email our team directly at 
            <EmailLink email="support@reeldropnow.com" className="text-indigo-600 underline ml-1" />.
          </p>
        </div>
      </div>
    </div>
  );
}
