import { motion } from "framer-motion";

const keywords = [
  "AI Campaigns",
  "Real Sales Tracking",
  "Mobile-First",
  "WhatsApp Native",
  "Auto-Posting",
  "Smart Analytics",
  "African Markets",
  "Revenue Growth",
  "Weekly Intelligence",
  "Product Sync",
  "Campaign Optimization",
  "SME Friendly",
];

const MarqueeTicker = () => {
  return (
    <section className="py-6 sm:py-8 border-y border-border/50 bg-secondary/30 overflow-hidden">
      <div className="relative flex">
        <motion.div
          className="flex gap-8 sm:gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...keywords, ...keywords].map((word, i) => (
            <span
              key={i}
              className="text-sm sm:text-base font-heading font-medium text-muted-foreground/70 flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeTicker;
