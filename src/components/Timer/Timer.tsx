'use client'
import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [time, setTime] = useState({ minutes: 2, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      if (time.minutes === 0 && time.seconds === 0) {
        clearInterval(timer);
      } else {
        setTime((prevTime) => {
          if (prevTime.seconds === 0) {
            return { minutes: prevTime.minutes - 1, seconds: 59 };
          } else {
            return { minutes: prevTime.minutes, seconds: prevTime.seconds - 1 };
          }
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <p style={{fontSize:12}}>
      {`${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')} left`}
    </p>
  );
};

export default Timer;
