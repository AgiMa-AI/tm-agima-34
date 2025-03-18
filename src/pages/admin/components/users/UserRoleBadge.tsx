
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface RoleConfig {
  label: string;
  variant?: "default" | "destructive" | "outline" | "secondary";
  className?: string;
}

interface UserRoleBadgeProps {
  role?: string;
  roleConfigs?: Record<string, RoleConfig>;
}

export const UserRoleBadge = ({ role, roleConfigs }: UserRoleBadgeProps) => {
  // 默认角色配置
  const defaultRoleConfigs: Record<string, RoleConfig> = {
    admin: {
      label: "管理员",
      className: "bg-purple-500"
    },
    provider: {
      label: "提供者",
      className: "bg-blue-500"
    },
    renter: {
      label: "普通用户",
      variant: "outline"
    },
    default: {
      label: "未知",
      variant: "outline"
    }
  };

  // 合并默认配置和自定义配置
  const configs = { ...defaultRoleConfigs, ...(roleConfigs || {}) };
  const config = configs[role || "default"] || configs.default;

  return (
    <Badge 
      variant={config.variant} 
      className={config.className}
    >
      {config.label}
    </Badge>
  );
};
