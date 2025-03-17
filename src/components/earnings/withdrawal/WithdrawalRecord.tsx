
import React from 'react';
import { Clock, DollarSign } from 'lucide-react';

interface WithdrawalRecordProps {
  id: string;
  time: string;
  amount: number;
  status: string;
  method: string;
}

const WithdrawalRecord = ({ id, time, amount, status, method }: WithdrawalRecordProps) => {
  return (
    <div className="flex justify-between items-center p-3 sm:p-3 bg-card rounded-lg border shadow-sm hover:shadow-md transition-all duration-200">
      <div className="space-y-0.5">
        <p className="font-medium text-sm flex items-center">
          <span className="text-primary mr-1">#</span>{id}
        </p>
        <p className="text-xs text-muted-foreground flex items-center">
          <Clock className="h-3 w-3 mr-1 inline-block" />
          {time}
        </p>
      </div>
      <div className="text-right">
        <p className="font-bold text-primary text-sm flex items-center justify-end">
          <DollarSign className="h-3.5 w-3.5 mr-0.5" />
          {amount.toFixed(2)}
        </p>
        <p className="text-xs text-muted-foreground">{method}</p>
      </div>
    </div>
  );
};

export default WithdrawalRecord;
