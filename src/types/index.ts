// Types pour le compteur

export type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'email' | 'phone';

export interface CounterState {
  value: number;
  history: HistoryEntry[];
}

export interface HistoryEntry {
  id: string;
  action: string;
  previousValue: number;
  newValue: number;
  timestamp: Date;
}

export interface CounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  title?: string;
}

export interface CounterDisplayProps {
  value: number;
  min?: number;
  max?: number;
}

export interface CounterControlsProps {
  onIncrement: (amount: number) => void;
  onDecrement: (amount: number) => void;
  onReset: () => void;
  disabled?: boolean;
}

export interface CounterHistoryProps {
  history: HistoryEntry[];
  onClearHistory: () => void;
}

export type CounterAction = 
  | { type: 'INCREMENT'; amount: number }
  | { type: 'DECREMENT'; amount: number }
  | { type: 'RESET' }
  | { type: 'SET'; value: number };