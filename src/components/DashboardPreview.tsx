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
          {/* KPI cards */}
          {/* Phone mockup with Post → Click → Purchase table */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-[9/19] rounded-[2.5rem] border border-border bg-gradient-to-b from-background/90 via-background to-background/95 shadow-2xl px-4 pt-6 pb-5">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-secondary/70" />

              {/* Header */}
              <div className="flex items-center justify-between mb-6 mt-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    PromoGPT
                  </p>
                  <p className="text-sm font-semibold">Revenue Flow</p>
                </div>
                <span className="text-[11px] px-2 py-1 rounded-full bg-accent/10 text-accent font-semibold">
                  Live
                </span>
              </div>

              {/* Table */}
              <div className="space-y-3">
                {[
                  { label: "Posts Published", value: "1.2K", width: "100%" },
                  { label: "Clicks Generated", value: "8.4K", width: "68%" },
                  { label: "Add to Cart", value: "2.1K", width: "38%" },
                  { label: "Purchases", value: "840", width: "18%" },
                ].map((step) => (
                  <div
                    key={step.label}
                    className="rounded-xl bg-secondary/60 border border-border/60 px-3 py-2.5"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-[11px] text-muted-foreground">
                        {step.label}
                      </p>
                      <p className="text-xs font-semibold">{step.value}</p>
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
                Post → Click → Cart → Purchase, tracked in one view.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
