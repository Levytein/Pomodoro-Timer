import React, { useState } from 'react';
import Timer from './timer';
import Controls from './Controls';
import SessionLength from './Session';
import BreakLength from './BreakLength';

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [onBreak, setOnBreak] = useState(false);

  const resetTimer = () => {
    if(!onBreak) {
      setIsRunning(false);
      setOnBreak(false);
      setTimeLeft(sessionLength * 60);
    } else {
      setIsRunning(false);
      setOnBreak(true);
      setTimeLeft(breakLength * 60);
    }
  };

  const switchTimer = () => {
    setIsRunning(false);
    setOnBreak(!onBreak);
    setTimeLeft(onBreak ? sessionLength * 60 : breakLength * 60);
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 p-2 md:p-0 w-screen h-screen text-white">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mt-4 w-full text-center">Pomodoro Timer</h1>
      <p className='text-sm md:text-base lg:text-lg text-emerald-400 text-center'>Designed and Coded by Giho Ju</p>
      <Timer
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        onBreak={onBreak}
        setOnBreak={setOnBreak}
        sessionLength={sessionLength}
        breakLength={breakLength}
      />
      <Controls
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        resetTimer={resetTimer}
        switchTimer={switchTimer}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-2 md:px-4">
        <BreakLength breakLength={breakLength} setBreakLength={setBreakLength} />
        <SessionLength sessionLength={sessionLength} setSessionLength={setSessionLength} />
      </div>
    </div>
  );
};

export default App;
