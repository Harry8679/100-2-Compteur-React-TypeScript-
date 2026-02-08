import { CounterDisplayProps } from '../types';

export const CounterDisplay = ({ value, min = -100, max = 100 }: CounterDisplayProps) => {
  // Déterminer la couleur en fonction de la valeur
  const getColorClass = () => {
    if (value === 0) return 'text-gray-700';
    if (value > 0) return 'text-green-600';
    return 'text-red-600';
  };

  // Déterminer la couleur de fond
  const getBgClass = () => {
    if (value === 0) return 'from-gray-100 to-gray-200';
    if (value > 0) return 'from-green-50 to-green-100';
    return 'from-red-50 to-red-100';
  };

  // Calculer le pourcentage pour la barre de progression
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`bg-gradient-to-br ${getBgClass()} rounded-2xl p-8 shadow-lg`}>
      {/* Valeur principale */}
      <div className="text-center mb-6">
        <div className={`text-8xl font-bold ${getColorClass()} transition-all duration-300 transform hover:scale-110`}>
          {value}
        </div>
        <div className="text-gray-500 text-sm mt-2">
          Valeur actuelle
        </div>
      </div>

      {/* Barre de progression */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ${
            value >= 0 ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-red-400 to-red-600'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Limites min/max */}
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>Min: {min}</span>
        <span>Max: {max}</span>
      </div>

      {/* Indicateurs visuels */}
      <div className="grid grid-cols-3 gap-2 mt-6">
        <div className={`text-center p-2 rounded-lg ${value < 0 ? 'bg-red-200' : 'bg-gray-100'}`}>
          <div className="text-xs text-gray-600">Négatif</div>
          <div className={`text-sm font-bold ${value < 0 ? 'text-red-600' : 'text-gray-400'}`}>
            {value < 0 ? '✓' : '−'}
          </div>
        </div>
        <div className={`text-center p-2 rounded-lg ${value === 0 ? 'bg-gray-300' : 'bg-gray-100'}`}>
          <div className="text-xs text-gray-600">Zéro</div>
          <div className={`text-sm font-bold ${value === 0 ? 'text-gray-700' : 'text-gray-400'}`}>
            {value === 0 ? '✓' : '−'}
          </div>
        </div>
        <div className={`text-center p-2 rounded-lg ${value > 0 ? 'bg-green-200' : 'bg-gray-100'}`}>
          <div className="text-xs text-gray-600">Positif</div>
          <div className={`text-sm font-bold ${value > 0 ? 'text-green-600' : 'text-gray-400'}`}>
            {value > 0 ? '✓' : '−'}
          </div>
        </div>
      </div>
    </div>
  );
};