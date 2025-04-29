
import React from 'react';
import { Button } from '@/components/ui/button';
import imageSrc from '@/lib/aaa.jpg';

const About: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 aspect-square max-w-md mx-auto reveal-element">
            <div className="relative h-full w-full rounded-2xl overflow-hidden glow-effect">
              {/* Profile Image Placeholder - Replace with your actual image */}
              <img
                src={imageSrc}  // Add the correct path to your image file
                alt="Profile Image"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-5xl font-bold">
                
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6 reveal-element">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              I'm <span className="font-bold text-foreground">Omobolarinwa Quadri</span>, a dedicated IT professional with expertise spanning IT support, web development, and education.
            </p>
            
            <p className="text-muted-foreground">
              With a BSc.Ed in Computer & Information Science, I blend technical proficiency with educational expertise. My experience ranges from providing robust IT support solutions to developing responsive web applications using React and modern technologies.
            </p>
            
            <p className="text-muted-foreground">
              As an IT instructor, I'm passionate about sharing knowledge and empowering others through technology, teaching both academic curriculum and industry-standard practices in ICT, web development, and programming.
            </p>
            
            {/* <div className="pt-4 space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-bold">Education:</span>
                <span className="text-muted-foreground">BSc.Ed Computer & Information Science</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="font-bold">Experience:</span>
                <span className="text-muted-foreground">IT Support, Frontend Development, Teaching</span>
              </div>
            </div> */}
            
            {/* <div className="pt-6">
              <Button className="rounded-full" size="lg">
                Download CV
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
