import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import svitLogo from "@/assets/svit-logo.png";
import naacLogo from "@/assets/naac-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Logo Header */}
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <img 
            src={svitLogo} 
            alt="SVIT Logo" 
            className="h-20 md:h-28 object-contain"
          />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-center flex-1 mx-8 relative">
            <span className="bg-gradient-to-r from-white via-secondary to-accent bg-clip-text text-transparent animate-glow drop-shadow-[0_0_30px_rgba(0,200,255,0.5)]">
              HACKNOVA
            </span>
          </h1>
          <img 
            src={naacLogo} 
            alt="NAAC A Grade" 
            className="h-20 md:h-28 object-contain"
          />
        </div>

        {/* Main Content */}
        <div className="text-center space-y-8 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Sai Vidya Institute of Technology
              <br />
              <span className="text-secondary">Hackathon 2025</span>
            </h2>
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
              <a href="https://unstop.com" target="_blank" rel="noopener noreferrer">
                Register on Unstop <ArrowRight className="ml-2" />
              </a>
            </Button>
            
            <div className="flex flex-col items-center gap-2">
              <span className="text-white/70 text-sm">Submission Deadline</span>
              <span className="text-white text-2xl font-bold">November 4th, 2024</span>
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
