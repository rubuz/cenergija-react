import { useEffect, useState } from "react";
import "./clock.css";

const Clock = () => {
  const [hourDeg, setHourDeg] = useState(0);
  const [minuteDeg, setMinuteDeg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const secondsRatio = now.getSeconds() / 60;
      const minutesRatio = (secondsRatio + now.getMinutes()) / 60;
      const hoursRatio = (minutesRatio + now.getHours()) / 12;
      setHourDeg(Math.round(hoursRatio * 360));
      setMinuteDeg(Math.round(minutesRatio * 360));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [hourDeg, minuteDeg]);

  const rotateHour = `rotate(${hourDeg}deg)`;
  const rotateMinute = `rotate(${minuteDeg}deg)`;

  return (
    <div className="-z-20 my-10 w-full">
      <div className="relative flex aspect-square h-[600px] items-center justify-center rounded-full bg-transparent">
        <div className="indicator">
          <span style={{ transform: rotateHour }} className="hand hour"></span>
          <span
            style={{ transform: rotateMinute }}
            className="hand minute"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
