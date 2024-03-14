import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { dataAM, dataPM, highSeason, lowSeason } from "../data/data";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartDonut = () => {
  const chartData = {
    datasets: [
      {
        data: dataPM,
        backgroundColor: highSeason.workDay.PM,
        cutout: "85%",
      },
    ],
  };

  return (
    <div>
      <div className="w-1/2">
        <Doughnut data={chartData} />
      </div>
    </div>
  );
};

export default ChartDonut;
