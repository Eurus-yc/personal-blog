import Link from 'next/link';
import { getAllCategories, getPostsByCategory } from '@/lib/posts';

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
        文章分类
      </h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => {
          const posts = getPostsByCategory(category);
          return (
            <div
              key={category}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                {category}
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  ({posts.length}篇)
                </span>
              </h2>
              <ul className="space-y-2">
                {posts.map((post) => (
                  <li key={post.id}>
                    <Link
                      href={`/posts/${post.id}`}
                      className="text-green-500 hover:text-green-600 transition duration-300"
                    >
                      {post.title}
                    </Link>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      ({post.date})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
} 