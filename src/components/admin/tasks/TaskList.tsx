
import React from 'react';
import TaskItem from './TaskItem';
import { Clock, CheckCircle, Gift } from 'lucide-react';

interface TaskListProps {
  tasks: Array<{
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
  }>;
  executeTask: (taskId: string) => void;
  claimReward: (taskId: string) => void;
  filter?: string;
  showActions?: boolean;
}

const TaskList: React.FC<TaskListProps> = ({ 
  tasks, 
  executeTask, 
  claimReward, 
  filter = 'all',
  showActions = true
}) => {
  // Filter tasks based on the selected tab
  const filteredTasks = filter === 'all' 
    ? tasks 
    : tasks.filter(task => task.status === filter);

  // If no tasks match the filter, show an empty state
  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-10">
        {filter === 'running' && (
          <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
        )}
        {filter === 'completed' && (
          <CheckCircle className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
        )}
        {filter === 'claimable' && (
          <Gift className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
        )}
        <p className="text-muted-foreground">
          {filter === 'running' && '没有正在进行的任务'}
          {filter === 'completed' && '今日尚未完成任何任务'}
          {filter === 'claimable' && '没有可领取奖励的任务'}
          {filter === 'all' && '没有可用的任务'}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <div className="grid grid-cols-7 bg-muted/50 p-3 text-sm font-medium">
        <div className="col-span-2">任务名称</div>
        <div>类型</div>
        <div>状态</div>
        <div>奖励</div>
        <div>进度</div>
        <div className="text-right">
          {showActions ? '操作' : '完成时间'}
        </div>
      </div>
      
      <div className="divide-y">
        {filteredTasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            executeTask={executeTask} 
            claimReward={claimReward}
            showActions={showActions}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
