
import React, { useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Lock } from 'lucide-react';
import AuthLayout from '@/components/auth/AuthLayout';
import { toast } from '@/components/ui/use-toast';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!token) {
      toast({
        title: "无效的重置链接",
        description: "请使用邮件中提供的完整链接",
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
    
    if (password.length < 8) {
      toast({
        title: "密码太短",
        description: "密码应至少为8个字符",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // 模拟API调用
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccessful(true);
      toast({
        title: "密码已重置",
        description: "您的密码已成功重置，请使用新密码登录",
      });
    }, 1500);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <AuthLayout
      title="重置密码"
      description="请设置您的新密码"
    >
      <div className="w-full">
        {!isSuccessful ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="新密码"
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute right-3 top-3 text-muted-foreground"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="确认新密码"
                  className="pl-10 pr-10"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={toggleShowConfirmPassword}
                  className="absolute right-3 top-3 text-muted-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "重置中..." : "重置密码"}
            </Button>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <div className="bg-green-100 text-green-600 rounded-full p-4 inline-flex">
              <Lock className="h-10 w-10" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">密码重置成功</h3>
              <p className="text-muted-foreground">
                您的密码已成功重置。
                <br />
                现在您可以使用新密码登录您的账户。
              </p>
            </div>
            
            <Link to="/login">
              <Button className="w-full">
                返回登录
              </Button>
            </Link>
          </div>
        )}
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
