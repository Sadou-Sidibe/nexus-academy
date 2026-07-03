import { ArrowRight, Sparkles, CheckCircle2, Quote } from 'lucide-react';
import { formations, stats, testimonials } from '../data';
import FormationCard from '../components/FormationCard';

export default function Accueil() {
  const featured = formations.filter((f) => f.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 top-40 h-64 w-64 rounded-full bg-accent-100/50 blur-3xl" aria-hidden="true" />
        <div className="container-page relative py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-soft animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Formations certifiantes · Reconversion &amp; upskilling
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl animate-fade-up">
              Formez-vous aux métiers de <span className="text-brand-600">demain</span>, dès aujourd'hui.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Nexus Academy accompagne les talents en reconversion et les professionnels en quête de montée en compétences
              avec des formations pratiques, encadrées par des experts du secteur.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <a href="#/formations" className="btn-primary">
                Découvrir nos formations <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#/a-propos" className="btn-secondary">En savoir plus sur nous</a>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation courte */}
      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Qui sommes-nous ?</span>
          <h2 className="section-title mt-2">Un centre de formation pensé pour votre réussite</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Depuis 2015, Nexus Academy forme chaque année des centaines d'apprenants aux compétences numériques les plus
            recherchées, au cœur d'Abidjan. Notre approche mêle pédagogie active, projets concrets et accompagnement personnalisé vers l'emploi.
          </p>
          <ul className="mt-8 grid gap-3 text-left sm:grid-cols-2">
            {[
              'Des formateurs issus du terrain',
              'Un mentor dédié par apprenant',
              'Des projets clients réels',
              'Un coaching carrière jusqu\'à l\'emploi',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-brand-600" aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Formations mises en avant */}
      <section className="bg-gray-50 py-16">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Nos formations phares</span>
              <h2 className="section-title mt-2">Trois programmes pour démarrer</h2>
            </div>
            <a href="#/formations" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
              Voir toutes les formations <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((f) => (
              <FormationCard key={f.id} formation={f} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="container-page py-16">
        <div className="grid grid-cols-2 gap-6 rounded-3xl bg-brand-600 p-8 text-white shadow-soft-lg sm:p-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-brand-100">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-gray-50 py-16">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Ils nous ont fait confiance</span>
            <h2 className="section-title mt-2">Ce que disent nos anciens élèves</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card flex flex-col">
                <Quote className="h-8 w-8 text-accent-400" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">"{t.text}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    loading="lazy"
                    width="40"
                    height="40"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-soft sm:p-12 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Prêt à transformer votre carrière ?</h2>
            <p className="mt-2 text-gray-600">Discutons de votre projet et trouvons la formation qui vous correspond.</p>
          </div>
          <a href="#/contact" className="btn-primary whitespace-nowrap">
            Nous contacter <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
