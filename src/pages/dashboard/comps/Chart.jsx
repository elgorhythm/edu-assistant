import "./dash-comps.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Chart = ({ aspect, title }) => {
  const data3 = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 700, pv: 1400, amt: 1900 },
    { name: "Page C", uv: 200, pv: 2100, amt: 2100 },
    { name: "Page D", uv: 300, pv: 2400, amt: 2500 },
    { name: "Page E", uv: 500, pv: 3000, amt: 3000 },
  ];
  return (
        <div className="chart">
        <div className="title">collections</div>
    <ResponsiveContainer width='100%' aspect={aspect}>
        <LineChart width={700} height={250} margin={{ top: 10 }} data={data3}>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="green" />
          <Line type="monotone" dataKey="amt" stroke="red" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
