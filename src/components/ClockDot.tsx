import { useEffect, useState } from "react";

const ClockDot = ({ dotColor }: { dotColor: string }) => {
  const [hourDeg, setHourDeg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const secondsRatio = now.getSeconds() / 60;
      const minutesRatio = (secondsRatio + now.getMinutes()) / 60;
      const hoursRatio = (minutesRatio + now.getHours()) / 12;
      setHourDeg(Math.round(hoursRatio * 360));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [hourDeg]);

  const rotateHour = `rotate(${hourDeg}deg)`;

  return (
    <div
      // style={{ transform: rotateHour }}
      style={{ transform: `${rotateHour}` }}
      className="relative aspect-square rounded-full"
    >
      <div
        style={{ backgroundColor: dotColor }}
        className="absolute left-1/2 top-0 aspect-square h-[25px] origin-center -translate-x-1/2 rounded-full"
      ></div>
    </div>
  );
};

export default ClockDot;
