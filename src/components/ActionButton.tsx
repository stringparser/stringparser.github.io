import Link from "next/link";

const buttonStyles = {
  primary:
    "inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-medium !text-black transition hover:bg-white/90",
  secondary:
    "inline-flex h-10 items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:border-white/35 hover:bg-white/10 hover:text-white",
} as const;

type ActionButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: keyof typeof buttonStyles;
};

export function ActionButton({
  href,
  children,
  external = false,
  variant = "primary",
}: ActionButtonProps) {
  const className = buttonStyles[variant];

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export { buttonStyles };
