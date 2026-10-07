import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - Support & Inquiries | reeldropnow',
  description: 'Get in touch with the reeldropnow support team for assistance, technical feedback, partnership inquiries, and DMCA copyright notices.',
  alternates: { canonical: 'https://reeldropnow.com/contact' }
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Direct Support Channels</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-gray-900 text-lg mb-2">📬 General Support</h3>
            <p className="text-sm text-gray-600 mb-4">
              Having issues downloading a reel or have suggestions to improve the tool? Reach out to our technical support desk.
            </p>
            <p className="text-sm">
              <strong>Email:</strong> <a href="mailto:support@reeldropnow.com" className="text-indigo-600 underline font-semibold">support@reeldropnow.com</a>
            </p>
          </div>

          <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100">
            <h3 className="font-bold text-gray-900 text-lg mb-2">⚖️ Legal & Copyright (DMCA)</h3>
            <p className="text-sm text-gray-600 mb-4">
              For intellectual property claims, legal inquiries, or compliance notices, please email our designated agent.
            </p>
            <p className="text-sm">
              <strong>Email:</strong> <a href="mailto:dmca@reeldropnow.com" className="text-indigo-600 underline font-semibold">dmca@reeldropnow.com</a>
            </p>
          </div>
        </div>

        <div className="prose prose-indigo max-w-none text-gray-700 text-sm sm:text-base space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Response Time</h2>
          <p>
            Our support desk typically responds to inquiries within <strong>24 to 48 business hours</strong>. When reporting broken reel URLs, please include the exact link so our engineering team can test and verify parsing rules.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-6">Frequently Requested Links</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Review our <Link href="/privacy" className="text-indigo-600 underline">Privacy Policy</Link></li>
            <li>Review our <Link href="/terms" className="text-indigo-600 underline">Terms of Service</Link></li>
            <li>Review our <Link href="/dmca" className="text-indigo-600 underline">DMCA Policy</Link></li>
            <li>Read our <Link href="/about" className="text-indigo-600 underline">About Us</Link> page</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
