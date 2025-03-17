
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "@/types/auth";
import { Bolt, DollarSign } from "lucide-react";

interface BalanceSummaryProps {
  user: User | null;
}

const BalanceSummary = ({ user }: BalanceSummaryProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card className="bg-primary/5 shadow-sm hover:shadow-md transition-all duration-200">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">可用余额</p>
              <h2 className="text-3xl font-bold">¥{user?.balance?.toFixed(2) || "0.00"}</h2>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-green-50/50 shadow-sm hover:shadow-md transition-all duration-200">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">能量值</p>
              <h2 className="text-3xl font-bold">{user?.energy || 0}</h2>
              <p className="text-xs text-green-600">消耗能量值可免交易手续费</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <Bolt className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BalanceSummary;
