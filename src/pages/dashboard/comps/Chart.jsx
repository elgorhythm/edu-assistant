import "./dash-comps.scss";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Chart = ({ aspect, title, data, dataType }) => {
  const data3 = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 700, pv: 1400, amt: 1900 },
    { name: "Page C", uv: 200, pv: 2100, amt: 2100 },
    { name: "Page D", uv: 300, pv: 2400, amt: 2500 },
    { name: "Page E", uv: 500, pv: 3000, amt: 3000 },
  ];
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        {dataType === "income" ? (
          <LineChart
            width={700}
            height={250}
            margin={{ top: 10, right: 15, left: 10 }}
            data={data}
          >
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Tuition" stroke="green" />
            <Line
              type="monotone"
              dataKey="total"
              stroke="black"
              strokeWidth={1.5}
            />
          </LineChart>
        ) : (
          <LineChart
            width={700}
            height={250}
            margin={{ top: 10, right: 15, left: 10 }}
            data={data}
          >
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Miscellaneous" stroke="red" />
            <Line type="monotone" dataKey="Staff" stroke="orange" />
            <Line
              type="monotone"
              dataKey="total"
              stroke="black"
              strokeWidth={1.5}
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
