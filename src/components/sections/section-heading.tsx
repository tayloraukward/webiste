type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="border-b border-parchment/12 pb-10 sm:pb-12">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.42em] text-silver-dim sm:text-[13px]">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-tight text-parchment sm:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-parchment-dim sm:text-xl">{description}</p>
      ) : null}
    </header>
  );
}
