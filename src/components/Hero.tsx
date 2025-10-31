import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import svitLogo from "@/assets/svit-logo.png";
import naacLogo from "@/assets/naac-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements with robotics theme */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated orbs */}
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="currentColor" className="text-secondary"/>
                <circle cx="75" cy="75" r="2" fill="currentColor" className="text-accent"/>
                <path d="M25 25 L75 25 L75 75" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-secondary/50"/>
                <path d="M25 75 L50 75 L50 25" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-accent/50"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-secondary/30 rotate-45 animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-32 right-20 w-16 h-16 border-2 border-accent/30 animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-secondary/20 rounded-full animate-pulse" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Logo and College Name Header */}
        <div className="flex flex-col items-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-6 md:gap-12 mb-4">
            <img 
              src={svitLogo} 
              alt="SVIT Logo" 
              className="h-16 md:h-24 object-contain"
            />
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-center">
              <span className="bg-gradient-to-r from-white via-white to-secondary/90 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
                Sai Vidya Institute of Technology
              </span>
            </h2>
            <img 
              src={naacLogo} 
              alt="NAAC A Grade" 
              className="h-16 md:h-24 object-contain"
            />
          </div>
          
          {/* HACKNOVA Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-center relative">
            <span className="bg-gradient-to-r from-white via-secondary to-accent bg-clip-text text-transparent animate-glow drop-shadow-[0_0_30px_rgba(0,200,255,0.5)]">
              HACKNOVA
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-8 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              Hackathon 2025
            </h3>
            <p className="text-xl md:text-3xl text-white/90 font-medium">
              Innovate, Create, and Compete
            </p>
          </div>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join us for an exciting internal hackathon organized by the Department of Information Science Engineering. 
            Showcase your skills, collaborate with peers, and build innovative solutions to real-world challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-xl shadow-glow hover:shadow-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://unstop.com/hackathons/hacknova-sai-vidya-institute-of-technology-1582249" target="_blank" rel="noopener noreferrer">
                Register on Unstop <ArrowRight className="ml-2" />
              </a>
            </Button>
            
            <div className="flex flex-col items-center gap-2">
              <span className="text-white/70 text-sm">Submission Deadline</span>
              <span className="text-white text-2xl font-bold">November 4th, 2025</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
