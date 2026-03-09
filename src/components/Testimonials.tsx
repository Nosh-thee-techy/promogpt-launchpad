import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "PromoGPT cut our campaign creation time by 80%. What used to take a full week now happens in hours — with better results.",
    name: "Amina Osei",
    role: "Founder, Kente & Co",
    location: "Accra, Ghana",
    rating: 5,
  },
  {
    quote: "We went from guessing what works to knowing. Our ROAS tripled in the first month using PromoGPT's AI recommendations.",
    name: "Chidi Nwosu",
    role: "Marketing Lead, FreshMart NG",
    location: "Lagos, Nigeria",
    rating: 5,
  },
  {
    quote: "Finally, a tool that understands African markets. The Jumia and WhatsApp integrations alone saved us countless hours.",
    name: "Wanjiku Mwangi",
    role: "CEO, Safari Goods",
    location: "Nairobi, Kenya",
    rating: 5,
  },
  {
    quote: "As a solo entrepreneur, PromoGPT is like having a whole marketing department. It's a game-changer for SMEs like mine.",
    name: "Thabo Molefe",
    role: "Owner, Ubuntu Crafts",
    location: "Johannesburg, SA",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "SMEs on Waitlist" },
  { value: "12", label: "African Markets" },
  { value: "80%", label: "Time Saved" },
  { value: "3x", label: "Avg. ROAS Boost" },
];

const Testimonials = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-secondary/30 dark:bg-secondary/10" />

      {/* Outline text background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[6rem] sm:text-[10rem] md:text-[14rem] font-heading font-bold tracking-tighter whitespace-nowrap"
          style={{
            WebkitTextStroke: "1.5px hsl(var(--primary) / 0.04)",
            WebkitTextFillColor: "transparent",
          }}
        >
          TESTIMONIALS
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
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">Social Proof</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by <span className="gold-gradient-text">African Entrepreneurs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Early adopters are already seeing the difference. Here's what they're saying.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-4 px-3 glass-card rounded-xl border border-border/50">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-accent">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial cards — bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`glass-card rounded-2xl p-6 border border-border/50 relative group hover:border-accent/30 transition-all duration-300 overflow-hidden ${index === 0 ? "md:row-span-2" : ""}`}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-28 h-28 gold-gradient opacity-[0.05] rounded-bl-[80px] group-hover:opacity-[0.12] transition-opacity duration-300" />
              
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/10 group-hover:text-accent/20 transition-colors" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className={`text-sm sm:text-base text-foreground leading-relaxed mb-5 ${index === 0 ? "text-base sm:text-lg" : ""}`}>
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                  <span className="text-sm font-bold text-accent">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
