import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const posts = getAllPosts();
  
  // 按分类组织文章
  const categories = {
    tech: posts.filter(post => post.category === '技术'),
    essays: posts.filter(post => post.category === '随笔'),
    notes: posts.filter(post => post.category === '读书笔记'),
  };

  return (
    <div className="flex max-w-7xl mx-auto px-6 py-12">
      <Sidebar />
      <div className="flex-1 pl-8">
        <section className="mb-16">
          <h2 className="text-xl font-serif text-slate-800 dark:text-slate-200 mb-8">最新文章</h2>
          <div className="space-y-10">
            {posts.slice(0, 5).map((post) => (
              <article key={post.id} className="group">
                <Link href={`/posts/${post.id}`}>
                  <h3 className="text-lg font-serif text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400">
                    {post.title}
                  </h3>
                </Link>
                <div className="mt-3 flex items-center text-sm text-slate-500 dark:text-slate-400 space-x-4 font-serif">
                  <time>{post.date}</time>
                  <span>·</span>
                  <span>{post.category}</span>
                </div>
                <p className="mt-3 text-slate-600 dark:text-slate-400 line-clamp-2 font-serif leading-relaxed">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <div className="flex gap-8">
          <section className="flex-1">
            <h2 className="text-xl font-serif text-slate-800 dark:text-slate-200 mb-6">随笔</h2>
            <div className="space-y-6">
              {categories.essays.slice(0, 5).map((post) => (
                <article key={post.id} className="group">
                  <Link href={`/posts/${post.id}`}>
                    <h3 className="text-base font-serif text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 leading-relaxed">
                      {post.title}
                    </h3>
                  </Link>
                  <time className="mt-2 block text-sm text-slate-500 dark:text-slate-400 font-serif">{post.date}</time>
                </article>
              ))}
            </div>
          </section>

          <section className="flex-1">
            <h2 className="text-xl font-serif text-slate-800 dark:text-slate-200 mb-6">技术</h2>
            <div className="space-y-6">
              {categories.tech.slice(0, 5).map((post) => (
                <article key={post.id} className="group">
                  <Link href={`/posts/${post.id}`}>
                    <h3 className="text-base font-serif text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 leading-relaxed">
                      {post.title}
                    </h3>
                  </Link>
                  <time className="mt-2 block text-sm text-slate-500 dark:text-slate-400 font-serif">{post.date}</time>
                </article>
              ))}
            </div>
          </section>

          <section className="flex-1">
            <h2 className="text-xl font-serif text-slate-800 dark:text-slate-200 mb-6">读书笔记</h2>
            <div className="space-y-6">
              {categories.notes.slice(0, 5).map((post) => (
                <article key={post.id} className="group">
                  <Link href={`/posts/${post.id}`}>
                    <h3 className="text-base font-serif text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 leading-relaxed">
                      {post.title}
                    </h3>
                  </Link>
                  <time className="mt-2 block text-sm text-slate-500 dark:text-slate-400 font-serif">{post.date}</time>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
