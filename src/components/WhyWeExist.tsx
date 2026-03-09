import { motion } from "framer-motion";
import { Ban, Database, Lightbulb, Users } from "lucide-react";

const reasons = [
  {
    icon: Ban,
    number: "01",
    title: "Marketing agencies are expensive",
    description: "Most African SMEs can't afford $2,000+/month for a marketing team. PromoGPT gives you agency-level execution at a fraction of the cost.",
  },
  {
    icon: Database,
    number: "02",
    title: "Data exists but isn't used",
    description: "Your product data, customer behavior, and sales patterns hold gold — but most businesses never turn it into action.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "SMEs need execution, not advice",
    description: "You don't need another marketing guide. You need campaigns created, posted, and tracked — automatically.",
  },
  {
    icon: Users,
    number: "04",
    title: "Your virtual marketing team",
    description: "PromoGPT acts as a full marketing department — strategizing, creating, posting, and optimizing in real time.",
  },
];

const WhyWeExist = () => {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Outline text background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[5rem] sm:text-[8rem] md:text-[12rem] font-heading font-bold tracking-tighter whitespace-nowrap"
          style={{
            WebkitTextStroke: "1.5px hsl(var(--accent) / 0.05)",
            WebkitTextFillColor: "transparent",
          }}
        >
          WHY WE EXIST
        </span>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">Our Mission</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            African SMEs Deserve{" "}
            <span className="gold-gradient-text">Smarter Marketing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The gap between big-budget brands and hardworking SMEs shouldn't exist. We're here to close it.
          </p>
        </motion.div>

        {/* Bento grid for reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
            >
              {/* Big number watermark */}
              <span
                className="absolute -bottom-6 -right-2 text-[8rem] font-heading font-bold leading-none pointer-events-none select-none"
                style={{
                  WebkitTextStroke: "1.5px hsl(var(--accent) / 0.08)",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {reason.number}
              </span>

              <div className="absolute top-0 right-0 w-20 h-20 gold-gradient opacity-[0.06] rounded-bl-[60px] group-hover:opacity-[0.15] transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <reason.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;
