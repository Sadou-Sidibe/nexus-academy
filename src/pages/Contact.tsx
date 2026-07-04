import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Github, CheckCircle2, Send } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-16">
        <div className="container-page text-center">
          <span className="eyebrow">Contact</span>
          <h1 className="section-title mt-2">Parlons de votre projet</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            Une question sur une formation, une demande de partenariat ou un projet de reconversion ? Notre équipe vous
            répond sous 48 heures ouvrées.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Coordonnées */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">Nos coordonnées</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Adresse</p>
                  <p className="text-sm text-gray-600">Cocody Angré 8e Tranche, Abidjan, Côte d'Ivoire</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Téléphone</p>
                  <a href="tel:+2250712345678" className="text-sm text-gray-600 hover:text-brand-700">+225 07 12 34 56 78</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Email</p>
                  <a href="mailto:contact@nexusacademy.ci" className="text-sm text-gray-600 hover:text-brand-700">contact@nexusacademy.ci</a>
                </div>
              </li>
            </ul>

            <h2 className="mt-10 text-xl font-bold text-gray-900">Réseaux sociaux</h2>
            <div className="mt-4 flex gap-3">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Github, label: 'GitHub' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-soft transition hover:border-brand-300 hover:text-brand-700"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100 shadow-soft">
              <div className="h-64 w-full overflow-hidden bg-gray-100">
                <iframe
                  title="Localisation de Nexus Academy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-4.025%2C5.345%2C-3.995%2C5.375&layer=mapnik&marker=5.360,-4.000"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  scrolling="no"
                />
              </div>
              <div className="border-t border-gray-100 bg-white px-4 py-3 text-sm text-gray-600">
                <p className="font-medium text-gray-900">Nexus Academy</p>
                <p>Cocody Angré 8e Tranche, Abidjan, Côte d’Ivoire</p>
              </div>
            </div>
          </div>
          <div className="card">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-brand-600" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-bold text-gray-900">Message envoyé !</h2>
                <p className="mt-2 text-sm text-gray-600">Merci pour votre message. Nous vous répondrons très bientôt.</p>
                <button type="button" onClick={() => setSent(false)} className="btn-secondary mt-6">
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
                  <input
                    id="name" type="text" required value={form.name} onChange={update('name')}
                    className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-soft transition focus:border-brand-400"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email" type="email" required value={form.email} onChange={update('email')}
                    className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-soft transition focus:border-brand-400"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Sujet</label>
                  <input
                    id="subject" type="text" required value={form.subject} onChange={update('subject')}
                    className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-soft transition focus:border-brand-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message" required rows={5} value={form.message} onChange={update('message')}
                    className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-soft transition focus:border-brand-400"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Envoyer le message <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
