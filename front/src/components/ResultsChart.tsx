import React from 'react';
import { Results } from '../types';
import { getMaturityLevel } from '../utils/calculations';

interface ResultsChartProps {
  results: Results;
}

export const ResultsChart: React.FC<ResultsChartProps> = ({ results }) => {
  const pillars = [
    { label: 'Physique', value: results.physical },
    { label: 'Cognitif', value: results.cognitive },
    { label: 'Organisationnel', value: results.organizational },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Résultats de l'évaluation</h2>
      
      <div className="space-y-6">
        {pillars.map(({ label, value }) => (
          <div key={label} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{label}</span>
              <span className="text-sm text-gray-600">{Math.round(value)}%</span>
            </div>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${value}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">
              Niveau de maturité : <span className="font-medium">{getMaturityLevel(value)}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};