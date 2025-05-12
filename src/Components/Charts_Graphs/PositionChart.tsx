import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { TrackingDataProps } from "../utils";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const PositionChart = (props: { data: TrackingDataProps[] }) => {
  const idleData = props.data.filter(
    (trackingData) => !trackingData.vehicleStatus
  );
  const movingData = props.data.filter(
    (trackingData) => trackingData.vehicleStatus
  );

  const chartData = {
    datasets: [
      {
        label: "Idle",
        data: idleData.map((trackingData) => ({
          x: parseFloat(trackingData.startLatitude),
          y: parseFloat(trackingData.startLongitude),
        })),
        backgroundColor: "#15b886",
      },
      {
        label: "Moving",
        data: movingData.map((trackingData) => ({
          x: parseFloat(trackingData.startLatitude),
          y: parseFloat(trackingData.startLongitude),
        })),
        backgroundColor: "#339af0",
      },
    ],
  };

  return <Scatter options={options} data={chartData} />;
};

export default PositionChart;
