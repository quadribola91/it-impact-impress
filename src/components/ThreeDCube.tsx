
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const ThreeDCube: React.FC = () => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    let rotX = 0;
    let rotY = 0;
    let isMouseDown = false;
    let startX = 0;
    let startY = 0;
    let currentRotationX = -30;
    let currentRotationY = 45;
    
    // Initial rotation
    cube.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;

    // Auto-rotation if not mobile
    if (!isMobile) {
      const autoRotate = setInterval(() => {
        if (!isMouseDown) {
          currentRotationY += 0.2;
          cube.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
        }
      }, 30);
      
      return () => clearInterval(autoRotate);
    }
    
    // Mouse controls
    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      startX = e.clientX;
      startY = e.clientY;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      
      rotX = e.clientX - startX;
      rotY = e.clientY - startY;
      
      currentRotationY += rotX * 0.5;
      currentRotationX -= rotY * 0.5;
      
      cube.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
      
      startX = e.clientX;
      startY = e.clientY;
    };
    
    const handleMouseUp = () => {
      isMouseDown = false;
    };
    
    // Touch controls
    const handleTouchStart = (e: TouchEvent) => {
      isMouseDown = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!isMouseDown) return;
      
      rotX = e.touches[0].clientX - startX;
      rotY = e.touches[0].clientY - startY;
      
      currentRotationY += rotX * 0.5;
      currentRotationX -= rotY * 0.5;
      
      cube.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
      
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };
    
    const handleTouchEnd = () => {
      isMouseDown = false;
    };
    
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile]);

  return (
    <div className="cube-wrapper w-full h-full">
      <div 
        ref={cubeRef} 
        className="cube w-[200px] h-[200px] md:w-[280px] md:h-[280px] mx-auto"
      >
        <div className="cube__face cube__face--front bg-opacity-20 bg-primary rounded-lg">
          <span className="text-4xl text-primary-foreground opacity-70">01</span>
        </div>
        <div className="cube__face cube__face--back bg-opacity-20 bg-primary rounded-lg">
          <span className="text-4xl text-primary-foreground opacity-70">02</span>
        </div>
        <div className="cube__face cube__face--right bg-opacity-20 bg-primary rounded-lg">
          <span className="text-4xl text-primary-foreground opacity-70">03</span>
        </div>
        <div className="cube__face cube__face--left bg-opacity-20 bg-primary rounded-lg">
          <span className="text-4xl text-primary-foreground opacity-70">04</span>
        </div>
        <div className="cube__face cube__face--top bg-opacity-20 bg-primary rounded-lg">
          <span className="text-4xl text-primary-foreground opacity-70">05</span>
        </div>
        <div className="cube__face cube__face--bottom bg-opacity-20 bg-primary rounded-lg">
          <span className="text-4xl text-primary-foreground opacity-70">06</span>
        </div>
      </div>
    </div>
  );
};

export default ThreeDCube;
