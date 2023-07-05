import React from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {

    const navigate = useNavigate();

    const usernameRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*\d).{9,32}$/;

    let userBool = false
    let pwdBool = false;
    let userContent = "";
    let pwdContent = "";

    const regexCheck = (id, content) => {

        switch (id) {
            case 1:
                userContent = content;
                userBool = usernameRegex.test(userContent);
                break;
            case 2:
                pwdContent = content;
                pwdBool = passwordRegex.test(pwdContent);
                break;
            default:
                console.log("Error, not possible id, check regexCheck function");
                break;
        } 
    };

    const inputToJSON = async (e) => {
        e.preventDefault();
        let JSONformat = null;
        if((userBool && pwdBool) && (document.getElementById("inputConfirmPassword").value && pwdContent)){
            let firstName = document.getElementById("inputFirstName").value;
            let lastName = document.getElementById("inputLastName").value;
            let post = {
                firstName: firstName,
                lastName: lastName,
                userName: userContent,
                password: pwdContent,
                image: "",
            }

            JSONformat = JSON.stringify(post);
        }

        try {
            const response = await fetch(`https://localhost:9091/infobank`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSONformat,
            });

            const responseData = await response.json();
            console.log(responseData);
        
            navigate("/principal");
          } catch (error) {
            navigate("/");
            console.error("Error: " + error);
          }
    }

    return (
        <div className="container">
            <div>
                <h1 className='ppl-title'>Crypto Bank</h1>
            </div>
            <div className="login-box">
                <h2>Sign Up</h2>
                <form onSubmit={inputToJSON}>
                    <div className="user-box">
                        <input type="text" name="" required="" id='inputFirstName'></input>
                        <label>First Name</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" required="" id='inputLastName'></input>
                        <label>Last Name</label>
                    </div>
                    <div className="user-box">
                        <input id="inputUser" type="text" name="" required="" onChange={() => regexCheck(1, document.getElementById("inputUser").value)}></input>
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input id="inputPwd" type="password" name="" required="" onChange={() => regexCheck(2, document.getElementById("inputPwd").value)}></input>
                        <label>Password</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required="" id='inputConfirmPassword'></input>
                        <label>Confirm Password</label>
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
        </div>
    );
};

export default FormComponent;
