import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import DifficultySelector from './components/DifficultySelector';
import GameBoard from './components/GameBoard';
import GameRules from './components/GameRules';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | null>(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('highScore');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [previousScore, setPreviousScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('highScore', score.toString());
    }
  }, [score, highScore]);

  const handleNewGame = () => {
    setPreviousScore(score);
    setGameStarted(false);
    setDifficulty(null);
    setScore(0);
    setShowRules(true);
  };

  const handleSelectDifficulty = (selectedDifficulty: 'easy' | 'medium' | 'hard') => {
    setDifficulty(selectedDifficulty);
    setGameStarted(true);
    setShowRules(false);
  };

  const handleUpdateScore = (points: number) => {
    setScore(prevScore => prevScore + points);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar score={score} highScore={highScore} previousScore={previousScore} />
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
          <button
            onClick={handleNewGame}
            className="px-4 sm:px-6 py-2 bg-indigo-600 text-white text-sm sm:text-base rounded-lg hover:bg-indigo-700 transition transform hover:scale-105"
          >
            New Game
          </button>
          {gameStarted && (
            <button
              onClick={() => setGameStarted(false)}
              className="px-4 sm:px-6 py-2 bg-gray-600 text-white text-sm sm:text-base rounded-lg hover:bg-gray-700 transition transform hover:scale-105"
            >
              Restart
            </button>
          )}
          <button
            onClick={() => setShowRules(!showRules)}
            className="px-4 sm:px-6 py-2 bg-green-600 text-white text-sm sm:text-base rounded-lg hover:bg-green-700 transition transform hover:scale-105"
          >
            {showRules ? 'Hide Rules' : 'Show Rules'}
          </button>
        </div>

        {showRules && <GameRules />}

        {!gameStarted ? (
          <DifficultySelector onSelectDifficulty={handleSelectDifficulty} />
        ) : (
          difficulty && <GameBoard difficulty={difficulty} onUpdateScore={handleUpdateScore} />
        )}
      </div>
    </div>
  );
}

export default App;