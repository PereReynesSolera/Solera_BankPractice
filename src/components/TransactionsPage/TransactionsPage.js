import { useEffect, useState } from "react";
import "./TransactionsPage.css";

const TransactionsPage = ()=> {
  const token = localStorage.getItem("generalToken");
  const [transactions, setTransactions] = useState([]);
  const [sentTransactions, setSentTransactions] = useState([]);
  const [recievedTransactions, setRecievedTransactions] = useState([]);
  const [selectElement, setSelectElement] = useState('all'); // Estado para el elemento seleccionado

    const getAllTransactions = async () => {
        try {
          const response = await fetch(
            `http://localhost:9091/api/transaction/all`, {
              method: "GET",
              headers: {
                "Authorization": `Bearer ${token}`, 
                "Content-Type": "application/json" 
              },
            }
          );
          if (response.ok) {
            const finalResponse = await response.json();
            setTransactions(finalResponse);
            console.log(finalResponse)
          } else {
            alert("Couldn't get transactions");
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      const getSentTransactions = async () => {
        try {
          const response = await fetch(
            `http://localhost:9091/api/transaction/user/sent`, {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json" // Agregar este encabezado para indicar el tipo de contenido
            },
              body: localStorage.getItem("generalUserName"),
            });
          if (response.ok) {
            const finalResponse = await response.json();
            setSentTransactions(finalResponse);
          } else {
            alert("Couldn't get the sent transactions");
          }
        } catch (error) {
          console.log(error);
        }
      };

      const getRecievedTransactions = async () => {
        try {
          const response = await fetch(
            `http://localhost:9091/api/transaction/user/received`,
            {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${token}`, 
                "Content-Type": "application/json" 
              },
              body: localStorage.getItem("generalUserName"),
            }
          );
          if (response.ok) {
            const finalResponse = await response.json();
            setRecievedTransactions(finalResponse);
          } else {
            alert("Couldn't get the recieved transactions");
          }
        } catch (error) {
          console.log(error);
        }
      };

      const chooseTransaction = async (optionTransaction) => {
        switch (optionTransaction) {
            case "all":
                getAllTransactions();
                setSelectElement(optionTransaction);
                break;
            case "sent":
                getSentTransactions();
                setSelectElement(optionTransaction);
                break;
            case "recieved":
                getRecievedTransactions();
                setSelectElement(optionTransaction);
                break;
            default: 
            getAllTransactions();
            setSelectElement(optionTransaction);
            break;
        }
    }

    useEffect(() => {
      chooseTransaction("all");
    }, []);

  const transactionsToShow =
    selectElement === 'recieved'
      ? recievedTransactions
      : selectElement === 'sent'
      ? sentTransactions
      : transactions;

  return (
    <div className="home-trasaction-general">
      <div className="side-select">
        <select
          id="select-transaction"
          className="menu"
          onChange={(event) => chooseTransaction(event.target.value)}
          value={selectElement} // Asegúrate de establecer el valor seleccionado
        >
          <option value="all">All Transactions</option>
          <option value="sent">Sent Transactions</option>
          <option value="recieved">Received Transactions</option>
        </select>
      </div>
      <div className="container-table-transaction">
        <table className="table-fill">
          <thead>
            <tr>
              <th className="text-left">User Name & Bank Account Sender</th>
              <th className="text-left">User Name & Bank Account Receiver</th>
              <th className="text-left">Money Amount</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {transactionsToShow.map((trans, index) => (
              <tr key={index}>
                <td className="text-left">{`${trans.userSenderName} ${trans.bankAccountSenderName}`}</td>
                <td className="text-left">{`${trans.userReceiverName} ${trans.bankAccountReceiverName}`}</td>
                <td className="text-left">{`${trans.balance}`}€</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionsPage;