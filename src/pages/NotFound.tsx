import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="font-pixel text-8xl sm:text-9xl text-primary mb-6 animate-float">
              404
            </div>
            <h1 className="font-pixel text-xl sm:text-2xl text-foreground mb-4">
              BLOCK NOT <span className="text-primary">FOUND</span>
            </h1>
            <p className="font-minecraft text-xl text-muted-foreground mb-8">
              Oops! Looks like this page got lost in the void. 
              The block you're looking for doesn't exist in this dimension.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="minecraft-btn inline-flex items-center gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
              <button 
                onClick={() => window.history.back()} 
                className="minecraft-btn !bg-secondary hover:!bg-accent inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
