export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto text-center text-muted-foreground">
        <p>© {currentYear} Meu Portfólio. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">
          Desenvolvido com React, TypeScript e TailwindCSS
        </p>
      </div>
    </footer>
  );
}
