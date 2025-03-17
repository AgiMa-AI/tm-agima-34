
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, AlertCircle } from "lucide-react";

interface AmountInputProps {
  amount: string;
  setAmount: (value: string) => void;
  isLoading: boolean;
  showFeeWarning: boolean;
}

const AmountInput = ({ amount, setAmount, isLoading, showFeeWarning }: AmountInputProps) => {
  const parsedAmount = parseFloat(amount);
  const isValidAmount = !isNaN(parsedAmount) && parsedAmount > 0;
  const feeAmount = isValidAmount ? (parsedAmount * 0.01).toFixed(2) : "0.00";
  
  return (
    <div className="space-y-2">
      <Label htmlFor="amount" className="font-medium">转账金额</Label>
      <div className="relative">
        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          id="amount"
          type="number"
          placeholder="输入金额"
          min="1"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="pl-9"
          disabled={isLoading}
        />
      </div>
      {showFeeWarning && isValidAmount && (
        <div className="text-sm text-amber-600 flex items-center gap-1.5 bg-amber-50 p-2 rounded-md border border-amber-200/50">
          <AlertCircle className="h-3.5 w-3.5" />
          <span>将收取手续费: ¥{feeAmount} (1%)</span>
        </div>
      )}
      {!showFeeWarning && isValidAmount && (
        <div className="text-sm text-green-600 flex items-center gap-1.5 bg-green-50 p-2 rounded-md border border-green-200/50">
          <AlertCircle className="h-3.5 w-3.5" />
          <span>使用1点能量免手续费</span>
        </div>
      )}
    </div>
  );
};

export default AmountInput;
