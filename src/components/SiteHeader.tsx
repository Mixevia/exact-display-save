import { useState } from "react";

import { company } from "@/lib/company";

const nav = [
  { href: "#about", label: "About" },
  { href: "#agro", label: "Agro-Processing" },
  { href: "#sauce", label: "Tomato Sauce" },
  { href: "#engineering", label: "Engineering" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-steel-line/40 bg-paper/85 backdrop-blur-md">
      <div className="shell flex h-[68px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center bg-rust font-display text-sm font-black text-paper">
            B
          </span>
          <span className="font-display text-sm leading-tight tracking-tight text-ink">
            Bode Partners
            <span className="block font-mono text-[10px] font-normal tracking-[0.2em] text-ink-soft">
              UG LIMITED
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="border-b border-transparent pb-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:border-rust hover:text-rust"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener"
            className="hidden bg-ink px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-rust sm:inline-block"
          >
            Request a quote
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center border border-steel-line lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden className="space-y-[5px]">
              <span className="block h-[2px] w-5 bg-ink" />
              <span className="block h-[2px] w-5 bg-ink" />
              <span className="block h-[2px] w-5 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-steel-line/50 bg-paper lg:hidden" aria-label="Mobile">
          <div className="shell flex flex-col py-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-steel-line/40 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft"
              >
                {n.label}
              </a>
            ))}
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="mt-4 bg-ink px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-paper"
            >
              Request a quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
