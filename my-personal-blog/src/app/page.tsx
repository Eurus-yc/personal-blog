import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-800">最新文章</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
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
    </div>
  );
}
