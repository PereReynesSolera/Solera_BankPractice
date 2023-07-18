import "./SideBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const [info, setInfo] = useState([]);

  const navigate = useNavigate();

  const [accounts, setAccounts] = useState([]);
  
  const getAccounts = async () => {
    try {
      const response = await fetch(`http://10.33.146.202:9091/api/bank`, {
        method: "POST",
        body: localStorage.getItem("generalUserName"),
      });
      if (response.ok) {
        const finalResponse = await response.json();
        console.log(finalResponse);
        setAccounts(finalResponse);
      } else {
        alert("Couldn't login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const data = async () => {
    try {
      const response = await fetch(`http://10.33.146.202:9091/api/user/email`, {
        method: "POST",
        body: localStorage.getItem("generalUserName"),
      });

      const finalResponse = await response.json();
      setInfo(finalResponse);
    } catch (error) {
      console.log(error);
    }
  };

  

  const move = () => {
    navigate("/accounts");
  };

  const move2 = () => {
    navigate("/principal");
  };

  const move3 = () => {
    navigate("/homepage");
  }

  const move4 = () => {
    navigate("/notifications")
  }

  const move5 = () => {
    navigate("/login")
  }

  const checkExistenceInfo = (objeto) => {
    return (
      (objeto !== null || objeto !== undefined) &&
      Object.keys(objeto).length > 0
    );
  };

  const sumMoney = () => {
    const totalMoney = accounts.reduce((accumulator, account) => {
      return accumulator + account.moneyAccount;
    }, 0);
  
    return totalMoney; 
  };
  

  useEffect(() => {
    data();
    getAccounts();
  }, []);

  return (
    <div className="sidebar">
      <div className="user">
        <div className="profile-data">
          <h4>
            {checkExistenceInfo(info)
              ? `${info.firstName} ${info.lastName}`
              : "CRITICAL ERROR: NOT FOUND"}
          </h4>
          <p>{checkExistenceInfo(info) ? info.userName : ""}</p>
        </div>
      </div>

      <div className="balance">
        <h4 className="header4">${sumMoney()}</h4> 
        <p>All accounts total balance</p>
      </div>

      <div className="options">
        <ul className="nav">
          <li className="list">
            <a href="#" onClick={move3}>
              Home
            </a>
          </li>
          <li className="list">
            <a href="#" onClick={move2}>My Account</a> 
          </li>
          <li className="list">
            <a href="#" onClick={move}>
              Bank Accounts
            </a>
          </li>
          <li className="list">
            <a href="#" onClick={move4}>Notifications</a>
          </li>
          <li className="list">
            <a href="#" onClick={move5}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
