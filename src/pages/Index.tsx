import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, BarChart3, Beaker, Mic2, PenLine, Calculator as CalcIcon, Rocket, Trophy, Target, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import StatsBar from "@/components/StatsBar";
import Calculator from "@/components/Calculator";
import CTASection from "@/components/CTASection";
import WelcomePopup from "@/components/WelcomePopup";
import RingPattern from "@/components/RingPattern";
import AnimatedStarfield from "@/components/AnimatedStarfield";
import rezLogo from "@/assets/rez-logo.svg";
import paxLogo from "@/assets/pax-logo.png";
import celoLogo from "@/assets/partners/celo.svg";
import exionLogo from "@/assets/partners/exion_finance.svg";
import expendiLogo from "@/assets/partners/expendi.svg";
import gooddollarLogo from "@/assets/partners/gooddollar.svg";
import minilendLogo from "@/assets/partners/minilend.png";
import peerpesaLogo from "@/assets/partners/peerpesa.png";
import prezentiLogo from "@/assets/partners/prezenti.svg";
import waystLogo from "@/assets/partners/wayst.svg";
import web3CertifierLogo from "@/assets/partners/web3_certifier.png";
const Index = () => {
  const helpFeatures = [{
    icon: BarChart3,
    title: "Online Surveys",
    subtitle: "& Polls",
    useCases: ["Market research", "Customer satisfaction", "Academic studies", "Opinion polls"],
    comingSoon: false,
    link: "/products/online-surveys",
    gradient: "from-primary to-primary-dark"
  }, {
    icon: Beaker,
    title: "Product",
    subtitle: "Testing",
    useCases: ["Usability testing", "Feature validation", "Beta testing", "UX Feedback",],
    comingSoon: false,
    link: "/products/product-testing",
    gradient: "from-accent to-accent/80"
  }, {
    icon: Mic2,
    title: "User",
    subtitle: "Interviews",
    useCases: ["Discovery research", "Pain point interviews", "Concept validation", "Journey mapping"],
    comingSoon: true,
    link: "#",
    gradient: "from-yellow to-yellow/80"
  }];
  const researcherFeatures = ["Create and publish tasks", "Manage participant payments", "Track responses via dashboard"];
  const participantFeatures = ["Browse available tasks", "Complete screenings and tasks", "Claim and withdraw rewards"];
  const timelineSteps = [{
    number: "01",
    title: "Define Your Project",
    description: "Tell us what you need: project type, target demographic, number of participants.",
    icon: PenLine,
    link: "Takes 2 minutes",
    side: "left"
  }, {
    number: "02",
    title: "Get Instant Quote",
    description: "Receive immediate pricing based on your requirements. No surprises, no hidden fees.",
    icon: CalcIcon,
    link: "Review & approve",
    side: "right"
  }, {
    number: "03",
    title: "Project is Published",
    description: "We handle participant matching, quality screening, and project launch.",
    icon: Rocket,
    link: "Automated setup",
    side: "left"
  }, {
    number: "04",
    title: "Get Results",
    description: "Track in real-time with live responses, quality checks, and data download.",
    icon: Trophy,
    link: "48-72 hours total",
    side: "right"
  }];
  const researcherTestimonials = [{
    quote: "Customer concentration awareness and validation - that is the value that the survey we did with Canvassing brought us.",
    name: "Abdulrahman",
    role: "Founder, Wayst Recycling",
    avatar: "AB",
    avatarBg: "bg-primary",
    rating: 5
  }, {
    quote: "We used Canvassing to understand financial behaviors in Sub-Saharan Africa as we built our project.",
    name: "Joe Gikenye",
    role: "Founder, Minilend",
    avatar: "JG",
    avatarBg: "bg-accent",
    rating: 4
  }, {
    quote: "After creating our Tally form, all we had to sit back and wait for participants to complete the tasks. The responses were insightful and the data was valuable.",
    name: "Jordan Muthemba",
    role: "Co-Founder, Exion Finance",
    avatar: "JM",
    avatarBg: "bg-primary-dark",
    rating: 5
  }];
  const participantTestimonials = [{
    quote: "Many long term benefactors can testify that with Canvassing lies many opportunities.",
    name: "Ayorinde Olorunniyi",
    role: "Pax Early Adopter",
    avatar: "AO",
    avatarBg: "bg-accent",
    rating: 5
  }, {
    quote: "Tasks and withdrawal alerts are instant.",
    name: "Esther Muteti",
    role: "Freelancer, Nairobi",
    avatar: "EM",
    avatarBg: "bg-primary",
    rating: 4
  }, {
    quote: "While claiming rewards, sometimes the process was sluggish but the process is smooth and the rewards are instant and the transitions are smooth when navigating through the app, and makes it all worth it.",
    name: "Fredrick Ekesa",
    role: "Participant, Nairobi",
    avatar: "FE",
    avatarBg: "bg-primary-dark",
    rating: 4
  }];

  const partnerLogos = [
    { name: "Celo", logo: celoLogo, link: "https://celo.org" },
    { name: "Exion Finance", logo: exionLogo,  link: "https://www.exion.finance/"},
    { name: "Expendi", logo: expendiLogo, link: "https://expendi.app" },
    { name: "GoodDollar", logo: gooddollarLogo,link: "https://gooddollar.org" },
    { name: "Minilend", logo: minilendLogo, link: "https://minilend.xyz"},
    { name: "PeerPesa", logo: peerpesaLogo, link: "https://peerpesa.co" },
    { name: "Prezenti", logo: prezentiLogo, link: "https://prezenti.xyz" },
    { name: "Wayst Recycling", logo: waystLogo, link: "https://waystrecycling.com"},
    { name: "Web3 Certifier", logo: web3CertifierLogo, link: "https://web3certifier.com" },
  ];
  const [activeTab, setActiveTab] = useState<'researchers' | 'participants'>('researchers');
  return <Layout>
    <WelcomePopup />
    {/* Hero Section */}
    <section className="relative py-16 md:py-24 overflow-hidden bg-hero-gradient">
      <AnimatedStarfield />
      <div className="absolute inset-0 bg-radial-glow" />
      <RingPattern position="left" />
      <div className="container mx-auto px-4 relative z-10">
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
            <Badge className="mb-6">Trusted by 500+ researchers across Africa</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-primary">
              Research made simple.{" "}
              <span className="text-accent">Micro-tasks</span> <span className="text-primary">rewarded in tokens.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Connecting African researchers with verified participants—creating income and driving innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                <Link to="/rez">Become a Researcher</Link>
              </Button>
              <Button asChild className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                <Link to="/pax">Become a Participant</Link>
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

        {/* Partner Logos Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 w-full"
        >
          <p className="text-center text-muted-foreground text-sm mb-12">Trusted by leading organizations across Africa and in the world</p>
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth fade effect */}
        
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
              {/* First set of logos */}
              {partnerLogos.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                    title={partner.name}
                  />
                </a>
              ))}
              {/* Duplicate set for seamless loop */}
              {partnerLogos.map((partner) => (
                <a
                  key={`${partner.name}-duplicate`}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                    title={partner.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Help Section */}
    <section className="py-16 px-4 bg-purple-light relative overflow-hidden">
      <RingPattern position="right" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-6">Hello, we are Canvassing</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold max-w-2xl mx-auto text-primary">
            We help researchers, startups, and NGOs collect high-quality data{" "}
            <span className="text-accent">while participants earn crypto rewards</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {helpFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-card border border-border/50 group hover:shadow-lg transition-shadow"
            >
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
              {feature.comingSoon ? <Button variant="outline" className="mt-4 rounded-full border-primary text-primary hover:bg-primary hover:text-white text-sm px-4 py-1 h-auto">
                Coming Soon
              </Button> : <Link to={feature.link} className="text-accent text-sm font-medium hover:underline mt-4 flex items-center gap-1">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Choose Your Path Section */}
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-6">What we offer</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            Choose Your Path
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Researcher Card - Prominent */}
          <div className="bg-primary/10 rounded-2xl p-8 border border-primary/30">
            <img src={rezLogo} alt="Rez" className="w-12 h-12 mb-4" />
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30 mb-4">
              FOR RESEARCHERS
            </span>
            <h3 className="text-2xl font-display font-bold mb-2 text-primary">Create and manage tasks</h3>
            <ul className="space-y-3 mb-8 mt-6">
              {researcherFeatures.map((feature, index) => <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <span className="text-muted-foreground">{feature}</span>
              </li>)}
            </ul>
            <Button asChild className="w-full bg-primary hover:bg-primary-dark text-white rounded-full">
              <Link to="/rez">Rez Dashboard →</Link>
            </Button>
          </div>

          {/* Participant Card */}
          <div className="bg-white rounded-2xl p-8 shadow-card border border-border/50">
            <img src={paxLogo} alt="Pax" className="w-12 h-12 mb-4" />
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-accent/10 text-foreground border border-accent/20 mb-4">
              FOR PARTICIPANTS
            </span>
            <h3 className="text-2xl font-display font-bold mb-2 text-primary">Discover tasks and earn rewards</h3>
            <ul className="space-y-3 mb-8 mt-6">
              {participantFeatures.map((feature, index) => <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
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
    {/* <section id="process" className="py-16 px-4 bg-purple-light scroll-mt-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-6">How it works</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            From project setup to results delivery in{" "}
            <span className="text-accent">under 72 hours</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {timelineSteps.map((step, index) => <motion.div
              key={step.number}
              initial={{ opacity: 0, x: step.side === "left" ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${step.side === "right" ? "md:flex-row-reverse" : ""}`}>
              <div className={`flex-1 ${step.side === "right" ? "md:text-right" : ""}`}>
                <div className="bg-white rounded-xl p-6 shadow-card border border-border/50 group hover:shadow-lg transition-shadow">
                  <div className={`flex items-center gap-3 mb-3 ${step.side === "right" ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-primary">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-light text-primary">
                    {step.link}
                  </span>
                </div>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground flex items-center justify-center font-display font-bold shadow-lg">
                  {step.number}
                </div>
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>)}
          </div>
        </div>
      </div>
    </section>
 */}

    {/* Testimonials Section */}
    <section className="py-16 px-4 bg-purple-light">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            Here's what {activeTab === 'researchers' ? 'researchers' : 'participants'} <span className="text-accent">love</span><br />about Canvassing
          </h2>
        </div>

        <div className="flex gap-4 mb-8">
          <button onClick={() => setActiveTab('researchers')} className={`px-6 py-2 rounded-full font-medium transition-colors ${activeTab === 'researchers' ? 'bg-primary text-primary-foreground' : 'bg-white text-foreground border border-border hover:bg-muted'}`}>
            Researchers
          </button>
          <button onClick={() => setActiveTab('participants')} className={`px-6 py-2 rounded-full font-medium transition-colors ${activeTab === 'participants' ? 'bg-primary text-primary-foreground' : 'bg-white text-foreground border border-border hover:bg-muted'}`}>
            Participants
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {(activeTab === 'researchers' ? researcherTestimonials : participantTestimonials).map((testimonial, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card border border-border/50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-accent text-accent' : 'fill-muted text-muted'}`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${testimonial.avatarBg} flex items-center justify-center text-white font-semibold text-sm`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <CTASection />
  </Layout>;
};
export default Index;