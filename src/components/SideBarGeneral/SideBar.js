import "./SideBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const [info, setInfo] = useState([])
  const [name, setName] = useState("CRITICAL ERROR: NOT FOUND");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


  const data = async () => {
    console.log("Executing the function data");
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

  useEffect(() => {
    data();
    if(info.userName){
      setName(info.firstName + " " + info.lastName);
      setEmail(info.userName);
    }
  },[]);

  return (
    <div className="sidebar">
      <div className="user">
        <div className="profile-data">
          <h4>{name}</h4>
          <p>{email}</p>
        </div>
      </div>

      <div className="balance">
        <h4 className="header4">$ 999999</h4>
        <p>Actual account balance</p>
      </div>

      <div className="options">
        <ul className="nav">
          <li className="list">
            <a href="#">Home</a>
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
