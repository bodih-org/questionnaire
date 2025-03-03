export interface Question {
  id: number;
  text: string;
  description: string;
  options: {
    value: number;
    label: string;
  }[];
}

export interface PillarSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  questions: Question[];
}

export interface FormData {
  [key: string]: number;
}

export interface Results {
  physical: number;
  cognitive: number;
  organizational: number;
}

export type MaturityLevel = 'En recul' | 'À l\'arrêt' | 'En marche' | 'En mouvement' | 'En mouvement avec le monde qui évolue';

export interface EmailData {
  email: string;
  consent: boolean;
}