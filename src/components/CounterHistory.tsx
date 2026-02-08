import { CounterHistoryProps } from '../types';

export const CounterHistory = ({ history, onClearHistory }: CounterHistoryProps) => {
  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const getActionColor = (action: string) => {
    if (action.startsWith('+')) return 'text-green-600 bg-green-50';
    if (action.startsWith('-')) return 'text-red-600 bg-red-50';
    return 'text-gray-600 bg-gray-50';
  };

  const getActionIcon = (action: string) => {
    if (action.startsWith('+')) return '⬆️';
    if (action.startsWith('-')) return '⬇️';
    return '🔄';
  };

  if (history.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">📜 Historique</h3>
        <div className="text-center py-8 text-gray-400">
          <div className="text-4xl mb-2">📭</div>
          <p>Aucune action pour le moment</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">📜 Historique</h3>
        <button
          onClick={onClearHistory}
          className="text-xs text-red-600 hover:text-red-700 hover:underline"
        >
          Effacer
        </button>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {history.map((entry) => (
          <div
            key={entry.id}
            className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{getActionIcon(entry.action)}</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-semibold px-2 py-1 rounded ${getActionColor(entry.action)}`}>
                    {entry.action}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatTime(entry.timestamp)}
                  </span>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {entry.previousValue} → {entry.newValue}
                  <span className="text-gray-400 ml-2">
                    ({entry.newValue > entry.previousValue ? '+' : ''}{entry.newValue - entry.previousValue})
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {history.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 text-center">
            {history.length} action{history.length > 1 ? 's' : ''} enregistrée{history.length > 1 ? 's' : ''}
          </div>
        </div>
      )}
    </div>
  );
};