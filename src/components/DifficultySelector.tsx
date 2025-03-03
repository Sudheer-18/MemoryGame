import React from 'react';

interface DifficultySelectorProps {
  onSelectDifficulty: (difficulty: 'easy' | 'medium' | 'hard') => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({ onSelectDifficulty }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Select Difficulty</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl">
        <button
          onClick={() => onSelectDifficulty('easy')}
          className="p-4 text-base sm:text-lg bg-green-500 text-white rounded-lg hover:bg-green-600 transition transform hover:scale-105 shadow-md"
        >
          Easy (30 Cards)
        </button>
        <button
          onClick={() => onSelectDifficulty('medium')}
          className="p-4 text-base sm:text-lg bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition transform hover:scale-105 shadow-md"
        >
          Medium (50 Cards)
        </button>
        <button
          onClick={() => onSelectDifficulty('hard')}
          className="p-4 text-base sm:text-lg bg-red-500 text-white rounded-lg hover:bg-red-600 transition transform hover:scale-105 shadow-md"
        >
          Hard (100 Cards)
        </button>
      </div>
    </div>
  );
};

export default DifficultySelector;