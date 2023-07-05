import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router';

const LoginComponent = () => {

    const navigate = useNavigate();

    const naving = () => {
        navigate("/principal");
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
                <form onSubmit={naving}>
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
