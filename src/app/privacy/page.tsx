import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | reeldropnow',
  description: 'reeldropnow privacy policy, cookies, Google AdSense disclosures, data protection, and user rights.',
  alternates: { canonical: 'https://reeldropnow.com/privacy' }
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: October 6, 2026</p>

        <div className="prose prose-indigo max-w-none text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            Welcome to <strong>reeldropnow</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), accessible via 
            <Link href="/" className="text-indigo-600 underline ml-1">https://reeldropnow.com</Link>. 
            We respect your privacy and are committed to protecting personal data. This Privacy Policy explains our practices 
            regarding information collection, usage, third-party advertising partners, cookies, and your individual privacy rights.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. No Storage of User Media or Passwords</h2>
          <p>
            reeldropnow is an on-the-fly public media utility. We <strong>never</strong> ask for, collect, or store your Instagram password, 
            account login credentials, or private account data. Furthermore, media files extracted from public links are delivered directly to 
            your browser and are not permanently archived, stored, or re-hosted on our servers.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Log Files & Anonymous Analytics</h2>
          <p>
            Like most standard website operators, reeldropnow collects non-personally identifiable information that web browsers and servers 
            typically make available. This includes browser type, language preference, referring site, date and time of each visitor request, 
            and anonymized IP addresses used solely for diagnostic security, server rate-limiting, and preventing malicious DDoS attacks.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Cookies, Web Beacons & Advertising Partners</h2>
          <p>
            reeldropnow uses cookies to ensure smooth site navigation and improve user experience. In addition, third-party advertising partners 
            serve ads on our website when you visit.
          </p>

          <div className="bg-indigo-50/70 border-l-4 border-indigo-600 p-4 rounded-r-lg my-6">
            <h3 className="font-bold text-gray-900 mb-2">Google AdSense & DoubleClick Cookie Disclosure</h3>
            <p className="text-sm text-gray-800 mb-2">
              Google is a third-party vendor on our site. Google uses cookies, including the DoubleClick DART cookie, to serve ads to our visitors 
              based upon their visit to reeldropnow.com and other sites on the internet.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Third party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to your website or other websites.</li>
              <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
              <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Google Ads Settings</a>.</li>
              <li>Alternatively, users can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">aboutads.info</a>.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. How Google Uses Data When You Use Our Site</h2>
          <p>
            For more detailed information on how Google manages and processes data collected from websites running Google tools and AdSense, 
            please review: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">How Google uses information from sites or apps that use our services</a>.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. GDPR Privacy Rights (EEA & UK Visitors)</h2>
          <p>
            If you reside within the European Economic Area (EEA) or the United Kingdom, you have guaranteed data protection rights under the General Data 
            Protection Regulation (GDPR), including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The right to access, update, or delete the information we have on you.</li>
            <li>The right to rectify inaccurate or incomplete records.</li>
            <li>The right to object to or restrict processing of your personal data.</li>
            <li>The right to withdraw previously granted consent at any time.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. California Consumer Privacy Act (CCPA)</h2>
          <p>
            Under the California Consumer Privacy Act (CCPA), California consumers have specific rights regarding their personal information:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The right to know what personal data is being collected and how it is used.</li>
            <li>The right to request deletion of personal information.</li>
            <li>The right to opt-out of the &quot;sale&quot; of personal information (we do not sell personal data).</li>
            <li>The right to non-discrimination for exercising your privacy rights.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. Children&apos;s Online Privacy Protection (COPPA)</h2>
          <p>
            Protecting the privacy of young children is especially important. reeldropnow does not knowingly collect or solicit any personal identifiable 
            information from children under the age of 13. If you believe your child has provided personal information on our website, please contact us immediately 
            and we will promptly delete such records.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy periodically to reflect technological, operational, or legal updates. Any revisions will be published on this page 
            with a refreshed &quot;Last Updated&quot; date.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">9. Contacting Us</h2>
          <p>
            If you have questions, feedback, or data privacy requests concerning this policy, please contact our privacy compliance team at:
            <br />
            <strong>Email:</strong> <a href="mailto:support@reeldropnow.com" className="text-indigo-600 underline">support@reeldropnow.com</a>
            <br />
            <strong>Official Website:</strong> <Link href="/" className="text-indigo-600 underline">https://reeldropnow.com</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
