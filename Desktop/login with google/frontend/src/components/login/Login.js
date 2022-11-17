import React from "react";
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import File from "../File";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { auth, gProvider } from "./firebase.js"


function Login() {
    const navigate = useNavigate();
    const provideAuth = async (e) => {
        e.preventDefault()
        console.log("providing aurh")
        try {
            const res = await signInWithPopup(auth, gProvider)
            console.log(res.user)
            document.cookie = `isLogin=true;`;
            window.location.reload()
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="m">
            <form className="f" >
                <h1>Sign in to File Manager</h1>
                <input type='text ' placeholder="ENTER EMAIL / NAME" className="in" />
                <input type='text' placeholder="PASSWORD" className="in" />
                <a href="/File" className='anch' >Sign In</a>
                <hr ></hr>
                {/* <p >OR SIGN IN AS</p> */}
                <button className="bt" onClick={provideAuth} ><FcGoogle className="icon"/>Sign in using google</button>
            </form>
        </div>
    );
}

export default Login