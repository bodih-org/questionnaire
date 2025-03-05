import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Results } from '../types';

interface ResultsChartProps {
  results: Results;
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);



export const ResultsChart: React.FC<ResultsChartProps> = ({ results }) => {
  const resultData = [
    results.physical,
    results.cognitive,
    results.organizational
  ]
  const data = {
    labels: ['Physique', 'Cognitif', 'Organisationnel'],
    datasets: [
      {
        label: '# of Votes',
        data: resultData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Résultats de l'évaluation</h2>
      <Radar data={data} />
    </div>);
}
