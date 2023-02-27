import "./sidebar.scss";
import {
  Dashboard,
  PersonOutline,
  PeopleOutlined,
  PsychologyOutlined,
  TrendingUpOutlined,
  TrendingDownOutlined,
  AccountBalanceOutlined,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">People</p>
          <li>
            <PeopleOutlined className="icon" />
            <span>Students</span>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <span>Staff</span>
          </li>
          <p className="title">Accounts</p>
          <li>
            <TrendingUpOutlined className="icon" />
            <span>Income</span>
          </li>
          <li>
            <TrendingDownOutlined className="icon" />
            <span>Exprenses</span>
          </li>
          <li>
            <AccountBalanceOutlined className="icon" />
            <span>Reports</span>
          </li>
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
