import "./dash-comps.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Chart = ({ aspect, title }) => {
  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];
  const data2 = [
    { name: "January", Total: 800 },
    { name: "February", Total: 1700 },
    { name: "March", Total: 400 },
    { name: "April", Total: 1200 },
    { name: "May", Total: 500 },
    { name: "June", Total: 1300 },
  ];
  return (
    <div className="chart">
        <LineChart>
            <Line type="monotone" dataKey="uv" stroke="red" data={data}/>
        </LineChart>



    </div>
    // <div className="chart">
    //   <div className="title">{title}</div>
    //   <ResponsiveContainer width="100%" aspect={aspect}>
    //     <AreaChart
    //       width={730}
    //       height={150}
    //       data={data}
    //       margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    //     >
    //       <defs>
    //         <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
    //           <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
    //           <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
    //         </linearGradient>
    //       </defs>
    //       <XAxis dataKey="name" stroke="gray" />
    //       <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
    //       <Tooltip />
    //       <Area
    //         type="monotone"
    //         dataKey="Total"
    //         stroke="#8884d8"
    //         fillOpacity={1}
    //         fill="url(#total)"
    //       />
    //     </AreaChart>
    //   </ResponsiveContainer>
    // </div>
  );
};

export default Chart;
