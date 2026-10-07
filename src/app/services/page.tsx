import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services & Products | reeldropnow Media Suite',
  description: 'Explore reeldropnow free media utilities: Instagram Reels downloader, video converter, audio extractor, and high-speed streaming utilities.',
  alternates: { canonical: 'https://reeldropnow.com/services' }
};

export default function Services() {
  const servicesList = [
    {
      title: 'Instagram Reels Downloader',
      badge: 'Most Popular',
      desc: 'Extract full HD 1080p Instagram Reels in MP4 format without quality compression or added watermarks. Preserves original frame rates and audio fidelity.',
      link: '/instagram-reel-downloader',
      icon: '🎬'
    },
    {
      title: 'Instagram Video Downloader',
      badge: 'High Speed',
      desc: 'Save standard Instagram feed videos, IGTV clips, and timeline posts directly into your camera roll or downloads folder in seconds.',
      link: '/instagram-video-downloader',
      icon: '📹'
    },
    {
      title: 'Original Audio Extraction',
      badge: 'Crystal Audio',
      desc: 'Retrieve full stereo audio tracks from trending reels even when native saving options mute licensed commercial music.',
      link: '/guides/how-to-save-instagram-reels',
      icon: '🎵'
    },
    {
      title: 'Edge Cloud Stream Delivery',
      badge: 'Global CDN',
      desc: 'Powered by Cloudflare global edge network and rotating IP proxies to bypass geo-restrictions and deliver 10 Gbps peak download bandwidth.',
      link: '/',
      icon: '⚡'
    },
    {
      title: 'Cross-Device Compatibility Suite',
      badge: 'Universal',
      desc: 'Optimized web application for iPhone (iOS Safari), Android (Chrome/Samsung), Windows PC, and Apple macOS without any software installation.',
      link: '/guides/instagram-reel-downloader-iphone',
      icon: '📱'
    },
    {
      title: 'Privacy-First Sandbox Pipeline',
      badge: '100% Anonymous',
      desc: 'Zero account logins, zero passwords required, and no persistent storage of downloaded files on our servers for absolute user security.',
      link: '/privacy',
      icon: '🛡️'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <nav className="text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-indigo-600">Home</Link> &gt; <span className="text-gray-700">Services &amp; Products</span>
        </nav>

        <header className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            Our Offerings
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Services &amp; Digital Products
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive suite of free, high-speed public media utilities designed for content creators, researchers, and everyday social media users.
          </p>
        </header>

        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Available Tools &amp; Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100 flex flex-col justify-between hover:border-indigo-200 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-full">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>
              <Link 
                href={service.link}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 group"
              >
                Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Recommended Guides & Platform Resources */}
        <section className="bg-white rounded-3xl p-8 mb-16 border border-gray-100 shadow-xs">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended Device Guides &amp; Tutorials</h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-6">
            Get step-by-step instructions for extracting high-definition videos tailored to your specific smartphone or operating system.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
            <Link href="/guides/instagram-reel-downloader-iphone" className="p-4 bg-gray-50 hover:bg-indigo-50 rounded-xl border border-gray-100 transition-colors">
              <span className="block font-bold text-sm text-gray-900 mb-1">iPhone &amp; iPad</span>
              <span className="text-gray-500 font-normal">Save directly to iOS Camera Roll via Safari</span>
            </Link>
            <Link href="/guides/instagram-reel-downloader-android" className="p-4 bg-gray-50 hover:bg-indigo-50 rounded-xl border border-gray-100 transition-colors">
              <span className="block font-bold text-sm text-gray-900 mb-1">Android Devices</span>
              <span className="text-gray-500 font-normal">Download straight into Google/Samsung Gallery</span>
            </Link>
            <Link href="/guides/instagram-reel-downloader-pc" className="p-4 bg-gray-50 hover:bg-indigo-50 rounded-xl border border-gray-100 transition-colors">
              <span className="block font-bold text-sm text-gray-900 mb-1">PC &amp; Mac</span>
              <span className="text-gray-500 font-normal">Save 1080p clips to Windows &amp; macOS storage</span>
            </Link>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap justify-between items-center gap-4 text-xs font-bold text-indigo-600">
            <Link href="/pricing" className="hover:underline">Transparent $0 Free Pricing &rarr;</Link>
            <Link href="/reviews" className="hover:underline">Read Creator Testimonials &rarr;</Link>
            <Link href="/faq" className="hover:underline">Frequently Asked Questions &rarr;</Link>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-indigo-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Need to Download a Reel Right Now?</h2>
          <p className="text-indigo-100 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Paste your Instagram link and download full HD videos directly to your device within seconds. No sign-up required.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-indigo-600 font-bold rounded-xl text-sm shadow-md hover:bg-indigo-50 transition-colors"
          >
            Launch Downloader
          </Link>
        </div>
      </div>
    </div>
  );
}
