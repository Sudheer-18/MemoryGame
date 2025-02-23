import React, { useState, useEffect } from 'react';
import Card from './Card';

interface GameBoardProps {
  difficulty: 'easy' | 'medium' | 'hard';
  onUpdateScore: (points: number) => void;
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

  const [cards, setCards] = useState<number[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);

  useEffect(() => {
    const cardCount = getCardCount();
    const values = Array.from({ length: cardCount / 2 }, (_, i) => i + 1);
    const pairs = [...values, ...values];
    setCards(shuffleArray(pairs));
    setFlippedIndices([]);
    setMatchedPairs([]);
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
    if (flippedIndices.length === 2 || flippedIndices.includes(index) || matchedPairs.includes(cards[index])) {
      return;
    }

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndices;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedPairs([...matchedPairs, cards[firstIndex]]);
        onUpdateScore(5);
      } else {
        onUpdateScore(-2);
      }
      setTimeout(() => setFlippedIndices([]), 1000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-6 gap-4 justify-items-center">
        {cards.map((card, index) => (
          <Card
            key={index}
            value={card}
            isFlipped={flippedIndices.includes(index)}
            isMatched={matchedPairs.includes(card)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;