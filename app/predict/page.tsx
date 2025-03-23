'use client';

import { useState, ChangeEvent } from 'react';
import Link from 'next/link';

interface FormData {
  name1: string;
  gender1: string;
  age1: string;
  hobbies1: string;
  name2: string;
  gender2: string;
  age2: string;
  hobbies2: string;
  meetingStory: string;
  relationshipDuration: string;
}

interface ResultData {
  score: number;
  description: string;
  advice: string;
}

export default function PredictPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name1: '',
    gender1: '',
    age1: '',
    hobbies1: '',
    name2: '',
    gender2: '',
    age2: '',
    hobbies2: '',
    meetingStory: '',
    relationshipDuration: '',
  });
  
  const [result, setResult] = useState<ResultData | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const calculateCompatibility = () => {
    // 这里是简单的预测算法，实际项目中可以使用更复杂的计算或AI模型
    const score = Math.floor(Math.random() * 41) + 60; // 60-100的随机分数
    
    let description = '';
    if (score >= 90) {
      description = '你们的关系非常和谐，有很高的长期发展潜力！';
    } else if (score >= 80) {
      description = '你们之间有很好的契合度，关系有着良好的发展基础。';
    } else if (score >= 70) {
      description = '你们的关系有潜力，但需要双方更多的理解和沟通。';
    } else {
      description = '你们可能需要在一些方面做出调整，以增进彼此的理解。';
    }
    
    setResult({
      score,
      description,
      advice: '定期沟通、共同兴趣的培养以及相互尊重对维持健康关系至关重要。'
    });
    
    setStep(3);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">第一步：关于你</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">你的名字</label>
                <input
                  type="text"
                  name="name1"
                  value={formData.name1}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">你的性别</label>
                <select
                  name="gender1"
                  value={formData.gender1}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                >
                  <option value="">请选择</option>
                  <option value="male">男</option>
                  <option value="female">女</option>
                  <option value="other">其他</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">你的年龄</label>
                <input
                  type="number"
                  name="age1"
                  value={formData.age1}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">你的兴趣爱好</label>
                <textarea
                  name="hobbies1"
                  value={formData.hobbies1}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  placeholder="如：旅行、看电影、运动..."
                ></textarea>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors"
              >
                下一步
              </button>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">第二步：关于TA</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">TA的名字</label>
                <input
                  type="text"
                  name="name2"
                  value={formData.name2}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">TA的性别</label>
                <select
                  name="gender2"
                  value={formData.gender2}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                >
                  <option value="">请选择</option>
                  <option value="male">男</option>
                  <option value="female">女</option>
                  <option value="other">其他</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">TA的年龄</label>
                <input
                  type="number"
                  name="age2"
                  value={formData.age2}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">TA的兴趣爱好</label>
                <textarea
                  name="hobbies2"
                  value={formData.hobbies2}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  placeholder="如：旅行、看电影、运动..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">你们相识的故事</label>
                <textarea
                  name="meetingStory"
                  value={formData.meetingStory}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  placeholder="如：学校认识、朋友介绍、工作认识..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">认识/交往时长</label>
                <select
                  name="relationshipDuration"
                  value={formData.relationshipDuration}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                >
                  <option value="">请选择</option>
                  <option value="less-than-month">不到1个月</option>
                  <option value="1-6-months">1-6个月</option>
                  <option value="6-12-months">6-12个月</option>
                  <option value="1-3-years">1-3年</option>
                  <option value="more-than-3-years">3年以上</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={handleBack}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                上一步
              </button>
              
              <button
                onClick={calculateCompatibility}
                className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors"
              >
                预测结果
              </button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold">预测结果</h2>
            
            {result && (
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="mb-6">
                  <p className="text-xl mb-2">契合度分数</p>
                  <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-rose-500" 
                      style={{ width: `${result.score}%` }}
                    ></div>
                  </div>
                  <p className="text-3xl font-bold text-rose-500 mt-2">{result.score}%</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">分析结果</h3>
                  <p>{result.description}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">建议</h3>
                  <p>{result.advice}</p>
                </div>
              </div>
            )}
            
            <div className="flex flex-col gap-3 mt-8">
              <Link
                href="/"
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                返回首页
              </Link>
              
              <button
                onClick={() => {
                  setStep(1);
                  setFormData({
                    name1: '',
                    gender1: '',
                    age1: '',
                    hobbies1: '',
                    name2: '',
                    gender2: '',
                    age2: '',
                    hobbies2: '',
                    meetingStory: '',
                    relationshipDuration: '',
                  });
                  setResult(null);
                }}
                className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors"
              >
                再次测试
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
      <div className="z-10 w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        {renderStep()}
      </div>
    </main>
  );
} 