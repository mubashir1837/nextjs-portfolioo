"use client"
import Link from "next/link";
import React from "react";


const Hero = () => {
  return (
    <section className="hero">
      <div className="text-center mt-8">
        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold text-white"><span className="text-[#03d3fc]">Hello I&apos;m</span> Mubashir</h1>
        <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada diam sit amet felis blandit, in vehicula mauris consectetur. Duis vehicula ante eget nisi vehicula, sit amet posuere nulla ultricies.</p>
        <div className="mt-4"> 
        <Link 
           href="http://Wa.me/+923275882664">
          <button className="bg-[#a836eb] hover:bg-[#92b8d4] text-white font-bold py-2 px-4 mr-4 rounded">
            Hire Me
          </button>
          </Link>
          <Link
          href="https://github.com/mubashir1837/Curriculum-Vitae/blob/main/Curriculum%20Vitae.pdf">
          <button className="bg-[#27b4e3] hover:bg-[#92b8d4] text-white font-bold py-2 px-4 rounded">
            Download CV
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
