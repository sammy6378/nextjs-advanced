import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="flex flex-col h-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      {/* Header */}
      <div className="text-xl font-bold pb-6 border-b border-gray-300 dark:border-gray-700">
        My Blog
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 mt-6">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
              About
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
              Contact
            </Link>
          </li>

          {/* Logout Button */}
          <li className="mt-auto">
            <button className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
