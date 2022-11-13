import React, { useState } from "react";

import FileUpload from "./fileUpload/FileUpload";
import FileList from "./Filelist/FileList";
import './file.css';
//import"./loginform.css";


const File = (() => {
    const [files, setFiles] = useState([]);

    const removeFile = (filename) => {
        setFiles(files.filter(file => file !== filename))
    }

return (
    <div className="App">
        <div>
            <p className="title">Upload File</p>

            <div>
                <FileUpload files={files} setFiles={setFiles}
                    removeFile={removeFile} />
            </div>
        </div>
        <div className="App2">
            <FileList files={files} removeFile={removeFile} setFiles={setFiles} />
        </div>
    </div>
)

});
export default File