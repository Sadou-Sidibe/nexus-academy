import { useEffect, useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import type { Route } from '../router';
import { routeToHash } from '../router';

const LINKS: { label: string; route: Route }[] = [
  { label: 'Accueil', route: 'accueil' },
  { label: 'Formations', route: 'formations' },
  { label: 'À propos', route: 'apropos' },
  { label: 'Contact', route: 'contact' },
];

export default function Navbar({ current }: { current: Route }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur shadow-soft' : 'bg-white/0'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Navigation principale">
        <a href="#/" className="flex items-center gap-2 font-display text-lg font-bold text-gray-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          Nexus<span className="text-brand-600">Academy</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => {
            const active = current === l.route;
            return (
              <li key={l.route}>
                <a
                  href={routeToHash[l.route]}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    active ? 'bg-brand-50 text-brand-700' : 'text-gray-600 hover:text-brand-700'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a href="#/contact" className="hidden btn-primary md:inline-flex">
          S'inscrire
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-gray-100 bg-white md:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <li key={l.route}>
                <a
                  href={routeToHash[l.route]}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    current === l.route ? 'bg-brand-50 text-brand-700' : 'text-gray-700'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
                S'inscrire
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
