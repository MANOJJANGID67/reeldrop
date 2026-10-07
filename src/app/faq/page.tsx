import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | reeldropnow Help Center',
  description: 'Find quick answers about downloading Instagram Reels, audio extraction, device support, and troubleshooting on reeldropnow.',
  alternates: { canonical: 'https://reeldropnow.com/faq' }
};

export default function FAQ() {
  const faqList = [
    {
      q: 'What is reeldropnow?',
      a: 'reeldropnow is a free, web-based media conversion utility that allows you to download public Instagram Reels, videos, and audio streams in high-definition 1080p MP4 format directly to your phone or computer without installing software.'
    },
    {
      q: 'Is reeldropnow completely free to use?',
      a: 'Yes, 100% free forever. There are no registration forms, no premium tiers, no trial periods, and no daily download limitations. We fund our edge server costs through clean, non-intrusive advertisements.'
    },
    {
      q: 'Can I download Reels from private Instagram accounts?',
      a: 'No. reeldropnow strictly honors Instagram user privacy and security protocols. Our service only processes publicly available media. We do not and will never attempt to bypass private profile permissions.'
    },
    {
      q: 'Do the downloaded Reels include sound and original audio?',
      a: 'Yes! Unlike native screen recordings or some downloaders that strip audio, reeldropnow extracts the full original MP4 video stream with synchronized stereo audio.'
    },
    {
      q: 'Are watermarks added to the downloaded videos?',
      a: 'No. All videos downloaded through reeldropnow are 100% clean and free of watermarks or added branding logos.'
    },
    {
      q: 'How do I save Instagram Reels on an iPhone or iPad?',
      a: 'Open reeldropnow.com in Safari on your iPhone, paste the copied reel URL, and tap Download. Safari will prompt you to save the file. Once downloaded, open the Safari downloads manager and tap "Save Video" to move it into your Photos camera roll.'
    },
    {
      q: 'Where do the downloaded files get saved on Android?',
      a: 'On Android devices, videos are saved directly into your internal Downloads directory. You can instantly access them via Google Photos, Samsung Gallery, or your device file manager.'
    },
    {
      q: 'Do I need to install an app or browser extension?',
      a: 'No. reeldropnow is completely web-based and runs smoothly inside any modern mobile or desktop browser including Chrome, Safari, Edge, Firefox, and Brave.'
    },
    {
      q: 'Is it legal to download Instagram Reels?',
      a: 'Downloading public content for personal offline viewing, research, or archival is widely permitted. However, you must respect copyright laws and not redistribute, monetize, or republish someone else’s creative work without their explicit permission.'
    },
    {
      q: 'Why did an extraction fail or return an error?',
      a: 'Extraction errors usually occur if the Instagram post is private, has been deleted by the owner, or if the URL copied was incomplete. Please verify the URL is public and in the format https://www.instagram.com/reel/...'
    }
  ];

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-indigo-600">Home</Link> &gt; <span className="text-gray-700">FAQ</span>
        </nav>

        <header className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            Help &amp; Answers
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Got questions? We have answers. Learn how reeldropnow works, troubleshooting tips, and legal guidelines.
          </p>
        </header>

        <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4 mb-16">
          {faqList.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-gray-100">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 flex items-start gap-3">
                <span className="text-indigo-600 font-extrabold">Q.</span>
                <span>{item.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* Still Have Questions Box */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 text-center shadow-xs">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Still Have Questions or Need Help?</h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-6">
            Our support desk is always happy to assist with broken URLs, edge connection errors, or general inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
            >
              Contact Support
            </Link>
            <Link 
              href="/" 
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs rounded-xl transition-colors"
            >
              Back to Downloader
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
