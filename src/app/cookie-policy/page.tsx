import { Metadata } from 'next';
import Link from 'next/link';
import EmailLink from '@/components/EmailLink';

export const metadata: Metadata = {
  title: 'Cookie Policy & Privacy Preferences | reeldropnow',
  description: 'reeldropnow Cookie Policy: How we use cookies, Google AdSense cookies, analytics, and how to manage your cookie preferences.',
  alternates: { canonical: 'https://reeldropnow.com/cookie-policy' }
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
        <nav className="text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-indigo-600">Home</Link> &gt; <span className="text-gray-700">Cookie Policy</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: October 7, 2026</p>

        <div className="prose prose-indigo max-w-none text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            This page explains how <strong>reeldropnow</strong> (<Link href="/" className="text-indigo-600 underline">https://reeldropnow.com</Link>) 
            uses cookies. It also explains what choices you have as a visitor. Please read this alongside our 
            <Link href="/privacy" className="text-indigo-600 underline ml-1">Privacy Policy</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Cookies and Your Choices</h2>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. What Are Cookies?</h3>
          <p>
            Cookies are small text files. Websites save them on your phone, tablet, or computer when you visit a webpage. 
            Cookies help websites remember your visits. They also help web pages load faster and run smoothly.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. Types of Cookies We Use</h3>
          <p>
            We use cookies to keep our website fast, stable, and safe. Here are the main types:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-1 text-sm">🔒 Essential Cookies</h4>
              <p className="text-xs text-gray-600">Needed for page loading, basic security, and remembering your cookie choices.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-1 text-sm">📊 Analytics Cookies</h4>
              <p className="text-xs text-gray-600">Help us count visits and see which tools people like so we can make the site better.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-1 text-sm">🎯 Advertising Cookies</h4>
              <p className="text-xs text-gray-600">Used by Google AdSense to show relevant ads and prevent the same ad from repeating.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-1 text-sm">🛡️ Safety Cookies</h4>
              <p className="text-xs text-gray-600">Help stop spam, malicious attacks, and bad bots from slowing down our servers.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Google AdSense and Third Parties</h3>
          <p>
            Google shows ads on our website through Google AdSense. Google uses cookies to show helpful ads based on visits to this and other websites. 
            You can read how Google uses data on their official 
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline ml-1">advertising policy page</a>.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">4. How You Can Manage or Turn Off Cookies</h3>
          <p>
            You have full control over cookies. You can turn off or delete cookies at any time in your web browser:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Google Chrome:</strong> Open Settings, click Privacy and Security, then choose Cookies.</li>
            <li><strong>Apple Safari:</strong> Open Preferences, click Privacy, and manage stored website data.</li>
            <li><strong>Mozilla Firefox:</strong> Open Settings, click Privacy &amp; Security, and choose your settings.</li>
            <li><strong>Microsoft Edge:</strong> Open Settings, click Cookies and site permissions.</li>
          </ul>
          <p className="mt-3">
            You can also visit consumer opt-out tools such as the 
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline ml-1">Digital Advertising Alliance</a> or 
            <a href="https://youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline ml-1">Your Online Choices</a>.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">5. Updates to This Policy</h3>
          <p>
            We may update this policy from time to time. When we make updates, we will post the new text on this page with a new date.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">6. Contact Us</h3>
          <p>
            If you have questions about how we use cookies, please contact our support team:
            <br />
            <strong>Email:</strong> <EmailLink email="support@reeldropnow.com" className="text-indigo-600 underline" />
          </p>
        </div>
      </div>
    </div>
  );
}
