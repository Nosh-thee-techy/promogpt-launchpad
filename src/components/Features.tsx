import { motion } from "framer-motion";
import { Database, Megaphone, TrendingUp, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Connect Product Data",
    description: "Seamlessly sync your product catalog and let our AI understand your brand, pricing, and audience.",
    span: "sm:col-span-2 lg:col-span-1 lg:row-span-2",
    layout: "vertical",
  },
  {
    icon: Megaphone,
    title: "AI Campaign Creation & Posting",
    description: "We create, schedule, and publish marketing campaigns across your approved platforms automatically.",
    span: "sm:col-span-2 lg:col-span-2",
    layout: "horizontal",
  },
  {
    icon: TrendingUp,
    title: "Real Sales Conversion Tracking",
    description: "Track engagement-to-sale pipelines with real attribution — not vanity metrics.",
    span: "sm:col-span-2 lg:col-span-1",
    layout: "vertical",
  },
  {
    icon: BarChart3,
    title: "Weekly Intelligent Business Updates",
    description: "Receive strategic insights every week with actionable recommendations to grow revenue.",
    span: "sm:col-span-2 lg:col-span-2",
    layout: "horizontal",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Makes PromoGPT <span className="gold-gradient-text">Different</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Not another scheduler. Not another analytics tool. PromoGPT executes marketing and drives measurable sales growth.
          </p>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-7 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 ${feature.span}`}
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 gold-gradient opacity-[0.07] rounded-bl-[60px] group-hover:opacity-[0.15] transition-opacity duration-300" />

              <div className={`flex ${feature.layout === "horizontal" ? "flex-row items-start gap-5" : "flex-col"}`}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
