import React from 'react';
import axios from 'axios';
import { AiFillPlusCircle } from 'react-icons/ai';
import './fileUpload.css'


const FileUpload = function ({ files, setFiles, removeFile }) {

    const handleChange = (e) => {

        var inputElement = document.getElementById("inputid")
        console.log(inputElement)
        console.log(e)

        console.log(e.target.files[0]);
        const file = e.target.files[0];
        file.isUploading = true;
        setFiles([...files, file.name])

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

    // const clearCookie = (e) => {
    //     e.preventDefault()
    //     document.cookie = `isLogin=false;`;
    //     window.location.reload()
    // }


    return (
        <><hr className='line'></hr>
            <div id="outerdiv" className='file-card'>
                <div id="innerdiv" className='file-inputs'>
                    <div id='div1'>
                        <input id="inputid" type='file' onChange={handleChange} />
                    </div>
                    <div id='div2'>
                        <button className='btn2'>
                            <AiFillPlusCircle className='circle' />
                            Click here to upload a new file
                        </button>
                    </div>
                    {/* <button onClick={clearCookie}>Log Out</button> */}
                </div>
            </div>
            {/* <hr className='line'></hr> */}
        </>
    )
}

export default FileUpload