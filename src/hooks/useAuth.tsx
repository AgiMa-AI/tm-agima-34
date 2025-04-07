
import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockUsers } from '@/data/mockUsers';
import { User, UserWithPassword } from '@/types/auth';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading?: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Partial<UserWithPassword>) => Promise<boolean>;
  updateUser?: (data: Partial<User>) => void;
  getUserInviteTree?: (userId: string) => string[];
  transferFunds?: (recipientId: string, amount: number) => Promise<{success: boolean; message: string;}>;
  findUserByUsername?: (username: string) => Promise<User | null>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => false,
  logout: () => {},
  register: async () => false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    console.log(`Attempting login with username: ${username}, password: ${password}`);
    
    try {
      // Find user with case-insensitive username matching
      const foundUser = mockUsers.find(u => 
        u.username.toLowerCase() === username.toLowerCase() && 
        u.password === password
      );

      if (foundUser) {
        console.log('User found:', foundUser);
        
        // Remove the password before storing in state/localStorage
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        setIsAuthenticated(true);
        
        // Store in localStorage for persistence
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        
        return true;
      }
      
      console.log('Login failed: User not found or password incorrect');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const register = async (userData: Partial<UserWithPassword>): Promise<boolean> => {
    setIsLoading(true);
    try {
      // In a real app, this would call an API to create a user
      // For our mock demo, we'll just pretend it succeeded
      console.log('Register user data:', userData);
      return true;
    } finally {
      setIsLoading(false);
    }
  };

  // Stub implementations for the missing methods to match the interface
  const updateUser = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const getUserInviteTree = (userId: string): string[] => {
    const foundUser = mockUsers.find(u => u.id === userId);
    return foundUser?.inviteTree || [];
  };

  const transferFunds = async (recipientId: string, amount: number): Promise<{success: boolean; message: string;}> => {
    // Simplified mock implementation
    console.log(`Transfer ${amount} to ${recipientId}`);
    return { success: true, message: "Transfer successful" };
  };

  const findUserByUsername = async (username: string): Promise<User | null> => {
    const user = mockUsers.find(u => u.username === username);
    if (!user) return null;
    
    // Don't return sensitive information
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoading,
      login, 
      logout, 
      register,
      updateUser,
      getUserInviteTree,
      transferFunds,
      findUserByUsername
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
