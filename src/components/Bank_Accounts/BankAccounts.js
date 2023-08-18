import Sidebar from "../SideBarGeneral/SideBar";

import { useEffect, useState } from "react";

import "./BankAccounts.css";

const BankAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [showInputs, setShowInputs] = useState(false);
  const [buttonText, setButtonText] = useState("Create Account");
  const token = localStorage.getItem("generalToken");

  console.log(token);
  const getAccounts = async () => {
    try {
        const response = await fetch(`http://localhost:9091/api/bank`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json" // Agregar este encabezado para indicar el tipo de contenido
      },
        body: localStorage.getItem("generalUserName"),
      });
      if (response.ok) {
        const finalResponse = await response.json();
        setAccounts(finalResponse);
        console.log(finalResponse);
      } else {
        alert("Couldn't retrieve accounts");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
    var patron = /^(\d+|\d+.\d+)$/;
    return patron.test(str);
  }

  const submitCreateAccount = async () => {
    let accountNum = document.getElementById("an-input").value;
    let moneyAccount = document.getElementById("c-input").value;
    let accountName = document.getElementById("ana-input").value;
    if (
      accountNum !== "" &&
      moneyAccount !== "" &&
      accountName !== "" &&
      onlyNumbers(moneyAccount)
    ) {
      setShowInputs(false);
      setButtonText("Create Account");

      try {
        const response = await fetch(
          "http://localhost:9091/api/bank/create",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              accountName: accountName,
              accountNum: accountNum,
              moneyAccount: moneyAccount,
              userName: localStorage.getItem("generalUserName"),
            }),
          }
        );
        if (response.ok) {
          getAccounts();
        }
      } catch (error) {
        console.log("ERROR: FETCH UNREALIZED: " + error);
      }
    }
    getAccounts();
    window.location.reload(); //Recharge the page to update the balance.
  };

  const deleteAccount = async (id) => {
    try {
        const response = await fetch(`http://localhost:9091/api/bank/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          userName: localStorage.getItem("generalUserName"), 
        })
      });
      console.log(response.ok)
      if (response.ok) {
        const finalResponse = await response.json();
        setAccounts(finalResponse);
      } else {
        alert("Couldn't erase");
      }
    } catch (error) {
      console.log(error);
    }
    getAccounts();
  };

  useEffect(() => {
    getAccounts();
  }, []);

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
              <div className="headerdosup">
                <h2 className="headerdos">Bank Accounts</h2>
              </div>
              <div className="headerdosmedium">
                <div className="headerdosdown" id="miDiv">
                  {accounts.length <= 0 ? (
                    <div className="p-button">
                      <p>No available accounts</p>
                    </div>
                  ) : (
                    accounts.map((account, index) => {
                      return (
                        <div
                          className="p-button"
                          key={account.accountName + index}
                        >
                          <p>{`${account.accountName} - ${account.accountNum} - ${account.moneyAccount}`}</p>
                          <button
                            type="button"
                            className="delete"
                            onClick={() => deleteAccount(account.id)}
                          >
                            Delete Account
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
            <div className="Der">
              <button type="button" className="create" onClick={createAccount}>
                {buttonText}
              </button>
              {showInputs && (
                <div className="input-container">
                  <div>
                    <p>Account Name:</p>
                    <input
                      type="text"
                      placeholder="Account Name"
                      id="ana-input"
                      className="an-input miniinput"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div>
                    <p>Account Number:</p>
                    <input
                      type="text"
                      placeholder="Account Number"
                      id="an-input"
                      className="an-input miniinput"
                      autoComplete="off"
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
                      autoComplete="off"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={submitCreateAccount}
                    className="button-create-thing"
                  >
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
