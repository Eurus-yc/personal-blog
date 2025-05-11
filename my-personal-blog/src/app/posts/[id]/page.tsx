import { getPostData } from '@/lib/posts';

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id);

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{post.title}</h1>
        <div className="text-gray-500">{post.date}</div>
      </header>
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </article>
  );
} 