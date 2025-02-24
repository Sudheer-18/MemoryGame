import React from 'react';

interface CardProps {
  value: number;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ value, isFlipped, isMatched, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-32 perspective-1000 cursor-pointer
        transform transition-all duration-500 ease-in-out
        hover:scale-105
        ${isMatched ? 'animate-fadeOut invisible' : ''}
      `}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d
          ${isFlipped ? 'rotate-y-180 animate-flip' : ''}
        `}
      >
        <div 
          className="absolute w-full h-full bg-gradient-to-br from-indigo-500 to-indigo-700 
            rounded-lg backface-hidden shadow-md hover:shadow-xl transition-shadow
            animate-pulse-subtle"
        />
        <div
          className="absolute w-full h-full bg-white rounded-lg backface-hidden rotate-y-180
            flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-bold text-indigo-600 
            shadow-lg border-2 border-indigo-200
            animate-appear"
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export default Card;