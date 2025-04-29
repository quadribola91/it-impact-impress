
import React from 'react';
import { 
  Cube, 
  LayoutDashboard, 
  LayoutGrid, 
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <Card className="glass-card overflow-hidden border-0 h-full" 
      style={{ animationDelay: `${delay}ms` }}>
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground text-base">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <button className="text-primary flex items-center group">
          Learn more 
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </CardFooter>
    </Card>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Cube className="h-6 w-6" />,
      title: "3D Visualization",
      description: "Experience your data in three dimensions with our advanced visualization tools that bring clarity to complex information."
    },
    {
      icon: <LayoutDashboard className="h-6 w-6" />,
      title: "Intuitive Dashboard",
      description: "Monitor all your metrics at a glance with customizable dashboards designed for maximum productivity and insight."
    },
    {
      icon: <LayoutGrid className="h-6 w-6" />,
      title: "Modular Design",
      description: "Build your perfect workflow with our flexible, component-based system that adapts to your specific needs."
    }
  ];
  
  return (
    <section className="py-20 px-4 md:px-8 relative" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Powerful</span> Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover the tools that will transform the way you work and create in the digital space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in opacity-0" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
                delay={index * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
