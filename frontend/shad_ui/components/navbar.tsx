import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-8 w-auto" src="/images/logo.svg" alt="Workflow" />
              <img className="hidden lg:block h-8 w-auto" src="/images/logo.svg" alt="Workflow" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/profile">
                  <a className={`px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/profile' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:text-white hover:bg-gray-700'}`}>Profile</a>
                </Link>
                <Link href="/brands">
                  <a className={`px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/brands' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:text-white hover:bg-gray-700'}`}>Brands</a>
                </Link>
                <Link href="/partnerships">
                  <a className={`px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/partnerships' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:text-white hover:bg-gray-700'}`}>Partnerships</a>
                </Link>
                <Link href="/analytics">
                  <a className={`px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/analytics' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:text-white hover:bg-gray-700'}`}>Analytics</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;