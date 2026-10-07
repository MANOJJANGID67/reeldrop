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
        <p className="text-sm text-gray-500 mb-8">Last Updated: October 6, 2026</p>

        <div className="prose prose-indigo max-w-none text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            This Cookie Policy explains how <strong>reeldropnow</strong> (<Link href="/" className="text-indigo-600 underline">https://reeldropnow.com</Link>) 
            uses cookies and similar tracking technologies when you visit our website. This policy should be read alongside our 
            <Link href="/privacy" className="text-indigo-600 underline ml-1">Privacy Policy</Link>.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used 
            to make websites work efficiently, remember user preferences, and provide analytical reporting information to website operators.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. How We Use Cookies</h2>
          <p>
            reeldropnow utilizes cookies for several specific purposes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-1 text-sm">🔒 Essential &amp; Functional Cookies</h3>
              <p className="text-xs text-gray-600">Required for website navigation, user sessions, security rate limiting, and remembering your cookie consent choice.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-1 text-sm">📊 Performance &amp; Analytics</h3>
              <p className="text-xs text-gray-600">Help us understand how visitors interact with reeldropnow, identify broken links, and optimize edge server latency.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-1 text-sm">🎯 Advertising &amp; AdSense Cookies</h3>
              <p className="text-xs text-gray-600">Used by Google AdSense to serve relevant ads based on prior visits and prevent the same ad from showing repeatedly.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-1 text-sm">🛡️ Security &amp; Fraud Prevention</h3>
              <p className="text-xs text-gray-600">Detect automated scrapers, DDoS attacks, and abuse of our public media conversion infrastructure.</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Google AdSense &amp; Third-Party Cookies</h2>
          <p>
            Google, as a third-party vendor, uses cookies to serve advertisements on reeldropnow. Google&apos;s use of the DoubleClick DART cookie 
            enables it and its partners to display ads based on your visit to this site and other websites on the internet.
          </p>
          <p>
            You can review how Google uses information from sites that use its services by visiting: 
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline ml-1">Google Advertising Policies</a>.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. How to Manage and Control Cookies</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. Most modern web browsers automatically accept cookies, 
            but you can modify your browser settings to decline cookies if you prefer:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data.</li>
            <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data.</li>
            <li><strong>Mozilla Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection.</li>
            <li><strong>Microsoft Edge:</strong> Settings &gt; Site permissions &gt; Cookies and site data.</li>
          </ul>
          <p className="mt-3">
            To opt out of personalized interest-based advertising across the web, visit the 
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline ml-1">Digital Advertising Alliance Consumer Choice tool</a> or the 
            <a href="https://youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline ml-1">European Interactive Digital Advertising Alliance</a>.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Updates to This Policy</h2>
          <p>
            We may update our Cookie Policy from time to time in response to evolving legal, technical, or operational requirements. 
            Any modifications will become effective immediately upon posting to this page.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or tracking technologies, please contact us at:
            <br />
            <strong>Email:</strong> <EmailLink email="support@reeldropnow.com" className="text-indigo-600 underline" />
          </p>
        </div>
      </div>
    </div>
  );
}
