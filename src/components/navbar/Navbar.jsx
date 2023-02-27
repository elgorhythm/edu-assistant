import "./navbar.scss";
import alisLogo from '../../assets/alis-logo.png'

const Navbar = () => {
  return (<div className="navbar">
    <div className="wrapper">
        <div className="left">
          <img src={alisLogo} alt='Logo'/>
        </div>
        <div className="center">
          <h3>
            ALIS - Bucheki Branch
          </h3>
        </div>
        <div className="right">
          <h4>
            welcome
          </h4>
        </div>
    </div>
  </div>)
};

export default Navbar;
