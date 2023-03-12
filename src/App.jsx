import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Collections from "./pages/accounts/Collections";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import AddOrEditStudent from "./pages/students/AddOrEditStudent";
import StudentDetails from "./pages/students/StudentDetails";
import Students from "./pages/students/Students";

function App() {
  const user = true;
  if (user)
    return (
      <div className="App">
        <div className="app-navbar">
          <Navbar />
        </div>
        <div className="app-main">
          <div className="app-sidebar">
            <Sidebar />
          </div>
          <div className="app-pages">
            {/* <Dashboard /> */}
            {/* <AddOrEditStudent /> */}
            <Students/>
            {/* <StudentDetails /> */}
            {/* <Collections/> */}
          </div>
        </div>
      </div>
    );
  return (
    <div className="App">
      <div className="app-navbar">
        <Navbar />
      </div>
      <div className="app-main">
        <Login />
      </div>
    </div>
  );
}

export default App;
