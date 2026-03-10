import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const socials = [
  { href: "https://www.linkedin.com/company/promogpt", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com/promo_gpt", icon: Instagram, label: "Instagram" },
  { href: "https://x.com/promo_gpt", icon: Twitter, label: "X" },
  { href: "mailto:promogpt.ke@gmail.com", icon: Mail, label: "Email" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <img
              src="/promogpt-logo.png"
              alt="Promogpt logo"
              className="h-7 w-auto"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground mt-1">
              The future of SME marketing starts here.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <s.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PromoGPT. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="mailto:promogpt.ke@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <a href="https://calendly.com/promogpt-ke" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">Book a Demo</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms</a>
          </div>
        </div>

        {/* Gold accent line */}
        <div className="mt-6 h-0.5 w-20 mx-auto gold-gradient rounded-full" />
      </div>
    </footer>
  );
};

export default Footer;
