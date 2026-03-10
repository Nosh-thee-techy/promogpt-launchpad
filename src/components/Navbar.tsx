import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "@/assets/promogpt-logo.png";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "https://calendly.com/promogpt-ke", label: "Book a Demo", external: true },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    if (href.startsWith("#")) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToWaitlist = () => {
    setMobileOpen(false);
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Promogpt logo"
            className="h-8 w-auto"
            loading="lazy"
          />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isExternal = (link as any).external;
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href, isExternal)}
                className={`text-sm transition-colors ${(isExternal ? "text-accent hover:text-accent/80 font-medium" : "text-muted-foreground hover:text-foreground")}`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-accent" strokeWidth={1.5} />
            ) : (
              <Moon className="w-4 h-4 text-primary" strokeWidth={1.5} />
            )}
          </button>
          {/* Book a Demo - visible on mobile too */}
          <Button
            variant="outline-blue"
            size="sm"
            className="text-xs sm:text-sm px-3 sm:px-4"
            onClick={() => window.open("https://calendly.com/promogpt-ke", "_blank")}
          >
            Book a Demo
          </Button>
          <Button variant="gold" size="sm" className="hidden sm:inline-flex text-sm" onClick={scrollToWaitlist}>
            Join Waitlist
          </Button>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-secondary flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => {
                const isExternal = (link as any).external;
                return (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      handleNavClick(link.href, isExternal);
                    }}
                    className={`text-sm font-medium text-left transition-colors py-2 ${
                      isExternal ? "text-accent hover:text-accent/80" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <Button variant="gold" size="sm" className="w-full mt-2" onClick={scrollToWaitlist}>
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
