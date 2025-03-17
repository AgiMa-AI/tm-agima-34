
import React from "react";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { SendHorizontal, Bolt } from "lucide-react";

interface TransferHeaderProps {
  showFeeWarning: boolean;
}

const TransferHeader = ({ showFeeWarning }: TransferHeaderProps) => {
  return (
    <>
      <CardTitle className="flex items-center gap-2">
        <SendHorizontal className="h-5 w-5" />
        用户转账
      </CardTitle>
      <CardDescription>
        向其他用户转账资金
        {showFeeWarning ? (
          <span className="block text-amber-500 mt-1 text-xs flex items-center gap-1">
            <Bolt className="h-3 w-3" />
            能量值不足，将收取1%手续费
          </span>
        ) : (
          <span className="block text-green-500 mt-1 text-xs flex items-center gap-1">
            <Bolt className="h-3 w-3" />
            消耗1点能量值，免手续费
          </span>
        )}
      </CardDescription>
    </>
  );
};

export default TransferHeader;
