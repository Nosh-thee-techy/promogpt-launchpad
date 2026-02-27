import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 blue-glow opacity-40" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">Early Access — Limited Spots Available</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Your AI-Powered{" "}
              <span className="gold-gradient-text">Marketing Team</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              Turn product data into real campaigns, real engagement, and real sales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" className="text-base px-8 py-6">
                Join the Waitlist
              </Button>
              <Button variant="outline-blue" size="lg" className="text-base px-8 py-6">
                See How It Works
              </Button>
            </div>
          </motion.div>

          {/* Right dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative animate-float">
              <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={dashboardMockup}
                  alt="PromoGPT AI Marketing Dashboard showing campaign performance analytics"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
              {/* Decorative glow behind */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
