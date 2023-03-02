import Chart from "./comps/Chart";
import Widget from "./comps/Widget";
import "./dashboard.scss";

const Dashboard = () => {
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
      <Chart title="Last 6 Months (Collections)" aspect={2 / 1} />
      <Chart title="Last 6 Months (Expenses)" aspect={2 / 1} />
      </div>
    </div>
  );
};

export default Dashboard;
