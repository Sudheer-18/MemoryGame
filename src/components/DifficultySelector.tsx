import React from 'react';

interface DifficultySelectorProps {
  onSelectDifficulty: (difficulty: 'easy' | 'medium' | 'hard') => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({ onSelectDifficulty }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Select Difficulty</h2>
      <button
        onClick={() => onSelectDifficulty('easy')}
        className="w-48 p-4 text-lg bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Easy (30 Cards)
      </button>
      <button
        onClick={() => onSelectDifficulty('medium')}
        className="w-48 p-4 text-lg bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
      >
        Medium (50 Cards)
      </button>
      <button
        onClick={() => onSelectDifficulty('hard')}
        className="w-48 p-4 text-lg bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Hard (100 Cards)
      </button>
    </div>
  );
};

export default DifficultySelector;