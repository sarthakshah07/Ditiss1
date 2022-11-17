import React from "react";
import Login from "./components/login/Login";
import File from "./components/File";
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'


const auth = () => {
    let x = document.cookie

    try {
        let bool = x.split("=")[1]
        console.log(bool)
        if (bool == "true") return true
        else
            return false

    } catch (err) {
        return false;
    }


}

const isAuth = auth();

function App() {

    return (
        <BrowserRouter>
            <div className="page">
                <Routes>
                    <Route path='/' element={isAuth ? <File /> : <Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App