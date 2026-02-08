import type { CounterControlsProps } from '../types';

export const CounterControls = ({ 
  onIncrement, 
  onDecrement, 
  onReset,
  disabled = false 
}: CounterControlsProps) => {
  const buttonBaseClass = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

  return (
    <div className="space-y-4">
      {/* Boutons d'incrémentation */}
      <div>
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Incrémenter</h3>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => onIncrement(1)}
            disabled={disabled}
            className={`${buttonBaseClass} bg-green-500 hover:bg-green-600 text-white`}
          >
            +1
          </button>
          <button
            onClick={() => onIncrement(5)}
            disabled={disabled}
            className={`${buttonBaseClass} bg-green-600 hover:bg-green-700 text-white`}
          >
            +5
          </button>
          <button
            onClick={() => onIncrement(10)}
            disabled={disabled}
            className={`${buttonBaseClass} bg-green-700 hover:bg-green-800 text-white`}
          >
            +10
          </button>
        </div>
      </div>

      {/* Boutons de décrémentation */}
      <div>
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Décrémenter</h3>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => onDecrement(1)}
            disabled={disabled}
            className={`${buttonBaseClass} bg-red-500 hover:bg-red-600 text-white`}
          >
            -1
          </button>
          <button
            onClick={() => onDecrement(5)}
            disabled={disabled}
            className={`${buttonBaseClass} bg-red-600 hover:bg-red-700 text-white`}
          >
            -5
          </button>
          <button
            onClick={() => onDecrement(10)}
            disabled={disabled}
            className={`${buttonBaseClass} bg-red-700 hover:bg-red-800 text-white`}
          >
            -10
          </button>
        </div>
      </div>

      {/* Bouton reset */}
      <div>
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Actions</h3>
        <button
          onClick={onReset}
          disabled={disabled}
          className={`${buttonBaseClass} w-full bg-gray-600 hover:bg-gray-700 text-white`}
        >
          🔄 Réinitialiser
        </button>
      </div>

      {/* Raccourcis clavier */}
      <div className="bg-blue-50 rounded-lg p-3 mt-4">
        <h4 className="text-xs font-semibold text-blue-700 mb-2">💡 Raccourcis clavier</h4>
        <div className="text-xs text-blue-600 space-y-1">
          <div>↑ : +1 | ↓ : -1</div>
          <div>→ : +5 | ← : -5</div>
          <div>R : Reset</div>
        </div>
      </div>
    </div>
  );
};