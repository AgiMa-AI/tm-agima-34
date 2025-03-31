import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, LogOut, Search, Settings, User, Brain, Bot } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/hooks/useAuth';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/"
            className="flex items-center space-x-2 font-semibold text-xl transition-colors hover:text-primary"
          >
            <Brain className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline-block ai-text-gradient">AGI智能云</span>
            <span className="sm:hidden ai-text-gradient">AGI</span>
          </Link>
        </div>

        <div className="flex-1 flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="搜索智能模型..."
              className="w-full pl-8 bg-background border-muted rounded-lg focus:border-primary"
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-primary/70 hover:text-primary"
            aria-label="通知"
          >
            <Bell className="h-5 w-5" />
          </Button>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-primary/20 hover:border-primary/40 ai-shadow"
                  aria-label="用户菜单"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="用户头像" />
                    <AvatarFallback className="bg-primary/10 text-primary">{user?.username.slice(0, 2).toUpperCase() || 'U'}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 border-primary/20 ai-shadow">
                <DropdownMenuLabel>我的账户</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4 text-primary" />
                  <span>个人资料</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/wallet')}>
                  <span>钱包管理</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/settings')}>
                  <Settings className="mr-2 h-4 w-4 text-primary" />
                  <span>设置</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4 text-destructive" />
                  <span>退出登录</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="ai" 
              size="sm" 
              className="flex items-center gap-1"
              onClick={handleLogin}
            >
              <Bot className="h-4 w-4" />
              登录
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
