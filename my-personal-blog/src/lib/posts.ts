import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { visit } from 'unist-util-visit';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

// 创建自定义插件来处理图片
function remarkOptimizeImages() {
  return (tree: any) => {
    visit(tree, 'image', (node: any) => {
      // 将普通图片标签转换为 OptimizedImage 组件的包装
      const imgHtml = `<div class="my-8">
        <div class="relative overflow-hidden group cursor-zoom-in rounded-lg shadow-lg">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            点击放大
          </div>
          <img
            src="${node.url}"
            alt="${node.alt || ''}"
            loading="lazy"
            class="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            data-action="zoom"
          />
        </div>
        ${node.alt ? `<p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">${node.alt}</p>` : ''}
      </div>`;
      node.type = 'html';
      node.value = imgHtml;
    });
  };
}

export interface Post {
  id: string;
  title: string;
  date: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set(posts.flatMap(post => post.tags));
  return Array.from(tags);
}

export function getPostsByCategory(category: string): Post[] {
  const posts = getAllPosts();
  return posts.filter(post => post.category === category);
}

export function getPostsByTag(tag: string): Post[] {
  const posts = getAllPosts();
  return posts.filter(post => post.tags.includes(tag));
}

export function getAllPosts(): Post[] {
  // 获取 posts 目录下的所有文件名
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // 移除文件名中的 ".md" 来获取 id
    const id = fileName.replace(/\.md$/, '');

    // 读取 markdown 文件内容
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 使用 gray-matter 解析文章元数据
    const matterResult = matter(fileContents);

    // 将数据与 id 组合
    return {
      id,
      content: matterResult.content,
      ...(matterResult.data as { 
        title: string; 
        date: string; 
        description: string;
        category: string;
        tags: string[];
      }),
    };
  });

  // 按日期排序
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(remarkOptimizeImages)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    content: contentHtml,
    ...(matterResult.data as { 
      title: string; 
      date: string; 
      description: string;
      category: string;
      tags: string[];
    }),
  };
} 