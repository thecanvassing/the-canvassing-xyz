import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Badge from "./Badge";

const CTASection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="bg-primary-dark rounded-3xl p-8 md:p-12 text-center">
          <Badge variant="orange" className="mb-6">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-10">
            Ready to Get Started?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Researcher Dashboard Card */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-left">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent text-white mb-4">
                Researcher Dashboard
              </span>
              <p className="text-white/90 mb-6">
                Get verified African participants for your next project
              </p>
              <Button
                asChild
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white rounded-full"
              >
                <Link to="/products/online-surveys">Start Project →</Link>
              </Button>
            </div>

            {/* Participant App Card */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-left">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white mb-4">
                Participant App
              </span>
              <p className="text-white/90 mb-6">
                Discover tasks and earn rewards
              </p>
              <Button
                asChild
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10 rounded-full"
              >
                <Link to="/pax">Open App →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
