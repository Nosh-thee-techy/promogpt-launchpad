import { motion } from "framer-motion";
import { Smartphone, ShoppingBag, Wallet, Target, Globe } from "lucide-react";

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

const AfricaMapSilhouette = () => (
  <svg
    viewBox="0 0 500 600"
    className="w-full max-w-[200px] sm:max-w-[280px] mx-auto opacity-[0.08] dark:opacity-[0.12]"
    fill="none"
    stroke="hsl(var(--primary))"
    strokeWidth="1.5"
  >
    <path d="M250 30 C230 25, 200 30, 185 45 C170 55, 160 50, 145 55 C130 60, 120 75, 125 90 C128 100, 135 105, 130 120 C125 135, 115 140, 110 155 C105 170, 110 185, 120 195 C130 205, 125 215, 120 230 C115 250, 105 265, 100 280 C95 295, 90 310, 95 330 C98 345, 105 355, 110 370 C115 385, 120 400, 130 415 C140 430, 155 440, 165 455 C175 470, 185 480, 195 490 C205 498, 215 500, 225 495 C235 490, 240 480, 250 475 C260 470, 270 465, 280 455 C290 445, 295 430, 300 415 C305 400, 315 385, 325 370 C335 355, 340 340, 340 325 C340 310, 345 295, 350 280 C355 265, 365 250, 370 235 C375 220, 370 205, 360 195 C350 185, 345 175, 340 160 C335 145, 340 130, 345 115 C348 105, 345 95, 340 85 C335 75, 325 65, 315 55 C305 48, 290 42, 280 38 C270 34, 260 32, 250 30Z" />
    <circle cx="330" cy="195" r="6" fill="hsl(var(--gold))" stroke="none" opacity="0.8" />
    <circle cx="345" cy="315" r="6" fill="hsl(var(--gold))" stroke="none" opacity="0.8" />
    <circle cx="280" cy="455" r="6" fill="hsl(var(--gold))" stroke="none" opacity="0.8" />
    <circle cx="300" cy="250" r="4" fill="hsl(var(--gold))" stroke="none" opacity="0.5" />
    <circle cx="260" cy="170" r="4" fill="hsl(var(--gold))" stroke="none" opacity="0.5" />
  </svg>
);

const BuiltForAfrica = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle pattern */}
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

        {/* Split layout: map left, feature list right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Map visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <AfricaMapSilhouette />
              {/* Hub labels */}
              <div className="absolute top-[30%] right-[10%] flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground">Lagos</span>
              </div>
              <div className="absolute top-[50%] right-[5%] flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground">Nairobi</span>
              </div>
              <div className="absolute bottom-[15%] right-[20%] flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground">Johannesburg</span>
              </div>
            </div>
          </motion.div>

          {/* Icon strip list — not cards */}
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
