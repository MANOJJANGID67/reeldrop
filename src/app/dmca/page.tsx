import { Metadata } from 'next';
import Link from 'next/link';
import EmailLink from '@/components/EmailLink';

export const metadata: Metadata = {
  title: 'DMCA & Copyright Policy | reeldropnow',
  description: 'Review the reeldropnow DMCA copyright policy, intellectual property guidelines, content removal requests, and official takedown procedure.',
  alternates: { canonical: 'https://reeldropnow.com/dmca' }
};

export default function Dmca() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">DMCA Copyright Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Digital Millennium Copyright Act Notice</p>

        <div className="prose prose-indigo max-w-none text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>reeldropnow</strong> (<Link href="/" className="text-indigo-600 underline">https://reeldropnow.com</Link>) 
            respects the intellectual property rights of copyright holders and complies with the provisions of the Digital Millennium Copyright Act (17 U.S.C. &sect; 512).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Notice and Takedown Procedure</h2>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. Technical Role of reeldropnow</h3>
          <p>
            reeldropnow functions strictly as an automated, transient technical pipeline. We do not host, store, index, cache, or maintain any video files or media content 
            on our servers. All media data requested by users is extracted on the fly from publicly available third-party sources and delivered directly to the user&apos;s client device.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. Filing a DMCA Takedown Notice</h3>
          <p>
            If you are a copyright owner or an authorized agent thereof and believe that any material accessed through our utility infringes upon your copyright, you may submit a formal notification 
            in writing containing the following required information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
            <li>Identification of the copyrighted work claimed to have been infringed.</li>
            <li>Identification of the specific URL(s) on Instagram where the material claimed to be infringing is located.</li>
            <li>Information reasonably sufficient to permit us to contact you, such as your full name, physical mailing address, telephone number, and valid email address.</li>
            <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
            <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Designated DMCA Agent Contact</h3>
          <p>
            Please direct all formal DMCA notices and copyright communications to our designated agent via email:
            <br />
            <strong>Email:</strong> <EmailLink email="dmca@reeldropnow.com" className="text-indigo-600 underline font-semibold" />
            <br />
            <strong>Alternative Support:</strong> <EmailLink email="support@reeldropnow.com" className="text-indigo-600 underline" />
          </p>
          <p className="text-sm text-gray-500 italic">
            Note: Because we do not store content on our servers, to permanently remove a video from being accessed across the internet, you should also report the content directly to Instagram.
          </p>
        </div>
      </div>
    </div>
  );
}
