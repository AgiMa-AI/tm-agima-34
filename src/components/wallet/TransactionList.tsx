
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { SendHorizontal, Download, ArrowUpRight, ArrowDownLeft } from "lucide-react";

// Mock transaction data
const mockTransactions = [
  {
    id: 1,
    date: "2023-12-15",
    type: "transfer",
    description: "转账给用户: user123",
    amount: -100.00,
    status: "success",
  },
  {
    id: 2,
    date: "2023-12-12",
    type: "recharge",
    description: "账户充值",
    amount: 500.00,
    status: "success",
  },
  {
    id: 3,
    date: "2023-12-08",
    type: "received",
    description: "来自用户: admin",
    amount: 150.00,
    status: "success",
  },
  {
    id: 4,
    date: "2023-12-05",
    type: "service",
    description: "实例使用: ML Optimized Server",
    amount: -82.50,
    status: "success",
  },
  {
    id: 5,
    date: "2023-12-01",
    type: "recharge",
    description: "账户充值",
    amount: 1000.00,
    status: "success",
  },
];

const getTransactionIcon = (type: string) => {
  switch (type) {
    case "transfer":
      return <SendHorizontal className="h-4 w-4 text-amber-500" />;
    case "recharge":
      return <Download className="h-4 w-4 text-green-500" />;
    case "received":
      return <ArrowDownLeft className="h-4 w-4 text-blue-500" />;
    case "service":
      return <ArrowUpRight className="h-4 w-4 text-purple-500" />;
    default:
      return null;
  }
};

const TransactionList = () => {
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>时间</TableHead>
              <TableHead>类型</TableHead>
              <TableHead>描述</TableHead>
              <TableHead className="text-right">金额</TableHead>
              <TableHead>状态</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getTransactionIcon(transaction.type)}
                    <span>
                      {transaction.type === "transfer" ? "转账" :
                       transaction.type === "recharge" ? "充值" :
                       transaction.type === "received" ? "收款" :
                       transaction.type === "service" ? "服务费" : "其他"}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell className={`text-right font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-500">{transaction.status === "success" ? "成功" : "处理中"}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionList;
