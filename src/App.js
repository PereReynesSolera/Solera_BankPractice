import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form from './components/Register/Form';
import Principal from './components/Principal/Principal';
import Login from './components/Login/Login';
import BankAccounts from './components/Bank_Accounts/BankAccounts'
import HomePage from './components/HomePage/HomePage';
import Notifications from './components/Notifications/Notifications';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}/>
          <Route path="/homepage" element={<HomePage />}/>
          <Route path="/principal" element={<Principal />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/notifications" element={<Notifications />}/>
          <Route path="/accounts" element={<BankAccounts />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
