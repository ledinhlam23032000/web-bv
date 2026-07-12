import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "contrast";
  className?: string;
};

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost" | "contrast";
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  actions?: HeroAction[];
};

const baseButtonClass =
  "inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition duration-300";

const variantClassMap = {
  primary:
    "bg-[var(--color-brand)] text-white shadow-[0_18px_44px_-24px_rgba(17,61,114,0.8)] hover:-translate-y-0.5 hover:bg-[var(--color-brand-strong)]",
  secondary:
    "border border-[var(--color-line)] bg-white/92 text-[var(--color-brand-strong)] backdrop-blur hover:-translate-y-0.5 hover:border-[rgba(17,61,114,0.3)]",
  ghost:
    "text-[var(--color-brand)] hover:bg-[rgba(17,61,114,0.06)]",
  contrast:
    "border border-white/60 bg-white text-[var(--color-brand)] shadow-[0_18px_44px_-24px_rgba(17,61,114,0.45)] hover:-translate-y-0.5 hover:bg-white/92",
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  className,
}: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={[baseButtonClass, variantClassMap[variant], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-brand)] sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="font-serif text-[1.9rem] leading-[1.14] text-[var(--color-ink)] sm:text-[2.2rem] lg:text-[2.7rem]">
        {title}
      </h2>
      <p className="max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-[1.02rem]">
        {description}
      </p>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  actions = [],
}: PageHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 overflow-hidden rounded-[34px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(241,247,253,0.82))] p-6 shadow-[0_30px_120px_-70px_rgba(22,32,43,0.34)] lg:grid-cols-[1.02fr_0.98fr] lg:p-8">
        <div className="flex flex-col justify-between gap-8">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-brand)] sm:text-sm">
              {eyebrow}
            </p>
            <h1 className="max-w-3xl font-serif text-3xl leading-[1.08] text-[var(--color-ink)] sm:text-4xl lg:text-[3.5rem]">
              {title}
            </h1>
            <p className="max-w-2xl text-[1.02rem] leading-8 text-[var(--color-muted)] text-pretty sm:text-lg">
              {description}
            </p>
          </div>
          {actions.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {actions.map((action) => (
                <ActionLink
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  variant={action.variant ?? "primary"}
                >
                  {action.label}
                </ActionLink>
              ))}
            </div>
          ) : null}
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-[32px] bg-[var(--color-brand)]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="media-kenburns media-kenburns-gentle object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,61,114,0.04),rgba(17,61,114,0.36))]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%)]" />
        </div>
      </div>
    </section>
  );
}
