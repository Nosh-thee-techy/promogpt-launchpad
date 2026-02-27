import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <span className="text-xl font-heading font-bold">
          Promo<span className="gold-gradient-text">GPT</span>
        </span>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-gold" strokeWidth={1.5} />
            ) : (
              <Moon className="w-4 h-4 text-primary" strokeWidth={1.5} />
            )}
          </button>
          <Button variant="gold" size="sm" className="text-sm" onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}>
            Join Waitlist
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
