import React from 'react';

const Controls = ({ isRunning, setIsRunning, resetTimer, switchTimer }) => {
  const handleStartStop = () => {
    setIsRunning(prev => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row my-4 md:my-8 w-full justify-center items-center">
      <button
        id='start_stop'
        onClick={handleStartStop}
        className={`text-lg md:text-2xl mx-1 md:mx-2 px-8 md:px-20 py-4 md:py-10 font-bold text-white rounded-lg ${isRunning ? 'bg-red-500 hover:bg-red-700 shadow-custom-red' : 'bg-green-500 hover:bg-green-700 shadow-custom-green'}`}
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button
        id='reset'
        onClick={resetTimer}
        className="shadow-custom-grey text-lg md:text-2xl mx-1 md:mx-2 px-8 md:px-20 py-4 md:py-10 font-bold text-white bg-gray-500 hover:bg-gray-700 rounded-lg"
      >
        Reset
      </button>
      <button
        id='switch'
        onClick={switchTimer}
        className="shadow-custom-cyan text-lg md:text-2xl mx-1 md:mx-2 px-8 md:px-20 py-4 md:py-10 font-bold text-white bg-cyan-500 hover:bg-cyan-700 rounded-lg"
      >
        Switch
      </button>
    </div>
  );
};

export default Controls;
