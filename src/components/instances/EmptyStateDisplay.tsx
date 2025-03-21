
import React from 'react';
import { Server } from 'lucide-react';

const EmptyStateDisplay = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 sm:py-8 md:py-12 text-center font-display">
      <Server className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground/50 mb-3 sm:mb-4" />
      <h3 className="text-base sm:text-lg font-medium">未找到实例</h3>
      <p className="text-sm text-muted-foreground mt-1 max-w-md px-4">
        我们找不到符合您当前筛选条件的实例。请尝试调整您的筛选条件。
      </p>
    </div>
  );
};

export default EmptyStateDisplay;
