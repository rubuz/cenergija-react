import { useEffect, useState } from "react";
import { PriceBlock } from "../../data/data";

const ChartCenter = ({
  currentPrice,
  month,
  day,
}: {
  currentPrice: PriceBlock;
  month: number;
  day: number;
}) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString(),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex aspect-square h-full flex-col items-center justify-center">
      <p>{currentTime}</p>
      <p>{month + 1}</p>
      <p>{day}</p>
      <p>{currentPrice.prikljucnaMoc}</p>
      <p>{currentPrice.porabljenaEnergija}</p>
    </div>
  );
};

export default ChartCenter;
