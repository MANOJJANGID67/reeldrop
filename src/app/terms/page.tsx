import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service & Usage Guidelines | reeldropnow',
  description: 'Terms and conditions for using reeldropnow Instagram Reels and video extraction tools. Understand user responsibilities and acceptable use.',
  alternates: { canonical: 'https://reeldropnow.com/terms' }
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: October 6, 2026</p>

        <div className="prose prose-indigo max-w-none text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            Please read these Terms of Service carefully before utilizing <strong>reeldropnow</strong> (<Link href="/" className="text-indigo-600 underline">https://reeldropnow.com</Link>). 
            By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Description of Service</h2>
          <p>
            reeldropnow is an independent, free media utility engineered to allow users to parse, convert, and download publicly available Instagram Reels, 
            videos, and audio streams for personal offline archival and educational purposes.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Permitted and Ethical Use</h2>
          <p>
            You agree to use reeldropnow exclusively for lawful and permitted activities. Specifically, you agree:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>To only extract media from publicly visible Instagram posts.</li>
            <li>Not to circumvent private account restrictions, digital rights management (DRM), or authentication firewalls.</li>
            <li>To respect intellectual property rights and only download content you own, have explicit permission to use, or that is distributed under open public licenses (e.g., Creative Commons).</li>
            <li>Not to re-distribute, monetize, or republish downloaded media without the explicit consent of the original creator or copyright holder.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Disclaimer of Affiliation</h2>
          <p>
            reeldropnow is an independent third-party tool and is <strong>not</strong> sponsored, endorsed, affiliated, or associated with Instagram™, Meta Platforms, Inc., 
            or any of their subsidiaries. All trademarks, logos, and brand names are the property of their respective owners.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Intellectual Property & Copyright Infringement</h2>
          <p>
            reeldropnow acts solely as a transient technical tool. We do not host, store, or re-broadcast any video files on our infrastructure. If you are an intellectual property owner 
            who believes your content has been infringed, please refer to our <Link href="/dmca" className="text-indigo-600 underline font-semibold">DMCA Policy</Link> for instructions 
            on submitting a formal takedown request.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Disclaimer of Warranties</h2>
          <p>
            The services provided by reeldropnow are made available on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. 
            We make no guarantee that the service will be continuous, error-free, uninterrupted, or fully compatible with every third-party URL format.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Limitation of Liability</h2>
          <p>
            Under no circumstances shall reeldropnow, its developers, or affiliates be liable for any direct, indirect, incidental, consequential, or punitive damages resulting from your 
            use or inability to use the service, or any unauthorized use of downloaded material.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. Modifications to Terms</h2>
          <p>
            We reserve the right to revise or replace these Terms at our discretion. Continuing to access reeldropnow after revisions become effective constitutes your acceptance of the updated terms.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">8. Contact Information</h2>
          <p>
            If you have questions or inquiries regarding these Terms of Service, please reach out to:
            <br />
            <strong>Email:</strong> <a href="mailto:support@reeldropnow.com" className="text-indigo-600 underline">support@reeldropnow.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
