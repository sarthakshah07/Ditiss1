import React from "react";
import './FileItem.css';
import{ AiOutlineDownload,AiFillFile,AiFillDelete,AiOutlineLoading} from 'react-icons/ai';
import {FaSpinner} from 'react-icons/fa';

const FileItem = ({fileName, deleteFile, downloadFile})=>{
console.log(fileName.substring(0,30)+'...');
//key={file.name}
    
    return(
       <li className="list-item">
        <div className="actions">
            <div className="l1">
            <AiFillFile/>
            </div>
            
            <div className="FileName">
                <a href={"http://localhost:5040/files/" + fileName} download>{fileName.substring(0,30)+'...' }</a>
            </div>
            <div className="nam">
            { 
            <AiFillDelete 
            onClick={()=> deleteFile(fileName)}  className='del' />
            }
            </div>
            <div className="down">
            <a href={"http://localhost:5040/files/" + fileName} download><AiOutlineDownload/></a>
            </div>
        </div>
       </li>
    )
}
export default FileItem