'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '首页' },
    { href: '/essays', label: '随笔' },
    { href: '/tech', label: '技术' },
    { href: '/notes', label: '读书笔记' },
    { href: '/about', label: '关于我' },
  ];

  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between space-x-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-serif text-slate-800 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400">
              Eurus的博客
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-serif">
              记录技术、阅读与思考
            </p>
          </div>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-serif ${
                  pathname === item.href
                    ? 'text-amber-600 dark:text-amber-400 font-medium'
                    : 'text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
} 