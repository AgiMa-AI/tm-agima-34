
import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, CreditCard, Wallet, History } from "lucide-react";

const WalletActionButtons = () => {
  return (
    <div className="space-y-3">
      <Button className="w-full justify-start">
        <PlusCircle className="mr-2 h-4 w-4" />
        充值
      </Button>
      <Button variant="outline" className="w-full justify-start">
        <CreditCard className="mr-2 h-4 w-4" />
        提现
      </Button>
      <Button variant="outline" className="w-full justify-start">
        <Wallet className="mr-2 h-4 w-4" />
        账户详情
      </Button>
      <Button variant="outline" className="w-full justify-start">
        <History className="mr-2 h-4 w-4" />
        完整交易历史
      </Button>
    </div>
  );
};

export default WalletActionButtons;
