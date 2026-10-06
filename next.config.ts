import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://pagead2.googlesyndication.com https://adservice.google.com https://www.googletagservices.com https://tpc.googlesyndication.com; frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com; img-src 'self' data: blob: https://pagead2.googlesyndication.com https://www.google.com https://googleads.g.doubleclick.net https://*.gstatic.com; font-src 'self' data:; media-src 'self' blob:; connect-src 'self' https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net;" }
        ]
      }
    ];
  }
};

export default nextConfig;
