const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');

function createPage(route, title, description, h1, content) {
    const dir = path.join(appDir, route);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    const tsx = `import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${title} | REELDROP',
  description: '${description}',
  alternates: { canonical: 'https://www.reeldrop.com/${route}' }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">${h1}</h1>
      <div className="prose prose-indigo max-w-none">
        ${content}
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Try REELDROP Now
        </Link>
      </div>
    </div>
  );
}`;
    fs.writeFileSync(path.join(dir, 'page.tsx'), tsx);
}

// Guides
createPage('guides/how-to-download-instagram-reels', 'How to Download Instagram Reels', 'A complete guide on how to safely download public Instagram Reels directly to your device.', 'How to Download Public Instagram Reels', '<p>Downloading a public Instagram Reel is simple with the right tool. REELDROP allows you to extract media directly from public URLs without installing shady apps or giving away your password.</p><h2>Step 1: Copy the Link</h2><p>Open Instagram, find the public Reel, tap the Share icon, and select <strong>Copy Link</strong>.</p><h2>Step 2: Paste in REELDROP</h2><p>Head over to our homepage and paste the link. We only support public reels.</p><h2>Step 3: Download</h2><p>If the Reel is public and accessible, your MP4 download will start immediately!</p>');

createPage('guides/instagram-reel-downloader-iphone', 'Instagram Reel Downloader for iPhone', 'Learn how to save Instagram Reels straight to your iPhone camera roll using REELDROP.', 'Downloading Reels on Your iPhone', '<p>Apple makes it tricky to download files directly from the web, but iOS 13+ Safari handles it perfectly.</p><h2>Using Safari</h2><p>Simply open REELDROP in Safari, paste your public Instagram Reel link, and hit download. Safari will prompt you to download the file. You can then open your Safari Downloads list, select the video, and tap <strong>Save Video</strong> to move it to your Camera Roll.</p>');

createPage('guides/instagram-reel-downloader-pc', 'Instagram Reel Downloader for PC', 'Save Instagram Reels to your Windows or Mac PC in high quality MP4 format.', 'Saving Reels on Your PC', '<p>Whether you are on Windows or macOS, REELDROP is optimized for desktop browsers. Just copy the Instagram URL from your web browser\'s address bar and paste it into REELDROP.</p><p>We highly recommend using a modern browser like Chrome, Edge, or Firefox for the best experience. The file will save directly to your default Downloads folder.</p>');

// SEO Landing Pages
createPage('instagram-reel-downloader', 'Instagram Reel Downloader', 'Download public Instagram Reels quickly and securely. Free online tool to save Instagram video content to MP4.', 'Instagram Reel Downloader', '<p>REELDROP is a dedicated Instagram Reel Downloader for public content. We believe in simplicity and privacy.</p><h2>Why Choose REELDROP?</h2><ul><li>No login required</li><li>No apps to install</li><li>Fast MP4 processing</li><li>Strictly respects privacy by only accessing public links</li></ul><p>Our tool gracefully handles extraction, but remember that Instagram frequently changes their access rules, so some reels may occasionally fail if restricted.</p>');

createPage('download-instagram-reels', 'Download Instagram Reels', 'The simplest way to download Instagram Reels. Fast, secure, and built for modern devices.', 'Download Instagram Reels', '<p>Looking to download Instagram Reels for offline viewing? REELDROP is the perfect companion.</p><h2>Limitations</h2><p>Please note that we cannot bypass Instagram\'s anti-bot protections or private account restrictions. We only process URLs that are fully public and supported by our backend extraction engine.</p>');

console.log('Pages generated!');
