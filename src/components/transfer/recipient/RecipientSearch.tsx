
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { User } from "@/types/auth";

interface RecipientSearchProps {
  recipient: string;
  setRecipient: (value: string) => void;
  isLoading: boolean;
  foundUser: User | null;
  searchPerformed: boolean;
  handleFindUser: () => void;
}

const RecipientSearch = ({
  recipient,
  setRecipient,
  isLoading,
  foundUser,
  searchPerformed,
  handleFindUser
}: RecipientSearchProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="recipient" className="font-medium">接收方用户名</Label>
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
            className="flex-shrink-0 transition-all duration-300 hover:bg-primary/10"
          >
            {isLoading ? "查找中..." : <Search className="h-4 w-4" />}
          </Button>
        ) : null}
      </div>

      {searchPerformed && !foundUser && !isLoading && (
        <div className="text-destructive text-sm flex items-center gap-1.5 bg-destructive/10 p-2 rounded-md border border-destructive/20">
          <X className="h-4 w-4" />
          未找到该用户，请检查用户名是否正确
        </div>
      )}
    </div>
  );
};

export default RecipientSearch;
