import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default function NotesPage() {
  const posts = getAllPosts().filter(post => post.category === '读书笔记');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">读书笔记</h1>
      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400">
                {post.title}
              </h2>
            </Link>
            <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
              <time>{post.date}</time>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              {post.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 