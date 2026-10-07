import { Metadata } from 'next';
import Link from 'next/link';
import EmailLink from '@/components/EmailLink';

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
        <p className="text-base text-gray-600 mb-8 leading-relaxed">
          We are here to help you. Whether you have a question about how our tool works, need help with a link, or want to share feedback, feel free to reach out. Our team reviews every message carefully.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mb-6">Direct Support Channels</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-gray-900 text-lg mb-2">📬 General Support &amp; Feedback</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Have questions about saving videos, browser compatibility, or feature suggestions? Send us an email and our support crew will get back to you.
            </p>
            <p className="text-sm">
              <strong>Email:</strong>{' '}
              <EmailLink email="support@reeldropnow.com" className="text-indigo-600 underline font-semibold" />
            </p>
          </div>

          <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100">
            <h3 className="font-bold text-gray-900 text-lg mb-2">⚖️ Legal, Copyright &amp; DMCA</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              For copyright inquiries, content takedown requests, or terms compliance notices, please contact our designated legal agent directly.
            </p>
            <p className="text-sm">
              <strong>Email:</strong>{' '}
              <EmailLink email="dmca@reeldropnow.com" className="text-indigo-600 underline font-semibold" />
            </p>
          </div>
        </div>

        <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Response Expectations</h3>
            <p>
              Our support team answers most messages within <strong>24 to 48 business hours</strong>, Monday through Friday. If you are reporting a specific reel link that failed to parse, please include the full URL so we can reproduce and resolve the issue quickly.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Help Before You Email</h3>
            <p className="mb-4">
              Many common questions can be answered immediately using our free online guides:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 not-prose">
              <Link href="/faq" className="p-3 bg-gray-50 rounded-xl hover:bg-indigo-50 border border-gray-100 transition-colors block">
                <span className="font-bold text-gray-900 block text-sm">FAQ Center</span>
                <span className="text-xs text-gray-500">Quick answers on common errors, audio, and formats.</span>
              </Link>
              <Link href="/guides/how-to-save-instagram-reels" className="p-3 bg-gray-50 rounded-xl hover:bg-indigo-50 border border-gray-100 transition-colors block">
                <span className="font-bold text-gray-900 block text-sm">Audio Troubleshooting</span>
                <span className="text-xs text-gray-500">How to keep background tracks and voice intact.</span>
              </Link>
              <Link href="/guides/instagram-reel-downloader-iphone" className="p-3 bg-gray-50 rounded-xl hover:bg-indigo-50 border border-gray-100 transition-colors block">
                <span className="font-bold text-gray-900 block text-sm">iPhone Guide</span>
                <span className="text-xs text-gray-500">Step-by-step tutorial for iOS Safari downloads.</span>
              </Link>
              <Link href="/guides/instagram-reel-downloader-android" className="p-3 bg-gray-50 rounded-xl hover:bg-indigo-50 border border-gray-100 transition-colors block">
                <span className="font-bold text-gray-900 block text-sm">Android Guide</span>
                <span className="text-xs text-gray-500">Saving MP4 clips to your gallery on Android.</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Helpful Company Links</h3>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Learn more about our technology on the <Link href="/about" className="text-indigo-600 underline">About Us</Link> page.</li>
              <li>Review our privacy commitments in our <Link href="/privacy" className="text-indigo-600 underline">Privacy Policy</Link>.</li>
              <li>Read our acceptable use terms in our <Link href="/terms" className="text-indigo-600 underline">Terms of Service</Link>.</li>
              <li>Manage tracking preferences in our <Link href="/cookie-policy" className="text-indigo-600 underline">Cookie Policy</Link>.</li>
              <li>View intellectual property procedures in our <Link href="/dmca" className="text-indigo-600 underline">DMCA Policy</Link>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
