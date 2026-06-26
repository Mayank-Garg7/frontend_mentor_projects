import { useState } from 'react';
import type { GameState, Choice } from './types';
import { getComputerChoice, getResult } from './gameLogic';
import ScoreBoard from './components/ScoreBoard';
import PickingPhase from './components/PickingPhase';
import ResultPhase from './components/ResultPhase';
import RulesModal from './components/RulesModal';

const SCORE_KEY = 'rps_score';

function loadScore(): number {
  const saved = localStorage.getItem(SCORE_KEY);
  return saved ? parseInt(saved, 10) : 0;
}

function saveScore(score: number) {
  localStorage.setItem(SCORE_KEY, String(score));
}

const initialState = (score: number): GameState => ({
  phase: 'picking',
  playerChoice: null,
  computerChoice: null,
  result: null,
  score,
});

export default function App() {
  const [game, setGame] = useState<GameState>(() => initialState(loadScore()));
  const [showRules, setShowRules] = useState(false);

  function handlePick(choice: Choice) {
    const computer = getComputerChoice();
    const result = getResult(choice, computer);
    const newScore = Math.max(0, game.score + (result === 'win' ? 1 : result === 'lose' ? -1 : 0));
    saveScore(newScore);

    setGame({
      phase: 'result',
      playerChoice: choice,
      computerChoice: computer,
      result,
      score: newScore,
    });
  }

  function handlePlayAgain() {
    setGame((prev) => initialState(prev.score));
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-6 lg:py-8">
      <div className="w-full max-w-[700px]">
        <ScoreBoard score={game.score} />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center w-full mt-10 lg:mt-16">
        {game.phase === 'picking' && (
          <PickingPhase onPick={handlePick} />
        )}
        {game.phase === 'result' && game.playerChoice && (
          <ResultPhase
            playerChoice={game.playerChoice}
            computerChoice={game.computerChoice}
            result={game.result}
            onPlayAgain={handlePlayAgain}
          />
        )}
      </main>

      <footer className="mt-8 flex justify-center lg:justify-end w-full max-w-[700px]">
        <button
          onClick={() => setShowRules(true)}
          className="border-2 border-white/50 text-white text-sm font-bold tracking-[0.2em] uppercase px-10 py-2 rounded-lg hover:bg-white hover:text-[hsl(229,25%,31%)] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
        >
          Rules
        </button>
      </footer>

      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
    </div>
  );
}
