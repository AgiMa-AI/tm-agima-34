
import React from 'react';
import { Card } from '@/components/ui/card';
import PaymentMethods from './PaymentMethods';
import AutoRecharge from './AutoRecharge';
import PromoCode from './PromoCode';
import HelpSection from './HelpSection';

const SidebarTools = () => {
  return (
    <div className="space-y-5">
      <div className="bg-muted/30 p-3 rounded-xl border border-border shadow-sm">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">账户工具</h3>
        <div className="space-y-4">
          <PaymentMethods />
          <AutoRecharge />
          <PromoCode />
          <HelpSection />
        </div>
      </div>
    </div>
  );
};

export default SidebarTools;
