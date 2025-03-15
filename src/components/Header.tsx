
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="border-b sticky top-0 z-10 bg-background">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-ph-orange w-8 h-8 rounded-md flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">ProductHunt</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-2 relative max-w-sm flex-1 mx-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-8 bg-background"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">Today</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/topics">Topics</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/submit">Submit</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
