import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, BarChart3, Beaker, Mic2, PenLine, Calculator as CalcIcon, Rocket, Trophy, Sparkles, Coins, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import StatsBar from "@/components/StatsBar";
import Calculator from "@/components/Calculator";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import WelcomePopup from "@/components/WelcomePopup";
import rezLogo from "@/assets/rez-logo.svg";
import paxLogo from "@/assets/pax-logo.png";
const Index = () => {
  const helpFeatures = [{
    icon: BarChart3,
    title: "Online Surveys",
    subtitle: "& Polls",
    useCases: ["Market research", "Customer satisfaction", "Academic studies", "Product feedback", "Brand tracking"],
    comingSoon: false,
    link: "/products/online-surveys",
    gradient: "from-primary to-primary-dark"
  }, {
    icon: Beaker,
    title: "Product",
    subtitle: "Testing",
    useCases: ["App beta testing", "Website usability", "Physical products", "Prototype testing", "User testing"],
    comingSoon: false,
    link: "/products/product-testing",
    gradient: "from-accent to-accent/80"
  }, {
    icon: Mic2,
    title: "User",
    subtitle: "Interviews",
    useCases: ["User research", "In-depth insights", "Customer personas", "Discovery research", "Concept testing"],
    comingSoon: true,
    link: "#",
    gradient: "from-yellow to-yellow/80"
  }];
  const researcherFeatures = ["Create and publish tasks", "Manage participant payments", "Track responses via dashboard"];
  const participantFeatures = ["Browse available tasks", "Complete tasks at your pace", "Earn verified rewards instantly"];
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
    question: "Who can use Canvassing?",
    answer: "Researchers, startups, NGOs, and enterprises looking to collect quality data, as well as individuals looking to earn rewards by participating in research."
  }, {
    question: "What kind of incentives are offered?",
    answer: "Participants are rewarded with GoodDollar (G$) tokens, a stablecoin that provides real value and instant payments."
  }];
  return <Layout>
      <WelcomePopup />
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
              <Badge className="mb-6">Trusted by African founders</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
                Research made simple.{" "}
                <span className="text-accent">Micro-tasks</span> <span className="text-primary">rewarded in tokens.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Connecting African researchers with verified participants—creating income and driving innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-6 text-lg">
                  <Link to="/rez">Learn More</Link>
                </Button>
                <Button asChild variant="outline" className="bg-white border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-6 text-lg">
                  <Link to="/demo-video">See how it works</Link>
                </Button>
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

      {/* Help Section */}
      <section className="py-16 px-4 bg-purple-light">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-6">Hello, we are Canvassing</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold max-w-2xl mx-auto">
              We help researchers, startups, and NGOs collect high-quality data{" "}
              <span className="text-accent">while participants earn crypto rewards through</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {helpFeatures.map((feature, index) => <div key={index} className="bg-white rounded-2xl p-6 shadow-card border border-border/50 group hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{feature.subtitle}</p>
                <p className="text-xs text-accent font-semibold mb-2">USE CASES</p>
                <ul className="space-y-1.5">
                  {feature.useCases.map((useCase, i) => <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <Target className="w-3 h-3 text-accent flex-shrink-0" />
                      {useCase}
                    </li>)}
                </ul>
                {feature.comingSoon ? (
                  <Button variant="outline" className="mt-4 rounded-full border-primary text-primary hover:bg-primary hover:text-white text-sm px-4 py-1 h-auto">
                    Coming Soon
                  </Button>
                ) : (
                  <Link to={feature.link} className="text-accent text-sm font-medium hover:underline mt-4 flex items-center gap-1">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>)}
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-6">What we offer</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Choose Your Path
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Researcher Card */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-border/50">
              <img src={rezLogo} alt="Rez" className="w-12 h-12 mb-4" />
              <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
                FOR RESEARCHERS
              </span>
              <h3 className="text-2xl font-display font-bold mb-2">Create and manage tasks</h3>
              <ul className="space-y-3 mb-8 mt-6">
                {researcherFeatures.map((feature, index) => <li key={index} className="flex items-start gap-3">
                    <img src={rezLogo} alt="" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>)}
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary-dark text-white rounded-full">
                <Link to="/rez">Rez Dashboard →</Link>
              </Button>
            </div>

            {/* Participant Card */}
            <div className="bg-accent/10 rounded-2xl p-8 border border-accent/30">
              <img src={paxLogo} alt="Pax" className="w-12 h-12 mb-4" />
              <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-accent/20 text-foreground border border-accent/30 mb-4">
                FOR PARTICIPANTS
              </span>
              <h3 className="text-2xl font-display font-bold mb-2">Discover tasks and earn rewards</h3>
              <ul className="space-y-3 mb-8 mt-6">
                {participantFeatures.map((feature, index) => <li key={index} className="flex items-start gap-3">
                    <img src={paxLogo} alt="" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>)}
              </ul>
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-full">
                <Link to="/pax">Pax App →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-16 px-4 bg-purple-light">
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
              Here's what researchers <span className="text-accent">love</span><br />about Canvassing
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
    </Layout>;
};
export default Index;