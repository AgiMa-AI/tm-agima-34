
// API服务工具
// 用于处理与后端API的交互

// 从localStorage获取API配置
const getApiConfig = () => {
  const configStr = localStorage.getItem('api_config');
  if (!configStr) {
    return {
      baseUrl: '',
      apiKey: '',
      endpoints: {
        users: '/api/users',
        tasks: '/api/tasks',
        models: '/api/models',
      }
    };
  }
  
  try {
    return JSON.parse(configStr);
  } catch (e) {
    console.error('Failed to parse API config:', e);
    return {
      baseUrl: '',
      apiKey: '',
      endpoints: {
        users: '/api/users',
        tasks: '/api/tasks',
        models: '/api/models',
      }
    };
  }
};

// 构建完整的API URL
const buildUrl = (endpoint: string): string => {
  const { baseUrl, endpoints } = getApiConfig();
  const path = endpoints[endpoint] || endpoint;
  
  return `${baseUrl}${path}`;
};

// 获取请求头
const getHeaders = () => {
  const { apiKey } = getApiConfig();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  
  if (apiKey) {
    headers['Authorization'] = `Bearer ${apiKey}`;
  }
  
  return headers;
};

// 封装fetch请求
const request = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...getHeaders(),
        ...options.headers,
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json() as T;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// API 请求方法
export const apiService = {
  // 获取用户列表
  getUsers: async () => {
    const url = buildUrl('users');
    return await request<any[]>(url);
  },
  
  // 停用用户
  disableUser: async (userId: string) => {
    const url = buildUrl(`users/${userId}/disable`);
    return await request(url, {
      method: 'PUT',
    });
  },
  
  // 获取任务列表
  getTasks: async () => {
    const url = buildUrl('tasks');
    return await request<any[]>(url);
  },
  
  // 创建新任务
  createTask: async (taskData: any) => {
    const url = buildUrl('tasks');
    return await request(url, {
      method: 'POST',
      body: JSON.stringify(taskData),
    });
  },
  
  // 更新任务
  updateTask: async (taskId: string, taskData: any) => {
    const url = buildUrl(`tasks/${taskId}`);
    return await request(url, {
      method: 'PUT',
      body: JSON.stringify(taskData),
    });
  },
  
  // 自定义API请求
  custom: async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    const url = buildUrl(endpoint);
    return await request<T>(url, options);
  },
};

export default apiService;
