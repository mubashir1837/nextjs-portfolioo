import React from "react";

const ProjectSection = () => {
  return (
    <section className="projects py-10 sm:py-16 lg:py-24 text-center">
      <div className="container mx-auto">
        <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-[#03d3fc]">Projects</span>
        </h2>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
          <div className="project-box bg-[#27b4e3] p-6 rounded-lg shadow-md flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-[#fff]">Ecommerce Website</h3>
            <p className="text-[#fff] mb-4">
                This an ecommerce website designed by using HTML, CSS and JavaScript.
            </p>
            <a
              href="https://ecommerce-m.vercel.app/"
              className="text-blue-500 hover:underline mt-auto"
            >
              <button className="bg-[#fff] hover:bg-[#1ff] text-[#94d1d1] hover:text-[#fff] font-bold py-2 px-4 rounded">
                View project
              </button>
            </a>
          </div>
        
          <div className="project-box bg-[#27b4e3] p-6 rounded-lg shadow-md flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-[#fff]">Text Analyzer</h3>
            <p className="text-[#fff] mb-4">
              This project is showing Text Analyzer website
            </p>
            <a
              href="https://texts-analyzerr.vercel.app/"
              className="text-blue-500 hover:underline mt-auto"
            >
              <button className="bg-[#fff] hover:bg-[#1ff] text-[#94d1d1] hover:text-[#fff] font-bold py-2 px-4 rounded">
                View project
              </button>
            </a>
          </div>
        
          <div className="project-box bg-[#27b4e3] p-6 rounded-lg shadow-md flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-[#fff]">Food ordering website</h3>
            <p className="text-[#fff] mb-4">
              This project is about food ordering website.
            </p>
            <a
              href="https://foodweb-five.vercel.app/"
              className="text-blue-500 hover:underline mt-auto"
            >
              <button className="bg-[#f7f5f5] hover:bg-[#1ff] text-[#94d1d1] hover:text-[#fff] font-bold py-2 px-4 rounded align-center">
                View project
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
