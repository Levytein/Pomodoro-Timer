import React, { useEffect } from 'react';
import { formatTime } from './format';

const Timer = ({ timeLeft, setTimeLeft, isRunning, onBreak, setOnBreak, sessionLength, breakLength, isPaused }) => {
  useEffect(() => {
    let timer = null;
    if (isRunning && !isPaused) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev === 0) {
            if (onBreak) {
              setOnBreak(false);
              playSound();
              return sessionLength * 60;
            } else {
              setOnBreak(true);
              playSound();
              return breakLength * 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timer) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, onBreak, sessionLength, breakLength, setTimeLeft, isPaused]);

  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(onBreak ? breakLength * 60 : sessionLength * 60);
    }
  }, [sessionLength, breakLength, isRunning, onBreak, setTimeLeft]);

  const playSound = () => {
    const audio = document.getElementById('alarm');
    audio.currentTime = 0;
    audio.play().catch(error => console.error(`Error playing sound: ${error.message}`));
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 justify-center p-4 md:p-6 rounded-lg shadow-lg mt-4 md:mt-8 w-full h-1/2">
      <h2 id="timer-label" className="text-2xl md:text-4xl font-bold mb-4 w-full text-center">
        {onBreak ? 'Break' : 'Session'}
      </h2>
      <div id="time-left" className="text-7xl md:text-[200px] font-mono">
        {formatTime(timeLeft)}
      </div>
      <audio id="alarm" className="clip" src="/sounds/DigitalAlarm.mp3" preload="auto"></audio>
    </div>
  );
};

export default Timer;
