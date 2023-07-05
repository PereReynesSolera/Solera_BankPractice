import "./Principal.css";

import Sidebar from "./SideBar";
import Dashboard from "./Dashboard";

const Principal = () => {
  return (
    <div className="principal">
     <Sidebar/>
     <Dashboard/>
    </div>
  );
};

export default Principal;
