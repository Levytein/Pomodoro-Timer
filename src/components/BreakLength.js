import React from 'react';

const BreakLength = ({ breakLength, setBreakLength, isRunning }) => {
  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) {
      value = 1;
    } else if (value < 1) {
      value = 1;
    } else if (value > 60) {
      value = 60;
    }
    setBreakLength(value);
  };

  const increaseBreak = () => {
    setBreakLength(prev => (prev < 60 ? prev + 1 : 60));
  };

  const decreaseBreak = () => {
    setBreakLength(prev => (prev > 1 ? prev - 1 : 1));
  };
  const triggerHidden=()=>
  {
      const breakdiv = document.getElementById('break-div');
  }
  return (
    <div id='break-div' className={`flex flex-col items-center bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg w-full transition-all ${isRunning ? 'fade-out' : ''}`}>
      <h3 className="text-lg md:text-2xl font-bold">Break Length</h3>
      <div className="flex mt-4">
        <button
          id="break-decrement"
          onClick={decreaseBreak}
          className="text-3xl md:text-5xl bg-red-500 hover:bg-red-700 text-white font-bold py-2 md:pt-5 md:pb-6 px-4 md:px-14 rounded-full"
        >
          -
        </button>
        <input
          id="break-length"
          type="number"
          value={breakLength}
          onChange={handleChange}
          className="mx-4 md:mx-6 mt-1 text-5xl md:text-7xl bg-gray-800 text-center text-white w-16 md:w-24 rounded"
          min="1"
          max="60"
        />
        <button
          id="break-increment"
          onClick={increaseBreak}
          className="text-3xl md:text-5xl bg-green-500 hover:bg-green-700 text-white font-bold py-2 md:pt-5 md:pb-6 px-4 md:px-14 rounded-full"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BreakLength;
