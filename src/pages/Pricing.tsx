import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import Calculator from "@/components/Calculator";
import FAQSection from "@/components/FAQSection";
import ProductCTASection from "@/components/ProductCTASection";

const Pricing = () => {
  const faqs = [
    { question: "How does the cost calculator work?", answer: "The calculator estimates your project cost based on the number of questions and responses for surveys, or number of testers for product testing. Pricing is transparent with no hidden fees." },
    { question: "Do I need to provide my email to use the calculator?", answer: "Yes, we require your email to send you a detailed quote and help you get started with your project. We never spam and you can unsubscribe anytime." },
    { question: "How do I start my project after calculating the cost?", answer: "After receiving your quote, click 'Start My Project' to access your dashboard where you can set up your survey or product test with all the details." },
    { question: "How is the pricing determined for surveys and product tests?", answer: "Survey pricing is based on question count and number of responses. Product testing is priced per tester. Both include participant verification and quality assurance." },
    { question: "Will I receive spam or unwanted emails?", answer: "No, we respect your privacy. You'll only receive your project quote and essential updates. You can unsubscribe anytime." },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-radial-glow" />
        
        <div className="container mx-auto px-4 relative text-center">
          <Badge variant="orange" className="mb-6">Product Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground max-w-3xl mx-auto">
            Transparent <span className="text-accent">Pricing</span> That Scales With Your Needs
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            No surprises, no hidden fees. Calculate your project cost instantly and see exactly where your money goes.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">
            <span className="text-accent">Calculate</span> Your Project Cost
          </h2>
          
          <Calculator />

          <p className="text-center mt-10 text-lg">
            Over <span className="text-accent font-bold">500 researchers</span> have used our calculator
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <ProductCTASection />
    </Layout>
  );
};

export default Pricing;
