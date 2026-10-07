import type { NextConfig } from "next";

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://pagead2.googlesyndication.com https://adservice.google.com https://www.googletagservices.com https://tpc.googlesyndication.com https://www.googletagmanager.com https://fundingchoicesmessages.google.com https://*.google.com https://*.doubleclick.net https://ep1.adtrafficquality.google.com; frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com https://*.doubleclick.net https://fundingchoicesmessages.google.com; img-src 'self' data: blob: https://pagead2.googlesyndication.com https://www.google.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://*.gstatic.com https://*.google-analytics.com https://*.googletagmanager.com https://fundingchoicesmessages.google.com; font-src 'self' data: https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; media-src 'self' blob:; connect-src 'self' https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://fundingchoicesmessages.google.com https://*.google.com https://ep1.adtrafficquality.google.com;" }
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.reeldropnow.com' }],
        destination: 'https://reeldropnow.com/:path*',
        permanent: true,
      },
      {
        source: '/cdn-cgi/l/email-protection',
        destination: '/contact',
        permanent: true,
      },
      // Consolidate duplicate landing pages to primary /instagram-reel-downloader
      {
        source: '/download-instagram-reels',
        destination: '/instagram-reel-downloader',
        permanent: true,
      },
      {
        source: '/public-instagram-reel-downloader',
        destination: '/instagram-reel-downloader',
        permanent: true,
      },
      {
        source: '/reel-downloader',
        destination: '/instagram-reel-downloader',
        permanent: true,
      },
      // Consolidate competing blog URLs to canonical guides or tools
      {
        source: '/blog/how-to-download-instagram-reels',
        destination: '/guides/how-to-download-instagram-reels',
        permanent: true,
      },
      {
        source: '/blog/how-to-download-instagram-reels-on-iphone',
        destination: '/guides/instagram-reel-downloader-iphone',
        permanent: true,
      },
      {
        source: '/blog/how-to-download-instagram-reels-on-android',
        destination: '/guides/instagram-reel-downloader-android',
        permanent: true,
      },
      {
        source: '/blog/how-to-download-instagram-stories',
        destination: '/instagram-story-downloader',
        permanent: true,
      },
      {
        source: '/blog/how-to-download-instagram-story-on-iphone',
        destination: '/instagram-story-downloader',
        permanent: true,
      },
      {
        source: '/blog/how-to-download-instagram-story-on-android',
        destination: '/instagram-story-downloader',
        permanent: true,
      },
      {
        source: '/blog/instagram-reels-to-mp3',
        destination: '/blog/instagram-reels-to-mp3-download-audio',
        permanent: true,
      },
      {
        source: '/blog/download-instagram-story-without-screenshot',
        destination: '/blog/how-to-download-instagram-stories-without-screenshots',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders
      },
      {
        source: '/_next/:path*',
        headers: securityHeaders
      }
    ];
  }
};

export default nextConfig;
