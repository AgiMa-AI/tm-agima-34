
import React from 'react';

const AuthDecorations = () => {
  return (
    <>
      {/* 顶部动态图形元素 - 调整移动端尺寸和位置 */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="bg-gradient-to-r from-primary/30 to-purple-400/20 h-32 w-full opacity-30 blur-3xl -mt-10"></div>
        <div className="relative">
          <div className="absolute left-1/4 -top-2 w-20 h-20 rounded-full bg-primary/20 float-animation" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute left-1/2 -top-8 w-32 h-32 rounded-full bg-purple-300/20 float-animation" style={{animationDelay: '0s'}}></div>
          <div className="absolute right-1/4 -top-4 w-24 h-24 rounded-full bg-primary/15 float-animation" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
      
      {/* AI Pattern Background */}
      <div className="fixed inset-0 z-[-1] opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,40,200,0.1)_0,rgba(120,40,200,0)_40%)] bg-repeat-y"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(120,40,200,0.05) 0px, rgba(120,40,200,0.05) 1px, transparent 1px, transparent 10px), 
                            repeating-linear-gradient(135deg, rgba(120,40,200,0.05) 0px, rgba(120,40,200,0.05) 1px, transparent 1px, transparent 10px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* 底部装饰元素 - 调整移动端尺寸和位置 */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="relative">
          <div className="absolute left-1/5 bottom-16 w-16 h-16 rounded-full bg-primary/20 float-animation" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute left-2/3 bottom-10 w-20 h-20 rounded-full bg-purple-300/15 float-animation" style={{animationDelay: '0.7s'}}></div>
        </div>
        <div className="bg-gradient-to-r from-purple-400/20 to-primary/30 h-32 w-full opacity-30 blur-3xl"></div>
      </div>
    </>
  );
};

export default AuthDecorations;
