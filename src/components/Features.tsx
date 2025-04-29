
import React from 'react';
import { 
  Laptop, 
  Code, 
  Database, 
  Server,
  BookOpen,
  Users
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, delay }) => {
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
    </Card>
  );
};

const Skills: React.FC = () => {
  const skills = [
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
    {
      icon: <Users className="h-6 w-6" />,
      title: "Data Processing",
      description: "Skilled in organizing, analyzing and processing data to extract meaningful insights and support decision-making processes."
    }
  ];
  
  return (
    <section className="py-20 px-4 md:px-8 relative" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technical expertise and professional capabilities that I bring to every project and challenge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="animate-fade-in opacity-0" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>
              <SkillCard 
                icon={skill.icon} 
                title={skill.title} 
                description={skill.description} 
                delay={index * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
