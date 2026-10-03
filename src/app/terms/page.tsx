import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | REELDROP',
  description: 'REELDROP terms of service and usage conditions.',
  alternates: { canonical: 'https://www.reeldrop.com/terms' }
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <div className="prose">
          <p>
            By using ReelDrop, you agree not to use the service for downloading copyrighted material
            without permission. Our service is intended only for downloading your own public content
            or content available in the public domain.
          </p>
          <p>
            We do not bypass Instagram&apos;s authentication or private account restrictions.
          </p>
          <p>
            The service is provided &quot;as is&quot; without any warranties.
          </p>
        </div>
      </div>
    </div>
  );
}
