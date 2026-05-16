import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const contactItems = [
  {
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kwjimy@gmail.com',
    label: 'Email',
    value: 'kwjimy@gmail.com',
    Icon: Mail,
    external: true,
  },
  {
    href: 'https://wa.me/5579991212963',
    label: 'Telefone',
    value: '+55 (79) 99121-2963',
    Icon: Phone,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Vamos conversar"
          title="Entre em"
          highlight="Contato"
          description="Estou aberto a oportunidades, freelas e parcerias. Escolha o canal que preferir."
        />

        <div className="space-y-4">
          {contactItems.map(({ href, label, value, Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="premium-card flex items-center gap-5 p-5 lg:p-6 group"
            >
              <div className="p-3.5 rounded-xl border border-white/[0.06] bg-primary/5 group-hover:border-primary/30 transition-colors duration-500">
                <Icon size={22} className="text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-1">
                  {label}
                </h4>
                <p className="text-foreground font-medium">{value}</p>
              </div>
            </a>
          ))}

          <div className="premium-card flex items-center gap-5 p-5 lg:p-6">
            <div className="p-3.5 rounded-xl border border-white/[0.06] bg-primary/5">
              <MapPin size={22} className="text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-1">
                Localização
              </h4>
              <p className="text-foreground font-medium">Aracaju, Sergipe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
