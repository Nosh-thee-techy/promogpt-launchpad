import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceDot } from "recharts";
import { Sparkles } from "lucide-react";

const chartData = [
  { name: "Week 1", revenue: 2800 },
  { name: "Week 2", revenue: 3400 },
  { name: "Week 3", revenue: 4800, marker: "Campaign Launch" },
  { name: "Week 4", revenue: 6200 },
  { name: "Week 5", revenue: 8100, marker: "Optimization Applied" },
  { name: "Week 6", revenue: 10400 },
  { name: "Week 7", revenue: 13200, marker: "Weekly AI Update" },
  { name: "Week 8", revenue: 16800 },
];

const kpis = [
  {
    label: "Products Driving Revenue",
    value: "42",
    change: "+8",
    detail: "8 new products generating sales this week",
  },
  {
    label: "Campaign → Sale",
    value: "12.4%",
    change: "+2.1%",
    detail: "Conversion rate up 2.1% from last week",
  },
  {
    label: "Post → Click → Purchase",
    value: "840",
    change: "+18%",
    detail: "840 purchases traced from campaign posts",
  },
  {
    label: "Weekly Growth",
    value: "+27%",
    change: "↑",
    detail: "Revenue momentum accelerating week-over-week",
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const dataPoint = chartData.find((d) => d.name === label);
    return (
      <div className="bg-card border border-border rounded-xl px-4 py-3 shadow-lg">
        <p className="text-xs text-muted-foreground mb-1">{label}</p>
        <p className="text-sm font-bold text-foreground">
          ${payload[0].value.toLocaleString()}
        </p>
        {dataPoint?.marker && (
          <div className="flex items-center gap-1.5 mt-1.5 pt-1.5 border-t border-border">
            <Sparkles className="w-3 h-3 text-accent" />
            <span className="text-xs font-medium text-accent">{dataPoint.marker}</span>
          </div>
        )}
      </div>
    );
  }
  return null;
};

const DashboardPreview = () => {
  const [hoveredKpi, setHoveredKpi] = useState<number | null>(null);
  const [showPopout, setShowPopout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopout(true), 10000);
    return () => clearTimeout(timer);
  }, []);

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
            Revenue <span className="gold-gradient-text">Impact Dashboard</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See exactly how PromoGPT campaigns translate into real revenue growth.
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
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 lg:grid-cols-4">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                className="relative bg-secondary/50 rounded-xl p-4 cursor-default"
                whileHover={{ scale: 1.03 }}
                onHoverStart={() => setHoveredKpi(i)}
                onHoverEnd={() => setHoveredKpi(null)}
              >
                <p className="text-xs text-muted-foreground mb-1 leading-tight">{kpi.label}</p>
                <p className="text-xl sm:text-2xl font-bold font-heading text-foreground">{kpi.value}</p>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">{kpi.change} this week</span>

                <AnimatePresence>
                  {hoveredKpi === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute -top-12 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-10"
                    >
                      {kpi.detail}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45 -mt-1" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Revenue Impact Chart */}
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-muted-foreground">Revenue Influenced by Campaigns</p>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full gold-gradient">
              <Sparkles className="w-3 h-3 text-foreground" />
              <span className="text-xs font-bold text-foreground">AI Optimization Applied</span>
            </div>
          </div>
          <div className="h-64 sm:h-72 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} stroke="hsl(var(--border))" />
                <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} stroke="hsl(var(--border))" tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2.5} />
                {/* Marker dots for key events */}
                {chartData.filter(d => d.marker).map((d, i) => (
                  <ReferenceDot
                    key={i}
                    x={d.name}
                    y={d.revenue}
                    r={6}
                    fill="hsl(var(--gold))"
                    stroke="hsl(var(--background))"
                    strokeWidth={2}
                  />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Post → Click → Purchase Flow */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Post → Click → Purchase Flow</p>
            {[
              { label: "Posts Published", value: "1.2K", width: "100%" },
              { label: "Clicks Generated", value: "8.4K", width: "68%" },
              { label: "Add to Cart", value: "2.1K", width: "38%" },
              { label: "Purchases", value: "840", width: "18%" },
            ].map((step) => (
              <div key={step.label} className="flex items-center gap-3">
                <span className="text-[10px] sm:text-xs text-muted-foreground w-20 sm:w-28 text-right shrink-0">{step.label}</span>
                <div className="flex-1 bg-secondary/50 rounded-full h-6 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: step.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full gold-gradient flex items-center justify-end pr-3"
                  >
                    <span className="text-xs font-semibold text-foreground">{step.value}</span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Subtle pop-out after 10 seconds */}
      <AnimatePresence>
        {showPopout && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 glass-card rounded-xl px-5 py-3 shadow-2xl border border-accent/20 cursor-pointer max-w-xs"
            onClick={() => { setShowPopout(false); document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <p className="text-sm font-medium text-foreground">
                Join <span className="text-accent font-bold">100+</span> early businesses preparing for launch
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DashboardPreview;
