import type { Choice } from '../types';
import ChoiceButton from './ChoiceButton';

interface PickingPhaseProps {
  onPick: (choice: Choice) => void;
}

export default function PickingPhase({ onPick }: PickingPhaseProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Triangle layout */}
      <div className="relative" style={{ width: 300, height: 270 }}>
        <img
          src="/bg-triangle.svg"
          alt=""
          className="absolute"
          style={{ width: 220, height: 196, top: 36, left: 40 }}
        />
        {/* Paper — top left */}
        <div className="absolute" style={{ top: 0, left: 10 }}>
          <ChoiceButton choice="paper" onClick={() => onPick('paper')} size="md" />
        </div>
        {/* Scissors — top right */}
        <div className="absolute" style={{ top: 0, right: 10 }}>
          <ChoiceButton choice="scissors" onClick={() => onPick('scissors')} size="md" />
        </div>
        {/* Rock — bottom center */}
        <div className="absolute" style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
          <ChoiceButton choice="rock" onClick={() => onPick('rock')} size="md" />
        </div>
      </div>
    </div>
  );
}
