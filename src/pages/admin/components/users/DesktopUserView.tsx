
import React from 'react';
import { User } from '@/types/auth';
import { Avatar } from '@/components/ui/avatar';
import { UserRoleBadge } from './UserRoleBadge';
import { UserStatusBadge } from './UserStatusBadge';
import UserActions from './UserActions';

interface DesktopUserViewProps {
  user: User;
}

const DesktopUserView = ({ user }: DesktopUserViewProps) => {
  // 模拟数据，在实际应用中应该从用户数据中获取
  const rentedDevices = user.role === 'renter' ? Math.floor(Math.random() * 10) : 0;
  const todayEarnings = user.role === 'provider' ? (Math.random() * 1000).toFixed(2) : 0;

  return (
    <>
      <div className="hidden sm:flex col-span-2 items-center gap-3">
        <Avatar>
          <div className="flex h-full w-full items-center justify-center bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200 font-semibold">
            {user.username?.charAt(0)}
          </div>
        </Avatar>
        <div>
          <div className="font-medium">{user.username}</div>
          <div className="text-sm text-muted-foreground">{user.email}</div>
        </div>
      </div>
      <div className="hidden sm:block"><UserRoleBadge role={user.role} /></div>
      <div className="hidden sm:block"><UserStatusBadge status={user.status} /></div>
      <div className="hidden sm:block text-sm">
        {user.role === 'renter' 
          ? `租赁数量: ${rentedDevices}台` 
          : user.role === 'provider' 
            ? `今日收益: ¥${todayEarnings}` 
            : '-'}
      </div>
      <div className="hidden sm:block text-sm">{user.computeUnits}</div>
      <div className="hidden sm:block text-right">
        <UserActions userId={user.id} />
      </div>
    </>
  );
};

export default DesktopUserView;
