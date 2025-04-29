
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Features'; // Renamed but keeping import name for simplicity
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import PaymentSupport from '@/components/PaymentSupport';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 md:px-8 backdrop-blur-md bg-background/80">
        <div className="text-xl md:text-2xl font-bold">
          <span className="text-gradient">OQ</span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#" className="text-foreground hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="text-foreground hover:text-primary transition-colors">About</a></li>
            <li><a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a></li>
            <li><a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a></li>
            <li><a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
        
        <div>
          <Button size="sm" className="rounded-full px-4" asChild>
            <a href="#support">Support</a>
          </Button>
        </div>
      </header>
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <PaymentSupport />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
