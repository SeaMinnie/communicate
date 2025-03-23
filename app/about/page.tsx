import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-rose-500 mb-6">关于我们</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">什么是AI恋爱契合度预测？</h2>
          <p className="mb-4">
            AI恋爱契合度预测是一个基于心理学理论和数据分析的工具，通过收集双方的个人特质、兴趣爱好、价值观等信息，
            使用先进的算法来评估两个人在恋爱或婚姻关系中的契合程度。
          </p>
          <p>
            我们的目标是帮助用户了解自己与伴侣之间的相容性，发现潜在的挑战，
            并提供有针对性的建议，帮助建立和维护健康、和谐的关系。
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">我们的算法</h2>
          <p className="mb-4">
            我们的算法基于多年的心理学研究和大量真实关系数据，考虑以下关键因素：
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>性格特质的互补性与相似性</li>
            <li>共同的兴趣爱好和价值观</li>
            <li>沟通方式和冲突解决模式</li>
            <li>关系期望和长期目标的一致性</li>
            <li>情感表达和理解方式</li>
          </ul>
          <p>
            通过分析这些因素，我们能够提供一个全面的契合度评估，
            帮助您更好地理解您的关系动态。
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">使用说明</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>填写有关您自己的基本信息和特质</li>
            <li>提供有关您的伴侣或潜在伴侣的信息</li>
            <li>告诉我们你们的相识故事和关系历程</li>
            <li>获取详细的契合度分析和个性化建议</li>
          </ol>
          <p>
            整个过程简单快捷，所有信息严格保密。
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">免责声明</h2>
          <p className="mb-4">
            请注意，我们的预测结果仅供参考，不应被视为专业心理咨询或关系治疗的替代品。
            每段关系都是独特的，受到许多因素的影响，我们的算法无法捕捉到所有细微差别。
          </p>
          <p>
            我们鼓励用户将结果作为自我反思和沟通的工具，而不是做出重大关系决定的唯一依据。
          </p>
        </div>
        
        <div className="flex justify-center mt-8">
          <Link 
            href="/" 
            className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    </main>
  );
} 