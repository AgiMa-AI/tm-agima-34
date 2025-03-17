
import { User, TransferResult } from "@/types/auth";
import { mockUsers } from "@/data/mockUsers";

// Transfer fee rate (when there is not enough energy)
const TRANSFER_FEE_RATE = 0.01; // 1%
// Energy cost per transfer
const ENERGY_COST_PER_TRANSFER = 1;

// Find user by username - client-side only
export const findUserByUsername = (username: string): User | null => {
  const user = mockUsers.find(u => u.username === username);
  
  if (!user) return null;
  
  // Don't return sensitive information
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

// User-to-user transfer functionality - client-side only
export const transferFunds = (
  senderId: string,
  recipientId: string,
  amount: number
): TransferResult => {
  // Validate data
  if (!senderId || !recipientId) {
    return { success: false, message: "发送者或接收者信息缺失" };
  }
  
  if (senderId === recipientId) {
    return { success: false, message: "不能给自己转账" };
  }
  
  if (amount <= 0) {
    return { success: false, message: "转账金额必须大于0" };
  }
  
  // Find sender and recipient
  const senderIndex = mockUsers.findIndex(u => u.id === senderId);
  const recipientIndex = mockUsers.findIndex(u => u.id === recipientId);
  
  if (senderIndex === -1) {
    return { success: false, message: "发送方用户不存在" };
  }
  
  if (recipientIndex === -1) {
    return { success: false, message: "接收方用户不存在" };
  }
  
  const sender = mockUsers[senderIndex];
  
  // Check if balance is sufficient
  if (!sender.balance || sender.balance < amount) {
    return { success: false, message: "余额不足" };
  }
  
  // Calculate fee
  let transferFee = 0;
  let energyUsed = false;
  
  // Check if there is enough energy
  if (sender.energy && sender.energy >= ENERGY_COST_PER_TRANSFER) {
    // Use energy for free transfer
    mockUsers[senderIndex].energy! -= ENERGY_COST_PER_TRANSFER;
    energyUsed = true;
  } else {
    // Charge fee
    transferFee = amount * TRANSFER_FEE_RATE;
  }
  
  // Execute transfer
  const actualTransferAmount = amount - transferFee;
  
  // Update sender balance
  mockUsers[senderIndex].balance! -= amount;
  
  // Update recipient balance
  if (!mockUsers[recipientIndex].balance) {
    mockUsers[recipientIndex].balance = 0;
  }
  mockUsers[recipientIndex].balance! += actualTransferAmount;
  
  return { 
    success: true, 
    message: `转账成功${transferFee > 0 ? '，已收取手续费' : ''}`,
    transferFee: transferFee > 0 ? transferFee : undefined,
    energyUsed: energyUsed
  };
};
