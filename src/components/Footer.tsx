
import { Link } from "react-router-dom";
import { Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-6 md:py-8 border-t border-brandColors-darkBlue/30 bg-brandColors-darkBlue text-white">
      <div className="container flex items-center gap-6 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl text-white">
          Aro
        </Link>
        
        {/* Social Media Links */}
        <div className="flex items-center gap-4">
          <a 
            href="https://x.com/Josephgood_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-brandColors-darkTan transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/joseph-good1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-brandColors-darkTan transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
