import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import countdownPlanet from "@/assets/countdown-planet.png";

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
    <section className="relative py-24 sm:py-32 md:py-40 overflow-hidden bg-[#0a0a12]">
      {/* Dark cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a12] via-[#0d1117] to-[#0a0a12]" />
      
      {/* Subtle star-like dots */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 100%), radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.2) 0%, transparent 100%), radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.25) 0%, transparent 100%), radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.15) 0%, transparent 100%)",
      }} />

      {/* Planet image — positioned to the left like the NASA moon */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-[-15%] sm:left-[-8%] md:left-[-5%] top-[15%] sm:top-[12%] md:top-[10%] w-[35%] sm:w-[35%] md:w-[30%] lg:w-[28%] max-w-[420px] pointer-events-none"
      >
        {/* Pulsing glow behind brain */}
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10"
        />
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          src={countdownPlanet}
          alt="PromoGPT AI marketing brain with digital circuits and campaign icons"
          className="w-full h-auto drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]"
          loading="lazy"
        />
      </motion.div>

      {/* Content — offset to the right */}
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="ml-auto max-w-3xl text-center space-y-10"
        >
          <p className="text-sm sm:text-base tracking-[0.3em] uppercase text-gray-400 font-medium">
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
                      className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-light tracking-tight text-white"
                    >
                      {String(unit.value).padStart(2, "0")}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-[10px] sm:text-xs tracking-[0.2em] text-gray-500">
                    {unit.label}
                  </span>
                </div>
                {i < units.length - 1 && (
                  <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-gray-600 -mt-6">
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
              className="text-sm tracking-[0.15em] uppercase px-10 py-6 border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
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
