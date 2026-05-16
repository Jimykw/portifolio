export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="font-display text-lg text-foreground">
          Jimy Kauã<span className="text-primary">.</span>
        </p>
        <div className="text-muted-foreground text-sm space-y-1">
          <p>© {currentYear} Todos os direitos reservados.</p>
          <p className="text-xs tracking-wide opacity-80">
            React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
