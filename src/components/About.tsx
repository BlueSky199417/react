import React from 'react';
import { FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="AI Developer"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
            As an AI and web developer with over 8 years of experience in web development and 3+ years in AI, I am dedicated to pushing the boundaries of what is possible in technology. My journey combines the analytical depth of AI with the creative side of web development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
            I like solving complex problems and collaborating in a team environment. My approach combines technical expertise with creative problem solving, always aiming to deliver innovative solutions that have real-world impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;