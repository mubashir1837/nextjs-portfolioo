import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills"; 
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-purple-600 to-indigo-600">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-0">
        <Hero />
        <AboutMe />
        <Skills /> 
        <ProjectSection/>

      </div>
    </main>
  );
}
