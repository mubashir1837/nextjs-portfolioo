"use client"
import React from "react";
import Image from "next/image";


const Hero = () => {
  return (
    <section className="hero">
      <div className="text-center mt-8"> {/* Adjusted margin-top from mt-0 to mt-8 */}
        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold text-white"><span className="text-[#03d3fc]">Hello I'm</span> Mubashir</h1>
        <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada diam sit amet felis blandit, in vehicula mauris consectetur. Duis vehicula ante eget nisi vehicula, sit amet posuere nulla ultricies.</p>
        <div className="mt-4"> {/* Adjusted margin-top from mt-8 to mt-4 */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-4 rounded">
            Hire Me
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
