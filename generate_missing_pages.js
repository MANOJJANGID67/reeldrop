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
      <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/" className="hover:text-indigo-600">Home</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-700" aria-current="page">${h1}</span>
          </li>
        </ol>
      </nav>
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

// Missing Landing Pages
createPage('reel-downloader', 'Reel Downloader Online', 'Download supported public Instagram Reels with our online Reel Downloader. No installation required.', 'Reel Downloader', '<p>Welcome to our dedicated Reel Downloader page. REELDROP is designed specifically to parse, extract, and deliver supported public media directly to your device.</p><h2>What makes this different?</h2><p>Our focus is strictly on public URLs and privacy. We do not store your downloads or track your Instagram usage.</p>');

createPage('instagram-video-downloader', 'Instagram Video Downloader', 'Download public Instagram videos using our fast, secure, online extraction tool.', 'Instagram Video Downloader', '<p>While originally focused on Reels, REELDROP also acts as a public Instagram Video Downloader where supported by our underlying extraction engine.</p><h2>How it works</h2><p>If the Instagram video URL is public and not restricted by Instagram&apos;s anti-bot measures, pasting the link on our homepage will yield a direct MP4 download.</p>');

createPage('public-instagram-reel-downloader', 'Public Instagram Reel Downloader', 'Securely download public Instagram Reels without bypassing authentication or privacy restrictions.', 'Public Instagram Reel Downloader', '<p>REELDROP is explicitly a <strong>Public</strong> Instagram Reel Downloader. We respect digital privacy and access controls.</p><h2>What we support</h2><p>We only attempt to process URLs that are visible to the public internet without a logged-in session. If a Reel requires an account to view, REELDROP cannot—and will not—download it.</p>');

// Missing Guides
createPage('guides/instagram-video-download-guide', 'Instagram Video Download Guide', 'Learn how to easily download public Instagram videos to your device using REELDROP.', 'Instagram Video Download Guide', '<p>Downloading public Instagram videos follows the exact same simple process as downloading Reels.</p><h3>Step-by-Step</h3><ol><li>Copy the public video URL from Instagram.</li><li>Paste it into the REELDROP homepage.</li><li>Click Download Media.</li></ol><p>Remember: Instagram frequently updates their network architecture. If a download fails, it is usually because Instagram blocked the automated request.</p>');

createPage('guides/instagram-reel-downloader-guide', 'Instagram Reel Downloader Complete Guide', 'The ultimate guide to using REELDROP to securely save public Instagram Reels.', 'Instagram Reel Downloader Guide', '<p>This guide covers everything you need to know about using REELDROP across all devices.</p><h2>Understanding the Tool</h2><p>REELDROP is a cloud-based extraction engine. Your device never connects to Instagram directly; our secure worker nodes handle the parsing.</p><h2>Troubleshooting</h2><p>If you encounter an &quot;Extraction Failed&quot; error, it typically means Instagram blocked the public request due to their anti-bot measures.</p>');

createPage('guides/how-to-save-instagram-reels', 'How to Save Instagram Reels', 'A quick tutorial on saving public Instagram Reels to your local storage without extra apps.', 'How to Save Instagram Reels', '<p>Saving an Instagram Reel to your camera roll or hard drive is straightforward with REELDROP.</p><p>Because we process the video server-side and deliver a standard MP4 file, your browser handles the actual file saving natively.</p>');

createPage('guides/how-to-download-public-instagram-reels', 'How to Download Public Instagram Reels', 'Detailed instructions for identifying and downloading public Instagram Reels.', 'How to Download Public Instagram Reels', '<p>First, ensure the Reel is public. If you can view the Reel in a private browsing window (Incognito Mode) without logging in, it is public.</p><p>Once confirmed, simply paste that URL into REELDROP.</p>');

// Update Sitemap
const sitemapPath = path.join(appDir, 'sitemap.ts');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const newRoutes = [
  '/reel-downloader',
  '/instagram-video-downloader',
  '/public-instagram-reel-downloader',
  '/guides/instagram-video-download-guide',
  '/guides/instagram-reel-downloader-guide',
  '/guides/how-to-save-instagram-reels',
  '/guides/how-to-download-public-instagram-reels'
];
for (const route of newRoutes) {
  if (!sitemapContent.includes(route)) {
    sitemapContent = sitemapContent.replace(
      "'/download-instagram-reels',",
      `'/download-instagram-reels',\n    '${route}',`
    );
  }
}
fs.writeFileSync(sitemapPath, sitemapContent);

console.log('Pages generated!');
