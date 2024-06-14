import React, { useEffect, useState } from 'react';
import { formatTime } from './format';

const Timer = ({ timeLeft, setTimeLeft, isRunning, onBreak, setOnBreak, sessionLength, breakLength, setIsRunning }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isRunning) {
      setIsExpanded(true); // Expand the main div
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev === 0) {
            if (onBreak) {
              setOnBreak(false);
              playSound();
              setIsRunning(!isRunning);
              return sessionLength * 60;
            } else {
              setOnBreak(true);
              playSound();
              setIsRunning(!isRunning);
              return breakLength * 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setIsExpanded(false); // Collapse the main div
      if (timer) {
        clearInterval(timer);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, onBreak, sessionLength, breakLength, setTimeLeft]);

  const playSound = () => {
    const audio = document.getElementById('alarm');
    audio.currentTime = 0;
    audio.play().catch(error => console.error(`Error playing sound: ${error.message}`));
  };

  return (
    <div id="main-div" className={`flex flex-col items-center bg-gray-800 justify-center p-4 md:p-6 rounded-lg shadow-lg mt-4 md:mt-8 w-full ${isExpanded ? 'animate-heightExpand' : 'animate-heightCollapse'}`}>
      <h2 id="timer-label" className="text-2xl md:text-4xl font-bold mb-4 w-full text-center">
        {onBreak ? 'Break' : 'Session'}
      </h2>
      <div id="time-left" className="text-7xl md:text-[200px] font-mono text-center">
        {formatTime(timeLeft)}
      </div>
      <audio id="alarm" className="clip" src="/sounds/DigitalAlarm.mp3" preload="auto"></audio>
    </div>
  );
};

export default Timer;
