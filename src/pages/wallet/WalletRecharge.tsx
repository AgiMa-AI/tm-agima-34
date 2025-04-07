
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CreditCard, QrCode, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const WalletRecharge = () => {
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
          <h1 className="text-2xl font-bold">账户充值</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>选择充值金额</CardTitle>
            <CardDescription>
              请选择或输入您想要充值的金额
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" className="h-16">¥100</Button>
              <Button variant="outline" className="h-16">¥200</Button>
              <Button variant="outline" className="h-16">¥500</Button>
              <Button variant="outline" className="h-16">¥1000</Button>
              <Button variant="outline" className="h-16">¥2000</Button>
              <Button variant="outline" className="h-16">
                <Input 
                  type="number" 
                  placeholder="其他金额"
                  className="text-center border-none h-full p-0 focus-visible:ring-0" 
                />
              </Button>
            </div>
            
            <div className="pt-4 border-t">
              <p className="font-medium mb-3">选择支付方式</p>
              <RadioGroup defaultValue="wechat" className="space-y-3">
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="wechat" id="wechat" />
                  <Label htmlFor="wechat" className="flex items-center">
                    <QrCode className="h-5 w-5 mr-2 text-green-600" />
                    微信支付
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="alipay" id="alipay" />
                  <Label htmlFor="alipay" className="flex items-center">
                    <QrCode className="h-5 w-5 mr-2 text-blue-600" />
                    支付宝
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-purple-600" />
                    银行卡支付
                  </Label>
                </div>
              </RadioGroup>
            </div>
            
            <Button className="w-full">确认充值</Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default WalletRecharge;
