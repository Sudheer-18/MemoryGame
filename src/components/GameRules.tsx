import React from 'react';
import { Info, Award, AlertTriangle } from 'lucide-react';

const GameRules: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 max-w-3xl mx-auto border-l-4 border-indigo-500 animate-fadeIn">
      <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-3 sm:mb-4 flex items-center">
        <Info className="mr-2 w-5 h-5 sm:w-6 sm:h-6" /> Memory Game Rules
      </h2>
      
      <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
        <div className="flex items-start">
          <div className="bg-indigo-100 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3 mt-1 flex-shrink-0">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg text-indigo-600">Scoring System:</h3>
            <ul className="list-disc ml-4 sm:ml-5 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1">
              <li>Match a pair: <span className="font-medium text-green-600">+5 points</span></li>
              <li>Mismatch with two cards you've seen before: <span className="font-medium text-red-600">-2 points</span></li>
            </ul>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-indigo-100 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3 mt-1 flex-shrink-0">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg text-indigo-600">How to Play:</h3>
            <ol className="list-decimal ml-4 sm:ml-5 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1">
              <li>Click on any card to flip it and reveal its number</li>
              <li>Try to remember the position and value of each card</li>
              <li>Click another card to find its matching pair</li>
              <li>If the cards match, they'll disappear and you'll earn points</li>
              <li>If they don't match, they'll flip back over</li>
              <li>Be careful! If you mismatch two cards you've seen before, you'll lose points</li>
              <li>Try to match all pairs with the highest score possible!</li>
            </ol>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-400 mt-2 sm:mt-4 text-sm sm:text-base">
          <p className="font-medium text-yellow-800">
            <span className="font-bold">Memory Tip:</span> Try to create a mental grid and remember card positions by their coordinates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameRules;