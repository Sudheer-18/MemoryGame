import React, { useState } from 'react';
import { Trophy, History, Star, Menu, X } from 'lucide-react';

interface NavbarProps {
  score: number;
  highScore: number;
  previousScore: number;
}

const Navbar: React.FC<NavbarProps> = ({ score, highScore, previousScore }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 text-white p-3 sm:p-4 shadow-lg">
      <div className="container mx-auto">
        {/* Desktop view */}
        <div className="hidden md:flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold">Memory Game</h1>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-base sm:text-xl">Score: {score}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
              <span className="text-base sm:text-xl">High Score: {highScore}</span>
            </div>
            <div className="flex items-center space-x-2">
              <History className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              <span className="text-base sm:text-xl">Previous: {previousScore}</span>
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="md:hidden flex justify-between items-center">
          <h1 className="text-xl font-bold">Memory Game</h1>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-indigo-700 transition"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-indigo-500 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span className="text-lg">Score: {score}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-300" />
                <span className="text-lg">High Score: {highScore}</span>
              </div>
              <div className="flex items-center space-x-2">
                <History className="w-5 h-5 text-gray-300" />
                <span className="text-lg">Previous: {previousScore}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;