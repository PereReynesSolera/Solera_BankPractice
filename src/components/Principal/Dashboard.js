import "./Dashboard.css";

const Dashboard = () => {

const alerta = () => {
    alert("User Created");
}

  return (
    <div className="dashboard">
      <header className="headerDashboard">
        <h1>Cyber Bank</h1>
      </header>
      <div className="bodyDashboard">
        <div className="center">
          <div className="izq">
            <h2>User Settings</h2>
            <div className="imageThing"></div>
          </div>
          <div className="personalDataForm">
            <form>
              <div className="user-box">
                <input
                  type="text"
                  name=""
                  required=""
                  id="inputFirstName"
                ></input>
                <label>First Name</label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  name=""
                  required=""
                  id="inputLastName"
                ></input>
                <label>Last Name</label>
              </div>
              <div className="user-box">
                <input
                  type="password"
                  name=""
                  required=""
                  id="inputConfirmPassword"
                ></input>
                <label>Email</label>
              </div>
              <div className="user-box">
                <input
                  type="password"
                  name=""
                  required=""
                  id="inputConfirmPassword"
                ></input>
                <label>Telephone Number</label>
              </div>
              <button className="pseudo-button" type="button" onClick={alerta}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
