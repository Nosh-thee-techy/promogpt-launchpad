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

const AfricaMap = () => (
  <svg
    viewBox="0 0 600 700"
    className="w-full max-w-[220px] sm:max-w-[300px] mx-auto cursor-zoom-in"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Realistic Africa outline */}
    <path
      d="M310 45 C295 42, 280 40, 265 38 C250 36, 235 38, 220 42 C205 46, 195 52, 185 60 C175 68, 168 72, 158 74 C148 76, 138 74, 128 78 C118 82, 112 90, 108 100 C104 110, 102 118, 105 128 C108 138, 115 145, 118 155 C121 165, 118 172, 115 182 C112 192, 108 200, 105 210 C102 220, 98 228, 95 238 C92 248, 88 258, 85 270 C82 282, 80 292, 82 305 C84 318, 88 328, 92 340 C96 352, 100 362, 105 375 C110 388, 112 398, 115 412 C118 426, 122 438, 128 452 C134 466, 142 478, 150 490 C158 502, 168 512, 178 520 C188 528, 198 534, 210 538 C222 542, 232 540, 242 535 C252 530, 258 522, 265 515 C272 508, 278 502, 286 495 C294 488, 300 480, 308 472 C316 464, 322 455, 328 445 C334 435, 340 425, 345 412 C350 399, 352 388, 355 375 C358 362, 362 350, 365 338 C368 326, 372 315, 375 302 C378 289, 380 278, 382 265 C384 252, 388 240, 390 228 C392 216, 390 205, 385 195 C380 185, 372 178, 365 170 C358 162, 352 155, 348 145 C344 135, 342 125, 345 115 C348 105, 352 98, 350 88 C348 78, 342 70, 335 62 C328 54, 320 48, 310 45Z"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      fill="hsl(var(--primary))"
      fillOpacity="0.05"
      className="transition-all duration-300 hover:fill-[hsl(var(--primary)/0.12)]"
    />
    {/* Madagascar */}
    <path
      d="M420 395 C418 388, 415 382, 412 378 C409 374, 405 372, 402 375 C399 378, 398 385, 400 392 C402 399, 405 408, 408 418 C411 428, 414 435, 416 440 C418 445, 420 442, 421 436 C422 430, 422 420, 422 410 C422 402, 421 398, 420 395Z"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      fill="hsl(var(--primary))"
      fillOpacity="0.05"
    />

    {/* City markers */}
    {/* Cairo */}
    <circle cx="345" cy="105" r="5" fill="hsl(var(--accent))" opacity="0.9" />
    <circle cx="345" cy="105" r="9" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" opacity="0.4" className="animate-ping" style={{ animationDuration: "3s" }} />

    {/* Lagos */}
    <circle cx="155" cy="310" r="5" fill="hsl(var(--accent))" opacity="0.9" />
    <circle cx="155" cy="310" r="9" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" opacity="0.4" className="animate-ping" style={{ animationDuration: "2.5s" }} />

    {/* Nairobi */}
    <circle cx="365" cy="355" r="5" fill="hsl(var(--accent))" opacity="0.9" />
    <circle cx="365" cy="355" r="9" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" opacity="0.4" className="animate-ping" style={{ animationDuration: "2.8s" }} />

    {/* Johannesburg */}
    <circle cx="310" cy="490" r="5" fill="hsl(var(--accent))" opacity="0.9" />
    <circle cx="310" cy="490" r="9" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" opacity="0.4" className="animate-ping" style={{ animationDuration: "3.2s" }} />

    {/* Accra */}
    <circle cx="135" cy="295" r="4" fill="hsl(var(--accent))" opacity="0.6" />

    {/* Addis Ababa */}
    <circle cx="360" cy="280" r="4" fill="hsl(var(--accent))" opacity="0.6" />
  </svg>
);

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
            <div className="relative">
              <AfricaMap />
              {/* Labels */}
              <div className="absolute top-[14%] right-[18%] flex items-center gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">Cairo</span>
              </div>
              <div className="absolute top-[42%] left-[5%] flex items-center gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">Lagos</span>
              </div>
              <div className="absolute top-[49%] right-[12%] flex items-center gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">Nairobi</span>
              </div>
              <div className="absolute bottom-[22%] right-[28%] flex items-center gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">Johannesburg</span>
              </div>
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
