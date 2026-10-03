import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | REELDROP',
  description: 'REELDROP privacy policy and data practices.',
  alternates: { canonical: 'https://www.reeldrop.com/privacy' }
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose">
          <p>Effective Date: October 2026</p>
          <p>
            ReelDrop (&quot;we&quot;, &quot;our&quot;) respects your privacy. We do not store the Instagram media you download.
            All processing is done on the fly, and temporary files are immediately deleted from our servers
            once the download completes.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We collect basic analytics and connection data to prevent abuse (e.g., rate limiting).
            We do not request or store your Instagram credentials.
          </p>
        </div>
      </div>
    </div>
  );
}
