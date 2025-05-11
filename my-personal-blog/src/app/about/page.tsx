export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">关于我</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">
          你好！欢迎来到我的个人博客。我是一个热爱学习和分享的人，这个博客是我记录思考和经验的地方。
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          为什么写博客？
        </h2>
        <p className="text-gray-600 mb-6">
          写博客不仅能帮助我整理思路，也能与更多人分享知识和经验。通过写作，我希望能够：
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>记录学习历程</li>
          <li>分享个人见解</li>
          <li>与读者交流互动</li>
          <li>持续学习成长</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          联系我
        </h2>
        <p className="text-gray-600">
          如果你对我的博客内容有任何问题或建议，欢迎与我交流。
        </p>
      </div>
    </div>
  );
} 