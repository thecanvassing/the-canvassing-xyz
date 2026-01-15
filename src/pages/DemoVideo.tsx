import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

const DemoVideo = () => {
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

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default DemoVideo;
