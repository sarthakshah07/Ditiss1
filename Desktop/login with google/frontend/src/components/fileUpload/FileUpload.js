import React from 'react';
import axios from 'axios';
import {AiFillPlusCircle } from 'react-icons/ai';
import './fileUpload.css'


const FileUpload =  function({files, setFiles, removeFile}){

    const handleChange = (e) => {

        var inputElement = document.getElementById("inputid")
        console.log(inputElement)
        console.log(e)

        console.log(e.target.files[0]);
        const file = e.target.files[0];
        file.isUploading = true;
        setFiles([...files,file.name])

        // let file2 = inputElement.files[0];

        const formData = new FormData();
          formData.append(
            "srkfieldname",
            file,
            file.name
        )

        console.log(formData)
        axios.post('http://localhost:5040/files', formData)
        .then((res) => {
           file.isUploading = false;
           setFiles([...files, file.name])
        })
        .catch((err) => {
            // inform the user
            console.error(err)
            window.alert('Faild to save file on server.')
            removeFile(file.name)
            
        });
    }

    return (
        <>
            <div id="outerdiv" className='file-card'>
            <div id="innerdiv" className='file-inputs'>
            
            <input id="inputid" type='file' onChange={handleChange} />
                <button >
                    <AiFillPlusCircle />
                    Choose file to upload
                </button>
              
                
            </div>
        </div>
        </>
    )
}

export default FileUpload