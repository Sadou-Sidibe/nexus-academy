import { formations } from '../data';
import FormationCard from '../components/FormationCard';

export default function Formations() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-16">
        <div className="container-page text-center">
          <span className="eyebrow">Catalogue</span>
          <h1 className="section-title mt-2">Nos formations</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            Des programmes intensifs et certifiants, conçus avec des entreprises partenaires pour répondre aux besoins
            réels du marché. Chaque formation combine théorie, pratique et projet professionnel.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {formations.map((f) => (
            <FormationCard key={f.id} formation={f} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-soft sm:p-12">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Vous hésitez sur la formation à choisir ?</h2>
            <p className="mt-3 text-gray-600">
              Notre équipe pédagogique vous aide à identifier le programme le plus adapté à votre profil et à vos objectifs.
            </p>
            <a href="#/contact" className="btn-primary mt-6">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>
  );
}
