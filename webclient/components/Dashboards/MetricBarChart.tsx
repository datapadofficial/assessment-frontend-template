import { useTheme } from "next-themes";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import Annotation from "chartjs-plugin-annotation";
import { Bar } from "react-chartjs-2";
import { colors, createPalette } from "@core/presets/colors";

ChartJS.register(
  Annotation,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
);

function MetricBarChart(props) {
  const { theme } = useTheme();

  const { metric } = props;
  const color = colors[metric.color];

  let delayed;
  const options = {
    responsive: true,
    animation: {
      duration: 800,
      easing: "linear" as const,
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;

        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }

        return delay;
      },
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
          display: false,
          drawBorder: false,
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
          // text1: {
          //   type: "label" as const,
          //   position: "right",
          //   yMin: metric.goal,
          //   xMin: metric.data.length - 1,
          //   content: [`${metric.goal}`],
          //   font: { size: 15 },
          // },
        },
      },
    },
  };

  const dataColors = createPalette(color.accent, metric.data.length);

  const data = {
    labels: metric.data.map((item) =>
      // dateFormatter(item.time)
      item.name
    ),
    datasets: [
      {
        type: "bar" as const,
        label: "Actual",
        data: metric.data.map((item) => item.value),
        backgroundColor: dataColors.reverse(),
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export { MetricBarChart, MetricBarChart as default };
