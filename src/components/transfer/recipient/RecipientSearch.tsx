
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { User } from "@/types/auth";
import { Search } from "lucide-react";

interface RecipientSearchProps {
  recipient: string;
  setRecipient: (value: string) => void;
  isLoading: boolean;
  foundUser: User | null;
  searchPerformed: boolean;
  handleFindUser: () => Promise<void>;
}

const RecipientSearch = ({
  recipient,
  setRecipient,
  isLoading,
  foundUser,
  searchPerformed,
  handleFindUser,
}: RecipientSearchProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="recipient">接收方用户名</Label>
      <div className="flex gap-2">
        <Input
          id="recipient"
          placeholder="输入用户名"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="flex-1"
          disabled={isLoading || !!foundUser}
        />
        {!foundUser && (
          <Button
            onClick={handleFindUser}
            disabled={isLoading || !recipient.trim()}
            variant="outline"
          >
            <Search className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      {searchPerformed && !foundUser && !isLoading && (
        <div className="text-destructive text-sm">
          未找到该用户，请检查用户名是否正确
        </div>
      )}
    </div>
  );
};

export default RecipientSearch;
