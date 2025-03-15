
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 px-4 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-muted-foreground mt-2 max-w-md">
        We couldn't find the page you're looking for. It might have been removed or doesn't exist.
      </p>
      <Button asChild className="mt-6 bg-primary hover:bg-primary/90">
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
}
