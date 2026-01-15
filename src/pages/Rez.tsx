import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, Star, PenLine, Calculator as CalcIcon, Rocket, Trophy, Zap, Target, BarChart3, Beaker } from "lucide-react";
import WelcomePopup from "@/components/WelcomePopup";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import Calculator from "@/components/Calculator";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";
import RingPattern from "@/components/RingPattern";
import rezLogo from "@/assets/rez-logo.svg";
const Rez = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const handleGetParticipants = () => {
    if (isValidEmail(email)) {
      window.open(`https://rez.thecanvassing.xyz?email=${encodeURIComponent(email)}`, '_blank');
    }
  };
  const painPoints = ["Weeks spent recruiting qualified participants", "Falling response rates and low engagement", "Struggling with poor data quality and fake responses", "Long delays between project launch and results", "Juggling different tools for surveys, testing, and payments"];
  const timelineSteps = [{
    number: "01",
    title: "Define Your Project",
    description: "Set your research goals and target participants. Specify demographics, timeline, and methodology.",
    icon: PenLine,
    link: "Get Started →",
    side: "left"
  }, {
    number: "02",
    title: "Get Instant Quote",
    description: "Receive immediate pricing based on your requirements. No surprises, no hidden fees.",
    icon: CalcIcon,
    link: "See Pricing →",
    side: "right"
  }, {
    number: "03",
    title: "Project is Published",
    description: "Your project goes live to verified participants matching your criteria instantly.",
    icon: Rocket,
    link: "View Process →",
    side: "left"
  }, {
    number: "04",
    title: "Get Results",
    description: "Receive quality-verified responses directly to your dashboard in real-time.",
    icon: Trophy,
    link: "View Dashboard →",
    side: "right"
  }];
  const surveyFeatures = ["Launch surveys quickly with your preferred tools", "Access verified participants across Africa", "Target by age, location, and demographics", "Real-time response tracking", "Quality verification on every response"];
  const testingFeatures = ["Real users testing your actual product", "Detailed feedback and video recordings", "Target specific user segments", "Fast turnaround times", "Comprehensive testing reports"];
  const testimonials = [{
    quote: "Canvassing helped us gather insights from 500+ African consumers in just 3 days. The quality of responses was exceptional.",
    name: "Sarah K.",
    role: "Research Lead, TechCo"
  }, {
    quote: "The verified participant network means we no longer waste time on fake responses. Game changer for our research.",
    name: "James M.",
    role: "Product Manager, StartupXYZ"
  }, {
    quote: "Finally, a platform that understands the African market. Fast, reliable, and cost-effective.",
    name: "Grace O.",
    role: "UX Researcher, DesignHub"
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }}>
            <motion.img src={rezLogo} alt="Rez" className="w-16 h-16 mx-auto mb-6" initial={{
              scale: 0,
              rotate: -180
            }} animate={{
              scale: 1,
              rotate: 0
            }} transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200
            }} />
            <Badge className="mb-6">Vouched for by some African founders</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-primary">
              Get Quality Research Insights{" "}
              <span className="text-accent">in Days, Not Weeks</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              The trusted marketplace where researchers find verified participants for online surveys and product testing. Transparent pricing, quality responses, fast turnaround.
            </p>
            <motion.div className="flex flex-col gap-4 items-center" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.3
            }}>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md pb-[20px]">
                <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="flex-1 px-4 py-3 rounded-full border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-center" />
              </div>
              <Button onClick={handleGetParticipants} disabled={!isValidEmail(email)} className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                Get Participants Now
              </Button>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-primary">
              Play Demo Video, <span className="text-accent">to see how it works</span>
            </h2>
            <ArrowDown className="w-6 h-6 mx-auto text-accent animate-bounce mb-8" />
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="rounded-3xl overflow-hidden aspect-video shadow-xl">
              <iframe 
                src="https://www.youtube.com/embed/Z2Ly4J68Lzo" 
                title="Demo Video" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                className="w-full h-full" 
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 px-4 bg-purple-light relative overflow-hidden">
        <RingPattern position="right" />
        <div className="container mx-auto max-w-2xl text-center relative z-10">
          <AnimatedSection>
            <Badge className="mb-6">Based on 100+ research projects</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">
              Research Shouldn't Be This <span className="text-accent">Hard</span>
            </h2>
          </AnimatedSection>
          
          <div className="space-y-4 mb-10">
            {painPoints.map((point, index) => <AnimatedCard key={index} index={index}>
                <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-card text-left">
                  <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-muted-foreground line-through decoration-accent/50">{point}</span>
                </div>
              </AnimatedCard>)}
          </div>

          <AnimatedSection delay={0.5}>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Sound familiar? <span className="text-accent">There's a better way.</span>
            </h3>
            <ArrowDown className="w-6 h-6 mx-auto text-accent animate-bounce" />
          </AnimatedSection>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-6">How it works</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              From project setup to results delivery in{" "}
              <span className="text-accent">under 72 hours</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden md:block" />

            <div className="space-y-8 md:space-y-0">
              {timelineSteps.map((step, index) => <motion.div key={step.number} initial={{
              opacity: 0,
              x: step.side === "left" ? -50 : 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true,
              margin: "-50px"
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${step.side === "right" ? "md:flex-row-reverse" : ""}`}>
                  <div className={`flex-1 ${step.side === "right" ? "md:text-right" : ""}`}>
                    <div className="bg-white rounded-xl p-6 shadow-card border border-border/50 group hover:shadow-lg transition-shadow">
                      <div className={`flex items-center gap-3 mb-3 ${step.side === "right" ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-display font-bold text-lg">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                  
                  <motion.div className="relative z-10" whileHover={{
                scale: 1.1
              }} transition={{
                type: "spring",
                stiffness: 300
              }}>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground flex items-center justify-center font-display font-bold shadow-lg">
                      {step.number}
                    </div>
                  </motion.div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Two Methods Section */}
      <section className="py-16 px-4 bg-purple-light">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-6">Choose your path</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              <span className="text-accent">Two</span> Powerful Ways to Get Insights
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Online Surveys Card */}
            <AnimatedCard index={0}>
              <div className="bg-white rounded-2xl p-8 shadow-card border border-border/50 group hover:shadow-lg transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mb-4">
                  Method 01
                </span>
                <h3 className="text-2xl font-display font-bold mb-6">Online Surveys</h3>
                <ul className="space-y-3 mb-8">
                  {surveyFeatures.map((feature, index) => <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Zap className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>)}
                </ul>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-full">
                  <Link to="/products/online-surveys">Start Survey →</Link>
                </Button>
              </div>
            </AnimatedCard>

            {/* Product Testing Card */}
            <AnimatedCard index={1}>
              <div className="bg-white rounded-2xl p-8 shadow-card border border-border/50 group hover:shadow-lg transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow to-yellow/80 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Beaker className="w-6 h-6 text-yellow-foreground" />
                </div>
                <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-yellow/20 text-yellow-foreground border border-yellow/30 mb-4">
                  Method 02
                </span>
                <h3 className="text-2xl font-display font-bold mb-6">Product Testing</h3>
                <ul className="space-y-3 mb-8">
                  {testingFeatures.map((feature, index) => <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-gradient-to-br from-yellow/20 to-yellow/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Target className="w-3 h-3 text-yellow-foreground" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>)}
                </ul>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-full">
                  <Link to="/products/product-testing">Start Testing →</Link>
                </Button>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <Badge className="mb-4">Calculator</Badge>
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
      <CTASection />

      {/* Popup */}
      <WelcomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </Layout>;
};
export default Rez;