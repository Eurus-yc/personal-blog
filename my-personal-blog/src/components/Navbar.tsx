'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-7">
            <Link href="/" className="flex items-center py-4">
              <span className="font-semibold text-gray-500 dark:text-gray-300 text-lg">我的博客</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1">
              <Link 
                href="/" 
                className={`py-4 px-2 ${
                  pathname === '/' 
                    ? 'text-green-500 border-b-2 border-green-500 dark:text-green-400 dark:border-green-400' 
                    : 'text-gray-500 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition duration-300'
                }`}
              >
                首页
              </Link>
              <Link 
                href="/about" 
                className={`py-4 px-2 ${
                  pathname === '/about' 
                    ? 'text-green-500 border-b-2 border-green-500 dark:text-green-400 dark:border-green-400' 
                    : 'text-gray-500 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition duration-300'
                }`}
              >
                关于我
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
} 