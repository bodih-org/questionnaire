import { PillarSection } from '../types';

export const questionnaireSections: PillarSection[] = [
  {
    id: 'physical',
    title: 'Pilier PHYSIQUE',
    icon: 'activity',
    description: 'Mouvement, Sédentarité, TMS',
    questions: [
      {
        id: 1,
        text: 'Aménagement des espaces de travail',
        description: 'Nos postes de travail sont conçus pour limiter la sédentarité et les TMS (ex. : bureaux réglables, sièges ergonomiques).',
        options: [
          { value: 1, label: 'Pas du tout' },
          { value: 2, label: 'Rarement' },
          { value: 3, label: 'Parfois' },
          { value: 4, label: 'Souvent' },
          { value: 5, label: 'Systématiquement' }
        ]
      },
      {
        id: 2,
        text: 'Sensibilisation et engagement',
        description: 'Nous menons régulièrement des actions de sensibilisation pour encourager l\'activité physique au travail (pauses actives, ateliers).',
        options: [
          { value: 1, label: 'Jamais' },
          { value: 2, label: 'De manière isolée' },
          { value: 3, label: 'Occasionnellement' },
          { value: 4, label: 'Régulièrement' },
          { value: 5, label: 'Intégré à notre culture' }
        ]
      },
      {
        id: 3,
        text: 'Encouragement au mouvement',
        description: 'Les collaborateurs sont encouragés à bouger durant la journée de travail (ex. : réunions debout, escaliers, espaces adaptés).',
        options: [
          { value: 1, label: 'Pas du tout' },
          { value: 2, label: 'Très rarement' },
          { value: 3, label: 'Parfois' },
          { value: 4, label: 'Régulièrement' },
          { value: 5, label: 'C\'est une norme' }
        ]
      },
      {
        id: 4,
        text: 'Prévention des TMS',
        description: 'Nous avons mis en place une stratégie pour prévenir les TMS et mesurons son efficacité.',
        options: [
          { value: 1, label: 'Aucune initiative' },
          { value: 2, label: 'Des actions ponctuelles' },
          { value: 3, label: 'Un programme existe mais non structuré' },
          { value: 4, label: 'Un programme structuré est en place' },
          { value: 5, label: 'Suivi régulier et évolutif' }
        ]
      },
      {
        id: 5,
        text: 'Implication du management',
        description: 'Les managers montrent l\'exemple et intègrent le mouvement dans leur quotidien professionnel.',
        options: [
          { value: 1, label: 'Pas du tout' },
          { value: 2, label: 'Quelques initiatives individuelles' },
          { value: 3, label: 'Présence d\'initiatives mais sans généralisation' },
          { value: 4, label: 'Modèle inspirant dans certains départements' },
          { value: 5, label: 'Fait partie des pratiques courantes' }
        ]
      }
    ]
  },
  {
    id: 'cognitive',
    title: 'Pilier COGNITIF',
    icon: 'brain',
    description: 'Charge mentale, stress, innovation, apprentissage',
    questions: [
      {
        id: 6,
        text: 'Charge mentale et surcharge cognitive',
        description: 'Les équipes disposent d\'un cadre structuré pour limiter la surcharge cognitive (clarté des rôles, priorisation des tâches).',
        options: [
          { value: 1, label: 'Le travail est toujours dans l\'urgence' },
          { value: 2, label: 'Des tentatives existent mais peu appliquées' },
          { value: 3, label: 'Gestion partielle mais en progression' },
          { value: 4, label: 'Des outils et méthodes en place' },
          { value: 5, label: 'Une organisation fluide et maîtrisée' }
        ]
      },
      {
        id: 7,
        text: 'Gestion du stress et résilience',
        description: 'Nous mettons en place des dispositifs pour aider les collaborateurs à gérer leur stress et renforcer leur résilience (formations, accompagnement).',
        options: [
          { value: 1, label: 'Aucune action' },
          { value: 2, label: 'Des actions ponctuelles' },
          { value: 3, label: 'Approche existante mais encore peu suivie' },
          { value: 4, label: 'Programmes intégrés' },
          { value: 5, label: 'Stratégie évolutive et mesurable' }
        ]
      },
      {
        id: 8,
        text: 'Culture d\'apprentissage et d\'innovation',
        description: 'Nous favorisons l\'apprentissage continu et l\'innovation (formations, temps dédié à l\'expérimentation, culture du feedback).',
        options: [
          { value: 1, label: 'Pas encouragé' },
          { value: 2, label: 'Opportunités limitées' },
          { value: 3, label: 'Quelques initiatives' },
          { value: 4, label: 'Des dispositifs en place' },
          { value: 5, label: 'Une culture forte et proactive' }
        ]
      },
      {
        id: 9,
        text: 'Charge informationnelle',
        description: 'Nous veillons à ne pas surcharger les collaborateurs en e-mails, notifications et sollicitations inutiles.',
        options: [
          { value: 1, label: 'Surcharge totale' },
          { value: 2, label: 'Des tentatives sans structuration' },
          { value: 3, label: 'Amélioration progressive' },
          { value: 4, label: 'Des pratiques en place' },
          { value: 5, label: 'Équilibre maîtrisé' }
        ]
      },
      {
        id: 10,
        text: 'Autonomie et responsabilisation',
        description: 'Nos équipes sont autonomes et disposent d\'une latitude suffisante pour organiser leur travail efficacement.',
        options: [
          { value: 1, label: 'Très encadrées, peu de liberté' },
          { value: 2, label: 'Autonomie limitée' },
          { value: 3, label: 'Évolution vers plus d\'autonomie' },
          { value: 4, label: 'Bon équilibre' },
          { value: 5, label: 'Autonomie optimisée et soutenue' }
        ]
      }
    ]
  },
  {
    id: 'organizational',
    title: 'Pilier ORGANISATIONNEL',
    icon: 'building',
    description: 'Vision, structuration, fluidité collective',
    questions: [
      {
        id: 11,
        text: 'Cohérence de la culture d\'entreprise',
        description: 'Nos valeurs et notre vision sont claires et partagées par tous les collaborateurs.',
        options: [
          { value: 1, label: 'Pas du tout' },
          { value: 2, label: 'Peu visibles' },
          { value: 3, label: 'Connues mais peu incarnées' },
          { value: 4, label: 'Bien intégrées' },
          { value: 5, label: 'Pilier fondamental' }
        ]
      },
      {
        id: 12,
        text: 'Alignement stratégique',
        description: 'Les décisions locales et stratégiques sont alignées et cohérentes.',
        options: [
          { value: 1, label: 'Décisions aléatoires' },
          { value: 2, label: 'Manque de clarté' },
          { value: 3, label: 'Alignement partiel' },
          { value: 4, label: 'Cohérence globale' },
          { value: 5, label: 'Stratégie claire et agile' }
        ]
      },
      {
        id: 13,
        text: 'Travail en silo vs transversalité',
        description: 'Nos équipes collaborent efficacement entre départements et évitent les silos.',
        options: [
          { value: 1, label: 'Silos dominants' },
          { value: 2, label: 'Peu de transversalité' },
          { value: 3, label: 'Collaboration partielle' },
          { value: 4, label: 'Bonne fluidité' },
          { value: 5, label: 'Collaboration naturelle et fluide' }
        ]
      },
      {
        id: 14,
        text: 'Responsabilisation des leaders',
        description: 'Nos managers sont formés et responsabilisés sur la gestion des équipes et des projets.',
        options: [
          { value: 1, label: 'Aucun accompagnement' },
          { value: 2, label: 'Formation limitée' },
          { value: 3, label: 'En cours d\'amélioration' },
          { value: 4, label: 'Formation structurée' },
          { value: 5, label: 'Leadership proactif et performant' }
        ]
      },
      {
        id: 15,
        text: 'Adaptabilité et innovation organisationnelle',
        description: 'Notre organisation s\'adapte aux évolutions du marché et aux nouveaux modes de travail.',
        options: [
          { value: 1, label: 'Rigide et dépassée' },
          { value: 2, label: 'Résistance au changement' },
          { value: 3, label: 'Tentatives d\'évolution' },
          { value: 4, label: 'Organisation flexible' },
          { value: 5, label: 'Culture d\'innovation permanente' }
        ]
      }
    ]
  }
];