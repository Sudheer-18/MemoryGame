import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
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
  const [seenCards, setSeenCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const cardCount = getCardCount();
    const values = Array.from({ length: cardCount / 2 }, (_, i) => i + 1);
    const pairs = [...values, ...values];
    const shuffledCards = shuffleArray(pairs).map(value => ({ value, seenCount: 0 }));
    setCards(shuffledCards);
    setFlippedIndices([]);
    setMatchedPairs([]);
    setSeenCards(new Set());
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

    // Check if card has been seen before
    if (cards[index].seenCount > 0 && !matchedPairs.includes(cards[index].value)) {
      toast.error('Oops! Already seen this card (-1 point) 🤔', {
        duration: 2000,
        icon: '📚',
      });
      onUpdateScore(-1);
    }

    // Update seen count for the card
    const updatedCards = [...cards];
    updatedCards[index] = {
      ...updatedCards[index],
      seenCount: updatedCards[index].seenCount + 1
    };
    setCards(updatedCards);

    if (newFlippedIndices.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndices;
      
      if (cards[firstIndex].value === cards[secondIndex].value) {
        setMatchedPairs([...matchedPairs, cards[firstIndex].value]);
        toast.success('Perfect Match! Keep going! (+5 points) 🎯', {
          duration: 2000,
          icon: '🎉',
        });
        onUpdateScore(5);
      } else {
        toast('Try again! Practice makes perfect! 💪', {
          duration: 2000,
          icon: '📝',
          style: {
            background: '#4b5563',
          },
        });
      }
      
      setTimeout(() => setFlippedIndices([]), 1000);
    }
  };

  const getGridCols = () => {
    switch (difficulty) {
      case 'easy': return 'grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6';
      case 'medium': return 'grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8';
      case 'hard': return 'grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10';
      default: return 'grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className={`grid ${getGridCols()} gap-2 sm:gap-4 justify-items-center`}>
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