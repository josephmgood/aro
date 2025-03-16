
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-6 md:py-8 border-t border-[#1B4D3E]/30 bg-[#1B4D3E] text-white">
      <div className="container flex justify-between items-center px-4 md:px-6">
        <div className="text-xs text-gray-300">
          © 2023 Aro Marketplace. All rights reserved.
        </div>
        <Link to="/" className="font-bold text-xl text-white">
          Aro
        </Link>
      </div>
    </footer>
  );
}
