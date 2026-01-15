import React from "react";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  image,
  link,
  delay,
}) => {
  return (
    <Card
      className="glass-card overflow-hidden border-0 h-full flex flex-col"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-48 overflow-hidden bg-primary/5">
        <div className="h-full w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <span className="text-2xl font-bold opacity-50">{title}</span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a href={link} className="text-primary flex items-center group">
          View Project
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </CardFooter>
    </Card>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Rentwiteaseng",
      description:
        "Home rental platform connecting landlords and tenants with seamless booking and payment features.",
      tags: ["React", "Firebase", "TailwindCSS"],
      image: "",
      link: "https://rentwiteaseng.vercel.app",
    },
    {
      title: "Highcloud Technologies",
      description:
        "Highcloud Technologies provides reliable and forward-thinking IT solutions that align with your business priorities for growth, innovation, and operational excellence.",
      tags: ["React"],
      image: "",
      link: "https://hightechnologies.vercel.app",
    },
    {
      title: "Jobconnect",
      description:
        "A job portal that connects job seekers with employers, featuring job listings, applications, and resume management.",
      tags: ["React", "RESTful API", "Chart.js"],
      image: "",
      link: "https://jobconnect.vercel.app",
    },
    {
      title: "Brewhez",
      description:
        "An ecommerce platform for buying and selling handcrafted beverages, with carting and security features.",
      tags: ["React", "Firebase", "Recharts"],
      image: "",
      link: "https://brewhez.vercel.app",
    },
    {
      title: "Spot-On Property",
      description:
        "A real estate listing platform that allows users to browse, search, and inquire about properties for sale or rent.",
      tags: ["React", "Firebase", "Recharts"],
      image: "",
      link: "https://spot-on-property.vercel.app",
    },
    {
      title: "Sofoworalaw",
      description:
        "A law firm website showcasing services, team, and contact information with a professional design.",
      tags: ["React"],
      image: "",
      link: "https://www.sofoworalaw.com",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative bg-black/20" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of my work showcasing my skills and expertise in
            development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in opacity-0"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                link={project.link}
                delay={index * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
