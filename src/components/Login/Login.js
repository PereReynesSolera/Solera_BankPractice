import React from 'react';
import './Login.css';

const LoginComponent = () => {

    const checkUserPassword = () => {
        
    }


    return (
        <div className="container">
            <div>
                <h1 className='ppl-title'>Crypto Bank</h1>
            </div>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input id="inputUser" type="text" name="" required=""></input>
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input id="inputPwd" type="password" name="" required=""></input>
                        <label>Password</label>
                    </div>
                    <a className='pseudo-button' href='http://localhost:3000/principal'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;
