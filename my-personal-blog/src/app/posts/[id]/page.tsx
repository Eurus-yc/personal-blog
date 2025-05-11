import { getPostData } from '@/lib/posts';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';
import { useEffect } from 'react';

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        <article className="flex-grow max-w-3xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <time>{post.date}</time>
              <Link
                href={`/categories?category=${encodeURIComponent(post.category)}`}
                className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition duration-300"
              >
                {post.category}
              </Link>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags?tag=${encodeURIComponent(tag)}`}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </header>
          
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>

        <aside className="w-64 hidden lg:block">
          <TableOfContents />
        </aside>
      </div>
    </div>
  );
} 