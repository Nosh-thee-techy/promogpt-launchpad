import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Fixed launch date: 14 days from first visit, persisted in localStorage
const getLaunchDate = (): number => {
  const stored = localStorage.getItem("promogpt_launch_date");
  if (stored) {
    return parseInt(stored, 10);
  }
  const date = Date.now() + 14 * 24 * 60 * 60 * 1000;
  localStorage.setItem("promogpt_launch_date", String(date));
  return date;
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative glass-card rounded-xl w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 flex items-center justify-center border-2 border-primary/20">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gold"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
};

const Countdown = () => {
  const launchDate = useRef(getLaunchDate());
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const distance = launchDate.current - Date.now();
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

  return (
    <section className="section-padding">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Launching Version 1 <span className="gold-gradient-text">In</span>
          </h2>
          <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
            <CountdownUnit value={timeLeft.days} label="Days" />
            <CountdownUnit value={timeLeft.hours} label="Hours" />
            <CountdownUnit value={timeLeft.minutes} label="Minutes" />
            <CountdownUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
