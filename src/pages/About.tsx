import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-radial-glow" />
        
        <div className="container mx-auto px-4 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="orange" className="mb-6">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground max-w-3xl mx-auto">
              Making Research <span className="text-accent">Accessible to Everyone</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              We built Canvassing because we believe every researcher deserves access to quality participants without the complexity and cost of traditional methods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-8 px-4 bg-cream">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.div 
              className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 h-80 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <p className="text-muted-foreground">Team Photo Placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">Andrew Kim & Benedictors Ogada</p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <Badge className="mb-4">Our Story</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Why We <span className="text-accent">Built Canvassing</span>
            </h2>
          </AnimatedSection>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <AnimatedSection delay={0.1}>
              <p>
                Canvassing is a young marketplace connecting researchers with verified participants, 
                founded in 2024 by <span className="text-accent font-medium">Andrew Kim</span> and{" "}
                <span className="text-accent font-medium">Benedictors Ogada</span>, a Kenyan developer-designer duo.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p>
                Canvassing came out of the Build with Celo 7 hackathon, where the goal was to "transform 
                rewards and loyalty." About a year and a half later, it has been a forum that enables 
                participants to earn and offer value to researchers, who seek product validation and 
                feedback through surveys and testing.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p>
                Canvassing has received support from <span className="text-accent font-medium">Prezenti</span>, 
                a project that offers grants for Celo builders. Since its inception, the project has partnered 
                with GoodDollar, a social impact UBI project present on Ethereum, Fuse, Celo, and XDC networks 
                and it uses the GoodDollar (G$) token as the default reward currency.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default About;
