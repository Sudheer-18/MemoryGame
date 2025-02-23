import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    period: '2022 - Present',
    description: 'Led development of multiple high-impact projects and mentored junior developers.'
  },
  {
    title: 'Software Engineer',
    company: 'Innovation Labs',
    period: '2020 - 2022',
    description: 'Developed and maintained full-stack applications using modern technologies.'
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Inc',
    period: '2018 - 2020',
    description: 'Collaborated on frontend development and implemented responsive designs.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-[28px] bottom-0 w-[2px] bg-blue-200"></div>
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 top-[6px] w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-white" />
              </div>
              <div className="bg-gray-50 rounded-lg p-6 ml-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                <p className="text-blue-600 font-medium">{exp.company}</p>
                <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                <p className="text-gray-600 mt-3">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;