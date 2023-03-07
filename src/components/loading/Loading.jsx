import { CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "./loading.scss";
const Loading = () => {
  const [loading, setLoading] = useState("Loading");

  useEffect(() => {
    let x = 4;
    const timer = setInterval(() => {
      if (x % 4 === 0) setLoading("Loading");
      if (x % 4 === 1) setLoading("Loading.");
      if (x % 4 === 2) setLoading("Loading..");
      if (x % 4 === 3) setLoading("Loading...");
      x = x + 1;
      console.log("settimeout running and x value is", x);
    }, 700);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loading">
      <CircularProgress className="icon" />
      {loading}
    </div>
  );
};

export default Loading;
