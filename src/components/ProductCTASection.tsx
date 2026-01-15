import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Badge from "./Badge";
import rezLogo from "@/assets/rez-logo.svg";

const ProductCTASection = () => {
  return (
    <section className="py-20 px-4 bg-primary-dark overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">Get Started</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Join hundreds of researchers and participants already using Canvassing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Researcher Dashboard Card */}
          <div className="group bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-left border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20">
            <img src={rezLogo} alt="Rez" className="w-14 h-14 mb-6 group-hover:scale-105 transition-transform" />
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-accent text-white mb-4">
              Researcher Dashboard
            </span>
            <h3 className="text-xl font-display font-bold text-white mb-3">
              Get verified African participants for your next project
            </h3>
            <p className="text-white/70 mb-8">
              Access our network of verified participants and launch your research today
            </p>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-5 group-hover:shadow-lg group-hover:shadow-accent/30 transition-all"
            >
              <Link to="/rez" className="flex items-center gap-2">
                Start Project <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Book a Call Card */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-left border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
            <div className="w-14 h-14 mb-6 group-hover:scale-105 transition-transform" />
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30 mb-4">
              Book a 15-min call:
            </span>
            <h3 className="text-xl font-display font-bold text-white mb-3">
              Questions? Book a 15-min call:
            </h3>
            <p className="text-white/70 mb-8">
              Have questions about how Canvassing works? Let's chat and find the best solution for you
            </p>
            <Button
              asChild
              className="bg-white text-primary-dark hover:bg-white/90 rounded-full px-6 py-5 transition-all font-semibold"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Schedule Call <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCTASection;
