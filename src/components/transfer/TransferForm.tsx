
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { User } from "@/types/auth";
import { SendHorizontal } from "lucide-react";

// Import our new components
import RecipientSearch from "./recipient/RecipientSearch";
import FoundUserCard from "./recipient/FoundUserCard";
import AmountInput from "./amount/AmountInput";
import BalanceDisplay from "./balance/BalanceDisplay";
import TransferHeader from "./TransferHeader";

const TransferForm = () => {
  const { user, transferFunds, findUserByUsername } = useAuth();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [foundUser, setFoundUser] = useState<User | null>(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  // 查找接收方用户
  const handleFindUser = async () => {
    if (!recipient.trim()) {
      toast({
        variant: "destructive",
        title: "请输入用户名",
        description: "接收方用户名不能为空",
      });
      return;
    }

    setIsLoading(true);
    setSearchPerformed(true);

    try {
      const result = await findUserByUsername(recipient);
      setFoundUser(result);
      
      if (!result) {
        toast({
          variant: "destructive",
          title: "未找到用户",
          description: `用户名"${recipient}"不存在`,
        });
      }
    } catch (error) {
      console.error("查找用户错误:", error);
      toast({
        variant: "destructive",
        title: "查找用户失败",
        description: "系统错误，请稍后再试",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // 处理转账
  const handleTransfer = async () => {
    if (!foundUser) {
      toast({
        variant: "destructive",
        title: "转账失败",
        description: "请先查找并选择接收方用户",
      });
      return;
    }

    const transferAmount = parseFloat(amount);
    if (isNaN(transferAmount) || transferAmount <= 0) {
      toast({
        variant: "destructive",
        title: "请输入有效金额",
        description: "转账金额必须大于0",
      });
      return;
    }

    if (!user?.balance || user.balance < transferAmount) {
      toast({
        variant: "destructive",
        title: "余额不足",
        description: "账户余额不足以完成转账",
      });
      return;
    }

    setIsLoading(true);
    try {
      await transferFunds(foundUser.id, transferAmount);
      // 成功后重置表单
      setRecipient("");
      setAmount("");
      setFoundUser(null);
      setSearchPerformed(false);
    } finally {
      setIsLoading(false);
    }
  };

  // 重置接收方
  const handleClearUser = () => {
    setFoundUser(null);
    setRecipient("");
  };

  // 需要显示手续费提示吗？
  const showFeeWarning = !user?.energy || user.energy < 1;

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <TransferHeader showFeeWarning={showFeeWarning} />
      </CardHeader>
      
      <CardContent className="space-y-4">
        <RecipientSearch
          recipient={recipient}
          setRecipient={setRecipient}
          isLoading={isLoading}
          foundUser={foundUser}
          searchPerformed={searchPerformed}
          handleFindUser={handleFindUser}
        />

        {foundUser && <FoundUserCard foundUser={foundUser} onClear={handleClearUser} />}

        {foundUser && (
          <AmountInput
            amount={amount}
            setAmount={setAmount}
            isLoading={isLoading}
            showFeeWarning={showFeeWarning}
          />
        )}

        <BalanceDisplay user={user} showFeeWarning={showFeeWarning} />
      </CardContent>
      
      <CardFooter>
        <Button
          onClick={handleTransfer}
          disabled={isLoading || !foundUser || !amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0}
          className="w-full"
        >
          <SendHorizontal className="h-4 w-4 mr-2" />
          {isLoading ? "处理中..." : "确认转账"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TransferForm;
