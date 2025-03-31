
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AuthDecorations from './AuthDecorations';
import { Brain } from 'lucide-react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const AuthLayout = ({ children, title, description }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-purple-100/20 flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden neural-pattern">
      <AuthDecorations />
      
      <div className="w-full max-w-[340px] xs:max-w-md transition-all duration-700 opacity-100 translate-y-0">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block float-animation mb-4 sm:mb-6">
            <div className="h-16 w-16 sm:h-20 sm:w-20 bg-primary/10 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center ai-shadow mx-auto">
              <Brain className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-primary ai-text-gradient">AGI智能云</h1>
          <h2 className="text-lg xs:text-xl sm:text-2xl font-medium text-foreground/90 mt-1">人工智能 Agent租赁 专业版</h2>
          
          <div className="max-w-xs mx-auto mt-4 sm:mt-6 p-3 rounded-xl bg-primary/5 backdrop-blur-sm">
            <p className="text-xs sm:text-sm text-foreground/90 italic">
              "所有伟大的创新，都是对现状"不合理"的拆解"
            </p>
            <p className="text-xs text-foreground/60 mt-1">
              All great innovations are a deconstruction of the "unreasonable" status quo
            </p>
          </div>
        </div>
        
        <Card className="w-full rounded-2xl shadow-xl border-primary/10 ai-shadow animate-fade-in overflow-hidden backdrop-blur-sm bg-white/50">
          <CardHeader className="space-y-1 px-6 py-5 bg-primary/5">
            <CardTitle className="text-xl text-center font-bold">{title}</CardTitle>
            {description && (
              <CardDescription className="text-center">
                {description}
              </CardDescription>
            )}
          </CardHeader>
          
          <CardContent className="px-6 pt-6 pb-2">
            {children}
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4 px-6 py-5 bg-primary/5">
            <div className="text-xs sm:text-sm text-center text-muted-foreground">
              <span>登录即表示您同意我们的</span>
              <Link to="/terms" className="text-primary hover:underline"> 服务条款 </Link>
              <span>和</span>
              <Link to="/privacy" className="text-primary hover:underline"> 隐私政策</Link>
            </div>
          </CardFooter>
        </Card>

        <div className="text-center mt-6 sm:mt-8 text-xs text-foreground/50">
          <p>AGI智能云 © {new Date().getFullYear()} 版权所有</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
