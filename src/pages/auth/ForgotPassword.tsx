
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Mail } from 'lucide-react';
import AuthLayout from '@/components/auth/AuthLayout';
import { toast } from '@/components/ui/use-toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "请输入电子邮箱",
        description: "请提供您的账户电子邮箱以接收重置密码链接",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // 模拟API调用
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "重置链接已发送",
        description: `重置密码链接已发送至 ${email}，请查收`,
      });
    }, 1500);
  };

  return (
    <AuthLayout
      title="找回密码"
      description="我们将向您的电子邮箱发送重置密码链接"
    >
      <div className="w-full">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="您的邮箱地址"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "发送中..." : "发送重置链接"}
            </Button>
            
            <div className="text-center">
              <Link to="/login" className="text-sm text-primary hover:underline">
                返回登录页面
              </Link>
            </div>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <div className="bg-primary/10 text-primary rounded-full p-4 inline-flex">
              <Mail className="h-10 w-10" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">检查您的邮箱</h3>
              <p className="text-muted-foreground">
                我们已向 {email} 发送了重置密码链接。
                <br />
                请查收邮件并点击链接重置您的密码。
              </p>
            </div>
            
            <div className="space-y-4 pt-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsSubmitted(false)}
              >
                使用其他邮箱
              </Button>
              
              <Link to="/login">
                <Button
                  variant="ghost"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  返回登录
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
