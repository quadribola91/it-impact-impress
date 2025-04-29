
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 md:px-8 backdrop-blur-md bg-background/80">
        <div className="text-xl md:text-2xl font-bold">
          <span className="text-gradient">IT Impact</span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#" className="text-foreground hover:text-primary transition-colors">Home</a></li>
            <li><a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a></li>
            <li><a href="#" className="text-foreground hover:text-primary transition-colors">About</a></li>
          </ul>
        </nav>
        
        <div>
          <Button variant="ghost" className="hidden md:inline-block mr-4">Sign In</Button>
          <Button size="sm" className="rounded-full px-4">Get Started</Button>
        </div>
      </header>
      
      <main>
        <Hero />
        <Features />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
