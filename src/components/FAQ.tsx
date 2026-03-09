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
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Outline text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[8rem] sm:text-[12rem] md:text-[16rem] font-heading font-bold tracking-tighter whitespace-nowrap"
          style={{
            WebkitTextStroke: "1.5px hsl(var(--primary) / 0.04)",
            WebkitTextFillColor: "transparent",
          }}
        >
          FAQ
        </span>
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">Support</span>
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
