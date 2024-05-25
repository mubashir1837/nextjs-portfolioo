"use client";
import React from "react";
import SEO from '../components/SEO';

const Skills = () => {
  return (
    <>
      <SEO
        title="Skills"
        description="A list of my skills and technologies I'm proficient in."
        keywords="skills, technologies, proficiency"
      />
      <section className="skills flex flex-col items-center justify-center text-center py-24 mt-20">
        <div className="text-white max-w-lg">
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ff] to-[#fff]">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Here are some of the skills I have acquired and technologies I&apos;m proficient in:
          </p>
          <div className="grid grid-cols-2 gap-6">
            <ul>
              <li className="mb-4">HTML5</li>
              <li className="mb-4">CSS3</li>
              <li className="mb-4">React.js</li>
              <li className="mb-4">Next.js</li>
              <li className="mb-4">JavaScript (ES6+)</li>
            </ul>
            <ul>
              <li className="mb-4">Tailwind CSS</li>
              <li className="mb-4">Responsive Web Design</li>
              <li className="mb-4">Node.js</li>
              <li className="mb-4">MongoDB</li>
              <li className="mb-4">Responsive Web Design</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
