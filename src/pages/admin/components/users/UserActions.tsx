
import React from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreVertical, UserX } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import apiService from '@/services/apiService';

interface UserActionsProps {
  userId: string;
}

const UserActions = ({ userId }: UserActionsProps) => {
  const handleDisableAccount = async () => {
    try {
      // 获取API配置
      const configStr = localStorage.getItem('api_config');
      let useApi = false;
      
      if (configStr) {
        const config = JSON.parse(configStr);
        useApi = !!config.baseUrl; // 如果有基础URL，则使用API
      }
      
      if (useApi) {
        // 尝试通过API停用账户
        await apiService.disableUser(userId);
        toast({
          title: "账户已停用",
          description: "该用户账户已被成功停用",
        });
      } else {
        // 无API配置时，使用模拟操作
        toast({
          title: "账户已停用",
          description: "该用户账户已被成功停用 (模拟操作)",
        });
      }
    } catch (error) {
      console.error("停用账户失败:", error);
      toast({
        variant: "destructive",
        title: "操作失败",
        description: "停用账户时发生错误",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-muted">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>用户操作</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          className="flex items-center gap-2 text-red-600 cursor-pointer"
          onClick={handleDisableAccount}
        >
          <UserX className="h-4 w-4" />
          停用账户
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserActions;
