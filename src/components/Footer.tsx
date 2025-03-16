
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-6 md:py-8 border-t border-brandColors-mediumTeal/30 bg-brandColors-darkTeal text-white">
      <div className="container flex justify-between items-center px-4 md:px-6">
        <div className="text-xs text-brandColors-lightSalmon">
          © 2023 Aro Marketplace. All rights reserved.
        </div>
        <Link to="/" className="font-bold text-xl text-white">
          Aro
        </Link>
      </div>
    </footer>
  );
}
