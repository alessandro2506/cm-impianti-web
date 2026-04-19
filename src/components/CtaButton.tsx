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
    "inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C9A84C]";

  const variants = {
    primary:
      "bg-[#C9A84C] hover:bg-[#E2B96A] text-[#0A0F1E] shadow-[0_4px_24px_rgba(201,168,76,0.35)] hover:shadow-[0_6px_32px_rgba(201,168,76,0.5)] hover:scale-[1.04] active:scale-[0.98]",
    secondary:
      "border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0F1E] hover:border-[#C9A84C] hover:scale-[1.04] active:scale-[0.98]",
    outline:
      "border border-white/20 text-[#F0F4F8] hover:bg-white/[0.06] hover:border-white/30 hover:scale-[1.02]",
    ghost:
      "text-[#8A9BAD] hover:text-[#F0F4F8] hover:bg-white/5",
  };

  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
