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
                <div className="p-button">
                    <p>No available accounts</p>
                    <button type="button" className="delete">Erase this button</button>
                </div>

                ) : (
                  accounts.map((account) => {
                    return (
                    <div className="p-button">
                        <p>{account}</p>
                        <button type="button" className="delete">Delete</button>
                    </div>
                    );
                  })
                )
              }
            </div>
            <div className="Der">
              <button type="button" className="create">Create</button>
              {/*<button type="button" className="delete">Delete</button>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccounts;
