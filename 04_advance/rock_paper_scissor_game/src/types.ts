export type Choice = 'rock' | 'paper' | 'scissors';
export type GameResult = 'win' | 'lose' | 'draw';

export interface GameState {
  phase: 'picking' | 'revealing' | 'result';
  playerChoice: Choice | null;
  computerChoice: Choice | null;
  result: GameResult | null;
  score: number;
}
