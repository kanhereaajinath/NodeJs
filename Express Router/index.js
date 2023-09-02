const express = require('express');
const app = express();
const cors = require('cors');
const obj=require('./Middlwarelogic')//This line imports a module named 'Middlewarelogic' from the local file system. The variable obj now holds the exported contents of that module.
app.use('/student',obj)//This code applies the middleware contained in the obj module to a specific route in your Express.js application. The route in this case is 'student'. It means that the middleware will be executed for all HTTP requests that match the path /student or any subpaths under it.

app.use(cors());
app.use(express.json());
app.use('/sudent',obj)
const PORT=3002

app.listen(PORT,()=>{
    console.log("server Start with the port no 3002")
})