
// Simplified API service that only provides a mockable interface
// All backend logic has been removed

// Mock API configuration
const mockApiConfig = {
  baseUrl: '',
  endpoints: {
    users: '/api/users',
    tasks: '/api/tasks',
    models: '/api/models',
  }
};

// Mock API service with no backend dependencies
export const apiService = {
  // Mock methods that return promises with mock data
  getUsers: async () => {
    console.log('Mock: Getting users (no backend call)');
    return [];
  },
  
  disableUser: async (userId: string) => {
    console.log('Mock: Disabling user (no backend call)', userId);
    return { success: true };
  },
  
  getTasks: async () => {
    console.log('Mock: Getting tasks (no backend call)');
    return [];
  },
  
  createTask: async (taskData: any) => {
    console.log('Mock: Creating task (no backend call)', taskData);
    return { success: true, id: 'mock-task-id' };
  },
  
  updateTask: async (taskId: string, taskData: any) => {
    console.log('Mock: Updating task (no backend call)', taskId, taskData);
    return { success: true };
  },
  
  custom: async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    console.log('Mock: Custom API call (no backend call)', endpoint, options);
    return {} as T;
  },
};

export default apiService;
