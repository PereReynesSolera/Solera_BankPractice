import Sidebar from "../SideBarGeneral/SideBar";

import "./BankAccounts.css";

const BankAccounts = () => {
  const accounts = [];

  return (
    <div className="general-container">
      <Sidebar />
      <div className="dashboardAccount">
        <header className="headerDashboard">
          <h1>Cyber Bank</h1>
        </header>
        <div className="bodyDashboardAccount">
          <div className="centerAccount">
            <div className="Izq">
              <h2 className="headerdos">Bank Accounts</h2>
              {accounts.length <= 0 ? (
                  <p>No available accounts</p>
                ) : (
                  accounts.map((account) => {
                    return <p>{account}</p>;
                  })
                )
              }
            </div>
            <div className="Der">
              <button type="button" className="create">Create</button>
              <button type="button" className="delete">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccounts;
