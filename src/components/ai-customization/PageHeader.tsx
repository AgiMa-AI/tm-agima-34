
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PageHeader = () => {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">专属AI定制服务</h1>
        <Button variant="outline" asChild>
          <Link to="/ai-customization/contact">
            获取方案咨询
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <p className="text-muted-foreground">根据您的业务需求，定制专属的人工智能解决方案</p>
    </div>
  );
};

export default PageHeader;
