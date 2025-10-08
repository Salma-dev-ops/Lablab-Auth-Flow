
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-8 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <Image
          src="/logo.png"
          alt="Herichain x Lablab Logo"
          width={120}
          height={120}
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-orange-800 mb-2">
          HeriChain x Lablab
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Where culture meets code, and AI empowers communities.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 text-left">
          <h2 className="text-2xl font-semibold text-orange-700 mb-2">
            🔐 Modular Auth Flow for Hackathon Builders
          </h2>
          <p className="text-gray-800 mb-4">
            This starter kit helps Lablab teams launch secure, testable, and culturally resonant AI apps. Built with Next.js, TypeScript, and poetic clarity.
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Reusable login form with validation</li>
            <li>AuthService class + useAuth hook</li>
            <li>Unit tests with Jest</li>
            <li>CI/CD pipeline via GitHub Actions</li>
            <li>Afrocentric branding and structure</li>
          </ul>

          <Link href="/login">
            <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
              Try the Demo
            </button>
          </Link>
        </div>

        <footer className="mt-8 text-sm text-gray-600">
          Built with love by Salma • Nairobi • 2025
        </footer>
      </div>
    </main>
  );
}
