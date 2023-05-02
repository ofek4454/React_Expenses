import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const values = props.data.map((val) => val.value);
  const totalMax = Math.max(...values);

  return (
    <div className="chart">
      {props.data.map((chart) => (
        <ChartBar
          key={chart.label}
          value={chart.value}
          maxValue={totalMax}
          label={chart.label}
        />
      ))}
    </div>
  );
};

export default Chart;
