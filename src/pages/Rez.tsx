import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  PenLine,
  Calculator as CalcIcon,
  Rocket,
  Trophy,
  Zap,
  Target,
  BarChart3,
  Beaker,
  Download,
  Check,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import Calculator from "@/components/Calculator";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";
import RingPattern from "@/components/RingPattern";
import AnimatedStarfield from "@/components/AnimatedStarfield";
import DownloadReportPopup from "@/components/DownloadReportPopup";
import ConfirmationPopup from "@/components/ConfirmationPopup";
import rezLogo from "@/assets/rez-logo.svg";
import celoLogo from "@/assets/partners/celo.svg";
import exionLogo from "@/assets/partners/exion_finance.svg";
import expendiLogo from "@/assets/partners/expendi.svg";
import gooddollarLogo from "@/assets/partners/gooddollar.svg";
import minilendLogo from "@/assets/partners/minilend.png";
import peerpesaLogo from "@/assets/partners/peerpesa.png";
import prezentiLogo from "@/assets/partners/prezenti.svg";
import waystLogo from "@/assets/partners/wayst.svg";
import web3CertifierLogo from "@/assets/partners/web3_certifier.png";

const Rez = () => {
  const [email, setEmail] = useState("");
  const [showReportPopup, setShowReportPopup] = useState(false);
  const [showParticipantsPopup, setShowParticipantsPopup] = useState(false);
  const [participantsSubmitting, setParticipantsSubmitting] = useState(false);
  const [participantsSubmitted, setParticipantsSubmitted] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleGetParticipants = () => {
    if (isValidEmail(email)) {
      setShowParticipantsPopup(true);
      setParticipantsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setParticipantsSubmitting(false);
        setParticipantsSubmitted(true);
        setTimeout(() => {
          setShowParticipantsPopup(false);
          setParticipantsSubmitted(false);
        }, 3000);
      }, 1000);
    }
  };

  const partnerLogos = [
    { name: "Celo", logo: celoLogo, link: "https://celo.org" },
    { name: "Exion Finance", logo: exionLogo, link: "https://www.exion.finance/" },
    { name: "Expendi", logo: expendiLogo, link: "https://expendi.app" },
    { name: "GoodDollar", logo: gooddollarLogo, link: "https://gooddollar.org" },
    { name: "Minilend", logo: minilendLogo, link: "https://minilend.xyz" },
    { name: "PeerPesa", logo: peerpesaLogo, link: "https://peerpesa.co" },
    { name: "Prezenti", logo: prezentiLogo, link: "https://prezenti.xyz" },
    { name: "Wayst Recycling", logo: waystLogo, link: "https://waystrecycling.com" },
    { name: "Web3 Certifier", logo: web3CertifierLogo, link: "https://web3certifier.com" },
  ];

  const heroTestimonials = [
    {
      quote: "The responses were insightful and the data was valuable.",
      name: "Jordan Muthemba",
      role: "Co-Founder, Exion Finance",
    },
    {
      quote: "Customer concentration awareness and validation - that is the value Canvassing brought us.",
      name: "Abdulrahman",
      role: "Founder, Wayst Recycling",
    },
    {
      quote: "We used Canvassing to understand financial behaviors in Sub-Saharan Africa.",
      name: "Joe Gikenye",
      role: "Founder, Minilend",
    },
  ];

  const painPoints = [
    "Weeks wasted recruiting participants on WhatsApp groups",
    "Fake responses and bot traffic ruining your data",
    "Participants ghosting scheduled interviews",
    "Agencies charging $2,000+ for simple surveys",
    "Juggling 3 different platforms for surveys, testing, and recruitment",
  ];
  const timelineSteps = [
    {
      number: "01",
      title: "Define Your Project",
      description:
        "Tell us what you need: project type, target demographic, number of participants.",
      icon: PenLine,
      link: "Takes 2 minutes",
      side: "left",
    },
    {
      number: "02",
      title: "Get Instant Quote",
      description:
        "Receive immediate pricing based on your requirements. No surprises, no hidden fees.",
      icon: CalcIcon,
      link: "Review & approve",
      side: "right",
    },
    {
      number: "03",
      title: "Project is Published",
      description:
        "We handle participant matching, quality screening, and project launch.",
      icon: Rocket,
      link: "Takes 2 minutes",
      side: "left",
    },
    {
      number: "04",
      title: "Get Results",
      description:
        "Track in real-time with live responses, quality checks, and data download.",
      icon: Trophy,
      link: "48-72 hours total",
      side: "right",
    },
  ];
  const surveyFeatures = [
    "Launch surveys quickly with your preferred tools",
    "Access verified participants across Africa",
    "Quality verification on every response",
  ];
  const testingFeatures = [
    "Real users testing your actual product",
    "Detailed feedback and screenshots",
    "Fast turnaround times",
  ];

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-hero-gradient">
        <AnimatedStarfield />
        <div className="absolute inset-0 bg-radial-glow" />
        <RingPattern position="left" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={rezLogo} alt="Rez" className="w-16 h-16 mx-auto mb-6" />
              <Badge className="mb-6">
                <Check className="w-4 h-4 inline mr-1" />
                Trusted by 200+ African researchers
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-primary">
                Get Quality Research Insights in{" "}
                <span className="text-accent">48 Hours</span>, Not Weeks
              </h1>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Recruit verified African participants for surveys and product tests.
                From $50 for 20 responses. No recruitment hassle, no fake data.
              </p>

              {/* Primary CTA - Email Capture Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 mb-6 max-w-lg mx-auto border border-border/50"
              >
                <p className="text-sm text-muted-foreground mb-3 text-left">
                  Start your first project in 2 minutes:
                </p>

                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none text-base bg-background text-center"
                  />

                  <button
                    onClick={handleGetParticipants}
                    disabled={!isValidEmail(email)}
                    className={`w-full py-3 rounded-full font-semibold text-base flex items-center justify-center gap-2 transition-all ${
                      isValidEmail(email)
                        ? "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    Get Participants Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs text-muted-foreground mt-3 text-left">
                  <Check className="w-3 h-3 inline mr-1" /> No credit card required
                  <Check className="w-3 h-3 inline mx-1 ml-3" /> 2-minute setup
                  <Check className="w-3 h-3 inline mx-1 ml-3" /> First project in 48 hours
                </p>
              </motion.div>

              {/* Secondary CTA - Download Report */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-8"
              >
                <p className="text-base text-muted-foreground mb-3">
                  Not ready to start yet?
                </p>
                <button
                  onClick={() => setShowReportPopup(true)}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-base border-2 border-primary/30 hover:border-primary/50 px-6 py-3 rounded-full transition-all hover:shadow-md bg-white/80 backdrop-blur-sm"
                >
                  <Download className="w-5 h-5" />
                  <span className="hidden sm:inline">Download Free 2026 Research Report</span>
                  <span className="sm:hidden">Download Free Report</span>
                </button>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-3"
              >
                <div className="flex -space-x-2">
                  {heroTestimonials.map((t, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold ${
                        i === 0 ? "bg-primary" : i === 1 ? "bg-accent" : "bg-primary-dark"
                      }`}
                    >
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by <span className="font-semibold text-primary">200+ researchers</span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Partner Logos Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 w-full"
        >
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
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
                    className="h-6 md:h-8 w-auto object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                    title={partner.name}
                  />
                </a>
              ))}
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
                    className="h-6 md:h-8 w-auto object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                    title={partner.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

      </section>

      {/* Demo Video Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-primary">
              Play Demo Video,{" "}
              <span className="text-accent">to see how it works</span>
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
              Research Shouldn't Be This{" "}
              <span className="text-accent">Hard</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4 mb-10">
            {painPoints.map((point, index) => (
              <AnimatedCard key={index} index={index}>
                <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-card text-left">
                  <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-muted-foreground line-through decoration-accent/50">
                    {point}
                  </span>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Sound familiar?{" "}
              <span className="text-accent">There's a better way.</span>
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
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: step.side === "left" ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    step.side === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      step.side === "right" ? "md:text-right" : ""
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-card border border-border/50 group hover:shadow-lg transition-shadow">
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          step.side === "right" ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-display font-bold text-lg">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        {step.description}
                      </p>
                      <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-light text-primary">
                        {step.link}
                      </span>
                    </div>
                  </div>

                  <motion.div
                    className="relative z-10"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground flex items-center justify-center font-display font-bold shadow-lg">
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

      {/* Two Methods Section */}
      <section className="py-16 px-4 bg-purple-light">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-6">Choose your path</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              <span className="text-accent">Two</span> Powerful Ways to Get
              Insights
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
                <h3 className="text-2xl font-display font-bold mb-6">
                  Online Surveys
                </h3>
                <ul className="space-y-3 mb-8">
                  {surveyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Zap className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-full"
                >
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
                <h3 className="text-2xl font-display font-bold mb-6">
                  Product Testing
                </h3>
                <ul className="space-y-3 mb-8">
                  {testingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-gradient-to-br from-yellow/20 to-yellow/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Target className="w-3 h-3 text-yellow-foreground" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-full"
                >
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
              Over{" "}
              <span className="text-accent font-bold">500 researchers</span>{" "}
              have used our calculator
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-purple-light">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Here's what researchers <span className="text-accent">love</span><br />about Canvassing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {researcherTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
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

      {/* Download Report Popup */}
      <DownloadReportPopup
        isOpen={showReportPopup}
        onClose={() => setShowReportPopup(false)}
      />

      {/* Get Participants Confirmation Popup */}
      <ConfirmationPopup
        isOpen={showParticipantsPopup}
        onClose={() => {
          setShowParticipantsPopup(false);
          setParticipantsSubmitting(false);
          setParticipantsSubmitted(false);
        }}
        isLoading={participantsSubmitting}
        isSuccess={participantsSubmitted}
        loadingTitle="Setting up your account..."
        loadingMessage="Please wait while we prepare your researcher dashboard."
        successTitle="Check Your Email!"
        successMessage={`We've sent your login details to ${email}`}
      />
    </Layout>
  );
};
export default Rez;
