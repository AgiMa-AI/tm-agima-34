
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronRight } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface RegisterFormProps {
  isLoading: boolean;
  onSubmit: (
    username: string, 
    password: string,
    confirmPassword: string,
    userType: 'renter' | 'provider',
    inviteCode: string,
    agreeTerms: boolean
  ) => Promise<void>;
}

const RegisterForm = ({ isLoading, onSubmit }: RegisterFormProps) => {
  const [formData, setFormData] = useState({
    username: '',
    inviteCode: '', 
    password: '',
    confirmPassword: '',
    userType: 'renter' as 'renter' | 'provider',
  });
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(
      formData.username,
      formData.password,
      formData.confirmPassword,
      formData.userType,
      formData.inviteCode,
      agreeTerms
    );
  };

  const handleUserTypeChange = (type: 'renter' | 'provider') => {
    setFormData((prev) => ({
      ...prev,
      userType: type
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      <div className="space-y-1.5 sm:space-y-2">
        <Label htmlFor="register-username" className="text-sm font-medium text-white/90">用户名</Label>
        <Input 
          id="register-username" 
          placeholder="创建您的用户名" 
          className="h-10 sm:h-12 bg-white/10 border-primary/20 focus:border-primary focus:ring-primary/20 text-white placeholder:text-white/50"
          value={formData.username}
          onChange={(e) => setFormData({...formData, username: e.target.value})}
          required
        />
      </div>
      
      <div className="space-y-1.5 sm:space-y-2">
        <Label htmlFor="invite-code" className="text-sm font-medium text-white/90">邀请码</Label>
        <Input 
          id="invite-code" 
          placeholder="请输入邀请码（可选）" 
          className="h-10 sm:h-12 bg-white/10 border-primary/20 focus:border-primary focus:ring-primary/20 text-white placeholder:text-white/50"
          value={formData.inviteCode}
          onChange={(e) => setFormData({...formData, inviteCode: e.target.value})}
        />
        <p className="text-xs text-white/60">使用邀请码注册可获得额外奖励</p>
      </div>
      
      <div className="space-y-1.5 sm:space-y-2">
        <Label htmlFor="register-password" className="text-sm font-medium text-white/90">密码</Label>
        <Input 
          id="register-password" 
          type="password" 
          placeholder="创建您的密码" 
          className="h-10 sm:h-12 bg-white/10 border-primary/20 focus:border-primary focus:ring-primary/20 text-white placeholder:text-white/50"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          required
        />
      </div>
      
      <div className="space-y-1.5 sm:space-y-2">
        <Label htmlFor="register-confirm-password" className="text-sm font-medium text-white/90">确认密码</Label>
        <Input 
          id="register-confirm-password" 
          type="password" 
          placeholder="再次输入您的密码" 
          className="h-10 sm:h-12 bg-white/10 border-primary/20 focus:border-primary focus:ring-primary/20 text-white placeholder:text-white/50"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          required
        />
      </div>
      
      <div className="space-y-1.5 sm:space-y-2">
        <Label className="text-sm font-medium text-white/90">您是?</Label>
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <button
            type="button"
            className={`w-full h-10 sm:h-12 rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors touch-target ${
              formData.userType === 'renter' 
                ? 'bg-primary text-primary-foreground shadow-sm neon-pulse' 
                : 'border border-primary/30 bg-white/5 hover:bg-primary/20 text-white'
            }`}
            onClick={() => handleUserTypeChange('renter')}
          >
            租赁者
          </button>
          <button
            type="button"
            className={`w-full h-10 sm:h-12 rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors touch-target ${
              formData.userType === 'provider' 
                ? 'bg-primary text-primary-foreground shadow-sm neon-pulse' 
                : 'border border-primary/30 bg-white/5 hover:bg-primary/20 text-white'
            }`}
            onClick={() => handleUserTypeChange('provider')}
          >
            出租者
          </button>
        </div>
      </div>
      
      <div className="flex items-start space-x-2 mt-1">
        <Checkbox 
          id="terms"
          checked={agreeTerms}
          onCheckedChange={() => setAgreeTerms(!agreeTerms)}
          className="h-4 w-4 rounded-sm mt-0.5 text-primary border-primary/50"
        />
        <Label
          htmlFor="terms"
          className="text-xs text-white/70 cursor-pointer"
        >
          我同意
          <Link to="/terms" className="text-primary hover:underline"> 服务条款 </Link>
          和
          <Link to="/privacy" className="text-primary hover:underline"> 隐私政策</Link>
        </Label>
      </div>
      
      <Button 
        type="submit" 
        className="w-full h-11 sm:h-12 mt-2 rounded-xl shadow-md hover:shadow-lg transition-all font-medium text-base touch-target bg-primary hover:bg-primary/90 tiffany-glow"
        disabled={isLoading}
      >
        {isLoading ? "注册中..." : (
          <span className="flex items-center justify-center">
            创建账户
            <ChevronRight className="ml-2 h-5 w-5" />
          </span>
        )}
      </Button>
    </form>
  );
};

export default RegisterForm;
