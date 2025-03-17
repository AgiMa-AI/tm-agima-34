
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, Send, History } from 'lucide-react';

interface EarningsTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const EarningsTabs = ({ activeTab, onTabChange }: EarningsTabsProps) => {
  return (
    <TabsList className="w-full grid grid-cols-2">
      <TabsTrigger 
        value="tasks" 
        onClick={() => onTabChange('tasks')}
        className={`flex items-center justify-center gap-1.5 ${activeTab === 'tasks' ? 'data-[state=active]:bg-background' : ''}`}
      >
        <Calculator className="h-4 w-4" />
        算力任务
      </TabsTrigger>
      <TabsTrigger 
        value="transfer" 
        onClick={() => onTabChange('transfer')}
        className={`flex items-center justify-center gap-1.5 ${activeTab === 'transfer' ? 'data-[state=active]:bg-background' : ''}`}
      >
        <Send className="h-4 w-4" />
        转账
      </TabsTrigger>
    </TabsList>
  );
};

export default EarningsTabs;
