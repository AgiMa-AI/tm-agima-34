
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';
import RegisterForm from '@/components/auth/RegisterForm';
import { useAuth } from '@/hooks/useAuth';

const Register = () => {
  const navigate = useNavigate();
  const { register, isLoading } = useAuth();

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
    
    try {
      // Create user data object to match the updated register method
      const userData = {
        username,
        email: `${username}@agima.io`,
        password,
        role: userType,
        inviteCode
      };
      
      const success = await register(userData);
      
      if (success) {
        navigate('/');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <AuthLayout 
      title="创建新账户"
      description="注册以开始使用算力 AGI租赁服务"
    >
      <RegisterForm 
        isLoading={!!isLoading}
        onSubmit={handleRegisterSubmit}
      />
    </AuthLayout>
  );
};

export default Register;
