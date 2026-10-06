import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'reeldropnow - Download Instagram Reels Video Online',
  description: 'reeldropnow: Download Instagram Reels Video online to your device. 100% free, unlimited, high quality MP4 video downloader with no watermarks.',
  keywords: [
    'reeldropnow',
    'Instagram Reels Downloader',
    'Download Instagram Reels Video',
    'Instagram Video Downloader online',
    'Save Instagram Reels MP4',
    'Fast Instagram Reel Download',
    'Free Reels Downloader'
  ],
  alternates: {
    canonical: 'https://reeldropnow.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'reeldropnow - Download Instagram Reels Video Online',
    description: 'Download Instagram Reels Video online to your device. Completely free service with unlimited downloads and original audio.',
    url: 'https://reeldropnow.com',
    siteName: 'reeldropnow',
    images: [
      {
        url: 'https://reeldropnow.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'reeldropnow - Download Instagram Reels Video Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'reeldropnow - Download Instagram Reels Video Online',
    description: 'Download Instagram Reels Video online to your device. Fast, safe, free MP4 video downloads.',
    images: ['https://reeldropnow.com/og-image.jpg'],
  },
  verification: {
    google: 'googlede2c616247bee979',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any', type: 'image/png' },
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.png',
  },
  other: {
    'google-adsense-account': 'ca-pub-1524992524941156',
    'geo.region': 'US',
    'geo.placename': 'Global',
    'geo.position': '0;0',
    'ICBM': '0, 0',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "reeldropnow",
    "alternateName": ["ReelDrop", "ReelDropNow", "Instagram Reels Downloader"],
    "url": "https://reeldropnow.com",
    "description": "Download Instagram Reels Video online to your device. Free, fast and high-speed MP4 downloads.",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is reeldropnow free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a completely free service with no limits or additional costs. We embed some ads that help us maintain our servers and bandwidth."
        }
      },
      {
        "@type": "Question",
        "name": "How to download Instagram Reels online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply copy the Instagram Reel link, paste it into reeldropnow, and click 'Download Media'. Your high-definition MP4 video will download directly to your device."
        }
      },
      {
        "@type": "Question",
        "name": "What are the copyright and legal terms for downloading Reels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Downloading content from Instagram without the permission of the owner may violate the platform's terms of service and could result in account suspension if used without concern. Only download content you have permission to use or that is licensed under Creative Commons."
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1524992524941156"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body className={inter.className}>
        <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img 
                src="/logo.svg" 
                alt="reeldropnow logo" 
                className="w-9 h-9 rounded-xl shadow-xs group-hover:scale-105 transition-transform" 
              />
              <span className="font-black text-xl tracking-tight text-gray-900">
                reeldrop<span className="text-indigo-600">now</span>
              </span>
            </Link>
            <nav className="flex items-center gap-5 text-sm font-medium text-gray-600">
              <Link href="/instagram-reel-downloader" className="hover:text-indigo-600 transition-colors hidden sm:inline-block">
                Reels
              </Link>
              <Link href="/instagram-video-downloader" className="hover:text-indigo-600 transition-colors hidden sm:inline-block">
                Videos
              </Link>
              <Link href="/guides/how-to-download-instagram-reels" className="hover:text-indigo-600 transition-colors">
                Guide
              </Link>
              <Link 
                href="/" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors shadow-xs"
              >
                Download Now
              </Link>
            </nav>
          </div>
        </header>
        <main className="min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-200 mt-auto py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <img src="/logo.svg" alt="reeldropnow logo" className="w-6 h-6 rounded-lg" />
                  <h3 className="font-bold text-gray-900 text-base">reeldrop<span className="text-indigo-600">now</span></h3>
                </div>
                <p className="text-xs text-gray-500 mb-4">Download Instagram Reels Video online to your device effortlessly.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/" className="hover:text-indigo-600">Home</a></li>
                  <li><a href="/instagram-reel-downloader" className="hover:text-indigo-600">Instagram Reel Downloader</a></li>
                  <li><a href="/reel-downloader" className="hover:text-indigo-600">Reel Downloader</a></li>
                  <li><a href="/instagram-video-downloader" className="hover:text-indigo-600">Instagram Video Downloader</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Pricing & Limits</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  We offer a completely free service with no limits or additional costs. We embed some ads that help us maintain our services.
                </p>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2.5 py-1 rounded-full font-semibold">
                  100% Free Forever
                </span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Guides</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/guides/how-to-download-instagram-reels" className="hover:text-indigo-600">How to Download Reels</a></li>
                  <li><a href="/guides/instagram-reel-downloader-iphone" className="hover:text-indigo-600">Reels on iPhone</a></li>
                  <li><a href="/guides/instagram-reel-downloader-pc" className="hover:text-indigo-600">Reels on PC</a></li>
                  <li><a href="/guides/instagram-video-download-guide" className="hover:text-indigo-600">Video Guide</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Legal & Compliance</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/privacy" className="hover:text-indigo-600">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-indigo-600">Terms of Service</a></li>
                  <li><a href="/dmca" className="hover:text-indigo-600">DMCA Notice</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
              <p>reeldropnow is an independent public media extraction utility. Not affiliated with Instagram™ or Meta™.</p>
              <p>&copy; {new Date().getFullYear()} reeldropnow. Download Instagram Reels Video online to your device.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
