import { classNames } from "@core/react/class-names";
import { colors } from "@core/presets/colors";

function MetricTableChart(props) {
  const { metric } = props;
  const color = colors[metric.color];

  return (
    <div className="overflow-x-auto relative rounded-t-lg">
      <table className="w-full">
        <thead>
          <tr className={`dark:bg-slate-700 bg-${color.hardClass} dark:text-${color.hardClass} text-white text-sm`}>
            <th className="font-light text-left px-3 py-2">{metric.header.dimension}</th>
            <th className="font-light text-right px-3 py-2">{metric.header.value}</th>
          </tr>
        </thead>
        <tbody>
          {metric.data.map((data, index) => (
            <tr
              key={index}
              className={classNames([
                (index % 2 === 0) ? `dark:bg-slate-900 bg-${color.softClass}` : "dark:bg-slate-800",
                `dark:text-${color.softClass} text-gray-900 text-sm`,
              ])}
            >
              <td className="font-light text-left px-3 py-2">{data.name}</td>
              <td className="font-light text-right px-3 py-2">{data.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { MetricTableChart, MetricTableChart as default };
