import React from 'react';
import { Activity, Brain, Building } from 'lucide-react';

interface ProgressProps {
  currentSection: number;
  totalSections: number;
}

const icons = [
  { icon: Activity, label: 'Physique' },
  { icon: Brain, label: 'Cognitif' },
  { icon: Building, label: 'Organisationnel' }
];

export const QuestionnaireProgress: React.FC<ProgressProps> = ({ currentSection, totalSections }) => {
  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex justify-between items-center relative">
        <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-10 transform -translate-y-1/2" />
        
        {icons.map((Icon, index) => {
          const isCompleted = index < currentSection;
          const isCurrent = index === currentSection;
          
          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isCompleted
                    ? 'bg-green-500 text-white'
                    : isCurrent
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                <Icon.icon className="w-5 h-5" />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-600">
                {Icon.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};