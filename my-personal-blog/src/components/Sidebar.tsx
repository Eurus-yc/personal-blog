import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 p-6 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="text-center mb-8">
        <img src="/path/to/avatar.jpg" alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <p className="text-sm text-gray-600 dark:text-gray-400">致力于认知科学的产品开发，课程设计与科学传播。</p>
      </div>
      <nav className="space-y-4">
        <Link href="/" className="block text-gray-800 dark:text-gray-200 hover:text-blue-600">首页</Link>
        <Link href="/essays" className="block text-gray-800 dark:text-gray-200 hover:text-blue-600">随笔</Link>
        <Link href="/tech" className="block text-gray-800 dark:text-gray-200 hover:text-blue-600">技术</Link>
        <Link href="/notes" className="block text-gray-800 dark:text-gray-200 hover:text-blue-600">读书笔记</Link>
        <Link href="/about" className="block text-gray-800 dark:text-gray-200 hover:text-blue-600">关于我</Link>
      </nav>
    </aside>
  );
} 