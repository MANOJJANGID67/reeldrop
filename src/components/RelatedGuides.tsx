import Link from 'next/link';

interface RelatedGuidesProps {
  currentSlug: string;
}

const ALL_GUIDES = [
  {
    slug: 'how-to-download-instagram-reels',
    title: 'How to Download Instagram Reels in Full HD',
    desc: 'Step-by-step tutorial on downloading public reels in 1080p MP4 quality.',
    href: '/guides/how-to-download-instagram-reels'
  },
  {
    slug: 'how-to-save-instagram-reels',
    title: 'Save Instagram Reels with Original Audio',
    desc: 'Preserve stereo audio and commercial soundtracks without muting.',
    href: '/guides/how-to-save-instagram-reels'
  },
  {
    slug: 'instagram-reel-downloader-iphone',
    title: 'Download Reels on iPhone to Camera Roll',
    desc: 'Save videos directly to iOS Safari downloads and Photos app.',
    href: '/guides/instagram-reel-downloader-iphone'
  },
  {
    slug: 'instagram-reel-downloader-android',
    title: 'Download Reels on Android to Gallery',
    desc: 'Save full HD clips directly to Samsung or Google Photos Gallery.',
    href: '/guides/instagram-reel-downloader-android'
  },
  {
    slug: 'instagram-reel-downloader-pc',
    title: 'Download Reels on PC & Mac',
    desc: 'Download videos using Chrome, Edge, and Safari on desktop.',
    href: '/guides/instagram-reel-downloader-pc'
  },
  {
    slug: 'how-to-download-public-instagram-reels',
    title: 'Download Public Instagram Reels Safely',
    desc: 'Learn about public vs private reels and secure offline saving.',
    href: '/guides/how-to-download-public-instagram-reels'
  },
  {
    slug: 'instagram-reel-downloader-guide',
    title: 'Instagram Reel Downloader User Guide',
    desc: 'Technical architecture, edge extraction, and troubleshooting tips.',
    href: '/guides/instagram-reel-downloader-guide'
  },
  {
    slug: 'instagram-video-download-guide',
    title: 'Instagram Video Download Guide',
    desc: 'Complete manual for saving feed videos, IGTV clips, and carousels.',
    href: '/guides/instagram-video-download-guide'
  }
];

export default function RelatedGuides({ currentSlug }: RelatedGuidesProps) {
  const related = ALL_GUIDES.filter((g) => g.slug !== currentSlug).slice(0, 4);

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Related Guides &amp; Tutorials</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {related.map((guide) => (
          <Link
            key={guide.slug}
            href={guide.href}
            className="p-4 bg-gray-50 hover:bg-indigo-50/60 rounded-xl border border-gray-100 hover:border-indigo-200 transition-colors block group"
          >
            <h4 className="font-bold text-gray-900 text-sm group-hover:text-indigo-600 transition-colors mb-1">
              {guide.title}
            </h4>
            <p className="text-xs text-gray-600 line-clamp-2">
              {guide.desc}
            </p>
          </Link>
        ))}
      </div>

      <div className="bg-white p-5 rounded-xl border border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
        <span className="text-gray-500">More Platform Resources:</span>
        <div className="flex flex-wrap gap-4 text-indigo-600">
          <Link href="/services" className="hover:underline">Media Services Suite &rarr;</Link>
          <Link href="/pricing" className="hover:underline">100% Free Pricing &rarr;</Link>
          <Link href="/reviews" className="hover:underline">User Reviews (4.9★) &rarr;</Link>
          <Link href="/faq" className="hover:underline">Help &amp; FAQ Center &rarr;</Link>
          <Link href="/contact" className="hover:underline">Contact Support &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
