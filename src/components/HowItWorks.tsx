import { motion, useScroll, useTransform } from "framer-motion";
import { Store, Brain, Share2, TrendingUp } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Store,
    title: "Connect Your Business",
    description: "Link your product catalog, store, or inventory. We sync everything in minutes.",
  },
  {
    icon: Brain,
    title: "AI Builds Campaign Strategy",
    description: "PromoGPT analyzes your data and creates tailored marketing campaigns automatically.",
  },
  {
    icon: Share2,
    title: "We Post & Track Performance",
    description: "Campaigns go live on your approved platforms. Every click and conversion is tracked.",
  },
  {
    icon: TrendingUp,
    title: "You See Real Sales Impact",
    description: "Watch real revenue roll in with weekly intelligence updates and optimization.",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It <span className="gold-gradient-text">Works</span>
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Animated vertical timeline line */}
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-border">
            <motion.div
              className="w-full gold-gradient rounded-full origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative flex items-start gap-6 py-8 border-b border-border/30 last:border-b-0"
              >
                {/* Timeline dot */}
                <motion.div
                  className="relative z-10 shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full gold-gradient flex items-center justify-center shadow-lg shadow-accent/20">
                    <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Inline text — no card wrapper */}
                <div className="pt-1">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">Step {index + 1}</span>
                  <h3 className="text-lg font-semibold mt-1 mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
