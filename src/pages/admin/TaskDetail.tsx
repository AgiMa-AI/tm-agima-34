
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, Clock, CheckCircle, XCircle, 
  AlertTriangle, FileText, Calendar, User,
  Tag, Gift, Shield, Monitor
} from 'lucide-react';

const TaskDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // In a real application, this data would be fetched from an API
  // Here we're just using mock data
  const taskDetails = {
    id: id || 'unknown',
    name: '系统备份',
    description: '执行系统关键数据的完整备份，确保数据安全和可恢复性。',
    type: 'system',
    status: 'pending',
    priority: 'high',
    created: '2025-03-02 09:15:00',
    progress: 0,
    lastExecuted: null,
    assignedTo: '系统管理员',
    platform: '云平台',
    estimatedTime: '5-10分钟',
    reward: 120,
    steps: [
      '初始化备份进程',
      '扫描需要备份的文件',
      '压缩数据包',
      '加密敏感信息',
      '传输至远程存储',
      '验证备份完整性'
    ]
  };
  
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
  
  return (
    <Layout>
      <div className="space-y-6">
        <Button 
          variant="outline" 
          size="sm" 
          className="mb-4"
          onClick={() => navigate('/admin/tasks')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回任务列表
        </Button>
        
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">{taskDetails.name}</CardTitle>
                <div className="flex gap-2 mt-2">
                  {getStatusBadge(taskDetails.status)}
                  {getPriorityBadge(taskDetails.priority)}
                  <Badge variant="outline" className="border-blue-500 text-blue-500">
                    {taskDetails.type}
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">
                  任务ID: {taskDetails.id}
                </div>
                <div className="flex items-center mt-2 justify-end">
                  <Gift className="h-4 w-4 text-amber-500 mr-1" />
                  <span className="text-amber-600 font-medium">
                    奖励: {taskDetails.reward} 积分
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pt-4 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">任务描述</h3>
              <p className="text-muted-foreground">
                {taskDetails.description}
              </p>
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    任务详情
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">创建时间: {taskDetails.created}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">预计耗时: {taskDetails.estimatedTime}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">执行角色: {taskDetails.assignedTo}</span>
                    </div>
                    <div className="flex items-center">
                      <Monitor className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">执行平台: {taskDetails.platform}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    执行步骤
                  </h3>
                  <div className="space-y-2">
                    {taskDetails.steps.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs mr-2 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between border-t pt-6">
            <Button variant="outline" onClick={() => navigate('/admin/tasks')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Shield className="mr-2 h-4 w-4" />
              管理任务
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default TaskDetail;
