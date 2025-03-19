
// A service to interact with the CloseChat API
import apiService from './apiService';

interface Message {
  id?: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

// This is currently a mock implementation
// In a real app, you would connect to the CloseChat API
export const chatService = {
  // Fetch chat history
  getChatSessions: async (): Promise<ChatSession[]> => {
    console.log('Mock: Getting chat sessions (no backend call)');
    return [];
  },
  
  // Get a single chat session
  getChatSession: async (sessionId: string): Promise<ChatSession | null> => {
    console.log('Mock: Getting chat session (no backend call)', sessionId);
    return null;
  },
  
  // Create a new chat session
  createChatSession: async (): Promise<ChatSession> => {
    console.log('Mock: Creating chat session (no backend call)');
    return {
      id: `session-${Date.now()}`,
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
  },
  
  // Send a message to the AI and get a response
  sendMessage: async (sessionId: string, content: string): Promise<Message> => {
    console.log('Mock: Sending message (no backend call)', { sessionId, content });
    
    // In a real implementation, you would call the CloseChat API here
    // For now, we're returning a mock response
    const responseOptions = [
      "I'm an AI assistant. How can I help you today?",
      "That's an interesting question! Let me think about that.",
      "I can help you with managing your computing resources or AI services.",
      "Would you like me to explain more about our platform's features?",
      "I can provide information about our GPU instances and pricing."
    ];
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      content: responseOptions[Math.floor(Math.random() * responseOptions.length)],
      isUser: false,
      timestamp: new Date()
    };
  }
};

export default chatService;
