
import React from 'react';
import DeviceEarningsDistribution from './distribution/DeviceEarningsDistribution';
import WithdrawalRecords from './withdrawal/WithdrawalRecords';
import BillDownload from './bills/BillDownload';

const EarningsSidebar = () => {
  return (
    <div className="bg-muted/30 p-3 rounded-xl border border-border shadow-sm space-y-4 sm:space-y-5">
      <h3 className="text-sm font-medium text-muted-foreground">收益视图</h3>
      <DeviceEarningsDistribution />
      <WithdrawalRecords />
      <BillDownload />
    </div>
  );
};

export default EarningsSidebar;
