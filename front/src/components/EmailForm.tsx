import React, { useState } from 'react';
import { EmailData } from '../types';

interface EmailFormProps {
  onSubmit: (data: EmailData) => void;
}

export const EmailForm: React.FC<EmailFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Veuillez entrer votre adresse email');
      return;
    }
    
    if (!consent) {
      setError('Veuillez accepter les conditions d\'utilisation');
      return;
    }
    
    onSubmit({ email, consent });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Recevez votre rapport détaillé</h2>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Adresse email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="votre@email.com"
        />
      </div>
      
      <div className="mb-4">
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1"
          />
          <span className="text-sm text-gray-600">
            J'accepte de recevoir mon rapport détaillé et les communications de Bodih
          </span>
        </label>
      </div>
      
      {error && (
        <p className="text-red-500 text-sm mb-4">{error}</p>
      )}
      
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Recevoir mon rapport
      </button>
    </form>
  );
};