
import React from "react";
import { User } from "@/types/auth";
import { Bolt, DollarSign } from "lucide-react";

interface BalanceDisplayProps {
  user: User | null;
  showFeeWarning: boolean;
}

const BalanceDisplay = ({ user, showFeeWarning }: BalanceDisplayProps) => {
  return (
    <>
      <div className={`flex items-center justify-between p-3 ${showFeeWarning ? 'bg-amber-50/50' : 'bg-green-50/50'} rounded-lg border ${showFeeWarning ? 'border-amber-200/50' : 'border-green-200/50'} transition-colors shadow-sm`}>
        <div className="flex items-center gap-2">
          <Bolt className={`h-4 w-4 ${showFeeWarning ? 'text-amber-500' : 'text-green-500'}`} />
          <span className="text-sm font-medium">能量值</span>
        </div>
        <span className="font-medium">{user?.energy || 0}</span>
      </div>

      <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/10 shadow-sm">
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-green-500" />
          <span className="text-sm font-medium">可用余额</span>
        </div>
        <span className="font-medium">¥{user?.balance?.toFixed(2) || "0.00"}</span>
      </div>
    </>
  );
};

export default BalanceDisplay;
