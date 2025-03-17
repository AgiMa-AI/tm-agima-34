
import React from 'react';
import { ClipboardList } from 'lucide-react';

const TaskHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl p-6 text-white">
      <h1 className="text-2xl font-bold flex items-center">
        <ClipboardList className="mr-2 h-6 w-6" />
        每日任务
      </h1>
      <p className="mt-2 text-indigo-100">
        完成每日任务获取奖励，每天凌晨00:00更新，每个任务每天只能完成一次
      </p>
    </div>
  );
};

export default TaskHeader;
