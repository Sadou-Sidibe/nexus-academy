import { Clock, Signal, ArrowRight } from 'lucide-react';
import type { Formation } from '../data';

export default function FormationCard({ formation }: { formation: Formation }) {
  const Icon = formation.icon;
  return (
    <article className="card flex flex-col">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <p className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {formation.duration}
          </p>
          <p className="flex items-center gap-1.5 text-xs font-medium text-accent-600">
            <Signal className="h-3.5 w-3.5" aria-hidden="true" /> {formation.level}
          </p>
        </div>
      </div>

      <h3 className="mt-4 text-lg font-bold text-gray-900">{formation.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{formation.description}</p>

      <a
        href="#/contact"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:gap-2.5 hover:text-brand-700"
      >
        En savoir plus <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );
}
