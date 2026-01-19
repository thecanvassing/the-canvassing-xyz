import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import CTASection from "@/components/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import RingPattern from "@/components/RingPattern";
import AnimatedStarfield from "@/components/AnimatedStarfield";

const faqCategories = [
  {
    id: "general",
    title: "General",
    faqs: [
      {
        question: "What is Canvassing?",
        answer:
          "Canvassing is a research platform that connects researchers with verified participants to run online surveys and product tests. Participants are rewarded instantly in stablecoins (cUSD) when they complete tasks, and researchers get high-quality data quickly and affordably.",
      },
      {
        question: "How are participants verified?",
        answer:
          "We verify participants through Face Verification, profile completeness checks, and ongoing response quality monitoring.",
      },
      {
        question: "Who can use Canvassing?",
        answer: `Canvassing is built for two types of users:
• Researchers who need fast, verified responses for surveys and product testing
• Participants who want to earn stablecoin rewards by answering surveys and testing products 
Both groups can sign up, create profiles, and start participating or launching research projects.`,
      },
      {
        question: "How do I know participants are real, not bots?",
        answer:
          "All participants go through our rigorous verification process including identity checks and behavioral analysis to ensure authentic responses.",
      },
      {
        question: "How quickly will I get results?",
        answer:
          "Most projects receive quality-verified responses within 24-72 hours, depending on your sample size and targeting requirements.",
      },
      {
        question: "How do I get started as a researcher?",
        answer:
          "Simply create an account on our Rez Dashboard, define your project requirements, and we'll match you with verified participants instantly.",
      },
      {
        question: "What tools do you support?",
        answer:
          "We support popular survey tools like Google Forms, Tally, Typeform, and more. Simply paste your survey link and we handle the rest.",
      },
    ],
  },
  {
    id: "online-surveys",
    title: "Online Surveys",
    faqs: [
      {
        question: "How do I create an online survey on Canvassing?",
        answer:
          "To create a survey task, select Online Surveys as your task type, fill in your task details, and paste your survey link (we support tools like Tally). Once submitted, review your setup, make payment, and launch. Your survey is then published on the Pax app for participants to complete.",
      },
      {
        question: "What survey tools are supported?",
        answer:
          "Canvassing supports external survey tools such as Tally. As long as your survey link is accessible and properly configured, participants can complete it directly through the Pax app.",
      },
      {
        question: "What happens after I launch my survey?",
        answer:
          "After payment, your survey is instantly published to verified participants on the Pax app. You can monitor progress in real time and receive completed responses as participants submit them.",
      },
      {
        question: "How do I receive my survey results?",
        answer:
          "Responses are collected through your original survey tool. Once participants complete the task, you can download and analyze your data directly from the platform you used to create the survey.",
      },
    ],
  },
  {
    id: "product-testing",
    title: "Product Testing",
    faqs: [
      {
        question: "How does product testing work on Canvassing?",
        answer:
          "Select Product Testing as your task type, provide your product link (app, website, or prototype), add clear testing instructions, and include a link to your feedback form. After review and payment, the task is published on the Pax app for testers.",
      },
      {
        question: "What kind of products can I test?",
        answer:
          "You can test mobile apps, websites, prototypes, landing pages, or beta features. As long as participants can access your product through a link, it can be tested.",
      },
      {
        question: "How do testers give feedback?",
        answer:
          "Testers access your product using the link you provide, follow your instructions, and submit feedback through your linked feedback form (such as Tally or Google Forms).",
      },
      {
        question: "How do I get the testing results?",
        answer:
          "All feedback is submitted directly to your feedback form. You receive real user insights, usability notes, and structured responses ready for analysis as soon as testers complete their tasks.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    faqs: [
      {
        question: "How does the cost calculator work?",
        answer:
          "Our cost calculator allows you to estimate the price of your online survey or product testing project. Simply select your task type, input your details, and provide your survey or product link. Once you enter your email, you'll receive a detailed cost breakdown, and you can use this tool for free without any obligation.",
      },
      {
        question: "Do I need to provide my email to use the calculator?",
        answer:
          "Yes, you will need to enter your email to receive the cost estimate. Rest assured, your email will only be used for communication related to your project, and we won't spam you.",
      },
      {
        question: "How do I start my project after calculating the cost?",
        answer:
          "Once you've reviewed your cost estimate, you can proceed to create and publish your project on our platform. You'll follow the simple steps to set up your survey or product test and then launch it to participants. It's straightforward and quick.",
      },
      {
        question:
          "How is the pricing determined for surveys and product tests?",
        answer:
          "Pricing is based on the type of project, the number of participants, and the complexity of the task. Our calculator provides a detailed breakdown, ensuring transparency and helping you budget effectively.",
      },
      {
        question: "Will I receive spam or unwanted emails?",
        answer:
          "Absolutely not. We value your privacy and only use your email for updates related to your project. You can opt out at any time.",
      },
    ],
  },
  {
    id: "pax",
    title: "Pax (Participants)",
    faqs: [
      {
        question: "What is Pax?",
        answer:
          "Pax is a rewards platform that helps users earn digital rewards through simple actions such as learning, completing tasks, and participating in partner programs. Pax is designed to make earning accessible, transparent, and easy—especially for users in emerging markets.",
      },
      {
        question: "How does Pax work?",
        answer:
          "Users join Pax, complete available tasks (such as online surveys, product testing, or partner tasks), and earn rewards for their participation. Rewards are tracked in your account and can be claimed once eligibility conditions are met.",
      },
      {
        question: "Who can use Pax?",
        answer:
          "Pax is open to anyone who wants to earn rewards online, particularly students, freelancers, early-career professionals, and users exploring digital opportunities. You don't need prior technical or crypto experience to get started.",
      },
      {
        question: "How are payments verified?",
        answer:
          "We verify participants through Face Verification, profile completeness checks, and ongoing response quality monitoring.",
      },
      {
        question: "How do I get started with Pax?",
        answer: `1. Sign up on the Pax platform
2. Complete onboarding and profile setup
3. Explore available tasks or learning activities
4. Complete tasks and track your progress
5. Claim your rewards when they're available`,
      },
    ],
  },
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQs based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return faqCategories;

    const query = searchQuery.toLowerCase();
    return faqCategories
      .map((category) => ({
        ...category,
        faqs: category.faqs.filter(
          (faq) =>
            faq.question.toLowerCase().includes(query) ||
            faq.answer.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.faqs.length > 0);
  }, [searchQuery]);

  const totalResults = filteredCategories.reduce(
    (acc, cat) => acc + cat.faqs.length,
    0
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-hero-gradient">
        <AnimatedStarfield color="#f97316" starCount={150000} speed={0.0005} />
        <div className="absolute inset-0 bg-radial-glow" />
        <RingPattern position="left" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6">FAQ</Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
                Frequently Asked <span className="text-accent">Questions</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Everything you need to know about Canvassing, our products, and
                how to get started.
              </p>

              {/* Search Input */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 rounded-full border-border bg-white text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Search Results Count */}
              {searchQuery && (
                <p className="text-sm text-muted-foreground mt-4">
                  {totalResults} result{totalResults !== 1 ? "s" : ""} found
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      {!searchQuery && (
        <section className="py-6 px-4 bg-purple-light sticky top-20 z-40 border-b border-border/50">
          <div className="container mx-auto max-w-3xl">
            <div className="flex flex-wrap justify-center gap-2">
              {faqCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-border/50 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-sm"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Categories */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No FAQs found matching &quot;{searchQuery}&quot;
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-primary hover:underline"
                type="button"
              >
                Clear search
              </button>
            </div>
          ) : (
            filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="mb-12 scroll-mt-52"
              >
                <h2 className="text-2xl font-display font-bold mb-6 text-primary">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.id}-${index}`}
                      className="bg-white rounded-xl border border-border/50 px-6 shadow-card"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 whitespace-pre-line">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default FAQ;