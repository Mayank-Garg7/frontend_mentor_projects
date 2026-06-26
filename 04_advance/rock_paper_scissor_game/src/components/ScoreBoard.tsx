interface ScoreBoardProps {
  score: number;
}

export default function ScoreBoard({ score }: ScoreBoardProps) {
  return (
    <header className="flex items-center justify-between border-2 border-[hsl(246,11%,37%)] rounded-xl px-5 py-4 lg:px-6 lg:py-5 max-w-[700px] mx-auto">
      <img src="/logo.svg" alt="Rock Paper Scissors" className="h-12 lg:h-[72px]" />
      <div className="bg-white rounded-lg flex flex-col items-center justify-center px-8 py-2 lg:px-10 lg:py-3">
        <span
          className="text-[10px] lg:text-sm font-bold tracking-[0.15em] uppercase"
          style={{ color: 'hsl(229, 64%, 46%)' }}
        >
          Score
        </span>
        <span
          className="text-4xl lg:text-6xl font-bold leading-none"
          style={{ color: 'hsl(229, 25%, 31%)' }}
        >
          {score}
        </span>
      </div>
    </header>
  );
}
