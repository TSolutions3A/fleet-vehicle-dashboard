import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { TrackingDataProps } from "../utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
  },
};

const DistanceChart = (props: { data: TrackingDataProps[] }) => {
  const labels = props.data.map((trackingData) => trackingData.driverName);
  const distanceData = props.data.map(
    (trackingData) => trackingData.distanceTotal
  );

  const data = {
    labels,
    datasets: [
      {
        label: "DistanceTotal",
        data: distanceData,
        borderColor: "#339af1",
        backgroundColor: "#339af0",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default DistanceChart;
