import { highSeason, lowSeason } from "../data/data";

const LiveTime = () => {
  // Define the high season months
  const highSeasonMonths = [10, 11, 0, 1]; // Months in JavaScript are 0-indexed

  // Define the work free days (Saturday and Sunday)
  const workFreeDays = [6, 0]; // 6 is Saturday, 0 is Sunday

  // Define the work free holidays
  const workFreeHolidays = ["2022-12-25", "2022-12-26"]; // Add more dates as needed

  // Get the current date and time
  const now = new Date();

  // Format the current date as a string in the format 'YYYY-MM-DD'
  const currentDate = now.toISOString().split("T")[0];

  // Determine if the current day is a workday or a free day
  const isWorkDay =
    !workFreeDays.includes(now.getDay()) &&
    !workFreeHolidays.includes(currentDate);

  // Determine if the current month is in the high season or the low season
  const isHighSeason = highSeasonMonths.includes(now.getMonth());

  // Determine if it's AM or PM
  const isAM = now.getHours() < 12;

  // Based on the above information, select the appropriate data for the doughnut graph
  const season = isHighSeason ? highSeason : lowSeason;
  const dayType = isWorkDay ? "workDay" : "freeDay";
  const timeOfDay = isAM ? "AM" : "PM";

  const data = season[dayType][timeOfDay];

  console.log(data);

  return <div>LiveTime</div>;
};

export default LiveTime;
