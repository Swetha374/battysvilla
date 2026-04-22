import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "landmarks", label: "Landmarks" },
  { id: "contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = !scrolled;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        transparent
          ? "bg-transparent"
          : "bg-background/90 backdrop-blur-md border-b border-border/60",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#top"
          className={cn(
            "font-display text-2xl tracking-tight transition-smooth",
            transparent ? "text-white" : "text-foreground",
          )}
        >
          Batty&rsquo;s <span className="italic">Villa</span>
        </a>

        <nav className="hidden items-center gap-10 sm:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "text-sm font-medium tracking-wide transition-smooth hover:opacity-70",
                transparent ? "text-white/90" : "text-foreground/80",
              )}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
