
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CreditCard, Wallet, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/hooks/useAuth";

const WalletWithdraw = () => {
  const { user } = useAuth();
  const [amount, setAmount] = useState("");
  const [withdrawalMethod, setWithdrawalMethod] = useState("alipay");
  
  // Get user balance from auth context
  const userBalance = user?.balance || 0;
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);
  };
  
  const handleWithdraw = () => {
    // Implement withdrawal logic here
    console.log("Withdrawal requested:", {
      amount,
      method: withdrawalMethod
    });
  };

  return (
    <Layout>
      <div className="container max-w-3xl py-6 space-y-6">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link to="/wallet">
              <ArrowLeft className="h-4 w-4 mr-1" />
              返回钱包
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">账户提现</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>提现金额</CardTitle>
            <CardDescription>
              当前可提现余额: ¥{userBalance.toFixed(2)}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-lg">¥</span>
              </div>
              <Input
                type="number"
                placeholder="输入提现金额"
                value={amount}
                onChange={handleAmountChange}
                className="pl-8 text-lg"
              />
            </div>
            
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                提现金额最低100元，提现将在1-3个工作日内到账
              </AlertDescription>
            </Alert>
            
            <div className="pt-4 border-t">
              <p className="font-medium mb-3">选择提现方式</p>
              <RadioGroup 
                value={withdrawalMethod} 
                onValueChange={setWithdrawalMethod} 
                className="space-y-3"
              >
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="alipay" id="w-alipay" />
                  <Label htmlFor="w-alipay" className="flex items-center">
                    <Wallet className="h-5 w-5 mr-2 text-blue-600" />
                    支付宝
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="bank" id="w-bank" />
                  <Label htmlFor="w-bank" className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-purple-600" />
                    银行卡
                  </Label>
                </div>
              </RadioGroup>
            </div>
            
            {withdrawalMethod === "bank" && (
              <div className="space-y-3 pt-3 border-t">
                <h3 className="font-medium">银行卡信息</h3>
                <Input placeholder="持卡人姓名" />
                <Input placeholder="银行卡号" />
                <Input placeholder="开户银行" />
              </div>
            )}
            
            {withdrawalMethod === "alipay" && (
              <div className="space-y-3 pt-3 border-t">
                <h3 className="font-medium">支付宝信息</h3>
                <Input placeholder="支付宝账号" />
                <Input placeholder="真实姓名" />
              </div>
            )}
            
            <Button 
              className="w-full" 
              onClick={handleWithdraw}
              disabled={!amount || parseFloat(amount) <= 0 || parseFloat(amount) > userBalance}
            >
              确认提现
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default WalletWithdraw;
