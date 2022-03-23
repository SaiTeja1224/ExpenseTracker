import "./Chart.css";
import Card from "../UI/Card";
import ChartBar from "./ChartBar";

function Chart(props) {
  const total = Math.max(...props.plotData.map((data) => data.value));
  return (
    <Card className="chart">
      {props.plotData.map((data) => (
        <ChartBar
          key={data.label}
          label={data.label}
          value={data.value}
          maxValue={total}
        />
      ))}
    </Card>
  );
}

export default Chart;
