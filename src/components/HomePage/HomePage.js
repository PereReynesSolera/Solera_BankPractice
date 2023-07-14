import Home from "../Home/Home";
import Sidebar from "../SideBarGeneral/SideBar";
import "./HomePage.css";

const HomePage = () => {
  const alerta = () => {
    alert("User Created");
  };

  return (
    <div className="principal">
     <Sidebar/>
     <Home/>
    </div>
  );
};

export default HomePage;
