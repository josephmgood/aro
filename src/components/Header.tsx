
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  
  // Check which nav item is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b sticky top-0 z-10 bg-white">
      <div className="container flex items-center justify-center h-16 px-4 md:px-6">
        <nav className="flex items-center space-x-1">
          <NavItem to="/" isActive={isActive("/")}>
            Home
          </NavItem>
          <NavItem to="/categories" isActive={isActive("/categories")}>
            Listings
          </NavItem>
          <NavItem to="/submit" isActive={isActive("/submit")}>
            Sales
          </NavItem>
        </nav>
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
          ? "bg-gray-200 text-gray-900"
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
      }`}
    >
      {children}
    </Link>
  );
}
