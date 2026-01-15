import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and payment information."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions."
    },
    {
      title: "3. Information Sharing",
      content: "We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf."
    },
    {
      title: "4. Data Security",
      content: "We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no internet or electronic storage system is completely secure."
    },
    {
      title: "5. Cookies and Tracking",
      content: "We use cookies and similar tracking technologies to track activity on our services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
    },
    {
      title: "6. Your Rights",
      content: "You have the right to access, update, or delete your personal information. You may also have the right to object to or restrict certain processing of your data, and to request portability of your data."
    },
    {
      title: "7. Children's Privacy",
      content: "Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13."
    },
    {
      title: "8. Changes to This Policy",
      content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the \"Last updated\" date."
    },
    {
      title: "9. Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us at privacy@yourcompany.com."
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
              Privacy Policy
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

export default PrivacyPolicy;
