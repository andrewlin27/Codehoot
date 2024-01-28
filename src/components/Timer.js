import React, {useState, useEffect } from 'react'

const Timer = ({ initialTimeInSeconds }) => {

    const [time, setTime] = useState(initialTimeInSeconds);
    const [outOfTime, setOutOfTime] = useState(false);

    useEffect(() => {
      const timer = setInterval(() => {
        if (time > 0) {
          setTime((prevTime) => prevTime - 1);
        }
        else{
          setOutOfTime(true);
        }
        
      }, 1000);
    
        // Cleanup the interval when the component is unmounted
        return () => clearInterval(timer);
      }, [time]);
    
      const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      }

    return (
      <div>
        <div>
          <p>Time Remaining: {formatTime(time)}</p>
          {outOfTime && <p>Time's up!</p>}
        </div>
      </div>
    )
}

export default Timer