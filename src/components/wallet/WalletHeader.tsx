
import React from "react";
import { Wallet } from "lucide-react";

const WalletHeader = () => {
  return (
    <div className="flex items-center space-x-2">
      <Wallet className="h-6 w-6 text-primary" />
      <h1 className="text-2xl font-bold">我的钱包</h1>
    </div>
  );
};

export default WalletHeader;
