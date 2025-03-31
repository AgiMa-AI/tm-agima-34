
import React from 'react';

const AuthDecorations = () => {
  return (
    <>
      {/* 顶部动态图形元素 - 优化动画和视觉效果 */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="bg-gradient-to-r from-primary/40 to-purple-400/30 h-36 w-full opacity-40 blur-3xl -mt-10"></div>
        <div className="relative">
          <div className="absolute left-1/4 -top-2 w-24 h-24 rounded-full bg-primary/30 float-animation" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute left-1/2 -top-8 w-36 h-36 rounded-full bg-purple-300/30 float-animation" style={{animationDelay: '0s'}}></div>
          <div className="absolute right-1/4 -top-4 w-28 h-28 rounded-full bg-primary/25 float-animation" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
      
      {/* 更丰富的AI Pattern背景 */}
      <div className="fixed inset-0 z-[-1] opacity-15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,40,220,0.15)_0,rgba(120,40,220,0)_45%)] bg-repeat-y"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(120,40,220,0.08) 0px, rgba(120,40,220,0.08) 1px, transparent 1px, transparent 12px), 
                            repeating-linear-gradient(135deg, rgba(120,40,220,0.08) 0px, rgba(120,40,220,0.08) 1px, transparent 1px, transparent 12px)`,
          backgroundSize: '30px 30px'
        }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(130,70,230,0.08)_0,rgba(130,70,230,0)_35%)]"></div>
      </div>
      
      {/* 底部装饰元素 - 增强视觉效果 */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="relative">
          <div className="absolute left-1/5 bottom-16 w-20 h-20 rounded-full bg-primary/25 float-animation" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute left-2/3 bottom-10 w-24 h-24 rounded-full bg-purple-300/20 float-animation" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute right-1/4 bottom-20 w-16 h-16 rounded-full bg-primary/15 float-animation" style={{animationDelay: '1.5s'}}></div>
        </div>
        <div className="bg-gradient-to-r from-purple-400/30 to-primary/40 h-36 w-full opacity-40 blur-3xl"></div>
      </div>
    </>
  );
};

export default AuthDecorations;
