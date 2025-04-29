
import React from 'react';
import { Button } from '@/components/ui/button';
import ThreeDCube from './ThreeDCube';
import useTypewriter from '@/hooks/useTypewriter';


const Hero: React.FC = () => {
  const titles = ['IT Support Specialist', 'Frontend Developer', 'IT Instructor','Full-Stack Developer'];
  const animatedText = useTypewriter(titles);

  return (
    <section className="min-h-screen w-full hero-gradient flex flex-col justify-center items-center relative px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMTMxMzEiIGZpbGwtb3BhY2l0eT0iMC4wOSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMHYtNmg2djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] pointer-events-none opacity-10"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full z-10 py-16">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-gradient">Omobolarinwa Quadri</span>
          </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
        {animatedText}
      </p>

          <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Building innovative solutions and sharing knowledge through technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] flex justify-center items-center">
          <div className="glow-effect relative h-64 w-64 md:h-80 md:w-80 rounded-full">
            <ThreeDCube />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
