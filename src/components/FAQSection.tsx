import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Badge from "./Badge";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  showBadge?: boolean;
}

const FAQSection = ({ faqs, showBadge = true }: FAQSectionProps) => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        {showBadge && (
          <div className="text-center mb-6">
            <Badge>FAQ</Badge>
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
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
      </div>
    </section>
  );
};

export default FAQSection;
