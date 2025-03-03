import React from 'react';
import { Question as QuestionType } from '../types';

interface QuestionProps {
  question: QuestionType;
  value: number;
  onChange: (value: number) => void;
}

export const Question: React.FC<QuestionProps> = ({ question, value, onChange }) => {
  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{question.text}</h3>
      <p className="text-gray-600 mb-4">{question.description}</p>
      
      <div className="space-y-3">
        {question.options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
              value === option.value
                ? 'bg-blue-50 border-2 border-blue-500'
                : 'border-2 border-gray-200 hover:bg-gray-50'
            }`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="hidden"
            />
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                  value === option.value
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}
              >
                {value === option.value && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className="text-gray-800">{option.label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};