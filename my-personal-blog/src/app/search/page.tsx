import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const searchQuery = searchParams.q?.toLowerCase() || '';
  const allPosts = getAllPosts();
  
  const searchResults = allPosts.filter((post) => {
    const searchContent = `${post.title} ${post.description} ${post.content}`.toLowerCase();
    return searchContent.includes(searchQuery);
  });

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
        搜索结果: {searchQuery}
      </h1>
      
      {searchResults.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">
          没有找到相关文章
        </p>
      ) : (
        <div className="grid gap-6">
          {searchResults.map((post) => (
            <article
              key={post.id}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
                <Link
                  href={`/posts/${post.id}`}
                  className="text-green-500 hover:text-green-600 transition duration-300"
                >
                  阅读更多 →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
} 