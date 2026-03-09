import { motion } from "framer-motion";
import { Smartphone, ShoppingBag, Wallet, Target, Globe } from "lucide-react";
import africaMap from "@/assets/africa-map.png";

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Commerce",
    description: "Built for how African consumers actually shop — mobile-first, chat-driven, and social-native.",
  },
  {
    icon: ShoppingBag,
    title: "Local Platform Support",
    description: "Integrates with Jumia, Kilimall, WhatsApp Business, Shopify Africa, and more.",
  },
  {
    icon: Wallet,
    title: "SME Budget Realities",
    description: "Designed for lean teams with limited budgets and fast-moving inventory cycles.",
  },
  {
    icon: Target,
    title: "Performance Over Vanity",
    description: "We track real sales conversions — not likes, impressions, or follower counts.",
  },
  {
    icon: Globe,
    title: "Scale Across Africa",
    description: "Expand across African digital markets with campaigns optimized for each region.",
  },
];

const BuiltForAfrica = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--gold)) 0px, hsl(var(--gold)) 1px, transparent 1px, transparent 12px), repeating-linear-gradient(-45deg, hsl(var(--gold)) 0px, hsl(var(--gold)) 1px, transparent 1px, transparent 12px)`,
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for <span className="gold-gradient-text">African Markets</span>.{" "}
            <br className="hidden sm:block" />
            Designed for Global Growth.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            PromoGPT understands the unique dynamics of African commerce — from mobile-first shopping to local platform ecosystems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative cursor-zoom-in">
              <img
                src={africaMap}
                alt="Map of Africa showing countries and major cities"
                className="w-full max-w-[280px] sm:max-w-[360px] mx-auto rounded-xl transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              {/* Overlay glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-primary/0 hover:bg-primary/5 transition-colors duration-300 pointer-events-none" />
            </div>
          </motion.div>

          <div className="space-y-0">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-4 py-5 border-b border-border/50 last:border-b-0 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold mb-0.5 group-hover:text-accent transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForAfrica;
