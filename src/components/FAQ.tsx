import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly does PromoGPT do?",
    answer: "PromoGPT is an AI-powered virtual marketing team. It analyzes your product data, creates tailored marketing campaigns, posts them on your approved platforms, and tracks real engagement-to-sales performance — all automatically.",
  },
  {
    question: "Is this just another social media scheduler?",
    answer: "No. PromoGPT goes far beyond scheduling. It creates campaigns from scratch, executes them across channels, and measures actual sales conversions — not just likes and impressions.",
  },
  {
    question: "How does PromoGPT track real sales?",
    answer: "PromoGPT uses attribution tracking to connect marketing engagement with actual purchases. You get weekly business intelligence updates showing which campaigns drive real revenue.",
  },
  {
    question: "What platforms does PromoGPT post on?",
    answer: "PromoGPT supports all major marketing channels. You approve the platforms, and we handle posting. More integrations are added with each update.",
  },
  {
    question: "What does early access include?",
    answer: "Early access members get priority onboarding support, special launch pricing, and direct input into feature development.",
  },
  {
    question: "Is my data safe?",
    answer: "Absolutely. We use enterprise-grade encryption and never share your data with third parties. Your business data stays yours.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
