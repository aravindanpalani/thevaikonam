import React, { useEffect, useRef } from 'react';

const FadeIn = ({ children, delay = 0, duration = 800, className = '' }) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('fade-in-visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={elementRef} 
      className={`fade-in ${className}`} 
      style={{ 
        opacity: 0, 
        transition: `opacity ${duration}ms ease-in-out`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
