import React, { useEffect, useRef } from 'react';
import { 
  Laptop, 
  Code, 
  Database, 
  Server,
  BookOpen,
  Users
} from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="glass-card overflow-hidden border-0 h-full">
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
    </Card>
  );
};

const Skills: React.FC = () => {
  const services = [
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "IT Support",
      description: "Expert in providing comprehensive IT support solutions, troubleshooting, and maintenance for various systems and networks."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Proficient in creating responsive web applications using ReactJS, TailwindCSS, and modern JavaScript frameworks."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Fullstack Development",
      description: "Building end-to-end applications with ReactJS frontend, Firebase backend, and RESTful API integration."
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Web Development",
      description: "Creating dynamic and interactive websites with focus on performance, user experience, and modern design principles."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "IT Instruction",
      description: "Experienced educator teaching ICT, IT support, web development, and programming for both academic and industry standards."
    },
    // {
    //   icon: <Users className="h-6 w-6" />,
    //   title: "Data Processing",
    //   description: "Skilled in organizing, analyzing and processing data to extract meaningful insights and support decision-making processes."
    // }
  ];

  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 relative" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professional solutions and technical expertise I offer to clients and organizations.
          </p>
        </div>

        <div className="reveal-element">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            ref={carouselRef}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <ServiceCard 
                      icon={service.icon} 
                      title={service.title} 
                      description={service.description}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Skills;
