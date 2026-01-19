import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import RingPattern from "@/components/RingPattern";
import AnimatedStarfield from "@/components/AnimatedStarfield";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative py-16 md:py-24 overflow-hidden bg-hero-gradient min-h-[80vh] flex items-center">
        <AnimatedStarfield color="#f97316" starCount={150000} speed={0.0005} />
        <div className="absolute inset-0 bg-radial-glow" />
        <RingPattern position="left" />
        <RingPattern position="right" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6">Page Not Found</Badge>
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 text-primary/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                404
              </motion.h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-primary">
                Oops! This page doesn't exist
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                The page you're looking for might have been moved, deleted, or doesn't exist. Let's get you back on track.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                  <Link to="/">
                    <Home className="w-5 h-5 mr-2 inline" />
                    Go Home
                  </Link>
                </Button>
                <Button asChild variant="outline" className="bg-white border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-6 text-lg">
                  <Link to="/faq">
                    <Search className="w-5 h-5 mr-2 inline" />
                    Browse FAQ
                  </Link>
                </Button>
              </div>

              <div className="mt-12 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">Or explore our main pages:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button asChild variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                    <Link to="/rez">Rez Dashboard</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="rounded-full border-accent text-accent hover:bg-accent hover:text-white">
                    <Link to="/pax">Pax App</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                    <Link to="/products/online-surveys">Online Surveys</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                    <Link to="/products/product-testing">Product Testing</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
