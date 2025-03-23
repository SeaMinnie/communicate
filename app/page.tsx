import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="flex flex-col items-center justify-center w-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-rose-500 mb-6">AI恋爱契合度预测</h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl">
            通过先进的AI算法，分析你们的性格、兴趣爱好和价值观，预测你们的恋爱契合度和长期关系潜力
          </p>
          
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Link 
              href="/predict" 
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              开始测试
            </Link>
            
            <Link 
              href="/about" 
              className="bg-transparent hover:bg-slate-100 text-slate-700 font-semibold py-3 px-6 rounded-lg text-lg border border-slate-300 transition-colors"
            >
              了解更多
            </Link>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3 w-full max-w-5xl">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-rose-500">科学分析</h3>
              <p>基于心理学理论和实际数据分析，提供科学的契合度评估</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-rose-500">个性化报告</h3>
              <p>根据个人特质和偏好，生成详细的关系分析报告</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-rose-500">关系建议</h3>
              <p>提供实用的建议，帮助改善并强化你们的关系</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
