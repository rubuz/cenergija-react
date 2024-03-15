import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  highSeason,
  lowSeason,
  highSeasonMonths,
  workFreeDays,
  workFreeHolidays,
} from "../data/data";
import useCurrentTimePeriod from "../hooks/useCurrentTimePeriod";
import Clock from "./Clock";

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

  console.log(season[dayType][timeOfDay]);

  const chartData = {
    datasets: [
      {
        data: season[dayType][timeOfDay].time,
        backgroundColor: season[dayType][timeOfDay].colors,
        cutout: "85%",
      },
    ],
  };

  return (
    <div>
      <div className="relative flex w-1/2">
        <Doughnut data={chartData} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[49.2%]">
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default ChartDonut;
