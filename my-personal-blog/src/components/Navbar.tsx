'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-7">
            <Link href="/" className="flex items-center py-4">
              <span className="font-semibold text-gray-500 text-lg">我的博客</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className={`py-4 px-2 ${
                pathname === '/' 
                  ? 'text-green-500 border-b-2 border-green-500' 
                  : 'text-gray-500 hover:text-green-500 transition duration-300'
              }`}
            >
              首页
            </Link>
            <Link 
              href="/about" 
              className={`py-4 px-2 ${
                pathname === '/about' 
                  ? 'text-green-500 border-b-2 border-green-500' 
                  : 'text-gray-500 hover:text-green-500 transition duration-300'
              }`}
            >
              关于我
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 