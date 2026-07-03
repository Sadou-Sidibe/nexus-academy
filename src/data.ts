import {
  Code2,
  Database,
  ShieldCheck,
  Palette,
  Cloud,
  BarChart3,
  type LucideIcon,
} from 'lucide-react';

export type Formation = {
  id: string;
  name: string;
  duration: string;
  level: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const formations: Formation[] = [
  {
    id: 'dev-web',
    name: 'Développement Web Full-Stack',
    duration: '6 mois',
    level: 'Débutant à Intermédiaire',
    description:
      "Maîtrisez HTML, CSS, JavaScript, React et Node.js pour concevoir des applications web modernes de A à Z, du front-end au back-end.",
    icon: Code2,
    featured: true,
  },
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    duration: '5 mois',
    level: 'Intermédiaire',
    description:
      "Apprenez à collecter, nettoyer et analyser des données avec Python, SQL et Power BI pour transformer la donnée en décision.",
    icon: BarChart3,
    featured: true,
  },
  {
    id: 'cybersec',
    name: 'Cybersécurité & Ethical Hacking',
    duration: '7 mois',
    level: 'Intermédiaire à Avancé',
    description:
      "Sécurisez les systèmes informatiques, identifiez les vulnérabilités et pratiquez le pentesting dans un environnement contrôlé.",
    icon: ShieldCheck,
    featured: true,
  },
  {
    id: 'ux-ui',
    name: 'UX / UI Design',
    duration: '4 mois',
    level: 'Débutant',
    description:
      "Concevez des interfaces intuitives et esthétiques avec Figma, en plaçant l'utilisateur au cœur de votre démarche de design.",
    icon: Palette,
  },
  {
    id: 'devops-cloud',
    name: 'DevOps & Cloud AWS',
    duration: '5 mois',
    level: 'Avancé',
    description:
      "Automatisez les déploiements, gérez l'infrastructure cloud et maîtrisez Docker, Kubernetes et les pipelines CI/CD.",
    icon: Cloud,
  },
  {
    id: 'data-science',
    name: 'Data Science & Machine Learning',
    duration: '8 mois',
    level: 'Avancé',
    description:
      "Plongez dans le machine learning et le deep learning avec Python, TensorFlow et scikit-learn pour construire des modèles prédictifs.",
    icon: Database,
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: '2 400+', label: 'Étudiants formés' },
  { value: '92%', label: 'Taux d\'insertion à 6 mois' },
  { value: '48', label: 'Formations certifiantes' },
  { value: '4,8/5', label: 'Satisfaction moyenne' },
];

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  photo: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Adjoua Koffi',
    role: 'Développeuse Front-End chez Orange CI',
    photo: 'https://images.pexels.com/photos/8872703/pexels-photo-8872703.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
    text:
      "Nexus Academy m'a donné les bases solides dont j'avais besoin. Les formateurs sont vraiment disponibles et les projets sont concrets. Aujourd'hui je travaille chez Orange CI et je suis fière de mon parcours.",
  },
  {
    name: 'Kouamé Assoumou',
    role: 'Data Analyst chez CIE',
    photo: 'https://images.pexels.com/photos/19805877/pexels-photo-19805877.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
    text:
      "La formation Data Analyst de Nexus Academy est vraiment sérieuse et ancrée dans la réalité du marché ivoirien. J'ai constitué un portfolio solide qui a fait toute la différence lors de mes entretiens.",
  },
  {
    name: 'Mariame Coulibaly',
    role: 'UX Designer chez Ecobank',
    photo: 'https://images.pexels.com/photos/12911616/pexels-photo-12911616.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
    text:
      "Après mon BTS, je cherchais une voie dans le numérique. En moins d'un an, j'ai acquis les compétences et la confiance pour intégrer une grande entreprise. L'ambiance à Cocody est vraiment motivante !",
  },
];

export type Value = {
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    title: 'Accessibilité',
    description:
      "Nous croyens que la formation doit être ouverte à tous, quel que soit le parcours. Nos sessions sont accessibles aux personnes en reconversion et en situation de handicap.",
  },
  {
    title: 'Excellence pédagogique',
    description:
      "Nos formateurs sont des praticiens passionnés qui transmettent un savoir à jour, validé par les standards les plus exigeants du secteur.",
  },
  {
    title: 'Accompagnement humain',
    description:
      "Chaque apprenant bénéficie d'un suivi personnalisé, d'un mentor dédié et d'un coaching carrière jusqu'à l'obtention d'un emploi.",
  },
  {
    title: 'Innovation responsable',
    description:
      "Nous formons aux technologies de demain en intégrant les enjeux d'éthique, de sécurité et d'impact environnemental du numérique.",
  },
];
