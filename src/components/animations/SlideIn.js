import React, { useEffect, useRef } from 'react';

export const SlideIn = ({ 
  children, 
  direction = 'left', 
  delay = 0, 
  duration = 800, 
  distance = '50px',
  className = ''
}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) return;
    
    // Set initial position based on direction
    let initialTransform = '';
    
    switch (direction) {
      case 'left':
        initialTransform = `translateX(-${distance})`;
        break;
      case 'right':
        initialTransform = `translateX(${distance})`;
        break;
      case 'up':
        initialTransform = `translateY(-${distance})`;
        break;
      case 'down':
        initialTransform = `translateY(${distance})`;
        break;
      default:
        initialTransform = `translateX(-${distance})`;
    }
    
    element.style.transform = initialTransform;
    element.style.opacity = '0';
    element.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-in-out`;
    element.style.transitionDelay = `${delay}ms`;
    
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.transform = 'translate(0)';
              element.style.opacity = '1';
            }, 100);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [direction, delay, duration, distance]);
  
  return (
    <div ref={elementRef} className={`slide-in ${className}`}>
      {children}
    </div>
  );
};
