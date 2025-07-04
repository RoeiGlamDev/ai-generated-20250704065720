import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <a>GoldTube</a>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/upload">
              <a>Upload</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}