"use client"
import Image from "next/image";

const AboutMe = () => {
    return (
      <section className="about-me flex flex-col sm:flex-row items-center justify-center text-center sm:text-left py-24 mt-20"> {/* Adjusted margin from mt-12 to mt-20 */}
        <div className="text-white max-w-lg">
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-[#03d3fc]">About Me</span>
          </h2>
          <p className="text-lg sm:text-xl mb-8">
          As an undergraduate computational biologist and dedicated web application 
          developer from Pakistan, I merge my passion for programming languages with 
          cutting-edge biological research. Crafting elegant code, I weave intricate 
          digital solutions, bridging science and technology. With each line 
          written, I advance towards a future where innovation knows no bound.
          </p>
        </div>
        <div className="mt-16 sm:mt-0 sm:ml-12"> 
          <Image src="/images/img.png" alt="Profile Image" width={200} height={200} className="rounded-full border-4 border-white" />
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  