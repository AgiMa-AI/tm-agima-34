
import React from 'react';
import NavItem from '../NavItem';
import NavSection from '../NavSection';
import { useAuth } from '@/hooks/useAuth';
import {
  BarChart2,
  Calendar,
  CreditCard,
  Home,
  Settings,
  Sliders,
  Layers,
  Brain,
  Cpu,
  Server,
  Smartphone,
  Share2,
  Bot,
  LineChart,
  Globe,
  Database,
} from 'lucide-react';

interface SidebarNavigationProps {
  collapsed?: boolean;
}

const SidebarNavigation = ({ collapsed }: SidebarNavigationProps) => {
  const { user } = useAuth();

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
          icon={Smartphone}
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
    </div>
  );
};

export default SidebarNavigation;
