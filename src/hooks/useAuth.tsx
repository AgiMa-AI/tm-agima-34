
import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockUsers } from '@/data/mockUsers';
import { User, UserWithPassword } from '@/types/auth';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Partial<UserWithPassword>) => Promise<boolean>;
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
    console.log(`Attempting login with username: ${username}, password: ${password}`);
    
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
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const register = async (userData: Partial<UserWithPassword>): Promise<boolean> => {
    // In a real app, this would call an API to create a user
    // For our mock demo, we'll just pretend it succeeded
    console.log('Register user data:', userData);
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
