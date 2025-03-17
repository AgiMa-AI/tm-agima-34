
import React from "react";
import { Button } from "@/components/ui/button";
import { User } from "@/types/auth";
import { UserCheck } from "lucide-react";

interface FoundUserCardProps {
  foundUser: User;
  onClear: () => void;
}

const FoundUserCard = ({ foundUser, onClear }: FoundUserCardProps) => {
  if (!foundUser) return null;
  
  return (
    <div className="p-3 bg-muted rounded-lg flex justify-between items-center">
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
        onClick={onClear}
        className="hover:bg-destructive/10 hover:text-destructive"
      >
        更换
      </Button>
    </div>
  );
};

export default FoundUserCard;
