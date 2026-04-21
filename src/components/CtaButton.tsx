// Design System v2 — CM Impianti
import Link from "next/link";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
}

export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 min-h-[3.5rem] px-8 py-3.5 md:min-h-[3.75rem] md:px-10 md:py-4 rounded-full font-semibold text-base md:text-[17px] leading-tight tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0CA6E8]";

  const variants = {
    primary:
      "text-white shadow-[0_10px_30px_rgba(0,136,255,0.35)] hover:shadow-[0_16px_40px_rgba(0,136,255,0.45)] hover:scale-[1.03] active:scale-[0.98]",
    secondary:
      "border-2 border-[#C9E5FF] bg-white text-[#0A2A4E] hover:bg-[#F2F9FF] hover:border-[#9CD6FF] hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "border border-white/20 text-[#F0F4F8] hover:bg-white/[0.06] hover:border-white/30 hover:scale-[1.02]",
    ghost:
      "text-[#8A9BAD] hover:text-[#F0F4F8] hover:bg-white/5",
  };

  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      style={variant === "primary" ? { background: "linear-gradient(90deg, #0075FF 0%, #00C4FF 100%)" } : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
