import { useTheme } from "next-themes";
import { classNames } from "@core/react/class-names";
import { colors } from "@core/presets/colors";

function MetricSingleValueChart(props) {
  const { theme } = useTheme();

  const { metric } = props;
  const color = colors[metric.color];

  // const lastMetricData = metric.data.at(-1)?.value;
  const lastMetricData = metric.value;

  const percentage = lastMetricData / metric.goal * 100;

  return (
    <div
      className={classNames([
        `dark:bg-${color.hardClass} bg-${color.softClass}`,
        "w-full rounded-full h-5 my-8",
      ])}
    >
      <div
        className={classNames([
          `dark:bg-${color.softClass} bg-${color.hardClass}`,
          "dark:text-slate-800 text-white rounded-full leading-none text-xs font-medium text-center h-full p-1",
        ])}
        style={{ width: `${percentage}%` }}
      >
        {percentage.toFixed(0)}%
      </div>
    </div>
  );
}

export { MetricSingleValueChart, MetricSingleValueChart as default };
