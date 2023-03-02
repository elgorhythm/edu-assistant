import { LockOutlined } from "@mui/icons-material";
import { FormControl, TextField } from "@mui/material";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="wrapper">
        <div className="icon">
          <LockOutlined />
        </div>
        <h4>Sign In</h4>

        <TextField
          fullWidth
          variant="standard"
          type="email"
          name="email"
          className="text-field"
          label="Username / Email"
          inputProps={{ fontSize: "24px" }}
          InputLabelProps={{ fontSize: "50px" }}
        />
        <TextField
          fullWidth
          variant="standard"
          type="password"
          name="password"
          className="text-field"
          label="Password"
          inputProps={{ fontSize: "24px" }}
          InputLabelProps={{ fontSize: "50px" }}
        />
        <button>Sign In</button>
        <div className="links">
          <span>Forgor password?</span>
          <span>Don't have an account? Sign Up</span>
        </div>
        <span className="developer">
          Powered by {<img src="../../../public/edu-assist.png" />} EDU
          ASSISTant®
        </span>
      </div>
    </div>
  );
};

export default Login;
