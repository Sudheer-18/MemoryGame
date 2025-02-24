import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import DifficultySelector from './components/DifficultySelector';
import GameBoard from './components/GameBoard';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | null>(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('highScore');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [previousScore, setPreviousScore] = useState(0);

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
  };

  const handleSelectDifficulty = (selectedDifficulty: 'easy' | 'medium' | 'hard') => {
    setDifficulty(selectedDifficulty);
    setGameStarted(true);
  };

  const handleUpdateScore = (points: number) => {
    setScore(prevScore => prevScore + points);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: '#2f8d46',
            color: '#fff',
            borderRadius: '8px',
            padding: '12px 20px',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
          success: {
            style: {
              background: '#2f8d46',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#2f8d46',
            },
          },
          error: {
            style: {
              background: '#dc4848',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#dc4848',
            },
          },
        }}
      />
      <Navbar score={score} highScore={highScore} previousScore={previousScore} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={handleNewGame}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition transform hover:scale-105"
          >
            New Game
          </button>
          {gameStarted && (
            <button
              onClick={() => setGameStarted(false)}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition transform hover:scale-105"
            >
              Restart
            </button>
          )}
        </div>

        {!gameStarted ? (
          <DifficultySelector onSelectDifficulty={handleSelectDifficulty} />
        ) : (
          difficulty && <GameBoard difficulty={difficulty} onUpdateScore={handleUpdateScore} />
        )}
      </div>
    </div>
  );
}

export default App