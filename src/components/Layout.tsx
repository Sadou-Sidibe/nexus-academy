import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import type { Route } from '../router';

export default function Layout({ current, children }: { current: Route; children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Aller au contenu
      </a>
      <Navbar current={current} />
      <main id="contenu" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
