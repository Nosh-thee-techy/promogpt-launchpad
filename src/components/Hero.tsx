import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import hero3d from "@/assets/hero-3d.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Massive outline text behind everything */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-heading font-bold tracking-tighter leading-none whitespace-nowrap"
          style={{
            WebkitTextStroke: "2px hsl(var(--primary) / 0.08)",
            WebkitTextFillColor: "transparent",
          }}
        >
          PROMOGPT
        </motion.h1>
      </div>

      {/* Background glow — hidden in dark mode */}
      <div className="absolute inset-0 blue-glow opacity-40 dark:opacity-0" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl dark:bg-primary/3" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl dark:bg-primary/3" />

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

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Your AI-Powered{" "}
              <span className="gold-gradient-text">Marketing Team</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Turn product data into real campaigns, real engagement, and real sales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" className="text-base px-8 py-6" onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}>
                Join the Waitlist
              </Button>
              <Button
                variant="outline-blue"
                size="lg"
                className="text-base px-8 py-6"
                onClick={() => window.open("https://calendly.com/promogpt-ke", "_blank")}
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>

          {/* Right 3D illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              style={{ perspective: 1000, transformStyle: "preserve-3d" }}
            >
              <img
                src={hero3d}
                alt="PromoGPT 3D marketing analytics city visualization"
                className="w-full max-w-lg lg:max-w-2xl h-auto drop-shadow-2xl"
                loading="eager"
              />
            </motion.div>
            {/* Glow behind 3D image */}
            <div className="absolute inset-0 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl -z-10 scale-75" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
