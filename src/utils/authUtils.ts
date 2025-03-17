
import { mockUsers } from "@/data/mockUsers";
import { User, UserWithPassword } from "@/types/auth";

// Generate unique invite code
export const generateInviteCode = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = 'AGI-';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

// Find user by invite code
export const findUserByInviteCode = (inviteCode: string): UserWithPassword | undefined => {
  return mockUsers.find(user => user.inviteCode === inviteCode);
};

// Get user invite tree
export const getUserInviteTree = (userId: string): string[] => {
  const foundUser = mockUsers.find(u => u.id === userId);
  return foundUser?.inviteTree || [];
};

// Create new user (returns user object without password)
export const createUser = (
  username: string,
  email: string,
  password: string,
  role: 'renter' | 'provider',
  inviteCode?: string
): { newUser: User; success: boolean; message?: string } => {
  
  // Check if user already exists
  const userExists = mockUsers.some(
    u => u.username === username || u.email === email
  );
  
  if (userExists) {
    return { 
      newUser: {} as User, 
      success: false, 
      message: "用户名或邮箱已被使用" 
    };
  }
  
  // Check if invite code is valid
  let inviterUser = null;
  let inviteTree: string[] = [];
  
  if (inviteCode) {
    // Special handling for root invite code
    if (inviteCode === "agi1a01") { // ROOT_INVITE_CODE
      // User registers with root invite code, treat as direct platform invitation
      inviteTree = ['3']; // Set agima as parent
    } else {
      inviterUser = findUserByInviteCode(inviteCode);
      if (!inviterUser) {
        return { 
          newUser: {} as User, 
          success: false, 
          message: "邀请码无效" 
        };
      }
      
      // Copy inviter's invite tree and add new user
      inviteTree = [...inviterUser.inviteTree];
    }
  } else {
    // When no invite code, use root invite code as invitation source
    inviteTree = ['3']; // Default set agima as parent
  }
  
  // Generate new user ID
  const newUserId = `${mockUsers.length + 1}`;
  
  // Generate user's invite code
  const userInviteCode = generateInviteCode();
  
  // If no inviter, create new invite tree with self as root
  if (!inviteTree.length) {
    inviteTree = [newUserId];
  } else {
    inviteTree.push(newUserId);
  }
  
  // Create new user object
  const newUser = {
    id: newUserId,
    username,
    email,
    role,
    avatar: '',
    balance: 0,
    credits: 10,
    inviteCode: userInviteCode,
    invitedBy: inviteCode === "agi1a01" ? '3' : (inviterUser ? inviterUser.id : '3'),
    inviteTree
  };
  
  // Add user to mock database
  mockUsers.push({...newUser, password});
  
  return { newUser, success: true };
};
