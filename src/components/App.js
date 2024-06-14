import React, { useState, useEffect } from 'react';
import Timer from './timer';
import Controls from './Controls';
import SessionLength from './Session';
import BreakLength from './BreakLength';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(prev => prev);
      setTimeout(() => setIsVisible(true), 1000); // Delay before making it visible again
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsAnimating(false);
      }, 500); // Ensure this matches the transition duration
    }
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(onBreak ? breakLength * 60 : sessionLength * 60);
    }
  }, [sessionLength, breakLength, onBreak]);

  const resetTimer = () => {
    setIsRunning(false);
    setOnBreak(false);
    setTimeLeft(sessionLength * 60);
  };

  const switchTimer = () => {
    setIsRunning(false);
    setOnBreak(!onBreak);
    setTimeLeft(onBreak ? sessionLength * 60 : breakLength * 60);
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 p-2 md:p-0 w-screen h-screen text-white">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mt-4 w-full text-center">Pomodoro Timer</h1>
      <p className="text-sm md:text-base lg:text-lg text-emerald-400 text-center">Designed and Coded by Giho Ju</p>
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
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-2 mb-4 md:px-4 transition-all ${isAnimating ? 'opacity-0' : 'opacity-100'}`} style={{ display: isVisible ? 'grid' : 'none' }}>
        <BreakLength breakLength={breakLength} setBreakLength={setBreakLength} isRunning={isRunning} />
        <SessionLength sessionLength={sessionLength} setSessionLength={setSessionLength} isRunning={isRunning} />
      </div>
    </div>
  );
};

export default App;
