import { Metadata } from 'next';
import Link from 'next/link';
import EmailLink from '@/components/EmailLink';

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
        <p className="text-sm text-gray-500 mb-8">Last Updated: October 7, 2026</p>

        <div className="prose prose-indigo max-w-none text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            Please read these terms before you use <strong>reeldropnow</strong> (<Link href="/" className="text-indigo-600 underline">https://reeldropnow.com</Link>). 
            By using our website, you agree to follow these simple rules. If you do not agree with any part of these terms, please do not use our site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Agreement and Guidelines</h2>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. Description of Service</h3>
          <p>
            reeldropnow is a free online tool. It lets you download public Instagram Reels, videos, and audio clips directly to your device. 
            You can save videos for your personal use, study, or offline viewing.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. Permitted and Fair Use</h3>
          <p>
            You agree to use our site in an honest, ethical, and lawful way. You agree to follow these basic guidelines:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Only paste links to public posts that are freely visible on the web.</li>
            <li>Do not try to bypass private accounts or password screens.</li>
            <li>Respect copyright rules and only save clips you have the right to download for personal use.</li>
            <li>Do not sell or re-upload downloaded media to make money without permission from the creator.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Independent Service</h3>
          <p>
            reeldropnow is an independent third-party website. We are <strong>not</strong> owned by, run by, or linked with Instagram or Meta Platforms, Inc. 
            All logos, brand names, and trademarks belong to their respective owners.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">4. Copyright and Content Rights</h3>
          <p>
            We do not host or store any video files on our web servers. Our system only helps you find the direct public media file. 
            If you own copyrighted work and want it blocked from our tool, please visit our <Link href="/dmca" className="text-indigo-600 underline font-semibold">DMCA Policy</Link>. 
            We review and act on valid requests quickly.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">5. Service Availability</h3>
          <p>
            We provide this website free of charge on an as-is basis. We work hard to keep it fast, reliable, and up to date. 
            However, we cannot guarantee that the site will never experience short downtime or technical hiccups.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">6. Limits of Liability</h3>
          <p>
            We are not liable for how you use the videos you save. Each user is responsible for following copyright laws and local rules when downloading public content.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">7. Updates to These Terms</h3>
          <p>
            We may update these terms from time to time. When we make changes, we will post the updated version on this page. 
            If you continue using the site after changes are posted, you accept the new terms.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">8. Contact Us</h3>
          <p>
            If you have questions about these terms, please contact our team:
            <br />
            <strong>Email:</strong> <EmailLink email="support@reeldropnow.com" className="text-indigo-600 underline" />
          </p>
        </div>
      </div>
    </div>
  );
}
