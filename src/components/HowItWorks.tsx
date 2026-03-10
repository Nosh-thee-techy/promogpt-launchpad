import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Store, Brain, Share2, TrendingUp } from "lucide-react";
import stepConnect from "@/assets/step-connect.png";
import stepAi from "@/assets/step-ai.png";
import stepPost from "@/assets/step-post.png";
import stepSales from "@/assets/step-sales.png";

const steps = [
  {
    icon: Store,
    title: "Connect Your Business",
    description: "Link your product catalog, store, or inventory. We sync everything in minutes.",
    span: "md:col-span-2 md:row-span-1",
    image: stepConnect,
  },
  {
    icon: Brain,
    title: "AI Builds Campaign Strategy",
    description: "PromoGPT analyzes your data and creates tailored marketing campaigns automatically.",
    span: "md:col-span-1 md:row-span-2",
    image: stepAi,
    tallImage: true,
  },
  {
    icon: Share2,
    title: "We Post & Track Performance",
    description: "Campaigns go live on your approved platforms. Every click and conversion is tracked.",
    span: "md:col-span-1 md:row-span-1",
    image: stepPost,
  },
  {
    icon: TrendingUp,
    title: "You See Real Sales Impact",
    description: "Watch real revenue roll in with weekly intelligence updates and optimization.",
    span: "md:col-span-1 md:row-span-1",
    image: stepSales,
  },
];

const HowItWorks = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It <span className="gold-gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From connection to conversion in four simple steps.
          </p>
        </motion.div>

        {/* Steps that open to show more detail */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 cursor-pointer ${step.span}`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${(step as any).tallImage ? "h-48 md:h-56" : "h-36 sm:h-44"}`}>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                
                {/* Step badge over image */}
                <div className="absolute top-3 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center shadow-lg">
                    <step.icon className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest bg-card/80 backdrop-blur-sm px-2 py-1 rounded-md border border-border/50">Step {index + 1}</span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-5 sm:p-6 relative">
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

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <button
                      type="button"
                      className="text-xs font-semibold text-accent hover:text-accent/80 mt-0.5"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenIndex(openIndex === index ? null : index);
                      }}
                    >
                      {openIndex === index ? "Hide step" : "View step"}
                    </button>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -4 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -4 }}
                        transition={{ duration: 0.25 }}
                        className="mt-3 space-y-2 text-xs text-muted-foreground"
                      >
                        <p>
                          <span className="font-semibold text-foreground">What happens here:</span>{" "}
                          {index === 0 &&
                            "We connect to your catalog, pull in products, pricing, and stock so every campaign is grounded in real inventory."}
                          {index === 1 &&
                            "PromoGPT’s models look at your data and automatically assemble campaigns, audiences, and messaging."}
                          {index === 2 &&
                            "Approved campaigns are posted to your channels and every click, view, and add-to-cart is tracked."}
                          {index === 3 &&
                            "You get a clear view of the sales that came from PromoGPT, including weekly intelligence updates."}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
