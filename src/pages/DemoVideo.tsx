import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Play Demo Video, <span className="text-accent">to see how it works</span>
            </h1>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-6 h-6 mx-auto text-primary mb-8" />
            </motion.div>
          </motion.div>
          
          {/* YouTube Video Embed */}
          <AnimatedSection delay={0.2}>
            <motion.div 
              className="rounded-3xl overflow-hidden aspect-video mb-16 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.youtube.com/embed/Z2Ly4J68Lzo"
                title="Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default DemoVideo;
