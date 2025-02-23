import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Hi, I'm <span className="text-blue-600">John Doe</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Full Stack Developer specializing in building exceptional digital experiences
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;