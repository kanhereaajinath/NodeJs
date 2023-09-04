const express=require('express')
const app=express()
let cors=require('cors')
app.use(cors())
app.use(express.json())
const upload=require('./upload')
const path=require('path')
const fs= require('fs')//it is use to perform various file-related operations like reading, writing, and manipulating files.
app.post('/upload',upload.single('file'),(req,res)=>{
    res.json({Message:"file is uploaded"})
})//this function is use to upload the file
app.get('/download',(req,res)=>{
    const file=`${__dirname}/uploads/impnote pcm.pdf`//path of the file which we want store the file in the our folder 
    res.download(file)
    //this function is use to downlaod the file using the this method 
})
app.get('/getUploadedFiles', (req, res) => {
    const uploadDirectory = path.join(__dirname, 'uploads');
     //uploadDirectory: This is the path to the directory that you want to read. You need to provide the path as a string.
  
    fs.readdir(uploadDirectory, (err, files) => {// The readdir method is used to read the contents of a directory

        const fileData = files.map((file) => ({
          name: file,
         size: fs.statSync(path.join(uploadDirectory, file)).size, //fs.statSync(...): This is calling the synchronous version of the fs.stat method. The fs.stat method is used to retrieve information about a file, such as its size, modification date, and more.
        }));//This code is useful for obtaining an array of file information, which can be used for various purposes, such as displaying a list of files and their sizes or performing further operations on the files based on their attributes.

        res.json({ files: fileData });
      
    });
  });
  app.get('/download/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, 'uploads', fileName);
  
    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to download file' });
      }
    });
  });
app.listen(3002,()=>{
    console.log("exmple start with 3002")
})
