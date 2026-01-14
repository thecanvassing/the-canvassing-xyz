import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import FAQSection from "@/components/FAQSection";

const DemoVideo = () => {
  const faqs = [
    {
      question: "How do I know participants are real, not bots?",
      answer: "All participants go through our rigorous verification process including identity checks and behavioral analysis to ensure authentic responses."
    },
    {
      question: "Can I target specific demographics?",
      answer: "Yes, you can target participants based on location, age, gender, income level, profession, and many other demographic criteria."
    },
    {
      question: "How quickly will I get results?",
      answer: "Most projects receive quality-verified responses within 24-72 hours, depending on your sample size and targeting requirements."
    },
    {
      question: "How are participants verified?",
      answer: "Participants complete identity verification, quality assessments, and ongoing engagement tracking to maintain our high standards."
    },
    {
      question: "How do I get started as a researcher?",
      answer: "Simply create an account on our Rez Dashboard, define your project requirements, and we'll match you with verified participants instantly."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Play Demo Video, <span className="text-accent">to see how it works</span>
          </h1>
          
          <ArrowDown className="w-6 h-6 mx-auto text-primary mb-8" />
          
          {/* Video Placeholder */}
          <div className="bg-accent rounded-3xl aspect-video flex items-center justify-center mb-16">
            <p className="text-white text-xl font-semibold">Demo Video will be inserted here</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <Badge variant="purple" className="mb-6">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Ready to Get Started?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Researcher Dashboard Card */}
            <div className="bg-primary rounded-2xl p-6 text-left">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent text-white mb-4">
                Researcher Dashboard
              </span>
              <p className="text-white mb-6">
                Get verified <span className="text-accent">African participants</span> for your next project
              </p>
              <Button
                asChild
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white rounded-full w-full"
              >
                <Link to="/rez">Start Project →</Link>
              </Button>
            </div>

            {/* Book a Call Card */}
            <div className="bg-primary-dark/50 rounded-2xl p-6 text-left border border-primary/30">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary text-white mb-4">
                Book a 15-min call:
              </span>
              <p className="text-white mb-6">
                Questions? Book a 15-min call:
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white rounded-full w-full"
              >
                <Link to="/contact">Schedule Call →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DemoVideo;
