import { motion } from "framer-motion";
import { ArrowDown, Download, UserCircle, ListChecks, Banknote, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";
import paxGetRewardedImage from "@/assets/pax-get-rewarded.svg";
import paxLogo from "@/assets/pax-logo.png";

const Pax = () => {
  const benefits = [
    "Get paid in stablecoins and tokens for completing surveys and testing products",
    "Instant crypto/stablecoin and token rewards",
    "Earn bonus rewards through referrals and community engagement",
    "Mobile-first seamless experience",
    "Real-time transparent dashboard tracking earnings, surveys, and rewards"
  ];

  const timelineSteps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Download the Pax app and create your profile",
      icon: Download,
      link: "Takes 2 minutes",
      side: "left"
    },
    {
      number: "02",
      title: "Complete Profile",
      description: "Complete your profile, verify you're human, and instantly earn rewards through achievements.",
      icon: UserCircle,
      link: "Verification and Approval",
      side: "right"
    },
    {
      number: "03",
      title: "Complete tasks",
      description: "Take surveys or test products at your convenience",
      icon: ListChecks,
      link: "Takes 5 to 10 minutes",
      side: "left"
    },
    {
      number: "04",
      title: "Get Paid",
      description: "Receive stablecoin payments directly to your wallet",
      icon: Banknote,
      link: "Instant Payments",
      side: "right"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img 
              src={paxLogo} 
              alt="Pax" 
              className="w-16 h-16 mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            />
            <Badge className="mb-6">Trusted by 1K+ participants</Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              <span className="text-accent">Micro tasks,</span> <span className="text-primary">rewarded in tokens</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of participants earning stablecoin and token rewards by completing surveys and testing products from top researchers and companies.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button asChild className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-6 text-lg">
                <a href="https://thepax.app/website" target="_blank" rel="noopener noreferrer">Download Pax App</a>
              </Button>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-purple-light">
        <div className="container mx-auto max-w-2xl">
          <AnimatedSection className="text-center mb-10">
            <Badge className="mb-6">Built for everyday earners</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Why Join Canvassing?
            </h2>
          </AnimatedSection>

          <div className="space-y-4 mb-10">
            {benefits.map((benefit, index) => (
              <AnimatedCard key={index} index={index}>
                <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-card group hover:shadow-lg transition-shadow">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Gift className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
              Here's how Pax <span className="text-accent">makes earning simple and transparent</span>
            </h3>
            <ArrowDown className="w-6 h-6 mx-auto text-accent animate-bounce" />
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-6">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              From signup to <span className="text-accent">stablecoin rewards</span> in minutes
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden md:block" />

            <div className="space-y-8 md:space-y-0">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: step.side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${step.side === "right" ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 ${step.side === "right" ? "md:text-right" : ""}`}>
                    <div className="bg-white rounded-xl p-6 shadow-card border border-border/50 group hover:shadow-lg transition-shadow">
                      <div className={`flex items-center gap-3 mb-3 ${step.side === "right" ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/10 to-yellow/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <step.icon className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="font-display font-bold text-lg">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                      <span className="text-primary text-sm font-medium inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        {step.link}
                      </span>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-yellow text-white flex items-center justify-center font-display font-bold shadow-lg">
                      {step.number}
                    </div>
                  </motion.div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Rewarded CTA Section with Image */}
      <section className="py-16 px-4 bg-primary-dark">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <motion.div 
              className="bg-primary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Left Content */}
              <div className="flex-1 text-left">
                <motion.img 
                  src={paxLogo} 
                  alt="Pax" 
                  className="w-12 h-12 mb-6 rounded-lg"
                  whileHover={{ rotate: 10 }}
                />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                  Get Rewarded<br />for Your<br />Opinions.
                </h2>
                <p className="text-white/80 mb-6">
                  Earn crypto rewards by sharing your thoughts through quick, verified surveys.
                </p>
                <Button asChild className="bg-black text-white hover:bg-black/90 rounded-lg px-6 py-3 gap-2">
                  <a href="https://thepax.app/website" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Google Play
                  </a>
                </Button>
              </div>
              
              {/* Right Image */}
              <motion.div 
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <img src={paxGetRewardedImage} alt="Pax App - Get Rewarded for Your Opinions" className="max-w-full h-auto max-h-80 object-contain" />
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Ready to Earn CTA */}
      <section className="py-16 px-4 bg-primary-dark text-center">
        <div className="container mx-auto max-w-xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-white/70 mb-8">
              Download the <span className="text-yellow">Pax app</span> and join our community of participants making money through research.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-white text-primary-dark hover:bg-white/90 rounded-full px-8 py-6 font-semibold">
                <a href="https://thepax.app/website" target="_blank" rel="noopener noreferrer">Download App →</a>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

    </Layout>
  );
};

export default Pax;
