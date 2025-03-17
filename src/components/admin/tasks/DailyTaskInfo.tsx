
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const DailyTaskInfo: React.FC = () => {
  return (
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
  );
};

export default DailyTaskInfo;
