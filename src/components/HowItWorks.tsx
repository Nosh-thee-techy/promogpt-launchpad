import { motion } from "framer-motion";
import { Store, Brain, Share2, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Store,
    title: "Connect Your Business",
    description: "Link your product catalog, store, or inventory. We sync everything in minutes.",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    icon: Brain,
    title: "AI Builds Campaign Strategy",
    description: "PromoGPT analyzes your data and creates tailored marketing campaigns automatically.",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    icon: Share2,
    title: "We Post & Track Performance",
    description: "Campaigns go live on your approved platforms. Every click and conversion is tracked.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: TrendingUp,
    title: "You See Real Sales Impact",
    description: "Watch real revenue roll in with weekly intelligence updates and optimization.",
    span: "md:col-span-1 md:row-span-1",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Outline text background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[6rem] sm:text-[10rem] md:text-[14rem] font-heading font-bold tracking-tighter whitespace-nowrap"
          style={{
            WebkitTextStroke: "1.5px hsl(var(--accent) / 0.06)",
            WebkitTextFillColor: "transparent",
          }}
        >
          HOW IT WORKS
        </span>
      </div>

      <div className="container mx-auto relative z-10">
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From connection to conversion in four simple steps.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 ${step.span}`}
            >
              {/* Step number watermark */}
              <span
                className="absolute -bottom-4 -right-2 text-[7rem] font-heading font-bold leading-none pointer-events-none select-none"
                style={{
                  WebkitTextStroke: "1px hsl(var(--accent) / 0.08)",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-24 h-24 gold-gradient opacity-[0.06] rounded-bl-[80px] group-hover:opacity-[0.15] transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Step {index + 1}</span>
                <h3 className="text-xl font-bold mt-2 mb-2 group-hover:text-accent transition-colors">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
