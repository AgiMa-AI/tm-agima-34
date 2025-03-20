
import React from 'react';

const AuthDecorations = () => {
  return (
    <>
      {/* Top decorative elements */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="brand-gradient h-20 w-full opacity-30 blur-3xl -mt-10"></div>
        <div className="relative">
          <div className="absolute left-1/4 -top-2 w-16 h-16 rounded-full bg-primary/30 float-animation" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute left-1/2 -top-8 w-24 h-24 rounded-full bg-primary/20 float-animation" style={{animationDelay: '0s'}}></div>
          <div className="absolute right-1/4 -top-4 w-20 h-20 rounded-full bg-primary/25 float-animation" style={{animationDelay: '1s'}}></div>
          
          {/* Neon pulse elements */}
          <div className="absolute left-10 top-20 w-40 h-40 rounded-full bg-primary/15 pulse-animation neon-pulse" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute right-10 top-16 w-32 h-32 rounded-full bg-primary/10 pulse-animation neon-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>
      
      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="relative">
          <div className="absolute left-1/5 bottom-16 w-16 h-16 rounded-full bg-primary/30 float-animation" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute left-2/3 bottom-10 w-20 h-20 rounded-full bg-primary/25 float-animation" style={{animationDelay: '0.7s'}}></div>
          
          {/* Neon pulse elements */}
          <div className="absolute left-20 bottom-40 w-36 h-36 rounded-full bg-primary/15 pulse-animation neon-pulse" style={{animationDelay: '1.7s'}}></div>
          <div className="absolute right-24 bottom-30 w-28 h-28 rounded-full bg-primary/10 pulse-animation neon-pulse" style={{animationDelay: '0.9s'}}></div>
        </div>
        <div className="brand-gradient h-20 w-full opacity-30 blur-3xl"></div>
      </div>
      
      {/* Side decorative elements */}
      <div className="absolute -left-10 top-1/4 w-36 h-72 bg-gradient-to-b from-primary/20 to-transparent rotate-12 blur-2xl"></div>
      <div className="absolute -right-10 top-1/3 w-36 h-72 bg-gradient-to-b from-primary/20 to-transparent -rotate-12 blur-2xl"></div>
    </>
  );
};

export default AuthDecorations;
