


const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
var formidable = require('formidable');
var fs = require('fs');
const { query } = require('express');
const JSON = require('express');



app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'App'));
});

app.post("/files", (req, res) => {
  // use modules such as express-fileupload, Multer, Busboy

  console.log(req)

  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    console.log('yessssssssssssssssssssssssss');
    console.log(files);
    var oldpath = files.srkfieldname.filepath;
    console.log(oldpath);
    var newpath = 'C:/Users/LENOVO/Desktop/login with google/frontend/protected/' + files.srkfieldname.originalFilename;
    console.log(newpath);
    fs.rename(oldpath, newpath, function (err) {
      if (err) {
        console.log(err);
        res.write('Failed to save the file in directory');
        res.statusCode = 500
        res.end();
        return
      }
      res.write('File uploaded and moved!');
      res.end();
    });
  });
  // setTimeout(() => {
  //     console.log('file uploaded\n')
  //     console.log( 'req = ', req);
  //     var x = res.status(200).json({ result: true, msg: 'file uploaded' });
  //     console.log( 'x = ', x);
  //     return x;
  // }, 3000);

});

app.delete("/files", (req, res) => {
  console.log('nooooooooooooooooooooooooooooooooo');
  var newP = 'C:/Users/LENOVO/Desktop/login with google/frontend/protected/' + req.query.fileName;
  console.log(req.query.fileName)
  // Delete usinn name/query
  fs.unlink(newP, function (err) {
    if (err) {
      console.log(err);
      res.write('Failed to delete the file from directory');
      res.statusCode = 500
      res.end();
      return
    }
    res.write('File is removed from directory');
    res.end();
  })
});

app.get("/files", (req, res) => {
  console.log('nsadfihnedghedfghodfjhefugoeuifhgooooooooooooooooooooooooooooooooo');
  var newP = 'C:/Users/LENOVO/Desktop/login with google/frontend/protected/';

  fs.readdir(newP, function (err, fileNames) {
    console.log(err)
    if (err) {
      console.log(err);
      res.write('Failed to read the list of files saved at server side');
      res.statusCode = 500
      res.end();
      return
    }

    console.log(fileNames)
    // var arr = JSON.stringify(fileNames)
    var data = fileNames.toString()
    res.write(data);
    res.end();
  })
});

app.get("/files/:fileName", (req, res) => {
  console.log('klwebrfwlerbvkbwlebrilbwlierbilbwierflibeirbfliwbeilrbfliwebrilr');
  var newP = 'C:/Users/LENOVO/Desktop/login with google/frontend/protected/'+ req.params.fileName;
  console.log("Received request to download the file " + req.params.fileName)
  fs.readFile(newP, null, function (err,data) {
    if (err) {
      console.log(err);
      res.write('Failed to read the contents of requested file');
      res.statusCode = 500
      res.end();
      return
    }
    res.write(data);
    res.end();
  });

});

app.listen(5040);