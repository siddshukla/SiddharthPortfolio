import { ArrowDown } from "lucide-react";
import mainPic from '../assets/mainPic.png';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-16 md:pt-20"
    >
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 z-10 py-16 md:py-24">
        {/* Text Content */}
        <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Siddharth
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Shukla
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3">
            Full-stack developer crafting elegant solutions to complex problems. ⚡ Turning ideas into high-performance applications with JavaScript, React, Node.js, and MongoDB. Passionate about clean code, optimized systems, and creating user experiences that leave an impression. Code isn't just what I write—it's how I innovate. 💻✨
          </p>
          
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
        
        {/* Image Container */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 opacity-0 animate-fade-in-delay-2">
            {/* Profile Photo with Border Effect */}
            <div className="absolute inset-0 rounded-full border-2 border-primary opacity-75 animate-pulse"></div>
            <img 
              src={mainPic}
              alt="Siddharth Shukla" 
              className="rounded-full object-contain w-full h-full shadow-xl"
            />
            {/* Circular glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};