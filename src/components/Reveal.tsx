import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "li" | "article";
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp ref={ref as never} className={`reveal ${className}`} {...rest}>
      {children}
    </Comp>
  );
}

export function Eyebrow({ children, tone = "rust" }: { children: ReactNode; tone?: "rust" | "paper" }) {
  return (
    <span className={`eyebrow ${tone === "paper" ? "text-paper/70" : ""}`}>
      <span className="eyebrow-rule" />
      {children}
    </span>
  );
}
