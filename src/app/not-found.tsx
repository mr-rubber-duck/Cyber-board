import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4 myborder">
      <div className="text-center  ">
        <h1 className="text-6xl font-bold text-yellow-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          Yoo hackers go to exist area ! iknow what you looking for lol
        </p>
        <Link 
          href="/" 
          className="inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}