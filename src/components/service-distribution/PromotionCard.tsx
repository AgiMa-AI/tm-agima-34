
import React from 'react';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Factory } from 'lucide-react';

const PromotionCard = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-200 rounded-lg p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-2">寻找行业解决方案？</h3>
          <p className="text-muted-foreground mb-4">
            我们的AI赋能服务已覆盖多个行业，为企业提供定制化的智能解决方案。了解我们如何为您的行业带来创新与效率。
          </p>
          <Button>
            联系解决方案专家
          </Button>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="relative">
            <BrainCircuit className="h-32 w-32 text-indigo-500 opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Factory className="h-12 w-12 text-indigo-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
