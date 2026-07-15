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
  "inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]";

const variantClassMap = {
  primary:
    "bg-[var(--color-brand)] text-white shadow-[0_16px_36px_-28px_rgba(0,104,132,0.9)] hover:-translate-y-0.5 hover:bg-[var(--color-brand-strong)]",
  secondary:
    "border border-[var(--color-line)] bg-white text-[var(--color-brand-strong)] hover:-translate-y-0.5 hover:border-[rgba(6,72,96,0.28)] hover:shadow-[var(--shadow-soft)]",
  ghost:
    "text-[var(--color-brand)] hover:bg-[rgba(0,135,165,0.07)]",
  contrast:
    "border border-white bg-white text-[var(--color-brand)] shadow-[0_18px_40px_-30px_rgba(0,0,0,0.55)] hover:-translate-y-0.5 hover:bg-white/92",
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
    <div className="max-w-3xl">
      <p className="editorial-rule text-sm font-bold uppercase text-[var(--color-brand)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl font-semibold leading-[1.08] text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
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
    <section className="relative min-h-[430px] overflow-hidden bg-[var(--color-brand-deep)]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="media-kenburns media-kenburns-gentle object-cover opacity-58"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,44,58,0.93),rgba(5,72,92,0.7),rgba(5,72,92,0.2))]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,rgba(0,0,0,0.24),transparent)]" />
      <div className="relative mx-auto flex min-h-[430px] max-w-7xl flex-col justify-center px-4 py-16 text-white sm:px-6 lg:px-8">
        <p className="reveal-up text-sm font-bold uppercase text-[var(--color-gold-soft)]">
          {eyebrow}
        </p>
        <h1 className="reveal-up mt-4 max-w-4xl font-serif text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl [animation-delay:90ms]">
          {title}
        </h1>
        <p className="reveal-up mt-5 max-w-2xl text-lg leading-8 text-white/84 [animation-delay:160ms]">
          {description}
        </p>
        {actions.length > 0 ? (
          <div className="reveal-up mt-7 flex flex-wrap gap-3 [animation-delay:230ms]">
            {actions.map((action) => (
              <ActionLink
                key={`${action.href}-${action.label}`}
                href={action.href}
                variant={action.variant ?? "contrast"}
              >
                {action.label}
              </ActionLink>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
