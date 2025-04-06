
import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, CreditCard, Wallet, History } from "lucide-react";
import { Link } from "react-router-dom";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost";
}

const ActionButton = ({ icon, label, href, onClick, variant = "outline" }: ActionButtonProps) => {
  const buttonContent = (
    <>
      {icon}
      {label}
    </>
  );

  if (href) {
    return (
      <Button className="w-full justify-start" variant={variant} asChild>
        <Link to={href}>{buttonContent}</Link>
      </Button>
    );
  }

  return (
    <Button className="w-full justify-start" variant={variant} onClick={onClick}>
      {buttonContent}
    </Button>
  );
};

const WalletActionButtons = () => {
  const handleRecharge = () => {
    console.log("Recharge clicked");
    // 在此处理充值逻辑，或者跳转到充值页面
  };

  const handleWithdraw = () => {
    console.log("Withdraw clicked");
    // 在此处理提现逻辑，或者跳转到提现页面
  };

  return (
    <div className="space-y-3">
      <ActionButton 
        icon={<PlusCircle className="mr-2 h-4 w-4" />}
        label="充值"
        variant="default"
        onClick={handleRecharge}
      />
      <ActionButton 
        icon={<CreditCard className="mr-2 h-4 w-4" />}
        label="提现"
        onClick={handleWithdraw}
      />
      <ActionButton 
        icon={<Wallet className="mr-2 h-4 w-4" />}
        label="账户详情"
        href="/wallet/details"
      />
      <ActionButton 
        icon={<History className="mr-2 h-4 w-4" />}
        label="完整交易历史"
        href="/wallet/history"
      />
    </div>
  );
};

export default WalletActionButtons;
