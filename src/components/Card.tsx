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
        w-12 h-16 xs:w-14 xs:h-20 sm:w-16 sm:h-24 md:w-20 md:h-28 lg:w-24 lg:h-32 perspective-1000 cursor-pointer
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
            animate-pulse-subtle flex items-center justify-center"
        >
          <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-300 bg-opacity-30 flex items-center justify-center">
            <span className="text-white font-bold text-sm xs:text-base">?</span>
          </div>
        </div>
        <div
          className="absolute w-full h-full bg-white rounded-lg backface-hidden rotate-y-180
            flex items-center justify-center text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-indigo-600 
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