import { Link } from "react-router-dom";
import { Check, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import Calculator from "@/components/Calculator";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const OnlineSurveys = () => {
  const features = [
    "Support for Google Forms, Tally, Typeform & more",
    "Paste your survey link — we handle the rest",
    "Quality monitoring & fraud: Target by age and location",
    "Real-time response tracking",
    "Quality verification on every response",
  ];

  const faqs = [
    { question: "How do I create an online survey on Canvassing?", answer: "Simply paste your survey link from your preferred platform (Google Forms, Tally, Typeform, etc.) and set your target participants. We handle the distribution and verification." },
    { question: "What survey tools are supported?", answer: "We support all major survey platforms including Google Forms, Tally, Typeform, SurveyMonkey, and any platform that generates a shareable link." },
    { question: "What happens after I launch my survey?", answer: "Your survey is distributed to verified participants matching your criteria. You can track responses in real-time on your dashboard." },
    { question: "How do I receive my survey results?", answer: "Results are collected through your original survey platform. We provide additional quality verification data through your Canvassing dashboard." },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-radial-glow" />
        
        <div className="container mx-auto px-4 relative text-center">
          <Badge variant="orange" className="mb-6">Online Surveys</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground max-w-3xl mx-auto">
            Struggling to <span className="text-accent">Find Verified Survey</span> Participants Fast?
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Paste your survey link and reach verified participants quickly. Transparent pricing based on questions and participants needed.
          </p>
          <Button className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-6 text-lg">
            Launch Your Online Survey
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-purple-light">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <Badge className="mb-6">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Launch surveys and get verified responses
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
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
              See exactly what <span className="text-accent">your project will cost</span>
            </h3>
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
          
          <Calculator variant="surveys" />

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

export default OnlineSurveys;
