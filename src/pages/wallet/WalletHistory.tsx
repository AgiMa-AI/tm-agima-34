
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Mock data for the transaction history
const transactionHistory = [
  {
    id: "TX-56789",
    date: "2023-05-15T14:30:00",
    type: "deposit",
    amount: 500,
    description: "账户充值",
    status: "completed",
  },
  {
    id: "TX-56788",
    date: "2023-05-10T09:15:00",
    type: "withdraw",
    amount: -200,
    description: "提现至银行卡",
    status: "completed",
  },
  {
    id: "TX-56787",
    date: "2023-05-05T11:20:00",
    type: "transfer",
    amount: -150,
    description: "向用户 user123 转账",
    status: "completed",
  },
  {
    id: "TX-56786",
    date: "2023-04-28T16:45:00",
    type: "payment",
    amount: -80,
    description: "模型租赁付款",
    status: "completed",
  },
  {
    id: "TX-56785",
    date: "2023-04-25T10:30:00",
    type: "earning",
    amount: 320,
    description: "算力收益",
    status: "completed",
  },
  {
    id: "TX-56784",
    date: "2023-04-20T13:15:00",
    type: "deposit",
    amount: 1000,
    description: "账户充值",
    status: "completed",
  },
  {
    id: "TX-56783",
    date: "2023-04-15T17:20:00",
    type: "withdraw",
    amount: -500,
    description: "提现至支付宝",
    status: "completed",
  },
  {
    id: "TX-56782",
    date: "2023-04-10T09:05:00",
    type: "earning",
    amount: 450,
    description: "算力收益",
    status: "completed",
  },
  {
    id: "TX-56781",
    date: "2023-04-05T14:30:00",
    type: "payment",
    amount: -120,
    description: "服务费用",
    status: "completed",
  },
  {
    id: "TX-56780",
    date: "2023-03-30T11:45:00",
    type: "transfer",
    amount: -200,
    description: "向用户 user456 转账",
    status: "completed",
  },
];

const getTransactionBadge = (type: string) => {
  switch (type) {
    case "deposit":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">充值</Badge>;
    case "withdraw":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">提现</Badge>;
    case "transfer":
      return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">转账</Badge>;
    case "payment":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">支付</Badge>;
    case "earning":
      return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">收益</Badge>;
    default:
      return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">其他</Badge>;
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const WalletHistory = () => {
  return (
    <Layout>
      <div className="container max-w-6xl py-6 space-y-6">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link to="/wallet">
              <ArrowLeft className="h-4 w-4 mr-1" />
              返回钱包
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">交易历史</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>完整交易记录</CardTitle>
            <CardDescription>
              查看您账户的所有充值、提现、转账和收益记录
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-3 justify-between">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="搜索交易记录..." 
                  className="pl-9" 
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="交易类型" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">全部类型</SelectItem>
                    <SelectItem value="deposit">充值</SelectItem>
                    <SelectItem value="withdraw">提现</SelectItem>
                    <SelectItem value="transfer">转账</SelectItem>
                    <SelectItem value="payment">支付</SelectItem>
                    <SelectItem value="earning">收益</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="时间范围" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">全部时间</SelectItem>
                    <SelectItem value="7days">最近7天</SelectItem>
                    <SelectItem value="30days">最近30天</SelectItem>
                    <SelectItem value="90days">最近90天</SelectItem>
                    <SelectItem value="custom">自定义</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" className="flex gap-1 items-center">
                  <Filter className="h-4 w-4" />
                  <span>筛选</span>
                </Button>
                
                <Button variant="outline" className="flex gap-1 items-center">
                  <Download className="h-4 w-4" />
                  <span>导出</span>
                </Button>
              </div>
            </div>
            
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>交易ID</TableHead>
                    <TableHead>时间</TableHead>
                    <TableHead>类型</TableHead>
                    <TableHead>描述</TableHead>
                    <TableHead className="text-right">金额</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactionHistory.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{formatDate(transaction.date)}</TableCell>
                      <TableCell>{getTransactionBadge(transaction.type)}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell className={`text-right font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                显示 1-10 条记录，共 {transactionHistory.length} 条
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  上一页
                </Button>
                <Button variant="outline" size="sm">
                  下一页
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default WalletHistory;
