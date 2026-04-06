import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-center mb-14">
          Entre em <span className="text-primary">Contato</span>
        </h2>

        <div className="space-y-5">
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kwjimy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-5 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary/40 transition-colors"
            >
              <div className="p-3 rounded-xl bg-accent/70">
                <Mail size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-muted-foreground">kwjimy@gmail.com</p>
              </div>
            </a>

            {/* Telefone */}
            <a
              href="https://wa.me/5579991212963"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-5 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary/40 transition-colors"
            >
              <div className="p-3 rounded-xl bg-accent/70">
                <Phone size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Telefone</h4>
                <p className="text-muted-foreground">+55 (79) 99121-2963</p>
              </div>
            </a>

            {/* Localização */}
            <div className="flex items-center gap-4 px-6 py-5 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary/40 transition-colors">
              <div className="p-3 rounded-xl bg-accent/70">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Localização</h4>
                <p className="text-muted-foreground">Aracaju, Sergipe</p>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
}
