interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  className = '',
}: SectionHeadingProps) {
  return (
    <header className={`text-center mb-16 ${className}`}>
      {eyebrow && (
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-primary/80 mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-tight text-foreground leading-tight">
        {title}{' '}
        <span className="text-gradient-primary italic">{highlight}</span>
      </h2>
      {description && (
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-base leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
