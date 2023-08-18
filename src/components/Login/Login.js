import React from "react";
import "./Login.css";
import { useNavigate } from "react-router";

const LoginComponent = (props) => {
  const navigate = useNavigate();

  const getUsers = async (e) => {

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "" || password === "") {
      alert("Username and Password must be filled");
      return; // Stops the execution flow
    }

    e.preventDefault();
    
    const response = await fetch(`http://localhost:9091/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    if (response.ok) {
      const data = await response.json(); // Convertir la respuesta JSON
      const token = data.token; // Obtener el valor del token
      localStorage.setItem("generalToken", token);
      localStorage.setItem("generalUserName", e.target.username.value);
      localStorage.setItem("generalPassword", e.target.password.value);
      navigate("/homepage");
    } else {
      alert("Couldn't login");
    }
  }  

  const travel = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div>
        <h1 className="ppl-title">Crypto Bank</h1>
      </div>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={getUsers}>
          <div className="user-box" id="inputUserContainer">
            <input
              id="inputUser"
              type="text"
              name="username"
              required=""
            ></input>
            <label>Username</label>
          </div>
          <div className="user-box" id="inputPwdContainer">
            <input
              id="inputPwd"
              type="password"
              name="password"
              required=""
            ></input>
            <label>Password</label>
          </div>
          <button className="pseudo-button" type="submit" id="logginBtn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
      <button className="loggeo pseudo-button" type="submit" onClick={travel}>
        Not an ACCOUNT?
      </button>
    </div>
  );
};

export default LoginComponent;
