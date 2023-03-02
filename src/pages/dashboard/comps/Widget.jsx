import "./dash-comps.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import {
  RemoveRedEyeOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material";

const StatsWidget = (props) => {
  const type = props.type;
  const studentsStats = props.studentsStats;
  const staffStats = props.staffStats;
  const category = props.category;
  const [showBalance, setShowBalance] = useState(false);

  let component = null;

  switch (type) {
    case "stats":
      component = (
        <>
          <div className="left">
            <span className="title">Students</span>
            <span className="counter">
              {studentsStats ? studentsStats.count : 0}
            </span>
            {/* <span className="link">See students details</span> */}
          </div>
          <div className="right">
            <span className="title">Staff</span>
            <span className="counter">{staffStats ? staffStats.count : 0}</span>
            {/* <span className="link">See staff details</span> */}
          </div>
        </>
      );
      break;
    case "recurring":
      component = (
        <>
          <div className="left">
            <span className="title">{category.title}</span>
            <span className="counter">
              {category.collected.toLocaleString("en-US")}
            </span>
            <span className="link">{category.link}</span>
          </div>
          <div className="right">
            <CircularProgressbar
              value={category.percentage}
              text={`${category.percentage}%`}
            />
          </div>
        </>
      );
      break;
    case "accounts":
      component = (
        <>
          <div className="left">
            <span className="title">{category.title}</span>
            <span className="counter">
              {showBalance
                ? `${category.balance.toLocaleString("en-US")}`
                : "-----"}
            </span>
            <span className="link">{category.link}</span>
          </div>
          <div className="right">
            <div className="eye" onClick={() => setShowBalance(!showBalance)}>
              {showBalance ? (
                <RemoveRedEyeOutlined />
              ) : (
                <VisibilityOffOutlined />
              )}
            </div>
          </div>
        </>
      );
      break;
    case("arrears"):
    component = (
      <>
        <div className="left">
          <span className="title">{category.title}</span>
          <span className="counter">
            {`${category.balance.toLocaleString("en-US")}`}
          </span>
          <span className="link">{category.link}</span>
        </div>
        <div className="right">
        </div>
      </>
    );

    default:
      break;
  }

  return <div className="widget">{component && component}</div>;
};

export default StatsWidget;
