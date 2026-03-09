import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const cityData = [
  {
    name: "Cairo",
    top: "8%",
    left: "68%",
    market: "North Africa Hub",
    population: "22M+",
    ecommerce: "$3.2B market",
    growth: "+28% YoY",
  },
  {
    name: "Lagos",
    top: "42%",
    left: "22%",
    market: "West Africa Hub",
    population: "16M+",
    ecommerce: "$12B market",
    growth: "+35% YoY",
  },
  {
    name: "Nairobi",
    top: "52%",
    left: "72%",
    market: "East Africa Hub",
    population: "5M+",
    ecommerce: "$2.8B market",
    growth: "+32% YoY",
  },
  {
    name: "Johannesburg",
    top: "80%",
    left: "52%",
    market: "Southern Africa Hub",
    population: "6M+",
    ecommerce: "$5.4B market",
    growth: "+22% YoY",
  },
  {
    name: "Accra",
    top: "40%",
    left: "17%",
    market: "Ghana Gateway",
    population: "4M+",
    ecommerce: "$1.1B market",
    growth: "+30% YoY",
  },
  {
    name: "Addis Ababa",
    top: "38%",
    left: "66%",
    market: "Ethiopia Rising",
    population: "5.5M+",
    ecommerce: "$800M market",
    growth: "+40% YoY",
  },
];

const CityMarker = ({
  city,
}: {
  city: (typeof cityData)[0];
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="absolute z-10 group"
      style={{ top: city.top, left: city.left }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Pulse ring */}
      <span className="absolute -inset-2 rounded-full border border-accent/40 animate-ping" style={{ animationDuration: "3s" }} />
      {/* Dot */}
      <span className="relative block w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/30 cursor-pointer" />

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 rounded-xl bg-card border border-border shadow-xl z-50 pointer-events-none"
          >
            <div className="text-sm font-heading font-bold text-foreground mb-1">{city.name}</div>
            <div className="text-xs text-accent font-medium mb-2">{city.market}</div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Population</span>
                <span className="font-medium text-foreground">{city.population}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">E-commerce</span>
                <span className="font-medium text-foreground">{city.ecommerce}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Growth</span>
                <span className="font-medium text-accent">{city.growth}</span>
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-card border-r border-b border-border rotate-45 -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
                className="w-full max-w-[280px] sm:max-w-[360px] mx-auto rounded-xl"
                loading="lazy"
              />
              {/* City markers overlay */}
              {cityData.map((city) => (
                <CityMarker key={city.name} city={city} />
              ))}
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
