import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <div className="app-navbar">
        <Navbar/>
      </div>
      <div className="app-main">
        <div className="app-sidebar">
          <Sidebar/>
        </div>
        <div className="app-pages">
          <Dashboard/>
        </div>
      </div>
    </div>
  );
}

export default App;
