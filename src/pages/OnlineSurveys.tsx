import { motion } from "framer-motion";
import { Check, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import Calculator from "@/components/Calculator";
import ProductCTASection from "@/components/ProductCTASection";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";

const OnlineSurveys = () => {
  const features = [
    "Support for Google Forms, Tally, Typeform & more",
    "Paste your survey link — we handle the rest",
    "Quality monitoring & fraud: Target by age and location",
    "Real-time response tracking",
    "Quality verification on every response",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="orange" className="mb-6">Online Surveys</Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground max-w-3xl mx-auto">
              Struggling to <span className="text-accent">Find Verified Survey</span> Participants Fast?
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Paste your survey link and reach verified participants quickly. Transparent pricing based on questions and participants needed.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-6 text-lg">
                Launch Your Online Survey
              </Button>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-purple-light">
        <div className="container mx-auto max-w-2xl">
          <AnimatedSection className="text-center mb-10">
            <Badge className="mb-6">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Launch surveys and get verified responses
            </h2>
          </AnimatedSection>

          <div className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <AnimatedCard key={index} index={index}>
                <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-card">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
              See exactly what <span className="text-accent">your project will cost</span>
            </h3>
            <ArrowDown className="w-6 h-6 mx-auto text-accent animate-bounce" />
          </AnimatedSection>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">
              <span className="text-accent">Calculate</span> Your Project Cost
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <Calculator variant="surveys" showTabs={false} />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-center mt-10 text-xl md:text-2xl font-medium">
              Over <span className="text-accent font-bold">500 researchers</span> have used our calculator
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <ProductCTASection />
    </Layout>
  );
};

export default OnlineSurveys;
