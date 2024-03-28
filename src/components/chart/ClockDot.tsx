import { useEffect, useState } from "react";

const ClockDot = ({ dotColor }: { dotColor: string }) => {
  const now = new Date();
  const secondsRatio = now.getSeconds() / 60;
  const minutesRatio = (secondsRatio + now.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + now.getHours()) / 12;
  const initialRotation = Math.round(hoursRatio * 360);

  const [hourDeg, setHourDeg] = useState(initialRotation);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const secondsRatio = now.getSeconds() / 60;
      const minutesRatio = (secondsRatio + now.getMinutes()) / 60;
      const hoursRatio = (minutesRatio + now.getHours()) / 12;
      setHourDeg(Math.round(hoursRatio * 360));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const rotateHour = `rotate(${hourDeg}deg)`;

  return (
    <div
      style={{ transform: `${rotateHour}` }}
      className="relative aspect-square rounded-full"
    >
      <div
        style={{ backgroundColor: dotColor }}
        className="absolute -top-4 left-1/2 aspect-square h-[35px] origin-center -translate-x-1/2 rounded-full"
      ></div>
    </div>
  );
};

export default ClockDot;
