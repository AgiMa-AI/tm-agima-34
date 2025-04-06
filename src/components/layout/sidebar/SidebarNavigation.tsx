
import React from 'react';
import { NavItem } from '../NavItem';
import { NavSection } from '../NavSection';
import { useAuth } from '@/hooks/useAuth';
import {
  BarChart2,
  Calendar,
  CreditCard,
  Home,
  Settings,
  Users,
  Sliders,
  Layers,
  Brain,
  Cpu,
  Server,
  MobileIcon,
  Share2,
  Bot,
  LineChart,
  Globe,
  Shield,
  Database,
} from 'lucide-react';

interface SidebarNavigationProps {
  collapsed?: boolean;
}

const SidebarNavigation = ({ collapsed }: SidebarNavigationProps) => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  return (
    <div className="flex flex-col gap-2 px-2">
      <NavSection collapsed={collapsed} label="实例">
        <NavItem
          collapsed={collapsed}
          href="/"
          label="实例列表"
          icon={Home}
        />
        <NavItem
          collapsed={collapsed}
          href="/charts"
          label="图表分析"
          icon={BarChart2}
        />
      </NavSection>

      <NavSection collapsed={collapsed} label="账户">
        <NavItem
          collapsed={collapsed}
          href="/wallet"
          label="钱包"
          icon={CreditCard}
        />
        <NavItem
          collapsed={collapsed}
          href="/earnings"
          label="收益"
          icon={LineChart}
        />
        <NavItem
          collapsed={collapsed}
          href="/billing"
          label="计费"
          icon={Calendar}
        />
      </NavSection>

      <NavSection collapsed={collapsed} label="AGI服务">
        <NavItem
          collapsed={collapsed}
          href="/agi-models"
          label="AGI模型"
          icon={Brain}
        />
        <NavItem
          collapsed={collapsed}
          href="/agi-hosting"
          label="AGI托管"
          icon={Server}
        />
        <NavItem
          collapsed={collapsed}
          href="/agi-leasing"
          label="AGI租赁"
          icon={Cpu}
        />
        <NavItem
          collapsed={collapsed}
          href="/mobile-computing"
          label="移动计算"
          icon={MobileIcon}
        />
        <NavItem
          collapsed={collapsed}
          href="/service-distribution"
          label="服务分发"
          icon={Share2}
        />
      </NavSection>

      <NavSection collapsed={collapsed} label="AI解决方案">
        <NavItem
          collapsed={collapsed}
          href="/ai-customization"
          label="AI定制化"
          icon={Sliders}
        />
        <NavItem
          collapsed={collapsed}
          href="/ai-commercial"
          label="AI商业化"
          icon={Bot}
        />
        <NavItem
          collapsed={collapsed}
          href="/ai-consulting"
          label="AI咨询"
          icon={Globe}
        />
        <NavItem
          collapsed={collapsed}
          href="/ai-solutions"
          label="AI解决方案"
          icon={Layers}
        />
        <NavItem
          collapsed={collapsed}
          href="/ai-performance"
          label="AI性能"
          icon={LineChart}
        />
      </NavSection>

      {isAdmin && (
        <NavSection collapsed={collapsed} label="管理">
          <NavItem
            collapsed={collapsed}
            href="/admin/dashboard"
            label="管理仪表盘"
            icon={BarChart2}
          />
          <NavItem
            collapsed={collapsed}
            href="/admin/users"
            label="用户管理"
            icon={Users}
          />
          <NavItem
            collapsed={collapsed}
            href="/admin/instances"
            label="实例管理"
            icon={Server}
          />
          <NavItem
            collapsed={collapsed}
            href="/admin/api-config"
            label="API配置"
            icon={Globe}
          />
          <NavItem
            collapsed={collapsed}
            href="/admin/settings"
            label="系统设置"
            icon={Settings}
          />
        </NavSection>
      )}
    </div>
  );
};

export default SidebarNavigation;
