import React from 'react';
import { Trophy, History, Star } from 'lucide-react';

interface NavbarProps {
  score: number;
  highScore: number;
  previousScore: number;
}

const Navbar: React.FC<NavbarProps> = ({ score, highScore, previousScore }) => {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Memory Game</h1>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5" />
            <span className="text-xl">Score: {score}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-yellow-300" />
            <span className="text-xl">High Score: {highScore}</span>
          </div>
          <div className="flex items-center space-x-2">
            <History className="w-5 h-5 text-gray-300" />
            <span className="text-xl">Previous: {previousScore}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;