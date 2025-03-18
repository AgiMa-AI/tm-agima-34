
import { fetchAGIModelPerformance } from './chartDataService';

/**
 * Fetches AGI model performance metrics
 * @returns Promise with performance data
 */
export const getAGIModelPerformance = async () => {
  try {
    const data = await fetchAGIModelPerformance();
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('Error fetching AGI model performance:', error);
    return {
      success: false,
      error: 'Failed to fetch AGI model performance data',
    };
  }
};

/**
 * Leases an AGI model
 * Uses mock data as this is a frontend-only implementation
 * @param modelId The ID of the model to lease
 * @param duration The lease duration in days
 * @returns Promise with lease status
 */
export const leaseAGIModel = async (modelId: string, duration: number) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return {
    success: true,
    leaseId: `lease-${Math.random().toString(36).substring(2, 10)}`,
    message: '模型租赁请求已成功提交',
  };
};
