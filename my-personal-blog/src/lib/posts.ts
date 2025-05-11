import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export interface Post {
  id: string;
  title: string;
  date: string;
  description: string;
  content: string;
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
      ...(matterResult.data as { title: string; date: string; description: string }),
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

  // 使用 gray-matter 解析文章元数据
  const matterResult = matter(fileContents);

  // 使用 remark 将 markdown 转换为 HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    content: contentHtml,
    ...(matterResult.data as { title: string; date: string; description: string }),
  };
} 