
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign } from "lucide-react";

interface AmountInputProps {
  amount: string;
  setAmount: (value: string) => void;
  isLoading: boolean;
  showFeeWarning: boolean;
}

const AmountInput = ({ amount, setAmount, isLoading, showFeeWarning }: AmountInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="amount">转账金额</Label>
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
      {showFeeWarning && amount && !isNaN(parseFloat(amount)) && (
        <div className="text-sm text-muted-foreground">
          手续费: ¥{(parseFloat(amount) * 0.01).toFixed(2)} (1%)
        </div>
      )}
    </div>
  );
};

export default AmountInput;
