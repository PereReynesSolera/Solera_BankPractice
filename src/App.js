import Form from './components/Register/Form';
import Principal from './components/Principal/Principal';
import Login from './components/Login/Login';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}/>
          <Route path="/principal" element={<Principal />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
