
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8 bg-primary/5">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary w-6 h-6 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">D</span>
            </div>
            <span className="font-medium text-primary">DirectBrands</span>
          </Link>
          <p className="text-xs text-muted-foreground">
            © 2023 DirectBrands. Discover innovative D2C brands.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="/about">
            About
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="/faq">
            FAQ
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="/terms">
            Terms
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="/privacy">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
