import { useState, useCallback } from 'react';
import { HistoryEntry } from '../types';

interface UseCounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
}

export const useCounter = ({ 
  initialValue = 0, 
  min = -100, 
  max = 100 
}: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const addToHistory = useCallback((action: string, prevValue: number, newValue: number) => {
    const entry: HistoryEntry = {
      id: Date.now().toString(),
      action,
      previousValue: prevValue,
      newValue,
      timestamp: new Date(),
    };
    setHistory(prev => [entry, ...prev].slice(0, 10)); // Garder seulement les 10 dernières
  }, []);

  const increment = useCallback((amount: number = 1) => {
    setCount(prevCount => {
      const newValue = Math.min(prevCount + amount, max);
      if (newValue !== prevCount) {
        addToHistory(`+${amount}`, prevCount, newValue);
      }
      return newValue;
    });
  }, [max, addToHistory]);

  const decrement = useCallback((amount: number = 1) => {
    setCount(prevCount => {
      const newValue = Math.max(prevCount - amount, min);
      if (newValue !== prevCount) {
        addToHistory(`-${amount}`, prevCount, newValue);
      }
      return newValue;
    });
  }, [min, addToHistory]);

  const reset = useCallback(() => {
    if (count !== initialValue) {
      addToHistory('Reset', count, initialValue);
      setCount(initialValue);
    }
  }, [count, initialValue, addToHistory]);

  const setValue = useCallback((value: number) => {
    const clampedValue = Math.max(min, Math.min(max, value));
    if (clampedValue !== count) {
      addToHistory(`Set to ${clampedValue}`, count, clampedValue);
      setCount(clampedValue);
    }
  }, [count, min, max, addToHistory]);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return {
    count,
    history,
    increment,
    decrement,
    reset,
    setValue,
    clearHistory,
    isAtMin: count === min,
    isAtMax: count === max,
  };
};