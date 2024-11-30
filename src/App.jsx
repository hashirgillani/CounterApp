import { useState } from 'react';
import './App.css';

function App() {
  const [countvalue, setcount] = useState(0);

  const addValue = () => {
    setcount(countvalue + 1);
  };

  const subValue = () => {
    setcount(countvalue - 1);
  };

  const clearValue = () => {
    setcount(0);
  };

  return (
    <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Counter Value: {countvalue}</h1>
        <div className="space-x-4">
          <button
            onClick={addValue}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600"
          >
            Add Value
          </button>
          <button
            onClick={subValue}
            className="bg-violet-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600"
          >
            Subtract Value
          </button>
          <button
            onClick={clearValue}
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Clear Value
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
