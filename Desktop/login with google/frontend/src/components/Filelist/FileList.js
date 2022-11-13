import React, { useEffect } from "react";
import axios from "axios";
import FileItem from "./../fileItems/FileItem";
import FileDownloader from 'js-file-downloader';


const FileList = ({ files, removeFile, setFiles }) => {


    const deleteFileHandler = (_name) => {

        console.log(_name)
        axios.delete('http://localhost:5040/files', {
            params: {
                fileName: _name
            },
        }).then((res) => {

            removeFile(_name)
        }).catch((err) => {
            console.error(err)
            alert('Failed to remove file from server.')
        });
    }

    const downloadFileHandler = (_name) => {


        axios({
            url: "http://localhost:5040/files/" + _name,
            method: "get",
            resposnseType: "application/octet-stream"
        }).then((res) => {
            console.log('123456' + res)
            FileDownloader(res.data)
            console.log('downloaded')
        }).catch((err) =>{

        })
    }

    useEffect(() => {
        console.log('list file func called')
        console.log("3akkad bakkad bombay boakkad bakkad bombay boakkad bakkad bombay boakkad bakkad bombay bo")
        axios.get('http://localhost:5040/files')
            .then((res) => {
                console.log("akkad bakkad bombay boakkad bakkad bombay boakkad bakkad bombay boakkad bakkad bombay bo")
                console.log(res)
                var array = res.data.split(',')
                console.log("heiurhgeurghilusehrrilghweli")
                console.log(array)
                setFiles(array)
            }).catch((err) => {
                console.log("2akkad bakkad bombay boakkad bakkad bombay boakkad bakkad bombay boakkad bakkad bombay bo")
                console.error(err)
                alert('List not found.')
            });
    }, [])


    return (
        <ul className="file-list">
            {
                files &&
                files.map(f => (<FileItem
                    key={f}
                    fileName={f}
                    deleteFile={deleteFileHandler}
                    downloadFile={downloadFileHandler}
                />))
            }
        </ul>
    )
}

export default FileList