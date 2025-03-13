import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Download, Send } from 'lucide-react';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['AI Engineer', 'ML Enthusiast', 'Web Developer', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-10 dark:opacity-20" />
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Freelancer
          </h1>
          
          <div className="h-8 mb-6">
            <span ref={el} className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300" />
          </div>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm passionate about building intelligent systems and scalable web solutions and am always exploring new things.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all"
            >
              <Send size={20} />
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;