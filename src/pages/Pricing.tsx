import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import Calculator from "@/components/Calculator";
import ProductCTASection from "@/components/ProductCTASection";
import AnimatedSection from "@/components/AnimatedSection";
import RingPattern from "@/components/RingPattern";

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-radial-glow" />
        <RingPattern position="left" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6">Product Pricing</Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground max-w-3xl mx-auto">
              Transparent <span className="text-accent">Pricing</span> That Scales With Your Needs
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              No surprises, no hidden fees. Calculate your project cost instantly and see exactly where your money goes.
            </p>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">
              <span className="text-accent">Calculate</span> Your Project Cost
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <Calculator />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-center mt-10 text-lg">
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

export default Pricing;
