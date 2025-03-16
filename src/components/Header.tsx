
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check which nav item is active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/" && !location.search.includes("category=");
    }
    
    // For category paths, check if the search params include the category
    if (path.startsWith('category:')) {
      const category = path.split(':')[1];
      return location.search.includes(`category=${category}`);
    }
    return location.pathname === path;
  };

  const categories = ["Drinks", "Snacks", "Food", "Beauty", "Home", "Health"];

  const handleCategoryClick = (category: string) => {
    // Navigate to home page with category filter
    navigate(`/?category=${category}`);
  };

  return (
    <header className="border-b sticky top-0 z-10 bg-brandColors-darkBlue text-white">
      <div className="container flex items-center h-16 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl text-white mr-auto">
          Aro
        </Link>

        {/* Category navigation - adjusted for better centering */}
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-1">
            {categories.map((category) => (
              <NavItem 
                key={category}
                onClick={() => handleCategoryClick(category)}
                isActive={isActive(`category:${category}`)}
              >
                {category}
              </NavItem>
            ))}
          </div>
        </nav>

        {/* Submit Brand button */}
        <Link to="/submit" className="ml-auto">
          <Button className="text-brandColors-darkBlue bg-brandColors-darkTan hover:bg-brandColors-darkTan hover:text-white">
            Submit Brand
          </Button>
        </Link>
      </div>
    </header>
  );
}

interface NavItemProps {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

function NavItem({ isActive, children, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
        isActive
          ? "bg-brandColors-darkTan text-brandColors-darkBlue"
          : "text-white hover:bg-brandColors-darkBlue/70"
      }`}
    >
      {children}
    </button>
  );
}
