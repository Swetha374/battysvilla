import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="bg-[oklch(0.24_0.025_240)] text-white/85 scroll-mt-20"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10 lg:py-24">
        <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/55">
          Get in touch
        </span>
        <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
          Batty&rsquo;s <span className="italic">Villa</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
          A premium homestay in the tropical serenity of Malampuzha, Palakkad.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-3">
          <a
            href="https://wa.me/919633495920"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 px-6 py-7 transition-smooth hover:border-white/30 hover:bg-white/5"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/80 transition-smooth group-hover:border-white/40 group-hover:text-white">
              <Phone size={16} />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
              WhatsApp
            </span>
            <span className="text-sm font-medium text-white">+91 9633 495 920</span>
          </a>

          <a
            href="mailto:battysvilla@gmail.com"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 px-6 py-7 transition-smooth hover:border-white/30 hover:bg-white/5"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/80 transition-smooth group-hover:border-white/40 group-hover:text-white">
              <Mail size={16} />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
              Email
            </span>
            <span className="text-sm font-medium text-white break-all">
              battysvilla@gmail.com
            </span>
          </a>

          <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 px-6 py-7">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/80">
              <MapPin size={16} />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
              Address
            </span>
            <span className="text-sm leading-relaxed text-white">
              Alexander Road, Melecherad,<br />
              Malampuzha, Palakkad — 678651
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/45 md:flex-row lg:px-10">
          <p>&copy; {new Date().getFullYear()} Cudiort Tech Ventures Pvt Ltd. All rights reserved.</p>
          <p>Crafted with care in Malampuzha, Kerala.</p>
        </div>
      </div>
    </footer>
  );
}
