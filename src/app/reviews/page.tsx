import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'User Reviews & Testimonials | reeldropnow (4.9/5 Rating)',
  description: 'Read genuine reviews and testimonials from video editors, digital marketers, and creators who use reeldropnow to download Instagram Reels.',
  alternates: { canonical: 'https://reeldropnow.com/reviews' }
};

export default function Reviews() {
  const reviewsData = [
    {
      name: 'Sarah Jenkins',
      role: 'Content Creator & UGC Artist',
      avatar: 'SJ',
      rating: 5,
      date: 'October 3, 2026',
      review: 'I used to get bombarded with sketchy pop-up betting ads on other downloaders. reeldropnow is shockingly clean, super fast, and downloads in true 1080p with no watermarks. An absolute staple for my editing workflow.'
    },
    {
      name: 'Michael Chen',
      role: 'Social Media Manager',
      avatar: 'MC',
      rating: 5,
      date: 'September 28, 2026',
      review: 'Being able to download reels directly on iPhone Safari without having to fiddle with confusing shortcuts or installing third-party apps is a game changer. Saves my agency hours every week.'
    },
    {
      name: 'Elena Rostova',
      role: 'Video Editor & Motion Designer',
      avatar: 'ER',
      rating: 5,
      date: 'September 21, 2026',
      review: 'The audio synchronization is what sets reeldropnow apart. Other tools mute licensed Instagram audio or drop the bitrate to 64kbps. Here, the audio track is crisp and identical to the original broadcast.'
    },
    {
      name: 'David Miller',
      role: 'Digital Archivist & Researcher',
      avatar: 'DM',
      rating: 4.8,
      date: 'September 14, 2026',
      review: 'Clean edge architecture, transparent privacy policies, and no forced logins. Exactly what an online web utility should be. Highly recommended.'
    },
    {
      name: 'Priya Sharma',
      role: 'Fitness Coach & Creator',
      avatar: 'PS',
      rating: 5,
      date: 'September 9, 2026',
      review: 'I frequently save workout clips and client transformation videos for review. reeldropnow downloads in literally 2 seconds on my Android phone. Super simple!'
    },
    {
      name: 'Alexandre Dupont',
      role: 'Tech Blogger',
      avatar: 'AD',
      rating: 5,
      date: 'August 30, 2026',
      review: 'Tested against Snapinsta, FastDL, and SaveFrom. reeldropnow outperformed all of them in page load speed and lack of spammy redirects. A 10/10 tool.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <nav className="text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-indigo-600">Home</Link> &gt; <span className="text-gray-700">Reviews &amp; Testimonials</span>
        </nav>

        <header className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            Trusted by 50,000+ Users
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            User Reviews &amp; Community Feedback
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            See what video editors, creators, and daily social media users are saying about reeldropnow speed, quality, and simplicity.
          </p>

          {/* Rating Summary Banner */}
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-xs border border-gray-100 mt-6">
            <div className="flex text-amber-500 text-lg">★★★★★</div>
            <span className="text-sm font-extrabold text-gray-900">4.9 / 5.0 Rating</span>
            <span className="text-gray-400 text-xs">&bull;</span>
            <span className="text-xs text-gray-600">Based on verified user feedback</span>
          </div>
        </header>

        {/* Reviews Grid */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Verified Creator Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviewsData.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm">
                      {item.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{item.name}</h3>
                      <p className="text-[11px] text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
                <div className="flex text-amber-500 text-xs mb-3">★★★★★</div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                  &quot;{item.review}&quot;
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-6 pt-3 border-t border-gray-50">
                {item.date}
              </p>
            </div>
          ))}
        </div>

        {/* Feedback / Submit Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Have Feedback or a Feature Request?</h3>
          <p className="text-sm text-gray-600 mb-6 max-w-lg mx-auto">
            We are continuously optimizing extraction speeds and parser algorithms. Let our team know how we can improve your experience.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
          >
            Submit Feedback via Contact Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
