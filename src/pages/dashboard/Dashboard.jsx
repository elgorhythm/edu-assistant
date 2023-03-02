import Chart from "./comps/Chart";
import Widget from "./comps/Widget";
import "./dashboard.scss";
import { monthlyIncome, monthlyExpenses } from "../../temp";
import { months } from "../../CONSTS";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [incChartData, setIncChartData] = useState([]);
  const [expChartData, setExpChartData] = useState([]);

  useEffect(() => {
    const getIncChartList = (monthlyIncome) => {
      const keys = Object.keys(monthlyIncome);
      if (keys.length > 6) keys.splice(0, keys.length - 6);
      const list = keys.map((item) => ({
        month: `${months[item.slice(4, 6) - 1]}-${item.slice(0, 4)}`,
        ...monthlyIncome[item],
      }));
      setIncChartData(list);
    };
    const getExpChartList = (monthlyExpenses) => {
      const keys = Object.keys(monthlyExpenses);
      if (keys.length > 6) keys.splice(0, keys.length - 6);
      const list = keys.map((item) => ({
        month: `${months[item.slice(4, 6) - 1]}-${item.slice(0, 4)}`,
        ...monthlyExpenses[item],
      }));
      setExpChartData(list);
    };

    if (monthlyIncome) getIncChartList(monthlyIncome);
    if (monthlyExpenses) getExpChartList(monthlyExpenses);
  }, [monthlyIncome, monthlyExpenses]);

  const studentsStats = { title: "Students", count: 195 };
  const staffStats = { title: "Staff", count: 23 };
  const tuition = {
    title: "Tuition Fee",
    collected: 54345,
    percentage: 45,
    link: "See details",
    linkUrl: "linkUrl",
  };
  const paperFund = {
    title: "Paper Fund",
    collected: 254345,
    percentage: 80,
    link: "See details",
    linkUrl: "linkUrl",
  };
  const accounts = {
    title: "Account Balance",
    income: 24345,
    expenses: 441234,
    balance: 6675546,
  };
  const arrears = {
    title: "Arrears",
    income: 24345,
    expenses: 441234,
    balance: 2541,
  };
  return (
    <div className="dashboard">
      <div className="widgets">
        <Widget
          type={"stats"}
          studentsStats={studentsStats}
          staffStats={staffStats}
        />
        <Widget type={"recurring"} category={tuition} />
        <Widget type={"recurring"} category={paperFund} />
        <Widget type={"arrears"} category={arrears} />
        <Widget type={"accounts"} category={accounts} />
      </div>
      <div className="charts">
        <Chart
          title="Collections - Last 6 months"
          aspect={2 / 1}
          data={incChartData && incChartData}
          dataType="income"
        />
        <Chart
          title="Expenses - Last 6 months"
          aspect={2 / 1}
          data={expChartData && expChartData}
          dataType="expenses"
        />
      </div>
    </div>
  );
};

export default Dashboard;
