import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  highSeason,
  lowSeason,
  highSeasonMonths,
  workFreeDays,
  workFreeHolidays,
  hourAMIndexMapping,
  hourPMIndexMapping,
} from "../data/data";
import useCurrentTimePeriod from "../hooks/useCurrentTimePeriod";
// import Clock from "./Clock";
import ClockDot from "./ClockDot";
import ClockNumbers from "./ClockNumbers";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartDonut = () => {
  const { month, dayOfWeek, dayOfMonth, isAM } = useCurrentTimePeriod();

  // Format the current date as a string in the format 'YYYY-MM-DD'
  const currentDate = `${new Date().getFullYear()}-${month + 1}-${dayOfMonth}`;

  // Determine if the current day is a workday or a free day
  const isWorkDay =
    !workFreeDays.includes(dayOfWeek) &&
    !workFreeHolidays.includes(currentDate);

  // Determine if the current month is in the high season or the low season
  const isHighSeason = highSeasonMonths.includes(month);

  // Based on the above information, select the appropriate data for the doughnut graph
  const season = isHighSeason ? highSeason : lowSeason;
  const dayType = isWorkDay ? "workDay" : "freeDay";
  const timeOfDay = isAM ? "AM" : "PM";

  const colors: string[] = season[dayType][timeOfDay].colors;
  const currentHour = new Date().getHours();
  const hourIn12Format = currentHour > 11 ? currentHour - 12 : currentHour;
  const colorIndex = isAM
    ? hourAMIndexMapping[hourIn12Format]
    : hourPMIndexMapping[hourIn12Format];
  const dotColor = colors[colorIndex];

  const chartData = {
    datasets: [
      {
        data: season[dayType][timeOfDay].time,
        backgroundColor: season[dayType][timeOfDay].colors,
        borderWidth: 0,
        cutout: "82%",
        hoverBorderWidth: 0,
        hoverOffset: 0,
        hoverBackgroundColor: season[dayType][timeOfDay].colors,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: { enabled: false },
    },
  };

  return (
    <>
      <div className="relative mx-auto flex aspect-square h-[700px] items-center justify-center">
        <div className="z-20 m-0 aspect-square w-[91%]">
          <Doughnut data={chartData} options={chartOptions} />
        </div>

        {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[49.2%]">
          <Clock />
        </div> */}
        <div className="absolute top-0 z-10 w-full">
          <ClockDot dotColor={dotColor} />
        </div>
        <div className="absolute top-0 w-full">
          <ClockNumbers isAM={isAM} />
        </div>
      </div>
      {/* <div className="relative mx-auto flex w-1/2 items-center justify-center">
        <div>
          <CustomPie />
        </div>
      </div> */}
    </>
  );
};

export default ChartDonut;
