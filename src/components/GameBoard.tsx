import React, { useState, useEffect } from 'react';
import Card from './Card';

interface GameBoardProps {
  difficulty: 'easy' | 'medium' | 'hard';
  onUpdateScore: (points: number) => void;
}

interface CardState {
  value: number;
  seenCount: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ difficulty, onUpdateScore }) => {
  const getCardCount = () => {
    switch (difficulty) {
      case 'easy': return 30;
      case 'medium': return 50;
      case 'hard': return 100;
      default: return 30;
    }
  };

  const [cards, setCards] = useState<CardState[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [seenIndices, setSeenIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    const cardCount = getCardCount();
    const values = Array.from({ length: cardCount / 2 }, (_, i) => i + 1);
    const pairs = [...values, ...values];
    const shuffledCards = shuffleArray(pairs).map(value => ({ value, seenCount: 0 }));
    setCards(shuffledCards);
    setFlippedIndices([]);
    setMatchedPairs([]);
    setSeenIndices(new Set());
  }, [difficulty]);

  const shuffleArray = (array: number[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleCardClick = (index: number) => {
    if (flippedIndices.length === 2 || flippedIndices.includes(index) || matchedPairs.includes(cards[index].value)) {
      return;
    }

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    // Update seen count for the card
    const updatedCards = [...cards];
    updatedCards[index] = {
      ...updatedCards[index],
      seenCount: updatedCards[index].seenCount + 1
    };
    setCards(updatedCards);

    // Track seen cards
    if (!seenIndices.has(index)) {
      setSeenIndices(prev => new Set(prev).add(index));
    }

    if (newFlippedIndices.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndices;
      
      if (cards[firstIndex].value === cards[secondIndex].value) {
        // Match found
        setMatchedPairs([...matchedPairs, cards[firstIndex].value]);
        onUpdateScore(5);
      } else {
        // No match - check if both cards were seen before
        const bothCardsSeen = 
          seenIndices.has(firstIndex) && 
          seenIndices.has(secondIndex) && 
          cards[firstIndex].seenCount > 1 && 
          cards[secondIndex].seenCount > 1;
        
        if (bothCardsSeen) {
          // Penalize for mismatching with previously seen cards
          onUpdateScore(-2);
        }
      }
      
      setTimeout(() => setFlippedIndices([]), 1000);
    }
  };

  const getGridCols = () => {
    switch (difficulty) {
      case 'easy': 
        return 'grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6';
      case 'medium': 
        return 'grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10';
      case 'hard': 
        return 'grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12';
      default: 
        return 'grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6';
    }
  };

  // Calculate progress
  const totalPairs = cards.length / 2;
  const matchedCount = matchedPairs.length;
  const progressPercentage = totalPairs > 0 ? (matchedCount / totalPairs) * 100 : 0;

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4">
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 mb-3 sm:mb-6 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 sm:h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="text-center mb-4 sm:mb-6">
        <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
          Progress: {matchedCount} / {totalPairs} pairs matched ({Math.round(progressPercentage)}%)
        </p>
      </div>

      <div className={`grid ${getGridCols()} gap-1 xs:gap-2 sm:gap-3 md:gap-4 justify-items-center`}>
        {cards.map((card, index) => (
          <Card
            key={index}
            value={card.value}
            isFlipped={flippedIndices.includes(index)}
            isMatched={matchedPairs.includes(card.value)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;