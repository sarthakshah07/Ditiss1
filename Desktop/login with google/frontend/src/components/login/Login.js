import React from "react";
import './Login.css';
import {FcGoogle} from 'react-icons/fc';





function Login() {
    return (
        <div className="m">
            <form className="f">
            <h1>LOGIN </h1>
            <input type='text ' placeholder="ENTER EMAIL / NAME" />
            <input type= 'text' placeholder="PASSWORD"/>
            <a type="button">SIGN IN</a>
            <hr ></hr>
            <p >OR SIGN IN AS</p>
            <button className="bt"><FcGoogle /> Google</button>

            </form>
        </div>
    );
}

export default Login