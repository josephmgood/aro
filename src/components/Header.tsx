
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export function Header() {
  const location = useLocation();
  
  // Check which nav item is active
  const isActive = (path: string) => {
    // For category paths, check if the pathname includes the category
    if (path.startsWith('/category/')) {
      const category = path.split('/').pop();
      return location.pathname === path || location.pathname === `/categories?category=${category}`;
    }
    return location.pathname === path;
  };

  const categories = ["Drinks", "Snacks", "Food", "Beauty", "Home", "Health"];

  return (
    <header className="border-b sticky top-0 z-10 bg-black text-white">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl text-white">
          Aro
        </Link>

        {/* Category navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {categories.map((category) => (
            <NavItem 
              key={category}
              to={`/categories?category=${category}`} 
              isActive={isActive(`/categories?category=${category}`)}
            >
              {category}
            </NavItem>
          ))}
        </nav>

        {/* Submit Brand button */}
        <Link to="/submit">
          <Button variant="outline" className="border-white text-black bg-white hover:bg-gray-200 hover:text-black">
            Submit Brand
          </Button>
        </Link>
      </div>
    </header>
  );
}

interface NavItemProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

function NavItem({ to, isActive, children }: NavItemProps) {
  return (
    <Link
      to={to}
      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
        isActive
          ? "bg-white text-black"
          : "text-white hover:bg-gray-800"
      }`}
    >
      {children}
    </Link>
  );
}
