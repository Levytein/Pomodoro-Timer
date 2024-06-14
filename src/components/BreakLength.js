import React from 'react';

const BreakLength = ({ breakLength, setBreakLength }) => {
  const increaseBreak = () => {
    setBreakLength(prev => prev + 1);
  };

  const decreaseBreak = () => {
    setBreakLength(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg w-full">
      <h3 className="text-lg md:text-2xl font-bold">Break Length</h3>
      <div className="flex mt-4">
        <button
          id='break-decrement'
          onClick={decreaseBreak}
          className="shadow-custom-red text-3xl md:text-5xl bg-red-500 hover:bg-red-700 text-white font-bold py-2 md:pt-5 md:pb-6 px-4 md:px-14 rounded-full"
        >
          -
        </button>
        <span
          id='break-length'
          className="mx-4 md:mx-6 mt-1 text-5xl md:text-7xl"
        >
          {breakLength}
        </span>
        <button
          id='break-increment'
          onClick={increaseBreak}
          className="shadow-custom-green text-3xl md:text-5xl bg-green-500 hover:bg-green-700 text-white font-bold py-2 md:pt-5 md:pb-6 px-4 md:px-14 rounded-full"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BreakLength;
