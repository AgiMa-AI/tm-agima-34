
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AuthDecorations from './AuthDecorations';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const AuthLayout = ({ children, title, description }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* 动态4K高清背景 */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video 
          className="absolute w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source 
            src="https://cdn.pixabay.com/vimeo/695612960/abstract-130883.mp4?width=1280&hash=2eb31f3e9152d1a39e446b4c8e17d0e2ed84acbc" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>
      
      <AuthDecorations />
      
      <div className="w-full max-w-[340px] xs:max-w-md transition-all duration-700 opacity-100 translate-y-0 z-10">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block float-animation mb-4 sm:mb-6">
            <div className="h-16 w-16 sm:h-20 sm:w-20 bg-primary/10 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center tiffany-shadow mx-auto">
              <span className="text-primary text-2xl sm:text-3xl font-bold">腾目</span>
            </div>
          </div>
          
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-primary brand-text-gradient">腾目科技网络有限公司</h1>
          <h2 className="text-lg xs:text-xl sm:text-2xl font-medium text-white/90 mt-1">算力 AGI租赁 通用版</h2>
          
          <div className="max-w-xs mx-auto mt-4 sm:mt-6 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
            <p className="text-xs sm:text-sm text-white/90 italic">
              "所有伟大的创新 都是对现状'不合理'的拆解"
            </p>
            <p className="text-xs text-white/60 mt-1">
              All great innovations are a dismantling of the status quo that is 'unreasonable.'
            </p>
          </div>
        </div>
        
        <Card className="w-full rounded-2xl shadow-xl border-primary/10 tiffany-shadow animate-fade-in overflow-hidden backdrop-blur-sm bg-white/10">
          <CardHeader className="space-y-1 px-6 py-5 bg-white/10">
            <CardTitle className="text-xl text-center font-bold text-white">{title}</CardTitle>
            {description && (
              <CardDescription className="text-center text-white/80">
                {description}
              </CardDescription>
            )}
          </CardHeader>
          
          <CardContent className="px-6 pt-6 pb-2">
            {children}
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4 px-6 py-5 bg-white/5">
            <div className="text-xs sm:text-sm text-center text-white/70">
              <span>登录即表示您同意我们的</span>
              <Link to="/terms" className="text-primary hover:underline"> 服务条款 </Link>
              <span>和</span>
              <Link to="/privacy" className="text-primary hover:underline"> 隐私政策</Link>
            </div>
          </CardFooter>
        </Card>

        <div className="text-center mt-6 sm:mt-8 text-xs text-white/50">
          <p>腾目科技网络有限公司 © {new Date().getFullYear()} 版权所有</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
