import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing & Plans | reeldropnow 100% Free Forever',
  description: 'reeldropnow pricing: 100% free forever with unlimited Instagram Reels downloads, zero subscriptions, and no hidden fees.',
  alternates: { canonical: 'https://reeldropnow.com/pricing' }
};

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <nav className="text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-indigo-600">Home</Link> &gt; <span className="text-gray-700">Pricing</span>
        </nav>

        <header className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            Transparent &amp; Free
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            We believe public digital media utilities should be accessible to everyone worldwide without paywalls or restrictive download caps.
          </p>
        </header>

        {/* Pricing Card */}
        <div className="bg-white rounded-3xl shadow-xl border-2 border-indigo-600 p-8 sm:p-12 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-extrabold px-6 py-1.5 rounded-bl-2xl uppercase tracking-wider">
            Most Popular
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-gray-100 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Community Edition</h2>
              <p className="text-sm text-gray-500 mt-1">Unlimited access for creators, researchers, and personal users.</p>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-4xl sm:text-5xl font-black text-gray-900">$0</span>
              <span className="text-gray-500 text-sm ml-1 font-medium">/ forever</span>
            </div>
          </div>

          <div className="py-8 space-y-4">
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider text-gray-400">Included Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="flex items-center gap-2.5">
                <span className="text-green-500 font-bold">✓</span>
                <span>Unlimited daily Reel downloads</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-green-500 font-bold">✓</span>
                <span>Full HD 1080p MP4 resolution</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-green-500 font-bold">✓</span>
                <span>Zero watermarks added</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-green-500 font-bold">✓</span>
                <span>Original audio stream synchronization</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-green-500 font-bold">✓</span>
                <span>No account registration or login</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-green-500 font-bold">✓</span>
                <span>Blazing-fast Cloudflare Edge bandwidth</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-green-500 font-bold">✓</span>
                <span>iPhone, Android &amp; PC browser support</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-green-500 font-bold">✓</span>
                <span>100% private &amp; anonymous processing</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              *How we fund servers: Non-intrusive ads via Google AdSense help cover bandwidth and server hosting costs.
            </p>
            <Link 
              href="/" 
              className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl text-center shadow-md transition-colors"
            >
              Start Free Download
            </Link>
          </div>
        </div>

        {/* Pricing FAQ */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xs">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Pricing Questions</h3>
          <div className="space-y-6 text-sm text-gray-700">
            <div>
              <h4 className="font-bold text-gray-900">Are there really no hidden costs?</h4>
              <p className="text-gray-600 mt-1 leading-relaxed">
                Yes. reeldropnow is 100% free of charge. We do not require credit cards, trial memberships, or subscriptions.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Is there a daily download limit?</h4>
              <p className="text-gray-600 mt-1 leading-relaxed">
                No. You can download as many public Instagram Reels and videos as you need throughout the day.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Why is this service free?</h4>
              <p className="text-gray-600 mt-1 leading-relaxed">
                Our infrastructure and bandwidth expenses are funded through clean, non-intrusive third-party advertising partners like Google AdSense.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Can creators and researchers use reeldropnow for free?</h4>
              <p className="text-gray-600 mt-1 leading-relaxed">
                Yes! Creators, video editors, social media analysts, and everyday users can all access unlimited downloads at zero cost.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Will reeldropnow ever add paid paywalls?</h4>
              <p className="text-gray-600 mt-1 leading-relaxed">
                No. Our core utility will always remain free. We believe in keeping essential digital tools open, ad-light, and accessible to everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
          <span className="text-gray-500">Explore reeldropnow:</span>
          <div className="flex flex-wrap gap-4 text-indigo-600">
            <Link href="/services" className="hover:underline">Digital Services Suite &rarr;</Link>
            <Link href="/reviews" className="hover:underline">User Testimonials &rarr;</Link>
            <Link href="/faq" className="hover:underline">Help &amp; FAQ Center &rarr;</Link>
            <Link href="/about" className="hover:underline">About Our Mission &rarr;</Link>
            <Link href="/contact" className="hover:underline">Contact Desk &rarr;</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
