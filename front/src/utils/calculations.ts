import { FormData, Results, MaturityLevel } from '../types';

export const calculatePillarScore = (formData: FormData, pillarQuestions: number[]): number => {
  const pillarAnswers = pillarQuestions.map(id => formData[`q${id}`] || 0);
  const totalScore = pillarAnswers.reduce((sum, score) => sum + score, 0);
  const maxPossibleScore = pillarQuestions.length * 5;
  return (totalScore / maxPossibleScore) * 100;
};

export const calculateResults = (formData: FormData): Results => {
  const physicalQuestions = [1, 2, 3, 4, 5];
  const cognitiveQuestions = [6, 7, 8, 9, 10];
  const organizationalQuestions = [11, 12, 13, 14, 15];

  return {
    physical: calculatePillarScore(formData, physicalQuestions),
    cognitive: calculatePillarScore(formData, cognitiveQuestions),
    organizational: calculatePillarScore(formData, organizationalQuestions),
  };
};

export const getMaturityLevel = (score: number): MaturityLevel => {
  if (score <= 20) return 'En recul';
  if (score <= 40) return 'À l\'arrêt';
  if (score <= 60) return 'En marche';
  if (score <= 80) return 'En mouvement';
  return 'En mouvement avec le monde qui évolue';
};