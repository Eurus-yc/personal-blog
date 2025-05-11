'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import SearchBar from './SearchBar';

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
          
          <div className="hidden md:flex flex-1 justify-center px-4">
            <SearchBar />
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
                href="/categories" 
                className={`py-4 px-2 ${
                  pathname === '/categories' 
                    ? 'text-green-500 border-b-2 border-green-500 dark:text-green-400 dark:border-green-400' 
                    : 'text-gray-500 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition duration-300'
                }`}
              >
                分类
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
            
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/Eurus-yc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 