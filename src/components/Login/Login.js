import React from "react";
import "./Login.css";
import { useNavigate } from "react-router";

const LoginComponent = (props) => {
  const navigate = useNavigate();

  const getUsers = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://10.33.146.143:9091/api/user/login`, {
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
      localStorage.setItem("generalUserName", e.target.username.value);
      localStorage.setItem("generalPassword", e.target.password.value);
      navigate("/principal");
    } else {
      alert("Couldn't login");
    }
  };

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
          <div className="user-box">
            <input
              id="inputUser"
              type="text"
              name="username"
              required=""
            ></input>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              id="inputPwd"
              type="password"
              name="password"
              required=""
            ></input>
            <label>Password</label>
          </div>
          <button className="pseudo-button" type="submit">
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
