import { useTheme } from "next-themes";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { colors, createPalette } from "@core/presets/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

function MetricPieChart(props) {
  const { theme } = useTheme();

  const { metric } = props;
  const color = colors[metric.color];

  const options = {
    responsive: true,
    maintainAspectRatio: (["small"].includes(props.size) ? false : true),
    aspectRatio: 2,
    cutout: "85%",
    layout: {
      padding: 20,
    },
    animation: {
      duration: 800,
      easing: "linear" as const,
    },
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          color: (theme === "dark")
            ? "rgb(255, 255, 255)"
            : "rgb(128, 128, 128)",
        },
      },
    },
  };

  const dataColors = createPalette(color.accent, metric.data.length);

  const data = {
    labels: metric.data.map((item) =>
      // dateFormattter(item.time)
      item.name
    ),
    datasets: [
      {
        // label: "# of Votes",
        data: metric.data.map((item) => item.value),
        backgroundColor: dataColors,
        borderWidth: 0,
        spacing: 10,
        hoverOffset: 15,
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
}

export { MetricPieChart, MetricPieChart as default };
