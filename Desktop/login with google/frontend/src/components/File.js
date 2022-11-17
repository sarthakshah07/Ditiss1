import React, { useState } from "react";
import {AiOutlinePoweroff} from "react-icons/ai"
import FileUpload from "./fileUpload/FileUpload";
import FileList from "./Filelist/FileList";
import './file.css';
//import"./loginform.css";


const File = (() => {
    const [files, setFiles] = useState([]);

    const removeFile = (filename) => {
        setFiles(files.filter(file => file !== filename))
    }
    const clearCookie = (e) => {
        e.preventDefault()
        document.cookie = `isLogin=false;`;
        window.location.reload()
    }

    return (
        <div className="App">
            <div className="header">
                <p className="title">File Manager</p>
                <button onClick={clearCookie} className="logout"><AiOutlinePoweroff className="poweri"/>Log Out</button>
            </div>
            {/* <div>
            
            </div> */}
            <div>
                <FileUpload files={files} setFiles={setFiles}
                    removeFile={removeFile} />
            </div>
            <div className="App2">
                <FileList files={files} removeFile={removeFile} setFiles={setFiles} />
            </div>
        </div>
    )

});
export default File