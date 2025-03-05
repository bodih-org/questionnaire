import React, { useState } from 'react';
import { Activity, Brain, Building } from 'lucide-react';
import { questionnaireSections } from './data/questions';
import { QuestionnaireProgress } from './components/QuestionnaireProgress';
import { Question } from './components/Question';
import { ResultsChart } from './components/ResultsChart';
import { EmailForm } from './components/EmailForm';
import { FormData, EmailData, Results } from './types';
import { calculateResults } from './utils/calculations';
import { SendMail } from './fetch/mail';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [results, setResults] = useState<Results | null>(null);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleAnswer = (questionId: number, value: number) => {
    setFormData(prev => ({
      ...prev,
      [`q${questionId}`]: value
    }));
  };

  const isCurrentSectionComplete = () => {
    const currentQuestions = questionnaireSections[currentSection].questions;
    return currentQuestions.every(q => formData[`q${q.id}`]);
  };

  const handleNext = () => {
    if (currentSection < questionnaireSections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else {
      const results = calculateResults(formData);
      setResults(results);
      setShowEmailForm(true);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const handleEmailSubmit = (data: EmailData) => {
    // Here you would integrate with Sarbacane to send the email
    console.log('Email submitted:', data);
    console.log('Results:', results);
    SendMail(data);

  };

  if (results && showEmailForm) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <ResultsChart results={results} />
          <EmailForm onSubmit={handleEmailSubmit} />
        </div>
      </div>
    );
  }

  const currentSectionData = questionnaireSections[currentSection];
  const SectionIcon = {
    physical: Activity,
    cognitive: Brain,
    organizational: Building
  }[currentSectionData.id];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <QuestionnaireProgress
          currentSection={currentSection}
          totalSections={questionnaireSections.length}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <SectionIcon className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{currentSectionData.title}</h2>
              <p className="text-gray-600">{currentSectionData.description}</p>
            </div>
          </div>

          <div className="space-y-6">
            {currentSectionData.questions.map(question => (
              <Question
                key={question.id}
                question={question}
                value={formData[`q${question.id}`] || 0}
                onChange={(value) => handleAnswer(question.id, value)}
              />
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentSection === 0}
              className={`px-6 py-2 rounded-md ${
                currentSection === 0
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Précédent
            </button>
            
            <button
              onClick={handleNext}
              disabled={!isCurrentSectionComplete()}
              className={`px-6 py-2 rounded-md ${
                isCurrentSectionComplete()
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentSection === questionnaireSections.length - 1 ? 'Voir les résultats' : 'Suivant'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
