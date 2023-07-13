import Sidebar from "../SideBarGeneral/SideBar";

import { useState } from "react";

import "./BankAccounts.css";

const BankAccounts = () => {
  const accounts = [
    "Pere Reynes - Banco nosequé",
    "Aritz Silva - Banco nosecuantos",
    "Venga va si - el que quiera que sea",
  ];

  const [showInputs, setShowInputs] = useState(false);
  const [buttonText, setButtonText] = useState("Create Account");

  const createAccount = () => {
    if (showInputs) {
      setShowInputs(false);
      setButtonText("Create Account");
    } else {
      setShowInputs(true);
      setButtonText("Close Create Account");
    }
  };

  function onlyNumbers(str) {
    var patron = /^[0-9]+$/;
    return patron.test(str);
  }

  const submitCreateAccount = async () => {
    let accountNumber = document.getElementById("an-input").value;
    let stringCurrency = document.getElementById("c-input").value;
    if (
      accountNumber !== "" &&
      stringCurrency !== "" &&
      onlyNumbers(stringCurrency)
    ) {
      setShowInputs(false);
      setButtonText("Create Account");

      try {
        await fetch("http://localhost:8080/api/bank/bankaccount", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            accountNumber: accountNumber,
            stringCurrency: stringCurrency,
          }),
        });
      } catch (error) {
        console.log("ERROR: FETCH UNREALIZED: " + error);
      }
    }
  };

  const deleteAccount = (id) => {};

  return (
    <div className="general-container">
      <Sidebar />
      <div className="dashboardAccount">
        <header className="headerDashboard">
          <h1>Crypto Bank</h1>
        </header>
        <div className="bodyDashboardAccount">
          <div className="centerAccount">
            <div className="Izq">
              <h2 className="headerdos">Bank Accounts</h2>
              {accounts.length <= 0 ? (
                <div className="p-button">
                  <p>No available accounts</p>
                  {/*<button type="button" className="delete">Erase this button</button>*/}
                </div>
              ) : (
                accounts.map((account, index) => {
                  return (
                    <div className="p-button">
                      <p>{account}</p>
                      <button
                        type="button"
                        className="delete"
                        onClick={deleteAccount}
                      >
                        Delete Account
                      </button>
                    </div>
                  );
                })
              )}
            </div>
            <div className="Der">
              <button type="button" className="create" onClick={createAccount}>
                {buttonText}
              </button>
              {showInputs && (
                <div className="input-container">
                  <div>
                    <p>Account Number:</p>
                    <input
                      type="text"
                      placeholder="Account Number"
                      id="an-input"
                      className="an-input miniinput"
                      autocomplete="off"
                      required
                    />
                  </div>
                  <div>
                    <p>Currency ($):</p>
                    <input
                      type="text"
                      placeholder="Currency ($ Dolars)"
                      id="c-input"
                      className="c-input miniinput"
                      pattern="-?\d+(\.\d+)?"
                      autocomplete="off"
                      required
                    />
                  </div>
                  <button type="button" onClick={submitCreateAccount} className="button-create-thing">
                    Create
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccounts;
