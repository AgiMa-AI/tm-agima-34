
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import AdminSidebar from './components/layout/AdminSidebar';
import AdminHeader from './components/layout/AdminHeader';

const AdminLayout = () => {
  const { user, isAuthenticated } = useAuth();
  
  // Check if user is authenticated and has admin role
  const isAdmin = isAuthenticated && user?.role === 'admin';
  
  // Redirect non-admin users
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (!isAdmin) {
    return <Navigate to="/unauthorized" />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 bg-background/95 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
