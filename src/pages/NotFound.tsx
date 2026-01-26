import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center relative">
        {/* Background effect */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="text-[200px] md:text-[300px] font-display font-bold text-primary/5 select-none">
            404
          </div>
        </div>

        <div className="text-center relative z-10">
          <div className="mb-8">
            <span className="font-mono text-6xl md:text-8xl font-bold text-primary neon-text">
              404
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="font-body text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved to another dimension.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="font-display tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
            >
              <Link to="/">
                <Home className="mr-2 w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <Button
              variant="outline"
              className="font-display tracking-wider border-primary/50 text-primary hover:bg-primary/10"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Go Back
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
