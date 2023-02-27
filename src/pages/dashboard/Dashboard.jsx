import Widget from "./comps/Widget";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="widgets">
        <Widget />
        <Widget />
        <Widget />
        <Widget />
      </div>
    </div>
  );
};

export default Dashboard;
