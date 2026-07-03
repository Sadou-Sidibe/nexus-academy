import { Target, Eye, Heart, Compass } from 'lucide-react';
import { values } from '../data';

export default function Apropos() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-16">
        <div className="container-page text-center">
          <span className="eyebrow">À propos</span>
          <h1 className="section-title mt-2">Le centre de formation qui croit en chaque talent</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            Fondé à Cocody en 2015, Nexus Academy est un centre de formation professionnelle indépendant dédié aux métiers
            du numérique. Nous formons chaque année plus de 400 apprenants, de la reconversion totale à la spécialisation
            avancée, au cœur d'Abidjan.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Target className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-xl font-bold text-gray-900">Notre mission</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Rendre les compétences numériques accessibles à toutes et à tous, en proposant des formations concrètes,
              certifiantes et ancrées dans la réalité du marché de l'emploi. Nous nous engageons à réduire la fracture
              numérique en accompagnant sans relâche les profils en reconversion.
            </p>
          </div>
          <div className="card">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
              <Eye className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-xl font-bold text-gray-900">Notre vision</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Devenir la référence ouest-africaine de la formation numérique responsable, où l'excellence pédagogique rime avec
              inclusion et impact positif. Nous voulons que chaque apprenant reparte non seulement avec un métier, mais
              aussi avec la confiance pour le pratiquer durablement.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-gray-50 py-16">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Nos valeurs</span>
            <h2 className="section-title mt-2">Ce qui nous guide au quotidien</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = [Compass, Heart, Target, Eye][i] ?? Compass;
              return (
                <div key={v.title} className="card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-gray-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="container-page py-16">
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-soft sm:p-12">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">Nexus Academy en chiffres</h2>
          <dl className="mt-8 grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {[
              { v: '2015', l: 'Année de création' },
              { v: '40+', l: 'Formateurs experts' },
              { v: '3', l: "Campus en Côte d'Ivoire" },
              { v: '120', l: 'Entreprises partenaires' },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-3xl font-extrabold text-brand-600">{s.v}</dt>
                <dd className="mt-1 text-sm text-gray-500">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
