
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Play, Clock, CheckCircle, Gift, RotateCcw
} from 'lucide-react';

interface TaskItemProps {
  task: {
    id: string;
    name: string;
    type: string;
    status: string;
    priority: string;
    created: string;
    progress: number;
    lastExecuted: string | null;
    canExecute: boolean;
    canClaim: boolean;
    reward: number;
  };
  executeTask: (taskId: string) => void;
  claimReward: (taskId: string) => void;
  showActions?: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ 
  task, 
  executeTask, 
  claimReward,
  showActions = true
}) => {
  return (
    <div className="grid grid-cols-7 items-center p-3">
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
      {showActions ? (
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
      ) : (
        <div className="text-right text-sm text-muted-foreground">
          {task.lastExecuted ? new Date(task.lastExecuted).toLocaleTimeString() : '-'}
        </div>
      )}
    </div>
  );
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
    case 'claimable':
      return <Badge variant="outline" className="text-emerald-500 border-emerald-500">可领取</Badge>;
    default:
      return <Badge variant="outline">未知</Badge>;
  }
};

export default TaskItem;
