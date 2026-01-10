import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Badge from "./Badge";

const CTASection = () => {
  return (
    <section className="py-16 px-4 bg-purple-light">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <Badge variant="purple" className="mb-6">Get Started</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark">
            Ready to Get Started?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Researcher Dashboard Card */}
          <div className="bg-white rounded-2xl p-6 text-left shadow-md border border-primary/10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent text-white mb-4">
              Researcher Dashboard
            </span>
            <p className="text-foreground mb-6">
              Get verified African participants for your next project
            </p>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white rounded-full"
            >
              <Link to="/products/online-surveys">Start Project →</Link>
            </Button>
          </div>

          {/* Participant App Card */}
          <div className="bg-white rounded-2xl p-6 text-left shadow-md border border-primary/10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary text-white mb-4">
              Participant App
            </span>
            <p className="text-foreground mb-6">
              Discover tasks and earn rewards
            </p>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white rounded-full"
            >
              <Link to="/pax">Open App →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
