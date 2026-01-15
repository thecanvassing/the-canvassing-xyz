import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";
import CTASection from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      id: "general",
      title: "General",
      faqs: [
        {
          question: "What is Canvassing?",
          answer: "Canvassing is a marketplace that connects researchers with verified participants for surveys and product testing. We help you gather quality insights quickly and affordably."
        },
        {
          question: "How are participants verified?",
          answer: "Participants go through our verification process which includes identity verification, quality checks, and engagement tracking to ensure authentic responses."
        },
        {
          question: "Who can use Canvassing?",
          answer: "Researchers, startups, NGOs, and enterprises looking to collect quality data, as well as individuals looking to earn rewards by participating in research."
        },
        {
          question: "What kind of incentives are offered?",
          answer: "Participants are rewarded with GoodDollar (G$) tokens, a stablecoin that provides real value and instant payments."
        },
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
          question: "How do I get started as a researcher?",
          answer: "Simply create an account on our Rez Dashboard, define your project requirements, and we'll match you with verified participants instantly."
        },
        {
          question: "What tools do you support?",
          answer: "We support popular survey tools like Google Forms, Tally, Typeform, and more. Simply paste your survey link and we handle the rest."
        }
      ]
    },
    {
      id: "online-surveys",
      title: "Online Surveys",
      faqs: [
        {
          question: "How do I create an online survey on Canvassing?",
          answer: "Simply paste your survey link from your preferred platform (Google Forms, Tally, Typeform, etc.) and set your target participants. We handle the distribution and verification."
        },
        {
          question: "What survey tools are supported?",
          answer: "We support all major survey platforms including Google Forms, Tally, Typeform, SurveyMonkey, and any platform that generates a shareable link."
        },
        {
          question: "What happens after I launch my survey?",
          answer: "Your survey is distributed to verified participants matching your criteria. You can track responses in real-time on your dashboard."
        },
        {
          question: "How do I receive my survey results?",
          answer: "Results are collected through your original survey platform. We provide additional quality verification data through your Canvassing dashboard."
        }
      ]
    },
    {
      id: "product-testing",
      title: "Product Testing",
      faqs: [
        {
          question: "How does product testing work on Canvassing?",
          answer: "Share your product link, add testing instructions, and we match you with verified testers who provide detailed feedback through your preferred feedback form."
        },
        {
          question: "What kind of products can I test?",
          answer: "You can test websites, mobile apps, prototypes, physical products, and more. Any product that can be accessed or experienced by testers."
        },
        {
          question: "How do testers give feedback?",
          answer: "Testers provide feedback through your preferred form or survey. We can also arrange video recordings of testing sessions for additional insights."
        },
        {
          question: "How do I get the testing results?",
          answer: "Results are delivered through your feedback platform. Video recordings and additional quality data are available through your Canvassing dashboard."
        }
      ]
    },
    {
      id: "pricing",
      title: "Pricing",
      faqs: [
        {
          question: "How does the cost calculator work?",
          answer: "The calculator estimates your project cost based on the number of questions and responses for surveys, or number of testers for product testing. Pricing is transparent with no hidden fees."
        },
        {
          question: "Do I need to provide my email to use the calculator?",
          answer: "Yes, we require your email to send you a detailed quote and help you get started with your project. We never spam and you can unsubscribe anytime."
        },
        {
          question: "How do I start my project after calculating the cost?",
          answer: "After receiving your quote, click 'Start My Project' to access your dashboard where you can set up your survey or product test with all the details."
        },
        {
          question: "How is the pricing determined for surveys and product tests?",
          answer: "Survey pricing is based on question count and number of responses. Product testing is priced per tester. Both include participant verification and quality assurance."
        },
        {
          question: "Will I receive spam or unwanted emails?",
          answer: "No, we respect your privacy. You'll only receive your project quote and essential updates. You can unsubscribe anytime."
        }
      ]
    },
    {
      id: "pax",
      title: "Pax (Participants)",
      faqs: [
        {
          question: "What is Pax?",
          answer: "Pax is the participant app for Canvassing. It allows you to earn stablecoin and token rewards by completing surveys and testing products for researchers and companies."
        },
        {
          question: "How does Pax work?",
          answer: "Download the app, complete your profile verification, and start accepting tasks. Complete surveys and product tests to earn G$ tokens that can be exchanged for real value."
        },
        {
          question: "Who can use Pax?",
          answer: "Anyone in Africa can join Pax. You need to complete our verification process to ensure you're matched with relevant opportunities."
        },
        {
          question: "How are payments verified?",
          answer: "Payments are made in GoodDollar (G$) tokens immediately upon task completion and verification. You can track all payments in your dashboard."
        },
        {
          question: "How do I get started with Pax?",
          answer: "Download the Pax app, create an account, verify your profile, and start browsing available tasks. Your first payment can arrive within hours of completing a task."
        }
      ]
    }
  ];

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
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="container mx-auto px-4 relative">
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
                Everything you need to know about Canvassing, our products, and how to get started.
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
                No FAQs found matching "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-primary hover:underline"
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
                      <AccordionContent className="text-muted-foreground pb-5">
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
