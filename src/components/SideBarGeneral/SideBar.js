import "./SideBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Sidebar = () => {

  let accountUser;

  const data = async () => {
    try {
      const response = await fetch( `http://localhost:9091/api/getUser/ByName/`+ localStorage.getItem("generalUserName"));

      const finalResponse = await response.json();
      console.log(finalResponse);
  
      accountUser = finalResponse.userName;
    } catch (error) {
      console.log(error.getMessage() + "Hay tremendo error");
    }
  };

  return (
    <div className="sidebar">
      <div className="user">
        <div className="profile-pic"></div>
        <div className="profile-data">
          <h4>{accountUser}</h4>
          <p>Correo</p>
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
            <a href="#">Bank Accounts</a>
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
