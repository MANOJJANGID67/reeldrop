import { Metadata } from 'next';
import Link from 'next/link';
import EmailLink from '@/components/EmailLink';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Protection | reeldropnow',
  description: 'Read the official reeldropnow privacy policy detailing data protection, cookie usage, Google AdSense compliance, and user rights.',
  alternates: { canonical: 'https://reeldropnow.com/privacy' }
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: October 7, 2026</p>

        <div className="prose prose-indigo max-w-none text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            Welcome to <strong>reeldropnow</strong> (<Link href="/" className="text-indigo-600 underline ml-1">https://reeldropnow.com</Link>). 
            We respect your privacy. We want to be clear and open about how we handle data on our site. 
            This page explains what information we collect and how we keep it safe.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Protect Your Privacy and Data</h2>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. We Do Not Store Passwords or Videos</h3>
          <p>
            We never ask for your Instagram password or account name. You do not need to create an account or log in to use our site. 
            We also do not store the video files you download. When you download a clip, our tool finds the public link and sends the video file straight to your device. 
            We do not keep copies of your media on our web servers.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. Anonymous Server Logs</h3>
          <p>
            Like most websites, our servers collect basic log files. This includes browser type, device type, visit times, and pages viewed. 
            We use this data only to fix bugs, stop spam, and keep our servers fast, stable, and secure.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Cookies and Google AdSense</h3>
          <p>
            We use cookies to make our website work smoothly. Third-party advertising partners like Google also serve ads on our site when you visit.
          </p>

          <div className="bg-indigo-50/70 border-l-4 border-indigo-600 p-4 rounded-r-lg my-6">
            <h4 className="font-bold text-gray-900 mb-2">Google AdSense Disclosure</h4>
            <p className="text-sm text-gray-800 mb-2">
              Google uses cookies, including the DoubleClick DART cookie, to serve ads based on prior visits to this site and other websites across the internet.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Third-party vendors, including Google, use cookies to serve ads based on your prior visits to our site or other websites.</li>
              <li>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Google Ads Settings</a>.</li>
              <li>You can also opt out of third-party ad cookies by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">aboutads.info</a>.</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">4. How Google Uses Information</h3>
          <p>
            For more details on how Google handles data from websites that use its tools, please read: 
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline ml-1">How Google uses information from sites that use our services</a>.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">5. Privacy Rights for European Users (GDPR)</h3>
          <p>
            If you live in the European Economic Area or the UK, you have guaranteed privacy rights under the GDPR. 
            You have the right to access, update, or ask us to delete any personal info we hold. You can also withdraw consent at any time.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">6. Privacy Rights for California Users (CCPA)</h3>
          <p>
            Under the California Consumer Privacy Act, California residents have the right to know what personal data is collected and request its deletion. 
            We do not sell your personal data to anyone.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">7. Protecting Children (COPPA)</h3>
          <p>
            Protecting children online is very important to us. reeldropnow does not knowingly collect any data from children under 13. 
            If you believe a child has provided data on our site, please contact us and we will delete it right away.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">8. Changes to This Policy</h3>
          <p>
            We may update our Privacy Policy as our site grows. Any updates will be posted on this page with a refreshed date.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">9. How to Contact Us</h3>
          <p>
            If you have questions about this policy or your privacy rights, please reach out to our team:
            <br />
            <strong>Email:</strong> <EmailLink email="support@reeldropnow.com" className="text-indigo-600 underline" />
            <br />
            <strong>Official Website:</strong> <Link href="/" className="text-indigo-600 underline">https://reeldropnow.com</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
