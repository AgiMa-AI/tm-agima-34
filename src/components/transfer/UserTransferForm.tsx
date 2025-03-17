
import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { User } from "@/types/auth";
import { SendHorizontal, Search, UserCheck, DollarSign, Bolt, X } from "lucide-react";

const UserTransferForm = () => {
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
      } else {
        toast({
          title: "用户查找成功",
          description: `找到用户: ${result.username}`,
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

  // 需要显示手续费提示吗？
  const showFeeWarning = !user?.energy || user.energy < 1;

  return (
    <Card className="w-full max-w-md mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="space-y-1 pb-3">
        <CardTitle className="flex items-center gap-2 text-xl">
          <SendHorizontal className="h-5 w-5 text-primary" />
          用户转账
        </CardTitle>
        <CardDescription>
          向其他用户转账资金
          {showFeeWarning ? (
            <span className="block text-amber-500 mt-1 text-xs">
              <Bolt className="h-3 w-3 inline-block mr-1" />
              能量值不足，将收取1%手续费
            </span>
          ) : (
            <span className="block text-green-500 mt-1 text-xs">
              <Bolt className="h-3 w-3 inline-block mr-1" />
              消耗1点能量值，免手续费
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="recipient" className="text-sm font-medium">接收方用户名</Label>
          <div className="flex gap-2">
            <Input
              id="recipient"
              placeholder="输入用户名"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="flex-1"
              disabled={isLoading || !!foundUser}
            />
            {!foundUser ? (
              <Button
                onClick={handleFindUser}
                disabled={isLoading || !recipient.trim()}
                variant="outline"
                className="flex-shrink-0 button-animation"
              >
                {isLoading ? "查找中..." : <Search className="h-4 w-4" />}
              </Button>
            ) : null}
          </div>
        </div>

        {searchPerformed && !foundUser && !isLoading && (
          <div className="text-destructive text-sm flex items-center gap-1.5 bg-destructive/10 p-2 rounded-md">
            <X className="h-4 w-4" />
            未找到该用户，请检查用户名是否正确
          </div>
        )}

        {foundUser && (
          <div className="p-3 bg-secondary rounded-lg flex justify-between items-center border border-primary/20">
            <div className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">{foundUser.username}</p>
                <p className="text-xs text-muted-foreground">{foundUser.role === "provider" ? "算力提供者" : "租赁用户"}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setFoundUser(null);
                setRecipient("");
              }}
              className="hover:bg-destructive/10 hover:text-destructive"
            >
              更换
            </Button>
          </div>
        )}

        {foundUser && (
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-sm font-medium">转账金额</Label>
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
            {showFeeWarning && amount && !isNaN(parseFloat(amount)) && parseFloat(amount) > 0 && (
              <div className="text-sm text-amber-500 flex items-center gap-1.5 bg-amber-50 p-2 rounded-md">
                <DollarSign className="h-3.5 w-3.5" />
                手续费: ¥{(parseFloat(amount) * 0.01).toFixed(2)} (1%)
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Bolt className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium">能量值</span>
          </div>
          <span className="font-medium">{user?.energy || 0}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">可用余额</span>
          </div>
          <span className="font-medium">¥{user?.balance?.toFixed(2) || "0.00"}</span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button
          onClick={handleTransfer}
          disabled={isLoading || !foundUser || !amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0}
          className="w-full button-animation"
        >
          <SendHorizontal className="h-4 w-4 mr-2" />
          {isLoading ? "处理中..." : "确认转账"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserTransferForm;
