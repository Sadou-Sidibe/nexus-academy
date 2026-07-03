import { GraduationCap, Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-gray-50">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="#/" className="flex items-center gap-2 font-display text-lg font-bold text-gray-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              Nexus<span className="text-brand-600">Academy</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-gray-500">
              Le centre de formation qui transforme la curiosité en expertise et les passions en carrière, au cœur d'Abidjan.
            </p>
          </div>

          <nav aria-label="Navigation pied de page">
            <h2 className="text-sm font-semibold text-gray-900">Navigation</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li><a href="#/" className="hover:text-brand-700">Accueil</a></li>
              <li><a href="#/formations" className="hover:text-brand-700">Formations</a></li>
              <li><a href="#/a-propos" className="hover:text-brand-700">À propos</a></li>
              <li><a href="#/contact" className="hover:text-brand-700">Contact</a></li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-gray-900">Suivez-nous</h2>
            <div className="mt-3 flex gap-3">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Github, label: 'GitHub' },
                { Icon: Mail, label: 'Email' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#/contact"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-soft transition hover:border-brand-300 hover:text-brand-700"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
          © 2026 Nexus Academy. Tous droits réservés. by sadoudev
        </div>
      </div>
    </footer>
  );
}
