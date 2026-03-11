import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";

const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  businessType: z.string().min(1, "Please select a business type"),
  budget: z.string().optional(),
});

const Waitlist = () => {
  const [formData, setFormData] = useState({ name: "", email: "", businessType: "", budget: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = waitlistSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);

    try {
      const webhookUrl = import.meta.env.VITE_WAITLIST_WEBHOOK_URL;

      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        });
      } else {
        console.warn("VITE_WAITLIST_WEBHOOK_URL is not set; skipping external submission.");
      }

      setShowSuccess(true);
      setFormData({ name: "", email: "", businessType: "", budget: "" });
    } catch (err) {
      console.error("Failed to submit waitlist form", err);
      setErrors((prev) => ({
        ...prev,
        form: "Something went wrong. Please try again.",
      }));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="section-padding relative overflow-hidden">
      {/* Outline text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[6rem] sm:text-[10rem] md:text-[14rem] font-heading font-bold tracking-tighter whitespace-nowrap"
          style={{
            WebkitTextStroke: "1.5px hsl(var(--accent) / 0.06)",
            WebkitTextFillColor: "transparent",
          }}
        >
          JOIN US
        </span>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">Early Access</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
             Join the <span className="gold-gradient-text">Waitlist</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Early access. Priority onboarding. Special launch pricing.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-border/50"
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
              className="mt-1.5"
            />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
              className="mt-1.5"
            />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label>Business Type</Label>
            <Select
              value={formData.businessType}
              onValueChange={(val) => setFormData((p) => ({ ...p, businessType: val }))}
            >
              <SelectTrigger className="mt-1.5">
                <SelectValue placeholder="Select your business type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ecommerce">E-Commerce</SelectItem>
                <SelectItem value="saas">SaaS / Software</SelectItem>
                <SelectItem value="services">Professional Services</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="agency">Agency</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.businessType && <p className="text-destructive text-xs mt-1">{errors.businessType}</p>}
          </div>

          <div>
            <Label>Monthly Marketing Budget (optional)</Label>
            <Select
              value={formData.budget}
              onValueChange={(val) => setFormData((p) => ({ ...p, budget: val }))}
            >
              <SelectTrigger className="mt-1.5">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-1k">Under $1,000</SelectItem>
                <SelectItem value="1k-5k">$1,000 – $5,000</SelectItem>
                <SelectItem value="5k-10k">$5,000 – $10,000</SelectItem>
                <SelectItem value="10k-plus">$10,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            variant="gold"
            size="lg"
            className="w-full text-base py-6"
            disabled={submitting}
          >
            {submitting ? "Reserving..." : "Reserve My Spot"}
          </Button>
        </motion.form>

        <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
          <DialogContent className="text-center py-10 max-w-sm">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-foreground" />
              </div>
            </div>
            <DialogTitle asChild>
              <h3 className="text-2xl font-bold mb-2">You're officially on the list.</h3>
            </DialogTitle>
            <DialogDescription asChild>
              <p className="text-muted-foreground">
                We'll be in touch with your early access details. Get ready.
              </p>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Waitlist;
