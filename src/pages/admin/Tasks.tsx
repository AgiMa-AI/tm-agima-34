
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Outlet, useLocation } from 'react-router-dom';

// Import our new components
import TaskHeader from '@/components/admin/tasks/TaskHeader';
import DailyTaskInfo from '@/components/admin/tasks/DailyTaskInfo';
import TaskSearch from '@/components/admin/tasks/TaskSearch';
import TaskList from '@/components/admin/tasks/TaskList';

// 模拟任务数据
const initialTasks = [
  { id: 'task-001', name: '系统备份', type: 'system', status: 'pending', priority: 'high', created: '2025-03-02 09:15:00', progress: 0, lastExecuted: null, canExecute: true, canClaim: false, reward: 120 },
  { id: 'task-002', name: '数据同步', type: 'data', status: 'pending', priority: 'medium', created: '2025-03-01 14:30:00', progress: 0, lastExecuted: null, canExecute: true, canClaim: false, reward: 80 },
  { id: 'task-003', name: '用户清理', type: 'user', status: 'pending', priority: 'low', created: '2025-03-01 10:45:00', progress: 0, lastExecuted: null, canExecute: true, canClaim: false, reward: 50 },
  { id: 'task-004', name: '日志分析', type: 'system', status: 'pending', priority: 'high', created: '2025-03-02 16:20:00', progress: 0, lastExecuted: null, canExecute: true, canClaim: false, reward: 100 },
  { id: 'task-005', name: '安全扫描', type: 'security', status: 'pending', priority: 'high', created: '2025-03-02 11:30:00', progress: 0, lastExecuted: null, canExecute: true, canClaim: false, reward: 150 },
  { id: 'task-006', name: '资源优化', type: 'system', status: 'pending', priority: 'medium', created: '2025-02-28 09:45:00', progress: 0, lastExecuted: null, canExecute: true, canClaim: false, reward: 90 },
  { id: 'task-007', name: '索引重建', type: 'data', status: 'pending', priority: 'low', created: '2025-03-03 08:15:00', progress: 0, lastExecuted: null, canExecute: true, canClaim: false, reward: 70 },
  { id: 'task-008', name: '邮件通知', type: 'notification', status: 'pending', priority: 'medium', created: '2025-03-01 12:30:00', progress: 0, lastExecuted: null, canExecute: true, canClaim: false, reward: 60 },
];

const AdminTasks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tasks, setTasks] = useState(initialTasks);
  const location = useLocation();
  const { toast } = useToast();
  
  // 检查当前是否在二级页面
  const isTaskSubpage = location.pathname !== '/admin/tasks';
  
  // 获取当前日期作为字符串，用于检查每日任务限制
  const getCurrentDateString = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  };
  
  // 模拟从服务器检查每日任务状态
  useEffect(() => {
    // 在实际应用中，这里应该从服务器获取任务状态
    // 这里我们只是模拟每天凌晨重置任务状态
    const checkDailyTaskReset = () => {
      const savedDate = localStorage.getItem('lastTaskResetDate');
      const currentDate = getCurrentDateString();
      
      if (savedDate !== currentDate) {
        // 新的一天，重置所有任务状态
        const resetTasks = tasks.map(task => ({
          ...task,
          status: 'pending',
          progress: 0,
          lastExecuted: null,
          canExecute: true,
          canClaim: false
        }));
        setTasks(resetTasks);
        localStorage.setItem('lastTaskResetDate', currentDate);
        
        // 显示通知
        toast({
          title: "任务已重置",
          description: "每日任务已更新，现在可以执行新的任务。",
          duration: 5000,
        });
      }
    };
    
    checkDailyTaskReset();
    
    // 设置定时器，每分钟检查一次（在实际应用中，这应该由服务器处理）
    const intervalId = setInterval(checkDailyTaskReset, 60000);
    
    return () => clearInterval(intervalId);
  }, [tasks, toast]);
  
  // 如果是二级页面，只显示Outlet
  if (isTaskSubpage) {
    return <Outlet />;
  }
  
  // 执行任务
  const executeTask = (taskId: string) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id === taskId) {
        // 检查任务是否可以执行
        if (!task.canExecute) {
          toast({
            title: "无法执行任务",
            description: "今天已经执行过此任务，请明天再试。",
            variant: "destructive",
          });
          return task;
        }
        
        toast({
          title: "任务执行中",
          description: `正在执行任务: ${task.name}`,
        });
        
        // 模拟任务执行过程
        // 在实际应用中，这应该是异步操作
        return { 
          ...task, 
          status: 'running', 
          progress: 0,
          canExecute: false
        };
      }
      return task;
    }));
    
    // 模拟任务执行时间
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex >= 0) {
      const progressInterval = setInterval(() => {
        setTasks(prevTasks => {
          const updatedTasks = [...prevTasks];
          const taskToUpdate = updatedTasks[taskIndex];
          
          if (taskToUpdate.status === 'running') {
            const newProgress = taskToUpdate.progress + 10;
            
            if (newProgress >= 100) {
              // 任务完成
              clearInterval(progressInterval);
              
              toast({
                title: "任务完成",
                description: `任务 ${taskToUpdate.name} 已完成，可以领取奖励。`,
              });
              
              updatedTasks[taskIndex] = {
                ...taskToUpdate,
                status: 'claimable',
                progress: 100,
                lastExecuted: new Date().toISOString(),
                canClaim: true
              };
            } else {
              // 更新进度
              updatedTasks[taskIndex] = {
                ...taskToUpdate,
                progress: newProgress
              };
            }
            
            return updatedTasks;
          }
          
          return prevTasks;
        });
      }, 1000); // 每秒更新进度
    }
  };
  
  // 领取任务奖励
  const claimReward = (taskId: string) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id === taskId && task.canClaim) {
        toast({
          title: "奖励已领取",
          description: `您已成功领取 ${task.reward} 积分奖励。`,
        });
        
        return {
          ...task,
          status: 'completed',
          canClaim: false
        };
      }
      return task;
    }));
  };

  const filteredTasks = tasks.filter(task => 
    task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6">
        <TaskHeader />
        <DailyTaskInfo />
        <TaskSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <Tabs defaultValue="all-tasks">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all-tasks">所有任务</TabsTrigger>
            <TabsTrigger value="running">进行中</TabsTrigger>
            <TabsTrigger value="claimable">可领取</TabsTrigger>
            <TabsTrigger value="completed">已完成</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all-tasks" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>每日任务</CardTitle>
                <CardDescription>
                  完成任务获取奖励积分
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TaskList 
                  tasks={filteredTasks}
                  executeTask={executeTask}
                  claimReward={claimReward}
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="running" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>进行中的任务</CardTitle>
                <CardDescription>
                  当前正在执行的任务
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TaskList 
                  tasks={filteredTasks}
                  executeTask={executeTask}
                  claimReward={claimReward}
                  filter="running"
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="claimable" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>可领取的任务</CardTitle>
                <CardDescription>
                  已完成可领取奖励的任务
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TaskList 
                  tasks={filteredTasks}
                  executeTask={executeTask}
                  claimReward={claimReward}
                  filter="claimable"
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="completed" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>已完成的任务</CardTitle>
                <CardDescription>
                  今日已完成的任务
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TaskList 
                  tasks={filteredTasks}
                  executeTask={executeTask}
                  claimReward={claimReward}
                  filter="completed"
                  showActions={false}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminTasks;
