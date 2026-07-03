import { useEffect, useState } from 'react';

export type Route = 'accueil' | 'formations' | 'apropos' | 'contact';

const ROUTES: Record<string, Route> = {
  '': 'accueil',
  '#/': 'accueil',
  '#/formations': 'formations',
  '#/a-propos': 'apropos',
  '#/contact': 'contact',
};

function parseHash(): Route {
  const hash = window.location.hash;
  return ROUTES[hash] ?? 'accueil';
}

export function useHashRoute(): [Route, (r: Route) => void] {
  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = (r: Route) => {
    const hash =
      r === 'accueil' ? '#/' : r === 'formations' ? '#/formations' : r === 'apropos' ? '#/a-propos' : '#/contact';
    window.location.hash = hash;
  };

  return [route, navigate];
}

export const routeToHash: Record<Route, string> = {
  accueil: '#/',
  formations: '#/formations',
  apropos: '#/a-propos',
  contact: '#/contact',
};
