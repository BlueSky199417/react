import React from 'react';
import { Bot, Camera, Laptop, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Bot,
      title: "Inverticare",
      description: "Description: A customer from Israel contacted us and asked us to create a corporate website for him to promote his services in the field of alternative medicine. We conducted a market analysis, made a research for a suitable website style and presented it to the client. Next, we drew more than 20 unique pages for it and, after their approval, began development.",
      tags: ["HTML" , "WordPress" , "JavaScript" , "CSS"],
      link: "https://inverticare.com/en/"
    },
    {
      icon: Camera,
      title: "Postage",
      description: "Pixel-perfect responsive development with smooth animations and with Strapi integration.",
      tags: ["Next.js" , "React" , "Redux" , "TypeScript"],
      link: "https://dev.postagehealth.com/"
    },
    {
      icon: Laptop,
      title: "GODMODE(OpenAI)",
      description: "Godmode is a web platform to access the automation powers of autoGPT and babyAGI. AI agents are still in their infancy, but they are quickly growing in capabilities, and we hope that Godmode will enable more people to tap into autonomous AI agents even in this early stage.",
      tags: ["OpenAI" , "Chat GPT"],
      link: "https://godmode.space/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <project.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
