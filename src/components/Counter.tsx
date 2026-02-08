import { useEffect } from 'react';
import type { CounterProps } from '../types';
import { useCounter } from '../hooks/useCounter';
import { CounterDisplay } from './CounterDisplay';
import { CounterControls } from './CounterControls';
import { CounterHistory } from './CounterHistory';

export const Counter = ({ 
  initialValue = 0, 
  min = -100, 
  max = 100,
  title = "Compteur Simple"
}: CounterProps) => {
  const {
    count,
    history,
    increment,
    decrement,
    reset,
    clearHistory,
    isAtMin,
    isAtMax,
  } = useCounter({ initialValue, min, max });

  // Gestion des raccourcis clavier
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          increment(1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          decrement(1);
          break;
        case 'ArrowRight':
          event.preventDefault();
          increment(5);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          decrement(5);
          break;
        case 'r':
        case 'R':
          event.preventDefault();
          reset();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [increment, decrement, reset]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Titre */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">Projet 2/100 • useState en action</p>
      </div>

      {/* Grille principale */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Colonne gauche - Display et Controls */}
        <div className="space-y-6">
          <CounterDisplay value={count} min={min} max={max} />
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <CounterControls
              onIncrement={increment}
              onDecrement={decrement}
              onReset={reset}
              disabled={false}
            />
          </div>

          {/* Alertes */}
          {isAtMax && (
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <div className="flex items-center">
                <span className="text-2xl mr-2">⚠️</span>
                <div>
                  <p className="text-sm font-semibold text-orange-700">Limite maximale atteinte</p>
                  <p className="text-xs text-orange-600">Valeur : {max}</p>
                </div>
              </div>
            </div>
          )}

          {isAtMin && (
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <div className="flex items-center">
                <span className="text-2xl mr-2">⚠️</span>
                <div>
                  <p className="text-sm font-semibold text-orange-700">Limite minimale atteinte</p>
                  <p className="text-xs text-orange-600">Valeur : {min}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Colonne droite - Historique */}
        <div>
          <CounterHistory history={history} onClearHistory={clearHistory} />
        </div>
      </div>

      {/* Statistiques */}
      <div className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg p-6 text-white">
        <h3 className="text-lg font-bold mb-4">📊 Statistiques</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/20 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">{count}</div>
            <div className="text-xs opacity-90">Valeur actuelle</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">{history.length}</div>
            <div className="text-xs opacity-90">Actions totales</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">{Math.abs(count - initialValue)}</div>
            <div className="text-xs opacity-90">Distance initiale</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">
              {count >= 0 ? '😊' : '😢'}
            </div>
            <div className="text-xs opacity-90">État</div>
          </div>
        </div>
      </div>
    </div>
  );
};