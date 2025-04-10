
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import AuthLayout from '@/components/auth/AuthLayout';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';

const Login = () => {
  const navigate = useNavigate();
  const { login, register, isLoading: authLoading, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    // 模拟完成初始加载动画
    const timer = setTimeout(() => {
      setAnimationCompleted(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLoginSubmit = async (username: string, password: string) => {
    setIsLoading(true);
    
    try {
      const success = await login(username, password);
      if (success) {
        navigate('/');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (
    username: string,
    password: string,
    confirmPassword: string,
    userType: 'renter' | 'provider',
    inviteCode: string,
    agreeTerms: boolean
  ) => {
    if (!agreeTerms) {
      toast({
        title: "请同意服务条款和隐私政策",
        description: "您需要同意服务条款和隐私政策才能继续",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "密码不匹配",
        description: "请确保两次输入的密码相同",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Create user data object to match the updated register method
      const userData = {
        username,
        email: `${username}@agima.io`, // 使用用户名作为邮箱前缀
        password,
        role: userType,
        inviteCode // 传递邀请码
      };
      
      const success = await register(userData);
      
      if (success) {
        // 导航到主页
        navigate('/');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!animationCompleted) {
    return <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-secondary/30" />; // 优化的加载页面背景
  }

  // 如果用户已登录，直接跳转到首页
  if (user) {
    navigate('/');
    return null;
  }

  return (
    <AuthLayout 
      title="欢迎使用 算力 AGI租赁"
      description="登录您的账户以继续使用服务"
    >
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-5 rounded-xl overflow-hidden bg-muted/70 p-1">
          <TabsTrigger value="login" className="rounded-lg py-2.5">登录</TabsTrigger>
          <TabsTrigger value="register" className="rounded-lg py-2.5">注册</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <LoginForm 
            isLoading={isLoading || !!authLoading}
            onSubmit={handleLoginSubmit}
          />
        </TabsContent>
        
        <TabsContent value="register">
          <RegisterForm 
            isLoading={isLoading || !!authLoading}
            onSubmit={handleRegisterSubmit}
          />
        </TabsContent>
      </Tabs>
    </AuthLayout>
  );
};

export default Login;
