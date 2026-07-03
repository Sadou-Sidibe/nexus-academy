import Layout from './components/Layout';
import { useHashRoute } from './router';
import Accueil from './pages/Accueil';
import Formations from './pages/Formations';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';

export default function App() {
  const [route] = useHashRoute();

  return (
    <Layout current={route}>
      {route === 'accueil' && <Accueil />}
      {route === 'formations' && <Formations />}
      {route === 'apropos' && <Apropos />}
      {route === 'contact' && <Contact />}
    </Layout>
  );
}
