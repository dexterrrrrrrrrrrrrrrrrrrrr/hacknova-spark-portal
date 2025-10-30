import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import svitLogo from "@/assets/svit-logo.jpg";
import naacLogo from "@/assets/naac-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Logo Header */}
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <img 
            src={svitLogo} 
            alt="SVIT Logo" 
            className="h-20 md:h-28 object-contain"
          />
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center flex-1 mx-8">
            HACKNOVA
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
              <span className="text-secondary">Hackathon 2024</span>
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
