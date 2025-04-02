import React from 'react';

export const PulseAnimation = ({ children, duration = 2000, color = '#4CAF50' }) => {
  return (
    <div className="pulse-wrapper">
      <style jsx>{`
        .pulse-wrapper {
          position: relative;
          display: inline-block;
        }
        
        .pulse-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          animation: pulse ${duration}ms infinite;
          z-index: -1;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
          }
          
          70% {
            transform: scale(1.5);
            opacity: 0;
            box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
          }
          
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
      
      <div className="pulse-effect" style={{ backgroundColor: color }}></div>
      {children}
    </div>
  );
};
