import { CircularProgress } from "@mui/material";
import "./loading.scss";
const Loading = () => {
  return (
    <div className="loading">
      <CircularProgress className="icon" />
      Loading...
    </div>
  );
};

export default Loading;
