
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface StatusConfig {
  label: string;
  variant?: "default" | "destructive" | "outline" | "secondary";
  className?: string;
}

interface UserStatusBadgeProps {
  status?: string;
  statusConfigs?: Record<string, StatusConfig>;
}

export const UserStatusBadge = ({ status, statusConfigs }: UserStatusBadgeProps) => {
  // 默认状态配置
  const defaultStatusConfigs: Record<string, StatusConfig> = {
    active: {
      label: "活跃",
      className: "bg-green-500"
    },
    suspended: {
      label: "已停用",
      variant: "destructive"
    },
    pending: {
      label: "待验证",
      variant: "outline",
      className: "text-amber-500 border-amber-500"
    },
    default: {
      label: "未知",
      variant: "outline"
    }
  };

  // 合并默认配置和自定义配置
  const configs = { ...defaultStatusConfigs, ...(statusConfigs || {}) };
  const config = configs[status || "default"] || configs.default;

  return (
    <Badge 
      variant={config.variant} 
      className={config.className}
    >
      {config.label}
    </Badge>
  );
};
