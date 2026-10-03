import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Instagram Reel Downloader - Download Public Reels | REELDROP',
  description: 'Download supported public Instagram Reels online with REELDROP. Paste a public Reel URL, process it, and download the available media quickly and easily.',
  alternates: {
    canonical: 'https://www.reeldrop.com',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'REELDROP - Public Reels. Simple Downloads.',
    description: 'Download supported public Instagram Reels online with REELDROP. Paste a public Reel URL, process it, and download the available media quickly and easily.',
    url: 'https://www.reeldrop.com',
    siteName: 'REELDROP',
    images: [
      {
        url: 'https://www.reeldrop.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'REELDROP',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REELDROP - Public Reels. Simple Downloads.',
    description: 'Download supported public Instagram Reels online with REELDROP. Paste a public Reel URL, process it, and download the available media quickly and easily.',
    images: ['https://www.reeldrop.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "REELDROP",
    "url": "https://www.reeldrop.com",
    "description": "Download supported public Instagram Reels online with REELDROP. Paste a public Reel URL, process it, and download the available media quickly and easily.",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "All"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <main className="min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-200 mt-auto py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">REELDROP</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/" className="hover:text-indigo-600">Home</a></li>
                  <li><a href="/instagram-reel-downloader" className="hover:text-indigo-600">Instagram Reel Downloader</a></li>
                  <li><a href="/reel-downloader" className="hover:text-indigo-600">Reel Downloader</a></li>
                  <li><a href="/instagram-video-downloader" className="hover:text-indigo-600">Instagram Video Downloader</a></li>
                </ul>
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
                <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/privacy" className="hover:text-indigo-600">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-indigo-600">Terms of Service</a></li>
                  <li><a href="/dmca" className="hover:text-indigo-600">DMCA</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
              <p>REELDROP is an independent service. Not affiliated with Instagram.</p>
              <p>&copy; {new Date().getFullYear()} REELDROP. Public Reels. Simple Downloads.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
