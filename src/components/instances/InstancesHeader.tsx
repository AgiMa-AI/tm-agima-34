
import React from 'react';

interface InstancesHeaderProps {
  totalCount: number;
  filteredCount: number;
}

const InstancesHeader = ({ totalCount, filteredCount }: InstancesHeaderProps) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center sm:text-left">
        <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">所有主机实例</h1>
        <p className="text-muted-foreground mt-1 text-sm sm:text-base">
          浏览和筛选可用的主机实例
        </p>
      </div>
      
      <div className="flex items-end justify-between mb-4 flex-wrap gap-2">
        <p className="text-xs sm:text-sm text-muted-foreground w-full sm:w-auto text-center sm:text-left">
          显示 {filteredCount} 个，共 {totalCount} 个实例
        </p>
      </div>
    </div>
  );
};

export default InstancesHeader;
