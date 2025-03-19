
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

// API endpoint for the CloseChat API
const CLOSECHAT_API_URL = "https://www.closechat.org/api";

export const chatService = {
  // Fetch chat history
  getChatSessions: async (): Promise<ChatSession[]> => {
    try {
      // In a real implementation, you would fetch from the server
      // const response = await fetch(`${CLOSECHAT_API_URL}/sessions`);
      // return await response.json();
      console.log('Getting chat sessions (mock)');
      return [];
    } catch (error) {
      console.error('Error fetching chat sessions:', error);
      return [];
    }
  },
  
  // Get a single chat session
  getChatSession: async (sessionId: string): Promise<ChatSession | null> => {
    try {
      // In a real implementation, you would fetch from the server
      // const response = await fetch(`${CLOSECHAT_API_URL}/sessions/${sessionId}`);
      // return await response.json();
      console.log('Getting chat session (mock)', sessionId);
      return null;
    } catch (error) {
      console.error('Error fetching chat session:', error);
      return null;
    }
  },
  
  // Create a new chat session
  createChatSession: async (): Promise<ChatSession> => {
    try {
      // In a real implementation, you would create on the server
      // const response = await fetch(`${CLOSECHAT_API_URL}/sessions`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   }
      // });
      // return await response.json();
      console.log('Creating new chat session');
      return {
        id: `session-${Date.now()}`,
        messages: [],
        createdAt: new Date(),
        updatedAt: new Date()
      };
    } catch (error) {
      console.error('Error creating chat session:', error);
      throw new Error('Failed to create chat session');
    }
  },
  
  // Send a message to the CloseChat API and get a response
  sendMessage: async (sessionId: string, content: string): Promise<Message> => {
    try {
      // Make a request to the CloseChat API
      const response = await fetch(`${CLOSECHAT_API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          message: content
        })
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        content: data.response || "抱歉，我无法连接到服务器，请稍后再试。",
        isUser: false,
        timestamp: new Date()
      };
    } catch (error) {
      console.error('Error sending message to API:', error);
      
      // Fallback response in case of API failure
      return {
        content: "抱歉，我暂时无法回应您的问题。请检查网络连接并稍后再试。",
        isUser: false,
        timestamp: new Date()
      };
    }
  }
};

export default chatService;
