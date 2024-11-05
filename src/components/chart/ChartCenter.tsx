import { useEffect, useState } from "react";
import { PriceBlock } from "../../data/data";
import { useMediaQuery } from "react-responsive";

// Custom hook for getting current time
const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour12: false,
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    }),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour12: false,
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return currentTime;
};

const ChartCenter = ({
  currentPrice,
  day,
  isWorkDay,
  textColor,
}: {
  currentPrice: PriceBlock;
  day: number;
  isWorkDay: boolean;
  textColor: string;
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const currentTime = useCurrentTime();
  const month = new Date().toLocaleString("sl-SI", { month: "long" });
  const dayOfWeek = new Date().toLocaleString("sl-SI", { weekday: "short" });

  return (
    <div className="flex aspect-square h-full items-center justify-center">
      <p className="absolute top-[20%] font-semibold text-slate-700 md:text-2xl lg:top-[25%] lg:text-3xl">
        {currentTime}
      </p>
      <div className="flex flex-col gap-4">
        <div className="text-center">
          <p className="mx-auto w-[60%] font-semibold text-slate-600 max-sm:text-sm md:text-lg lg:w-[70%]">
            Omrežnina za priključno moč v €/kW
          </p>
          <p
            style={{ color: textColor }}
            className="text-2xl font-bold md:text-4xl"
          >
            {currentPrice.prikljucnaMoc}{" "}
          </p>
        </div>
        <div className="text-center">
          <p className="mx-auto w-[60%] text-lg font-semibold text-slate-600 max-sm:text-sm lg:w-[70%]">
            Omrežnina za porabljeno energijo v €/kWh
          </p>
          <p
            style={{ color: textColor }}
            className="text-2xl font-bold md:text-4xl"
          >
            {currentPrice.porabljenaEnergija}
          </p>
        </div>
      </div>
      {isMobile ? (
        <div className="absolute bottom-[22%] flex w-28 flex-row items-center justify-center gap-4 divide-slate-400 max-sm:text-xs ">
          <p className="w-full text-center capitalize">{dayOfWeek}</p>
          <p
            className={`w-full text-center text-lg font-bold lg:text-2xl ${isWorkDay ? "" : "text-red-600"}`}
          >
            {day}.
          </p>
          <p className="w-full text-center capitalize">{month}</p>
        </div>
      ) : (
        <div className="absolute right-[22%] flex flex-col items-center divide-y-2 divide-slate-400 max-sm:text-xs ">
          <p className="w-full text-center capitalize">{month}</p>
          <p
            className={`w-full text-center text-lg font-bold lg:text-2xl ${isWorkDay ? "" : "text-red-600"}`}
          >
            {day}
          </p>
          <p className="w-full text-center capitalize">{dayOfWeek}</p>
        </div>
      )}
    </div>
  );
};

export default ChartCenter;
