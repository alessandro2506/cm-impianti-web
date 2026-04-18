import Link from "next/link";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
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
  const base = "inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm tracking-wide transition-all duration-200";
  const variants = {
    primary: "bg-[#C9A84C] hover:bg-[#D4B870] text-[#0A0F1E]",
    secondary: "bg-[#1E2A42] hover:bg-[#263452] text-[#E8EDF5] border border-[#1E2A42] hover:border-[#C9A84C]",
    outline: "border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0F1E]",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
