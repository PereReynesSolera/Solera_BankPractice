import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router';

const LoginComponent = () => {

    const navigate = useNavigate();

    const getUsers = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:9091/infobank`, {
              method: "GET",
            });
      
            const finalResponse = await response.json();
            console.log(finalResponse)
            
            if((finalResponse[0].userName === document.getElementById("inputUser").value) && (finalResponse[0].password === document.getElementById("inputPwd").value)){
                navigate("/principal");
                console.log(finalResponse);
            }else{
                alert("User and Password don't match");
            }
          } catch (error) {
            console.error(error);
          }
    }
    
    const travel = () => {
        navigate("/");
    }

    return (
        <div className="container">
            <div>
                <h1 className='ppl-title'>Crypto Bank</h1>
            </div>
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={getUsers}>
                    <div className="user-box">
                        <input id="inputUser" type="text" name="" required=""></input>
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input id="inputPwd" type="password" name="" required=""></input>
                        <label>Password</label>
                    </div>
                    <button className='pseudo-button' type='submit'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </button>
                </form>
            </div>
            <button className='loggeo pseudo-button' type='submit' onClick={travel}>Not an ACCOUNT?</button>
        </div>
    );
};

export default LoginComponent;
