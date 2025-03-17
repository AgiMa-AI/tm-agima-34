
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { 
  ClipboardList, Search, Clock, CheckCircle, XCircle, 
  AlertCircle, MoreVertical, Play, RotateCcw, Trash2, Filter as FilterIcon,
  Calendar, Gift
} from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Link, Outlet, useLocation } from 'react-router-dom';

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
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'running':
        return <Badge className="bg-blue-500">运行中</Badge>;
      case 'completed':
        return <Badge className="bg-green-500">已完成</Badge>;
      case 'failed':
        return <Badge variant="destructive">失败</Badge>;
      case 'pending':
        return <Badge variant="outline" className="text-amber-500 border-amber-500">等待中</Badge>;
      case 'claimable':
        return <Badge variant="outline" className="text-emerald-500 border-emerald-500">可领取</Badge>;
      default:
        return <Badge variant="outline">未知</Badge>;
    }
  };
  
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="outline" className="border-red-500 text-red-500">高</Badge>;
      case 'medium':
        return <Badge variant="outline" className="border-amber-500 text-amber-500">中</Badge>;
      case 'low':
        return <Badge variant="outline" className="border-green-500 text-green-500">低</Badge>;
      default:
        return <Badge variant="outline">未知</Badge>;
    }
  };
  
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
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold flex items-center">
            <ClipboardList className="mr-2 h-6 w-6" />
            每日任务
          </h1>
          <p className="mt-2 text-indigo-100">
            完成每日任务获取奖励，每天凌晨00:00更新，每个任务每天只能完成一次
          </p>
        </div>

        <Card className="border-amber-200 bg-amber-50/50">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-amber-500 mr-2" />
              <CardTitle className="text-amber-700">每日任务提示</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-amber-700">
              每个任务每天只能执行一次，点击"执行"按钮开始任务，完成后点击"领取奖励"获取积分。所有任务将在每天凌晨00:00自动刷新。
            </p>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="搜索任务..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button variant="outline" className="gap-1">
              <FilterIcon className="h-4 w-4" />
              筛选
            </Button>
          </div>
        </div>

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
                <div className="rounded-md border">
                  <div className="grid grid-cols-7 bg-muted/50 p-3 text-sm font-medium">
                    <div className="col-span-2">任务名称</div>
                    <div>类型</div>
                    <div>状态</div>
                    <div>奖励</div>
                    <div>进度</div>
                    <div className="text-right">操作</div>
                  </div>
                  
                  <div className="divide-y">
                    {filteredTasks.map(task => (
                      <div key={task.id} className="grid grid-cols-7 items-center p-3">
                        <div className="col-span-2">
                          <div className="font-medium">
                            <Link 
                              to={`/admin/tasks/${task.id}`}
                              className="hover:text-primary transition-colors"
                            >
                              {task.name}
                            </Link>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {task.created}
                          </div>
                        </div>
                        <div className="text-sm capitalize">{task.type}</div>
                        <div>{getStatusBadge(task.status)}</div>
                        <div className="flex items-center">
                          <Gift className="h-4 w-4 text-amber-500 mr-1" />
                          <span className="text-amber-600 font-medium">{task.reward}</span>
                        </div>
                        <div className="w-24">
                          <div className="bg-muted rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${
                                task.status === 'failed' 
                                  ? 'bg-red-500' 
                                  : task.status === 'completed' || task.status === 'claimable'
                                    ? 'bg-green-500' 
                                    : 'bg-blue-500'
                              }`}
                              style={{ width: `${task.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="text-right flex justify-end">
                          {task.status === 'pending' && task.canExecute && (
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-blue-600 border-blue-300"
                              onClick={() => executeTask(task.id)}
                            >
                              <Play className="h-4 w-4 mr-1" />
                              执行
                            </Button>
                          )}
                          
                          {task.status === 'running' && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-blue-600"
                              disabled
                            >
                              <Clock className="h-4 w-4 mr-1 animate-spin" />
                              执行中
                            </Button>
                          )}
                          
                          {task.status === 'claimable' && task.canClaim && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="text-emerald-600 border-emerald-300"
                              onClick={() => claimReward(task.id)}
                            >
                              <Gift className="h-4 w-4 mr-1" />
                              领取奖励
                            </Button>
                          )}
                          
                          {task.status === 'completed' && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-muted-foreground"
                              disabled
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              已完成
                            </Button>
                          )}
                          
                          {task.status === 'failed' && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="text-red-600 border-red-300"
                            >
                              <RotateCcw className="h-4 w-4 mr-1" />
                              重试
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
                {filteredTasks.filter(task => task.status === 'running').length > 0 ? (
                  <div className="rounded-md border">
                    <div className="grid grid-cols-7 bg-muted/50 p-3 text-sm font-medium">
                      <div className="col-span-2">任务名称</div>
                      <div>类型</div>
                      <div>状态</div>
                      <div>奖励</div>
                      <div>进度</div>
                      <div className="text-right">操作</div>
                    </div>
                    
                    <div className="divide-y">
                      {filteredTasks
                        .filter(task => task.status === 'running')
                        .map(task => (
                          <div key={task.id} className="grid grid-cols-7 items-center p-3">
                            <div className="col-span-2">
                              <div className="font-medium">{task.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {task.created}
                              </div>
                            </div>
                            <div className="text-sm capitalize">{task.type}</div>
                            <div>{getStatusBadge(task.status)}</div>
                            <div className="flex items-center">
                              <Gift className="h-4 w-4 text-amber-500 mr-1" />
                              <span className="text-amber-600 font-medium">{task.reward}</span>
                            </div>
                            <div className="w-24">
                              <div className="bg-muted rounded-full h-2.5">
                                <div 
                                  className="h-2.5 rounded-full bg-blue-500"
                                  style={{ width: `${task.progress}%` }}
                                ></div>
                              </div>
                            </div>
                            <div className="text-right">
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-blue-600"
                                disabled
                              >
                                <Clock className="h-4 w-4 mr-1 animate-spin" />
                                执行中
                              </Button>
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                    <p className="text-muted-foreground">没有正在进行的任务</p>
                  </div>
                )}
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
                {filteredTasks.filter(task => task.status === 'claimable').length > 0 ? (
                  <div className="rounded-md border">
                    <div className="grid grid-cols-7 bg-muted/50 p-3 text-sm font-medium">
                      <div className="col-span-2">任务名称</div>
                      <div>类型</div>
                      <div>状态</div>
                      <div>奖励</div>
                      <div>进度</div>
                      <div className="text-right">操作</div>
                    </div>
                    
                    <div className="divide-y">
                      {filteredTasks
                        .filter(task => task.status === 'claimable')
                        .map(task => (
                          <div key={task.id} className="grid grid-cols-7 items-center p-3">
                            <div className="col-span-2">
                              <div className="font-medium">{task.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {task.created}
                              </div>
                            </div>
                            <div className="text-sm capitalize">{task.type}</div>
                            <div>{getStatusBadge(task.status)}</div>
                            <div className="flex items-center">
                              <Gift className="h-4 w-4 text-amber-500 mr-1" />
                              <span className="text-amber-600 font-medium">{task.reward}</span>
                            </div>
                            <div className="w-24">
                              <div className="bg-muted rounded-full h-2.5">
                                <div 
                                  className="h-2.5 rounded-full bg-green-500"
                                  style={{ width: `${task.progress}%` }}
                                ></div>
                              </div>
                            </div>
                            <div className="text-right">
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="text-emerald-600 border-emerald-300"
                                onClick={() => claimReward(task.id)}
                              >
                                <Gift className="h-4 w-4 mr-1" />
                                领取奖励
                              </Button>
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <Gift className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                    <p className="text-muted-foreground">没有可领取奖励的任务</p>
                  </div>
                )}
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
                {filteredTasks.filter(task => task.status === 'completed').length > 0 ? (
                  <div className="rounded-md border">
                    <div className="grid grid-cols-7 bg-muted/50 p-3 text-sm font-medium">
                      <div className="col-span-2">任务名称</div>
                      <div>类型</div>
                      <div>状态</div>
                      <div>奖励</div>
                      <div>进度</div>
                      <div className="text-right">完成时间</div>
                    </div>
                    
                    <div className="divide-y">
                      {filteredTasks
                        .filter(task => task.status === 'completed')
                        .map(task => (
                          <div key={task.id} className="grid grid-cols-7 items-center p-3">
                            <div className="col-span-2">
                              <div className="font-medium">{task.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {task.created}
                              </div>
                            </div>
                            <div className="text-sm capitalize">{task.type}</div>
                            <div>{getStatusBadge(task.status)}</div>
                            <div className="flex items-center">
                              <Gift className="h-4 w-4 text-amber-500 mr-1" />
                              <span className="text-amber-600 font-medium">{task.reward}</span>
                            </div>
                            <div className="w-24">
                              <div className="bg-muted rounded-full h-2.5">
                                <div 
                                  className="h-2.5 rounded-full bg-green-500"
                                  style={{ width: `${task.progress}%` }}
                                ></div>
                              </div>
                            </div>
                            <div className="text-right text-sm text-muted-foreground">
                              {task.lastExecuted ? new Date(task.lastExecuted).toLocaleTimeString() : '-'}
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <CheckCircle className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                    <p className="text-muted-foreground">今日尚未完成任何任务</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminTasks;
