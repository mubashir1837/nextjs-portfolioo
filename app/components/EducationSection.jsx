import React from 'react';

const EducationSection = () => {
  return (
    <section className="education py-10 sm:py-16 lg:py-24 text-center">
      <div className="container mx-auto">
        <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-[#03d3fc]">Education</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
          <div className="education-item bg-[#27b4e3] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-[#fff]">Matric</h3>
            <p className="text-[#fff] mb-2">Uswa Public School Yultar</p>
            <p className="text-[#fff] mb-4">Science</p>
            <p className="text-[#fff]">2019-2021</p>
          </div>
          
          <div className="education-item bg-[#27b4e3] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-[#fff]">Intermediate</h3>
            <p className="text-[#fff] mb-2">Uswa College Islamabad</p>
            <p className="text-[#fff] mb-4">Pre Medical</p>
            <p className="text-[#fff]">2021-2023</p>
          </div>

          <div className="education-item bg-[#27b4e3] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-white">Bachelor</h3>
            <p className="text-[#fff] mb-2">University ...</p>
            <p className="text-[#fff] mb-4">Field of Study</p>
            <p className="text-[#fff]">Year of Graduation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
