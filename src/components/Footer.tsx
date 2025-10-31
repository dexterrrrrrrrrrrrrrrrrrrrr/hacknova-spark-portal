import { MapPin, Mail, Linkedin, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 px-4 overflow-hidden">
      {/* Robotic background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {/* Circuit board pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footer-circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-zinc-500"/>
                <circle cx="60" cy="60" r="1.5" fill="currentColor" className="text-zinc-600"/>
                <path d="M20 20 L60 20 L60 60" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-zinc-500/40"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-circuit)"/>
          </svg>
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-10 right-20 w-16 h-16 border border-zinc-600/30 rotate-45" />
        <div className="absolute bottom-10 left-20 w-12 h-12 border border-zinc-600/30" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Department Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-zinc-200">Department Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-zinc-400" />
                <div>
                  <p className="font-semibold text-zinc-100">Department of ISE</p>
                  <p className="text-sm text-zinc-400">
                    Sai Vidya Institute of Technology<br />
                    Rajankunte, Bangalore<br />
                    Karnataka 560064
                  </p>
                </div>
              </div>
              <a 
                href="mailto:info@saividya.ac.in"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">info@saividya.ac.in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-zinc-200">Quick Links</h3>
            <div className="space-y-3">
              <a 
                href="https://saividya.ac.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
              >
                <ExternalLink className="w-4 h-4" />
                <span>SVIT Official Website</span>
              </a>
              <a 
                href="https://unstop.com/hackathons/hacknova-sai-vidya-institute-of-technology-1582249"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Register on Unstop</span>
              </a>
              <a 
                href="https://www.linkedin.com/school/sai-vidya-institute-of-technology/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
              >
                <Linkedin className="w-4 h-4" />
                <span>Follow us on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* About HACKNOVA */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-zinc-200">About HACKNOVA</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              HACKNOVA is an internal hackathon organized by the Department of Information Science Engineering 
              at Sai Vidya Institute of Technology. Join us in fostering innovation and creativity among students.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-zinc-700/50" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} Sai Vidya Institute of Technology. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Organized by Department of Information Science Engineering
          </p>
        </div>
      </div>
    </footer>
  );
};
