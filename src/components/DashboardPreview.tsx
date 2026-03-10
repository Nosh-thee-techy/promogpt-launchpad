import { motion } from "framer-motion";

const DashboardPreview = () => {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See Every Step on Your{" "}
            <span className="gold-gradient-text">Phone</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A mobile-first view of how posts turn into clicks, carts, and purchases — built for busy founders on the move.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto"
        >
          {/* Phone mockup with live-style KPIs, mini chart, and table */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-[9/19] rounded-[2.5rem] border border-border bg-gradient-to-b from-[#050814] via-[#050814] to-[#050814] shadow-2xl px-4 pt-6 pb-5 overflow-hidden">
              {/* Outer glow */}
              <div className="pointer-events-none absolute -inset-8 bg-primary/10 blur-3xl -z-10" />

              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-secondary/70" />

              {/* Header */}
              <div className="flex items-center justify-between mb-4 mt-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">
                    Promogpt
                  </p>
                  <p className="text-sm font-semibold text-foreground">Revenue Flow</p>
                </div>
                <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>

              {/* Tiny KPI row */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { label: "Revenue", value: "$16.8k" },
                  { label: "Conv.", value: "12.4%" },
                  { label: "ROAS", value: "4.2x" },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-xl bg-secondary/70 border border-border/60 px-2 py-1.5"
                  >
                    <p className="text-[9px] text-muted-foreground">{kpi.label}</p>
                    <p className="text-[11px] font-semibold text-foreground">{kpi.value}</p>
                  </div>
                ))}
              </div>

              {/* Tiny sparkline-style chart */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[10px] text-muted-foreground">Last 8 weeks</p>
                  <p className="text-[10px] text-emerald-300 font-semibold">+27% ↑</p>
                </div>
                <div className="relative h-14 rounded-xl bg-background/40 overflow-hidden">
                  <svg viewBox="0 0 100 40" className="w-full h-full">
                    <defs>
                      <linearGradient id="phoneSpark" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 30 L12 26 L25 24 L37 20 L50 16 L62 14 L75 10 L88 8 L100 6 V40 H0 Z"
                      fill="url(#phoneSpark)"
                    />
                    <polyline
                      points="0,30 12,26 25,24 37,20 50,16 62,14 75,10 88,8 100,6"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Post → Click → Cart → Purchase table */}
              <div className="space-y-3">
                {[
                  { label: "Posts Published", value: "1.2K", width: "100%" },
                  { label: "Clicks Generated", value: "8.4K", width: "68%" },
                  { label: "Add to Cart", value: "2.1K", width: "38%" },
                  { label: "Purchases", value: "840", width: "18%" },
                ].map((step) => (
                  <div
                    key={step.label}
                    className="rounded-xl bg-secondary/70 border border-border/60 px-3 py-2.5"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-[11px] text-muted-foreground">
                        {step.label}
                      </p>
                      <p className="text-xs font-semibold text-foreground">{step.value}</p>
                    </div>
                    <div className="h-2.5 rounded-full bg-background/60 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: step.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full gold-gradient"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer hint */}
              <p className="mt-5 text-[10px] text-muted-foreground text-center">
                Post → Click → Cart → Purchase — tracked in one clean view.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
