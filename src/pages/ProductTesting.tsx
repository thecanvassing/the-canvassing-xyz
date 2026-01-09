import { Check, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import Calculator from "@/components/Calculator";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const ProductTesting = () => {
  const features = [
    "Share your product link (app, website, prototype)",
    "Add custom testing instructions",
    "Collect feedback via your preferred form",
    "Verified testers matched to your needs",
    "Video recordings available (optional)",
  ];

  const faqs = [
    { question: "How does product testing work on Canvassing?", answer: "Share your product link, add testing instructions, and we match you with verified testers who provide detailed feedback through your preferred feedback form." },
    { question: "What kind of products can I test?", answer: "You can test websites, mobile apps, prototypes, physical products, and more. Any product that can be accessed or experienced by testers." },
    { question: "How do testers give feedback?", answer: "Testers provide feedback through your preferred form or survey. We can also arrange video recordings of testing sessions for additional insights." },
    { question: "How do I get the testing results?", answer: "Results are delivered through your feedback platform. Video recordings and additional quality data are available through your Canvassing dashboard." },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-radial-glow" />
        
        <div className="container mx-auto px-4 relative text-center">
          <Badge variant="orange" className="mb-6">Product Testing</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground max-w-3xl mx-auto">
            Struggling to <span className="text-accent">Find Verified Product Testing</span> Participants Fast?
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Connect with real users who test your products and provide detailed, actionable feedback.
          </p>
          <Button className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-6 text-lg">
            Start Product Testing
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-purple-light">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <Badge className="mb-6">Based on 100+ research projects</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Get real users to test your product
            </h2>
          </div>

          <div className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-card"
              >
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-display mb-2">
              See exactly what <span className="text-accent">your project will cost</span>
            </p>
            <ArrowDown className="w-6 h-6 mx-auto text-accent animate-bounce" />
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-4">Calculator</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">
            <span className="text-accent">Calculate</span> Your Project Cost
          </h2>
          
          <Calculator variant="testing" />

          <p className="text-center mt-10 text-lg">
            Over <span className="text-accent font-bold">500 researchers</span> have used our calculator
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default ProductTesting;
