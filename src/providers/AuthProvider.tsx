
import React, { useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { User, UserWithPassword } from '@/types/auth';
import AuthContext from '@/context/AuthContext';
import { mockUsers } from '@/data/mockUsers';
import { getUserInviteTree, createUser } from '@/utils/authUtils';
import { findUserByUsername, transferFunds } from '@/services/transferService';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
      const foundUser = mockUsers.find(
        u => (u.username === username || u.email === username) && u.password === password
      );
      
      if (foundUser) {
        const { password, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        toast({
          title: "登录成功",
          description: `欢迎回到 Agi-Ma，${userWithoutPassword.username}！`,
        });
        return true;
      } else {
        toast({
          variant: "destructive",
          title: "登录失败",
          description: "用户名或密码错误",
        });
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      toast({
        variant: "destructive",
        title: "登录失败",
        description: "操作错误，请稍后再试",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Update the register function to match the interface signature
  const register = async (userData: Partial<UserWithPassword>): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // Extract needed properties from userData
      const { username, email, password, role, inviteCode } = userData;
      
      if (!username || !email || !password || !role) {
        toast({
          variant: "destructive",
          title: "注册失败",
          description: "请填写所有必填字段",
        });
        return false;
      }
      
      const { newUser, success, message } = createUser(username, email, password, role, inviteCode);
      
      if (!success) {
        toast({
          variant: "destructive",
          title: "注册失败",
          description: message || "注册失败，请稍后再试",
        });
        return false;
      }
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      toast({
        title: "注册成功",
        description: "欢迎加入 Agi-Ma 平台！",
      });
      
      if (!inviteCode) {
        toast({
          title: "提示",
          description: "未提供邀请码，使用平台默认邀请。",
        });
      }
      
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        variant: "destructive",
        title: "注册失败",
        description: "操作错误，请稍后再试",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast({
      title: "已退出登录",
    });
    navigate('/login');
  };

  const updateUser = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  // Transfer functionality - Updated to return a Promise
  const handleTransferFunds = async (recipientId: string, amount: number) => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "转账失败",
        description: "您需要登录才能进行转账",
      });
      return Promise.resolve({ success: false, message: "未登录" });
    }

    try {
      const result = transferFunds(user.id, recipientId, amount);
      
      if (result.success) {
        // Update current user info (balance and energy)
        const updatedBalance = (user.balance || 0) - amount;
        const updatedEnergy = result.energyUsed && user.energy 
          ? user.energy - 1 
          : user.energy;
        
        updateUser({ 
          balance: updatedBalance,
          energy: updatedEnergy
        });
        
        // Show success toast
        toast({
          title: "转账成功",
          description: result.transferFee 
            ? `已转账 ¥${amount - result.transferFee}，手续费 ¥${result.transferFee}`
            : `已转账 ¥${amount}，使用了1点能量值`,
        });
      } else {
        // Show error toast
        toast({
          variant: "destructive",
          title: "转账失败",
          description: result.message,
        });
      }
      
      return Promise.resolve({ 
        success: result.success, 
        message: result.message 
      });
    } catch (error) {
      console.error('Transfer error:', error);
      toast({
        variant: "destructive",
        title: "转账失败",
        description: "发生错误，请稍后再试",
      });
      return Promise.resolve({ success: false, message: "系统错误" });
    }
  };

  // Find user by username - Updated to return a Promise
  const findUserByUsernameAsync = async (username: string): Promise<User | null> => {
    return Promise.resolve(findUserByUsername(username));
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      register,
      logout,
      updateUser,
      getUserInviteTree,
      transferFunds: handleTransferFunds,
      findUserByUsername: findUserByUsernameAsync
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Wrap your app with this in App.tsx
export const withAuth = (Component: React.ComponentType) => {
  return function WithAuth(props: any) {
    return (
      <AuthProvider>
        <Component {...props} />
      </AuthProvider>
    );
  };
};
