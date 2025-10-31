import { MapPin, Mail, Linkedin, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Department Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Department Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Department of ISE</p>
                  <p className="text-sm text-primary-foreground/80">
                    Sai Vidya Institute of Technology<br />
                    Rajankunte, Bangalore<br />
                    Karnataka 560064
                  </p>
                </div>
              </div>
              <a 
                href="mailto:info@saividya.ac.in"
                className="flex items-center gap-3 hover:text-secondary transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">info@saividya.ac.in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a 
                href="https://saividya.ac.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-secondary transition-colors group"
              >
                <ExternalLink className="w-4 h-4" />
                <span>SVIT Official Website</span>
              </a>
              <a 
                href="https://unstop.com/o/4K72Ykg?lb=5Hk6I3GK&utm_medium=Share&utm_source=WhatsApp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-secondary transition-colors group"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Register on Unstop</span>
              </a>
              <a 
                href="https://www.linkedin.com/school/sai-vidya-institute-of-technology/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-secondary transition-colors group"
              >
                <Linkedin className="w-4 h-4" />
                <span>Follow us on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* About HACKNOVA */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">About HACKNOVA</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              HACKNOVA is an internal hackathon organized by the Department of Information Science Engineering 
              at Sai Vidya Institute of Technology. Join us in fostering innovation and creativity among students.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
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
