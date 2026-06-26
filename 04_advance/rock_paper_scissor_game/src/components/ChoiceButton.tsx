import type { Choice } from '../types';
import { getChoiceStyles } from '../gameLogic';

interface ChoiceButtonProps {
  choice: Choice;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  isWinner?: boolean;
  disabled?: boolean;
}

const sizeConfig = {
  sm: { outer: 96, inner: 64, icon: 32 },
  md: { outer: 130, inner: 88, icon: 48 },
  lg: { outer: 160, inner: 108, icon: 56 },
};

export default function ChoiceButton({
  choice,
  onClick,
  size = 'md',
  isWinner = false,
  disabled = false,
}: ChoiceButtonProps) {
  const styles = getChoiceStyles(choice);
  const cfg = sizeConfig[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative rounded-full flex items-center justify-center transition-transform focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 ${
        onClick && !disabled ? 'hover:scale-105 active:scale-95 cursor-pointer' : 'cursor-default'
      } ${isWinner ? 'winner-glow' : ''}`}
      style={{
        width: cfg.outer,
        height: cfg.outer,
        background: styles.gradient,
        boxShadow: styles.shadow,
        flexShrink: 0,
      }}
      aria-label={choice}
    >
      {/* Inner white circle */}
      <div
        className="rounded-full bg-white flex items-center justify-center"
        style={{
          width: cfg.inner,
          height: cfg.inner,
          boxShadow: 'inset 0 4px 0 rgba(0,0,0,0.18)',
        }}
      >
        <img
          src={`/icon-${choice}.svg`}
          alt={choice}
          style={{ width: cfg.icon, height: cfg.icon }}
          draggable={false}
        />
      </div>
    </button>
  );
}
