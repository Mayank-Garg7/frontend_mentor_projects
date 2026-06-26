import type { Choice, GameResult } from './types';

const CHOICES: Choice[] = ['rock', 'paper', 'scissors'];

export function getComputerChoice(): Choice {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

export function getResult(player: Choice, computer: Choice): GameResult {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) {
    return 'win';
  }
  return 'lose';
}

export function getChoiceStyles(choice: Choice): {
  gradient: string;
  shadow: string;
  borderColor: string;
} {
  switch (choice) {
    case 'rock':
      return {
        gradient: 'linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(347, 75%, 35%))',
        shadow: '0 6px 0 hsl(347, 75%, 35%)',
        borderColor: 'hsl(349, 71%, 52%)',
      };
    case 'paper':
      return {
        gradient: 'linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(229, 64%, 46%))',
        shadow: '0 6px 0 hsl(229, 64%, 46%)',
        borderColor: 'hsl(230, 89%, 62%)',
      };
    case 'scissors':
      return {
        gradient: 'linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(28, 76%, 44%))',
        shadow: '0 6px 0 hsl(28, 76%, 44%)',
        borderColor: 'hsl(39, 89%, 49%)',
      };
  }
}

export const CHOICE_LABELS: Record<Choice, string> = {
  rock: 'ROCK',
  paper: 'PAPER',
  scissors: 'SCISSORS',
};
