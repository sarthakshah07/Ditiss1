import React from "react";
import './FileItem.css';
import{ AiOutlineDownload,AiFillFile,AiFillDelete,AiOutlineLoading} from 'react-icons/ai';
import {FaSpinner} from 'react-icons/fa';

const FileItem = ({fileName, deleteFile, downloadFile})=>{

//key={file.name}
    
    return(
       <li className="list-item">
            
            <AiFillFile/>

            <div className="actions">
                <div className="FileName">
                    {fileName}
                </div>
                { 
                <AiFillDelete 
                onClick={()=> deleteFile(fileName)}  />
                }
                <a href={"http://localhost:5040/files/" + fileName} download><AiOutlineDownload/></a>
            </div>
       </li>
    )
}
export default FileItem