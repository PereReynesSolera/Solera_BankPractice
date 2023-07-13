import "./SideBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Sidebar = () => {

  const money = 0; //Erase this shit and change it for the true response with money

  const [info, setInfo] = useState([])

  const navigate = useNavigate();

  const data = async () => {
    //console.log("Executing the function data");
    try {
      const response = await fetch(`http://10.33.146.143:9091/api/user/email`,
        { 
          method: "POST",
          body: localStorage.getItem("generalUserName"),
        }
      );

      const finalResponse = await response.json();
      setInfo(finalResponse)
    } catch (error) {
      console.log(error);
    }
  };

  const move = () => {
    navigate("/accounts");
  };

  const move2 = () => {
    navigate("/principal");
  }

  const checkExistenceInfo = (objeto) => {
    return ((objeto !== null || objeto !== undefined) && Object.keys(objeto).length > 0) 
  };


  useEffect(() => {
    data();
    //console.log(info)
  },[]);

  return (
    <div className="sidebar">
      <div className="user">
        <div className="profile-data">
          <h4>{checkExistenceInfo(info) ? `${info.firstName} ${info.lastName}` : "CRITICAL ERROR: NOT FOUND"}</h4>
          <p>{checkExistenceInfo(info) ? info.userName : ""}</p>
        </div>
      </div>

      <div className="balance">
        <h4 className="header4">${true ? money : "999999.99"}</h4>
        <p>Actual account balance</p>
      </div>

      <div className="options">
        <ul className="nav">
          <li className="list">
            <a href="#" onClick={move2}>Home</a>
          </li>
          <li className="list">
            <a href="#">My Account</a>
          </li>
          <li className="list">
            <a href="#" onClick={move}>
              Bank Accounts
            </a>
          </li>
          <li className="list">
            <a href="#">Notifications</a>
          </li>
          <li className="list">
            <a href="http://localhost:3000">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
