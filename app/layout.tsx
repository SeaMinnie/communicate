import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI恋爱契合度预测 - 发现你们的匹配程度",
  description: "使用AI技术分析你们的匹配程度，提供专业的恋爱关系评估和建议",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="heart-bg"></div>
        <header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-sm">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-rose-500">
              AI恋爱测试
            </Link>
            <div className="flex gap-4">
              <Link href="/" className="hover:text-rose-500 transition-colors">
                首页
              </Link>
              <Link href="/predict" className="hover:text-rose-500 transition-colors">
                开始测试
              </Link>
              <Link href="/about" className="hover:text-rose-500 transition-colors">
                关于
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-white bg-opacity-80 backdrop-blur-md border-t border-gray-200 mt-12">
          <div className="container mx-auto px-6 py-8 text-center text-gray-600">
            <p className="mb-4">AI恋爱契合度预测 &copy; {new Date().getFullYear()}</p>
            <p className="text-sm">
              本网站提供的预测结果仅供参考，不构成任何专业建议。
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
