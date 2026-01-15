import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services."
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials, use the materials for any commercial purpose, or attempt to reverse engineer any software contained within our services."
    },
    {
      title: "3. User Accounts",
      content: "When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account. You are responsible for safeguarding the password and for all activities that occur under your account."
    },
    {
      title: "4. Prohibited Activities",
      content: "You may not use our services for any illegal or unauthorized purpose. You must not, in the use of our services, violate any laws in your jurisdiction, including but not limited to copyright laws."
    },
    {
      title: "5. Limitation of Liability",
      content: "In no event shall we be liable for any damages arising out of the use or inability to use our services, even if we have been notified of the possibility of such damages."
    },
    {
      title: "6. Changes to Terms",
      content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to check these Terms periodically for changes."
    },
    {
      title: "7. Contact Information",
      content: "If you have any questions about these Terms, please contact us at legal@yourcompany.com."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 9, 2026
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            {sections.map((section, index) => (
              <AnimatedSection key={section.title} delay={index * 0.05}>
                <section>
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  <p className="text-muted-foreground">{section.content}</p>
                </section>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
