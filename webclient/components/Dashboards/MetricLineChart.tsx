import { useTheme } from "next-themes";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import Annotation from "chartjs-plugin-annotation";
import { Line } from "react-chartjs-2";
import { colors } from "@core/presets/colors";

ChartJS.register(
  Annotation,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
);

function MetricLineChart(props) {
  const { theme } = useTheme();

  const { metric } = props;
  const color = colors[metric.color];

  const options = {
    responsive: true,
    tension: 0.4,
    borderColor: color.accent.string(),
    animation: {
      duration: 800,
      easing: "linear" as const,
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: (theme === "dark")
            ? "rgb(255, 255, 255)"
            : "rgb(128, 128, 128)",
        },
      },
      y: {
        grid: {
          // display: false,
          drawBorder: false,
          color: (theme === "dark") ? "rgb(50, 50, 50)" : "rgb(245, 245, 245)",
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      annotation: {
        annotations: {
          line1: {
            type: "line" as const,
            yMin: metric.goal,
            yMax: metric.goal,
            borderColor: color.accent.fade(0.6).string(),
            borderWidth: 4,
            borderDash: [5, 5],
          },
        },
      },
    },
  };

  const data = {
    labels: metric.data.map((item) =>
      // dateFormatter(item.time)
      item.name
    ),
    datasets: [
      {
        type: "line" as const,
        label: "Actual",
        data: metric.data.map((item) => item.value),
        borderColor: color.accent.string(),
        elements: {
          point: {
            radius: 15,
            pointStyle: "circle",
            pointBackgroundColor: "transparent",
            pointBorderColor: "transparent",
            borderWidth: 13,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: (theme === "dark")
              ? "rgb(30, 41, 59)"
              : "rgb(255, 255, 255)",
            pointHoverBorderWidth: 3,
            pointHoverBorderColor: color.accent.string(),
          },
        },
        fill: {
          target: "origin",
          above: color.accent.fade(0.6).string(),
          below: color.accent.fade(0.6).string(),
        },
      },
    ],
  };

  return <Line options={options} data={data} />;
}

export { MetricLineChart, MetricLineChart as default };
