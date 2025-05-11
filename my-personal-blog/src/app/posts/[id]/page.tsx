import { getPostData } from '@/lib/posts';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex gap-16">
        {/* 主要内容区 */}
        <article className="flex-1 max-w-3xl">
          <header className="mb-12 pb-8 border-b border-slate-200 dark:border-slate-800">
            <h1 className="text-3xl font-serif text-slate-800 dark:text-slate-200 mb-6 leading-relaxed">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 font-serif">
              <time>{post.date}</time>
              <span>·</span>
              <Link
                href={`/${post.category === '技术' ? 'tech' : post.category === '随笔' ? 'essays' : 'notes'}`}
                className="hover:text-amber-600 dark:hover:text-amber-400"
              >
                {post.category}
              </Link>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-slate-500 dark:text-slate-400 font-serif"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </header>
          
          <div 
            className="prose prose-slate prose-lg dark:prose-invert max-w-none font-serif
            prose-headings:font-serif prose-headings:text-slate-800 dark:prose-headings:text-slate-200
            prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed
            prose-a:text-amber-600 dark:prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-800 dark:prose-strong:text-slate-200
            prose-code:text-slate-800 dark:prose-code:text-slate-200 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-slate-100 dark:prose-pre:bg-slate-800
            prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>

        {/* 侧边栏 */}
        <aside className="w-80 shrink-0">
          <div className="sticky top-8">
            <TableOfContents />
          </div>
        </aside>
      </div>
    </div>
  );
} 