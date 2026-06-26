import { useEffect, useState } from 'react';
import type { Choice, GameResult } from '../types';
import ChoiceButton from './ChoiceButton';

interface ResultPhaseProps {
  playerChoice: Choice;
  computerChoice: Choice | null;
  result: GameResult | null;
  onPlayAgain: () => void;
}

export default function ResultPhase({
  playerChoice,
  computerChoice,
  result,
  onPlayAgain,
}: ResultPhaseProps) {
  const [showResult, setShowResult] = useState(false);
  const [showComputer, setShowComputer] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowComputer(true), 600);
    const t2 = setTimeout(() => setShowResult(true), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const resultLabel =
    result === 'win' ? 'YOU WIN' : result === 'lose' ? 'YOU LOSE' : 'DRAW';

  // Mobile layout
  const mobileLayout = (
    <div className="flex flex-col items-center gap-6 w-full lg:hidden">
      {/* Two choices row */}
      <div className="flex justify-around w-full max-w-sm">
        {/* Player */}
        <div className="flex flex-col items-center gap-4">
          <ChoiceButton
            choice={playerChoice}
            size="md"
            isWinner={showResult && result === 'win'}
          />
          <span className="text-white text-sm font-bold tracking-widest uppercase">You picked</span>
        </div>
        {/* Computer */}
        <div className="flex flex-col items-center gap-4">
          {showComputer && computerChoice ? (
            <ChoiceButton
              choice={computerChoice}
              size="md"
              isWinner={showResult && result === 'lose'}
            />
          ) : (
            <div
              className="rounded-full"
              style={{
                width: 130,
                height: 130,
                background: 'rgba(0,0,0,0.15)',
              }}
            />
          )}
          <span className="text-white text-sm font-bold tracking-widest uppercase">The house picked</span>
        </div>
      </div>

      {/* Result */}
      {showResult && (
        <div className="flex flex-col items-center gap-4 animate-fade-in">
          <p className="text-white text-5xl font-bold">{resultLabel}</p>
          <button
            onClick={onPlayAgain}
            className="bg-white text-[hsl(229,25%,31%)] font-bold text-sm tracking-widest uppercase px-14 py-3 rounded-lg hover:text-red-400 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );

  // Desktop layout
  const desktopLayout = (
    <div className="hidden lg:flex items-center justify-center gap-24 w-full max-w-4xl">
      {/* Player */}
      <div className="flex flex-col items-center gap-6">
        <ChoiceButton
          choice={playerChoice}
          size="lg"
          isWinner={showResult && result === 'win'}
        />
        <span className="text-white text-lg font-bold tracking-[0.2em] uppercase">You picked</span>
      </div>

      {/* Result center */}
      {showResult ? (
        <div className="flex flex-col items-center gap-6 min-w-[220px]">
          <p className="text-white text-5xl font-bold text-center leading-none">{resultLabel}</p>
          <button
            onClick={onPlayAgain}
            className="bg-white text-[hsl(229,25%,31%)] font-bold text-sm tracking-widest uppercase px-14 py-3 rounded-lg hover:text-red-400 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="min-w-[220px]" />
      )}

      {/* Computer */}
      <div className="flex flex-col items-center gap-6">
        {showComputer && computerChoice ? (
          <ChoiceButton
            choice={computerChoice}
            size="lg"
            isWinner={showResult && result === 'lose'}
          />
        ) : (
          <div
            className="rounded-full"
            style={{
              width: 160,
              height: 160,
              background: 'rgba(0,0,0,0.15)',
            }}
          />
        )}
        <span className="text-white text-lg font-bold tracking-[0.2em] uppercase">The house picked</span>
      </div>
    </div>
  );

  return (
    <>
      {mobileLayout}
      {desktopLayout}
    </>
  );
}
