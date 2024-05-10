import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import EducationSection from "./components/EducationSection"; 
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-purple-600 to-indigo-600">
      <Navbar />
      <div className="container mt-20 mx-auto px-12 py-0">
        <Hero />
        <br />
        <br />
        <br />
        <AboutMe />
        <br />
        <br />
        <br />        

        <Skills /> 
        <br />
        <br />
        <br />
        <EducationSection/>
        <br />
        <br />
        <br />
        <ProjectSection/>
        <Footer/>

      </div>
    </main>
  );
}
