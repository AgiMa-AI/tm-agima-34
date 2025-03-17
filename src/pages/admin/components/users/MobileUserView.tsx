
import React from 'react';
import { User } from '@/types/auth';
import { Avatar } from '@/components/ui/avatar';
import { UserRoleBadge } from './UserRoleBadge';
import { UserStatusBadge } from './UserStatusBadge';
import UserActions from './UserActions';

interface MobileUserViewProps {
  user: User;
}

const MobileUserView = ({ user }: MobileUserViewProps) => {
  // 模拟数据，在实际应用中应该从用户数据中获取
  const rentedDevices = user.role === 'renter' ? Math.floor(Math.random() * 10) : 0;
  const todayEarnings = user.role === 'provider' ? (Math.random() * 1000).toFixed(2) : 0;

  return (
    <div className="sm:hidden space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <div className="flex h-full w-full items-center justify-center bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200 font-semibold">
              {user.username?.charAt(0)}
            </div>
          </Avatar>
          <div>
            <div className="font-medium">{user.username}</div>
            <div className="text-xs text-muted-foreground">{user.email}</div>
          </div>
        </div>
        <UserActions userId={user.id} />
      </div>
      <div className="flex flex-wrap gap-2">
        <UserRoleBadge role={user.role} />
        <UserStatusBadge status={user.status} />
      </div>
      <div className="grid grid-cols-2 text-sm">
        <div>
          <span className="text-muted-foreground">计算单位:</span> <span className="font-medium">{user.computeUnits}</span>
        </div>
        <div>
          {user.role === 'renter' 
            ? <><span className="text-muted-foreground">租赁数量:</span> <span className="font-medium">{rentedDevices}台</span></>
            : user.role === 'provider' 
              ? <><span className="text-muted-foreground">今日收益:</span> <span className="font-medium">¥{todayEarnings}</span></>
              : '-'}
        </div>
      </div>
    </div>
  );
};

export default MobileUserView;
