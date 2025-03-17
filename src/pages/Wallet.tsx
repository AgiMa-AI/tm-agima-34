
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import TransferForm from "@/components/transfer/TransferForm";
import TransactionList from "@/components/wallet/TransactionList";
import WalletHeader from "@/components/wallet/WalletHeader";
import BalanceSummary from "@/components/wallet/BalanceSummary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Wallet = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="container max-w-6xl py-6 space-y-8">
        <WalletHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <BalanceSummary user={user} />
            
            <Card className="shadow-sm">
              <CardHeader className="pb-0">
                <Tabs defaultValue="transactions" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="transactions">交易记录</TabsTrigger>
                    <TabsTrigger value="transfer">用户转账</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="transactions" className="mt-6">
                    <CardContent>
                      <TransactionList />
                    </CardContent>
                  </TabsContent>
                  
                  <TabsContent value="transfer" className="mt-6">
                    <CardContent>
                      <TransferForm />
                    </CardContent>
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-sm">
              <CardHeader className="text-center pb-2">
                <h3 className="text-lg font-semibold">快速操作</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Could be expanded with more wallet functions in the future */}
                <WalletActionButtons />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wallet;
