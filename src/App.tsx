import { Counter } from './components/Counter';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🔢 Compteur Simple
          </h1>
          <p className="text-gray-600 text-lg mb-2">
            Projet 2/100 • React + TypeScript + useState
          </p>
          <p className="text-gray-500 text-sm">
            Découvre le hook useState et la gestion du state local
          </p>
        </div>

        {/* Compteur principal */}
        <Counter 
          initialValue={0}
          min={-100}
          max={100}
          title="Mon Premier Compteur"
        />

        {/* Section explicative */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            📚 Concepts React abordés
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* useState */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                <span>🎯</span>
                useState Hook
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <div>• Gestion du state local</div>
                <div>• Mise à jour du state</div>
                <div>• State avec objets complexes</div>
                <div>• Multiple states</div>
              </div>
              <div className="mt-3 bg-white rounded p-2 font-mono text-xs">
                const [count, setCount] = useState(0);
              </div>
            </div>

            {/* Custom Hooks */}
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <span>🔧</span>
                Custom Hooks
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <div>• Logique réutilisable</div>
                <div>• Séparation des responsabilités</div>
                <div>• useCounter custom hook</div>
                <div>• Multiple return values</div>
              </div>
              <div className="mt-3 bg-white rounded p-2 font-mono text-xs">
                const useCounter = () =&gt; &#123;...&#125;
              </div>
            </div>

            {/* useEffect */}
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-700 mb-3 flex items-center gap-2">
                <span>⚡</span>
                useEffect & Events
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <div>• Event listeners</div>
                <div>• Keyboard shortcuts</div>
                <div>• Cleanup functions</div>
                <div>• Dependencies array</div>
              </div>
              <div className="mt-3 bg-white rounded p-2 font-mono text-xs">
                useEffect(() =&gt; &#123;...&#125;, [deps]);
              </div>
            </div>

            {/* useCallback */}
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-semibold text-orange-700 mb-3 flex items-center gap-2">
                <span>🚀</span>
                Performance
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <div>• useCallback hook</div>
                <div>• Memoization</div>
                <div>• Optimisation des renders</div>
                <div>• Prévenir re-créations</div>
              </div>
              <div className="mt-3 bg-white rounded p-2 font-mono text-xs">
                useCallback(() =&gt; &#123;...&#125;, [deps]);
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-8 bg-gray-900 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">💻 Exemples de code</h3>
          
          <div className="space-y-4">
            {/* Example 1 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">1. État simple avec useState</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`const [count, setCount] = useState(0);

// Incrémenter
setCount(count + 1);

// Avec fonction callback (recommandé)
setCount(prevCount => prevCount + 1);`}</code>
              </pre>
            </div>

            {/* Example 2 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">2. État avec objet</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`const [state, setState] = useState({
  value: 0,
  history: []
});

// Mise à jour partielle
setState(prev => ({
  ...prev,
  value: prev.value + 1
}));`}</code>
              </pre>
            </div>

            {/* Example 3 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">3. Custom Hook useCounter</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  return { count, increment };
};`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Next Project */}
        <div className="mt-8 bg-linear-to-r from-green-500 to-teal-500 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">🚀 Prochaine étape</h3>
          <p className="mb-4">
            Projet 3 : Liste de Tâches Basique (map, key props, array state)
          </p>
          <button className="px-6 py-2 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Voir le projet suivant →
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;