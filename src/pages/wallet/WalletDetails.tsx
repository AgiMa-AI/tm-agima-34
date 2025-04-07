
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Layers, Clock, CreditCard, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Badge } from "@/components/ui/badge";

const WalletDetails = () => {
  const { user } = useAuth();
  
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
          <h1 className="text-2xl font-bold">账户详情</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>账户概览</CardTitle>
            <CardDescription>
              查看您的账户详细信息和安全设置
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5 text-primary" />
                    <CardTitle className="text-base">账户余额</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">¥{user?.balance?.toFixed(2) || "0.00"}</p>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link to="/wallet/recharge">充值</Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link to="/wallet/withdraw">提现</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <Layers className="mr-2 h-5 w-5 text-primary" />
                    <CardTitle className="text-base">算力额度</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{user?.computeUnits || 0}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    可用于租赁和模型调用的计算资源
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-medium mb-3">账户信息</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">用户名</span>
                  <span className="font-medium">{user?.username}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">账户类型</span>
                  <Badge variant="outline">
                    {user?.role === 'admin' ? '管理员' : 
                     user?.role === 'provider' ? '提供商' : '租户'}
                  </Badge>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">注册时间</span>
                  <span>{user?.joinDate || '-'}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">账户状态</span>
                  <Badge variant={user?.status === 'active' ? 'success' : 'destructive'}>
                    {user?.status === 'active' ? '正常' : 
                     user?.status === 'suspended' ? '已停用' : '待激活'}
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-medium mb-3">安全设置</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-600" />
                    <div>
                      <p className="font-medium">两步验证</p>
                      <p className="text-sm text-muted-foreground">增强账户安全性</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    设置
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
                    <div>
                      <p className="font-medium">支付方式</p>
                      <p className="text-sm text-muted-foreground">管理您的支付方式</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    管理
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-amber-600" />
                    <div>
                      <p className="font-medium">登录历史</p>
                      <p className="text-sm text-muted-foreground">查看最近的登录记录</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    查看
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default WalletDetails;
