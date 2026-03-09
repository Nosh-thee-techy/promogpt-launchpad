import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Fixed launch date: March 22, 2026 at midnight UTC
const LAUNCH_DATE = new Date("2026-03-22T00:00:00Z").getTime();

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const distance = LAUNCH_DATE - Date.now();
      if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculate());
    const interval = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDS" },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <p className="text-sm sm:text-base tracking-[0.3em] uppercase text-muted-foreground font-medium">
            Version 1 Launching On
          </p>

          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {units.map((unit, i) => (
              <div key={unit.label} className="flex items-center gap-2 sm:gap-4 md:gap-6">
                <div className="flex flex-col items-center gap-3">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={unit.value}
                      initial={{ rotateX: -90, opacity: 0 }}
                      animate={{ rotateX: 0, opacity: 1 }}
                      exit={{ rotateX: 90, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-light tracking-tight text-foreground"
                    >
                      {String(unit.value).padStart(2, "0")}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground">
                    {unit.label}
                  </span>
                </div>
                {i < units.length - 1 && (
                  <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-muted-foreground/40 -mt-6">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Button
              variant="outline"
              size="lg"
              className="text-sm tracking-[0.15em] uppercase px-10 py-6 border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300"
              onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
            >
              Join Waitlist
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
