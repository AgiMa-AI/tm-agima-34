
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-red-500">401</h1>
        <p className="text-xl text-gray-600 mb-6">未授权访问</p>
        <p className="text-gray-500 mb-8">
          您没有权限访问此页面。请登录或联系管理员获取访问权限。
        </p>
        <div className="flex justify-center">
          <Link to="/">
            <Button className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              返回首页
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
