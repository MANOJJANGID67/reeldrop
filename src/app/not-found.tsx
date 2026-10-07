import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 text-center">
        <div className="w-16 h-16 mx-auto mb-6 p-2 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
          <img src="/logo.svg" alt="reeldropnow" width={40} height={40} className="w-10 h-10" />
        </div>

        <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full uppercase tracking-wider mb-4">
          Error 404
        </span>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-sm text-gray-500 mb-8 leading-relaxed">
          The page or guide you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="space-y-3">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-xs transition-colors"
          >
            Go to Homepage &amp; Downloader
          </Link>
          <div className="pt-4 border-t border-gray-100 flex justify-center gap-4 text-xs font-medium text-gray-500">
            <Link href="/services" className="hover:text-indigo-600">Services</Link>
            <Link href="/faq" className="hover:text-indigo-600">FAQ</Link>
            <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
