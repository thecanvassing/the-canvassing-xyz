import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, Star, PenLine, Calculator as CalcIcon, Rocket, Trophy, Zap, Target, BarChart3, Beaker } from "lucide-react";
import WelcomePopup from "@/components/WelcomePopup";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import StatsBar from "@/components/StatsBar";
import Calculator from "@/components/Calculator";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import rezLogo from "@/assets/rez-logo.svg";
const Index = () => {
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
  const faqs = [{
    question: "What is Canvassing?",
    answer: "Canvassing is a marketplace that connects researchers with verified participants for surveys and product testing. We help you gather quality insights quickly and affordably."
  }, {
    question: "How are participants verified?",
    answer: "Participants go through our verification process which includes identity verification, quality checks, and engagement tracking to ensure authentic responses."
  }, {
    question: "What tools do you support?",
    answer: "We support popular survey tools like Google Forms, Tally, Typeform, and more. Simply paste your survey link and we handle the rest."
  }, {
    question: "What kind of incentives are offered?",
    answer: "Participants are rewarded with GoodDollar (G$) tokens, a stablecoin that provides real value and instant payments."
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-radial-glow" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }}>
              <img src={rezLogo} alt="Rez" className="w-16 h-16 mx-auto mb-6" />
              <Badge className="mb-6">Vouched for by some African founders</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
                Get Quality Research Insights{" "}
                <span className="text-accent">in Days, Not Weeks</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                The trusted marketplace where researchers find verified participants for online surveys and product testing. Transparent pricing, quality responses, fast turnaround.
              </p>
              <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-full border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleGetParticipants}
                    disabled={!isValidEmail(email)}
                    className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Get Participants Now
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowPopup(true)}
                    className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-6 text-lg"
                  >
                    Download Free Playbook
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="max-w-3xl mx-auto">
            <StatsBar />
          </motion.div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl font-display mb-2">
            Play Demo Video, <span className="text-accent">to see how it works</span>
          </p>
          <ArrowDown className="w-6 h-6 mx-auto text-accent animate-bounce mb-8" />
          
          <div className="bg-accent rounded-3xl h-80 md:h-96 flex items-center justify-center">
            <p className="text-xl text-white font-medium">Demo Video will be inserted here</p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 px-4 bg-purple-light">
        <div className="container mx-auto max-w-2xl text-center">
          <Badge className="mb-6">Based on 100+ research projects</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">
            Research Shouldn't Be This <span className="text-accent">Hard</span>
          </h2>
          
          <div className="space-y-4 mb-10">
            {painPoints.map((point, index) => <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-card text-left">
                <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
                <span className="text-muted-foreground line-through decoration-accent/50">{point}</span>
              </div>)}
          </div>

          <p className="text-xl font-display mb-4">
            Sound familiar? <span className="text-accent">There's a better way.</span>
          </p>
          <ArrowDown className="w-6 h-6 mx-auto text-accent animate-bounce" />
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-6">Process</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              From project setup to results delivery in{" "}
              <span className="text-accent">under 72 hours</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden md:block" />

            <div className="space-y-8 md:space-y-0">
              {timelineSteps.map((step, index) => <div key={step.number} className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${step.side === "right" ? "md:flex-row-reverse" : ""}`}>
                  <div className={`flex-1 ${step.side === "right" ? "md:text-right" : ""}`}>
                    <div className="bg-white rounded-xl p-6 shadow-card border border-border/50 group hover:shadow-lg transition-shadow">
                      <div className={`flex items-center gap-3 mb-3 ${step.side === "right" ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-display font-bold text-lg">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                      <Link to="#" className="text-accent text-sm font-medium hover:underline inline-flex items-center gap-1">
                        {step.link}
                      </Link>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground flex items-center justify-center font-display font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>)}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-6">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Two Methods Section */}
      <section className="py-16 px-4 bg-purple-light">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-6">Methods</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              <span className="text-accent">Two</span> Powerful Ways to Get Insights
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Online Surveys Card */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-border/50 group hover:shadow-lg transition-shadow">
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

            {/* Product Testing Card */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-border/50 group hover:shadow-lg transition-shadow">
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
          
          <Calculator />

          <p className="text-center mt-10 text-lg">
            Over <span className="text-accent font-bold">500 researchers</span> have used our calculator
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Here's what researchers <span className="text-accent">love</span> about Canvassing
            </h2>
          </div>

          <div className="flex gap-4 mb-8">
            <button className="px-6 py-2 rounded-full font-medium bg-primary text-primary-foreground">
              Researchers
            </button>
            <button className="px-6 py-2 rounded-full font-medium bg-white text-foreground border border-border">
              Participants
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => <div key={index} className="bg-white rounded-2xl p-6 shadow-card border border-border/50">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <CTASection />

      {/* Popup */}
      <WelcomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </Layout>;
};
export default Index;